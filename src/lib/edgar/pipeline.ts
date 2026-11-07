import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database";
import { pollEdgarRss, type EdgarFiling } from "./rss-poller";
import { downloadAndParseFiling } from "./filing-parser";
import {
  analyzeFilingWithClaude,
  RateLimitError,
  type AnalysisResult,
} from "./ai-analysis";
import { onFilingProcessed } from "@/lib/seo/revalidate-cascade";
import { evaluateAlertRules } from "@/lib/alert-engine";
import { deliverWebhooks } from "@/lib/webhook-delivery";
import { sendFilingAlert, type FilingEmailData } from "@/lib/resend";
import type { Filing, Company } from "@/lib/supabase/queries";
import { checkCostAlert } from "@/lib/claude-cost";

type FilingsRow = Database["public"]["Tables"]["filings"]["Row"];
type CompaniesRow = Database["public"]["Tables"]["companies"]["Row"];

// Use 'any' for the Supabase client to work around the @supabase/supabase-js
// generic inference bug where Tables resolve to 'never' when the Database type
// has empty Views/Functions/Enums. The actual data shapes are validated at the
// call sites via our own typed interfaces.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabase = SupabaseClient<any>;

/**
 * Max filings to analyze per run.
 * Groq free tier: 30 RPM, 14,400 RPD → 10/run is comfortable.
 * Gemini free tier: 5 RPM, 20 RPD → auto-reduced to 2 when no GROQ_API_KEY.
 */
const DEFAULT_BATCH = process.env.GROQ_API_KEY ? "8" : "2";
const BATCH_SIZE = parseInt(process.env.EDGAR_BATCH_SIZE || DEFAULT_BATCH, 10);

/** Delay between AI calls: 3s for Groq (30 RPM), 15s for Gemini (5 RPM) */
const INTER_CALL_DELAY_MS = process.env.GROQ_API_KEY ? 3_000 : 15_000;

/**
 * Filing type priority for analysis ordering.
 * Lower number = higher priority = analyzed first.
 */
const FILING_TYPE_PRIORITY: Record<string, number> = {
  "10-K": 1,
  "10-Q": 2,
  "8-K": 3,
  "DEF 14A": 4,
  "13F-HR": 5,
  "SC 13D": 6,
  "SC 13G": 7,
  "4": 8,
};

/**
 * Result of a single pipeline run.
 */
export interface PipelineRunResult {
  pipeline_run_id: string;
  filings_processed: number;
  errors_count: number;
  status: "completed" | "failed";
}

/**
 * Generate a URL-safe slug from filing metadata.
 */
function generateFilingSlug(
  ticker: string,
  filingType: string,
  filedDate: string,
  accession: string
): string {
  const typePart = filingType
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-");
  const datePart = filedDate.slice(0, 10);
  const accessionSuffix = accession.slice(-6);
  return `${ticker.toLowerCase()}-${typePart}-${datePart}-${accessionSuffix}`;
}

/**
 * Look up the company in the database by CIK number.
 * Returns the company row or null if not found.
 */
async function findCompanyByCik(
  supabase: AnySupabase,
  cik: string
): Promise<CompaniesRow | null> {
  // Pad CIK to 10 digits with leading zeros (EDGAR standard)
  const paddedCik = cik.padStart(10, "0");

  const { data } = await supabase
    .from("companies")
    .select("*")
    .or(`cik_number.eq.${paddedCik},cik_number.eq.${cik}`)
    .limit(1)
    .single();

  return (data as CompaniesRow | null) ?? null;
}

/**
 * Find a company by CIK, or auto-create it from EDGAR filing metadata.
 * Returns the company row (existing or newly created).
 */
async function findOrCreateCompany(
  supabase: AnySupabase,
  filing: EdgarFiling
): Promise<CompaniesRow> {
  const existing = await findCompanyByCik(supabase, filing.company_cik);
  if (existing) return existing;

  const paddedCik = filing.company_cik.padStart(10, "0");
  const ticker = filing.company_ticker || `CIK${filing.company_cik}`;
  const name = filing.company_name || `Company ${filing.company_cik}`;

  const { data: created, error } = await supabase
    .from("companies")
    .insert({
      ticker,
      name,
      cik_number: paddedCik,
      sector: "",
      exchange: "",
      market_cap: 0,
      status: "active",
    })
    .select()
    .single();

  if (error) {
    // Race condition: another run may have created it between our check and insert
    if (error.code === "23505") {
      const retry = await findCompanyByCik(supabase, filing.company_cik);
      if (retry) return retry;
    }
    throw new Error(`Failed to create company ${ticker}: ${error.message}`);
  }

  return created as CompaniesRow;
}

