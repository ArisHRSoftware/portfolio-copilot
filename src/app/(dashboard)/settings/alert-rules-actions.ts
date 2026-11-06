"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getMaxAlertRules } from "@/lib/tier-gating";
import type { AlertRule } from "@/lib/supabase/queries";

export async function createAlertRule(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Check tier limit
  const maxRules = await getMaxAlertRules(supabase, user.id);

  if (maxRules === 0) {
    return { error: "Your plan does not include alert rules. Please upgrade." };
  }

  if (maxRules !== -1) {
    const { count } = await supabase
      .from("alert_rules")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id);

    if ((count ?? 0) >= maxRules) {
      return {
        error: `You have reached the maximum of ${maxRules} alert rules for your plan.`,
      };
    }
  }

  // Parse the rule config from form data
  const name = formData.get("name") as string;
  const ruleType = formData.get("rule_type") as string;

  if (!name || !ruleType) {
    return { error: "Name and rule type are required." };
  }

  let ruleJson: Record<string, unknown> = {
    name: name.trim(),
    type: ruleType,
  };

  switch (ruleType) {
    case "filing_type": {
      const filingType = formData.get("filing_type") as string;
      const minSignificance = formData.get("min_significance") as string;
      if (!filingType) {
        return { error: "Filing type is required." };
      }
      ruleJson.filing_type = filingType;
      if (minSignificance) {
        const parsed = Number(minSignificance);
        if (!Number.isFinite(parsed) || parsed < 1 || parsed > 10) {
          return { error: "Significance score must be between 1 and 10." };
        }
        ruleJson.min_significance = parsed;
      }
      break;
    }
    case "significance": {
      const minSignificance = formData.get("min_significance") as string;
      if (!minSignificance) {
        return { error: "Minimum significance score is required." };
      }
      const parsed = Number(minSignificance);
      if (!Number.isFinite(parsed) || parsed < 1 || parsed > 10) {
        return { error: "Significance score must be between 1 and 10." };
      }
      ruleJson.min_significance = parsed;
      break;
    }
    case "insider_activity": {
      const activity = formData.get("activity") as string;
      const minAmount = formData.get("min_amount") as string;
      ruleJson.activity = activity || "any";
      if (minAmount) {
        const parsed = Number(minAmount);
        if (!Number.isFinite(parsed) || parsed < 0) {
          return { error: "Minimum amount must be a positive number." };
        }
        ruleJson.min_amount = parsed;
      }
      break;
    }
    case "keyword": {
      const keywordsRaw = formData.get("keywords") as string;
      if (!keywordsRaw || keywordsRaw.trim().length === 0) {
        return { error: "At least one keyword is required." };
      }
      const keywords = keywordsRaw
        .split(",")
        .map((k) => k.trim().slice(0, 100))
        .filter(Boolean)
        .slice(0, 50);
      if (keywords.length === 0) {
        return { error: "At least one valid keyword is required." };
      }
      ruleJson.keywords = keywords;
      break;
    }
    default:
      return { error: "Invalid rule type." };
  }

  const { error } = await supabase.from("alert_rules").insert({
    user_id: user.id,
    rule_json: ruleJson,
  } as never);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/settings");
  return { success: true };
}

export async function updateAlertRule(
  ruleId: string,
  updates: { is_active?: boolean; rule_json?: Record<string, unknown> }
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Verify the rule belongs to this user
  const { data: existing } = await supabase
    .from("alert_rules")
    .select("*")
    .eq("id", ruleId)
    .eq("user_id", user.id)
    .single();

  if (!existing) {
    return { error: "Alert rule not found." };
  }

  // Validate rule_json if provided — apply same rules as createAlertRule
  if (updates.rule_json) {
    const rj = updates.rule_json;
    const validTypes = ["filing_type", "significance", "insider_activity", "keyword"];
    if (!rj.type || !validTypes.includes(rj.type as string)) {
      return { error: "Invalid rule type." };
    }
    // Validate inner fields per type
    switch (rj.type) {
      case "filing_type": {
        if (rj.min_significance != null) {
          const n = Number(rj.min_significance);
          if (!Number.isFinite(n) || n < 1 || n > 10) {
            return { error: "Significance score must be between 1 and 10." };
          }
          rj.min_significance = n;
        }
        break;
      }
      case "significance": {
        if (rj.min_significance == null) {
          return { error: "Minimum significance score is required." };
        }
        const n = Number(rj.min_significance);
        if (!Number.isFinite(n) || n < 1 || n > 10) {
          return { error: "Significance score must be between 1 and 10." };
        }
        rj.min_significance = n;
        break;
      }
      case "insider_activity": {
        if (rj.min_amount != null) {
          const n = Number(rj.min_amount);
          if (!Number.isFinite(n) || n < 0) {
            return { error: "Minimum amount must be a positive number." };
          }
          rj.min_amount = n;
        }
        break;
      }
      case "keyword": {
        if (Array.isArray(rj.keywords)) {
          const cleaned = (rj.keywords as string[])
            .map((k) => String(k).trim().slice(0, 100))
            .filter(Boolean)
            .slice(0, 50);
          if (cleaned.length === 0) {
            return { error: "At least one valid keyword is required." };
          }
          rj.keywords = cleaned;
        }
        break;
      }
    }
  }

  const { error } = await supabase
    .from("alert_rules")
    .update(updates as never)
    .eq("id", ruleId)
    .eq("user_id", user.id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/settings");
  return { success: true };
}

export async function deleteAlertRule(ruleId: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { error } = await supabase
    .from("alert_rules")
    .delete()
    .eq("id", ruleId)
    .eq("user_id", user.id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/settings");
  return { success: true };
}
