import { revalidatePath } from "next/cache";
import { verifyQStash } from "@/lib/qstash";

// Hub page revalidation cron endpoint.
//
// Revalidates all hub/index pages on a schedule to ensure freshness
// even when no individual filing triggers a cascade for a given page.
//
// Schedule: Every 6 hours via QStash (cron: "0 */6 * * *")

const HUB_PAGES = [
  "/",
  "/trending",
  "/recent-filings",
  "/insider-buying",
  "/insider-selling",
  "/earnings-this-week",
  "/blog",
  "/archive",
];

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  // Revalidate all hub pages
  const results: Array<{ path: string; status: string }> = [];

  for (const path of HUB_PAGES) {
    try {
      revalidatePath(path);
      results.push({ path, status: "revalidated" });
    } catch (error) {
      results.push({
        path,
        status: `error: ${error instanceof Error ? error.message : "unknown"}`,
      });
    }
  }

  return Response.json({
    success: true,
    revalidated: results,
    timestamp: new Date().toISOString(),
  });
}
