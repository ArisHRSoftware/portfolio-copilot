/**
 * Wrapper script to run template extraction until all unscored filings of a type are processed.
 * Handles Supabase's 1000-row PostgREST cap by looping.
 *
 * Usage:
 *   node scripts/extract-all.mjs --type 10-Q --concurrency 2
 *   node scripts/extract-all.mjs --type 8-K --concurrency 1
 *   node scripts/extract-all.mjs --type 4 --concurrency 2
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

// ── CLI args ──────────────────────────────────────────────────────────
const args = process.argv.slice(2);
function getArg(name, defaultVal) {
  const idx = args.indexOf(name);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : defaultVal;
}
const TYPE_FILTER = getArg("--type", null);
const CONCURRENCY = parseInt(getArg("--concurrency", "2"), 10);
const BATCH_SIZE = 1000; // PostgREST max

if (!TYPE_FILTER) {
  console.error("Usage: node scripts/extract-all.mjs --type <filing_type> [--concurrency N]");
  process.exit(1);
}

// ── Supabase ──────────────────────────────────────────────────────────
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
    } catch (e) {
      if (attempt === 2) throw e;
      await sleep(1000 * (attempt + 1));
    }
  }
}

async function dbCount(query) {
  const res = await fetch(`${DB_BASE}/filings?select=id&${query}&limit=1`, {
    headers: { ...DB_HEADERS, Prefer: "count=exact" },
  });
  return parseInt(res.headers.get("content-range")?.split("/")[1] || "0", 10);
}

// ── EDGAR filing download ─────────────────────────────────────────────
const EDGAR_UA = "Brefyr admin@brefyr.com";
const MAX_CHARS = 100_000;

function stripHtml(html) {
  let text = html;
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  text = text.replace(/<[^>]+>/g, " ");
  text = text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/&#\d+;/g, " ").replace(/&[a-zA-Z]+;/g, " ");
  text = text.replace(/\t/g, " ").replace(/ {2,}/g, " ").replace(/\n{3,}/g, "\n\n");
  return text.trim();
}

async function resolveDocUrl(rawUrl) {
  if (!rawUrl.endsWith("-index.htm") && !rawUrl.endsWith("-index.html")) return rawUrl;
  const jsonUrl = rawUrl.replace(/-index\.html?$/, "/index.json");
  try {
    const res = await fetch(jsonUrl, { headers: { "User-Agent": EDGAR_UA, Accept: "application/json" } });
    if (res.ok) {
      const idx = await res.json();
      const items = idx.directory?.item ?? [];
      const primary = items.find(i => (i.name.endsWith(".htm") || i.name.endsWith(".html")) && !i.name.includes("index") && !i.name.startsWith("R"));
      if (primary) return rawUrl.substring(0, rawUrl.lastIndexOf("/") + 1) + primary.name;
      const txt = items.find(i => i.name.endsWith(".txt") && !i.name.includes("index"));
      if (txt) return rawUrl.substring(0, rawUrl.lastIndexOf("/") + 1) + txt.name;
    }
  } catch { /* fall through */ }
  return rawUrl;
}

async function downloadFiling(rawUrl) {
  const docUrl = await resolveDocUrl(rawUrl);
  for (let attempt = 0; attempt <= 2; attempt++) {
    try {
      const res = await fetch(docUrl, {
        headers: { "User-Agent": EDGAR_UA, Accept: "text/html, text/plain, */*" },
      });
      if (res.ok) {
        const raw = await res.text();
        const clean = stripHtml(raw);
        return clean.length <= MAX_CHARS ? clean : clean.slice(0, MAX_CHARS) + "\n[Truncated]";
      }
      if (res.status === 429 || res.status >= 500) {
        await sleep(3000 * (attempt + 1));
        continue;
      }
      throw new Error(`Download ${res.status}`);
    } catch (e) {
      if (attempt === 2) throw e;
      await sleep(2000 * (attempt + 1));
    }
  }
  throw new Error("Max retries");
}

