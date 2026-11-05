import { createWebhookClient } from "@/lib/supabase/server";
import type { Filing, Company } from "@/lib/supabase/queries";

/**
 * Delivers a filing alert to all webhook-enabled users tracking the company.
 * Reads webhook URLs from alert_rules where rule_json.type === "webhook".
 *
 * This is fire-and-forget — webhook delivery failures are logged but
 * do not block the pipeline.
 */
export async function deliverWebhooks(
  filing: Filing,
  company: Company
): Promise<void> {
  const supabase = createWebhookClient();

  // Get all users tracking this company
  const { data: userStocks } = await supabase
    .from("user_stocks")
    .select("*")
    .eq("company_id", company.id);

  if (!userStocks || userStocks.length === 0) return;

  const userIds = userStocks.map(
    (us) => (us as { user_id: string }).user_id
  );

  // Get webhook-type alert rules for these users
  const { data: rules } = await supabase
    .from("alert_rules")
    .select("*")
    .in("user_id", userIds)
    .eq("is_active", true);

  if (!rules || rules.length === 0) return;

  const webhookRules = (rules as Array<{ user_id: string; rule_json: Record<string, unknown> }>).filter(
    (r) => r.rule_json?.type === "webhook" && typeof r.rule_json?.url === "string"
  );

  if (webhookRules.length === 0) return;

  // Validate webhook URLs to prevent SSRF
  const safeWebhookRules = webhookRules.filter((r) => {
    try {
      const parsed = new URL(r.rule_json.url as string);
      // Only allow HTTPS
      if (parsed.protocol !== "https:") return false;
      // Block private/internal hostnames
      const host = parsed.hostname.toLowerCase();
      if (
        host === "localhost" ||
        host === "127.0.0.1" ||
        host === "0.0.0.0" ||
        host === "::1" ||
        host.startsWith("10.") ||
        host.startsWith("192.168.") ||
        host.startsWith("172.16.") ||
        host.startsWith("172.17.") ||
        host.startsWith("172.18.") ||
        host.startsWith("172.19.") ||
        host.startsWith("172.20.") ||
        host.startsWith("172.21.") ||
        host.startsWith("172.22.") ||
        host.startsWith("172.23.") ||
        host.startsWith("172.24.") ||
        host.startsWith("172.25.") ||
        host.startsWith("172.26.") ||
        host.startsWith("172.27.") ||
        host.startsWith("172.28.") ||
        host.startsWith("172.29.") ||
        host.startsWith("172.30.") ||
        host.startsWith("172.31.") ||
        host.endsWith(".internal") ||
        host.endsWith(".local") ||
        host === "metadata.google.internal" ||
        host === "169.254.169.254"
      ) {
        console.warn(`Blocked SSRF attempt to ${host}`);
        return false;
      }
      return true;
    } catch {
      return false;
    }
  });

  if (safeWebhookRules.length === 0) return;

  const payload = {
    event: "filing.new",
    filing: {
      id: filing.id,
      type: filing.filing_type,
      filed_date: filing.filed_date,
      significance_score: filing.significance_score,
      one_line_summary: filing.one_line_summary,
      raw_url: filing.raw_url,
    },
    company: {
      ticker: company.ticker,
      name: company.name,
      sector: company.sector,
    },
    timestamp: new Date().toISOString(),
  };

  // Deliver to all webhook URLs in parallel (fire-and-forget)
  const deliveries = safeWebhookRules.map(async (rule) => {
    const url = rule.rule_json.url as string;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10000),
      });

      if (!res.ok) {
        console.error(
          `Webhook delivery failed for ${url}: ${res.status}`
        );
      }
    } catch (err) {
      console.error(`Webhook delivery error for ${url}:`, err);
    }
  });

  await Promise.allSettled(deliveries);
}
