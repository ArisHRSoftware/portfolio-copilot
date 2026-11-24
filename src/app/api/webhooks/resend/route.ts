import crypto from "crypto";
import { createWebhookClient } from "@/lib/supabase/server";

/**
 * Resend webhook endpoint for email engagement events.
 * Configure this URL in the Resend dashboard under Webhooks.
 *
 * Events handled: email.opened, email.clicked, email.bounced, email.complained
 *
 * Resend uses Svix for webhook delivery. Set RESEND_WEBHOOK_SECRET
 * (from Resend dashboard → Webhooks → Signing Secret) to enable
 * signature verification.
 */

interface ResendWebhookEvent {
  type: string;
  data: {
    email_id?: string;
    to?: string[];
    subject?: string;
    created_at?: string;
    click?: { link?: string };
  };
}

/**
 * Verify Svix webhook signature from Resend.
 * Returns null if valid, or a Response if invalid.
 */
function verifySvixSignature(
  body: string,
  headers: Headers
): Response | null {
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!secret) {
    console.warn("RESEND_WEBHOOK_SECRET not set — rejecting webhook");
    return Response.json({ error: "Webhook verification unavailable" }, { status: 500 });
  }

  const svixId = headers.get("svix-id");
  const svixTimestamp = headers.get("svix-timestamp");
  const svixSignature = headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return Response.json({ error: "Missing svix headers" }, { status: 401 });
  }

  // Reject timestamps older than 5 minutes to prevent replay attacks
  const timestampSeconds = parseInt(svixTimestamp, 10);
  const now = Math.floor(Date.now() / 1000);
  if (isNaN(timestampSeconds) || Math.abs(now - timestampSeconds) > 300) {
    return Response.json({ error: "Timestamp too old" }, { status: 401 });
  }

  // Svix secret is base64-encoded with "whsec_" prefix
  const secretBytes = Buffer.from(
    secret.startsWith("whsec_") ? secret.slice(6) : secret,
    "base64"
  );

  const signedContent = `${svixId}.${svixTimestamp}.${body}`;
  const expectedSignature = crypto
    .createHmac("sha256", secretBytes)
    .update(signedContent)
    .digest("base64");

  // Svix sends multiple signatures separated by spaces, each prefixed with "v1,"
  // Use bitwise OR accumulation instead of .some() to avoid short-circuit timing leak
  const signatures = svixSignature.split(" ");
  let isValid = false;
  for (const sig of signatures) {
    const sigValue = sig.startsWith("v1,") ? sig.slice(3) : sig;
    try {
      if (crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(sigValue)
      )) {
        isValid = true;
      }
    } catch {
      // Length mismatch — skip this signature
    }
  }

  if (!isValid) {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  return null;
}

export async function POST(request: Request): Promise<Response> {
  // Read body as text first for signature verification
  const rawBody = await request.text();

  // Verify Svix signature (if RESEND_WEBHOOK_SECRET is configured)
  const sigError = verifySvixSignature(rawBody, request.headers);
  if (sigError) return sigError;

  let event: ResendWebhookEvent;
  try {
    event = JSON.parse(rawBody) as ResendWebhookEvent;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!event.type || !event.data) {
    return Response.json({ error: "Missing event type or data" }, { status: 400 });
  }

  const recipientEmail = event.data.to?.[0]?.toLowerCase();
  if (!recipientEmail) {
    return Response.json({ received: true });
  }

  const supabase = createWebhookClient();

  switch (event.type) {
    case "email.opened": {
      // Use Supabase RPC for atomic increment if available, otherwise
      // set last_opened_at and increment open_count in a single update.
      // The rpc("increment_open_count") is the preferred path — create it
      // via migration: CREATE FUNCTION increment_open_count(sub_email text)
      const { error: rpcError } = await supabase.rpc(
        "increment_open_count" as never,
        { sub_email: recipientEmail } as never
      );

      if (rpcError) {
        // Fallback: RPC not yet created — do a single update for last_opened_at.
        // open_count won't increment until the RPC function is created.
        await supabase
          .from("newsletter_subscribers")
          .update({ last_opened_at: new Date().toISOString() } as never)
          .eq("email", recipientEmail);
      }
      break;
    }

    case "email.clicked": {
      await supabase
        .from("newsletter_subscribers")
        .update({ last_clicked_at: new Date().toISOString() } as never)
        .eq("email", recipientEmail);
      break;
    }

    case "email.bounced": {
      await supabase
        .from("newsletter_subscribers")
        .update({ unsubscribed_at: new Date().toISOString() } as never)
        .eq("email", recipientEmail);
      console.log("Bounced subscriber suppressed:", recipientEmail.replace(/(.{2}).*@/, "$1***@"));
      break;
    }

    case "email.complained": {
      await supabase
        .from("newsletter_subscribers")
        .update({ unsubscribed_at: new Date().toISOString() } as never)
        .eq("email", recipientEmail);
      console.log("Spam complaint — subscriber suppressed:", recipientEmail.replace(/(.{2}).*@/, "$1***@"));
      break;
    }

    default:
      break;
  }

  return Response.json({ received: true, type: event.type });
}
