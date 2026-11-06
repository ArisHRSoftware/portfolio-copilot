import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database";
import { processNewFilings } from "@/lib/edgar/pipeline";
import { verifyQStash } from "@/lib/qstash";

async function handler(_request: Request): Promise<Response> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return Response.json(
      { error: "Supabase configuration missing" },
      { status: 500 }
    );
  }

  if (!process.env.GOOGLE_API_KEY) {
    return Response.json(
      { error: "GOOGLE_API_KEY not configured" },
      { status: 500 }
    );
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey);

  try {
    const result = await processNewFilings(supabase);

    return Response.json({
      success: true,
      pipeline_run_id: result.pipeline_run_id,
      filings_processed: result.filings_processed,
      errors_count: result.errors_count,
      status: result.status,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown pipeline error";
    console.error("EDGAR pipeline error:", message);

    return Response.json(
      {
        success: false,
        error: message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  return handler(request);
}
