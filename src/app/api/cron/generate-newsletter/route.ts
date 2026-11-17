import crypto from "crypto";
import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";
import type { Database } from "@/lib/types/database";

type Filing = Database["public"]["Tables"]["filings"]["Row"];
type Company = Database["public"]["Tables"]["companies"]["Row"];

// Schedule: Weekdays 6:30am ET via QStash (also callable manually with CRON_SECRET)

function hasCronSecret(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return false;

  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;

  const expected = `Bearer ${cronSecret}`;
  if (authHeader.length !== expected.length) return false;

  return crypto.timingSafeEqual(
    Buffer.from(authHeader),
    Buffer.from(expected)
  );
}

// ── Structured newsletter output schema ──────────────────────────

interface NewsletterSection {
  topFiling: {
    ticker: string;
    companyName: string;
    filingType: string;
    summary: string;
    keyPoints: string[];
    significanceScore: number;
    slug: string;
  };
  moreFilings: Array<{
    ticker: string;
    filingType: string;
    oneLine: string;
  }>;
  insiderMoves: Array<{
    ticker: string;
    person: string;
    action: string;
    detail: string;
  }>;
  stats: {
    totalFilings: number;
    form4Count: number;
    eightKCount: number;
    topSector: string;
  };
  filingEducation: {
    topic: string;
    explanation: string;
  };
  subjectLine: string;
  introSentence: string;
}

// ── Filing education topics (rotates daily) ──────────────────────
const FILING_TOPICS = [
  { topic: "What is a Form 4?", explanation: "A Form 4 is filed when company insiders (officers, directors, or 10%+ shareholders) buy or sell shares. It must be filed within 2 business days of the transaction. Insider buying is often seen as a bullish signal — insiders are putting their own money where their mouth is." },
  { topic: "Why insider buying matters", explanation: "When a CEO buys shares with their own money, they have access to all non-public information about the company. While insider selling can happen for many reasons (taxes, diversification), insider buying has only one motivation: they believe the stock is going up." },
  { topic: "How to read an 8-K", explanation: "An 8-K is filed for material events — things that could affect the stock price. Look for Item 2.02 (earnings results), Item 1.01 (material agreements), and Item 5.02 (executive departures). The most important 8-Ks score 7+ on our significance scale." },
  { topic: "What makes a 10-K significant?", explanation: "A 10-K is the annual report every public company must file. The key sections: risk factors (what could go wrong), MD&A (management's view of finances), and the auditor's opinion. Changes in risk factors or a qualified audit opinion are red flags." },
  { topic: "DEF 14A: The proxy statement", explanation: "The DEF 14A (proxy statement) reveals executive compensation, board nominations, and shareholder proposals. It tells you how much the CEO makes, whether there are shareholder revolts, and how the board is structured." },
  { topic: "SC 13D: Activist investors", explanation: "When someone acquires more than 5% of a company, they must file an SC 13D within 10 days. This filing often signals an activist investor taking a position, which can lead to significant corporate changes and stock price movement." },
  { topic: "What is significance scoring?", explanation: "We score every filing 1-10 based on its potential market impact. A routine quarterly filing might score 3-4. An unexpected CEO departure, insider buying spree, or going-concern warning scores 8-10. Focus on filings scoring 7+ to filter out the noise." },
];

