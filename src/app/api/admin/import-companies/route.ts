import { createClient } from "@supabase/supabase-js";
import { timingSafeEqual } from "crypto";
import type { Database } from "@/lib/types/database";
import { sicToSector } from "@/lib/constants/sectors";

export const maxDuration = 300;

const EDGAR_USER_AGENT = "Brefyr admin@brefyr.com";

/**
 * Admin endpoint: import ALL companies from EDGAR's company_tickers.json.
 *
 * Fetches the canonical SEC company list (~10,400 companies with tickers),
 * then for each company not already in the DB (by CIK), fetches SIC code
 * from EDGAR submissions API and inserts the company.
 *
 * Also updates existing CIK-ticker companies (e.g. "CIK320193") with
 * real tickers from the EDGAR list.
 *
 * Auth: requires ADMIN_SECRET header.
 *
 * Usage: POST /api/admin/import-companies
 *   Body: { "batch_size": 100 }  (optional, default 100)
 */
export async function POST(request: Request): Promise<Response> {
  const adminSecret = process.env.ADMIN_SECRET;
  const providedSecret = request.headers.get("x-admin-secret") ?? "";
  if (
    !adminSecret ||
    !providedSecret ||
    Buffer.byteLength(providedSecret) !== Buffer.byteLength(adminSecret) ||
    !timingSafeEqual(Buffer.from(providedSecret), Buffer.from(adminSecret))
  ) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return Response.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  let body: { batch_size?: number } = {};
  try {
    body = await request.json();
  } catch {
    // defaults
  }

  const batchSize = Math.min(body.batch_size ?? 100, 500);

  // Step 1: Fetch EDGAR company list
  const edgarRes = await fetch("https://www.sec.gov/files/company_tickers.json", {
    headers: { "User-Agent": EDGAR_USER_AGENT },
  });
  if (!edgarRes.ok) {
    return Response.json(
      { error: "Failed to fetch EDGAR company list", status: edgarRes.status },
      { status: 502 }
    );
  }

  const edgarData = (await edgarRes.json()) as Record<
    string,
    { cik_str: number; ticker: string; title: string }
  >;
  const edgarCompanies = Object.values(edgarData);

  // Step 2: Get all existing CIK numbers from DB
  const existingCiks = new Set<string>();
  let offset = 0;
  while (true) {
    const { data } = await supabase
      .from("companies")
      .select("cik_number")
      .range(offset, offset + 999);
    const rows = data ?? [];
    for (const r of rows) {
      if (r.cik_number) existingCiks.add(r.cik_number);
    }
    if (rows.length < 1000) break;
    offset += 1000;
  }

  // Step 3: Find missing companies
  const missing = edgarCompanies.filter((ec) => {
    const cik = String(ec.cik_str).padStart(10, "0");
    return !existingCiks.has(cik);
  });

  // Step 4: Also find existing companies with CIK-based tickers that need real ticker updates
  const cikTickerUpdates: { cik: string; realTicker: string }[] = [];
  for (const ec of edgarCompanies) {
    const cik = String(ec.cik_str).padStart(10, "0");
    if (existingCiks.has(cik) && ec.ticker) {
      cikTickerUpdates.push({ cik, realTicker: ec.ticker });
    }
  }

  let inserted = 0;
  let tickerUpdated = 0;
  let failed = 0;
  const errors: string[] = [];

  // Step 5: Insert missing companies in batches
  for (let i = 0; i < missing.length; i += batchSize) {
    const batch = missing.slice(i, i + batchSize);

    // Fetch SIC codes from EDGAR submissions API (with rate limiting)
    const companiesWithSic = await Promise.all(
      batch.map(async (ec) => {
        const cik = String(ec.cik_str).padStart(10, "0");
        try {
          const subRes = await fetch(
            `https://data.sec.gov/submissions/CIK${cik}.json`,
            { headers: { "User-Agent": EDGAR_USER_AGENT } }
          );
          if (subRes.ok) {
            const subData = (await subRes.json()) as {
              sic?: string;
              sicDescription?: string;
              exchanges?: string[];
              stateOfIncorporation?: string;
              fiscalYearEnd?: string;
              category?: string;
            };
            return {
              ticker: ec.ticker,
              name: ec.title,
              cik_number: cik,
              sic_code: subData.sic || "",
              sic_description: subData.sicDescription || "",
              sector: subData.sic ? sicToSector(subData.sic) : "",
              exchange: subData.exchanges?.[0] || "",
              state_of_incorporation: subData.stateOfIncorporation || "",
              fiscal_year_end: subData.fiscalYearEnd || "",
              filer_category: subData.category || "",
              market_cap: 0,
              status: "active" as const,
            };
          }
        } catch {
          // SIC fetch failed — insert with minimal data
        }
        return {
          ticker: ec.ticker,
          name: ec.title,
          cik_number: cik,
          sic_code: "",
          sic_description: "",
          sector: "",
          exchange: "",
          state_of_incorporation: "",
          fiscal_year_end: "",
          filer_category: "",
          market_cap: 0,
          status: "active" as const,
        };
      })
    );

    // Batch insert
    const { error } = await supabase.from("companies").insert(companiesWithSic);
    if (error) {
      // If batch fails, try one-by-one
      for (const company of companiesWithSic) {
        const { error: singleError } = await supabase
          .from("companies")
          .insert(company);
        if (singleError) {
          failed++;
          if (errors.length < 10) {
            errors.push(`${company.ticker}: ${singleError.message}`);
          }
        } else {
          inserted++;
        }
      }
    } else {
      inserted += companiesWithSic.length;
    }

    // Rate limit: SEC asks for max 10 req/sec
    await new Promise((r) => setTimeout(r, batchSize * 120));
  }

  // Step 6: Update CIK-based tickers to real tickers
  // Only update tickers that start with "CIK" (synthetic fallback tickers)
  for (let i = 0; i < cikTickerUpdates.length; i += 100) {
    const batch = cikTickerUpdates.slice(i, i + 100);
    for (const { cik, realTicker } of batch) {
      const { data: existing } = await supabase
        .from("companies")
        .select("ticker")
        .eq("cik_number", cik)
        .limit(1)
        .single();

      if (existing && existing.ticker.startsWith("CIK")) {
        const { error } = await supabase
          .from("companies")
          .update({ ticker: realTicker, previous_tickers: existing.ticker })
          .eq("cik_number", cik);
        if (!error) tickerUpdated++;
      }
    }
  }

  return Response.json({
    total_edgar: edgarCompanies.length,
    already_in_db: existingCiks.size,
    missing: missing.length,
    inserted,
    ticker_updated: tickerUpdated,
    failed,
    errors: errors.length > 0 ? errors : undefined,
  });
}
