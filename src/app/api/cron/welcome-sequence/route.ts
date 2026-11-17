import crypto from "crypto";
import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";

// Welcome sequence emails triggered by QStash scheduled messages.
// Called with ?subscriber_id=X&stage=N where stage is 1 (day 0), 2 (day 3), 3 (day 7).

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

function hasCronSecret(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return false;
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;
  const expected = `Bearer ${cronSecret}`;
  if (authHeader.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(authHeader), Buffer.from(expected));
}

export async function POST(request: Request): Promise<Response> {
  if (!hasCronSecret(request)) {
    const qstashError = await verifyQStash(request);
    if (qstashError) return qstashError;
  }

  const { searchParams } = new URL(request.url);
  const subscriberId = searchParams.get("subscriber_id");
  const stage = parseInt(searchParams.get("stage") ?? "0", 10);

  if (!subscriberId || stage < 1 || stage > 3) {
    return Response.json({ error: "Missing subscriber_id or invalid stage" }, { status: 400 });
  }

  const supabase = createWebhookClient();

  // Fetch subscriber — check idempotency via welcome_stage
  const { data: sub } = await supabase
    .from("newsletter_subscribers")
    .select("id, email, confirmed, unsubscribed_at, welcome_stage")
    .eq("id", subscriberId)
    .single();

  if (!sub) {
    return Response.json({ error: "Subscriber not found" }, { status: 404 });
  }

  const subscriber = sub as {
    id: string;
    email: string;
    confirmed: boolean;
    unsubscribed_at: string | null;
    welcome_stage: number;
  };

  // Skip if unsubscribed, not confirmed, or already past this stage
  if (subscriber.unsubscribed_at || !subscriber.confirmed) {
    return Response.json({ success: true, skipped: "unsubscribed or unconfirmed" });
  }
  if (subscriber.welcome_stage >= stage) {
    return Response.json({ success: true, skipped: "already sent this stage" });
  }

  const { getResend } = await import("@/lib/resend");
  const resend = getResend();
  const fromEmail = process.env.RESEND_FROM_EMAIL || "brief@brefyr.com";

  try {
    if (stage === 1) {
      // Day 0: Welcome email
      await resend.emails.send({
        from: `Brefyr <${fromEmail}>`,
        to: subscriber.email,
        subject: "Welcome to The Filing Brief",
        html: welcomeEmail1(),
      });
    } else if (stage === 2) {
      // Day 3: Engagement prompt
      await resend.emails.send({
        from: `Brefyr <${fromEmail}>`,
        to: subscriber.email,
        subject: "Have you added stocks to your watchlist?",
        html: welcomeEmail2(),
      });
    } else if (stage === 3) {
      // Day 7: Week summary + upgrade CTA
      await resend.emails.send({
        from: `Brefyr <${fromEmail}>`,
        to: subscriber.email,
        subject: "Your first week of filing intelligence",
        html: welcomeEmail3(),
      });
    }

    // Update welcome_stage atomically
    await supabase
      .from("newsletter_subscribers")
      .update({ welcome_stage: stage } as never)
      .eq("id", subscriber.id)
      .lt("welcome_stage", stage);

    return Response.json({ success: true, stage, email: subscriber.email });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Send failed";
    console.error(`Welcome email stage ${stage} failed for ${subscriber.email}:`, msg);
    return Response.json({ success: false, error: msg }, { status: 500 });
  }
}

// ── Email templates ─────────────────────────────────────────────

function emailWrapper(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${title}</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:16px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#18181b;border-radius:8px 8px 0 0;">
    <tr><td style="padding:24px 28px;">
      <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff;">Brefyr</h1>
    </td></tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff;">
    <tr><td style="padding:24px 28px;color:#374151;font-size:15px;line-height:1.6;">
      ${body}
    </td></tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="padding:16px 28px;text-align:center;font-size:11px;color:#a1a1aa;">
      Brefyr &middot; AI-powered SEC filing intelligence<br/>
      <a href="${SITE_URL}/api/newsletter/unsubscribe?email=SUBSCRIBER_EMAIL" style="color:#a1a1aa;">Unsubscribe</a>
    </td></tr>
  </table>
</div>
</body>
</html>`;
}

function welcomeEmail1(): string {
  return emailWrapper("Welcome to The Filing Brief", `
    <h2 style="margin:0 0 16px;font-size:22px;color:#18181b;">Welcome to The Filing Brief</h2>
    <p>You're in. Starting tomorrow, you'll receive the most significant SEC filings delivered to your inbox every trading day.</p>
    <p><strong>Here's what we do differently:</strong></p>
    <ul style="padding-left:20px;">
      <li>AI reads every SEC filing for 7,600+ US-listed companies</li>
      <li>We surface what matters in under 3 minutes</li>
      <li>No fluff, no opinions, no stock picks — just filing intelligence</li>
    </ul>
    <p><strong>While you wait for tomorrow's brief:</strong></p>
    <p>
      <a href="${SITE_URL}/auth/signup" style="display:inline-block;padding:10px 24px;background:#16a34a;color:#fff;text-decoration:none;border-radius:6px;font-weight:600;">
        Create Your Free Account &rarr;
      </a>
    </p>
    <p style="font-size:13px;color:#6b7280;">Track up to 50 stocks during your 30-day trial. No credit card required.</p>
    <p style="font-size:13px;color:#6b7280;">Add <strong>brief@brefyr.com</strong> to your contacts so we don't land in spam.</p>
  `);
}

function welcomeEmail2(): string {
  return emailWrapper("Have you added stocks?", `
    <h2 style="margin:0 0 16px;font-size:22px;color:#18181b;">Quick question: have you added stocks to your watchlist?</h2>
    <p>When you add stocks, everything changes:</p>
    <ul style="padding-left:20px;">
      <li>Your daily brief highlights filings for <strong>your</strong> stocks first</li>
      <li>You get alerts when insiders trade <strong>your</strong> stocks</li>
      <li>Your dashboard shows a timeline for <strong>your</strong> portfolio</li>
    </ul>
    <p>
      <a href="${SITE_URL}/auth/signup" style="display:inline-block;padding:10px 24px;background:#16a34a;color:#fff;text-decoration:none;border-radius:6px;font-weight:600;">
        Add Stocks to Your Watchlist &rarr;
      </a>
    </p>
    <p style="font-size:13px;color:#6b7280;">It takes 30 seconds. Just type in your tickers.</p>
  `);
}

function welcomeEmail3(): string {
  return emailWrapper("Your first week", `
    <h2 style="margin:0 0 16px;font-size:22px;color:#18181b;">Your first week of filing intelligence</h2>
    <p>You've been receiving The Filing Brief for a week now. The free brief covers the highlights, but the full story — personalized alerts, advanced screening, real-time insider trades — is what Brefyr Pro subscribers get.</p>
    <p><strong>What Pro includes:</strong></p>
    <ul style="padding-left:20px;">
      <li>Track up to 50 stocks (Plus) or unlimited (Pro)</li>
      <li>Real-time insider trade alerts</li>
      <li>Filing screener with significance filters</li>
      <li>Daily personalized digest for your watchlist</li>
    </ul>
    <p>
      <a href="${SITE_URL}/pricing" style="display:inline-block;padding:10px 24px;background:#16a34a;color:#fff;text-decoration:none;border-radius:6px;font-weight:600;">
        See Plans — Starting at $9/year &rarr;
      </a>
    </p>
    <p style="font-size:13px;color:#6b7280;">No pressure. The daily brief is free forever.</p>
  `);
}
