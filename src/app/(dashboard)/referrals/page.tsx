import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/types/database";
import { ReferralPanel } from "./referral-panel";

type Referral = Database["public"]["Tables"]["referrals"]["Row"];

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Referrals",
};

export default async function ReferralsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data } = await supabase
    .from("referrals")
    .select("*")
    .eq("referrer_user_id", user.id)
    .order("created_at", { ascending: false });

  const referrals = (data ?? []) as Referral[];

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";
  const referralLink = `${siteUrl}/auth/signup?ref=${user.id}`;

  return (
    <ReferralPanel
      referrals={referrals}
      referralLink={referralLink}
    />
  );
}
