import { createClient } from "@supabase/supabase-js";
import { verifyAdminHeader } from "@/lib/admin-auth";
import type { Database } from "@/lib/types/database";
import { sicToSector } from "@/lib/constants/sectors";
import { downloadAndParseFiling } from "@/lib/edgar/filing-parser";
import { extractTemplateData } from "@/lib/edgar/template-extractor";

export const maxDuration = 300;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabase = ReturnType<typeof createClient<any>>;

const EDGAR_USER_AGENT = "Brefyr admin@brefyr.com";
const EDGAR_SEARCH_BASE = "https://efts.sec.gov/LATEST/search-index";

/**
 * Dedicated Form 4 (insider trading) backfill endpoint.
 *
 * Why a separate endpoint? Form 4 is the highest-volume filing type on SEC
 * (~1,000-3,000/day) and the generic backfill endpoint:
 *   1. Competes Form 4 with all other types in a 500/call limit
 *   2. Doesn't do template extraction (leaves filings unprocessed)
 *   3. Relies on the pipeline to process, where Form 4 is lowest priority
 *
 * This endpoint fetches ONLY Form 4 from EDGAR, does template extraction
 * inline (no AI needed — regex extracts insider trade data), and handles
 * high volume with resumable pagination.
 *
 * Auth: requires ADMIN_SECRET header.
 *
 * Usage: POST /api/admin/backfill-form4
 *   Body: {
 *     "days": 30,           // How far back (max 90)
 *     "limit": 500,         // Max filings to ingest per call (max 2000)
 *     "edgar_offset": 0,    // EDGAR pagination offset for resumability
 *     "process": true       // Do template extraction (default true)
 *   }
 *
 * For full backfill: call repeatedly, incrementing edgar_offset by limit
 * until edgar_filings_found returns 0 or less than limit.
 */
