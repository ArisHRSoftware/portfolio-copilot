import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

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
      // Send welcome email for newly created users
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          const createdAt = new Date(user.created_at).getTime();
          const isNewUser = Date.now() - createdAt < 10 * 60 * 1000;
          if (isNewUser) {
            const { sendWelcomeEmail } = await import("@/lib/resend");
            const name = user.user_metadata?.full_name || "";
            sendWelcomeEmail(user.email!, name).catch(() => {});
          }
        }
      } catch {
        // Don't block auth flow if welcome email fails
      }
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/auth/login?error=auth_callback_failed`);
}
