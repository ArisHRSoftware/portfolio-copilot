/**
 * Process all filings in DB that have processed_at=null.
 * Downloads each filing from SEC EDGAR, runs template extraction,
 * and updates the record with insider data / summary.
 *
 * This catches up filings that were backfilled without template extraction.
 *
 * Usage:
 *   node scripts/process-unprocessed.mjs                       # process all unprocessed
 *   node scripts/process-unprocessed.mjs --type 4              # only Form 4
 *   node scripts/process-unprocessed.mjs --type 4 --reprocess  # re-extract Form 4 missing insider_data
 *   node scripts/process-unprocessed.mjs --limit 500           # max 500 filings
 *   node scripts/process-unprocessed.mjs --dry-run             # preview only
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Load .env ─────────────────────────────────────────────────────────
function loadEnv() {
  const envPath = resolve(__dirname, "..", ".env");
  try {
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
  } catch (err) {
    console.error("Could not load .env:", err.message);
    process.exit(1);
  }
}
loadEnv();

// ── Parse CLI args ────────────────────────────────────────────────────
const args = process.argv.slice(2);
function getArg(name, defaultVal) {
  const idx = args.indexOf(name);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : defaultVal;
}
const DRY_RUN = args.includes("--dry-run");
const REPROCESS = args.includes("--reprocess");  // Re-process filings missing insider_data
const FORM_TYPE = getArg("--type", null);
const MAX_LIMIT = parseInt(getArg("--limit", "10000"), 10);

// ── Supabase REST ─────────────────────────────────────────────────────
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
  process.exit(1);
}

const DB_BASE = `${SUPABASE_URL}/rest/v1`;
const DB_HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
};
const EDGAR_UA = "Brefyr admin@brefyr.com";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── HTML strip ────────────────────────────────────────────────────────
function stripHtml(html) {
  let text = html;
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  text = text.replace(/<[^>]+>/g, " ");
  text = text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/&#\d+;/g, " ").replace(/&[a-zA-Z]+;/g, " ");
  text = text.replace(/\t/g, " ").replace(/ {2,}/g, " ");
  text = text.replace(/\n{3,}/g, "\n\n");
  return text.trim();
}

/**
 * Fetch with 429 retry (EDGAR rate limit).
 */
async function fetchWithRetry(url, headers, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    await sleep(250); // 250ms between requests (4 req/sec — well under EDGAR's 10/sec)
    const res = await fetch(url, { headers });
    if (res.ok) return res;
    if (res.status === 429 || res.status >= 500) {
      // Back off: 5s, 10s, 20s
      const backoff = 5000 * Math.pow(2, attempt);
      await sleep(backoff);
      continue;
    }
    return res; // 404 or other client error — don't retry
  }
  return null;
}

/**
 * Download Form 4 raw XML from EDGAR.
 * Form 4 filings are XML-only — we parse the -index.htm page for the .xml link.
 */
async function downloadForm4Xml(rawUrl) {
  const dir = rawUrl.substring(0, rawUrl.lastIndexOf("/") + 1);

  // Step 1: Try index.json
  try {
    const jr = await fetchWithRetry(dir + "index.json", { "User-Agent": EDGAR_UA, Accept: "application/json" });
    if (jr?.ok) {
      const idx = await jr.json();
      const items = idx.directory?.item ?? [];
      const xmlDoc = items.find((i) => i.name.endsWith(".xml") && !i.name.includes("/"));
      if (xmlDoc) {
        const xr = await fetchWithRetry(dir + xmlDoc.name, { "User-Agent": EDGAR_UA });
        if (xr?.ok) return xr.text();
      }
    }
  } catch { /* fallthrough */ }

  // Step 2: Parse -index.htm for links (Form 4 often lacks index.json)
  try {
    const ir = await fetchWithRetry(rawUrl, { "User-Agent": EDGAR_UA });
    if (ir?.ok) {
      const html = await ir.text();
      const xmlLinks = [];
      const linkRe = /href="([^"]*\.xml)"/gi;
      let m;
      while ((m = linkRe.exec(html)) !== null) {
        const href = m[1];
        if (!href.includes("/xsl")) xmlLinks.push(href);
      }
      if (xmlLinks.length > 0) {
        const xmlPath = xmlLinks[0].startsWith("http") ? xmlLinks[0] : "https://www.sec.gov" + xmlLinks[0];
        const xr = await fetchWithRetry(xmlPath, { "User-Agent": EDGAR_UA });
        if (xr?.ok) return xr.text();
      }
    }
  } catch { /* fallthrough */ }

  return "";
}

