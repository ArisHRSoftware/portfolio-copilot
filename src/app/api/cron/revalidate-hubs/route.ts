import { verifyQStash } from "@/lib/qstash";

// DISABLED: Hub page revalidation is now handled by ISR timers (revalidate: 86400).
// This cron was consuming Vercel Hobby ISR write budget unnecessarily.
// All hub pages self-refresh via their own revalidation interval.
//
// To re-enable: restore revalidatePath calls and reduce hub page ISR intervals.
// Original schedule: Every 6 hours via QStash (cron: "0 */6 * * *")

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  return Response.json({
    success: true,
    disabled: true,
    reason: "Hub revalidation handled by ISR timers. Pause this QStash schedule.",
    timestamp: new Date().toISOString(),
  });
}