export async function POST(request: Request): Promise<Response> {
  if (!hasCronSecret(request)) {
    const qstashError = await verifyQStash(request);
    if (qstashError) return qstashError;
  }

  const supabase = createWebhookClient();
  const startedAt = new Date().toISOString();

  const groqKey = process.env.GROQ_API_KEY;
  const googleKey = process.env.GOOGLE_API_KEY;
  if (!groqKey && !googleKey) {
    return Response.json(
      { error: "No AI API key configured (GROQ_API_KEY or GOOGLE_API_KEY)" },
      { status: 500 }
    );
  }

  try {
    // Query previous trading day's filings (last 2 days to handle weekends)
    const lookbackDate = new Date();
    lookbackDate.setDate(lookbackDate.getDate() - 2);
    const lookbackStr = lookbackDate.toISOString().split("T")[0];

    // Narrow SELECT — never use select("*") for list queries
    const { data: rawFilings } = await supabase
      .from("filings")
      .select("id, slug, filing_type, filed_date, company_id, significance_score, one_line_summary, insider_data")
      .gte("filed_date", lookbackStr)
      .is("superseded_by", null)
      .order("significance_score", { ascending: false })
      .limit(30);

    const filings = (rawFilings ?? []) as Filing[];

    // Fetch companies with narrow SELECT
    const companyIds = [...new Set(filings.map((f) => f.company_id))];
    const { data: rawCompanies } = companyIds.length
      ? await supabase
          .from("companies")
          .select("id, ticker, name, sector")
          .in("id", companyIds)
      : { data: null };
    const companyMap = new Map(
      ((rawCompanies ?? []) as Company[]).map((c) => [c.id, c])
    );

    if (filings.length === 0) {
      await supabase.from("pipeline_runs").insert({
        type: "newsletter_gen",
        status: "completed",
        started_at: startedAt,
        completed_at: new Date().toISOString(),
        filings_processed: 0,
        errors_count: 0,
      } as never);

      return Response.json({
        success: true,
        message: "No recent filings, skipping newsletter",
      });
    }

    // Separate by type
    const topFilings = filings.slice(0, 5);
    const insiderFilings = filings.filter((f) => f.insider_data != null);
    const form4Count = filings.filter((f) => f.filing_type === "4").length;
    const eightKCount = filings.filter((f) => f.filing_type === "8-K").length;

    // Determine most active sector
    const sectorCounts = new Map<string, number>();
    for (const f of filings) {
      const sector = companyMap.get(f.company_id)?.sector ?? "Unknown";
      sectorCounts.set(sector, (sectorCounts.get(sector) ?? 0) + 1);
    }
    const topSector = [...sectorCounts.entries()].sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] ?? "Various";

    // Prepare data for AI
    const topFiling = topFilings[0];
    const topCompany = companyMap.get(topFiling.company_id);

    const filingsContext = topFilings
      .map((f) => {
        const c = companyMap.get(f.company_id);
        return `${c?.ticker ?? "?"} (${c?.name ?? ""}): ${f.filing_type} — ${f.one_line_summary ?? "Analysis pending"} (Score: ${f.significance_score}/10)`;
      })
      .join("\n");

    const insiderContext = insiderFilings
      .slice(0, 5)
      .map((f) => {
        const c = companyMap.get(f.company_id);
        const raw = f.insider_data;
        const trade: Record<string, unknown> = Array.isArray(raw)
          ? ((raw as Array<Record<string, unknown>>)[0] ?? {})
          : ((raw as Record<string, unknown>) ?? {});
        const person =
          (trade.person as string) ?? (trade.name as string) ?? "insider";
        const txType = (trade.transaction_type as string) ?? "trade";
        return `${c?.ticker ?? "?"}: ${txType} by ${person} — ${f.one_line_summary ?? ""}`;
      })
      .join("\n");

    // Select today's education topic (rotate based on day of year)
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    const educationTopic = FILING_TOPICS[dayOfYear % FILING_TOPICS.length];

    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    // Generate structured newsletter content via AI
    const prompt = `You are writing a daily newsletter called "The Filing Brief" for Brefyr, a SEC filing intelligence platform.

Today's date: ${today}
Total filings analyzed: ${filings.length}

Top filings (most significant):
${filingsContext}

Insider trading activity:
${insiderContext || "No notable insider trades detected."}

Your task: Generate a JSON object with these fields:
{
  "subjectLine": "A compelling, specific subject line under 65 characters. Lead with the most interesting data point. Example: 'This CEO just bought $2.3M of his own stock'",
  "introSentence": "One crisp sentence about what SEC filings revealed yesterday. Be specific with numbers.",
  "topFilingKeyPoints": ["3 bullet points about the #1 most significant filing. Each bullet should contain a specific number or fact. Max 20 words each."]
}

Rules:
- Be specific with numbers, names, amounts — never generic
- No fluff, no "in this edition" language
- Subject line must create curiosity without being clickbait
- Key points should be facts, not opinions

Return ONLY valid JSON, no other text.`;

    let aiOutput: string;
    if (groqKey) {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${groqKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: process.env.GROQ_MODEL || "openai/gpt-oss-120b",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 800,
            temperature: 0.6,
            response_format: { type: "json_object" },
          }),
        }
      );
      if (!res.ok) {
        const errorBody = await res.text();
        console.error("Groq API error:", res.status, errorBody);
        throw new Error("AI generation failed");
      }
      const data = (await res.json()) as {
        choices: Array<{ message: { content: string } }>;
      };
      aiOutput = data.choices[0]?.message?.content ?? "{}";
    } else {
      const { GoogleGenerativeAI } = await import("@google/generative-ai");
      const genAI = new GoogleGenerativeAI(googleKey!);
      const genModel = genAI.getGenerativeModel({
        model: process.env.GEMINI_FILING_MODEL || "gemini-2.0-flash",
        generationConfig: { maxOutputTokens: 800, temperature: 0.6 },
      });
      const result = await genModel.generateContent(prompt);
      aiOutput = result.response.text();
    }

    // Parse AI output — use data-only fallback if AI fails
    let subjectLine: string;
    let introSentence: string;
    let topFilingKeyPoints: string[];

    try {
      // Extract JSON object robustly — handles code fences, extra whitespace, etc.
      const jsonMatch = aiOutput.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("No JSON object found in AI output");

      const parsed = JSON.parse(jsonMatch[0]) as {
        subjectLine?: unknown;
        introSentence?: unknown;
        topFilingKeyPoints?: unknown;
      };

      // Field-level validation and sanitization
      const stripHtml = (s: string) => s.replace(/<[^>]*>/g, "");
      const sanitizeStr = (v: unknown, maxLen: number, fallback: string): string => {
        if (typeof v !== "string" || v.trim().length === 0) return fallback;
        return stripHtml(v).slice(0, maxLen).trim();
      };

      subjectLine = sanitizeStr(
        parsed.subjectLine,
        100,
        `${topCompany?.ticker ?? "SEC"} filing scores ${topFiling.significance_score}/10`
      );
      introSentence = sanitizeStr(
        parsed.introSentence,
        300,
        `${filings.length} SEC filings analyzed. ${insiderFilings.length} insider trades detected.`
      );
      topFilingKeyPoints = Array.isArray(parsed.topFilingKeyPoints)
        ? parsed.topFilingKeyPoints
            .filter((v): v is string => typeof v === "string")
            .slice(0, 3)
            .map((s) => stripHtml(s).slice(0, 200))
        : [];
    } catch {
      // Data-only fallback — no AI prose, just facts
      subjectLine = `${topCompany?.ticker ?? "SEC"}: ${topFiling.filing_type} scores ${topFiling.significance_score}/10`;
      introSentence = `${filings.length} SEC filings analyzed yesterday. ${insiderFilings.length} insider trades detected.`;
      topFilingKeyPoints = [
        topFiling.one_line_summary ?? "Filing analysis available on Brefyr",
      ];
    }

    // Build the structured newsletter data
    const newsletter: NewsletterSection = {
      topFiling: {
        ticker: topCompany?.ticker ?? "???",
        companyName: topCompany?.name ?? "Unknown",
        filingType: topFiling.filing_type,
        summary: topFiling.one_line_summary ?? "Analysis in progress",
        keyPoints: topFilingKeyPoints,
        significanceScore: topFiling.significance_score,
        slug: topFiling.slug,
      },
      moreFilings: topFilings.slice(1, 4).map((f) => {
        const c = companyMap.get(f.company_id);
        return {
          ticker: c?.ticker ?? "???",
          filingType: f.filing_type,
          oneLine: f.one_line_summary ?? "Analysis in progress",
        };
      }),
      insiderMoves: insiderFilings.slice(0, 3).map((f) => {
        const c = companyMap.get(f.company_id);
        const raw = f.insider_data;
        const trade: Record<string, unknown> = Array.isArray(raw)
          ? ((raw as Array<Record<string, unknown>>)[0] ?? {})
          : ((raw as Record<string, unknown>) ?? {});
        const person =
          (trade.person as string) ?? (trade.name as string) ?? "Insider";
        const txType = (trade.transaction_type as string) ?? "Trade";
        return {
          ticker: c?.ticker ?? "???",
          person,
          action: txType,
          detail: f.one_line_summary ?? "",
        };
      }),
      stats: {
        totalFilings: filings.length,
        form4Count,
        eightKCount,
        topSector,
      },
      filingEducation: educationTopic,
      subjectLine,
      introSentence,
    };

    // Insert structured data into content_queue for founder approval
    await supabase.from("content_queue").insert({
      type: "newsletter",
      title: `The Filing Brief — ${today}`,
      body: {
        version: 2,
        date: today,
        subject: newsletter.subjectLine,
        intro: newsletter.introSentence,
        topFiling: newsletter.topFiling,
        moreFilings: newsletter.moreFilings,
        insiderMoves: newsletter.insiderMoves,
        stats: newsletter.stats,
        filingEducation: newsletter.filingEducation,
        filings_count: filings.length,
        top_tickers: topFilings
          .map((f) => companyMap.get(f.company_id)?.ticker)
          .filter(Boolean),
      },
      status: "pending_review",
    } as never);

    // Log to pipeline_runs
    await supabase.from("pipeline_runs").insert({
      type: "newsletter_gen",
      status: "completed",
      started_at: startedAt,
      completed_at: new Date().toISOString(),
      filings_processed: filings.length,
      errors_count: 0,
    } as never);

    return Response.json({
      success: true,
      subject: newsletter.subjectLine,
      filings_covered: filings.length,
      insider_trades: insiderFilings.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Newsletter generation error:", message);

    await supabase.from("pipeline_runs").insert({
      type: "newsletter_gen",
      status: "failed",
      started_at: startedAt,
      completed_at: new Date().toISOString(),
      filings_processed: 0,
      errors_count: 1,
      error_details: JSON.stringify({ error: message }),
    } as never);

    return Response.json(
      { success: false, error: message, timestamp: new Date().toISOString() },
      { status: 500 }
    );
  }
}
