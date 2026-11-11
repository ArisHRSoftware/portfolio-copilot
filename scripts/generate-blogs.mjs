/**
 * Generate and publish blog posts from recent filing data.
 * Uses Gemini API to create SEO-optimized content.
 *
 * Usage: node scripts/generate-blogs.mjs
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
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'")))
      val = val.slice(1, -1);
    if (!process.env[key]) process.env[key] = val;
  }
}
loadEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) { console.error("Missing Supabase credentials"); process.exit(1); }
if (!GOOGLE_API_KEY && !GROQ_API_KEY) { console.error("Missing AI API key (GOOGLE_API_KEY or GROQ_API_KEY)"); process.exit(1); }

const DB_BASE = `${SUPABASE_URL}/rest/v1`;
const DB_HEADERS = { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json" };

async function dbSelect(table, query) {
  const res = await fetch(`${DB_BASE}/${table}?${query}`, { headers: { ...DB_HEADERS, Prefer: "" } });
  if (!res.ok) throw new Error(`DB select ${table}: ${res.status}`);
  return res.json();
}

async function dbInsert(table, data) {
  const res = await fetch(`${DB_BASE}/${table}`, {
    method: "POST",
    headers: { ...DB_HEADERS, Prefer: "return=representation" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`DB insert ${table}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function callAI(prompt) {
  if (GROQ_API_KEY) {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${GROQ_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "openai/gpt-oss-120b",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
        max_tokens: 3000,
        temperature: 0.7,
      }),
    });
    if (!res.ok) throw new Error(`Groq error ${res.status}: ${await res.text()}`);
    const data = await res.json();
    return data.choices[0]?.message?.content ?? "{}";
  }

  // Gemini fallback
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_FILING_MODEL || "gemini-3.8-flash"}:generateContent?key=${GOOGLE_API_KEY}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 3000, temperature: 0.7 },
    }),
  });
  if (!res.ok) throw new Error(`Gemini error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}

// Topics for blog posts based on filing data
const BLOG_TOPICS = [
  {
    angle: "insider-buying-trends",
    prompt: (data) => `Write a blog post about recent insider buying trends in small-cap stocks. Focus on notable purchases from the past week.

Data:
- ${data.insiderBuys.length} insider purchases detected
- Top purchases: ${data.insiderBuys.slice(0, 5).map(f => f.summary).join("; ")}
- Total filings analyzed: ${data.totalFilings}`,
  },
  {
    angle: "earnings-season-recap",
    prompt: (data) => `Write a blog post recapping the latest small-cap earnings season. Focus on key themes from 10-K and 10-Q filings.

Data:
- ${data.earningsFilings.length} earnings-related filings this period
- Top significance filings: ${data.topFilings.slice(0, 5).map(f => f.summary).join("; ")}
- Sectors with activity: ${[...new Set(data.topFilings.map(f => f.sector).filter(Boolean))].join(", ")}`,
  },
  {
    angle: "sec-filing-guide",
    prompt: () => `Write an educational blog post explaining the different types of SEC filings and what they mean for small-cap investors. Cover: 10-K (annual reports), 10-Q (quarterly), 8-K (current events), Form 4 (insider trades), DEF 14A (proxy statements), 13F-HR (institutional holdings), SC 13D/G (ownership stakes).

Make it practical — explain what each filing tells an investor and what to look for. Include examples.`,
  },
  {
    angle: "why-track-insider-trades",
    prompt: () => `Write a blog post explaining why tracking insider trading (SEC Form 4 filings) matters for small-cap stock investors. Cover: what insiders know, buy vs sell signals, transaction codes (P, S, A, M), how to interpret large vs small trades, and why small-cap insider activity is often more meaningful than large-cap.`,
  },
  {
    angle: "small-cap-investing-guide",
    prompt: () => `Write a beginner-friendly blog post about small-cap investing and why SEC filing analysis gives you an edge. Cover: what defines a small-cap stock, advantages and risks, why these stocks are under-covered by analysts, how filing intelligence fills the gap, and practical tips for getting started.`,
  },
];

async function main() {
  console.log("=== Blog Post Generator ===\n");

  // Fetch recent filing data for data-driven posts
  const filings = await dbSelect("filings", "select=id,filing_type,significance_score,one_line_summary,company_id,has_earnings_data,insider_data&order=significance_score.desc&limit=50");
  const companyIds = [...new Set(filings.map(f => f.company_id))];
  const companies = companyIds.length > 0
    ? await dbSelect("companies", `select=id,ticker,name,sector&id=in.(${companyIds.slice(0, 100).map(id => `"${id}"`).join(",")})`)
    : [];
  const companyMap = new Map(companies.map(c => [c.id, c]));

  const data = {
    totalFilings: filings.length,
    topFilings: filings.slice(0, 10).map(f => ({
      summary: f.one_line_summary || "Filing processed",
      sector: companyMap.get(f.company_id)?.sector,
      ticker: companyMap.get(f.company_id)?.ticker,
    })),
    earningsFilings: filings.filter(f => f.has_earnings_data),
    insiderBuys: filings.filter(f => {
      if (!f.insider_data) return false;
      const trades = Array.isArray(f.insider_data) ? f.insider_data : [f.insider_data];
      return trades.some(t => t.transaction_type === "buy");
    }).map(f => ({
      summary: f.one_line_summary || "Insider purchase",
      ticker: companyMap.get(f.company_id)?.ticker,
    })),
  };

  // Check existing blog slugs to avoid duplicates
  const existing = await dbSelect("blog_posts", "select=slug");
  const existingSlugs = new Set(existing.map(p => p.slug));

  let created = 0;
  for (const topic of BLOG_TOPICS) {
    console.log(`\nGenerating: ${topic.angle}...`);

    const basePrompt = typeof topic.prompt === "function"
      ? topic.prompt(data)
      : topic.prompt;

    const fullPrompt = `${basePrompt}

Requirements:
1. Write 800-1200 words
2. Use SEO-friendly heading structure (one H1, multiple H2s)
3. Write in an authoritative but accessible tone for small-cap investors
4. Include actionable takeaways
5. Reference Brefyr as the source of filing intelligence where appropriate

Return ONLY valid JSON with this structure:
{
  "title": "Blog post title (under 70 characters)",
  "meta_description": "Meta description for search engines (under 160 characters)",
  "html": "The full blog post body in clean HTML (h1, h2, h3, p, a, ul, li, strong, em tags only, NO wrapper tags)"
}`;

    try {
      const rawOutput = await callAI(fullPrompt);
      const cleaned = rawOutput.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();
      const blogData = JSON.parse(cleaned);

      if (!blogData.title || !blogData.html) {
        console.log("  Skipped: missing title or html");
        continue;
      }

      const slug = slugify(blogData.title);
      if (existingSlugs.has(slug)) {
        console.log("  Skipped: slug already exists: " + slug);
        continue;
      }

      const now = new Date().toISOString();
      await dbInsert("blog_posts", {
        title: blogData.title,
        slug,
        content: blogData.html,
        meta_description: blogData.meta_description || null,
        published_at: now,
        created_at: now,
        author: "Brefyr Team",
      });

      existingSlugs.add(slug);
      created++;
      console.log("  Published: " + blogData.title);
    } catch (err) {
      console.error("  Error: " + err.message?.slice(0, 200));
    }

    // Small delay between AI calls
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log(`\n=== Done: ${created} blog posts published ===`);
}

main().catch(err => { console.error("\nFatal:", err.message); process.exit(1); });