// ── Template Extraction ─────────────────────────────────────────────
const EIGHT_K_ITEMS = {
  "1.01": "Entry into a Material Definitive Agreement",
  "1.02": "Termination of a Material Definitive Agreement",
  "1.03": "Bankruptcy or Receivership",
  "1.04": "Mine Safety",
  "2.01": "Completion of Acquisition or Disposition of Assets",
  "2.02": "Results of Operations and Financial Condition",
  "2.03": "Creation of a Direct Financial Obligation",
  "2.04": "Triggering Events That Accelerate or Increase a Direct Financial Obligation",
  "2.05": "Costs Associated with Exit or Disposal Activities",
  "2.06": "Material Impairments",
  "3.01": "Notice of Delisting or Failure to Satisfy Listing Standards",
  "3.02": "Unregistered Sales of Equity Securities",
  "3.03": "Material Modification to Rights of Security Holders",
  "4.01": "Changes in Registrant's Certifying Accountant",
  "4.02": "Non-Reliance on Previously Issued Financial Statements",
  "5.01": "Changes in Control of Registrant",
  "5.02": "Departure/Election of Directors or Officers",
  "5.03": "Amendments to Articles of Incorporation or Bylaws",
  "5.07": "Submission of Matters to a Vote of Security Holders",
  "7.01": "Regulation FD Disclosure",
  "8.01": "Other Events",
  "9.01": "Financial Statements and Exhibits",
};
const HIGH_SIG_ITEMS = new Set(["1.01","1.02","1.03","2.01","2.02","2.05","2.06","3.01","4.01","4.02","5.01","5.02"]);

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr?.slice(0, 10) || "unknown";
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch { return dateStr?.slice(0, 10) || "unknown"; }
}

