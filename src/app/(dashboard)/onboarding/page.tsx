import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { OnboardingFlow } from "@/components/onboarding-flow";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Get Started",
};

export default async function OnboardingPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Check if onboarding is already completed.
  // The profiles table may not have the onboarding_completed column yet,
  // so we handle that gracefully.
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const profileRecord = profile as Record<string, unknown> | null;
  const onboardingCompleted = profileRecord?.onboarding_completed === true;

  if (onboardingCompleted) {
    redirect("/dashboard");
  }

  return <OnboardingFlow />;
}
