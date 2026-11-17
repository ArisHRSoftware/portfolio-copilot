/**
 * Local script to backfill EDGAR filings directly into Supabase.
 *
 * Bypasses the Vercel API (which times out at 300s).
 * Connects directly to production Supabase using .env credentials.
 * Fetches from SEC EDGAR full-text search API.
 * Stores filing metadata + template extraction (no AI analysis).
 *
 * Usage:
 *   node scripts/backfill-local.mjs                    # default: 90 days, all types
 *   node scripts/backfill-local.mjs --days 30          # last 30 days
 *   node scripts/backfill-local.mjs --start 2026-08-01 --end 2026-11-09
 *   node scripts/backfill-local.mjs --type 4           # Form 4 only
 *   node scripts/backfill-local.mjs --type 4 --process # Form 4 + extract insider data
 *   node scripts/backfill-local.mjs --dry-run          # preview without inserting
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
const PROCESS = args.includes("--process");  // Enable template extraction
const FORM_TYPE = getArg("--type", null);     // Filter by form type (e.g. "4")
const DAYS = parseInt(getArg("--days", "90"), 10);
const CUSTOM_START = getArg("--start", null);
const CUSTOM_END = getArg("--end", null);

// ── Validate env ──────────────────────────────────────────────────────
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
  process.exit(1);
}

// ── Supabase REST API wrapper ─────────────────────────────────────────
const DB_BASE = `${SUPABASE_URL}/rest/v1`;
const DB_HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

async function dbSelect(table, query) {
  const res = await fetch(`${DB_BASE}/${table}?${query}`, {
    headers: { ...DB_HEADERS, Prefer: "" },
  });
  if (!res.ok) throw new Error(`DB select ${table}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function dbInsert(table, data) {
  const res = await fetch(`${DB_BASE}/${table}`, {
    method: "POST",
    headers: { ...DB_HEADERS, Prefer: "return=minimal,resolution=ignore-duplicates" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const text = await res.text();
    // 409 = conflict (duplicate), treat as skip
    if (res.status === 409 || text.includes("23505")) return { skipped: true };
    throw new Error(`DB insert ${table}: ${res.status} ${text}`);
  }
  return { skipped: false };
}

async function dbUpsert(table, data, onConflict) {
  const res = await fetch(`${DB_BASE}/${table}`, {
    method: "POST",
    headers: {
      ...DB_HEADERS,
      Prefer: `return=minimal,resolution=merge-duplicates`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`DB upsert ${table}: ${res.status} ${text}`);
  }
}

// ── EDGAR constants ───────────────────────────────────────────────────
const EDGAR_UA = "Brefyr admin@brefyr.com";
const EDGAR_SEARCH_BASE = "https://efts.sec.gov/LATEST/search-index";
const FILING_TYPES = ["10-K", "10-Q", "8-K", "4", "DEF 14A", "13F-HR", "SC 13D", "SC 13G"];
const PAGE_SIZE = 100;
const MAX_PAGES = 100; // 10,000 filings max per date chunk

// ── SIC to Sector mapping (mirrors constants/sectors.ts) ──────────────
function sicToSector(sicCode) {
  const sic = parseInt(sicCode, 10);
  if (isNaN(sic)) return "Technology";

  if (sic < 1000) return "Basic Materials";
  if (sic < 1500) return "Basic Materials";
  if (sic < 1800) return "Industrials";

  if (sic >= 2000 && sic < 2800) return "Consumer Defensive";
  if (sic >= 2800 && sic < 2900) return "Healthcare";
  if (sic >= 2900 && sic < 3000) return "Energy";

  // Computer & Office Equipment — Technology (AAPL=3571, etc.)
  if (sic >= 3570 && sic < 3580) return "Technology";
  // Electronic components & semiconductors
  if (sic >= 3670 && sic < 3680) return "Technology";

  if (sic >= 3000 && sic < 3600) return "Industrials";
  if (sic >= 3600 && sic < 3700) return "Technology";
  if (sic >= 3700 && sic < 3800) return "Consumer Cyclical";
  if (sic >= 3800 && sic < 3900) return "Healthcare";
  if (sic >= 3900 && sic < 4000) return "Consumer Cyclical";

  if (sic >= 4800 && sic < 4900) return "Communication Services";
  if (sic >= 4000 && sic < 4900) return "Industrials";
  if (sic >= 4900 && sic < 5000) return "Utilities";

  if (sic >= 5000 && sic < 6000) return "Consumer Cyclical";

  if (sic >= 6000 && sic < 6200) return "Financial Services";
  if (sic >= 6200 && sic < 6300) return "Financial Services";
  if (sic >= 6300 && sic < 6500) return "Financial Services";
  if (sic >= 6500 && sic < 6600) return "Real Estate";
  if (sic >= 6600 && sic < 6800) return "Financial Services";

  if (sic >= 7370 && sic < 7380) return "Technology";
  if (sic >= 7300 && sic < 7400) return "Technology";
  if (sic >= 7000 && sic < 7400) return "Consumer Cyclical";
  if (sic >= 7400 && sic < 7500) return "Industrials";
  if (sic >= 7500 && sic < 7600) return "Consumer Cyclical";
  if (sic >= 7800 && sic < 8000) return "Communication Services";
  if (sic >= 8000 && sic < 8100) return "Healthcare";
  if (sic >= 8100 && sic < 8200) return "Industrials";
  if (sic >= 8200 && sic < 8300) return "Consumer Cyclical";
  if (sic >= 8700 && sic < 8800) return "Technology";
  if (sic >= 8300 && sic < 8800) return "Industrials";

  return "Industrials";
}

// ── EDGAR fetch helpers ───────────────────────────────────────────────

function normalizeAccession(raw) {
  const digits = raw.replace(/[^0-9]/g, "");
  if (digits.length === 18) {
    return `${digits.slice(0, 10)}-${digits.slice(10, 12)}-${digits.slice(12)}`;
  }
  return raw.replace(/_/g, "-");
}

function buildFilingUrl(accession) {
  const clean = accession.replace(/-/g, "");
  return `https://www.sec.gov/Archives/edgar/data/${clean.slice(0, 10)}/${clean}/${accession}-index.htm`;
}

function extractTicker(displayNames) {
  if (!displayNames || displayNames.length === 0) return null;
  const matches = displayNames[0].match(/\(([^)]+)\)/g);
  if (!matches) return null;
  for (const match of matches) {
    const inner = match.slice(1, -1).trim();
    if (!inner.startsWith("CIK")) return inner;
  }
  return null;
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Fetch filings from EDGAR for a specific date range.
 * Paginates automatically. No limit on total filings.
 * If FORM_TYPE is set, fetches only that form type.
 */