function formatMoney(amount) {
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(1)}M`;
  if (amount >= 1_000) return `${(amount / 1_000).toFixed(0)}K`;
  return amount.toFixed(0);
}

function extractFormFour(text, companyName, ticker, filedDate) {
  const trades = [];
  let insiderName = "An insider";
  for (const pat of [
    /(?:reporting\s+(?:owner|person))[:\s]*([A-Za-z][A-Za-z'.,-]+(?:\s+[A-Za-z'.,-]+){1,4})/i,
    /(?:name\s+of\s+reporting\s+person)[:\s]*([A-Za-z][A-Za-z'.,-]+(?:\s+[A-Za-z'.,-]+){1,4})/i,
    /(?:filed\s+by|filer)[:\s]*([A-Za-z][A-Za-z'.,-]+(?:\s+[A-Za-z'.,-]+){1,4})/i,
  ]) {
    const m = text.match(pat);
    if (m?.[1]) { insiderName = m[1].trim(); break; }
  }

  let title = "";
  for (const pat of [
    /(?:relationship|title)[:\s]*((?:Chief|CEO|CFO|COO|CTO|President|Director|VP|Officer|Chairman|Secretary|Treasurer|General\s+Counsel|SVP|EVP)[^\n,;]*)/i,
    /(?:10%\s*owner|director|officer)/i,
  ]) {
    const m = text.match(pat);
    if (m) { title = m[1]?.trim() || m[0].trim(); break; }
  }

  let transactionType = "other";
  const codeMatch = text.match(/transaction\s+code[:\s]*([PSAMJGCDF])/i);
  if (codeMatch) {
    const c = codeMatch[1].toUpperCase();
    if (c === "P") transactionType = "buy";
    else if (c === "S") transactionType = "sell";
    else if (c === "A") transactionType = "grant";
    else if (c === "M") transactionType = "exercise";
  } else {
    if (/\b(?:purchase|acquired|bought)\b/i.test(text)) transactionType = "buy";
    else if (/\b(?:sale|sold|disposed)\b/i.test(text)) transactionType = "sell";
    else if (/\b(?:grant|awarded)\b/i.test(text)) transactionType = "grant";
    else if (/\b(?:exercis)/i.test(text)) transactionType = "exercise";
  }

  let totalShares = 0;
  for (const pat of [
    /(\d[\d,]*)\s+(?:shares?\s+)?(?:of\s+common\s+stock\s+)?(?:acquired|purchased|sold|disposed|granted|exercised)/i,
    /(?:number\s+of\s+(?:derivative\s+)?(?:securities|shares)[^:]*)[:\s]*(\d[\d,]*)/i,
    /(?:amount\s+of\s+securities)[^:]*[:\s]*(\d[\d,]*)/i,
  ]) {
    const m = text.match(pat);
    if (m?.[1]) { totalShares = parseInt(m[1].replace(/,/g, ""), 10); if (totalShares > 0) break; }
  }

  let pricePerShare = null;
  for (const pat of [
    /(?:price\s+of\s+(?:derivative\s+)?(?:securities|shares)|price\s+per\s+share|exercise\s+price)[^$\d]*\$?([\d,.]+)/i,
    /\$\s*([\d,.]+)\s*(?:per\s+share)/i,
  ]) {
    const m = text.match(pat);
    if (m?.[1]) { pricePerShare = parseFloat(m[1].replace(/,/g, "")); if (isNaN(pricePerShare) || pricePerShare <= 0) pricePerShare = null; else break; }
  }

  if (totalShares > 0 || insiderName !== "An insider") {
    trades.push({ person: insiderName, title: title || "Insider", transaction_type: transactionType, shares: totalShares, price_per_share: pricePerShare, date: filedDate.slice(0, 10) });
  }

  const txLabel = { buy: "purchased", sell: "sold", grant: "was granted", exercise: "exercised options for", other: "reported a transaction involving" }[transactionType];
  let summary;
  if (totalShares > 0 && pricePerShare) {
    const total = totalShares * pricePerShare;
    summary = `${insiderName}${title ? ` (${title})` : ""} ${txLabel} ${totalShares.toLocaleString()} shares at $${pricePerShare.toFixed(2)} ($${formatMoney(total)})`;
  } else if (totalShares > 0) {
    summary = `${insiderName}${title ? ` (${title})` : ""} ${txLabel} ${totalShares.toLocaleString()} shares of ${ticker}`;
  } else {
    summary = `Insider transaction filed for ${companyName} (${ticker})`;
  }

  let score = 2;
  if (totalShares > 0 && pricePerShare) {
    const value = totalShares * pricePerShare;
    if (value >= 10_000_000) score = 7;
    else if (value >= 1_000_000) score = 5;
    else if (value >= 100_000) score = 4;
  }

  return { one_line_summary: summary.slice(0, 150), significance_score: score, insider_data: trades.length > 0 ? trades : null, has_earnings_data: false };
}

function extractEightK(text, companyName, ticker, filedDate) {
  const items = [];
  const seen = new Set();
  let m;
  const re = /Item\s+(\d\.\d{2})/gi;
  while ((m = re.exec(text)) !== null) {
    if (!seen.has(m[1]) && EIGHT_K_ITEMS[m[1]]) { seen.add(m[1]); items.push(m[1]); }
  }

  let summary, score = 3, hasEarnings = false;
  if (items.length > 0) {
    hasEarnings = items.includes("2.02");
    if (items.length === 1) summary = `${ticker}: ${EIGHT_K_ITEMS[items[0]]}`;
    else if (items.length <= 3) summary = `${ticker} 8-K: ${items.map(i => EIGHT_K_ITEMS[i]).join("; ")}`;
    else summary = `${ticker} 8-K: ${items.slice(0, 2).map(i => EIGHT_K_ITEMS[i]).join("; ")} (+${items.length - 2} more)`;

    if (items.includes("4.02")) score = 8;
    else if (items.includes("1.03")) score = 8;
    else if (items.includes("5.01")) score = 7;
    else if (items.some(i => HIGH_SIG_ITEMS.has(i))) score = 5;
  } else {
    summary = `${companyName} (${ticker}) filed a current report (8-K) with the SEC`;
  }

  return { one_line_summary: summary.slice(0, 150), significance_score: score, insider_data: null, has_earnings_data: hasEarnings, eight_k_items: items.length > 0 ? items : undefined };
}

function extractTenK(text, companyName, ticker, filedDate) {
  const periodMatch = text.match(/(?:fiscal\s+year|period\s+of\s+report|for\s+the\s+(?:fiscal\s+)?year\s+end(?:ed|ing))[:\s]*([A-Za-z]+\s+\d{1,2},?\s+\d{4}|\d{4}-\d{2}-\d{2})/i);
  const period = periodMatch?.[1] ?? "";
  const hasGoingConcern = /going\s+concern/i.test(text);
  const hasMaterialWeakness = /material\s+weakness/i.test(text);
  const hasRestatement = /restate/i.test(text);
  let summary = period ? `${companyName} (${ticker}) filed annual report (10-K) for period ending ${period}` : `${companyName} (${ticker}) filed annual report (10-K) on ${formatDate(filedDate)}`;
  let score = 4;
  if (hasRestatement) score = 8;
  else if (hasGoingConcern) score = 7;
  else if (hasMaterialWeakness) score = 6;
  return { one_line_summary: summary.slice(0, 150), significance_score: score, insider_data: null, has_earnings_data: true };
}

function extractTenQ(text, companyName, ticker, filedDate) {
  const periodMatch = text.match(/(?:quarterly\s+period|period\s+of\s+report|for\s+the\s+(?:quarterly\s+)?period\s+end(?:ed|ing))[:\s]*([A-Za-z]+\s+\d{1,2},?\s+\d{4}|\d{4}-\d{2}-\d{2})/i);
  const period = periodMatch?.[1] ?? "";
  const hasGoingConcern = /going\s+concern/i.test(text);
  const hasRestatement = /restate/i.test(text);
  let summary = period ? `${companyName} (${ticker}) filed quarterly report (10-Q) for period ending ${period}` : `${companyName} (${ticker}) filed quarterly report (10-Q) on ${formatDate(filedDate)}`;
  let score = 3;
  if (hasRestatement) score = 7;
  else if (hasGoingConcern) score = 6;
  return { one_line_summary: summary.slice(0, 150), significance_score: score, insider_data: null, has_earnings_data: true };
}

function extractTemplate(text, filingType, companyName, ticker, filedDate) {
  const type = filingType.toUpperCase().trim();
  if (type === "4" || type.startsWith("4/")) return extractFormFour(text, companyName, ticker, filedDate);
  if (type.startsWith("8-K")) return extractEightK(text, companyName, ticker, filedDate);
  if (type.startsWith("10-K")) return extractTenK(text, companyName, ticker, filedDate);
  if (type.startsWith("10-Q")) return extractTenQ(text, companyName, ticker, filedDate);
  return { one_line_summary: `${ticker} filed a ${filingType} with the SEC on ${formatDate(filedDate)}`, significance_score: 3, insider_data: null, has_earnings_data: false };
}

// ── Main ──────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function processFiling(filing, company) {
  const text = await downloadFiling(filing.raw_url);
  if (text.length < 50) return { skipped: true, reason: "too short" };

  const result = extractTemplate(text, filing.filing_type, company.name, company.ticker, filing.filed_date);

  await dbUpdate("filings", filing.id, {
    one_line_summary: result.one_line_summary,
    significance_score: result.significance_score,
    insider_data: result.insider_data,
    has_earnings_data: result.has_earnings_data,
    processed_at: new Date().toISOString(),
  });

  return { skipped: false, result };
}

async function main() {
  const totalRemaining = await dbCount(`significance_score=eq.0&filing_type=eq.${encodeURIComponent(TYPE_FILTER)}`);
  console.log(`\n=== Extract All: ${TYPE_FILTER} ===`);
  console.log(`Total unscored: ${totalRemaining} | Concurrency: ${CONCURRENCY} | Batch: ${BATCH_SIZE}\n`);

  let grandProcessed = 0, grandSkipped = 0, grandErrors = 0;
  let round = 0;
  const grandStart = Date.now();

  while (true) {
    round++;
    const remaining = await dbCount(`significance_score=eq.0&filing_type=eq.${encodeURIComponent(TYPE_FILTER)}`);
    if (remaining === 0) break;

    console.log(`\n--- Round ${round}: ${remaining} remaining ---`);

    // Fetch batch (max 1000 from PostgREST)
    const filings = await dbSelect(
      "filings",
      `select=id,filing_type,filed_date,raw_url,company_id,significance_score&filing_type=eq.${encodeURIComponent(TYPE_FILTER)}&significance_score=eq.0&order=filed_date.desc&limit=${BATCH_SIZE}`
    );

    if (filings.length === 0) break;

    // Pre-fetch company data
    const companyIds = [...new Set(filings.map(f => f.company_id))];
    const companyMap = new Map();
    for (let i = 0; i < companyIds.length; i += 200) {
      const batch = companyIds.slice(i, i + 200);
      const companies = await dbSelect(
        "companies",
        `select=id,ticker,name&id=in.(${batch.map(id => `"${id}"`).join(",")})`
      );
      for (const c of companies) companyMap.set(c.id, c);
    }

    let processed = 0, skipped = 0, errors = 0;
    const roundStart = Date.now();

    for (let i = 0; i < filings.length; i += CONCURRENCY) {
      const batch = filings.slice(i, i + CONCURRENCY);
      const results = await Promise.allSettled(
        batch.map(async (filing) => {
          const company = companyMap.get(filing.company_id);
          if (!company) return { skipped: true, reason: "no company" };
          return processFiling(filing, company);
        })
      );

      for (const r of results) {
        if (r.status === "rejected") errors++;
        else if (r.value.skipped) skipped++;
        else processed++;
      }

      const total = i + batch.length;
      if (total % 50 === 0 || total === filings.length) {
        const elapsed = ((Date.now() - roundStart) / 1000).toFixed(0);
        const rate = processed > 0 ? (processed / ((Date.now() - roundStart) / 1000)).toFixed(1) : "0.0";
        const grandTotal = grandProcessed + processed;
        process.stdout.write(`\r  [${total}/${filings.length}] ${processed} ok, ${skipped} skip, ${errors} err | ${rate}/s | grand: ${grandTotal}/${totalRemaining}`);
      }

      await sleep(600 * CONCURRENCY); // Rate limit: ~1 req/s per concurrency slot
    }

    grandProcessed += processed;
    grandSkipped += skipped;
    grandErrors += errors;

    const roundElapsed = ((Date.now() - roundStart) / 1000).toFixed(0);
    console.log(`\n  Round ${round}: ${processed} ok, ${skipped} skip, ${errors} err in ${roundElapsed}s`);

    // Brief pause between rounds
    await sleep(2000);
  }

  const grandElapsed = ((Date.now() - grandStart) / 1000).toFixed(1);
  console.log(`\n=== All Done ===`);
  console.log(`Type: ${TYPE_FILTER}`);
  console.log(`Processed: ${grandProcessed}`);
  console.log(`Skipped: ${grandSkipped}`);
  console.log(`Errors: ${grandErrors}`);
  console.log(`Rounds: ${round}`);
  console.log(`Time: ${grandElapsed}s (${(grandElapsed / 60).toFixed(1)} min)`);
}

main().catch(err => { console.error("\nFatal:", err.message); process.exit(1); });
