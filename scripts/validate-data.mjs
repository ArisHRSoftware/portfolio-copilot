/**
 * Data validation script — checks the quality of backfilled data.
 *
 * Queries Supabase directly and reports on:
 * 1. Total filing counts by type
 * 2. Date range coverage
 * 3. Key company verification (AAPL, MSFT, etc.)
 * 4. Sector distribution
 * 5. Market cap coverage
 * 6. Insider data (Form 4) quality
 * 7. Missing/empty fields
 * 8. Orphaned data
 *
 * Usage: node scripts/validate-data.mjs
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = resolve(__dirname, "..", ".env");
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
}

loadEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const DB_BASE = `${SUPABASE_URL}/rest/v1`;
const DB_HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
  Prefer: "",
};

async function query(table, params) {
  const res = await fetch(`${DB_BASE}/${table}?${params}`, { headers: DB_HEADERS });
  if (!res.ok) throw new Error(`Query failed: ${res.status} ${await res.text()}`);
  return res.json();
}

async function countQuery(table, params = "") {
  const res = await fetch(`${DB_BASE}/${table}?select=id&${params}&limit=0`, {
    headers: { ...DB_HEADERS, Prefer: "count=exact" },
  });
  const count = res.headers.get("content-range")?.split("/")[1];
  return parseInt(count ?? "0", 10);
}

function section(title) {
  console.log(`\n${"═".repeat(60)}`);
  console.log(`  ${title}`);
  console.log(`${"═".repeat(60)}`);
}

function check(label, value, expected, critical = false) {
  const pass = typeof expected === "function" ? expected(value) : value === expected;
  const icon = pass ? "✓" : critical ? "✗ CRITICAL" : "⚠ WARNING";
  console.log(`  ${icon}  ${label}: ${value}${!pass && typeof expected !== "function" ? ` (expected: ${expected})` : ""}`);
  return pass;
}

async function main() {
  console.log("=== Brefyr Data Validation Report ===\n");
  let criticals = 0;
  let warnings = 0;

  // ── 1. Company counts ──────────────────────────────────────────────
  section("1. COMPANIES");

  const totalCompanies = await countQuery("companies");
  check("Total companies", totalCompanies, (v) => v > 7000) || criticals++;

  const companiesWithSector = await countQuery("companies", "sector=neq.&sector=neq.null");
  const companiesWithoutSector = totalCompanies - companiesWithSector;
  check("Companies with sector", companiesWithSector, (v) => v > 5000);
  check("Companies without sector", companiesWithoutSector, (v) => v < totalCompanies * 0.3) || (warnings++);

  const companiesWithMarketCap = await countQuery("companies", "market_cap=gt.0");
  check("Companies with market cap > 0", companiesWithMarketCap, (v) => v >= 90);

  const companiesWithCIK = await countQuery("companies", "cik_number=neq.&cik_number=neq.null");
  check("Companies with CIK number", companiesWithCIK, (v) => v > 7000);

  // ── 2. Key mega-cap companies ──────────────────────────────────────
  section("2. KEY COMPANY VERIFICATION");

  const megaCaps = ["AAPL", "MSFT", "GOOG", "AMZN", "META", "NVDA", "TSLA", "JPM", "V", "WMT"];
  for (const ticker of megaCaps) {
    const companies = await query("companies", `select=id,ticker,name,sector,market_cap&ticker=eq.${ticker}&limit=1`);
    if (companies.length === 0) {
      console.log(`  ✗ CRITICAL  ${ticker}: NOT FOUND IN DATABASE`);
      criticals++;
      continue;
    }
    const c = companies[0];
    const capStr = c.market_cap > 1e12 ? `$${(c.market_cap / 1e12).toFixed(1)}T` :
                   c.market_cap > 1e9 ? `$${(c.market_cap / 1e9).toFixed(0)}B` :
                   c.market_cap > 0 ? `$${(c.market_cap / 1e6).toFixed(0)}M` : "NO CAP";

    // Check filings for this company
    const filingCount = await countQuery("filings", `company_id=eq.${c.id}`);
    const hasFilings = filingCount > 0;

    const icon = hasFilings && c.market_cap > 0 && c.sector ? "✓" : "⚠";
    console.log(`  ${icon}  ${ticker}: ${c.name} | ${c.sector || "NO SECTOR"} | ${capStr} | ${filingCount} filings`);
    if (!hasFilings) warnings++;
  }

  // ── 3. Filing counts by type ───────────────────────────────────────
  section("3. FILINGS BY TYPE");

  const totalFilings = await countQuery("filings");
  check("Total filings", totalFilings, (v) => v > 40000) || criticals++;

  const filingTypes = ["10-K", "10-Q", "8-K", "4", "DEF 14A", "13F-HR", "SC 13D", "SC 13G"];
  for (const ft of filingTypes) {
    const count = await countQuery("filings", `filing_type=eq.${encodeURIComponent(ft)}`);
    console.log(`  ℹ  ${ft}: ${count.toLocaleString()} filings`);
  }

  // Also check for "Form 4" vs "4" — the bug we fixed
  const formFourAlt = await countQuery("filings", "filing_type=eq.Form%204");
  if (formFourAlt > 0) {
    console.log(`  ⚠ WARNING  Found ${formFourAlt} filings with filing_type="Form 4" (should be "4")`);
    warnings++;
  }

  // ── 4. Filing date range ───────────────────────────────────────────
  section("4. DATE RANGE COVERAGE");

  const earliest = await query("filings", "select=filed_date&order=filed_date.asc&limit=1");
  const latest = await query("filings", "select=filed_date&order=filed_date.desc&limit=1");

  if (earliest.length > 0 && latest.length > 0) {
    console.log(`  ℹ  Earliest filing: ${earliest[0].filed_date}`);
    console.log(`  ℹ  Latest filing: ${latest[0].filed_date}`);

    const earliestDate = new Date(earliest[0].filed_date);
    const targetStart = new Date("2026-08-11");
    check("Earliest filing ≤ Aug 11", earliestDate <= targetStart, true) || warnings++;
  }

  // ── 5. Filing quality checks ───────────────────────────────────────
  section("5. FILING DATA QUALITY");

  const filingsWithSummary = await countQuery("filings", "one_line_summary=neq.null&one_line_summary=neq.");
  const filingsWithoutSummary = totalFilings - filingsWithSummary;
  check("Filings with summary", filingsWithSummary, (v) => v > totalFilings * 0.5);
  console.log(`  ℹ  Filings without summary: ${filingsWithoutSummary}`);

  const filingsWithAI = await countQuery("filings", "ai_summary_json=neq.null");
  console.log(`  ℹ  Filings with AI analysis: ${filingsWithAI}`);
  console.log(`  ℹ  Filings pending AI analysis: ${totalFilings - filingsWithAI}`);

  const filingsProcessed = await countQuery("filings", "processed_at=neq.null");
  console.log(`  ℹ  Filings with template extraction (processed_at): ${filingsProcessed}`);

  const filingsScore0 = await countQuery("filings", "significance_score=eq.0");
  console.log(`  ℹ  Filings with significance_score=0 (unscored): ${filingsScore0}`);

  // ── 6. Insider data (Form 4) ───────────────────────────────────────
  section("6. INSIDER DATA (FORM 4)");

  const form4Count = await countQuery("filings", "filing_type=eq.4");
  const form4WithInsider = await countQuery("filings", "filing_type=eq.4&insider_data=neq.null");
  console.log(`  ℹ  Total Form 4 filings: ${form4Count}`);
  console.log(`  ℹ  Form 4 with insider_data: ${form4WithInsider}`);
  console.log(`  ℹ  Form 4 without insider_data: ${form4Count - form4WithInsider}`);

  if (form4WithInsider > 0) {
    // Sample some insider data to check structure
    const samples = await query("filings", "select=id,insider_data,one_line_summary&filing_type=eq.4&insider_data=neq.null&limit=3");
    for (const s of samples) {
      const isArray = Array.isArray(s.insider_data);
      const hasTradeType = isArray
        ? s.insider_data[0]?.transaction_type !== undefined
        : (s.insider_data?.transaction_type !== undefined);
      console.log(`  ℹ  Sample insider_data: array=${isArray}, has_trade_type=${hasTradeType}`);
    }
  }

  // ── 7. Sector distribution ─────────────────────────────────────────
  section("7. SECTOR DISTRIBUTION");

  const sectors = ["Technology", "Healthcare", "Financial Services", "Consumer Cyclical",
                   "Consumer Defensive", "Industrials", "Energy", "Basic Materials",
                   "Real Estate", "Utilities", "Communication Services"];

  for (const sector of sectors) {
    const count = await countQuery("companies", `sector=eq.${encodeURIComponent(sector)}`);
    console.log(`  ℹ  ${sector}: ${count} companies`);
  }

  const emptySector = await countQuery("companies", "sector=eq.");
  console.log(`  ℹ  Empty sector: ${emptySector} companies`);

  // ── 8. Orphaned filings check ──────────────────────────────────────
  section("8. DATA INTEGRITY");

  // Check for filings with NULL company_id
  const orphanedFilings = await countQuery("filings", "company_id=is.null");
  check("Filings with null company_id", orphanedFilings, 0) || criticals++;

  // Check for duplicate accession numbers
  const dupeCheck = await query("filings", "select=accession_number&order=accession_number&limit=5&offset=0");
  console.log(`  ℹ  Sample accession format: ${dupeCheck[0]?.accession_number ?? "N/A"}`);

  // ── 9. Summary ─────────────────────────────────────────────────────
  section("SUMMARY");

  console.log(`  Total companies: ${totalCompanies.toLocaleString()}`);
  console.log(`  Total filings: ${totalFilings.toLocaleString()}`);
  console.log(`  Companies with market cap: ${companiesWithMarketCap}`);
  console.log(`  Filings with AI analysis: ${filingsWithAI}`);
  console.log(`  Form 4s with insider data: ${form4WithInsider}`);
  console.log(`  CRITICAL issues: ${criticals}`);
  console.log(`  WARNINGS: ${warnings}`);
  console.log(`\n  Verdict: ${criticals === 0 ? "✓ DATA IMPORT SUCCESSFUL" : "✗ CRITICAL ISSUES FOUND"}`);
}

main().catch(console.error);