export async function POST(request: Request): Promise<Response> {
  const startTime = Date.now();
  // Leave 30s buffer before Vercel timeout
  const DEADLINE_MS = (maxDuration - 30) * 1000;

  if (!verifyAdminHeader(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return Response.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseKey) as AnySupabase;

  let body: {
    days?: number;
    limit?: number;
    edgar_offset?: number;
    process?: boolean;
  } = {};
  try {
    body = await request.json();
  } catch {
    // defaults
  }

  const days = Math.min(Math.max(body.days ?? 30, 1), 90);
  const maxFilings = Math.min(Math.max(body.limit ?? 500, 1), 2000);
  const edgarOffset = Math.max(body.edgar_offset ?? 0, 0);
  const doProcess = body.process !== false;

  const results = {
    companies_created: 0,
    filings_ingested: 0,
    filings_processed: 0,
    filings_skipped: 0,
    errors: [] as string[],
    timed_out: false,
  };

  try {
    // ── Step 1: Build date range ────────────────────────────────────
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Skip weekends for start date
    const startDay = startDate.getUTCDay();
    if (startDay === 0) startDate.setDate(startDate.getDate() - 2);
    else if (startDay === 6) startDate.setDate(startDate.getDate() - 1);

    const startStr = startDate.toISOString().slice(0, 10);
    const endStr = endDate.toISOString().slice(0, 10);

    // ── Step 2: Fetch Form 4 only from EDGAR ────────────────────────
    const PAGE_SIZE = 100;
    const maxPages = Math.ceil(maxFilings / PAGE_SIZE) + 1;

    interface EdgarForm4 {
      accession_number: string;
      company_cik: string;
      company_name: string;
      company_ticker: string | null;
      company_sic: string | null;
      filed_date: string;
      filing_url: string;
    }

    const allFilings: EdgarForm4[] = [];
    const seenAccessions = new Set<string>();

    for (let page = 0; page < maxPages; page++) {
      if (allFilings.length >= maxFilings) break;

      // Time guard: stop fetching if approaching deadline
      if (Date.now() - startTime > DEADLINE_MS * 0.5) {
        results.timed_out = true;
        break;
      }

      const offset = edgarOffset + page * PAGE_SIZE;
      const url = `${EDGAR_SEARCH_BASE}?q=%22%22&forms=4&dateRange=custom&startdt=${startStr}&enddt=${endStr}&from=${offset}&size=${PAGE_SIZE}`;

      const res = await fetch(url, {
        headers: { "User-Agent": EDGAR_USER_AGENT, Accept: "application/json" },
      });

      if (!res.ok) {
        results.errors.push(`EDGAR page ${page} (offset ${offset}) failed: ${res.status}`);
        break;
      }

      const data = (await res.json()) as {
        hits?: {
          total?: { value?: number };
          hits?: Array<{ _id?: string; _source?: Record<string, unknown> }>;
        };
      };

      const total = data.hits?.total?.value ?? 0;
      const hits = data.hits?.hits ?? [];

      for (const hit of hits) {
        if (allFilings.length >= maxFilings) break;

        const source = hit._source;
        if (!source) continue;

        const adsh = (source.adsh as string) ?? "";
        const rawId = (hit._id as string) ?? "";
        const accession = adsh || rawId.split(":")[0];
        if (!accession || seenAccessions.has(accession)) continue;
        seenAccessions.add(accession);

        const displayNames = (source.display_names as string[]) ?? [];
        const ciks = (source.ciks as string[]) ?? [];
        const companyCik = ciks[0]?.replace(/^0+/, "") ?? "";
        const companyName = displayNames[0]?.split("(")[0]?.trim() ?? "";

        let companyTicker: string | null = null;
        if (displayNames[0]) {
          const matches = displayNames[0].match(/\(([^)]+)\)/g);
          if (matches) {
            for (const match of matches) {
              const inner = match.slice(1, -1).trim();
              if (!inner.startsWith("CIK")) {
                companyTicker = inner;
                break;
              }
            }
          }
        }

        const companySic = ((source.sics as string[]) ?? [])[0] ?? null;

        allFilings.push({
          accession_number: accession,
          company_cik: companyCik,
          company_name: companyName,
          company_ticker: companyTicker,
          company_sic: companySic,
          filed_date: (source.file_date as string) ?? "",
          filing_url: buildFilingUrl(accession),
        });
      }

      if ((page + 1) * PAGE_SIZE + edgarOffset >= total || hits.length === 0) break;
      await new Promise((r) => setTimeout(r, 120));
    }

    // ── Step 3: Deduplicate against existing DB filings ──────────────
    const existingSet = new Set<string>();
    const accessions = allFilings.map((f) => f.accession_number);

    for (let i = 0; i < accessions.length; i += 200) {
      const batch = accessions.slice(i, i + 200);
      const { data: existing } = await supabase
        .from("filings")
        .select("accession_number")
        .in("accession_number", batch);

      for (const row of (existing ?? []) as Array<{ accession_number: string }>) {
        existingSet.add(row.accession_number);
      }
    }

    const newFilings = allFilings.filter((f) => !existingSet.has(f.accession_number));

    // ── Step 4: Ingest + template extract ────────────────────────────
    for (const filing of newFilings) {
      // Time guard: stop if approaching deadline
      if (Date.now() - startTime > DEADLINE_MS) {
        results.timed_out = true;
        break;
      }

      try {
        // Find or create company
        const paddedCik = filing.company_cik.padStart(10, "0");
        let company: { id: string; ticker: string; name: string } | null = null;

        const { data: found } = await supabase
          .from("companies")
          .select("id, ticker, name")
          .or(`cik_number.eq.${paddedCik},cik_number.eq.${filing.company_cik}`)
          .limit(1)
          .single();

        if (found) {
          company = found as { id: string; ticker: string; name: string };
        } else {
          const ticker = filing.company_ticker || `CIK${filing.company_cik}`;
          const { data: created, error } = await supabase
            .from("companies")
            .insert({
              ticker,
              name: filing.company_name || `Company ${filing.company_cik}`,
              cik_number: paddedCik,
              sector: filing.company_sic ? sicToSector(filing.company_sic) : "",
              exchange: "",
              market_cap: 0,
              status: "active",
            })
            .select("id, ticker, name")
            .single();

          if (error) {
            if (error.code === "23505") {
              const { data: retry } = await supabase
                .from("companies")
                .select("id, ticker, name")
                .or(`cik_number.eq.${paddedCik},cik_number.eq.${filing.company_cik}`)
                .limit(1)
                .single();
              company = retry as { id: string; ticker: string; name: string } | null;
            }
            if (!company) {
              results.errors.push(`Company create failed ${filing.company_cik}: ${error.message}`);
              continue;
            }
          } else {
            company = created as { id: string; ticker: string; name: string };
            results.companies_created++;
          }
        }

        if (!company) continue;

        // Generate slug
        const datePart = filing.filed_date.slice(0, 10);
        const accSuffix = filing.accession_number.slice(-6);
        const slug = `${company.ticker.toLowerCase()}-4-${datePart}-${accSuffix}`;

        // Template extraction (if process=true and not approaching deadline)
        let templateData: {
          one_line_summary: string;
          significance_score: number;
          insider_data: unknown;
          has_earnings_data: boolean;
        } | null = null;

        if (doProcess && Date.now() - startTime < DEADLINE_MS * 0.85) {
          try {
            const filingText = await downloadAndParseFiling(filing.filing_url);
            if (filingText.length >= 50) {
              const template = extractTemplateData(
                filingText, "4", company.name, company.ticker, filing.filed_date
              );
              templateData = {
                one_line_summary: template.one_line_summary,
                significance_score: template.significance_score,
                insider_data: template.insider_data,
                has_earnings_data: template.has_earnings_data,
              };
            }
          } catch {
            // Template extraction failed — still ingest metadata
          }
        }

        // Insert filing
        const filingInsert: Record<string, unknown> = {
          company_id: company.id,
          slug,
          filing_type: "4",
          filed_date: filing.filed_date,
          accession_number: filing.accession_number,
          raw_url: filing.filing_url,
          significance_score: templateData?.significance_score ?? 0,
        };

        if (templateData) {
          filingInsert.one_line_summary = templateData.one_line_summary;
          filingInsert.insider_data = templateData.insider_data
            ? (templateData.insider_data as Record<string, unknown>)
            : null;
          filingInsert.has_earnings_data = templateData.has_earnings_data;
          filingInsert.processed_at = new Date().toISOString();
        }

        const { error: insertError } = await supabase
          .from("filings")
          .insert(filingInsert);

        if (insertError) {
          if (insertError.code === "23505") {
            results.filings_skipped++;
          } else {
            results.errors.push(`Filing ${filing.accession_number}: ${insertError.message}`);
          }
        } else {
          results.filings_ingested++;
          if (templateData) results.filings_processed++;
        }
      } catch (err) {
        results.errors.push(
          `Filing ${filing.accession_number}: ${err instanceof Error ? err.message : String(err)}`
        );
      }

      // Rate limit: 120ms between filings (EDGAR download rate limit)
      if (doProcess) {
        await new Promise((r) => setTimeout(r, 120));
      }
    }

    return Response.json({
      success: true,
      date_range: `${startStr} to ${endStr}`,
      edgar_offset: edgarOffset,
      edgar_filings_found: allFilings.length,
      already_in_db: existingSet.size,
      new_filings_available: newFilings.length,
      ...results,
      next_offset: results.timed_out || allFilings.length >= maxFilings
        ? edgarOffset + allFilings.length
        : null,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Backfill-form4 error:", error instanceof Error ? error.message : error);
    return Response.json(
      { error: "Form 4 backfill operation failed" },
      { status: 500 }
    );
  }
}

function buildFilingUrl(accession: string): string {
  const clean = accession.replace(/-/g, "");
  return `https://www.sec.gov/Archives/edgar/data/${clean.slice(0, 10)}/${clean}/${accession}-index.htm`;
}
