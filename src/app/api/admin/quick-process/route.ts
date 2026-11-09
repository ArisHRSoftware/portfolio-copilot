import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database";
import { downloadAndParseFiling } from "@/lib/edgar/filing-parser";
import { extractTemplateData } from "@/lib/edgar/template-extractor";

export const maxDuration = 300;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabase = ReturnType<typeof createClient<any>>;

/**
 * Admin endpoint: quick-process all filings stuck at "Processing".
 *
 * Uses template extraction ONLY (no AI). Filings get real summaries
 * instantly. AI cron enhances them later.
 *
 * This endpoint is idempotent — running it twice won't duplicate or
 * overwrite existing data. Only touches filings where processed_at IS NULL.
 *
 * Auth: requires ADMIN_SECRET header.
 *
 * Usage: POST /api/admin/quick-process
 *   Body: { "batch_size": 50 }
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

  const db = createClient<Database>(supabaseUrl, supabaseKey) as AnySupabase;

  let body: { batch_size?: number } = {};
  try {
    body = await request.json();
  } catch {
    // defaults
  }

  const batchSize = Math.min(body.batch_size ?? 50, 100);

  // Fetch all unprocessed filings (processed_at IS NULL)
  const { data: unprocessed, error: fetchErr } = await db
    .from("filings")
    .select("id, accession_number, filing_type, filed_date, raw_url, company_id")
    .is("processed_at", null)
    .order("filed_date", { ascending: false })
    .limit(batchSize);

  if (fetchErr) {
    return Response.json({ error: fetchErr.message }, { status: 500 });
  }

  type FilingRow = {
    id: string; accession_number: string; filing_type: string;
    filed_date: string; raw_url: string; company_id: string;
  };
  const filings = (unprocessed ?? []) as FilingRow[];

  if (filings.length === 0) {
    return Response.json({
      success: true,
      message: "No unprocessed filings found",
      processed: 0,
      errors: 0,
      timestamp: new Date().toISOString(),
    });
  }

  // Pre-fetch all needed companies in one query
  const companyIds = [...new Set(filings.map((f) => f.company_id))];
  const { data: companies } = await db
    .from("companies")
    .select("id, name, ticker")
    .in("id", companyIds);

  type CompanyInfo = { id: string; name: string; ticker: string };
  const companyMap = new Map(
    ((companies ?? []) as CompanyInfo[]).map((c) => [c.id, c])
  );

  const results = {
    processed: 0,
    errors: 0,
    details: [] as Array<{ accession: string; status: string; summary?: string; error?: string }>,
  };

  // Process each filing with template extraction (no AI, very fast)
  for (const filing of filings) {
    try {
      const company = companyMap.get(filing.company_id);
      if (!company) {
        results.details.push({
          accession: filing.accession_number,
          status: "error",
          error: `Company not found (id=${filing.company_id})`,
        });
        results.errors++;
        continue;
      }

      // Download and parse filing text
      const filingText = await downloadAndParseFiling(filing.raw_url);

      // Extract template data (always succeeds — returns fallback on failure)
      const template = extractTemplateData(
        filingText, filing.filing_type, company.name, company.ticker, filing.filed_date
      );

      // Update filing with template data
      const { error: updateErr } = await db.from("filings").update({
        one_line_summary: template.one_line_summary,
        significance_score: template.significance_score,
        insider_data: template.insider_data
          ? (template.insider_data as unknown as Record<string, unknown>)
          : null,
        has_earnings_data: template.has_earnings_data,
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

      results.details.push({
        accession: filing.accession_number,
        status: "processed",
        summary: template.one_line_summary.slice(0, 80),
      });
      results.processed++;
    } catch (err) {
      results.details.push({
        accession: filing.accession_number,
        status: "error",
        error: err instanceof Error ? err.message : String(err),
      });
      results.errors++;
    }

    // Small delay to respect EDGAR rate limits on downloads
    await new Promise((r) => setTimeout(r, 150));
  }

  return Response.json({
    success: true,
    total_unprocessed: filings.length,
    ...results,
    timestamp: new Date().toISOString(),
  });
}