async function fetchEdgarFilings(startDate, endDate) {
  const targetTypes = FORM_TYPE
    ? [FORM_TYPE.toUpperCase().trim()]
    : FILING_TYPES;
  const forms = targetTypes.map((t) => t.replace(/ /g, "+")).join(",");
  const allFilings = [];
  const seenAccessions = new Set();

  for (let page = 0; page < MAX_PAGES; page++) {
    const offset = page * PAGE_SIZE;
    const url = `${EDGAR_SEARCH_BASE}?q=%22%22&forms=${forms}&dateRange=custom&startdt=${startDate}&enddt=${endDate}&from=${offset}&size=${PAGE_SIZE}`;

    let data;
    for (let attempt = 0; attempt <= 3; attempt++) {
      try {
        const res = await fetch(url, {
          headers: { "User-Agent": EDGAR_UA, Accept: "application/json" },
        });
        if (res.ok) {
          data = await res.json();
          break;
        }
        if (res.status >= 500 && attempt < 3) {
          console.log(`  EDGAR 500 error, retrying in ${2 ** (attempt + 1)}s...`);
          await sleep(2 ** (attempt + 1) * 1000);
          continue;
        }
        console.error(`  EDGAR error: ${res.status} on page ${page}`);
        return allFilings; // return what we have
      } catch (err) {
        if (attempt < 3) {
          await sleep(2 ** (attempt + 1) * 1000);
          continue;
        }
        console.error(`  EDGAR fetch error: ${err.message}`);
        return allFilings;
      }
    }

    if (!data) break;

    const total = data.hits?.total?.value ?? 0;
    const hits = data.hits?.hits ?? [];

    for (const hit of hits) {
      const source = hit._source;
      if (!source) continue;

      const adsh = source.adsh ?? "";
      const rawId = hit._id ?? "";
      const rawAccession = adsh || rawId.split(":")[0];
      if (!rawAccession) continue;
      const accession = normalizeAccession(rawAccession);

      if (seenAccessions.has(accession)) continue;

      const rootForms = source.root_forms ?? [];
      const filingType = rootForms[0] ?? source.form_type ?? "";
      const normalizedType = filingType.toUpperCase().trim();
      const isTarget = targetTypes.some(
        (t) => normalizedType === t || normalizedType.startsWith(t + "/") || normalizedType.startsWith(t + " ")
      );
      if (!isTarget) continue;

      const displayNames = source.display_names ?? [];
      const ciks = source.ciks ?? [];
      const companyCik = (ciks[0] ?? "").replace(/^0+/, "") || rawAccession.replace(/-/g, "").slice(0, 10).replace(/^0+/, "");
      const companyName = (displayNames[0] ?? "").split("(")[0].trim() || "";
      const companyTicker = extractTicker(displayNames);
      const companySic = (source.sics ?? [])[0] ?? null;
      const filedDate = source.file_date ?? "";

      seenAccessions.add(accession);
      allFilings.push({
        accession_number: accession,
        filing_type: filingType,
        company_cik: companyCik,
        company_name: companyName,
        company_ticker: companyTicker,
        company_sic: companySic,
        filed_date: filedDate,
        filing_url: buildFilingUrl(accession),
      });
    }

    if ((page + 1) * PAGE_SIZE >= total || hits.length === 0) break;
    await sleep(150); // respect EDGAR rate limits
  }

  return allFilings;
}