/**
 * Parse Form 4 XML directly for insider trade data.
 * Much more reliable than regex on stripped HTML.
 */
function parseForm4Xml(xml, companyName, ticker, filedDate) {
  function xmlVal(tag) {
    const re = new RegExp(`<${tag}>\\s*([^<]+?)\\s*</${tag}>`, "i");
    const m = xml.match(re);
    return m ? m[1].trim() : "";
  }

  function xmlValInBlock(block, tag) {
    // Try <tag><value>X</value></tag> format first (most XBRL fields)
    const re1 = new RegExp(`<${tag}>\\s*<value>\\s*([^<]+?)\\s*</value>`, "i");
    const m1 = block.match(re1);
    if (m1) return m1[1].trim();
    // Fallback: <tag>X</tag> format (e.g. transactionCode)
    const re2 = new RegExp(`<${tag}>\\s*([^<]+?)\\s*</${tag}>`, "i");
    const m2 = block.match(re2);
    return m2 ? m2[1].trim() : "";
  }

  // Insider name
  const insiderName = xmlVal("rptOwnerName") || "An insider";

  // Role
  const isDirector = /<isDirector>\s*1\s*<\/isDirector>/i.test(xml);
  const isOfficer = /<isOfficer>\s*1\s*<\/isOfficer>/i.test(xml);
  const isTenPctOwner = /<isTenPercentOwner>\s*1\s*<\/isTenPercentOwner>/i.test(xml);
  const officerTitle = xmlVal("officerTitle");
  let title = officerTitle || (isDirector ? "Director" : isTenPctOwner ? "10% Owner" : isOfficer ? "Officer" : "Insider");

  // Transaction data — collect from all nonDerivativeTransaction blocks
  const txBlocks = xml.match(/<nonDerivativeTransaction>[\s\S]*?<\/nonDerivativeTransaction>/gi) ?? [];
  let totalShares = 0;
  let weightedPrice = 0;
  let mainCode = "";
  const trades = [];

  for (const block of txBlocks) {
    const code = xmlValInBlock(block, "transactionCode") || "";
    const shares = parseFloat(xmlValInBlock(block, "transactionShares")?.replace(/,/g, "") || "0");
    const price = parseFloat(xmlValInBlock(block, "transactionPricePerShare")?.replace(/,/g, "") || "0");

    if (!mainCode && code) mainCode = code.toUpperCase();
    if (shares > 0) {
      totalShares += shares;
      if (price > 0) weightedPrice += shares * price;
    }

    const txType = { P: "buy", S: "sell", A: "grant", M: "exercise" }[code.toUpperCase()] || "other";
    if (shares > 0) {
      trades.push({
        person: insiderName, title,
        transaction_type: txType, shares,
        price_per_share: price > 0 ? price : null,
        date: xmlVal("transactionDate") || filedDate.slice(0, 10),
      });
    }
  }

  // Also check derivativeTransaction (options, warrants)
  const dTxBlocks = xml.match(/<derivativeTransaction>[\s\S]*?<\/derivativeTransaction>/gi) ?? [];
  for (const block of dTxBlocks) {
    const code = xmlValInBlock(block, "transactionCode") || "";
    const shares = parseFloat(xmlValInBlock(block, "transactionShares")?.replace(/,/g, "") || "0");
    const price = parseFloat(xmlValInBlock(block, "exercisePrice")?.replace(/,/g, "") || xmlValInBlock(block, "transactionPricePerShare")?.replace(/,/g, "") || "0");

    if (!mainCode && code) mainCode = code.toUpperCase();
    const txType = { P: "buy", S: "sell", A: "grant", M: "exercise" }[code.toUpperCase()] || "other";
    if (shares > 0) {
      totalShares += shares;
      trades.push({
        person: insiderName, title,
        transaction_type: txType, shares,
        price_per_share: price > 0 ? price : null,
        date: xmlVal("transactionDate") || filedDate.slice(0, 10),
      });
    }
  }

  const transactionType = { P: "buy", S: "sell", A: "grant", M: "exercise" }[mainCode] || "other";
  const avgPrice = totalShares > 0 && weightedPrice > 0 ? weightedPrice / totalShares : null;

  const txLabel = {
    buy: "purchased", sell: "sold", grant: "was granted",
    exercise: "exercised options for", other: "reported a transaction involving",
  }[transactionType];

  let summary;
  if (totalShares > 0 && avgPrice) {
    const total = totalShares * avgPrice;
    const fmt = total >= 1e6 ? `${(total / 1e6).toFixed(1)}M` : total >= 1e3 ? `${(total / 1e3).toFixed(0)}K` : total.toFixed(0);
    summary = `${insiderName} (${title}) ${txLabel} ${totalShares.toLocaleString()} shares at $${avgPrice.toFixed(2)} ($${fmt})`;
  } else if (totalShares > 0) {
    summary = `${insiderName} (${title}) ${txLabel} ${totalShares.toLocaleString()} shares of ${ticker}`;
  } else {
    summary = `Insider transaction filed for ${companyName} (${ticker})`;
  }

  let score = 2;
  if (totalShares > 0 && avgPrice) {
    const value = totalShares * avgPrice;
    if (value >= 10_000_000) score = 7;
    else if (value >= 1_000_000) score = 5;
    else if (value >= 100_000) score = 4;
  }

  return {
    one_line_summary: summary.slice(0, 150),
    significance_score: score,
    insider_data: trades.length > 0 ? trades : null,
    has_earnings_data: false,
  };
}

