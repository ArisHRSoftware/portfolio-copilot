/**
 * SEC EDGAR Company Import Script
 *
 * Fetches 2,500+ US-listed companies from SEC EDGAR and upserts into Supabase.
 *
 * Data sources:
 * 1. https://www.sec.gov/files/company_tickers_exchange.json — bulk tickers list
 * 2. https://data.sec.gov/submissions/CIK{padded}.json — per-company detail
 *
 * SEC EDGAR requirements:
 * - User-Agent header with contact info
 * - Max 10 requests/sec (we use 8/sec with delays)
 *
 * Usage: npx tsx scripts/import-companies.ts
 */

import "dotenv/config";
import { sicToSector } from "../src/lib/constants/sectors";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const USER_AGENT = "PortfolioCopilot/1.0 (admin@portfoliocopilot.com)";
const REQUESTS_PER_SECOND = 8;
const DELAY_MS = Math.ceil(1000 / REQUESTS_PER_SECOND);
const MAX_RETRIES = 3;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env");
  process.exit(1);
}

/** Direct Supabase REST API call (bypasses supabase-js WebSocket issue on Node 20) */
async function supabaseUpsert(
  table: string,
  rows: Record<string, unknown>[],
  onConflict: string
): Promise<{ error: string | null; count: number }> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/${table}?on_conflict=${onConflict}`,
    {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify(rows),
    }
  );
  if (!res.ok) {
    const text = await res.text();
    return { error: text, count: 0 };
  }
  return { error: null, count: rows.length };
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TickerEntry {
  cik: number;
  name: string;
  ticker: string;
  exchange: string;
}

interface CompanySubmission {
  cik: string;
  entityType: string;
  sic: string;
  sicDescription: string;
  name: string;
  tickers: string[];
  exchanges: string[];
  stateOfIncorporation: string;
  fiscalYearEnd: string;
  category: string;
  phone: string;
  addresses: {
    business: Record<string, unknown>;
    mailing: Record<string, unknown>;
  };
}

interface CompanyRecord {
  ticker: string;
  name: string;
  sector: string;
  exchange: string;
  cik_number: string;
  sic_code: string | null;
  sic_description: string | null;
  industry: string | null;
  state_of_incorporation: string | null;
  filer_category: string | null;
  fiscal_year_end: string | null;
  description: string | null;
  phone: string | null;
  business_address: Record<string, unknown> | null;
  status: "active";
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function padCik(cik: number): string {
  return String(cik).padStart(10, "0");
}

/** Title-case a company name (EDGAR often returns ALL CAPS) */
function cleanName(raw: string): string {
  // Skip if already mixed case
  if (raw !== raw.toUpperCase()) return raw;

  return raw
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bLlc\b/g, "LLC")
    .replace(/\bLtd\b/g, "Ltd")
    .replace(/\bLp\b/g, "LP")
    .replace(/\bPlc\b/g, "PLC")
    .replace(/\bInc\b/gi, "Inc.")
    .replace(/\bCorp\b/gi, "Corp.")
    .replace(/\bCo\b/gi, "Co.")
    .replace(/\bN\.?v\.?\b/gi, "N.V.")
    .replace(/\bS\.?a\.?\b/gi, "S.A.")
    .replace(/\bU\.?s\.?\b/gi, "U.S.");
}

/** Convert fiscal year end code (e.g., "0930") to readable form */
function formatFiscalYearEnd(code: string | undefined): string | null {
  if (!code || code.length !== 4) return null;
  const month = parseInt(code.slice(0, 2), 10);
  const months = [
    "", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return months[month] ?? null;
}

async function fetchWithRetry(
  url: string,
  retries = MAX_RETRIES
): Promise<Response | null> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
      });

      if (res.ok) return res;

      if (res.status === 429 || res.status === 503) {
        const wait = attempt * 2000;
        console.warn(`  Rate limited (${res.status}), waiting ${wait}ms...`);
        await sleep(wait);
        continue;
      }

      // 404 or other client error — skip
      if (res.status >= 400 && res.status < 500) return null;

      console.warn(`  HTTP ${res.status} for ${url}, retry ${attempt}/${retries}`);
      await sleep(1000);
    } catch (err) {
      console.warn(
        `  Fetch error: ${err instanceof Error ? err.message : "unknown"}, retry ${attempt}/${retries}`
      );
      await sleep(1000);
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Step 1: Fetch bulk tickers list
// ---------------------------------------------------------------------------

async function fetchTickers(): Promise<TickerEntry[]> {
  console.log("Fetching company tickers from SEC EDGAR...");
  const res = await fetchWithRetry(
    "https://www.sec.gov/files/company_tickers_exchange.json"
  );
  if (!res) throw new Error("Failed to fetch company_tickers_exchange.json");

  const json = await res.json();
  const fields = json.fields as string[]; // ["cik", "name", "ticker", "exchange"]
  const data = json.data as (string | number)[][];

  const cikIdx = fields.indexOf("cik");
  const nameIdx = fields.indexOf("name");
  const tickerIdx = fields.indexOf("ticker");
  const exchangeIdx = fields.indexOf("exchange");

  const entries: TickerEntry[] = data.map((row) => ({
    cik: row[cikIdx] as number,
    name: row[nameIdx] as string,
    ticker: row[tickerIdx] as string,
    exchange: row[exchangeIdx] as string,
  }));

  console.log(`  Total entries: ${entries.length}`);

  // Filter to NYSE + Nasdaq only
  const filtered = entries.filter(
    (e) =>
      e.exchange === "NYSE" ||
      e.exchange === "Nasdaq" ||
      e.exchange === "NYSE Arca" ||
      e.exchange === "NYSE American"
  );

  console.log(`  After exchange filter (NYSE + Nasdaq): ${filtered.length}`);
  return filtered;
}

// ---------------------------------------------------------------------------
// Step 2: Enrich each company with SEC submissions data
// ---------------------------------------------------------------------------

async function enrichCompany(
  entry: TickerEntry
): Promise<CompanyRecord | null> {
  const url = `https://data.sec.gov/submissions/CIK${padCik(entry.cik)}.json`;
  const res = await fetchWithRetry(url);
  if (!res) return null;

  let data: CompanySubmission;
  try {
    data = (await res.json()) as CompanySubmission;
  } catch {
    return null;
  }

  const sic = data.sic ?? "";
  const sicDesc = data.sicDescription ?? "";
  const state = data.stateOfIncorporation ?? "";
  const sector = sicToSector(sic);
  const fiscalYearEnd = formatFiscalYearEnd(data.fiscalYearEnd);
  const name = cleanName(data.name || entry.name);

  const description = sicDesc
    ? `${name} is a ${sicDesc.toLowerCase()} company${state ? ` incorporated in ${state}` : ""}, trading on the ${entry.exchange}.`
    : `${name} is a publicly traded company on the ${entry.exchange}.`;

  return {
    ticker: entry.ticker,
    name,
    sector,
    exchange: entry.exchange,
    cik_number: padCik(entry.cik),
    sic_code: sic || null,
    sic_description: sicDesc || null,
    industry: sicDesc || null,
    state_of_incorporation: state || null,
    filer_category: data.category || null,
    fiscal_year_end: fiscalYearEnd,
    description,
    phone: data.phone || null,
    business_address: data.addresses?.business ?? null,
    status: "active",
  };
}

