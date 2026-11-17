/**
 * Brefyr AI Enhancer v2 — Overnight unattended operation.
 *
 * - Auto-retries on any error (Ollama crash, network, EDGAR rate limit)
 * - Saves progress to disk (survives server restart)
 * - Processes newest filings first, goes backward
 * - Web dashboard with Start/Stop, live progress, activity log
 * - Designed to run all night while you sleep
 */

import { createServer } from "http";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// ── Load .env ─────────────────────────────────────────────────────────
function loadEnv() {
  const envPath = resolve(__dirname, ".env");
  if (!existsSync(envPath)) {
    console.error("\n  .env file not found! Copy .env.example to .env and fill in your Supabase keys.\n");
    process.exit(1);
  }
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
      v = v.slice(1, -1);
    if (!process.env[k]) process.env[k] = v;
  }
}
loadEnv();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "mistral:7b";
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || "5", 10);
const MIN_SIGNIFICANCE = parseInt(process.env.MIN_SIGNIFICANCE || "0", 10);
const PORT = parseInt(process.env.PORT || "3333", 10);
const STATS_FILE = resolve(__dirname, ".stats.json");

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("\n  SUPABASE_URL and SUPABASE_SERVICE_KEY must be set in .env\n");
  process.exit(1);
}

// ── Persistent state ──────────────────────────────────────────────────
let state = {
  running: false,
  processed: 0,
  errors: 0,
  skipped: 0,
  totalRemaining: 0,
  totalInitial: 0,
  currentFiling: null,
  recentLogs: [],
  startedAt: null,
  ollamaOk: false,
  supabaseOk: false,
  model: OLLAMA_MODEL,
  rate: 0,
  consecutiveErrors: 0,
  lastErrorAt: null,
  autoStarted: false,
};

// Load saved stats
function loadStats() {
  try {
    if (existsSync(STATS_FILE)) {
      const saved = JSON.parse(readFileSync(STATS_FILE, "utf-8"));
      state.processed = saved.processed || 0;
      state.errors = saved.errors || 0;
      state.skipped = saved.skipped || 0;
    }
  } catch { /* fresh start */ }
}

function saveStats() {
  try {
    writeFileSync(STATS_FILE, JSON.stringify({
      processed: state.processed,
      errors: state.errors,
      skipped: state.skipped,
      savedAt: new Date().toISOString(),
    }));
  } catch { /* ignore */ }
}

function log(msg, level = "info") {
  const entry = { time: new Date().toISOString(), msg, level };
  state.recentLogs.unshift(entry);
  if (state.recentLogs.length > 200) state.recentLogs.length = 200;
  const prefix = level === "error" ? "ERR" : level === "warn" ? "WRN" : "   ";
  console.log(`[${entry.time.slice(11, 19)}] ${prefix} ${msg}`);
}

// ── Supabase ──────────────────────────────────────────────────────────
const DB = `${SUPABASE_URL}/rest/v1`;
const DB_H = { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json" };

async function dbSelect(table, query) {
  const r = await fetch(`${DB}/${table}?${query}`, { headers: { ...DB_H, Prefer: "" } });
  if (!r.ok) throw new Error(`DB select ${table}: ${r.status}`);
  return r.json();
}

async function dbCount(query) {
  const r = await fetch(`${DB}/filings?select=id&${query}&limit=1`, {
    headers: { ...DB_H, Prefer: "count=exact" },
  });
  return parseInt(r.headers.get("content-range")?.split("/")[1] || "0", 10);
}

async function dbUpdate(id, data) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch(`${DB}/filings?id=eq.${id}`, {
        method: "PATCH",
        headers: { ...DB_H, Prefer: "return=minimal" },
        body: JSON.stringify(data),
      });
      if (r.ok) return;
      if (r.status >= 500) { await sleep(2000 * (attempt + 1)); continue; }
      throw new Error(`DB update: ${r.status}`);
    } catch (e) { if (attempt === 2) throw e; await sleep(2000); }
  }
}

// ── Ollama ────────────────────────────────────────────────────────────
async function checkOllama() {
  try {
    const r = await fetch(`${OLLAMA_URL}/api/tags`, { signal: AbortSignal.timeout(5000) });
    if (r.ok) { state.ollamaOk = true; return (await r.json()).models || []; }
  } catch { /* ignore */ }
  state.ollamaOk = false;
  return [];
}