/**
 * Store a processed filing in the database.
 */
async function storeFiling(
  supabase: AnySupabase,
  filing: EdgarFiling,
  company: CompaniesRow,
  analysisResult: AnalysisResult
): Promise<FilingsRow> {
  const { analysis, usage } = analysisResult;

  const slug = generateFilingSlug(
    company.ticker,
    filing.filing_type,
    filing.filed_date,
    filing.accession_number
  );

  const filingInsert = {
    company_id: company.id,
    slug,
    filing_type: filing.filing_type,
    filed_date: filing.filed_date,
    accession_number: filing.accession_number,
    raw_url: filing.filing_url,
    significance_score: analysis.significance_score,
  };

  const { data: inserted, error: insertError } = await supabase
    .from("filings")
    .insert(filingInsert)
    .select()
    .single();

  if (insertError || !inserted) {
    throw new Error(`Failed to insert filing: ${insertError?.message ?? "no data returned"}`);
  }

  const insertedFiling = inserted as FilingsRow;

  // Update with AI analysis data
  const { error: updateError } = await supabase
    .from("filings")
    .update({
      ai_summary_json: analysis as unknown as Record<string, unknown>,
      ai_summary_prose: analysis.detailed_summary,
      one_line_summary: analysis.one_line_summary,
      significance_score: analysis.significance_score,
      insider_data:
        analysis.insider_trades.length > 0
          ? (analysis.insider_trades as unknown as Record<string, unknown>)
          : null,
      has_earnings_data:
        analysis.earnings_impact.revenue_change !== null ||
        analysis.earnings_impact.eps_change !== null,
      input_tokens: usage.input_tokens,
      output_tokens: usage.output_tokens,
      processed_at: new Date().toISOString(),
    })
    .eq("id", insertedFiling.id);

  if (updateError) {
    throw new Error(
      `Failed to update filing with analysis: ${updateError.message}`
    );
  }

  // Update company's last_filing_date
  await supabase
    .from("companies")
    .update({ last_filing_date: filing.filed_date })
    .eq("id", company.id);

  return { ...insertedFiling, significance_score: analysis.significance_score };
}

/**
 * Create a draft social post in the content_queue for high-significance filings.
 */
async function createDraftSocialPost(
  supabase: AnySupabase,
  filing: EdgarFiling,
  company: CompaniesRow,
  analysis: AnalysisResult["analysis"]
): Promise<void> {
  const post = {
    type: "social" as const,
    title: `${company.ticker}: ${analysis.one_line_summary}`,
    body: {
      filing_type: filing.filing_type,
      company_name: company.name,
      ticker: company.ticker,
      one_line_summary: analysis.one_line_summary,
      key_facts: analysis.key_facts,
      significance_score: analysis.significance_score,
      accession_number: filing.accession_number,
    },
    status: "draft" as const,
  };

  const { error } = await supabase.from("content_queue").insert(post);

  if (error) {
    // Non-fatal: log but don't fail the pipeline
    console.error(`Failed to create social post for ${company.ticker}:`, error.message);
  }
}

/**
 * Record a pipeline error in the database.
 */
async function recordPipelineError(
  supabase: AnySupabase,
  pipelineRunId: string,
  accession: string | null,
  error: Error
): Promise<void> {
  const errorInsert = {
    pipeline_run_id: pipelineRunId,
    filing_accession: accession,
    error_message: error.message.slice(0, 2000),
  };

  await supabase.from("pipeline_errors").insert(errorInsert);
}

/**
 * Process a single filing through the complete pipeline:
 * download -> parse -> analyze -> store -> optional social post -> revalidate
 */
