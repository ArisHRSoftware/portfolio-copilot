/**
 * Re-process Form 4 filings using XML parsing instead of regex.
 *
 * Form 4 filings on EDGAR are XML documents. The previous extraction
 * stripped XML tags and tried regex, which failed for most filings.
 * This script fetches the raw XML and parses it structurally.
 *
 * Usage:
 *   node scripts/reprocess-form4-xml.mjs                    # all Form 4s
 *   node scripts/reprocess-form4-xml.mjs --limit 100        # first 100
 *   node scripts/reprocess-form4-xml.mjs --dry-run           # preview
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

const args = process.argv.slice(2);
function getArg(name, defaultVal) {
  const idx = args.indexOf(name);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : defaultVal;
}
const DRY_RUN = args.includes("--dry-run");
const CONCURRENCY = parseInt(getArg("--concurrency", "2"), 10);
const BATCH_SIZE = 1000;

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) { console.error("Missing Supabase credentials"); process.exit(1); }

const DB_BASE = `${SUPABASE_URL}/rest/v1`;
const DB_HEADERS = { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json" };
const EDGAR_UA = "Brefyr admin@brefyr.com";

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function dbSelect(table, query) {
  const res = await fetch(`${DB_BASE}/${table}?${query}`, { headers: { ...DB_HEADERS, Prefer: "" } });
  if (!res.ok) throw new Error(`DB select: ${res.status}`);
  return res.json();
}

async function dbUpdate(table, id, data) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`${DB_BASE}/${table}?id=eq.${id}`, {
        method: "PATCH",
        headers: { ...DB_HEADERS, Prefer: "return=minimal" },
        body: JSON.stringify(data),
      });
      if (res.ok) return;
      if (res.status >= 500) { await sleep(1000 * (attempt + 1)); continue; }
      throw new Error(`DB update: ${res.status}`);
    } catch (e) { if (attempt === 2) throw e; await sleep(1000 * (attempt + 1)); }
  }
}

async function dbCount(query) {
  const res = await fetch(`${DB_BASE}/filings?select=id&${query}&limit=1`, {
    headers: { ...DB_HEADERS, Prefer: "count=exact" },
  });
  return parseInt(res.headers.get("content-range")?.split("/")[1] || "0", 10);
}

// ── XML extraction helpers ───────────────────────────────────────────
function xmlVal(xml, tag) {
  const re = new RegExp(`<${tag}>\\s*<value>([^<]*)<\\/value>\\s*<\\/${tag}>`, "i");
  const m = xml.match(re);
  return m?.[1]?.trim() || null;
}

function xmlSimple(xml, tag) {
  const re = new RegExp(`<${tag}>([^<]*)<\\/${tag}>`, "i");
  const m = xml.match(re);
  return m?.[1]?.trim() || null;
}

function xmlAll(xml, tag) {
  const re = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "gi");
  const results = [];
  let m;
  while ((m = re.exec(xml)) !== null) results.push(m[1]);
  return results;
}

function parseForm4Xml(xml, companyName, ticker, filedDate) {
  const trades = [];

  // Extract reporting owner
  const ownerBlock = xmlAll(xml, "reportingOwner")[0] || "";
  const ownerName = xmlSimple(ownerBlock, "rptOwnerName") || "An insider";
  const officerTitle = xmlSimple(ownerBlock, "officerTitle") || "";
  const isDirector = xmlSimple(ownerBlock, "isDirector") === "1";
  const isOfficer = xmlSimple(ownerBlock, "isOfficer") === "1";
  const isTenPct = xmlSimple(ownerBlock, "isTenPercentOwner") === "1";

  let title = officerTitle;
  if (!title) {
    const parts = [];
    if (isDirector) parts.push("Director");
    if (isOfficer) parts.push("Officer");
    if (isTenPct) parts.push("10% Owner");
    title = parts.join(", ") || "Insider";
  }

  // Extract non-derivative transactions
  const ndTxns = xmlAll(xml, "nonDerivativeTransaction");
  for (const txn of ndTxns) {
    const txCode = xmlSimple(txn, "transactionCode") || "";
    const shares = parseFloat((xmlVal(txn, "transactionShares") || "0").replace(/,/g, ""));
    const price = parseFloat((xmlVal(txn, "transactionPricePerShare") || "0").replace(/,/g, ""));
    const acqDisp = xmlVal(txn, "transactionAcquiredDisposedCode") || "";
    const txDate = xmlVal(txn, "transactionDate") || filedDate.slice(0, 10);

    let transactionType = "other";
    if (txCode === "P") transactionType = "buy";
    else if (txCode === "S") transactionType = "sell";
    else if (txCode === "A") transactionType = "grant";
    else if (txCode === "M") transactionType = "exercise";
    else if (txCode === "G") transactionType = "gift";
    else if (txCode === "F") transactionType = "tax";
    else if (txCode === "J") transactionType = "other";
    else if (txCode === "C") transactionType = "exercise";

    if (shares > 0 || price > 0) {
      trades.push({
        person: ownerName,
        title,
        transaction_type: transactionType,
        shares: isNaN(shares) ? 0 : shares,
        price_per_share: (isNaN(price) || price <= 0) ? null : price,
        date: txDate,
        acquired_disposed: acqDisp,
      });
    }
  }

  // Extract derivative transactions
  const dTxns = xmlAll(xml, "derivativeTransaction");
  for (const txn of dTxns) {
    const txCode = xmlSimple(txn, "transactionCode") || "";
    const totalValue = parseFloat((xmlVal(txn, "transactionTotalValue") || "0").replace(/,/g, ""));
    const price = parseFloat((xmlVal(txn, "transactionPricePerShare") || "0").replace(/,/g, ""));
    const shares = parseFloat((xmlVal(txn, "transactionShares") || xmlVal(txn, "transactionTotalValue") || "0").replace(/,/g, ""));
    const txDate = xmlVal(txn, "transactionDate") || filedDate.slice(0, 10);
    const acqDisp = xmlVal(txn, "transactionAcquiredDisposedCode") || "";

    let transactionType = "other";
    if (txCode === "P") transactionType = "buy";
    else if (txCode === "S") transactionType = "sell";
    else if (txCode === "A") transactionType = "grant";
    else if (txCode === "M") transactionType = "exercise";
    else if (txCode === "C") transactionType = "exercise";

    if (shares > 0 || totalValue > 0) {
      trades.push({
        person: ownerName,
        title,
        transaction_type: transactionType,
        shares: isNaN(shares) ? 0 : shares,
        price_per_share: (isNaN(price) || price <= 0) ? null : price,
        date: txDate,
        acquired_disposed: acqDisp,
      });
    }
  }

  // Build summary
  const buys = trades.filter(t => t.transaction_type === "buy");
  const sells = trades.filter(t => t.transaction_type === "sell");
  const totalBuyShares = buys.reduce((s, t) => s + t.shares, 0);
  const totalSellShares = sells.reduce((s, t) => s + t.shares, 0);
  const totalBuyValue = buys.reduce((s, t) => s + t.shares * (t.price_per_share || 0), 0);
  const totalSellValue = sells.reduce((s, t) => s + t.shares * (t.price_per_share || 0), 0);

  let summary;
  if (buys.length > 0 && totalBuyValue > 0) {
    summary = `${ownerName}${title ? ` (${title})` : ""} purchased ${totalBuyShares.toLocaleString()} shares at ~$${(totalBuyValue / totalBuyShares).toFixed(2)} ($${formatMoney(totalBuyValue)})`;
  } else if (sells.length > 0 && totalSellValue > 0) {
    summary = `${ownerName}${title ? ` (${title})` : ""} sold ${totalSellShares.toLocaleString()} shares at ~$${(totalSellValue / totalSellShares).toFixed(2)} ($${formatMoney(totalSellValue)})`;
  } else if (buys.length > 0) {
    summary = `${ownerName}${title ? ` (${title})` : ""} purchased ${totalBuyShares.toLocaleString()} shares of ${ticker}`;
  } else if (sells.length > 0) {
    summary = `${ownerName}${title ? ` (${title})` : ""} sold ${totalSellShares.toLocaleString()} shares of ${ticker}`;
  } else if (trades.length > 0) {
    const mainType = trades[0].transaction_type;
    const label = { grant: "was granted", exercise: "exercised options for", gift: "gifted", tax: "withheld for tax" }[mainType] || "reported transaction in";
    const totalShares = trades.reduce((s, t) => s + t.shares, 0);
    summary = `${ownerName}${title ? ` (${title})` : ""} ${label} ${totalShares.toLocaleString()} shares of ${ticker}`;
  } else {
    summary = `Insider transaction filed for ${companyName} (${ticker})`;
  }

  // Significance score based on trade value
  let score = 2;
  const maxValue = Math.max(totalBuyValue, totalSellValue);
  if (maxValue >= 10_000_000) score = 7;
  else if (maxValue >= 1_000_000) score = 5;
  else if (maxValue >= 100_000) score = 4;
  else if (maxValue >= 10_000) score = 3;

  return {
    one_line_summary: summary.slice(0, 150),
    significance_score: score,
    insider_data: trades.length > 0 ? trades : null,
    has_earnings_data: false,
  };
}

function formatMoney(amount) {
  if (amount >= 1_000_000_000) return `${(amount / 1_000_000_000).toFixed(1)}B`;
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(1)}M`;
  if (amount >= 1_000) return `${(amount / 1_000).toFixed(0)}K`;
  return amount.toFixed(0);
}

// ── Fetch Form 4 XML from EDGAR ──────────────────────────────────────
async function fetchForm4Xml(indexUrl) {
  // Fetch the index page HTML
  const indexRes = await fetch(indexUrl, { headers: { "User-Agent": EDGAR_UA } });
  if (!indexRes.ok) return null;
  const indexHtml = await indexRes.text();

  // Find XML links in index page — look for ownership.xml or similar
  const xmlLinks = [];
  const re = /href="([^"]*\.xml)"/gi;
  let m;
  while ((m = re.exec(indexHtml)) !== null) {
    const href = m[1];
    // Skip xsl-rendered versions, index files, and R-files
    if (!href.includes("xsl") && !href.includes("index") && !href.startsWith("R")) {
      xmlLinks.push(href);
    }
  }

  // Try each XML link
  for (const link of xmlLinks) {
    const fullUrl = link.startsWith("/") ? `https://www.sec.gov${link}` : link.startsWith("http") ? link : `${indexUrl.substring(0, indexUrl.lastIndexOf("/") + 1)}${link}`;

    await sleep(100); // EDGAR rate limit
    const xmlRes = await fetch(fullUrl, { headers: { "User-Agent": EDGAR_UA } });
    if (xmlRes.ok) {
      const xml = await xmlRes.text();
      if (xml.includes("<ownershipDocument>") || xml.includes("<reportingOwner>")) {
        return xml;
      }
    }
  }

  // Fallback: try directory-level index.json
  const dirUrl = indexUrl.substring(0, indexUrl.lastIndexOf("/") + 1) + "index.json";
  try {
    const dirRes = await fetch(dirUrl, { headers: { "User-Agent": EDGAR_UA, Accept: "application/json" } });
    if (dirRes.ok) {
      const idx = await dirRes.json();
      const items = idx.directory?.item ?? [];
      const xmlFile = items.find(i => i.name.endsWith(".xml") && !i.name.includes("index") && !i.name.startsWith("R"));
      if (xmlFile) {
        const xmlUrl = indexUrl.substring(0, indexUrl.lastIndexOf("/") + 1) + xmlFile.name;
        await sleep(100);
        const xmlRes = await fetch(xmlUrl, { headers: { "User-Agent": EDGAR_UA } });
        if (xmlRes.ok) {
          const xml = await xmlRes.text();
          if (xml.includes("<ownershipDocument>") || xml.includes("<reportingOwner>")) {
            return xml;
          }
        }
      }
    }
  } catch { /* fallback failed */ }

  return null;
}

