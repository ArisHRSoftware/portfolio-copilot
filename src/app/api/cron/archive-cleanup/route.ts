import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";

// Schedule: Daily midnight UTC via QStash

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  const supabase = createWebhookClient();

  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(
      now.getTime() - 30 * 24 * 60 * 60 * 1000
    ).toISOString();
    const fourteenDaysAgo = new Date(
      now.getTime() - 14 * 24 * 60 * 60 * 1000
    ).toISOString();
    const ninetyDaysAgo = new Date(
      now.getTime() - 90 * 24 * 60 * 60 * 1000
    ).toISOString();

    // Archive rejected items > 30 days
    const { error: rejErr } = await supabase
      .from("content_queue")
      .update({ status: "archived" } as never)
      .eq("status", "rejected")
      .lt("created_at", thirtyDaysAgo);

    // Archive stale drafts > 14 days
    const { error: draftErr } = await supabase
      .from("content_queue")
      .update({ status: "archived" } as never)
      .eq("status", "draft")
      .lt("created_at", fourteenDaysAgo);

    // Clean up old failed pipeline runs > 90 days
    const { error: pipeErr } = await supabase
      .from("pipeline_runs")
      .delete()
      .eq("status", "failed")
      .lt("started_at", ninetyDaysAgo);

    const errors = [rejErr, draftErr, pipeErr].filter(Boolean);

    return Response.json({
      success: errors.length === 0,
      errors: errors.map((e) => e?.message),
      timestamp: now.toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Archive cleanup error:", message);
    return Response.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
