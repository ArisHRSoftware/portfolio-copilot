import { createWebhookClient } from "@/lib/supabase/server";
import { getResend } from "@/lib/resend";
import { verifyQStash } from "@/lib/qstash";
import type { Database } from "@/lib/types/database";

type ContentQueueRow = Database["public"]["Tables"]["content_queue"]["Row"];

// Schedule: Wednesday noon UTC via QStash

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  const supabase = createWebhookClient();
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    return Response.json(
      { error: "ADMIN_EMAIL not configured" },
      { status: 500 }
    );
  }

  try {
    const twentyFourHoursAgo = new Date(
      Date.now() - 24 * 60 * 60 * 1000
    ).toISOString();

    const { data: rawPending } = await supabase
      .from("content_queue")
      .select("*")
      .eq("status", "pending_review")
      .lt("created_at", twentyFourHoursAgo)
      .order("created_at", { ascending: true });

    const pending = rawPending as ContentQueueRow[] | null;

    if (!pending || pending.length === 0) {
      return Response.json({ success: true, message: "No pending items" });
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://portfoliocopilot.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "noreply@portfoliocopilot.com";

    const itemsList = pending
      .map((item) => {
        const age = Math.round(
          (Date.now() - new Date(item.created_at).getTime()) / (1000 * 60 * 60)
        );
        return `<li><strong>[${item.type}]</strong> ${item.title || "Untitled"} — pending for ${age}h</li>`;
      })
      .join("\n");

    await getResend().emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `[Action Required] ${pending.length} content item${pending.length !== 1 ? "s" : ""} awaiting approval`,
      html: `<h2>Content Awaiting Review</h2>
<p>The following items have been waiting for approval for more than 24 hours:</p>
<ul>${itemsList}</ul>
<p><a href="${siteUrl}/admin/content">Review in Admin Dashboard</a></p>
<p style="color:#666;font-size:12px;">Portfolio Copilot — Automated reminder</p>`,
    });

    return Response.json({
      success: true,
      reminded: pending.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Approval reminder error:", message);
    return Response.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
