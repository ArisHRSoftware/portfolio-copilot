import { revalidatePath } from "next/cache";
import { Redis } from "@upstash/redis";
import type { Database } from "@/lib/types/database";

type Filing = Database["public"]["Tables"]["filings"]["Row"];
type Company = Database["public"]["Tables"]["companies"]["Row"];
type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"];
type NewsletterIssue =
  Database["public"]["Tables"]["newsletter_issues"]["Row"];

/**
 * Debounce window in seconds. Same path won't be revalidated more than
 * once within this window, preventing redundant ISR rebuilds during
 * batch processing.
 */
const DEBOUNCE_SECONDS = 60;

/**
 * Redis key prefix for revalidation debounce tracking.
 */
const DEBOUNCE_PREFIX = "revalidate:debounce:";

/**
 * Get the Upstash Redis client for debouncing. Returns null if Redis
 * is not configured (graceful degradation — revalidation still happens,
 * just without debouncing).
 */
function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

/**
 * Revalidate a path with debouncing. If the same path was revalidated
 * within the last DEBOUNCE_SECONDS, skip it.
 *
 * When Redis is unavailable, revalidation happens unconditionally.
 */
async function debouncedRevalidate(path: string): Promise<boolean> {
  const redis = getRedis();

  if (redis) {
    const key = `${DEBOUNCE_PREFIX}${path}`;

    // SET NX with expiry: only sets if key doesn't exist
    const wasSet = await redis.set(key, "1", {
      nx: true,
      ex: DEBOUNCE_SECONDS,
    });

    if (!wasSet) {
      // Key already exists — this path was recently revalidated
      return false;
    }
  }

  revalidatePath(path);
  return true;
}

/**
 * Revalidate all paths affected by a newly processed filing.
 *
 * Cascade:
 * - Stock page: /stocks/[ticker]
 * - Filing detail page: /stocks/[ticker]/filings/[slug]
 * - Sector hub page: /sectors/[sector]
 * - Filings feed page: /filings
 * - Recent filings hub: /recent-filings (always)
 * - Trending hub: /trending (always)
 * - Insider buying hub: /insider-buying (when insider buy/purchase action)
 * - Insider selling hub: /insider-selling (when insider sell/sale action)
 * - Earnings hub: /earnings-this-week (when has_earnings_data or 10-K/10-Q)
 * - Homepage (if significance >= 7)
 */
export async function onFilingProcessed(
  filing: Filing,
  company: Company
): Promise<void> {
  const paths: string[] = [];

  const ticker = company.ticker.toLowerCase();

  // Only revalidate the directly-affected pages to stay within Vercel Hobby
  // ISR write limits. Hub pages (trending, recent-filings, etc.) use 24h ISR
  // timers and will refresh on their own schedule.
  paths.push(`/stocks/${ticker}`);
  paths.push(`/filings/${filing.slug}`);

  // Revalidate all paths with debouncing
  const results = await Promise.allSettled(
    paths.map((path) => debouncedRevalidate(path))
  );

  // Log any failures (non-fatal)
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result.status === "rejected") {
      console.error(
        `Failed to revalidate ${paths[i]}:`,
        result.reason
      );
    }
  }
}

/**
 * Revalidate paths affected by a newly published blog post.
 *
 * Cascade:
 * - Blog index: /blog
 * - Blog post page: /blog/[slug]
 */
export async function onBlogPublished(post: BlogPost): Promise<void> {
  await Promise.allSettled([
    debouncedRevalidate("/blog"),
    debouncedRevalidate(`/blog/${post.slug}`),
  ]);
}

/**
 * Revalidate paths affected by a newly sent newsletter.
 *
 * Cascade:
 * - Newsletter archive: /archive
 */
export async function onNewsletterSent(
  _issue: NewsletterIssue
): Promise<void> {
  await debouncedRevalidate("/archive");
}

/**
 * Manually revalidate a list of paths. Used by the /api/revalidate endpoint.
 * Bypasses debouncing since this is an explicit manual trigger.
 */
export async function revalidatePaths(paths: string[]): Promise<void> {
  for (const path of paths) {
    revalidatePath(path);
  }
}
