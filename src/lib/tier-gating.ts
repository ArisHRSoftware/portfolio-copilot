import { TIERS, type TierName } from "@/lib/constants/tiers";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database";
import type { Subscription } from "@/lib/supabase/queries";

type Supabase = SupabaseClient<Database>;

async function getUserTier(supabase: Supabase, userId: string): Promise<TierName> {
  const { data } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .single();

  const sub = data as Subscription | null;

  if (!sub || sub.status !== "active") {
    return "free";
  }

  // If subscription expired, treat as free
  if (sub.current_period_end && new Date(sub.current_period_end) < new Date()) {
    return "free";
  }

  return sub.plan as TierName;
}

export async function canTrackMoreStocks(
  supabase: Supabase,
  userId: string
): Promise<boolean> {
  const tier = await getUserTier(supabase, userId);
  const limit = TIERS[tier].stocks;

  if (limit === -1) return true; // unlimited

  const { count } = await supabase
    .from("user_stocks")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId);

  return (count ?? 0) < limit;
}

export async function canAccessScreener(
  supabase: Supabase,
  userId: string
): Promise<boolean> {
  const tier = await getUserTier(supabase, userId);
  return TIERS[tier].screener;
}

export async function canUseAPI(
  supabase: Supabase,
  userId: string
): Promise<boolean> {
  const tier = await getUserTier(supabase, userId);
  return TIERS[tier].api;
}

export async function canExportData(
  supabase: Supabase,
  userId: string
): Promise<boolean> {
  const tier = await getUserTier(supabase, userId);
  return TIERS[tier].export;
}

export async function canUseWebhook(
  supabase: Supabase,
  userId: string
): Promise<boolean> {
  const tier = await getUserTier(supabase, userId);
  return TIERS[tier].webhook;
}

export async function getAlertDelay(
  supabase: Supabase,
  userId: string
): Promise<number> {
  const tier = await getUserTier(supabase, userId);
  switch (tier) {
    case "pro":
    case "plus":
      return 0; // real-time
    case "starter":
      return 60; // 1 hour delay
    case "free":
    default:
      return -1; // weekly digest only, no real-time alerts
  }
}

export async function getMaxAlertRules(
  supabase: Supabase,
  userId: string
): Promise<number> {
  const tier = await getUserTier(supabase, userId);
  return TIERS[tier].alertRules;
}

export async function getTierInfo(
  supabase: Supabase,
  userId: string
) {
  const tier = await getUserTier(supabase, userId);
  return { tier, ...TIERS[tier] };
}
