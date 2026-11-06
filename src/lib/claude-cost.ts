import { createWebhookClient } from "@/lib/supabase/server";
import { getResend } from "@/lib/resend";

// Gemini Flash pricing (per 1K tokens) — free tier, tracked for monitoring
const INPUT_COST_PER_1K = 0.0;
const OUTPUT_COST_PER_1K = 0.0;

/**
 * Calculate cost in USD from token counts.
 */
export function calculateCost(
  inputTokens: number,
  outputTokens: number
): number {
  return (
    (inputTokens * INPUT_COST_PER_1K) / 1000 +
    (outputTokens * OUTPUT_COST_PER_1K) / 1000
  );
}

/**
 * Get cumulative Claude API cost for a given period.
 */
export async function getCostForPeriod(options?: {
  days?: number;
}): Promise<{
  totalCost: number;
  totalInputTokens: number;
  totalOutputTokens: number;
  filingsAnalyzed: number;
}> {
  const supabase = createWebhookClient();
  const days = options?.days ?? 1;

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const { data } = await supabase
    .from("filings")
    .select("*")
    .not("input_tokens", "is", null)
    .gte("processed_at", startDate.toISOString());

  const filings = (data ?? []) as Array<{
    input_tokens: number | null;
    output_tokens: number | null;
  }>;

  let totalInputTokens = 0;
  let totalOutputTokens = 0;

  for (const f of filings) {
    totalInputTokens += f.input_tokens ?? 0;
    totalOutputTokens += f.output_tokens ?? 0;
  }

  return {
    totalCost: calculateCost(totalInputTokens, totalOutputTokens),
    totalInputTokens,
    totalOutputTokens,
    filingsAnalyzed: filings.length,
  };
}

/**
 * Check daily cost and send alert if threshold exceeded.
 * Default threshold: $10 USD (~₹800 INR).
 */
export async function checkCostAlert(
  thresholdUsd = 10
): Promise<{ alerted: boolean; dailyCost: number }> {
  const stats = await getCostForPeriod({ days: 1 });

  if (stats.totalCost >= thresholdUsd) {
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail) {
      const resend = getResend();
      await resend.emails.send({
        from:
          process.env.RESEND_FROM_EMAIL ?? "alerts@brefyr.com",
        to: adminEmail,
        subject: `[Alert] Claude API daily cost: $${stats.totalCost.toFixed(2)}`,
        html: `
          <h2>Claude API Cost Alert</h2>
          <p>Daily cost has exceeded the $${thresholdUsd} threshold.</p>
          <table style="border-collapse:collapse;font-family:monospace">
            <tr><td style="padding:4px 12px">Daily cost</td><td><strong>$${stats.totalCost.toFixed(2)}</strong></td></tr>
            <tr><td style="padding:4px 12px">Filings analyzed</td><td>${stats.filingsAnalyzed}</td></tr>
            <tr><td style="padding:4px 12px">Input tokens</td><td>${stats.totalInputTokens.toLocaleString()}</td></tr>
            <tr><td style="padding:4px 12px">Output tokens</td><td>${stats.totalOutputTokens.toLocaleString()}</td></tr>
          </table>
          <p style="color:#888;font-size:12px">This may indicate accidental re-backfill or runaway processing.</p>
        `,
      });
    }
    return { alerted: true, dailyCost: stats.totalCost };
  }

  return { alerted: false, dailyCost: stats.totalCost };
}
