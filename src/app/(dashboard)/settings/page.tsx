import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  getUserProfile,
  getUserSubscription,
  getUserAlertRules,
} from "@/lib/supabase/queries";
import { getTierInfo } from "@/lib/tier-gating";
import { TIERS } from "@/lib/constants/tiers";
import { SettingsPanel } from "./settings-panel";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function SettingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  let profile: Awaited<ReturnType<typeof getUserProfile>> = null;
  let subscription: Awaited<ReturnType<typeof getUserSubscription>> = null;
  let alertRules: Awaited<ReturnType<typeof getUserAlertRules>> = [];
  let tierInfo: Awaited<ReturnType<typeof getTierInfo>> = { tier: "free" as const, ...TIERS.free };

  try {
    [profile, subscription, alertRules, tierInfo] = await Promise.all([
      getUserProfile(supabase, user.id),
      getUserSubscription(supabase, user.id),
      getUserAlertRules(supabase, user.id),
      getTierInfo(supabase, user.id),
    ]);
  } catch {
    // Supabase down — render with defaults instead of 500
  }

  return (
    <SettingsPanel
      user={{ id: user.id, email: user.email ?? "" }}
      profile={profile}
      subscription={subscription}
      alertRules={alertRules}
      tierInfo={tierInfo}
    />
  );
}