async function processSingleFiling(
  supabase: AnySupabase,
  filing: EdgarFiling,
  pipelineRunId: string
): Promise<boolean> {
  try {
    // Find existing company or auto-create from EDGAR metadata
    const company = await findOrCreateCompany(supabase, filing);

    // Download and parse the filing text
    const filingText = await downloadAndParseFiling(filing.filing_url);

    if (filingText.length < 100) {
      throw new Error(
        `Filing text too short (${filingText.length} chars) — likely a download or parse failure`
      );
    }

    // Analyze with Claude
    const analysisResult = await analyzeFilingWithClaude(
      filingText,
      filing.filing_type,
      company.name,
      company.ticker
    );

    // Store in database
    const storedFiling = await storeFiling(
      supabase,
      filing,
      company,
      analysisResult
    );

    // Create draft social post if significance >= 8
    if (analysisResult.analysis.significance_score >= 8) {
      await createDraftSocialPost(
        supabase,
        filing,
        company,
        analysisResult.analysis
      );
    }

    // Cascade revalidation for affected pages
    await onFilingProcessed(storedFiling, company);

    // Evaluate alert rules and send notifications (non-blocking)
    try {
      const completeFiling = {
        ...storedFiling,
        ai_summary_prose: analysisResult.analysis.detailed_summary,
        one_line_summary: analysisResult.analysis.one_line_summary,
        insider_data:
          analysisResult.analysis.insider_trades.length > 0
            ? (analysisResult.analysis.insider_trades as unknown as Record<string, unknown>)
            : null,
      } as Filing;

      const typedCompany = company as Company;

      const matches = await evaluateAlertRules(completeFiling, typedCompany);

      if (matches.length > 0) {
        // Filter out users whose tier doesn't allow real-time alerts
        const allUserIds = [...new Set(matches.map((m) => m.userId))];
        const { data: subs } = await supabase
          .from("subscriptions")
          .select("user_id, plan")
          .in("user_id", allUserIds)
          .eq("status", "active");

        const activeSubs = new Map(
          ((subs ?? []) as Array<{ user_id: string; plan: string }>).map(
            (s) => [s.user_id, s.plan]
          )
        );

        // Only send real-time alerts to plus/pro users (delay=0)
        // Starter users (delay=60min) will receive alerts in their daily digest
        // Free users can't have rules, but filter defensively
        const userIds = allUserIds.filter((uid) => {
          const plan = activeSubs.get(uid) ?? "free";
          return plan === "plus" || plan === "pro";
        });

        if (userIds.length === 0) {
          // All matched users are on starter/free — skip real-time alerts
          await deliverWebhooks(completeFiling, typedCompany);
          return true;
        }

        // Look up emails for real-time eligible users (per-user, not bulk)
        const emailMap = new Map<string, string>();
        await Promise.all(
          userIds.map(async (userId) => {
            try {
              const { data: { user } } = await supabase.auth.admin.getUserById(userId);
              if (user?.email) emailMap.set(userId, user.email);
            } catch {
              // Skip users whose auth record can't be fetched
            }
          })
        );

        const filingEmailData: FilingEmailData = {
          ticker: typedCompany.ticker,
          companyName: typedCompany.name,
          filingType: filing.filing_type,
          filedDate: filing.filed_date,
          oneLiner: analysisResult.analysis.one_line_summary,
          slug: storedFiling.slug,
          significanceScore: analysisResult.analysis.significance_score,
        };

        // Send email alerts in parallel
        const emailResults = await Promise.allSettled(
          userIds.map((userId) => {
            const email = emailMap.get(userId);
            if (!email) return Promise.resolve();
            return sendFilingAlert(email, filingEmailData);
          })
        );

        // Record alerts in database
        const alertInserts = userIds
          .filter((userId) => emailMap.has(userId))
          .map((userId) => ({
            user_id: userId,
            filing_id: storedFiling.id,
            channel: "email" as const,
          }));

        if (alertInserts.length > 0) {
          await supabase.from("alerts").insert(alertInserts);
        }

        const sent = emailResults.filter(
          (r) => r.status === "fulfilled"
        ).length;
        console.log(
          `Alert notifications: ${sent}/${userIds.length} emails sent for ${typedCompany.ticker} ${filing.filing_type}`
        );
      }

      // Deliver webhooks (fire-and-forget)
      await deliverWebhooks(completeFiling, typedCompany);
    } catch (alertError) {
      // Alert/webhook failures must not break the pipeline
      console.error(
        "Alert notification error (non-blocking):",
        alertError instanceof Error ? alertError.message : "Unknown error"
      );
    }

    return true;
  } catch (error) {
    // Let RateLimitError propagate to stop the batch
    if (error instanceof RateLimitError) throw error;

    const err = error instanceof Error ? error : new Error(String(error));
    await recordPipelineError(
      supabase,
      pipelineRunId,
      filing.accession_number,
      err
    );
    console.error(
      `Error processing filing ${filing.accession_number}:`,
      err.message
    );
    return false;
  }
}