async function waitForOllama() {
  while (!state.ollamaOk) {
    log("Waiting for Ollama...", "warn");
    await sleep(10000);
    await checkOllama();
  }
}

async function callOllama(prompt, systemPrompt) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: OLLAMA_MODEL,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
          stream: false,
          options: { temperature: 0.3, num_predict: 2048 },
          format: "json",
        }),
      });
      if (r.ok) {
        const data = await r.json();
        return data.message?.content || "{}";
      }
      const text = await r.text();
      throw new Error(`Ollama ${r.status}: ${text.slice(0, 100)}`);
    } catch (e) {
      if (attempt < 2) {
        log(`Ollama retry ${attempt + 1}: ${e.message?.slice(0, 80)}`, "warn");
        await sleep(5000 * (attempt + 1));
        await checkOllama();
        if (!state.ollamaOk) await waitForOllama();
      } else throw e;
    }
  }
  throw new Error("Ollama max retries");
}

// ── AI Analysis ───────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are an SEC filing analyst. Analyze the filing and return structured JSON.

Rules:
- Write for retail investors, not professionals
- Be specific with numbers (revenue, EPS, shares, prices)
- Significance: 1-3 routine, 4-6 notable, 7-8 significant, 9-10 critical
- For Form 4: focus on insider trade details
- For 10-K/10-Q: financial results and risks
- For 8-K: the specific event

Return ONLY valid JSON:
{
  "key_facts": ["3-8 bullet points of most important facts"],
  "risk_flags": ["red flags if any, empty array if none"],
  "earnings_impact": {"revenue_change": null, "eps_change": null, "guidance": null, "notable_items": []},
  "significance_score": 5,
  "one_line_summary": "Max 150 chars summary",
  "detailed_summary": "2-3 paragraphs in plain language for retail investors",
  "faq": [{"question": "string", "answer": "string"}]
}`;

function parseAnalysis(raw) {
  let cleaned = raw.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();
  // Handle cases where model wraps in extra text
  const jsonStart = cleaned.indexOf("{");
  const jsonEnd = cleaned.lastIndexOf("}");
  if (jsonStart >= 0 && jsonEnd > jsonStart) cleaned = cleaned.slice(jsonStart, jsonEnd + 1);

  const parsed = JSON.parse(cleaned);
  const score = Number(parsed.significance_score);
  return {
    key_facts: Array.isArray(parsed.key_facts) ? parsed.key_facts.slice(0, 10) : [],
    risk_flags: Array.isArray(parsed.risk_flags) ? parsed.risk_flags.slice(0, 10) : [],
    earnings_impact: parsed.earnings_impact || { revenue_change: null, eps_change: null, guidance: null, notable_items: [] },
    significance_score: isNaN(score) || score < 1 || score > 10 ? 5 : Math.round(score),
    one_line_summary: String(parsed.one_line_summary || "").slice(0, 150),
    detailed_summary: String(parsed.detailed_summary || ""),
    faq: Array.isArray(parsed.faq) ? parsed.faq.slice(0, 8) : [],
  };
}

// ── EDGAR download ────────────────────────────────────────────────────
const EDGAR_UA = "Brefyr admin@brefyr.com";

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

async function downloadFiling(rawUrl) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      if (rawUrl.endsWith("-index.htm") || rawUrl.endsWith("-index.html")) {
        // Try index.json first
        const dirUrl = rawUrl.substring(0, rawUrl.lastIndexOf("/") + 1) + "index.json";
        const r = await fetch(dirUrl, { headers: { "User-Agent": EDGAR_UA }, signal: AbortSignal.timeout(15000) });
        if (r.ok) {
          const idx = await r.json();
          const items = idx.directory?.item ?? [];
          const primary = items.find(i =>
            (i.name.endsWith(".htm") || i.name.endsWith(".html")) &&
            !i.name.includes("index") && !i.name.startsWith("R")
          );
          if (primary) {
            const docUrl = rawUrl.substring(0, rawUrl.lastIndexOf("/") + 1) + primary.name;
            await sleep(100);
            const dr = await fetch(docUrl, { headers: { "User-Agent": EDGAR_UA }, signal: AbortSignal.timeout(30000) });
            if (dr.ok) return stripHtml(await dr.text()).slice(0, 80000);
          }
        }
        // Fallback: parse index HTML for document links
        await sleep(100);
        const indexRes = await fetch(rawUrl, { headers: { "User-Agent": EDGAR_UA }, signal: AbortSignal.timeout(15000) });
        if (indexRes.ok) {
          const html = await indexRes.text();
          const links = [];
          const re = /href="([^"]*\.(?:htm|html|txt))"/gi;
          let m;
          while ((m = re.exec(html)) !== null) {
            if (!m[1].includes("index") && !m[1].startsWith("R")) links.push(m[1]);
          }
          for (const link of links.slice(0, 3)) {
            const fullUrl = link.startsWith("/") ? `https://www.sec.gov${link}` : link.startsWith("http") ? link : rawUrl.substring(0, rawUrl.lastIndexOf("/") + 1) + link;
            await sleep(100);
            const dr = await fetch(fullUrl, { headers: { "User-Agent": EDGAR_UA }, signal: AbortSignal.timeout(30000) });
            if (dr.ok) {
              const text = stripHtml(await dr.text());
              if (text.length > 200) return text.slice(0, 80000);
            }
          }
        }
      }
      // Direct download
      const r = await fetch(rawUrl, { headers: { "User-Agent": EDGAR_UA }, signal: AbortSignal.timeout(30000) });
      if (r.ok) return stripHtml(await r.text()).slice(0, 80000);
      if (r.status === 429) { await sleep(10000); continue; }
      throw new Error(`EDGAR ${r.status}`);
    } catch (e) {
      if (attempt < 2 && (e.name === "TimeoutError" || e.message?.includes("429"))) {
        await sleep(5000 * (attempt + 1));
        continue;
      }
      throw e;
    }
  }
  throw new Error("EDGAR max retries");
}

