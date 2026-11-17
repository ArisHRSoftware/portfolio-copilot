"use server";

import { revalidatePath } from "next/cache";
import { createClient, createServiceClient } from "@/lib/supabase/server";
import {
  onBlogPublished,
  onNewsletterSent,
} from "@/lib/seo/revalidate-cascade";
import type { Database } from "@/lib/types/database";

type ContentUpdate = Database["public"]["Tables"]["content_queue"]["Update"];

async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  if (!process.env.ADMIN_EMAIL || user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("Forbidden");
  }

  // Use service role client for writes — anon key is blocked by RLS
  const serviceClient = await createServiceClient();
  return serviceClient;
}

async function updateContentQueue(
  contentId: string,
  updates: ContentUpdate
) {
  const supabase = await requireAdmin();
  const { error } = await supabase
    .from("content_queue")
    .update(updates as never)
    .eq("id", contentId);
  if (error) throw new Error(`Update failed: ${error.message}`);
  revalidatePath("/admin/content");
}

export async function approveContent(contentId: string, founderNote?: string) {
  await updateContentQueue(contentId, {
    status: "approved",
    approved_at: new Date().toISOString(),
    founder_note: founderNote ?? null,
  });
}

export async function rejectContent(contentId: string, reason: string) {
  if (!reason.trim()) {
    throw new Error("Rejection reason is required");
  }
  await updateContentQueue(contentId, {
    status: "rejected",
    rejection_reason: reason,
  });
}

export async function publishContent(contentId: string) {
  const supabase = await requireAdmin();

  const { data: item } = await supabase
    .from("content_queue")
    .select("*")
    .eq("id", contentId)
    .single();

  if (!item) {
    throw new Error("Content item not found");
  }

  const typedItem = item as Database["public"]["Tables"]["content_queue"]["Row"];
  const now = new Date().toISOString();

  await updateContentQueue(contentId, {
    status: "published",
    published_at: now,
  });

  // Create the corresponding published record based on content type
  if (typedItem.type === "blog") {
    const slug = typedItem.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const bodyText =
      typedItem.preview_html ??
      (typeof typedItem.body === "string"
        ? typedItem.body
        : JSON.stringify(typedItem.body));

    const { data: blogPost } = await supabase
      .from("blog_posts")
      .upsert(
        {
          slug,
          title: typedItem.title,
          body: bodyText,
          published_at: now,
          auto_generated: true,
        } as never,
        { onConflict: "slug" }
      )
      .select()
      .single();

    if (blogPost) {
      await onBlogPublished(blogPost as Database["public"]["Tables"]["blog_posts"]["Row"]);
    }
  } else if (typedItem.type === "newsletter") {
    const bodyObj = typedItem.body as Record<string, unknown> | null;

    // Render newsletter HTML using the v2 template if available
    let renderedHtml: string;
    let emailSubject: string;

    if (bodyObj && bodyObj.version === 2) {
      // V2 structured newsletter — render with template
      const { renderNewsletterHtml } = await import("@/lib/newsletter-template");
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";
      // Unsubscribe URL placeholder — replaced per-subscriber during send
      renderedHtml = renderNewsletterHtml(
        bodyObj as unknown as Parameters<typeof renderNewsletterHtml>[0],
        `${siteUrl}/api/newsletter/unsubscribe?email=SUBSCRIBER_EMAIL`
      );
      emailSubject = (bodyObj.subject as string) || typedItem.title;
    } else {
      // Legacy v1 — use raw HTML
      renderedHtml =
        (typeof bodyObj === "object" && bodyObj !== null
          ? (bodyObj.html as string | undefined)
          : undefined) ??
        typedItem.preview_html ??
        "";
      emailSubject = typedItem.title;
    }

    const { data: newsletter } = await supabase
      .from("newsletter_issues")
      .insert({
        subject: emailSubject,
        body_html: renderedHtml,
      } as never)
      .select()
      .single();

    if (newsletter) {
      const typedNewsletter =
        newsletter as Database["public"]["Tables"]["newsletter_issues"]["Row"];

      // Fetch confirmed, active subscribers only (double opt-in)
      const { data: subscribers } = await supabase
        .from("newsletter_subscribers")
        .select("email")
        .eq("confirmed", true)
        .is("unsubscribed_at", null);

      const emails = ((subscribers ?? []) as { email: string }[]).map(
        (s) => s.email
      );

      if (emails.length > 0) {
        const { sendNewsletterBrief } = await import("@/lib/resend");
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";
        let sentCount = 0;
        let failedCount = 0;

        for (const email of emails) {
          // Replace placeholder with actual subscriber email in unsubscribe URL
          const personalizedHtml = renderedHtml.replace(
            "SUBSCRIBER_EMAIL",
            encodeURIComponent(email)
          );
          const unsubUrl = `${siteUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}`;
          const result = await sendNewsletterBrief(
            email,
            emailSubject,
            personalizedHtml,
            unsubUrl
          );
          if (result.success) sentCount++;
          else failedCount++;
        }

        console.log(`Newsletter sent: ${sentCount} ok, ${failedCount} failed`);
      }

      // Update sent_at and recipient_count on the newsletter row
      await supabase
        .from("newsletter_issues")
        .update({
          sent_at: new Date().toISOString(),
          recipient_count: emails.length,
        } as never)
        .eq("id", typedNewsletter.id);

      await onNewsletterSent(typedNewsletter);
    }
  }
}

export async function archiveContent(contentId: string) {
  await updateContentQueue(contentId, {
    status: "archived",
    archived_at: new Date().toISOString(),
  });
}

export async function batchApproveContent(
  contentIds: string[],
  founderNote?: string
) {
  const supabase = await requireAdmin();
  if (contentIds.length === 0) return;

  const now = new Date().toISOString();
  const { error } = await supabase
    .from("content_queue")
    .update({
      status: "approved",
      approved_at: now,
      founder_note: founderNote ?? null,
    } as never)
    .in("id", contentIds);

  if (error) {
    throw new Error(`Failed to batch approve: ${error.message}`);
  }

  revalidatePath("/admin/content");
}
