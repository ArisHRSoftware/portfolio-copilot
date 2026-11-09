import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database";
import { downloadAndParseFiling } from "@/lib/edgar/filing-parser";
import {
  analyzeFilingWithClaude,
  RateLimitError,
} from "@/lib/edgar/ai-analysis";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabase = ReturnType<typeof createClient<any>>;

/** Delay between AI calls: 3s for Groq, 15s for Gemini */
const INTER_CALL_DELAY_MS = process.env.GROQ_API_KEY ? 3_000 : 15_000;

/**
 * Admin endpoint: reprocess all filings stuck with processed_at=null.
 *
 * Unlike the cron pipeline, this endpoint:
 * - Processes ONLY unanalyzed filings (no RSS polling)
 * - Uses a larger batch size (up to 50)
 * - Records errors per-filing so failures are visible
 * - Can optionally skip filings that previously errored
 *
 * Auth: requires ADMIN_SECRET header.
 *
 * Usage: POST /api/admin/reprocess
 *   Body: { "batch_size": 20, "skip_errored": false }
 */
export async function POST(request: Request): Promise<Response> {
  const adminSecret = process.env.ADMIN_SECRET;
  const providedSecret = request.headers.get("x-admin-secret");
  if (!adminSecret || providedSecret !== adminSecret) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return Response.json({ error: "Supabase not configured" }, { status: 500 });
  }

  if (!process.env.GROQ_API_KEY && !process.env.GOOGLE_API_KEY) {
    return Response.json(
      { error: "No AI API key configured (GROQ_API_KEY or GOOGLE_API_KEY)" },
      { status: 500 }
    );
  }

  const db = createClient<Database>(supabaseUrl, supabaseKey) as AnySupabase;

  let body: { batch_size?: number; skip_errored?: boolean } = {};
  try {
    body = await request.json();
  } catch {
    // defaults
  }

  const batchSize = Math.min(body.batch_size ?? 20, 50);
  const skipErrored = body.skip_errored ?? false;

  // Fetch unanalyzed filings
  let query = db
    .from("filings")
    .select("id, accession_number, filing_type, filed_date, raw_url, company_id")
    .is("processed_at", null)
    .order("filed_date", { ascending: false })
    .limit(batchSize);

  // Optionally exclude filings that already have pipeline errors
  if (skipErrored) {
    const { data: erroredAccessions } = await db
      .from("pipeline_errors")
      .select("filing_accession");

    if (erroredAccessions && erroredAccessions.length > 0) {
      const errored = new Set(
        (erroredAccessions as Array<{ filing_accession: string | null }>)
          .map((e) => e.filing_accession)
          .filter(Boolean) as string[]
      );
      // We'll filter after fetch since Supabase doesn't support NOT IN easily
      query = db
        .from("filings")
        .select("id, accession_number, filing_type, filed_date, raw_url, company_id")
        .is("processed_at", null)
        .order("filed_date", { ascending: false })
        .limit(batchSize + errored.size);
    }
  }

  const { data: unanalyzed, error: fetchErr } = await query;

  if (fetchErr) {
    return Response.json({ error: fetchErr.message }, { status: 500 });
  }

  type FilingRow = {
    id: string; accession_number: string; filing_type: string;
    filed_date: string; raw_url: string; company_id: string;
  };
  let pending = (unanalyzed ?? []) as FilingRow[];

  // Filter out previously errored filings if requested
  if (skipErrored && pending.length > 0) {
    const { data: erroredAccessions } = await db
      .from("pipeline_errors")
      .select("filing_accession");

    const errored = new Set(
      ((erroredAccessions ?? []) as Array<{ filing_accession: string | null }>)
        .map((e) => e.filing_accession)
        .filter(Boolean)
    );
    pending = pending.filter((f) => !errored.has(f.accession_number));
    pending = pending.slice(0, batchSize);
  }

  if (pending.length === 0) {
    return Response.json({
      success: true,
      message: "No unanalyzed filings to process",
      processed: 0,
      errors: 0,
      timestamp: new Date().toISOString(),
    });
  }

  const results = {
    processed: 0,
    errors: 0,
    rate_limited: false,
    details: [] as Array<{ accession: string; status: string; error?: string }>,
  };

  for (let i = 0; i < pending.length; i++) {
    if (results.rate_limited) break;

    if (i > 0) {
      await new Promise((r) => setTimeout(r, INTER_CALL_DELAY_MS));
    }

    const filing = pending[i];
    try {
      // Get company
      const { data: company } = await db
        .from("companies")
        .select("id, name, ticker")
        .eq("id", filing.company_id)
        .single();

      if (!company) {
        results.details.push({
          accession: filing.accession_number,
          status: "error",
          error: `Company not found (id=${filing.company_id})`,
        });
        results.errors++;
        continue;
      }

      const comp = company as { id: string; name: string; ticker: string };

      // Download and parse filing
      const filingText = await downloadAndParseFiling(filing.raw_url);
      if (filingText.length < 100) {
        results.details.push({
          accession: filing.accession_number,
          status: "error",
          error: `Filing text too short (${filingText.length} chars)`,
        });
        results.errors++;
        continue;
      }

      // AI analysis
      const analysisResult = await analyzeFilingWithClaude(
        filingText, filing.filing_type, comp.name, comp.ticker
      );

      // Update filing
      const { error: updateErr } = await db.from("filings").update({
        ai_summary_json: analysisResult.analysis as unknown as Record<string, unknown>,
        ai_summary_prose: analysisResult.analysis.detailed_summary,
        one_line_summary: analysisResult.analysis.one_line_summary,
        significance_score: analysisResult.analysis.significance_score,
        insider_data: analysisResult.analysis.insider_trades.length > 0
          ? (analysisResult.analysis.insider_trades as unknown as Record<string, unknown>)
          : null,
        has_earnings_data:
          analysisResult.analysis.earnings_impact.revenue_change !== null ||
          analysisResult.analysis.earnings_impact.eps_change !== null,
        input_tokens: analysisResult.usage.input_tokens,
        output_tokens: analysisResult.usage.output_tokens,
        processed_at: new Date().toISOString(),
      }).eq("id", filing.id);

      if (updateErr) {
        results.details.push({
          accession: filing.accession_number,
          status: "error",
          error: `DB update failed: ${updateErr.message}`,
        });
        results.errors++;
        continue;
      }

      await db.from("companies").update({ last_filing_date: filing.filed_date }).eq("id", comp.id);

      results.details.push({
        accession: filing.accession_number,
        status: "processed",
      });
      results.processed++;
    } catch (err) {
      if (err instanceof RateLimitError) {
        results.rate_limited = true;
        results.details.push({
          accession: filing.accession_number,
          status: "rate_limited",
          error: err.message,
        });
      } else {
        results.details.push({
          accession: filing.accession_number,
          status: "error",
          error: err instanceof Error ? err.message : String(err),
        });
        results.errors++;
      }
    }
  }

  return Response.json({
    success: true,
    total_pending: pending.length,
    ...results,
    timestamp: new Date().toISOString(),
  });
}