async function processOneFiling(filing, company) {
  const text = await downloadFiling(filing.raw_url);
  if (text.length < 100) return { skipped: true, reason: "too short" };

  const prompt = `Analyze this ${filing.filing_type} filing for ${company.name} (${company.ticker}), filed ${filing.filed_date}.\n\n${text}`;
  const rawOutput = await callOllama(prompt, SYSTEM_PROMPT);
  const analysis = parseAnalysis(rawOutput);

  await dbUpdate(filing.id, {
    ai_summary_prose: analysis.detailed_summary,
    ai_summary_json: {
      key_facts: analysis.key_facts,
      risk_flags: analysis.risk_flags,
      earnings_impact: analysis.earnings_impact,
      faq: analysis.faq,
    },
    one_line_summary: analysis.one_line_summary || filing.one_line_summary,
    significance_score: Math.max(filing.significance_score, analysis.significance_score),
  });

  return { skipped: false, analysis };
}

// ── Main processing loop (crash-resilient) ────────────────────────────
let stopRequested = false;

async function runProcessingLoop() {
  if (state.running) return;
  state.running = true;
  state.startedAt = Date.now();
  state.consecutiveErrors = 0;
  stopRequested = false;
  log("Processing started — will run until stopped or all filings enhanced");

  while (!stopRequested) {
    try {
      // Check Ollama is alive
      await checkOllama();
      if (!state.ollamaOk) {
        log("Ollama not responding — waiting...", "warn");
        await waitForOllama();
        log("Ollama reconnected");
      }

      // Count remaining
      const sigFilter = MIN_SIGNIFICANCE > 0 ? `&significance_score=gte.${MIN_SIGNIFICANCE}` : "";
      state.totalRemaining = await dbCount(`ai_summary_prose=is.null${sigFilter}`);
      if (state.totalInitial === 0) state.totalInitial = state.totalRemaining + state.processed;

      if (state.totalRemaining === 0) {
        log("All filings enhanced! Nothing left.");
        break;
      }

      // Fetch batch — newest first
      const filings = await dbSelect(
        "filings",
        `select=id,filing_type,filed_date,raw_url,company_id,one_line_summary,significance_score&ai_summary_prose=is.null${sigFilter}&order=filed_date.desc&limit=${BATCH_SIZE}`
      );
      if (filings.length === 0) break;

      // Load companies
      const companyIds = [...new Set(filings.map(f => f.company_id))];
      const companies = await dbSelect(
        "companies",
        `select=id,ticker,name&id=in.(${companyIds.map(id => `"${id}"`).join(",")})`
      );
      const companyMap = new Map(companies.map(c => [c.id, c]));

      // Process each filing
      for (const filing of filings) {
        if (stopRequested) break;
        const company = companyMap.get(filing.company_id);
        if (!company) { state.skipped++; continue; }

        state.currentFiling = {
          id: filing.id,
          ticker: company.ticker,
          name: company.name,
          type: filing.filing_type,
          date: filing.filed_date?.slice(0, 10),
        };

        try {
          const result = await processOneFiling(filing, company);
          if (result.skipped) {
            state.skipped++;
            log(`Skipped ${company.ticker} ${filing.filing_type} (${result.reason})`);
          } else {
            state.processed++;
            state.consecutiveErrors = 0;
            const elapsed = (Date.now() - state.startedAt) / 60000;
            state.rate = elapsed > 0.5 ? +(state.processed / elapsed).toFixed(1) : 0;
            log(`${company.ticker} ${filing.filing_type} ${filing.filed_date?.slice(0, 10)} — score ${result.analysis.significance_score}`);
          }
          // Save stats every 10 filings
          if (state.processed % 10 === 0) saveStats();
        } catch (err) {
          state.errors++;
          state.consecutiveErrors++;
          state.lastErrorAt = new Date().toISOString();
          log(`${company.ticker} ${filing.filing_type}: ${err.message?.slice(0, 120)}`, "error");

          // Back off on consecutive errors
          if (state.consecutiveErrors >= 10) {
            log("10 consecutive errors — pausing 60s before retry", "warn");
            await sleep(60000);
            state.consecutiveErrors = 0;
          } else if (state.consecutiveErrors >= 5) {
            log("5 consecutive errors — pausing 30s", "warn");
            await sleep(30000);
          }
        }

        await sleep(200); // EDGAR rate limit
      }
    } catch (err) {
      log(`Loop error: ${err.message?.slice(0, 150)} — retrying in 15s`, "error");
      state.consecutiveErrors++;
      await sleep(15000);
    }
  }

  state.running = false;
  state.currentFiling = null;
  saveStats();
  log("Processing stopped");
}

