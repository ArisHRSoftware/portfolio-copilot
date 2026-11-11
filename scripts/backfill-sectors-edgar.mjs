/**
 * Backfill sector data for companies with empty sector using EDGAR submissions API.
 * Queries https://data.sec.gov/submissions/CIK{cik}.json for SIC code.
 *
 * Usage: node scripts/backfill-sectors-edgar.mjs
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = resolve(__dirname, "..", ".env");
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (!process.env[k]) process.env[k] = v;
  }
}
loadEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const DB_BASE = `${SUPABASE_URL}/rest/v1`;
const DB_HEADERS = { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json" };
const EDGAR_UA = "Brefyr admin@brefyr.com";

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// SIC to Sector mapping (same as constants/sectors.ts)
function sicToSector(sic) {
  const code = parseInt(sic, 10);
  if (isNaN(code)) return null;

  // Technology (before Industrials catch-all)
  if (code >= 3570 && code <= 3579) return "Technology";
  if (code >= 3670 && code <= 3679) return "Technology";
  if (code >= 7370 && code <= 7379) return "Technology";
  if (code >= 3660 && code <= 3669) return "Technology";
  if (code >= 3810 && code <= 3849) return "Technology";

  // Communication Services
  if (code >= 4800 && code <= 4899) return "Communication Services";
  if (code >= 7810 && code <= 7819) return "Communication Services";

  // Financial Services
  if (code >= 6000 && code <= 6199) return "Financial Services";
  if (code >= 6200 && code <= 6299) return "Financial Services";
  if (code >= 6300 && code <= 6399) return "Financial Services";
  if (code >= 6400 && code <= 6499) return "Financial Services";
  if (code >= 6500 && code <= 6599) return "Financial Services";
  if (code >= 6700 && code <= 6799) return "Financial Services";

  // Healthcare
  if (code >= 2830 && code <= 2869) return "Healthcare";
  if (code >= 3840 && code <= 3859) return "Healthcare";
  if (code >= 5047 && code <= 5049) return "Healthcare";
  if (code >= 8000 && code <= 8099) return "Healthcare";

  // Energy
  if (code >= 1300 && code <= 1399) return "Energy";
  if (code >= 2900 && code <= 2999) return "Energy";
  if (code >= 4900 && code <= 4949) return "Energy";

  // Consumer Cyclical
  if (code >= 5000 && code <= 5199) return "Consumer Cyclical";
  if (code >= 5500 && code <= 5599) return "Consumer Cyclical";
  if (code >= 5600 && code <= 5699) return "Consumer Cyclical";
  if (code >= 5700 && code <= 5799) return "Consumer Cyclical";
  if (code >= 7000 && code <= 7099) return "Consumer Cyclical";
  if (code >= 7200 && code <= 7299) return "Consumer Cyclical";
  if (code >= 7900 && code <= 7999) return "Consumer Cyclical";

  // Consumer Defensive
  if (code >= 2000 && code <= 2111) return "Consumer Defensive";
  if (code >= 5400 && code <= 5499) return "Consumer Defensive";
  if (code >= 5300 && code <= 5399) return "Consumer Defensive";

  // Industrials
  if (code >= 3000 && code <= 3599) return "Industrials";
  if (code >= 3700 && code <= 3799) return "Industrials";
  if (code >= 3900 && code <= 3999) return "Industrials";
  if (code >= 4000 && code <= 4799) return "Industrials";
  if (code >= 8700 && code <= 8799) return "Industrials";

  // Basic Materials
  if (code >= 1000 && code <= 1299) return "Basic Materials";
  if (code >= 1400 && code <= 1499) return "Basic Materials";
  if (code >= 2800 && code <= 2829) return "Basic Materials";
  if (code >= 2870 && code <= 2899) return "Basic Materials";

  // Real Estate
  if (code >= 6510 && code <= 6553) return "Real Estate";

  // Utilities
  if (code >= 4910 && code <= 4991) return "Utilities";

  return null;
}

async function fetchSIC(cik) {
  const paddedCik = cik.replace(/^0+/, "").padStart(10, "0");
  const url = `https://data.sec.gov/submissions/CIK${paddedCik}.json`;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": EDGAR_UA, Accept: "application/json" },
      });
      if (res.ok) {
        const data = await res.json();
        return {
          sic: data.sic || null,
          sicDescription: data.sicDescription || null,
          name: data.name || null,
          tickers: data.tickers || [],
          exchanges: data.exchanges || [],
        };
      }
      if (res.status === 404) return null;
      if (res.status === 429 || res.status >= 500) {
        await sleep(3000 * (attempt + 1));
        continue;
      }
      return null;
    } catch {
      if (attempt < 2) await sleep(2000 * (attempt + 1));
    }
  }
  return null;
}

async function main() {
  console.log("=== Sector Backfill via EDGAR SIC Lookup ===\n");

  const BATCH_SIZE = 500;
  let totalUpdated = 0, totalSkipped = 0, totalErrors = 0;
  let round = 0;
  const startTime = Date.now();

  while (true) {
    round++;
    // Fetch companies without sector
    const res = await fetch(`${DB_BASE}/companies?select=id,ticker,cik_number,name&or=(sector.is.null,sector.eq.)&cik_number=not.is.null&limit=${BATCH_SIZE}`, {
      headers: { ...DB_HEADERS, Prefer: "count=exact" },
    });
    const remaining = parseInt(res.headers.get("content-range")?.split("/")[1] || "0", 10);
    const companies = await res.json();

    if (!companies || companies.length === 0) break;

    console.log(`\n--- Round ${round}: ${remaining} remaining, processing ${companies.length} ---`);

    let updated = 0, skipped = 0, errors = 0;

    for (let i = 0; i < companies.length; i++) {
      const company = companies[i];

      try {
        const edgarData = await fetchSIC(company.cik_number);

        if (edgarData?.sic) {
          const sector = sicToSector(edgarData.sic);
          if (sector) {
            const updateData = { sector };
            // Also update sic_description if available
            if (edgarData.sicDescription) {
              updateData.sic_description = edgarData.sicDescription;
            }
            // Update ticker if EDGAR has a real one and current is CIK-based
            if (edgarData.tickers?.[0] && company.ticker?.startsWith("CIK")) {
              updateData.ticker = edgarData.tickers[0];
            }
            // Update exchange if available
            if (edgarData.exchanges?.[0]) {
              updateData.exchange = edgarData.exchanges[0];
            }

            const updateRes = await fetch(`${DB_BASE}/companies?id=eq.${company.id}`, {
              method: "PATCH",
              headers: { ...DB_HEADERS, Prefer: "return=minimal" },
              body: JSON.stringify(updateData),
            });
            if (updateRes.ok) updated++;
            else errors++;
          } else {
            // SIC exists but no mapping — set sector to "Other"
            await fetch(`${DB_BASE}/companies?id=eq.${company.id}`, {
              method: "PATCH",
              headers: { ...DB_HEADERS, Prefer: "return=minimal" },
              body: JSON.stringify({
                sector: "Other",
                sic_description: edgarData.sicDescription || null,
              }),
            });
            updated++;
          }
        } else {
          // No SIC from EDGAR — mark as "Other" so we don't re-process
          await fetch(`${DB_BASE}/companies?id=eq.${company.id}`, {
            method: "PATCH",
            headers: { ...DB_HEADERS, Prefer: "return=minimal" },
            body: JSON.stringify({ sector: "Other" }),
          });
          skipped++;
        }
      } catch {
        errors++;
      }

      if ((i + 1) % 50 === 0 || i === companies.length - 1) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
        const grand = totalUpdated + updated;
        process.stdout.write(`\r  [${i + 1}/${companies.length}] ${updated} updated, ${skipped} no-sic, ${errors} err | grand: ${grand} | ${elapsed}s`);
      }

      // EDGAR rate limit: 10 req/sec
      await sleep(120);
    }

    totalUpdated += updated;
    totalSkipped += skipped;
    totalErrors += errors;
    console.log(`\n  Round ${round}: ${updated} updated, ${skipped} no-sic, ${errors} err`);

    await sleep(2000);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n=== Done in ${elapsed}s ===`);
  console.log(`Updated: ${totalUpdated}`);
  console.log(`No SIC (set to "Other"): ${totalSkipped}`);
  console.log(`Errors: ${totalErrors}`);
}

main().catch(err => { console.error("\nFatal:", err.message); process.exit(1); });
