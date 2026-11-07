import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";
import type { Database } from "@/lib/types/database";

type Filing = Database["public"]["Tables"]["filings"]["Row"];
type Company = Database["public"]["Tables"]["companies"]["Row"];

// Schedule: Monday 6am UTC via QStash

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  // ── Main logic ─────────────────────────────────────────────────
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
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);

    // 1. Query last 7 days of filings for theme analysis
    const { data: rawFilings } = await supabase
      .from("filings")
      .select("*")
      .gte("filed_date", startDate.toISOString().split("T")[0])
      .order("significance_score", { ascending: false })
      .limit(30);

    const filings = rawFilings as Filing[] | null;

    // Fetch companies for these filings
    const companyIds = [...new Set((filings ?? []).map((f) => f.company_id))];
    const { data: rawCompanies } = companyIds.length
      ? await supabase.from("companies").select("*").in("id", companyIds)
      : { data: null };
    const companyMap = new Map(
      ((rawCompanies as Company[] | null) ?? []).map((c) => [c.id, c])
    );

    if (!filings || filings.length === 0) {
      await supabase.from("pipeline_runs").insert({
        type: "blog_gen",
        status: "completed",
        started_at: startedAt,
        completed_at: new Date().toISOString(),
        filings_processed: 0,
        errors_count: 0,
      } as never);

      return Response.json({
        success: true,
        message: "No filings this week, skipping blog generation",
      });
    }

    // 2. Build context for Claude prompt
    const insiderFilings = filings.filter((f) => f.insider_data != null);
    const earningsFilings = filings.filter((f) =>
      f.has_earnings_data ||
      f.filing_type === "10-K" ||
      f.filing_type === "10-Q"
    );

    // Group filings by filing type for theme detection
    const byType: Record<string, number> = {};
    for (const f of filings) {
      byType[f.filing_type] = (byType[f.filing_type] || 0) + 1;
    }
    const typeBreakdown = Object.entries(byType)
      .sort((a, b) => b[1] - a[1])
      .map(([type, count]) => `${type}: ${count}`)
      .join(", ");

    const filingSummaries = filings
      .slice(0, 10)
      .map((f) => {
        const company = companyMap.get(f.company_id);
        return `- ${company?.ticker ?? "?"} (${company?.name ?? ""}): ${f.filing_type} filed ${f.filed_date} — ${f.one_line_summary ?? "Analysis pending"} (Score: ${f.significance_score}/10) [/filings/${f.slug}]`;
      })
      .join("\n");

    const insiderSummaries = insiderFilings
      .slice(0, 5)
      .map((f) => {
        const company = companyMap.get(f.company_id);
        const insider = f.insider_data as Record<string, unknown> | null;
        return `- ${company?.ticker ?? "?"}: ${insider?.action ?? "trade"} by ${insider?.reporter_name ?? "insider"} — ${f.one_line_summary ?? ""} [/filings/${f.slug}]`;
      })
      .join("\n");

    const dateRange = `${startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${endDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;

    // 3. Generate blog post with Groq (primary) or Gemini (fallback)
    const blogPrompt = `You are a financial content writer for Brefyr, a small-cap SEC filing intelligence platform. Write an SEO-optimized blog post based on the past week's filing activity (${dateRange}).

Filing activity summary:
- Total filings: ${filings.length}
- Filing types: ${typeBreakdown}
- Insider filings: ${insiderFilings.length}
- Earnings-related filings: ${earningsFilings.length}

Top filings by significance:
${filingSummaries}

Insider trading activity:
${insiderSummaries || "No notable insider trades this week."}

Requirements:
1. Pick an interesting angle from the data — sector trends, notable insider buying patterns, significant corporate events, or emerging themes
2. Write 800-1200 words
3. Use SEO-friendly heading structure (one H1, multiple H2s, optional H3s)
4. Link to relevant filing detail pages using the slug paths shown above (format: <a href="/filings/SLUG">link text</a>)
5. Write in an authoritative but accessible tone — informative for small-cap investors
6. Include actionable takeaways

Return your response as JSON with this exact structure:
{
  "title": "SEO-optimized blog post title (under 70 characters)",
  "meta_description": "Meta description for search engines (under 160 characters)",
  "html": "The full blog post body in clean HTML (no <html>/<head>/<body> wrapper, just content with h1, h2, h3, p, a, ul, li tags)",
  "slug_suggestion": "url-friendly-slug-for-the-post"
}

Return ONLY the JSON, no other text.`;

    let rawOutput: string;
    if (groqKey) {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${groqKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: blogPrompt }],
          response_format: { type: "json_object" },
          max_tokens: 3000,
          temperature: 0.7,
        }),
      });
      if (!res.ok) throw new Error(`Groq API error ${res.status}: ${await res.text()}`);
      const data = await res.json() as { choices: Array<{ message: { content: string } }> };
      rawOutput = data.choices[0]?.message?.content ?? "{}";
    } else {
      const { GoogleGenerativeAI } = await import("@google/generative-ai");
      const genAI = new GoogleGenerativeAI(googleKey!);
      const model = genAI.getGenerativeModel({
        model: process.env.GEMINI_FILING_MODEL || "gemini-3.8-flash",
        generationConfig: { maxOutputTokens: 3000, temperature: 0.7 },
      });
      const result = await model.generateContent(blogPrompt);
      rawOutput = result.response.text();
    }

    // Parse Gemini's JSON response
    let blogData: {
      title: string;
      meta_description: string;
      html: string;
      slug_suggestion: string;
    };

    try {
      // Handle case where Gemini wraps JSON in markdown code fences
      const cleaned = rawOutput
        .replace(/^```json\s*/i, "")
        .replace(/```\s*$/, "")
        .trim();
      blogData = JSON.parse(cleaned);
    } catch {
      // If JSON parsing fails, use the raw output as HTML with a generated title
      blogData = {
        title: `Small-Cap Filing Insights — ${dateRange}`,
        meta_description: `Weekly analysis of small-cap SEC filings from ${dateRange}. Key filings, insider trades, and market signals.`,
        html: rawOutput,
        slug_suggestion: `small-cap-insights-${startDate.toISOString().split("T")[0]}`,
      };
    }

    // 4. Insert into content_queue with type='blog', status='pending_review'
    // body is Record<string, unknown> per DB schema — store structured content
    await supabase.from("content_queue").insert({
      type: "blog",
      title: blogData.title,
      body: {
        html: blogData.html,
        meta_description: blogData.meta_description,
        slug_suggestion: blogData.slug_suggestion,
        date_range: dateRange,
        filings_count: filings.length,
        insider_count: insiderFilings.length,
        top_tickers: filings
          .slice(0, 5)
          .map((f) => companyMap.get(f.company_id)?.ticker)
          .filter(Boolean),
      },
      status: "pending_review",
    } as never);

    // 5. Log to pipeline_runs
    await supabase.from("pipeline_runs").insert({
      type: "blog_gen",
      status: "completed",
      started_at: startedAt,
      completed_at: new Date().toISOString(),
      filings_processed: filings.length,
      errors_count: 0,
    } as never);

    return Response.json({
      success: true,
      title: blogData.title,
      filings_analyzed: filings.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Blog generation error:", message);

    await supabase.from("pipeline_runs").insert({
      type: "blog_gen",
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