// ── Generic template extraction for other types ───────────────────────
function extractGenericTemplate(filingType, companyName, ticker, filedDate) {
  const typeName = {
    "10-K": "annual report", "10-Q": "quarterly report", "8-K": "current report",
    "DEF 14A": "proxy statement", "13F-HR": "institutional holdings report",
    "SC 13D": "beneficial ownership (activist)", "SC 13G": "beneficial ownership (passive)",
  }[filingType.toUpperCase()] || filingType;

  return {
    one_line_summary: `${companyName} (${ticker}) filed ${typeName} with the SEC on ${filedDate.slice(0, 10)}`,
    significance_score: filingType.startsWith("10-K") ? 4 : filingType.startsWith("SC 13D") ? 6 : 3,
    insider_data: null,
    has_earnings_data: filingType.startsWith("10-K") || filingType.startsWith("10-Q"),
  };
}

// ── Main ──────────────────────────────────────────────────────────────
async function main() {
  const mode = REPROCESS ? "REPROCESS (missing insider_data)" : "UNPROCESSED (processed_at=null)";
  console.log(`\n=== Process Filings — ${mode} ===`);
  console.log(`Filter: ${FORM_TYPE ? `Form ${FORM_TYPE} only` : "ALL types"}`);
  console.log(`Max: ${MAX_LIMIT}`);
  console.log(`Dry run: ${DRY_RUN}\n`);

  const BATCH = 200;
  let totalProcessed = 0;
  let totalSkipped = 0;
  let totalErrors = 0;
  let offset = 0;
  const startTime = Date.now();

  while (totalProcessed + totalErrors + totalSkipped < MAX_LIMIT) {
    // Fetch filings to process
    let query;
    if (REPROCESS) {
      // Re-process: filings that have processed_at but missing insider_data
      query = `select=id,accession_number,filing_type,filed_date,raw_url,company_id&insider_data=is.null&processed_at=not.is.null&order=filed_date.desc&limit=${BATCH}&offset=${offset}`;
    } else {
      query = `select=id,accession_number,filing_type,filed_date,raw_url,company_id&processed_at=is.null&order=filed_date.desc&limit=${BATCH}&offset=${offset}`;
    }
    if (FORM_TYPE) {
      query += `&filing_type=eq.${encodeURIComponent(FORM_TYPE)}`;
    }

    const res = await fetch(`${DB_BASE}/filings?${query}`, {
      headers: { ...DB_HEADERS, Prefer: "count=exact" },
    });
    if (!res.ok) {
      console.error(`DB fetch error: ${res.status}`);
      break;
    }
    const remaining = parseInt(res.headers.get("content-range")?.split("/")[1] || "0", 10);
    const filings = await res.json();

    if (!filings || filings.length === 0) {
      console.log("No more filings to process.");
      break;
    }

    console.log(`\nBatch: ${filings.length} filings (${remaining} total remaining)`);

    // Pre-fetch companies
    const companyIds = [...new Set(filings.map((f) => f.company_id))];
    const companyMap = new Map();
    for (let i = 0; i < companyIds.length; i += 50) {
      const batch = companyIds.slice(i, i + 50);
      const cRes = await fetch(
        `${DB_BASE}/companies?select=id,name,ticker&id=in.(${batch.join(",")})`,
        { headers: { ...DB_HEADERS, Prefer: "" } }
      );
      if (cRes.ok) {
        const companies = await cRes.json();
        for (const c of companies) companyMap.set(c.id, c);
      }
    }

    for (let i = 0; i < filings.length; i++) {
      if (totalProcessed + totalErrors + totalSkipped >= MAX_LIMIT) break;
      const filing = filings[i];
      const company = companyMap.get(filing.company_id);
      if (!company) {
        totalErrors++;
        continue;
      }

      try {
        const filingTypeUpper = filing.filing_type.toUpperCase().trim();
        let templateData;

        if (filingTypeUpper === "4" || filingTypeUpper.startsWith("4/")) {
          // Form 4: download raw XML and parse structured data
          const xml = await downloadForm4Xml(filing.raw_url);
          if (xml.length >= 50 && xml.includes("<ownershipDocument")) {
            templateData = parseForm4Xml(xml, company.name, company.ticker, filing.filed_date);
          } else {
            templateData = extractGenericTemplate(filing.filing_type, company.name, company.ticker, filing.filed_date);
          }
        } else {
          // Other types: generic template (no download needed)
          templateData = extractGenericTemplate(filing.filing_type, company.name, company.ticker, filing.filed_date);
        }

        // In reprocess mode, skip if we still couldn't extract insider data
        if (REPROCESS && !templateData.insider_data) {
          totalSkipped++;
          offset++; // skip this one in next batch
          continue;
        }

        if (!DRY_RUN) {
          const updateData = {
            one_line_summary: templateData.one_line_summary,
            significance_score: templateData.significance_score,
            has_earnings_data: templateData.has_earnings_data,
            processed_at: new Date().toISOString(),
          };
          if (templateData.insider_data) {
            updateData.insider_data = templateData.insider_data;
          }

          const updateRes = await fetch(`${DB_BASE}/filings?id=eq.${filing.id}`, {
            method: "PATCH",
            headers: { ...DB_HEADERS, Prefer: "return=minimal" },
            body: JSON.stringify(updateData),
          });

          if (!updateRes.ok) {
            const errText = await updateRes.text();
            console.error(`\n  Update failed for ${filing.accession_number}: ${errText}`);
            totalErrors++;
            continue;
          }
        }

        totalProcessed++;
        if ((totalProcessed + totalErrors + totalSkipped) % 25 === 0 || i === filings.length - 1) {
          const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
          process.stdout.write(`\r  [${totalProcessed} updated, ${totalSkipped} no-data, ${totalErrors} errors] ${elapsed}s`);
        }
      } catch (err) {
        totalErrors++;
      }
    }

    // In normal mode: processed items now have processed_at, next query at offset=0 gets fresh ones
    // In reprocess mode: offset accumulates for skipped items
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n\n=== Done in ${elapsed}s ===`);
  console.log(`Updated: ${totalProcessed}`);
  if (totalSkipped > 0) console.log(`Skipped (no insider data extractable): ${totalSkipped}`);
  console.log(`Errors: ${totalErrors}`);
  if (DRY_RUN) console.log(`(Dry run — no data was written)`);
}

main().catch((err) => {
  console.error("\nFatal:", err.message);
  process.exit(1);
});
