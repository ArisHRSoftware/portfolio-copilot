import { createClient } from "@supabase/supabase-js";
import { timingSafeEqual } from "crypto";
import type { Database } from "@/lib/types/database";
import { fetchAllTodaysFilings, type EdgarFiling } from "@/lib/edgar/rss-poller";
import { sicToSector } from "@/lib/constants/sectors";
import { downloadAndParseFiling } from "@/lib/edgar/filing-parser";
import { extractTemplateData } from "@/lib/edgar/template-extractor";

export const maxDuration = 300;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabase = ReturnType<typeof createClient<any>>;

const EDGAR_USER_AGENT = "Brefyr admin@brefyr.com";
const EDGAR_SEARCH_BASE = "https://efts.sec.gov/LATEST/search-index";
const FILING_TYPES = ["10-K", "10-Q", "8-K", "4", "DEF 14A", "13F-HR", "SC 13D", "SC 13G"];

/**
 * Admin endpoint: backfill real EDGAR filings into the database.
 *
 * Phase 1 (this endpoint): Store filing metadata + auto-create companies.
 *   No AI analysis — filings appear immediately with "Summary being generated..." placeholder.
 *
 * Phase 2 (regular cron): The pipeline picks up filings with processed_at=null
 *   and fills in AI analysis over time.
 *
 * Also cleans ghost filings that don't exist on EDGAR.
 *
 * Auth: requires ADMIN_SECRET header to prevent unauthorized access.
 *
 * Usage: POST /api/admin/backfill
 *   Body: { "days": 7, "clean_ghosts": true }
 */