// ── Filing download & template extraction ────────────────────────────
const EDGAR_DOC_UA = "Brefyr admin@brefyr.com";

/**
 * Download Form 4 raw XML from EDGAR.
 * Form 4 filings are XML-only — we parse the -index.htm page for the .xml link.
 */
async function downloadForm4Xml(rawUrl) {
  const dir = rawUrl.substring(0, rawUrl.lastIndexOf("/") + 1);

  // Step 1: Try index.json
  try {
    await sleep(120);
    const jsonUrl = dir + "index.json";
    const jr = await fetch(jsonUrl, { headers: { "User-Agent": EDGAR_DOC_UA, Accept: "application/json" } });
    if (jr.ok) {
      const idx = await jr.json();
      const items = idx.directory?.item ?? [];
      // Find raw XML doc (not the XSLT-rendered one in xslF345X06/)
      const xmlDoc = items.find((i) => i.name.endsWith(".xml") && !i.name.includes("/"));
      if (xmlDoc) {
        await sleep(120);
        const xr = await fetch(dir + xmlDoc.name, { headers: { "User-Agent": EDGAR_DOC_UA } });
        if (xr.ok) return xr.text();
      }
    }
  } catch { /* fallthrough */ }

  // Step 2: Parse -index.htm for links (Form 4 often lacks index.json)
  try {
    await sleep(120);
    const ir = await fetch(rawUrl, { headers: { "User-Agent": EDGAR_DOC_UA } });
    if (ir.ok) {
      const html = await ir.text();
      // Find .xml links that aren't XSLT-rendered (not under xsl* path)
      const xmlLinks = [];
      const linkRe = /href="([^"]*\.xml)"/gi;
      let m;
      while ((m = linkRe.exec(html)) !== null) {
        const href = m[1];
        if (!href.includes("/xsl")) xmlLinks.push(href);
      }
      if (xmlLinks.length > 0) {
        const xmlPath = xmlLinks[0].startsWith("http") ? xmlLinks[0] : "https://www.sec.gov" + xmlLinks[0];
        await sleep(120);
        const xr = await fetch(xmlPath, { headers: { "User-Agent": EDGAR_DOC_UA } });
        if (xr.ok) return xr.text();
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

// ── Main ──────────────────────────────────────────────────────────────

async function main() {
  // Calculate date range
  let startStr, endStr;
  if (CUSTOM_START && CUSTOM_END) {
    startStr = CUSTOM_START;
    endStr = CUSTOM_END;
  } else {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - DAYS);
    startStr = start.toISOString().slice(0, 10);
    endStr = end.toISOString().slice(0, 10);
  }

  console.log(`\n=== Brefyr Local Backfill ===`);
  console.log(`Date range: ${startStr} to ${endStr}`);
  console.log(`Form type: ${FORM_TYPE || "ALL"}`);
  console.log(`Template extraction: ${PROCESS}`);
  console.log(`Dry run: ${DRY_RUN}`);
  console.log(`Supabase: ${SUPABASE_URL}\n`);

  // EDGAR limits date ranges in search. Process in 7-day chunks.
  const chunks = [];
  let chunkStart = new Date(startStr);
  const finalEnd = new Date(endStr);

  while (chunkStart < finalEnd) {
    const chunkEnd = new Date(chunkStart);
    chunkEnd.setDate(chunkEnd.getDate() + 6); // 7-day window
    if (chunkEnd > finalEnd) chunkEnd.setTime(finalEnd.getTime());

    chunks.push({
      start: chunkStart.toISOString().slice(0, 10),
      end: chunkEnd.toISOString().slice(0, 10),
    });

    chunkStart = new Date(chunkEnd);
    chunkStart.setDate(chunkStart.getDate() + 1);
  }

  console.log(`Processing ${chunks.length} weekly chunks...\n`);

  let totalFetched = 0;
  let totalIngested = 0;
  let totalSkipped = 0;
  let totalCompaniesCreated = 0;
  let totalErrors = 0;

  for (let ci = 0; ci < chunks.length; ci++) {
    const chunk = chunks[ci];
    process.stdout.write(`[${ci + 1}/${chunks.length}] ${chunk.start} → ${chunk.end}: `);

    // Fetch from EDGAR
    const filings = await fetchEdgarFilings(chunk.start, chunk.end);
    totalFetched += filings.length;
    process.stdout.write(`${filings.length} filings found`);

    if (filings.length === 0 || DRY_RUN) {
      console.log(DRY_RUN ? " (dry run, skipping DB)" : "");
      continue;
    }

    // Deduplicate against existing DB filings
    const accessions = filings.map((f) => f.accession_number);
    const existingSet = new Set();

    for (let i = 0; i < accessions.length; i += 200) {
      const batch = accessions.slice(i, i + 200);
      try {
        const existing = await dbSelect(
          "filings",
          `select=accession_number&accession_number=in.(${batch.map((a) => `"${a}"`).join(",")})`
        );
        for (const row of existing) {
          existingSet.add(row.accession_number);
        }
      } catch (err) {
        console.error(`  DB dedup error: ${err.message}`);
      }
    }

    const newFilings = filings.filter((f) => !existingSet.has(f.accession_number));
    process.stdout.write(` → ${newFilings.length} new`);

    // Ingest new filings
    let chunkIngested = 0;
    let chunkErrors = 0;

    for (const filing of newFilings) {
      try {
        // Find or create company
        const paddedCik = filing.company_cik.padStart(10, "0");
        let companyId = null;
        let companyTicker = null;

        // Try to find by CIK
        try {
          const found = await dbSelect(
            "companies",
            `select=id,ticker&or=(cik_number.eq.${paddedCik},cik_number.eq.${filing.company_cik})&limit=1`
          );
          if (found.length > 0) {
            companyId = found[0].id;
            companyTicker = found[0].ticker;
          }
        } catch { /* not found */ }

        // Create company if not found
        if (!companyId) {
          const ticker = filing.company_ticker || `CIK${filing.company_cik}`;
          const sector = filing.company_sic ? sicToSector(filing.company_sic) : "";
          try {
            const res = await fetch(`${DB_BASE}/companies`, {
              method: "POST",
              headers: DB_HEADERS,
              body: JSON.stringify({
                ticker,
                name: filing.company_name || `Company ${filing.company_cik}`,
                cik_number: paddedCik,
                sector,
                exchange: "",
                market_cap: 0,
                status: "active",
              }),
            });
            if (res.ok) {
              const created = await res.json();
              if (created.length > 0) {
                companyId = created[0].id;
                companyTicker = created[0].ticker;
                totalCompaniesCreated++;
              }
            } else {
              // Likely duplicate — try finding again
              const retry = await dbSelect(
                "companies",
                `select=id,ticker&or=(cik_number.eq.${paddedCik},ticker.eq.${encodeURIComponent(filing.company_ticker || `CIK${filing.company_cik}`)})&limit=1`
              );
              if (retry.length > 0) {
                companyId = retry[0].id;
                companyTicker = retry[0].ticker;
              }
            }
          } catch {
            // Try one more lookup
            try {
              const retry = await dbSelect(
                "companies",
                `select=id,ticker&cik_number=eq.${paddedCik}&limit=1`
              );
              if (retry.length > 0) {
                companyId = retry[0].id;
                companyTicker = retry[0].ticker;
              }
            } catch { /* give up */ }
          }
        }

        if (!companyId) {
          chunkErrors++;
          continue;
        }

        // Generate slug
        const typePart = filing.filing_type.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
        const datePart = filing.filed_date.slice(0, 10);
        const accSuffix = filing.accession_number.slice(-6);
        const ticker = (companyTicker || "unknown").toLowerCase();
        const slug = `${ticker}-${typePart}-${datePart}-${accSuffix}`;

        // Template extraction (if --process flag set)
        let templateData = null;
        if (PROCESS) {
          try {
            const filingTypeUpper = filing.filing_type.toUpperCase().trim();
            if (filingTypeUpper === "4" || filingTypeUpper.startsWith("4/")) {
              // Form 4: download raw XML and parse structured data
              const xml = await downloadForm4Xml(filing.filing_url);
              if (xml.length >= 50 && xml.includes("<ownershipDocument")) {
                templateData = parseForm4Xml(
                  xml, filing.company_name, companyTicker || ticker, filing.filed_date
                );
              }
              // Fall through to basic summary if XML download fails
            }
            // Other filing types get a basic summary (no download-based extraction yet)
          } catch {
            // Template extraction failed — still ingest with basic summary
          }
        }

        // Insert filing
        const filingRow = {
          company_id: companyId,
          slug,
          filing_type: filing.filing_type,
          filed_date: filing.filed_date,
          accession_number: filing.accession_number,
          raw_url: filing.filing_url,
          significance_score: templateData?.significance_score ?? 0,
          one_line_summary: templateData?.one_line_summary
            ?? `${companyTicker || ticker} filed a ${filing.filing_type} with the SEC on ${filing.filed_date}`,
        };

        if (templateData) {
          filingRow.processed_at = new Date().toISOString();
          if (templateData.insider_data) {
            filingRow.insider_data = templateData.insider_data;
          }
          filingRow.has_earnings_data = templateData.has_earnings_data;
        }

        const result = await dbInsert("filings", filingRow);

        if (result.skipped) {
          totalSkipped++;
        } else {
          chunkIngested++;
          totalIngested++;
        }
      } catch (err) {
        chunkErrors++;
        totalErrors++;
      }
    }

    console.log(` → ${chunkIngested} ingested, ${chunkErrors} errors`);

    // Small delay between chunks to avoid overwhelming Supabase
    await sleep(500);
  }

  console.log(`\n=== Backfill Complete ===`);
  console.log(`EDGAR filings found: ${totalFetched}`);
  console.log(`New filings ingested: ${totalIngested}`);
  console.log(`Skipped (already exist): ${totalSkipped}`);
  console.log(`Companies created: ${totalCompaniesCreated}`);
  console.log(`Errors: ${totalErrors}`);

  if (DRY_RUN) {
    console.log(`\n(Dry run — no data was written to the database)`);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