// ── Dashboard HTML ────────────────────────────────────────────────────
function dashboardHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Brefyr AI Enhancer</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #0a0a0a; color: #e5e5e5; min-height: 100vh; }
    .container { max-width: 900px; margin: 0 auto; padding: 24px 16px; }
    h1 { font-size: 24px; font-weight: 700; margin-bottom: 4px; }
    .subtitle { color: #737373; font-size: 14px; margin-bottom: 24px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-bottom: 20px; }
    .card { background: #171717; border: 1px solid #262626; border-radius: 12px; padding: 16px; }
    .card-label { font-size: 11px; color: #737373; text-transform: uppercase; letter-spacing: 0.5px; }
    .card-value { font-size: 26px; font-weight: 700; margin-top: 4px; font-variant-numeric: tabular-nums; }
    .green { color: #22c55e; } .blue { color: #3b82f6; } .red { color: #ef4444; } .amber { color: #f59e0b; } .purple { color: #a855f7; }
    .controls { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; align-items: center; }
    button { padding: 8px 20px; border-radius: 8px; border: 1px solid #333; background: #262626; color: #e5e5e5; font-size: 14px; cursor: pointer; font-weight: 500; transition: background 0.15s; }
    button:hover { background: #333; }
    .btn-start { background: #22c55e; color: #000; border-color: #22c55e; }
    .btn-start:hover { background: #16a34a; }
    .btn-stop { background: #ef4444; color: #fff; border-color: #ef4444; }
    .btn-stop:hover { background: #dc2626; }
    button:disabled { opacity: 0.3; cursor: not-allowed; }
    .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 6px; }
    .dot-green { background: #22c55e; } .dot-red { background: #ef4444; }
    .dot-pulse { background: #f59e0b; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
    .progress-bar { height: 6px; background: #262626; border-radius: 3px; margin-bottom: 20px; overflow: hidden; }
    .progress-fill { height: 100%; background: linear-gradient(90deg, #3b82f6, #22c55e); border-radius: 3px; transition: width 2s ease; }
    .current { background: #171717; border: 1px solid #262626; border-radius: 12px; padding: 14px 16px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
    .current-dot { width: 10px; height: 10px; border-radius: 50%; background: #3b82f6; animation: pulse 1.5s infinite; flex-shrink: 0; }
    .current-text { font-size: 14px; }
    .current-ticker { font-weight: 700; font-size: 16px; }
    .log-box { background: #171717; border: 1px solid #262626; border-radius: 12px; overflow: hidden; }
    .log-header { padding: 12px 16px; border-bottom: 1px solid #262626; font-weight: 600; font-size: 14px; display: flex; justify-content: space-between; }
    .log-entries { max-height: 350px; overflow-y: auto; font-family: 'Cascadia Code', 'SF Mono', monospace; font-size: 12px; line-height: 1.6; }
    .log-entry { padding: 2px 16px; display: flex; gap: 10px; }
    .log-entry:nth-child(even) { background: #1a1a1a; }
    .log-time { color: #525252; min-width: 65px; }
    .log-msg { color: #a3a3a3; }
    .log-entry.error .log-msg { color: #ef4444; }
    .log-entry.warn .log-msg { color: #f59e0b; }
    .checks { display: flex; gap: 16px; margin-bottom: 20px; font-size: 13px; color: #a3a3a3; }
    .eta { font-size: 13px; color: #737373; text-align: center; margin-bottom: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Brefyr AI Enhancer</h1>
    <p class="subtitle">Local AI filing analysis &mdash; runs non-stop, newest filings first</p>

    <div class="checks">
      <span><span class="dot" id="dot-ollama"></span>Ollama</span>
      <span><span class="dot" id="dot-supabase"></span>Supabase</span>
      <span id="model-info" style="color:#525252"></span>
    </div>

    <div class="grid">
      <div class="card"><div class="card-label">Processed</div><div class="card-value green" id="v-processed">0</div></div>
      <div class="card"><div class="card-label">Remaining</div><div class="card-value blue" id="v-remaining">-</div></div>
      <div class="card"><div class="card-label">Errors</div><div class="card-value red" id="v-errors">0</div></div>
      <div class="card"><div class="card-label">Skipped</div><div class="card-value purple" id="v-skipped">0</div></div>
      <div class="card"><div class="card-label">Rate</div><div class="card-value amber" id="v-rate">-</div></div>
      <div class="card"><div class="card-label">ETA</div><div class="card-value" id="v-eta" style="color:#737373;font-size:18px">-</div></div>
    </div>

    <div class="progress-bar"><div class="progress-fill" id="progress" style="width:0%"></div></div>
    <div class="eta" id="eta-text"></div>

    <div class="controls">
      <button class="btn-start" id="btn-start" onclick="doStart()">Start Processing</button>
      <button class="btn-stop" id="btn-stop" onclick="doStop()" disabled>Stop</button>
      <button id="btn-reset" onclick="doReset()">Reset Stats</button>
      <span id="status-text" style="color:#737373; font-size:13px; margin-left:8px;">Ready</span>
    </div>

    <div class="current" id="current-box" style="display:none">
      <div class="current-dot"></div>
      <div class="current-text">
        <span class="current-ticker" id="cur-ticker">-</span>
        <span id="cur-detail" style="color:#737373"></span>
      </div>
    </div>

    <div class="log-box">
      <div class="log-header">
        <span>Activity Log</span>
        <span id="log-count" style="color:#525252;font-weight:400"></span>
      </div>
      <div class="log-entries" id="log-entries"></div>
    </div>
  </div>

  <script>
    function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;'); }

    async function fetchStatus() {
      try {
        const s = await (await fetch('/api/status')).json();
        document.getElementById('v-processed').textContent = s.processed.toLocaleString();
        document.getElementById('v-remaining').textContent = s.totalRemaining > 0 ? s.totalRemaining.toLocaleString() : '0';
        document.getElementById('v-errors').textContent = s.errors.toLocaleString();
        document.getElementById('v-skipped').textContent = s.skipped.toLocaleString();
        document.getElementById('v-rate').textContent = s.rate > 0 ? s.rate + '/m' : '-';

        // ETA
        if (s.rate > 0 && s.totalRemaining > 0) {
          const mins = s.totalRemaining / s.rate;
          const hrs = Math.floor(mins / 60);
          const d = Math.floor(hrs / 24);
          document.getElementById('v-eta').textContent = d > 0 ? d + 'd ' + (hrs % 24) + 'h' : hrs + 'h ' + Math.round(mins % 60) + 'm';
        } else { document.getElementById('v-eta').textContent = '-'; }

        const total = s.processed + s.totalRemaining;
        document.getElementById('progress').style.width = (total > 0 ? (s.processed / total * 100) : 0).toFixed(1) + '%';

        document.getElementById('dot-ollama').className = 'dot ' + (s.ollamaOk ? 'dot-green' : 'dot-red');
        document.getElementById('dot-supabase').className = 'dot ' + (s.supabaseOk ? 'dot-green' : 'dot-red');
        document.getElementById('model-info').textContent = s.model;

        document.getElementById('btn-start').disabled = s.running;
        document.getElementById('btn-stop').disabled = !s.running;
        document.getElementById('status-text').textContent = s.running ? 'Running...' : (s.processed > 0 ? 'Stopped' : 'Ready');
        document.getElementById('status-text').style.color = s.running ? '#22c55e' : '#737373';

        const box = document.getElementById('current-box');
        if (s.running && s.currentFiling) {
          box.style.display = 'flex';
          document.getElementById('cur-ticker').textContent = s.currentFiling.ticker;
          document.getElementById('cur-detail').textContent = ' ' + s.currentFiling.type + ' · ' + s.currentFiling.date;
        } else { box.style.display = 'none'; }

        const el = document.getElementById('log-entries');
        document.getElementById('log-count').textContent = s.recentLogs.length + ' entries';
        el.innerHTML = s.recentLogs.slice(0, 80).map(e =>
          '<div class="log-entry ' + e.level + '"><span class="log-time">' + e.time.slice(11,19) + '</span><span class="log-msg">' + esc(e.msg) + '</span></div>'
        ).join('');
      } catch {}
    }

    async function doStart() { await fetch('/api/start', {method:'POST'}); fetchStatus(); }
    async function doStop() { await fetch('/api/stop', {method:'POST'}); fetchStatus(); }
    async function doReset() {
      if (confirm('Reset all stats to zero?')) {
        await fetch('/api/reset', {method:'POST'});
        fetchStatus();
      }
    }

    fetchStatus();
    setInterval(fetchStatus, 3000);
  </script>
</body>
</html>`;
}

// ── HTTP Server ───────────────────────────────────────────────────────
async function checkSupabase() {
  try {
    const r = await fetch(`${DB}/filings?select=id&limit=1`, {
      headers: { ...DB_H, Prefer: "count=exact" },
      signal: AbortSignal.timeout(10000),
    });
    state.supabaseOk = r.ok;
  } catch { state.supabaseOk = false; }
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (url.pathname === "/" || url.pathname === "/index.html") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(dashboardHtml());
  } else if (url.pathname === "/api/status") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(state));
  } else if (url.pathname === "/api/start" && req.method === "POST") {
    if (!state.running) runProcessingLoop().catch(err => log(`Fatal: ${err.message}`, "error"));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end('{"ok":true}');
  } else if (url.pathname === "/api/stop" && req.method === "POST") {
    stopRequested = true;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end('{"ok":true}');
  } else if (url.pathname === "/api/reset" && req.method === "POST") {
    state.processed = 0; state.errors = 0; state.skipped = 0;
    state.recentLogs = []; state.totalInitial = 0;
    saveStats();
    log("Stats reset");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end('{"ok":true}');
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

// ── Startup ───────────────────────────────────────────────────────────
async function startup() {
  console.log("\n  ╔══════════════════════════════════════╗");
  console.log("  ║   Brefyr AI Enhancer v2.0            ║");
  console.log("  ║   Overnight unattended operation      ║");
  console.log("  ╚══════════════════════════════════════╝\n");

  loadStats();
  if (state.processed > 0) log(`Resumed — ${state.processed} previously processed`);

  const models = await checkOllama();
  await checkSupabase();

  if (state.ollamaOk) {
    const modelNames = models.map(m => m.name);
    log(`Ollama OK — models: ${modelNames.join(", ") || "none"}`);
    if (!modelNames.some(m => m.startsWith(OLLAMA_MODEL.split(":")[0]))) {
      log(`Model "${OLLAMA_MODEL}" not found! Run: ollama pull ${OLLAMA_MODEL}`, "warn");
    }
  } else {
    log("Ollama not running — will auto-retry when processing starts", "warn");
  }

  if (state.supabaseOk) {
    const remaining = await dbCount("ai_summary_prose=is.null");
    state.totalRemaining = remaining;
    state.totalInitial = remaining + state.processed;
    log(`Supabase OK — ${remaining.toLocaleString()} filings need AI enhancement`);
  } else {
    log("Supabase connection failed! Check .env", "error");
  }

  server.listen(PORT, () => {
    console.log(`\n  Dashboard: http://localhost:${PORT}\n`);
    log(`Dashboard ready on port ${PORT}`);
  });
}

startup();
