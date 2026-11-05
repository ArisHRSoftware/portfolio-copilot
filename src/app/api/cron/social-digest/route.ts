import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";
import type { Database } from "@/lib/types/database";

type ContentQueueRow = Database["public"]["Tables"]["content_queue"]["Row"];

// Schedule: Daily 2pm UTC via QStash

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  // Check Twitter API keys
  const twitterApiKey = process.env.TWITTER_API_KEY;
  const twitterApiSecret = process.env.TWITTER_API_SECRET;
  const twitterAccessToken = process.env.TWITTER_ACCESS_TOKEN;
  const twitterAccessSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

  if (
    !twitterApiKey ||
    !twitterApiSecret ||
    !twitterAccessToken ||
    !twitterAccessSecret
  ) {
    console.warn("Twitter API keys not configured, skipping social digest");
    return Response.json({
      success: true,
      message: "Twitter not configured, skipped",
    });
  }

  const supabase = createWebhookClient();
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://portfoliocopilot.com";

  try {
    // Get approved social posts
    const { data: rawPosts } = await supabase
      .from("content_queue")
      .select("*")
      .eq("type", "social")
      .eq("status", "approved")
      .order("created_at", { ascending: true })
      .limit(5);

    const posts = rawPosts as ContentQueueRow[] | null;

    if (!posts || posts.length === 0) {
      return Response.json({
        success: true,
        message: "No approved social posts",
      });
    }

    const published: string[] = [];
    const failed: string[] = [];

    // Twitter API v2 requires OAuth 1.0a for posting tweets
    // Use the twitter-api-v2 compatible approach with fetch + OAuth
    for (const post of posts) {
      try {
        const bodyData = post.body as Record<string, unknown> | null;

        // Compose tweet text from the post body or title
        let tweetText = (bodyData?.text as string) || post.title || "";

        // If body has a filing slug, append link
        const slug = bodyData?.filing_slug as string | undefined;
        if (slug) {
          const link = `${siteUrl}/filings/${slug}`;
          const maxTextLen = 280 - link.length - 2; // space + link
          if (tweetText.length > maxTextLen) {
            tweetText = tweetText.slice(0, maxTextLen - 1) + "\u2026";
          }
          tweetText = `${tweetText} ${link}`;
        } else if (tweetText.length > 280) {
          tweetText = tweetText.slice(0, 279) + "\u2026";
        }

        // Post to Twitter API v2 using OAuth 1.0a (required for tweet creation)
        const { default: crypto } = await import("crypto");
        const oauthParams: Record<string, string> = {
          oauth_consumer_key: twitterApiKey,
          oauth_nonce: crypto.randomBytes(16).toString("hex"),
          oauth_signature_method: "HMAC-SHA1",
          oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
          oauth_token: twitterAccessToken,
          oauth_version: "1.0",
        };

        // Build signature base string
        const paramString = Object.keys(oauthParams)
          .sort()
          .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(oauthParams[k])}`)
          .join("&");
        const signatureBase = `POST&${encodeURIComponent("https://api.twitter.com/2/tweets")}&${encodeURIComponent(paramString)}`;
        const signingKey = `${encodeURIComponent(twitterApiSecret)}&${encodeURIComponent(twitterAccessSecret)}`;
        const oauthSignature = crypto
          .createHmac("sha1", signingKey)
          .update(signatureBase)
          .digest("base64");
        oauthParams.oauth_signature = oauthSignature;

        const authHeader = "OAuth " + Object.keys(oauthParams)
          .sort()
          .map((k) => `${encodeURIComponent(k)}="${encodeURIComponent(oauthParams[k])}"`)
          .join(", ");

        const tweetResponse = await fetch(
          "https://api.twitter.com/2/tweets",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: authHeader,
            },
            body: JSON.stringify({ text: tweetText }),
          },
        );

        if (tweetResponse.ok) {
          // Mark as published
          await supabase
            .from("content_queue")
            .update({ status: "published" } as never)
            .eq("id", post.id);
          published.push(post.id);
        } else {
          const err = await tweetResponse.text();
          console.error(`Failed to post tweet for ${post.id}:`, err);
          failed.push(post.id);
        }
      } catch (postError) {
        const msg = postError instanceof Error ? postError.message : "Unknown error";
        console.error(`Error posting ${post.id}:`, msg);
        failed.push(post.id);
      }
    }

    return Response.json({
      success: true,
      published: published.length,
      failed: failed.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Social digest error:", message);
    return Response.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