/**
 * Main pipeline orchestrator. Runs the complete EDGAR filing pipeline:
 *
 * 1. Poll EDGAR RSS for new filings
 * 2. Deduplicate against existing filings in the database
 * 3. For each new filing: download, parse, analyze with Claude, store
 * 4. Create draft social posts for high-significance filings
 * 5. Trigger cascade revalidation for affected pages
 * 6. Track pipeline_runs and pipeline_errors
 *
 * @param supabase - Authenticated Supabase client (service role)
 * @returns Pipeline run result with counts and status
 */
export async function processNewFilings(
  supabase: SupabaseClient<Database>
): Promise<PipelineRunResult> {
  // Cast once for all internal usage — see AnySupabase type doc above
  const db = supabase as AnySupabase;

  // Create pipeline run record
  const { data: pipelineRun, error: runError } = await db
    .from("pipeline_runs")
    .insert({ status: "running" })
    .select()
    .single();

  if (runError || !pipelineRun) {
    throw new Error(
      `Failed to create pipeline run: ${runError?.message ?? "unknown error"}`
    );
  }

  const runId = (pipelineRun as { id: string }).id;
  let filingsProcessed = 0;
  let errorsCount = 0;

  try {
    // Phase 1: Poll EDGAR for all new filings (paginated, deduped against DB)
    const newFilings = await pollEdgarRss(supabase);

    if (newFilings.length === 0) {
      await db
        .from("pipeline_runs")
        .update({
          completed_at: new Date().toISOString(),
          filings_processed: 0,
          errors_count: 0,
          status: "completed",
        })
        .eq("id", runId);

      return {
        pipeline_run_id: runId,
        filings_processed: 0,
        errors_count: 0,
        status: "completed",
      };
    }

    // Phase 2: Sort by priority (10-K first, Form 4 last) and take a batch
    const sorted = [...newFilings].sort((a, b) => {
      const pa = FILING_TYPE_PRIORITY[a.filing_type.toUpperCase()] ?? 5;
      const pb = FILING_TYPE_PRIORITY[b.filing_type.toUpperCase()] ?? 5;
      return pa - pb;
    });
    const batch = sorted.slice(0, BATCH_SIZE);

    console.log(
      `EDGAR pipeline: ${newFilings.length} new filings found, processing batch of ${batch.length} (priority: ${batch.map((f) => f.filing_type).join(", ")})`
    );

    // Phase 3: Process batch sequentially with delays between Gemini calls
    let rateLimitHit = false;
    for (let i = 0; i < batch.length; i++) {
      if (rateLimitHit) break;

      // Delay between filings to respect Gemini 5 RPM limit
      if (i > 0) {
        await new Promise((r) => setTimeout(r, INTER_CALL_DELAY_MS));
      }

      try {
        const success = await processSingleFiling(db, batch[i], runId);
        if (success) {
          filingsProcessed++;
        } else {
          errorsCount++;
        }
      } catch (err) {
        if (err instanceof RateLimitError) {
          console.log(`EDGAR pipeline: ${err.message} (${filingsProcessed} processed this run)`);
          rateLimitHit = true;
        } else {
          errorsCount++;
        }
      }
    }

    const status: "completed" | "failed" =
      errorsCount > 0 && filingsProcessed === 0 ? "failed" : "completed";

    await db
      .from("pipeline_runs")
      .update({
        completed_at: new Date().toISOString(),
        filings_processed: filingsProcessed,
        errors_count: errorsCount,
        status,
      })
      .eq("id", runId);

    // Check daily Claude API cost and alert admin if threshold exceeded
    if (filingsProcessed > 0) {
      try {
        await checkCostAlert();
      } catch (costErr) {
        console.error(
          "Cost alert check failed (non-blocking):",
          costErr instanceof Error ? costErr.message : "Unknown error"
        );
      }
    }

    return {
      pipeline_run_id: runId,
      filings_processed: filingsProcessed,
      errors_count: errorsCount,
      status,
    };
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    await recordPipelineError(db, runId, null, err);

    await db
      .from("pipeline_runs")
      .update({
        completed_at: new Date().toISOString(),
        filings_processed: filingsProcessed,
        errors_count: errorsCount + 1,
        status: "failed",
      })
      .eq("id", runId);

    return {
      pipeline_run_id: runId,
      filings_processed: filingsProcessed,
      errors_count: errorsCount + 1,
      status: "failed",
    };
  }
}
