/**
 * Local script to reprocess filings stuck at "Processing" status.
 *
 * Connects directly to production Supabase using .env credentials.
 * Uses Gemini (GOOGLE_API_KEY) or Groq (GROQ_API_KEY) if available.
 * No serverless timeout — runs locally with patient rate limit handling.
 *
 * Usage: node scripts/reprocess-local.mjs [--limit 20] [--delay 15]
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env
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

// Parse CLI args
const args = process.argv.slice(2);
function getArg(name, defaultVal) {
  const idx = args.indexOf(name);
  return idx !== -1 && args[idx + 1] ? parseInt(args[idx + 1], 10) : defaultVal;
}
const LIMIT = getArg("--limit", 20);
const DELAY_SEC = getArg("--delay", 15); // seconds between AI calls

// Validate env
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const GROQ_KEY = process.env.GROQ_API_KEY;
const GOOGLE_KEY = process.env.GOOGLE_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
  process.exit(1);
}
if (!GROQ_KEY && !GOOGLE_KEY) {
  console.error("Missing GROQ_API_KEY or GOOGLE_API_KEY in .env — need at least one AI provider");
  process.exit(1);
}

const provider = GROQ_KEY ? "groq" : "gemini";
console.log(`Using ${provider} | Limit: ${LIMIT} | Delay: ${DELAY_SEC}s between calls`);

// Supabase REST API wrapper (no WebSocket dependency)
const DB_BASE = `${SUPABASE_URL}/rest/v1`;
const DB_HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

async function dbSelect(table, query) {
  const res = await fetch(`${DB_BASE}/${table}?${query}`, { headers: { ...DB_HEADERS, Prefer: "" } });
  if (!res.ok) throw new Error(`DB select ${table}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function dbUpdate(table, matchCol, matchVal, data) {
  const res = await fetch(`${DB_BASE}/${table}?${matchCol}=eq.${matchVal}`, {
    method: "PATCH",
    headers: DB_HEADERS,
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`DB update ${table}: ${res.status} ${await res.text()}`);
  return res.json();
}

// EDGAR filing download
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
  const res = await fetch(docUrl, { headers: { "User-Agent": EDGAR_UA, Accept: "text/html, text/plain, */*" } });
  if (!res.ok) throw new Error(`Download failed: ${res.status} ${res.statusText}`);
  const raw = await res.text();
  const clean = stripHtml(raw);
  return clean.length <= MAX_CHARS ? clean : clean.slice(0, MAX_CHARS) + "\n\n[Truncated]";
}

