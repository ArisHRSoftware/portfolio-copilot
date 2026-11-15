import { createClient } from "@supabase/supabase-js";
import { timingSafeEqual } from "crypto";
import type { Database } from "@/lib/types/database";

export const maxDuration = 60;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnySupabase = ReturnType<typeof createClient<any>>;

const EDGAR_USER_AGENT = "Brefyr admin@brefyr.com";

/**
 * Admin endpoint: aggregated monitoring metrics for the admin dashboard.
 *
 * Returns pipeline, filings, companies, content, users, and API stats
 * in a single JSON response. Designed to be polled every ~30s.
 *
 * Auth: requires x-admin-secret header.
 * Usage: GET /api/admin/stats
 */
export async function GET(request: Request): Promise<Response> {
  const adminSecret = process.env.ADMIN_SECRET;
  const providedSecret = request.headers.get("x-admin-secret") ?? "";
  if (
    !adminSecret ||
    !providedSecret ||
    Buffer.byteLength(providedSecret) !== Buffer.byteLength(adminSecret) ||
    !timingSafeEqual(Buffer.from(providedSecret), Buffer.from(adminSecret))
  ) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return Response.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseKey) as AnySupabase;

  const today = new Date().toISOString().split("T")[0];

  // Run all independent queries in parallel
  const [
    // pipeline
    lastRunResult,
    runsTodayResult,
    errorsTodayResult,
    // filings
    filingsTotal,
    filingsToday,
    filingsUnprocessed,
    edgarToday,
    // companies
    companiesTotal,
    companiesWithRealTicker,
    companiesWithMarketCap,
    companiesWithoutSector,
    // content
    contentPendingReview,
    blogPostsPublished,
    newslettersSent,
    // users
    profilesTotal,
    subscribersActive,
    apiKeysTotal,
    // api
    apiCallsToday,
  ] = await Promise.all([
    // --- pipeline ---
    supabase
      .from("pipeline_runs")
      .select("*")
      .order("started_at", { ascending: false })
      .limit(1),
    supabase
      .from("pipeline_runs")
      .select("id", { count: "exact", head: true })
      .gte("started_at", `${today}T00:00:00.000Z`),
    supabase
      .from("pipeline_runs")
      .select("errors_count")
      .gte("started_at", `${today}T00:00:00.000Z`),

    // --- filings ---
    supabase
      .from("filings")
      .select("id", { count: "exact", head: true }),
    supabase
      .from("filings")
      .select("id", { count: "exact", head: true })
      .eq("filed_date", today),
    supabase
      .from("filings")
      .select("id", { count: "exact", head: true })
      .is("processed_at", null),
    fetchEdgarTodayCount(today),

    // --- companies ---
    supabase
      .from("companies")
      .select("id", { count: "exact", head: true })
      .eq("status", "active"),
    supabase
      .from("companies")
      .select("id", { count: "exact", head: true })
      .eq("status", "active")
      .not("ticker", "ilike", "CIK%"),
    supabase
      .from("companies")
      .select("id", { count: "exact", head: true })
      .eq("status", "active")
      .gt("market_cap", 0),
    countCompaniesWithoutSector(supabase),

    // --- content ---
    supabase
      .from("content_queue")
      .select("id", { count: "exact", head: true })
      .eq("status", "pending_review"),
    supabase
      .from("blog_posts")
      .select("id", { count: "exact", head: true })
      .not("published_at", "is", null),
    supabase
      .from("newsletter_issues")
      .select("id", { count: "exact", head: true })
      .not("sent_at", "is", null),

    // --- users ---
    supabase
      .from("profiles")
      .select("id", { count: "exact", head: true }),
    supabase
      .from("newsletter_subscribers")
      .select("id", { count: "exact", head: true })
      .is("unsubscribed_at", null),
    supabase
      .from("api_keys")
      .select("id", { count: "exact", head: true }),

    // --- api ---
    supabase
      .from("api_keys")
      .select("calls_today"),
  ]);

  // Derive pipeline stats from last run
  const lastRun = lastRunResult.data?.[0] ?? null;
  const errorsTodayRows = errorsTodayResult.data ?? [];
  const totalErrorsToday = errorsTodayRows.reduce(
    (sum: number, row: { errors_count: number }) => sum + (row.errors_count ?? 0),
    0
  );

  // Sum api calls_today across all keys
  const apiCallsRows = apiCallsToday.data ?? [];
  const totalApiCallsToday = apiCallsRows.reduce(
    (sum: number, row: { calls_today: number }) => sum + (row.calls_today ?? 0),
    0
  );

  return Response.json({
    timestamp: new Date().toISOString(),
    pipeline: {
      last_run_at: lastRun?.started_at ?? null,
      last_run_status: lastRun?.status ?? null,
      last_run_filings: lastRun?.filings_processed ?? 0,
      last_run_errors: lastRun?.errors_count ?? 0,
      runs_today: runsTodayResult.count ?? 0,
      total_errors_today: totalErrorsToday,
    },
    filings: {
      total: filingsTotal.count ?? 0,
      today: filingsToday.count ?? 0,
      unprocessed: filingsUnprocessed.count ?? 0,
      edgar_today: edgarToday,
    },
    companies: {
      total: companiesTotal.count ?? 0,
      with_real_ticker: companiesWithRealTicker.count ?? 0,
      with_market_cap: companiesWithMarketCap.count ?? 0,
      without_sector: companiesWithoutSector,
    },
    content: {
      pending_review: contentPendingReview.count ?? 0,
      blog_posts_published: blogPostsPublished.count ?? 0,
      newsletters_sent: newslettersSent.count ?? 0,
    },
    users: {
      total: profilesTotal.count ?? 0,
      subscribers: subscribersActive.count ?? 0,
      api_keys_active: apiKeysTotal.count ?? 0,
    },
    api: {
      calls_today: totalApiCallsToday,
    },
  });
}

/**
 * Count companies where sector is empty string or null.
 * Supabase .or() handles both conditions in one query.
 */
async function countCompaniesWithoutSector(supabase: AnySupabase): Promise<number> {
  const { count } = await supabase
    .from("companies")
    .select("id", { count: "exact", head: true })
    .eq("status", "active")
    .or("sector.is.null,sector.eq.");
  return count ?? 0;
}

/**
 * Fetch today's EDGAR filing count from the SEC full-text search API.
 * Returns null if the request fails (non-critical metric).
 */
async function fetchEdgarTodayCount(today: string): Promise<number | null> {
  try {
    const url =
      `https://efts.sec.gov/LATEST/search-index?q=%22%22` +
      `&dateRange=custom&startdt=${today}&enddt=${today}` +
      `&forms=10-K,10-Q,8-K,4`;
    const res = await fetch(url, {
      headers: { "User-Agent": EDGAR_USER_AGENT },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data?.hits?.total?.value === "number"
      ? data.hits.total.value
      : typeof data?.hits?.total === "number"
        ? data.hits.total
        : null;
  } catch {
    return null;
  }
}
