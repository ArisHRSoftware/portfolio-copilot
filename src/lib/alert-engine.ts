import { createWebhookClient } from "@/lib/supabase/server";
import type { Filing, Company, AlertRule } from "@/lib/supabase/queries";

export interface AlertMatch {
  userId: string;
  ruleId: string;
  ruleName: string;
}

interface RuleJson {
  name: string;
  type: "filing_type" | "significance" | "insider_activity" | "keyword";
  filing_type?: string;
  min_significance?: number;
  activity?: "buy" | "sell" | "any";
  min_amount?: number;
  keywords?: string[];
}

/**
 * Evaluates whether a single rule matches a given filing.
 */
function doesRuleMatch(rule: RuleJson, filing: Filing): boolean {
  switch (rule.type) {
    case "filing_type": {
      if (rule.filing_type && filing.filing_type !== rule.filing_type) {
        return false;
      }
      if (
        rule.min_significance != null &&
        filing.significance_score < rule.min_significance
      ) {
        return false;
      }
      return true;
    }

    case "significance": {
      if (rule.min_significance == null) return false;
      return filing.significance_score >= rule.min_significance;
    }

    case "insider_activity": {
      if (filing.filing_type !== "Form 4" && filing.filing_type !== "4") {
        return false;
      }
      const insiderData = filing.insider_data as Record<string, unknown> | null;
      if (!insiderData) return false;

      if (rule.activity && rule.activity !== "any") {
        const txnType = (insiderData.transaction_type as string | undefined) ?? "";
        if (rule.activity === "buy" && !txnType.toLowerCase().includes("buy") && !txnType.toLowerCase().includes("purchase")) {
          return false;
        }
        if (rule.activity === "sell" && !txnType.toLowerCase().includes("sell") && !txnType.toLowerCase().includes("sale")) {
          return false;
        }
      }

      if (rule.min_amount != null) {
        const amount = (insiderData.total_value as number | undefined) ?? 0;
        if (amount < rule.min_amount) return false;
      }

      return true;
    }

    case "keyword": {
      if (!rule.keywords || rule.keywords.length === 0) return false;
      const prose = (filing.ai_summary_prose ?? "").toLowerCase();
      const oneLine = (filing.one_line_summary ?? "").toLowerCase();
      const searchText = `${prose} ${oneLine}`;
      return rule.keywords.some((kw) => searchText.includes(kw.toLowerCase()));
    }

    default:
      return false;
  }
}

/**
 * Given a filing (with company data), evaluates all active alert rules
 * for users tracking that company and returns which users should be alerted.
 *
 * Uses createWebhookClient() since this runs in background/cron context
 * (no cookies available).
 */
export async function evaluateAlertRules(
  filing: Filing,
  company: Company
): Promise<AlertMatch[]> {
  const supabase = createWebhookClient();

  // 1. Get all user_stocks for this company
  const { data: userStocks } = await supabase
    .from("user_stocks")
    .select("*")
    .eq("company_id", company.id);

  if (!userStocks || userStocks.length === 0) return [];

  const userIds = [...new Set((userStocks as Array<{ user_id: string }>).map((s) => s.user_id))];

  // 2. Get active alert rules for all these users in one query
  const { data: allRules } = await supabase
    .from("alert_rules")
    .select("*")
    .in("user_id", userIds)
    .eq("is_active", true);

  if (!allRules || allRules.length === 0) return [];

  const rules = allRules as AlertRule[];

  // 3. Evaluate each rule against the filing
  const matches: AlertMatch[] = [];

  for (const rule of rules) {
    const ruleJson = rule.rule_json as unknown as RuleJson;
    if (!ruleJson || !ruleJson.type) continue;

    if (doesRuleMatch(ruleJson, filing)) {
      matches.push({
        userId: rule.user_id,
        ruleId: rule.id,
        ruleName: ruleJson.name ?? "Unnamed rule",
      });
    }
  }

  return matches;
}
