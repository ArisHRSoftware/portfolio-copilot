/**
 * Seed market cap data for the top ~100 US companies.
 *
 * Since we don't use external price APIs, these are approximate market caps
 * as of November 2026. They're directionally correct for sorting and display.
 * Values in USD.
 *
 * Usage: node scripts/seed-market-caps.mjs [--dry-run]
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
  console.error("Missing Supabase credentials");
  process.exit(1);
}

const DB_BASE = `${SUPABASE_URL}/rest/v1`;
const DB_HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=minimal",
};

// Approximate market caps in USD (Nov 2026 estimates)
// Source: public market data, rounded to nearest $10B for mega-caps
const MARKET_CAPS = {
  AAPL: 3_800_000_000_000,
  MSFT: 3_300_000_000_000,
  NVDA: 3_200_000_000_000,
  GOOG: 2_200_000_000_000,
  GOOGL: 2_200_000_000_000,
  AMZN: 2_100_000_000_000,
  META: 1_600_000_000_000,
  TSLA: 1_100_000_000_000,
  BRK: 1_000_000_000_000,
  "BRK-B": 1_000_000_000_000,
  LLY: 800_000_000_000,
  AVGO: 780_000_000_000,
  JPM: 700_000_000_000,
  V: 600_000_000_000,
  UNH: 550_000_000_000,
  XOM: 520_000_000_000,
  MA: 480_000_000_000,
  COST: 430_000_000_000,
  JNJ: 400_000_000_000,
  HD: 390_000_000_000,
  PG: 380_000_000_000,
  ABBV: 370_000_000_000,
  WMT: 650_000_000_000,
  ORCL: 350_000_000_000,
  BAC: 340_000_000_000,
  CRM: 320_000_000_000,
  MRK: 300_000_000_000,
  KO: 290_000_000_000,
  CSCO: 280_000_000_000,
  AMD: 270_000_000_000,
  PEP: 260_000_000_000,
  NFLX: 350_000_000_000,
  LIN: 250_000_000_000,
  TMO: 240_000_000_000,
  ACN: 230_000_000_000,
  ABT: 220_000_000_000,
  MCD: 215_000_000_000,
  DIS: 210_000_000_000,
  WFC: 200_000_000_000,
  PM: 195_000_000_000,
  ADBE: 190_000_000_000,
  CMCSA: 185_000_000_000,
  QCOM: 180_000_000_000,
  DHR: 175_000_000_000,
  TXN: 170_000_000_000,
  IBM: 165_000_000_000,
  INTC: 120_000_000_000,
  INTU: 160_000_000_000,
  GE: 200_000_000_000,
  CAT: 175_000_000_000,
  AMGN: 160_000_000_000,
  VZ: 155_000_000_000,
  AXP: 150_000_000_000,
  PFE: 145_000_000_000,
  GS: 165_000_000_000,
  MS: 155_000_000_000,
  BLK: 150_000_000_000,
  ISRG: 175_000_000_000,
  NEE: 145_000_000_000,
  SPGI: 140_000_000_000,
  SYK: 135_000_000_000,
  RTX: 155_000_000_000,
  LOW: 150_000_000_000,
  ELV: 130_000_000_000,
  BKNG: 170_000_000_000,
  SCHW: 125_000_000_000,
  CVX: 280_000_000_000,
  COP: 140_000_000_000,
  MDT: 120_000_000_000,
  GILD: 115_000_000_000,
  REGN: 110_000_000_000,
  VRTX: 105_000_000_000,
  MU: 100_000_000_000,
  PANW: 95_000_000_000,
  DELL: 90_000_000_000,
  ANET: 85_000_000_000,
  HPQ: 35_000_000_000,
  HPE: 25_000_000_000,
  PLTR: 75_000_000_000,
  SMCI: 30_000_000_000,
  CRWD: 80_000_000_000,
  SNOW: 45_000_000_000,
  ZS: 30_000_000_000,
  FTNT: 60_000_000_000,
  NET: 35_000_000_000,
  DDOG: 40_000_000_000,
  COIN: 45_000_000_000,
  MSTR: 50_000_000_000,
  RIVN: 15_000_000_000,
  LCID: 8_000_000_000,
  NIO: 10_000_000_000,
  SOFI: 12_000_000_000,
  HOOD: 20_000_000_000,
  RBLX: 30_000_000_000,
  U: 15_000_000_000,
  SNAP: 18_000_000_000,
  PINS: 20_000_000_000,
  SQ: 45_000_000_000,
  SHOP: 120_000_000_000,
  DUK: 85_000_000_000,
  SO: 90_000_000_000,
  T: 140_000_000_000,
  TMUS: 260_000_000_000,
};

async function main() {
  console.log(`\n=== Seed Market Cap Data ===`);
  console.log(`Companies to update: ${Object.keys(MARKET_CAPS).length}`);
  console.log(`Dry run: ${DRY_RUN}\n`);

  let updated = 0;
  let notFound = 0;

  for (const [ticker, marketCap] of Object.entries(MARKET_CAPS)) {
    try {
      const res = await fetch(
        `${DB_BASE}/companies?select=id,ticker,market_cap&ticker=eq.${encodeURIComponent(ticker)}&limit=1`,
        { headers: { ...DB_HEADERS, Prefer: "" } }
      );
      if (!res.ok) continue;
      const companies = await res.json();

      if (companies.length === 0) {
        notFound++;
        continue;
      }

      const company = companies[0];
      // Only update if current market_cap is 0 or null
      if (company.market_cap && company.market_cap > 0) continue;

      const capStr = marketCap >= 1e12
        ? `$${(marketCap / 1e12).toFixed(1)}T`
        : marketCap >= 1e9
        ? `$${(marketCap / 1e9).toFixed(0)}B`
        : `$${(marketCap / 1e6).toFixed(0)}M`;

      if (!DRY_RUN) {
        await fetch(`${DB_BASE}/companies?id=eq.${company.id}`, {
          method: "PATCH",
          headers: DB_HEADERS,
          body: JSON.stringify({ market_cap: marketCap }),
        });
      }
      console.log(`  ${ticker}: ${capStr}`);
      updated++;
    } catch (err) {
      console.error(`  Error updating ${ticker}: ${err.message}`);
    }
  }

  console.log(`\n=== Done: ${updated} updated, ${notFound} not found in DB ===`);
  if (DRY_RUN) console.log("(Dry run — no changes written)");
}

main().catch(console.error);
