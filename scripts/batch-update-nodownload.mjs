/**
 * Batch-update filing types that don't need EDGAR text download.
 * DEF 14A, 13F-HR, SC 13D, SC 13G — template extraction is static (no text parsing).
 *
 * Usage: node scripts/batch-update-nodownload.mjs
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Load .env ─────────────────────────────────────────────────────────
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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr?.slice(0, 10) || "unknown date";
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch { return dateStr?.slice(0, 10) || "unknown date"; }
}

function getStaticTemplate(filingType, companyName, ticker, filedDate) {
  const type = filingType.toUpperCase().trim();
  const dateFmt = formatDate(filedDate);

  if (type.startsWith("DEF 14A") || type.startsWith("DEF14A")) {
    return {
      one_line_summary: `${companyName} (${ticker}) proxy statement for shareholder vote on ${dateFmt}`.slice(0, 150),
      significance_score: 3,
      has_earnings_data: false,
    };
  }
  if (type.startsWith("13F")) {
    return {
      one_line_summary: `${companyName} (${ticker}) institutional holdings report (13F-HR) filed ${dateFmt}`.slice(0, 150),
      significance_score: 3,
      has_earnings_data: false,
    };
  }
  if (type.startsWith("SC 13D") || type.startsWith("SC13D")) {
    return {
      one_line_summary: `Beneficial ownership report (SC 13D) filed for ${companyName} (${ticker}) — 5%+ activist stake`.slice(0, 150),
      significance_score: 6,
      has_earnings_data: false,
    };
  }
  if (type.startsWith("SC 13G") || type.startsWith("SC13G")) {
    return {
      one_line_summary: `Beneficial ownership report (SC 13G) filed for ${companyName} (${ticker}) — 5%+ passive stake`.slice(0, 150),
      significance_score: 4,
      has_earnings_data: false,
    };
  }
  return null;
}

async function patchWithRetry(id, data, retries = 3) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(`${DB_BASE}/filings?id=eq.${id}`, {
        method: "PATCH",
        headers: { ...DB_HEADERS, Prefer: "return=minimal" },
        body: JSON.stringify(data),
      });
      if (res.ok) return true;
      if (res.status >= 500) { await sleep(1000 * (attempt + 1)); continue; }
      return false;
    } catch {
      if (attempt < retries - 1) await sleep(1000 * (attempt + 1));
    }
  }
  return false;
}

async function main() {
  console.log("=== Batch Update: No-Download Filing Types ===\n");

  const CONCURRENCY = 10;
  const FETCH_BATCH = 500;
  const TYPES = ["DEF 14A", "13F-HR", "SC 13D", "SC 13G"];
  let totalUpdated = 0;
  let totalErrors = 0;
  const startTime = Date.now();

  for (const filingType of TYPES) {
    let offset = 0;
    let typeUpdated = 0;
    let typeErrors = 0;

    console.log(`Processing ${filingType}...`);

    while (true) {
      // Fetch batch with joined company data
      let filings;
      try {
        const url = `${DB_BASE}/filings?select=id,filing_type,filed_date,company_id,companies(ticker,name)&significance_score=eq.0&filing_type=eq.${encodeURIComponent(filingType)}&order=filed_date.desc&limit=${FETCH_BATCH}&offset=${offset}`;
        const res = await fetch(url, { headers: { ...DB_HEADERS, Prefer: "" } });
        if (!res.ok) { console.error(`  Fetch error: ${res.status}`); break; }
        filings = await res.json();
      } catch (e) {
        console.error(`  Fetch exception: ${e.message}`);
        await sleep(3000);
        continue; // retry same offset
      }

      if (filings.length === 0) break;

      // Process in parallel pools
      for (let i = 0; i < filings.length; i += CONCURRENCY) {
        const pool = filings.slice(i, i + CONCURRENCY);
        const results = await Promise.allSettled(
          pool.map(async (filing) => {
            const company = filing.companies;
            if (!company) return false;
            const template = getStaticTemplate(filing.filing_type, company.name, company.ticker, filing.filed_date);
            if (!template) return false;
            return patchWithRetry(filing.id, {
              one_line_summary: template.one_line_summary,
              significance_score: template.significance_score,
              insider_data: null,
              has_earnings_data: template.has_earnings_data,
              processed_at: new Date().toISOString(),
            });
          })
        );

        for (const r of results) {
          if (r.status === "fulfilled" && r.value) typeUpdated++;
          else typeErrors++;
        }

        // Small delay between pools
        await sleep(100);
      }

      const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
      process.stdout.write(`\r  ${filingType}: ${typeUpdated} updated, ${typeErrors} errors (${elapsed}s)`);
      offset += FETCH_BATCH;

      if (filings.length < FETCH_BATCH) break;
      await sleep(500); // Delay between fetch batches
    }

    totalUpdated += typeUpdated;
    totalErrors += typeErrors;
    console.log(`\n  ${filingType}: ${typeUpdated} done\n`);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`=== Done in ${elapsed}s ===`);
  console.log(`Updated: ${totalUpdated}`);
  console.log(`Errors: ${totalErrors}`);
}

main().catch(err => { console.error("\nFatal:", err.message); process.exit(1); });
