import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createWebhookClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const rawNext = searchParams.get("next") ?? "/dashboard";

  // Prevent open redirect — only allow relative paths starting with /
  const next =
    rawNext.startsWith("/") && !rawNext.startsWith("//") ? rawNext : "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Handle new user setup
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          const createdAt = new Date(user.created_at).getTime();
          const isNewUser = Date.now() - createdAt < 10 * 60 * 1000;
          if (isNewUser) {
            // Send welcome email
            const { sendWelcomeEmail } = await import("@/lib/resend");
            const name = user.user_metadata?.full_name || "";
            sendWelcomeEmail(user.email!, name).catch(() => {});

            // Auto-grant 30-day trial of Plus tier.
            // The handle_new_user() DB trigger creates a free/active subscription,
            // so we UPDATE it to plus/trialing rather than INSERT.
            // Uses upsert to handle race conditions atomically.
            const adminClient = createWebhookClient();
            const trialEnd = new Date();
            trialEnd.setDate(trialEnd.getDate() + 30);

            // Only upgrade to trial if the user hasn't already had one.
            // Check current subscription — only upgrade if it's still free/active
            // (not if they already have a paid or trialing subscription).
            const { data: existingSub } = await adminClient
              .from("subscriptions")
              .select("id, plan, status")
              .eq("user_id", user.id)
              .single();

            const sub = existingSub as { id: string; plan: string; status: string } | null;
            if (sub && sub.plan === "free" && sub.status === "active") {
              // Upgrade existing free subscription to trial
              await adminClient
                .from("subscriptions")
                .update({
                  plan: "plus",
                  status: "trialing",
                  current_period_start: new Date().toISOString(),
                  current_period_end: trialEnd.toISOString(),
                } as never)
                .eq("id", sub.id);
            } else if (!sub) {
              // No subscription at all (trigger may not have fired yet) — insert with upsert
              await adminClient.from("subscriptions").upsert(
                {
                  user_id: user.id,
                  plan: "plus",
                  status: "trialing",
                  current_period_start: new Date().toISOString(),
                  current_period_end: trialEnd.toISOString(),
                } as never,
                { onConflict: "user_id", ignoreDuplicates: false }
              );
            }
            // If sub exists but is NOT free/active (already paid/trialing), do nothing
          }
        }
      } catch (err) {
        // Don't block auth flow if setup fails, but log for debugging
        console.error("New user setup failed:", err instanceof Error ? err.message : err);
      }
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/auth/login?error=auth_callback_failed`);
}
