import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";
import type { Database } from "@/lib/types/database";

type Filing = Database["public"]["Tables"]["filings"]["Row"];
type Company = Database["public"]["Tables"]["companies"]["Row"];

// Schedule: Monday 5am UTC via QStash

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  // ── Main logic ─────────────────────────────────────────────────
  const supabase = createWebhookClient();
  const startedAt = new Date().toISOString();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "ANTHROPIC_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);

    // 1. Query last 7 days of filings, ordered by significance
    const { data: rawFilings } = await supabase
      .from("filings")
      .select("*")
      .gte("filed_date", startDate.toISOString().split("T")[0])
      .order("significance_score", { ascending: false })
      .limit(20);

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
        type: "newsletter_gen",
        status: "completed",
        started_at: startedAt,
        completed_at: new Date().toISOString(),
        filings_processed: 0,
        errors_count: 0,
      } as never);

      return Response.json({
        success: true,
        message: "No filings this week, skipping newsletter",
      });
    }

    // 2. Prepare filing data for the prompt
    const topFilings = filings.slice(0, 5);
    const insiderFilings = filings.filter((f) => f.insider_data != null);

    const filingSummaries = topFilings
      .map((f) => {
        const company = companyMap.get(f.company_id);
        return `- ${company?.ticker ?? "?"} (${company?.name ?? ""}): ${f.filing_type} — ${f.one_line_summary ?? "Analysis pending"} (Score: ${f.significance_score}/10)`;
      })
      .join("\n");

    const insiderSummaries = insiderFilings
      .slice(0, 5)
      .map((f) => {
        const company = companyMap.get(f.company_id);
        const insider = f.insider_data as Record<string, unknown> | null;
        return `- ${company?.ticker ?? "?"}: ${insider?.action ?? "trade"} by ${insider?.reporter_name ?? "insider"} — ${f.one_line_summary ?? ""}`;
      })
      .join("\n");

    // 3. Generate newsletter with Claude
    const { default: Anthropic } = await import("@anthropic-ai/sdk");
    const anthropic = new Anthropic({ apiKey });
    const model = process.env.ANTHROPIC_MODEL;
    if (!model) {
      return Response.json(
        { error: "ANTHROPIC_MODEL not configured" },
        { status: 500 }
      );
    }

    const dateRange = `${startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${endDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;

    const response = await anthropic.messages.create({
      model,
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: `Write a weekly newsletter body for "Portfolio Copilot" covering small-cap SEC filings from ${dateRange}.

Top filings this week:
${filingSummaries}

Insider trading activity:
${insiderSummaries || "No notable insider trades this week."}

Write clean HTML (just the content section, no <html>/<head>/<body> wrapper tags). Include:
1. A brief intro paragraph (2-3 sentences about this week's filing activity)
2. "Top Filings" section highlighting the most significant filings with brief context
3. "Insider Activity" section if there were insider trades
4. A brief closing line

Use <h2> for section headers. Keep it concise and actionable. No fluff.`,
        },
      ],
    });

    const newsletterBody =
      response.content[0].type === "text" ? response.content[0].text : "";
    const subject = `This Week in Small-Cap Filings — ${dateRange}`;

    // 4. Insert into content_queue with type='newsletter', status='pending_review'
    // body is Record<string, unknown> per DB schema — store structured content
    await supabase.from("content_queue").insert({
      type: "newsletter",
      title: subject,
      body: {
        html: newsletterBody,
        date_range: dateRange,
        filings_count: filings.length,
        top_tickers: topFilings
          .map((f) => companyMap.get(f.company_id)?.ticker)
          .filter(Boolean),
      },
      status: "pending_review",
    } as never);

    // 5. Log to pipeline_runs
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
      subject,
      filings_covered: filings.length,
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