// ── Main ──────────────────────────────────────────────────────────────
async function main() {
  const totalForm4 = await dbCount("filing_type=eq.4&insider_data=is.null");
  console.log(`\n=== Form 4 XML Re-Processing ===`);
  console.log(`Form 4 without insider_data: ${totalForm4}`);
  console.log(`Concurrency: ${CONCURRENCY} | Dry run: ${DRY_RUN}\n`);

  let grandProcessed = 0, grandSkipped = 0, grandErrors = 0, grandXmlFound = 0;
  let round = 0;
  const grandStart = Date.now();

  while (true) {
    round++;
    const remaining = await dbCount("filing_type=eq.4&insider_data=is.null");
    if (remaining === 0) break;

    console.log(`\n--- Round ${round}: ${remaining} remaining ---`);

    const filings = await dbSelect(
      "filings",
      `select=id,filing_type,filed_date,raw_url,company_id&filing_type=eq.4&insider_data=is.null&order=filed_date.desc&limit=${BATCH_SIZE}`
    );
    if (filings.length === 0) break;

    // Pre-fetch companies
    const companyIds = [...new Set(filings.map(f => f.company_id))];
    const companyMap = new Map();
    for (let i = 0; i < companyIds.length; i += 200) {
      const batch = companyIds.slice(i, i + 200);
      const companies = await dbSelect("companies", `select=id,ticker,name&id=in.(${batch.map(id => `"${id}"`).join(",")})`);
      for (const c of companies) companyMap.set(c.id, c);
    }

    let processed = 0, skipped = 0, errors = 0, xmlFound = 0;
    const roundStart = Date.now();

    for (let i = 0; i < filings.length; i += CONCURRENCY) {
      const batch = filings.slice(i, i + CONCURRENCY);
      const results = await Promise.allSettled(
        batch.map(async (filing) => {
          const company = companyMap.get(filing.company_id);
          if (!company) return { skipped: true };

          // Try to get XML
          const xml = await fetchForm4Xml(filing.raw_url);

          if (xml) {
            const result = parseForm4Xml(xml, company.name, company.ticker, filing.filed_date);
            if (!DRY_RUN) {
              await dbUpdate("filings", filing.id, {
                one_line_summary: result.one_line_summary,
                significance_score: result.significance_score,
                insider_data: result.insider_data,
                has_earnings_data: false,
              });
            }
            return { ok: true, hasXml: true, hasTrades: result.insider_data !== null };
          } else {
            // No XML found — set insider_data to empty array to mark as processed
            if (!DRY_RUN) {
              await dbUpdate("filings", filing.id, { insider_data: [] });
            }
            return { ok: true, hasXml: false };
          }
        })
      );

      for (const r of results) {
        if (r.status === "rejected") errors++;
        else if (r.value.skipped) skipped++;
        else { processed++; if (r.value.hasXml) xmlFound++; }
      }

      const total = i + batch.length;
      if (total % 50 === 0 || total === filings.length) {
        const elapsed = ((Date.now() - roundStart) / 1000).toFixed(0);
        const grand = grandProcessed + processed;
        process.stdout.write(`\r  [${total}/${filings.length}] ${processed} ok (${xmlFound} xml), ${skipped} skip, ${errors} err | ${elapsed}s | grand: ${grand}/${totalForm4}`);
      }

      await sleep(800 * CONCURRENCY); // Slower rate — 2 EDGAR requests per filing
    }

    grandProcessed += processed;
    grandSkipped += skipped;
    grandErrors += errors;
    grandXmlFound += xmlFound;

    console.log(`\n  Round ${round}: ${processed} ok (${xmlFound} xml found), ${skipped} skip, ${errors} err`);
    await sleep(2000);
  }

  const elapsed = ((Date.now() - grandStart) / 1000).toFixed(1);
  console.log(`\n=== Done ===`);
  console.log(`Processed: ${grandProcessed}`);
  console.log(`XML found: ${grandXmlFound}`);
  console.log(`Skipped: ${grandSkipped}`);
  console.log(`Errors: ${grandErrors}`);
  console.log(`Time: ${elapsed}s (${(elapsed / 60).toFixed(1)} min)`);
}

main().catch(err => { console.error("\nFatal:", err.message); process.exit(1); });