// ---------------------------------------------------------------------------
// Step 3: Upsert into Supabase in batches
// ---------------------------------------------------------------------------

async function upsertBatch(companies: CompanyRecord[]): Promise<number> {
  const { error, count } = await supabaseUpsert("companies", companies, "ticker");
  if (error) {
    console.error(`  Upsert error: ${error}`);
    return 0;
  }
  return count;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const startTime = Date.now();

  // Step 1: Get all tickers
  const tickers = await fetchTickers();

  // Step 2: Enrich each company
  console.log(`\nEnriching ${tickers.length} companies from SEC EDGAR...`);
  console.log(`  Rate: ${REQUESTS_PER_SECOND} req/sec (${DELAY_MS}ms delay)`);
  console.log(`  Estimated time: ~${Math.ceil(tickers.length / REQUESTS_PER_SECOND / 60)} minutes\n`);

  const companies: CompanyRecord[] = [];
  let failed = 0;

  for (let i = 0; i < tickers.length; i++) {
    const entry = tickers[i];

    const record = await enrichCompany(entry);
    if (record) {
      companies.push(record);
    } else {
      failed++;
    }

    // Progress logging every 100 companies
    if ((i + 1) % 100 === 0 || i === tickers.length - 1) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
      const pct = (((i + 1) / tickers.length) * 100).toFixed(1);
      console.log(
        `  [${pct}%] ${i + 1}/${tickers.length} processed | ${companies.length} success | ${failed} failed | ${elapsed}s elapsed`
      );
    }

    // Rate limiting
    await sleep(DELAY_MS);
  }

  console.log(`\nEnrichment complete: ${companies.length} companies, ${failed} failures.`);

  // Step 3: Upsert in batches of 200
  console.log("\nUpserting into Supabase...");
  const BATCH_SIZE = 200;
  let totalUpserted = 0;

  for (let i = 0; i < companies.length; i += BATCH_SIZE) {
    const batch = companies.slice(i, i + BATCH_SIZE);
    const count = await upsertBatch(batch);
    totalUpserted += count;
    console.log(
      `  Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${count} upserted (${totalUpserted} total)`
    );
  }

  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\nDone! ${totalUpserted} companies in Supabase. Total time: ${totalTime} minutes.`);
}

main().catch((err) => {
  console.error("Import failed:", err);
  process.exit(1);
});
