/**
 * Local script to fix sector misclassifications in the companies table.
 *
 * Applies the corrected SIC-to-sector mapping for known problematic ranges:
 * - SIC 3570-3579 (Computer Equipment: AAPL, HPQ, etc.) → Technology
 * - SIC 3670-3679 (Semiconductors: extra coverage) → Technology
 * - Also applies hardcoded overrides for well-known mega-caps
 *
 * Usage: node scripts/fix-sectors-local.mjs [--dry-run]
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

const DRY_RUN = process.argv.includes("--dry-run");
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const DB_BASE = `${SUPABASE_URL}/rest/v1`;
const DB_HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
};

// Hardcoded overrides for well-known companies where SIC mapping is wrong
const TICKER_SECTOR_OVERRIDES = {
  AAPL: "Technology",
  MSFT: "Technology",
  GOOG: "Communication Services",
  GOOGL: "Communication Services",
  META: "Communication Services",
  AMZN: "Consumer Cyclical",
  TSLA: "Consumer Cyclical",
  NVDA: "Technology",
  AMD: "Technology",
  INTC: "Technology",
  HPQ: "Technology",
  HPE: "Technology",
  DELL: "Technology",
  IBM: "Technology",
  ORCL: "Technology",
  CRM: "Technology",
  CSCO: "Technology",
  AVGO: "Technology",
  QCOM: "Technology",
  TXN: "Technology",
  MU: "Technology",
  NFLX: "Communication Services",
  DIS: "Communication Services",
  CMCSA: "Communication Services",
  WMT: "Consumer Defensive",
  COST: "Consumer Defensive",
  PG: "Consumer Defensive",
  KO: "Consumer Defensive",
  PEP: "Consumer Defensive",
  JNJ: "Healthcare",
  UNH: "Healthcare",
  PFE: "Healthcare",
  ABBV: "Healthcare",
  MRK: "Healthcare",
  LLY: "Healthcare",
  TMO: "Healthcare",
  ABT: "Healthcare",
  JPM: "Financial Services",
  BAC: "Financial Services",
  WFC: "Financial Services",
  GS: "Financial Services",
  MS: "Financial Services",
  V: "Financial Services",
  MA: "Financial Services",
  XOM: "Energy",
  CVX: "Energy",
  COP: "Energy",
  NEE: "Utilities",
  DUK: "Utilities",
  SO: "Utilities",
};

// Corrected SIC-to-sector for ranges that were wrong
function correctedSicToSector(sicCode) {
  const sic = parseInt(sicCode, 10);
  if (isNaN(sic)) return null;

  // Computer & Office Equipment (AAPL=3571, HPQ=3571, DELL=3571)
  if (sic >= 3570 && sic < 3580) return "Technology";
  // Semiconductors & electronic components
  if (sic >= 3670 && sic < 3680) return "Technology";

  return null; // no correction needed
}

async function main() {
  console.log(`\n=== Fix Sector Misclassifications ===`);
  console.log(`Dry run: ${DRY_RUN}\n`);

  let fixed = 0;

  // Step 1: Fix by ticker overrides
  console.log("Step 1: Fixing well-known mega-cap sectors...");
  for (const [ticker, correctSector] of Object.entries(TICKER_SECTOR_OVERRIDES)) {
    try {
      const res = await fetch(
        `${DB_BASE}/companies?select=id,ticker,sector&ticker=eq.${ticker}&limit=1`,
        { headers: { ...DB_HEADERS, Prefer: "" } }
      );
      if (!res.ok) continue;
      const companies = await res.json();
      if (companies.length === 0) continue;

      const company = companies[0];
      if (company.sector === correctSector) continue;

      console.log(`  ${ticker}: "${company.sector}" → "${correctSector}"`);

      if (!DRY_RUN) {
        await fetch(`${DB_BASE}/companies?id=eq.${company.id}`, {
          method: "PATCH",
          headers: { ...DB_HEADERS, Prefer: "return=minimal" },
          body: JSON.stringify({ sector: correctSector }),
        });
      }
      fixed++;
    } catch (err) {
      console.error(`  Error fixing ${ticker}: ${err.message}`);
    }
  }

  // Step 2: Fix all companies with SIC codes in problematic ranges
  console.log("\nStep 2: Fixing companies by SIC code range...");

  // Fetch companies with SIC codes in 3570-3579 that aren't Technology
  const sicRanges = [
    { start: "3570", end: "3579", expected: "Technology" },
    { start: "3670", end: "3679", expected: "Technology" },
  ];

  for (const range of sicRanges) {
    try {
      const res = await fetch(
        `${DB_BASE}/companies?select=id,ticker,sector,sic_code&sic_code=gte.${range.start}&sic_code=lte.${range.end}&sector=neq.${encodeURIComponent(range.expected)}&limit=500`,
        { headers: { ...DB_HEADERS, Prefer: "" } }
      );
      if (!res.ok) continue;
      const companies = await res.json();

      for (const company of companies) {
        console.log(`  ${company.ticker} (SIC ${company.sic_code}): "${company.sector}" → "${range.expected}"`);
        if (!DRY_RUN) {
          await fetch(`${DB_BASE}/companies?id=eq.${company.id}`, {
            method: "PATCH",
            headers: { ...DB_HEADERS, Prefer: "return=minimal" },
            body: JSON.stringify({ sector: range.expected }),
          });
        }
        fixed++;
      }
    } catch (err) {
      console.error(`  Error fixing SIC range ${range.start}-${range.end}: ${err.message}`);
    }
  }

  // Step 3: Fix companies with empty sectors using their SIC code
  console.log("\nStep 3: Fixing companies with empty sectors...");
  try {
    const res = await fetch(
      `${DB_BASE}/companies?select=id,ticker,sector,sic_code&sector=eq.&sic_code=neq.&limit=1000`,
      { headers: { ...DB_HEADERS, Prefer: "" } }
    );
    if (res.ok) {
      const companies = await res.json();
      for (const company of companies) {
        const sic = parseInt(company.sic_code, 10);
        if (isNaN(sic)) continue;
        const newSector = correctedSicToSector(company.sic_code);
        if (!newSector) continue; // only fix if we have a correction

        console.log(`  ${company.ticker} (SIC ${company.sic_code}): "" → "${newSector}"`);
        if (!DRY_RUN) {
          await fetch(`${DB_BASE}/companies?id=eq.${company.id}`, {
            method: "PATCH",
            headers: { ...DB_HEADERS, Prefer: "return=minimal" },
            body: JSON.stringify({ sector: newSector }),
          });
        }
        fixed++;
      }
    }
  } catch (err) {
    console.error(`  Error fixing empty sectors: ${err.message}`);
  }

  console.log(`\n=== Done: ${fixed} companies fixed ===`);
  if (DRY_RUN) console.log("(Dry run — no changes written)");
}

main().catch(console.error);