// AI Analysis
const SYSTEM_PROMPT = `You are an SEC filing analyst for Brefyr, a tool that helps retail investors track small-cap stocks. Analyze SEC filings and return structured data.

Key principles:
- Write for retail investors, not Wall Street professionals
- Flag anything that could materially affect the stock price
- Be specific with numbers: revenue, EPS, share counts, transaction prices
- Significance score: 1-3 = routine. 4-6 = notable. 7-8 = significant. 9-10 = critical (restatement, fraud, hostile takeover).

Return ONLY valid JSON with this exact structure:
{
  "key_facts": ["string - 3-8 bullet points"],
  "insider_trades": [{"person": "name", "title": "role", "transaction_type": "buy|sell|grant|exercise|other", "shares": 0, "price_per_share": 0.0, "date": "YYYY-MM-DD"}],
  "risk_flags": ["string"],
  "earnings_impact": {"revenue_change": "string or null", "eps_change": "string or null", "guidance": "string or null", "notable_items": ["string"]},
  "significance_score": 5,
  "one_line_summary": "Max 150 chars",
  "detailed_summary": "2-3 paragraphs",
  "faq": [{"question": "string", "answer": "string"}]
}`;

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function analyzeWithGroq(text, filingType, companyName, ticker) {
  const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
  const safeText = text.length > 120_000 ? text.slice(0, 120_000) + "\n[Truncated]" : text;

  for (let attempt = 0; attempt <= 3; attempt++) {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${GROQ_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Analyze this ${filingType} filing from ${companyName} (${ticker}).\n\n--- FILING TEXT ---\n${safeText}` },
        ],
        response_format: { type: "json_object" },
        max_tokens: 4096,
        temperature: 0.3,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      const analysis = JSON.parse(data.choices[0]?.message?.content ?? "{}");
      analysis.significance_score = Math.max(1, Math.min(10, Math.round(analysis.significance_score)));
      return {
        analysis,
        usage: { input_tokens: data.usage?.prompt_tokens ?? 0, output_tokens: data.usage?.completion_tokens ?? 0 },
      };
    }

    const errText = await res.text();
    if (errText.includes("429") && errText.includes("per day")) {
      throw new Error("GROQ_DAILY_LIMIT");
    }
    if (res.status === 429 && attempt < 3) {
      console.log(`  Rate limited, waiting 65s...`);
      await sleep(65_000);
      continue;
    }
    if (res.status >= 500 && attempt < 3) {
      await sleep(Math.pow(2, attempt + 2) * 1000);
      continue;
    }
    throw new Error(`Groq API error ${res.status}: ${errText.slice(0, 200)}`);
  }
  throw new Error("Groq max retries exceeded");
}

async function analyzeWithGemini(text, filingType, companyName, ticker) {
  const model = process.env.GEMINI_FILING_MODEL || "gemini-3.8-flash";
  const safeText = text.length > 120_000 ? text.slice(0, 120_000) + "\n[Truncated]" : text;

  for (let attempt = 0; attempt <= 3; attempt++) {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GOOGLE_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ parts: [{ text: `Analyze this ${filingType} filing from ${companyName} (${ticker}).\n\nReturn the structured analysis as JSON.\n\n--- FILING TEXT ---\n${safeText}` }] }],
          generationConfig: {
            responseMimeType: "application/json",
            maxOutputTokens: 4096,
            temperature: 0.3,
          },
        }),
      }
    );

    if (res.ok) {
      const data = await res.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";
      const analysis = JSON.parse(content);
      analysis.significance_score = Math.max(1, Math.min(10, Math.round(analysis.significance_score)));
      const meta = data.usageMetadata;
      return {
        analysis,
        usage: { input_tokens: meta?.promptTokenCount ?? 0, output_tokens: meta?.candidatesTokenCount ?? 0 },
      };
    }

    const errText = await res.text();
    if (res.status === 429 && attempt < 3) {
      const wait = attempt === 0 ? 60 : 120;
      console.log(`  Gemini rate limited, waiting ${wait}s...`);
      await sleep(wait * 1000);
      continue;
    }
    if (res.status >= 500 && attempt < 3) {
      await sleep(Math.pow(2, attempt + 2) * 1000);
      continue;
    }
    throw new Error(`Gemini API error ${res.status}: ${errText.slice(0, 200)}`);
  }
  throw new Error("Gemini max retries exceeded");
}

async function analyze(text, filingType, companyName, ticker) {
  if (GROQ_KEY) {
    try {
      return await analyzeWithGroq(text, filingType, companyName, ticker);
    } catch (err) {
      if (err.message === "GROQ_DAILY_LIMIT" && GOOGLE_KEY) {
        console.log("  Groq daily limit hit, switching to Gemini");
      } else {
        throw err;
      }
    }
  }
  return analyzeWithGemini(text, filingType, companyName, ticker);
}

// Main
async function main() {
  // Fetch unanalyzed filings via REST
  const filings = await dbSelect(
    "filings",
    "select=id,accession_number,filing_type,filed_date,raw_url,company_id&processed_at=is.null&order=filed_date.desc&limit=" + LIMIT
  );

  if (!filings || filings.length === 0) { console.log("No unanalyzed filings found."); return; }

  console.log(`\nFound ${filings.length} unanalyzed filings. Processing...\n`);
  let processed = 0, errors = 0;

  for (let i = 0; i < filings.length; i++) {
    const f = filings[i];
    const progress = `[${i + 1}/${filings.length}]`;

    try {
      // Get company
      const companies = await dbSelect("companies", `select=id,name,ticker&id=eq.${f.company_id}&limit=1`);
      const company = companies?.[0];

      if (!company) {
        console.log(`${progress} SKIP ${f.accession_number} — company not found`);
        errors++;
        continue;
      }

      console.log(`${progress} ${company.ticker} ${f.filing_type} (${f.filed_date}) ...`);

      // Download filing
      const text = await downloadFiling(f.raw_url);
      if (text.length < 100) {
        console.log(`  SKIP — filing text too short (${text.length} chars)`);
        errors++;
        continue;
      }

      // AI analysis
      const result = await analyze(text, f.filing_type, company.name, company.ticker);

      // Update filing in DB
      await dbUpdate("filings", "id", f.id, {
        ai_summary_json: result.analysis,
        ai_summary_prose: result.analysis.detailed_summary,
        one_line_summary: result.analysis.one_line_summary,
        significance_score: result.analysis.significance_score,
        insider_data: result.analysis.insider_trades?.length > 0 ? result.analysis.insider_trades : null,
        has_earnings_data: result.analysis.earnings_impact?.revenue_change !== null || result.analysis.earnings_impact?.eps_change !== null,
        input_tokens: result.usage.input_tokens,
        output_tokens: result.usage.output_tokens,
        processed_at: new Date().toISOString(),
      });

      await dbUpdate("companies", "id", company.id, { last_filing_date: f.filed_date });

      console.log(`  OK — score ${result.analysis.significance_score}/10: ${result.analysis.one_line_summary?.slice(0, 80)}`);
      processed++;

      // Delay between calls
      if (i < filings.length - 1) {
        await sleep(DELAY_SEC * 1000);
      }
    } catch (err) {
      console.error(`  ERROR — ${err.message}`);
      errors++;
    }
  }

  console.log(`\nDone: ${processed} processed, ${errors} errors, ${filings.length - processed - errors} skipped`);
}

main().catch(console.error);
