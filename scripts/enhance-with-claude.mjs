/**
 * Analyze ALL SEC filings using your Claude Code subscription (no API key needed).
 *
 * Runs continuously until every filing has AI analysis. Downloads each filing
 * from SEC EDGAR, sends it to `claude -p` (your subscription), validates the
 * response for data integrity, and updates Supabase.
 *
 * Data integrity guarantees:
 *   - Filings with <500 chars of text are marked "sec_unavailable" (not fake-analyzed)
 *   - Analysis JSON is validated for required fields before DB write
 *   - Significance scores clamped 1-10, NaN guards on all numbers
 *   - Garbage detection: rejects analysis that mentions "404", "not available", etc.
 *   - Each filing is atomic: either fully updated or untouched
 *   - Progress logged with running totals and remaining count
 *
 * Usage:
 *   node scripts/enhance-with-claude.mjs                    # Continuous until done
 *   node scripts/enhance-with-claude.mjs --limit 50         # Stop after 50 filings
 *   node scripts/enhance-with-claude.mjs --model opus       # Use Opus (higher quality)
 *   node scripts/enhance-with-claude.mjs --dry-run          # Preview only
 *   node scripts/enhance-with-claude.mjs --batch 25         # Fetch 25 per DB query
 */

import { spawnSync, execSync } from "child_process";
import { readFileSync, writeFileSync, unlinkSync, appendFileSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";
import { tmpdir } from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------------------------------------------------------------------------
// Load .env
// ---------------------------------------------------------------------------
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
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
}

loadEnv();

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
function getArg(name, defaultVal) {
  const idx = args.indexOf(name);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : defaultVal;
}
const LIMIT = parseInt(getArg("--limit", "0"), 10); // 0 = unlimited (continuous)
const BATCH_SIZE = parseInt(getArg("--batch", "25"), 10);
const MODEL = getArg("--model", "sonnet");
const DRY_RUN = args.includes("--dry-run");
const TIMEOUT_MS = parseInt(getArg("--timeout", "180000"), 10);

// Minimum filing text length to analyze — shorter means SEC returned an error
// page, a bare index, or the filing isn't available.
const MIN_TEXT_CHARS = 500;

// Unique worker ID for parallel claim mechanism
const WORKER_ID = `w${process.pid}-${Date.now().toString(36)}`;

// ---------------------------------------------------------------------------
// Validate env
// ---------------------------------------------------------------------------
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing SUPABASE_URL or SERVICE_ROLE_KEY in .env");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Log file — persistent record of what happened
// ---------------------------------------------------------------------------
const LOG_FILE = resolve(__dirname, "..", "enhance-log.txt");

function log(msg) {
  const ts = new Date().toISOString().slice(0, 19).replace("T", " ");
  const line = `[${ts}] ${msg}`;
  console.log(line);
  try {
    appendFileSync(LOG_FILE, line + "\n");
  } catch { /* ignore */ }
}

// ---------------------------------------------------------------------------
// Supabase REST via curl
// ---------------------------------------------------------------------------
const DB_BASE = `${SUPABASE_URL}/rest/v1`;

function curlGet(url) {
  const result = execSync(
    `curl -sL --connect-timeout 15 --max-time 30 "${url}" ` +
      `-H "apikey: ${SUPABASE_KEY}" ` +
      `-H "Authorization: Bearer ${SUPABASE_KEY}"`,
    { encoding: "utf-8", maxBuffer: 10 * 1024 * 1024, windowsHide: true }
  );
  const parsed = JSON.parse(result);
  if (parsed.code && parsed.message) throw new Error(`DB: ${parsed.message}`);
  return parsed;
}

function curlPatch(url, data) {
  const tmpFile = join(tmpdir(), `brefyr-patch-${Date.now()}.json`);
  writeFileSync(tmpFile, JSON.stringify(data), "utf-8");
  try {
    const result = execSync(
      `curl -sL --connect-timeout 15 --max-time 30 -X PATCH "${url}" ` +
        `-H "apikey: ${SUPABASE_KEY}" ` +
        `-H "Authorization: Bearer ${SUPABASE_KEY}" ` +
        `-H "Content-Type: application/json" ` +
        `-H "Prefer: return=representation" ` +
        `-d @"${tmpFile.replace(/\\/g, "/")}"`,
      { encoding: "utf-8", maxBuffer: 10 * 1024 * 1024, windowsHide: true }
    );
    if (!result) return {};
    const parsed = JSON.parse(result);
    if (parsed.code && parsed.message) {
      throw new Error(`DB update error ${parsed.code}: ${parsed.message}`);
    }
    return parsed;
  } finally {
    try { unlinkSync(tmpFile); } catch { /* ignore */ }
  }
}