export async function POST(request: Request): Promise<Response> {
  // Auth check (timing-safe)
  const adminSecret = process.env.ADMIN_SECRET;
  const providedSecret = request.headers.get("x-admin-secret") ?? "";
  if (!adminSecret || !providedSecret
    || Buffer.byteLength(providedSecret) !== Buffer.byteLength(adminSecret)
    || !timingSafeEqual(Buffer.from(providedSecret), Buffer.from(adminSecret))) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return Response.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseKey) as AnySupabase;

  let body: { days?: number; clean_ghosts?: boolean; limit?: number; offset?: number } = {};
  try {
    body = await request.json();
  } catch {
    // defaults
  }

  const days = Math.min(body.days ?? 7, 30);
  const cleanGhosts = body.clean_ghosts ?? false;
  const maxFilings = Math.min(body.limit ?? 200, 500);
  const pageOffset = body.offset ?? 0;

  const results = {
    ghosts_deleted: 0,
    companies_created: 0,
    filings_ingested: 0,
    filings_skipped: 0,
    errors: [] as string[],
  };

  try {
    // ── Step 1: Clean ghost filings ──────────────────────────────────
    if (cleanGhosts) {
      // Get all existing filings
      const { data: existingFilings } = await supabase
        .from("filings")
        .select("id, accession_number")
        .order("created_at", { ascending: false })
        .limit(500);

      if (existingFilings && existingFilings.length > 0) {
        // Check each accession against EDGAR in batches
        const ghostIds: string[] = [];

        for (let i = 0; i < existingFilings.length; i += 10) {
          const batch = existingFilings.slice(i, i + 10);
          const checks = await Promise.all(
            batch.map(async (f) => {
              try {
                const res = await fetch(
                  `${EDGAR_SEARCH_BASE}?q=%22${encodeURIComponent(f.accession_number)}%22&from=0&size=1`,
                  { headers: { "User-Agent": EDGAR_USER_AGENT, Accept: "application/json" } }
                );
                if (!res.ok) return { id: f.id, exists: true }; // assume valid if EDGAR is down
                const data = await res.json() as { hits?: { total?: { value?: number } } };
                return { id: f.id, exists: (data.hits?.total?.value ?? 0) > 0 };
              } catch {
                return { id: f.id, exists: true }; // assume valid on error
              }
            })
          );

          for (const check of checks) {
            if (!check.exists) ghostIds.push(check.id);
          }

          // Rate limit: 100ms between batches
          await new Promise((r) => setTimeout(r, 150));
        }

        if (ghostIds.length > 0) {
          await supabase.from("filings").delete().in("id", ghostIds);
          results.ghosts_deleted = ghostIds.length;
        }
      }
    }

    // ── Step 2: Fetch filings from EDGAR for date range ──────────────
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Skip weekends for start date
    const startDay = startDate.getUTCDay();
    if (startDay === 0) startDate.setDate(startDate.getDate() - 2);
    else if (startDay === 6) startDate.setDate(startDate.getDate() - 1);

    const startStr = startDate.toISOString().slice(0, 10);
    const endStr = endDate.toISOString().slice(0, 10);

    const PAGE_SIZE = 100;
    const maxPages = Math.ceil(maxFilings / PAGE_SIZE) + 1; // fetch slightly more to account for dedup
    const allFilings: EdgarFiling[] = [];
    const seenAccessions = new Set<string>();

    const forms = FILING_TYPES.map((t) => t.replace(/ /g, "+")).join(",");

    for (let page = 0; page < maxPages; page++) {
      if (allFilings.length >= maxFilings * 2) break; // enough raw data
      const edgarOffset = pageOffset + page * PAGE_SIZE;
      const url = `${EDGAR_SEARCH_BASE}?q=%22%22&forms=${forms}&dateRange=custom&startdt=${startStr}&enddt=${endStr}&from=${edgarOffset}&size=${PAGE_SIZE}`;

      const res = await fetch(url, {
        headers: { "User-Agent": EDGAR_USER_AGENT, Accept: "application/json" },
      });

      if (!res.ok) {
        results.errors.push(`EDGAR page ${page} failed: ${res.status}`);
        break;
      }

      const data = await res.json() as {
        hits?: {
          total?: { value?: number };
          hits?: Array<{ _id?: string; _source?: Record<string, unknown> }>;
        };
      };

      const total = data.hits?.total?.value ?? 0;
      const hits = data.hits?.hits ?? [];

      for (const hit of hits) {
        const source = hit._source;
        if (!source) continue;

        const adsh = (source.adsh as string) ?? "";
        const rawId = (hit._id as string) ?? "";
        const accession = adsh || rawId.split(":")[0];
        if (!accession || seenAccessions.has(accession)) continue;
        seenAccessions.add(accession);

        const rootForms = (source.root_forms as string[]) ?? [];
        const filingType = rootForms[0] ?? (source.form_type as string) ?? "";
        const normalizedType = filingType.toUpperCase().trim();
        const isTarget = FILING_TYPES.some(
          (t) => normalizedType === t || normalizedType.startsWith(t + "/") || normalizedType.startsWith(t + " ")
        );
        if (!isTarget) continue;

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
              if (!inner.startsWith("CIK")) { companyTicker = inner; break; }
            }
          }
        }

        const companySic = ((source.sics as string[]) ?? [])[0] ?? null;

        allFilings.push({
          accession_number: accession,
          filing_type: filingType,
          company_cik: companyCik,
          company_name: companyName,
          company_ticker: companyTicker,
          company_sic: companySic,
          filed_date: (source.file_date as string) ?? "",
          filing_url: buildFilingUrl(accession),
        });
      }

      if ((page + 1) * PAGE_SIZE >= total || hits.length === 0) break;
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

    const newFilings = allFilings
      .filter((f) => !existingSet.has(f.accession_number))
      .slice(0, maxFilings);

    // ── Step 4: Ingest metadata (no AI analysis) ─────────────────────
    for (const filing of newFilings) {
      try {
        // Find or create company
        const paddedCik = filing.company_cik.padStart(10, "0");
        let company: { id: string; ticker: string } | null = null;

        const { data: found } = await supabase
          .from("companies")
          .select("id, ticker")
          .or(`cik_number.eq.${paddedCik},cik_number.eq.${filing.company_cik}`)
          .limit(1)
          .single();

        if (found) {
          company = found as { id: string; ticker: string };
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
            .select("id, ticker")
            .single();

          if (error) {
            if (error.code === "23505") {
              const { data: retry } = await supabase
                .from("companies")
                .select("id, ticker")
                .or(`cik_number.eq.${paddedCik},cik_number.eq.${filing.company_cik}`)
                .limit(1)
                .single();
              company = retry as { id: string; ticker: string } | null;
            }
            if (!company) {
              results.errors.push(`Company create failed ${filing.company_cik}: ${error.message}`);
              continue;
            }
          } else {
            company = created as { id: string; ticker: string };
            results.companies_created++;
          }
        }

        if (!company) continue;

        // Generate slug
        const typePart = filing.filing_type.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
        const datePart = filing.filed_date.slice(0, 10);
        const accSuffix = filing.accession_number.slice(-6);
        const slug = `${company.ticker.toLowerCase()}-${typePart}-${datePart}-${accSuffix}`;

        // Insert filing metadata (no AI analysis yet)
        const { error: insertError } = await supabase
          .from("filings")
          .insert({
            company_id: company.id,
            slug,
            filing_type: filing.filing_type,
            filed_date: filing.filed_date,
            accession_number: filing.accession_number,
            raw_url: filing.filing_url,
            significance_score: 0,
            // processed_at stays null — pipeline will analyze these later
          });

        if (insertError) {
          if (insertError.code === "23505") {
            results.filings_skipped++;
          } else {
            results.errors.push(`Filing insert ${filing.accession_number}: ${insertError.message}`);
          }
        } else {
          results.filings_ingested++;
        }
      } catch (err) {
        results.errors.push(`Filing ${filing.accession_number}: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    return Response.json({
      success: true,
      date_range: `${startStr} to ${endStr}`,
      edgar_filings_found: allFilings.length,
      ...results,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

function buildFilingUrl(accession: string): string {
  const clean = accession.replace(/-/g, "");
  return `https://www.sec.gov/Archives/edgar/data/${clean.slice(0, 10)}/${clean}/${accession}-index.htm`;
}
