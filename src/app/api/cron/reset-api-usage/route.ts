import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";

// Schedule: Daily midnight UTC via QStash

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  const supabase = createWebhookClient();

  try {
    const { error } = await supabase
      .from("api_keys")
      .update({ calls_today: 0 } as never)
      .gt("calls_today", 0);

    return Response.json({
      success: !error,
      error: error?.message ?? null,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("API usage reset error:", message);
    return Response.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