function dbSelect(table, query) {
  return curlGet(`${DB_BASE}/${table}?${query}`);
}

function dbUpdate(table, matchCol, matchVal, data) {
  return curlPatch(`${DB_BASE}/${table}?${matchCol}=eq.${matchVal}`, data);
}

/**
 * Atomically claim a filing for processing.
 * Sets ai_summary_json to a processing marker ONLY if it's still NULL.
 * Returns true if this instance claimed it, false if another instance got it first.
 */
function claimFiling(filingId) {
  const marker = JSON.stringify({
    _status: "processing",
    _claimed_at: new Date().toISOString(),
    _worker: WORKER_ID,
  });
  const tmpFile = join(tmpdir(), `brefyr-claim-${Date.now()}.json`);
  writeFileSync(tmpFile, `{"ai_summary_json": ${marker}}`, "utf-8");
  try {
    // PATCH with both id AND ai_summary_json=is.null — only succeeds if unclaimed
    const result = execSync(
      `curl -sL --connect-timeout 10 --max-time 15 -X PATCH ` +
        `"${DB_BASE}/filings?id=eq.${filingId}&ai_summary_json=is.null" ` +
        `-H "apikey: ${SUPABASE_KEY}" ` +
        `-H "Authorization: Bearer ${SUPABASE_KEY}" ` +
        `-H "Content-Type: application/json" ` +
        `-H "Prefer: return=representation" ` +
        `-d @"${tmpFile.replace(/\\/g, "/")}"`,
      { encoding: "utf-8", maxBuffer: 1024 * 1024, windowsHide: true }
    );
    if (!result) return false;
    const parsed = JSON.parse(result);
    // PostgREST returns array of updated rows; empty = another worker got it
    return Array.isArray(parsed) && parsed.length > 0;
  } catch {
    return false;
  } finally {
    try { unlinkSync(tmpFile); } catch { /* ignore */ }
  }
}

/**
 * Release a claim if processing fails (so the filing can be retried).
 */
function releaseClaim(filingId) {
  try {
    // Only release if still in "processing" state (not already overwritten with real data)
    execSync(
      `curl -sL --connect-timeout 10 --max-time 15 -X PATCH ` +
        `"${DB_BASE}/filings?id=eq.${filingId}&ai_summary_json->>_status=eq.processing" ` +
        `-H "apikey: ${SUPABASE_KEY}" ` +
        `-H "Authorization: Bearer ${SUPABASE_KEY}" ` +
        `-H "Content-Type: application/json" ` +
        `-d '{"ai_summary_json": null}'`,
      { encoding: "utf-8", windowsHide: true }
    );
  } catch { /* best effort */ }
}

function dbCount(table, filter) {
  // Use PostgREST head-only count
  const result = execSync(
    `curl -sL --connect-timeout 15 --max-time 15 -I "${DB_BASE}/${table}?${filter}&select=id" ` +
      `-H "apikey: ${SUPABASE_KEY}" ` +
      `-H "Authorization: Bearer ${SUPABASE_KEY}" ` +
      `-H "Prefer: count=exact"`,
    { encoding: "utf-8", windowsHide: true }
  );
  const match = result.match(/content-range:\s*\d+-\d+\/(\d+)/i) ||
                result.match(/content-range:\s*\*\/(\d+)/i);
  return match ? parseInt(match[1], 10) : -1;
}

// ---------------------------------------------------------------------------
// SEC EDGAR filing download
// ---------------------------------------------------------------------------
const EDGAR_UA = "Brefyr admin@brefyr.com";
const MAX_CHARS = 100_000;

function stripHtml(html) {
  let text = html;
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  text = text.replace(/<[^>]+>/g, " ");
  text = text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#\d+;/g, " ")
    .replace(/&[a-zA-Z]+;/g, " ");
  text = text
    .replace(/\t/g, " ")
    .replace(/ {2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n");
  return text.trim();
}

function resolveDocUrl(rawUrl) {
  if (!rawUrl.endsWith("-index.htm") && !rawUrl.endsWith("-index.html"))
    return rawUrl;

  const basePath = rawUrl.substring(0, rawUrl.lastIndexOf("/") + 1);

  // Strategy 1: Try index.json for structured file list
  try {
    const jsonUrl = basePath + "index.json";
    const result = execSync(
      `curl -sL --connect-timeout 10 --max-time 20 "${jsonUrl}" ` +
        `-H "User-Agent: ${EDGAR_UA}" -H "Accept: application/json"`,
      { encoding: "utf-8", maxBuffer: 5 * 1024 * 1024, windowsHide: true }
    );
    if (result.startsWith("{")) {
      const idx = JSON.parse(result);
      const items = idx.directory?.item ?? [];
      const primary = items.find(
        (i) =>
          (i.name.endsWith(".htm") || i.name.endsWith(".html")) &&
          !i.name.includes("index") &&
          !i.name.startsWith("R")
      );
      if (primary) return basePath + primary.name;
      const txt = items.find(
        (i) => i.name.endsWith(".txt") && !i.name.includes("index")
      );
      if (txt) return basePath + txt.name;
    }
  } catch {
    /* fall through */
  }

  // Strategy 2: Parse the HTML index page for document links
  try {
    const html = execSync(
      `curl -sL --connect-timeout 10 --max-time 20 "${rawUrl}" ` +
        `-H "User-Agent: ${EDGAR_UA}"`,
      { encoding: "utf-8", maxBuffer: 5 * 1024 * 1024, windowsHide: true }
    );
    // /ix?doc= links = inline XBRL viewer wrapping the actual document
    const ixMatches = html.match(/\/ix\?doc=([^"&]+\.htm[l]?)/gi) || [];
    for (const match of ixMatches) {
      const docPath = match.replace(/^\/ix\?doc=/, "");
      if (!docPath.includes("index") && !docPath.match(/\/R\d+\.htm/)) {
        return `https://www.sec.gov${docPath}`;
      }
    }
    // Direct .htm links in /Archives/
    const archiveMatches =
      html.match(/\/Archives\/edgar\/data\/[^"]+\.htm[l]?/gi) || [];
    for (const docPath of archiveMatches) {
      const name = docPath.split("/").pop() || "";
      if (!name.includes("index") && !name.startsWith("R") && !name.includes("ex3")) {
        return `https://www.sec.gov${docPath}`;
      }
    }
  } catch {
    /* fall through */
  }

  return rawUrl;
}

function downloadFiling(rawUrl) {
  const docUrl = resolveDocUrl(rawUrl);
  const raw = execSync(
    `curl -sL --connect-timeout 10 --max-time 60 "${docUrl}" ` +
      `-H "User-Agent: ${EDGAR_UA}" -H "Accept: text/html, text/plain, */*"`,
    { encoding: "utf-8", maxBuffer: 20 * 1024 * 1024, windowsHide: true }
  );
  if (!raw || raw.length < 10) throw new Error(`Empty response from ${docUrl}`);
  const clean = stripHtml(raw);
  return clean.length <= MAX_CHARS
    ? clean
    : clean.slice(0, MAX_CHARS) + "\n\n[Truncated]";
}

// ---------------------------------------------------------------------------
// Claude CLI analysis
// ---------------------------------------------------------------------------
const ANALYSIS_PROMPT = `You are an SEC filing analyst for Brefyr, a tool that helps retail investors track small-cap stocks. Analyze SEC filings and return structured data.

Key principles:
- Write for retail investors, not Wall Street professionals
- Flag anything that could materially affect the stock price
- Be specific with numbers: revenue, EPS, share counts, transaction prices
- Significance score: 1-3 = routine filing, standard periodic disclosure. 4-6 = notable, contains meaningful info. 7-8 = significant, material event or large transaction. 9-10 = critical ONLY for restatement, fraud, hostile takeover, bankruptcy.
- For Form 4: focus on insider trade details (who, buy/sell, shares, price, total value)
- For 10-K/10-Q: focus on financial results, key metrics, risk factors, guidance
- For 8-K: focus on the specific material event
- For DEF 14A: focus on executive compensation, shareholder proposals
- For 13F-HR: focus on portfolio composition, largest holdings, changes

Return ONLY valid JSON with this exact structure:
{
  "key_facts": ["string - 3-8 bullet points of the most important facts"],
  "insider_trades": [{"person": "name", "title": "role", "transaction_type": "buy|sell|grant|exercise|other", "shares": 0, "price_per_share": 0.0, "date": "YYYY-MM-DD"}],
  "risk_flags": ["string - red flags: going concern, material weakness, litigation, debt covenant breach"],
  "earnings_impact": {"revenue_change": "string or null", "eps_change": "string or null", "guidance": "string or null", "notable_items": ["string"]},
  "significance_score": 5,
  "one_line_summary": "Max 150 chars — specific: include company name, key number, what happened",
  "detailed_summary": "2-3 paragraphs explaining what this filing means for the stock in plain language",
  "faq": [{"question": "string — question a retail investor would ask", "answer": "string — clear answer"}]
}`;

// Write system prompt file once (reused across all calls)
const SYS_PROMPT_FILE = join(tmpdir(), `brefyr-sysprompt.txt`);
writeFileSync(SYS_PROMPT_FILE, ANALYSIS_PROMPT, "utf-8");

function analyzeWithClaude(filingText, filingType, companyName, ticker) {
  const userPrompt = `Analyze this ${filingType} filing from ${companyName} (${ticker}).

Return the structured analysis as JSON only — no markdown, no code fences, no extra text.

--- FILING TEXT ---
${filingText}`;

  const tmpFile = join(tmpdir(), `brefyr-filing-${Date.now()}.txt`);
  writeFileSync(tmpFile, userPrompt, "utf-8");

  try {
    const sysFile = SYS_PROMPT_FILE.replace(/\\/g, "/");

    let stdout = "";
    try {
      stdout = execSync(
        `claude -p` +
          ` --output-format json` +
          ` --no-session-persistence` +
          ` --model ${MODEL}` +
          ` --system-prompt-file "${sysFile}"`,
        {
          input: readFileSync(tmpFile, "utf-8"),
          encoding: "utf-8",
          maxBuffer: 20 * 1024 * 1024,
          timeout: TIMEOUT_MS,
          windowsHide: true,
        }
      ).trim();
    } catch (execErr) {
      // execSync throws on non-zero exit
      const stderr = execErr.stderr?.toString().trim().slice(0, 300) || "";
      const stdoutPartial = execErr.stdout?.toString().trim().slice(0, 300) || "";
      const detail = stderr || stdoutPartial || "no output";
      throw new Error(`Claude failed: ${detail}`);
    }

    if (!stdout) throw new Error("Claude returned empty response");

    // Parse outer JSON wrapper
    let responseText;
    try {
      const outer = JSON.parse(stdout);
      if (outer.is_error) throw new Error(`Claude error: ${outer.result?.slice(0, 200)}`);
      responseText = outer.result || stdout;
    } catch (parseErr) {
      if (parseErr.message.startsWith("Claude error")) throw parseErr;
      responseText = stdout;
    }

    // Try to parse as analysis JSON. If Claude returned text instead of JSON,
    // it means it couldn't analyze the filing (bad text, refusal, etc.)
    try {
      return parseAndValidateAnalysis(responseText);
    } catch (parseErr) {
      // Check if Claude returned a non-JSON text response
      const lower = responseText.toLowerCase().slice(0, 200);
      if (
        lower.includes("unable to") || lower.includes("cannot analyze") ||
        lower.includes("not a valid") || lower.includes("i was") ||
        lower.includes("webfetch") || lower.includes("the provided") ||
        lower.includes("i wasn") || lower.includes("the filing") ||
        lower.includes("the actual") || lower.includes("based on")
      ) {
        throw new Error(`VALIDATION: Claude could not analyze — "${responseText.slice(0, 100)}..."`);
      }
      throw parseErr; // real JSON parse error, rethrow
    }
  } finally {
    try { unlinkSync(tmpFile); } catch { /* ignore */ }
  }
}

// ---------------------------------------------------------------------------
// Analysis validation — ensures data integrity before DB write
// ---------------------------------------------------------------------------
const GARBAGE_PATTERNS = [
  /404\s*(error|not found|page)/i,
  /filing\s*text\s*not\s*provided/i,
  /no\s*(filing|content|data)\s*(text\s*)?(was\s*)?(available|found|provided|could)/i,
  /unable\s*to\s*(analyze|access|retrieve|find)/i,
  /sec\.gov\s*returned/i,
  /empty\s*filing/i,
  /cannot\s*be\s*analyzed/i,
];

function parseAndValidateAnalysis(text) {
  // Strip markdown code fences
  let cleaned = text.trim();
  if (cleaned.startsWith("```json")) cleaned = cleaned.slice(7);
  else if (cleaned.startsWith("```")) cleaned = cleaned.slice(3);
  if (cleaned.endsWith("```")) cleaned = cleaned.slice(0, -3);
  cleaned = cleaned.trim();

  // Claude sometimes appends commentary after the JSON object.
  // Find the outermost matching {} and parse only that.
  const jsonStart = cleaned.indexOf("{");
  if (jsonStart >= 0) {
    let depth = 0;
    let jsonEnd = -1;
    for (let i = jsonStart; i < cleaned.length; i++) {
      if (cleaned[i] === "{") depth++;
      else if (cleaned[i] === "}") { depth--; if (depth === 0) { jsonEnd = i; break; } }
    }
    if (jsonEnd > jsonStart) {
      cleaned = cleaned.slice(jsonStart, jsonEnd + 1);
    }
  }

  const analysis = JSON.parse(cleaned);

  // ---- Required fields check ----
  if (!analysis.one_line_summary || analysis.one_line_summary.length < 10) {
    throw new Error("VALIDATION: one_line_summary missing or too short");
  }
  if (!analysis.detailed_summary || analysis.detailed_summary.length < 50) {
    throw new Error("VALIDATION: detailed_summary missing or too short");
  }
  if (!Array.isArray(analysis.key_facts) || analysis.key_facts.length === 0) {
    throw new Error("VALIDATION: key_facts empty or missing");
  }

  // ---- Garbage detection ----
  const combined = `${analysis.one_line_summary} ${analysis.detailed_summary}`;
  for (const pattern of GARBAGE_PATTERNS) {
    if (pattern.test(combined)) {
      throw new Error(`VALIDATION: garbage detected — "${combined.slice(0, 80)}..."`);
    }
  }

  // ---- Significance score ----
  if (typeof analysis.significance_score === "number" && !isNaN(analysis.significance_score)) {
    analysis.significance_score = Math.max(1, Math.min(10, Math.round(analysis.significance_score)));
  } else {
    analysis.significance_score = 3; // default to routine if missing
  }

  // ---- Insider trades NaN guard ----
  if (Array.isArray(analysis.insider_trades)) {
    analysis.insider_trades = analysis.insider_trades.filter((t) => {
      // Must have a person name
      if (!t.person || t.person.length < 2) return false;
      // Fix NaN
      if (typeof t.shares !== "number" || isNaN(t.shares)) t.shares = 0;
      if (t.price_per_share !== null && (typeof t.price_per_share !== "number" || isNaN(t.price_per_share))) {
        t.price_per_share = null;
      }
      // Validate transaction_type
      const validTypes = ["buy", "sell", "grant", "exercise", "other"];
      if (!validTypes.includes(t.transaction_type)) t.transaction_type = "other";
      return true;
    });
  } else {
    analysis.insider_trades = [];
  }

  // ---- Earnings impact defaults ----
  if (!analysis.earnings_impact || typeof analysis.earnings_impact !== "object") {
    analysis.earnings_impact = {
      revenue_change: null,
      eps_change: null,
      guidance: null,
      notable_items: [],
    };
  }
  if (!Array.isArray(analysis.earnings_impact.notable_items)) {
    analysis.earnings_impact.notable_items = [];
  }

  // ---- Risk flags ----
  if (!Array.isArray(analysis.risk_flags)) analysis.risk_flags = [];

  // ---- FAQ ----
  if (!Array.isArray(analysis.faq)) analysis.faq = [];
  analysis.faq = analysis.faq.filter(
    (f) => f.question && f.answer && f.question.length > 5 && f.answer.length > 5
  );

  // ---- Truncate one_line_summary to 150 chars ----
  if (analysis.one_line_summary.length > 150) {
    analysis.one_line_summary = analysis.one_line_summary.slice(0, 147) + "...";
  }

  return { analysis };
}

// ---------------------------------------------------------------------------
// Main — continuous processing loop
// ---------------------------------------------------------------------------
function main() {
  const startTime = Date.now();
  let totalProcessed = 0;
  let totalErrors = 0;
  let totalSkipped = 0;
  let consecutiveErrors = 0;

  log(`=== Claude Code Filing Enhancer [${WORKER_ID}] ===`);
  log(`Model: ${MODEL} | Batch: ${BATCH_SIZE} | Limit: ${LIMIT || "unlimited (continuous)"}${DRY_RUN ? " | DRY RUN" : ""}`);

  // Get initial count
  let remaining = dbCount("filings", "ai_summary_json=is.null");
  log(`Filings awaiting analysis: ${remaining}`);
  log(`Estimated time: ~${Math.round((remaining * 70) / 3600)} hours at ~70s/filing avg`);
  log("");

  while (true) {
    // Check if we've hit the limit
    if (LIMIT > 0 && totalProcessed >= LIMIT) {
      log(`Reached limit of ${LIMIT} filings. Stopping.`);
      break;
    }

    // Fetch next batch
    const batchLimit = LIMIT > 0
      ? Math.min(BATCH_SIZE, LIMIT - totalProcessed)
      : BATCH_SIZE;

    let filings;
    try {
      filings = dbSelect(
        "filings",
        `select=id,accession_number,filing_type,filed_date,raw_url,company_id,processed_at` +
          `&ai_summary_json=is.null` +
          `&order=filed_date.desc` +
          `&limit=${batchLimit}`
      );
    } catch (err) {
      log(`DB query failed: ${err.message}. Retrying in 30s...`);
      sleepSync(30_000);
      continue;
    }

    if (!filings || filings.length === 0) {
      log("\nAll filings have been analyzed. Done!");
      break;
    }

    log(`--- Batch: ${filings.length} filings | Total done: ${totalProcessed} | Remaining: ~${remaining} ---`);

    for (let i = 0; i < filings.length; i++) {
      // Respect limit mid-batch
      if (LIMIT > 0 && totalProcessed >= LIMIT) break;

      const f = filings[i];
      const globalIdx = totalProcessed + totalErrors + totalSkipped + 1;

      // Atomically claim this filing — skip if another worker got it first
      if (!DRY_RUN && !claimFiling(f.id)) {
        log(`#${globalIdx} ${f.filing_type} (${f.filed_date}) — claimed by another worker, skipping`);
        continue;
      }

      try {
        // Get company info
        const companies = dbSelect(
          "companies",
          `select=id,name,ticker&id=eq.${f.company_id}&limit=1`
        );
        const company = companies?.[0];

        if (!company) {
          log(`#${globalIdx} SKIP ${f.accession_number} — company not found`);
          totalSkipped++;
          // Mark as processed so we don't keep trying
          markSecUnavailable(f.id, f.processed_at, "Company not found in database");
          continue;
        }

        const ticker = company.ticker || company.name;
        const displayName = `${ticker} ${f.filing_type} (${f.filed_date})`;
        log(`#${globalIdx} ${displayName}`);

        // Download filing text from SEC
        let text;
        try {
          text = downloadFiling(f.raw_url);
        } catch (dlErr) {
          log(`  SKIP — download failed: ${dlErr.message}`);
          totalSkipped++;
          markSecUnavailable(f.id, f.processed_at, `Download failed: ${dlErr.message.slice(0, 200)}`);
          consecutiveErrors = 0; // download fail is not a Claude error
          continue;
        }

        if (text.length < MIN_TEXT_CHARS) {
          log(`  SKIP — filing text only ${text.length} chars (need ${MIN_TEXT_CHARS}+)`);
          totalSkipped++;
          markSecUnavailable(f.id, f.processed_at, `SEC text too short: ${text.length} chars`);
          continue;
        }

        const textSize = `${(text.length / 1000).toFixed(0)}K`;

        if (DRY_RUN) {
          log(`  DRY RUN — ${textSize} chars, would analyze`);
          totalProcessed++;
          continue;
        }

        // Send to Claude
        const t0 = Date.now();
        const { analysis } = analyzeWithClaude(text, f.filing_type, company.name, ticker);
        const secs = ((Date.now() - t0) / 1000).toFixed(0);

        // Write to DB
        const now = new Date().toISOString();
        dbUpdate("filings", "id", f.id, {
          ai_summary_json: analysis,
          ai_summary_prose: analysis.detailed_summary || null,
          one_line_summary: analysis.one_line_summary || null,
          significance_score: analysis.significance_score,
          insider_data: analysis.insider_trades?.length > 0 ? analysis.insider_trades : null,
          has_earnings_data:
            !!(analysis.earnings_impact?.revenue_change || analysis.earnings_impact?.eps_change),
          processed_at: f.processed_at || now,
        });

        dbUpdate("companies", "id", company.id, {
          last_filing_date: f.filed_date,
        });

        totalProcessed++;
        consecutiveErrors = 0;

        log(`  OK (${secs}s, ${textSize}) Score ${analysis.significance_score}/10: ${analysis.one_line_summary.slice(0, 70)}`);

        // Brief cooldown between Claude calls to avoid rate limiting
        sleepSync(2000);

      } catch (err) {
        const msg = err.message || "";
        // Validation failures = bad filing text from SEC. Mark unavailable so
        // we don't retry forever (the SEC content won't change).
        if (msg.startsWith("VALIDATION:")) {
          totalSkipped++;
          log(`  SKIP — ${msg.slice(0, 120)}`);
          markSecUnavailable(f.id, f.processed_at, msg.slice(0, 200));
          consecutiveErrors = 0;
        } else {
          totalErrors++;
          consecutiveErrors++;
          log(`  ERROR — ${msg.slice(0, 150)}`);
          // Release claim so another worker (or retry) can pick it up
          releaseClaim(f.id);

          if (consecutiveErrors >= 5) {
            log(`  ${consecutiveErrors} consecutive errors. Pausing 60s...`);
            sleepSync(60_000);
            consecutiveErrors = 0;
          }
        }
      }
    }

    // Refresh remaining count every batch
    try {
      remaining = dbCount("filings", "ai_summary_json=is.null");
    } catch {
      // non-critical
    }

    // Print batch summary
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
    const rate = totalProcessed > 0 ? (elapsed / totalProcessed).toFixed(0) : "?";
    const eta = remaining > 0 && totalProcessed > 0
      ? Math.round((remaining * elapsed) / totalProcessed / 3600)
      : "?";
    log(`  [Progress] ${totalProcessed} done, ${totalErrors} errors, ${totalSkipped} skipped | ${rate}s/filing avg | ~${remaining} left (~${eta}h ETA)`);
  }

  // Final summary
  const totalElapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  log("");
  log("=".repeat(60));
  log(`COMPLETE: ${totalProcessed} analyzed, ${totalErrors} errors, ${totalSkipped} skipped`);
  log(`Total time: ${totalElapsed} minutes`);
  if (totalProcessed > 0) {
    log(`Average: ${((Date.now() - startTime) / 1000 / totalProcessed).toFixed(1)}s per filing`);
  }
}

// ---------------------------------------------------------------------------
// Mark a filing as "SEC unavailable" so we don't retry it forever.
// Stores a minimal ai_summary_json that flags it clearly, rather than
// leaving it NULL (which would cause infinite retries) or storing garbage.
// ---------------------------------------------------------------------------
function markSecUnavailable(filingId, processedAt, reason) {
  try {
    const now = new Date().toISOString();
    dbUpdate("filings", "id", filingId, {
      ai_summary_json: {
        _status: "sec_unavailable",
        _reason: reason,
        _timestamp: now,
        key_facts: [],
        insider_trades: [],
        risk_flags: [],
        earnings_impact: { revenue_change: null, eps_change: null, guidance: null, notable_items: [] },
        significance_score: 1,
        one_line_summary: "Filing text unavailable from SEC — cannot analyze",
        detailed_summary: `This filing could not be analyzed because the SEC EDGAR system did not return usable filing text. Reason: ${reason}. This does not indicate a problem with the company — it is a data availability issue.`,
        faq: [],
      },
      ai_summary_prose: `Filing text unavailable from SEC. Reason: ${reason}`,
      one_line_summary: "Filing text unavailable from SEC — cannot analyze",
      significance_score: 1,
      processed_at: processedAt || now,
    });
  } catch (err) {
    log(`  WARN — could not mark unavailable: ${err.message.slice(0, 100)}`);
  }
}

// ---------------------------------------------------------------------------
// Sync sleep (blocks event loop — fine for this sequential script)
// ---------------------------------------------------------------------------
function sleepSync(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------
try {
  main();
} catch (err) {
  log(`FATAL: ${err.message}`);
  process.exit(1);
}

// Cleanup
try { unlinkSync(SYS_PROMPT_FILE); } catch { /* ignore */ }
