import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getPipelineRuns } from "@/lib/supabase/queries";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { AutoRefresh } from "@/components/auto-refresh";
import {
  Activity,
  Building2,
  FileText,
  Users,
  Zap,
  Clock,
  ExternalLink,
  Inbox,
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "System Monitor",
};

type StatusLevel = "green" | "yellow" | "red";

function statusColor(level: StatusLevel) {
  return level === "green"
    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600"
    : level === "yellow"
      ? "bg-amber-500/10 border-amber-500/30 text-amber-600"
      : "bg-red-500/10 border-red-500/30 text-red-600";
}

function statusDot(level: StatusLevel) {
  return level === "green"
    ? "bg-emerald-500"
    : level === "yellow"
      ? "bg-amber-500"
      : "bg-red-500";
}

function formatNum(n: number) {
  return n.toLocaleString("en-US");
}

async function fetchEdgarTodayCount(): Promise<number | null> {
  try {
    const today = new Date().toISOString().split("T")[0];
    const url = `https://efts.sec.gov/LATEST/search-index?q=%22&dateRange=custom&startdt=${today}&enddt=${today}`;
    const res = await fetch(url, {
      next: { revalidate: 0 },
      headers: { "User-Agent": "Brefyr/1.0 admin-monitor" },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.hits?.total ?? null;
  } catch {
    return null;
  }
}

export default async function MonitorPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  if (!process.env.ADMIN_EMAIL || user.email !== process.env.ADMIN_EMAIL) {
    redirect("/dashboard");
  }

  // ── Parallel data fetching ──────────────────────────────────────
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayISO = todayStart.toISOString();

  const [
    pipelineRuns,
    { count: totalFilings },
    { count: todayFilings },
    { count: unprocessedFilings },
    { count: totalCompanies },
    { count: realTickerCompanies },
    { count: companiesWithMarketCap },
    { count: companiesWithoutSector },
    { count: pendingReviewCount },
    { count: blogPostCount },
    { count: newslettersSentCount },
    { count: totalUsers },
    { count: newsletterSubscribers },
    { count: activeApiKeys },
    { count: apiCallsToday },
    edgarTodayCount,
  ] = await Promise.all([
    // Pipeline runs (last 5 for recency check)
    getPipelineRuns(supabase, 5),

    // Filing counts
    supabase
      .from("filings")
      .select("id", { count: "exact", head: true }),
    supabase
      .from("filings")
      .select("id", { count: "exact", head: true })
      .gte("filed_date", todayISO.split("T")[0]),
    supabase
      .from("filings")
      .select("id", { count: "exact", head: true })
      .is("ai_enhanced_at", null),

    // Company counts
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
      .not("market_cap", "is", null),
    supabase
      .from("companies")
      .select("id", { count: "exact", head: true })
      .eq("status", "active")
      .or("sector.is.null,sector.eq.Unknown"),

    // Content queue
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

    // Users & subscribers
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

    // API calls today (sum of calls_today across all keys)
    supabase
      .from("api_keys")
      .select("calls_today", { count: "exact", head: true })
      .gt("calls_today", 0),

    // EDGAR external count
    fetchEdgarTodayCount(),
  ]);

  // ── Compute API calls today (sum, not count) ───────────────────
  const { data: apiKeyRows } = await supabase
    .from("api_keys")
    .select("calls_today")
    .gt("calls_today", 0);
  const totalApiCallsToday = (apiKeyRows ?? []).reduce(
    (sum, row) => sum + ((row as { calls_today: number }).calls_today ?? 0),
    0
  );

  // ── Derive statuses ─────────────────────────────────────────────
  const lastRun = pipelineRuns.length > 0 ? pipelineRuns[0] : null;
  const lastRunTime = lastRun ? new Date(lastRun.started_at) : null;
  const hoursSinceRun = lastRunTime
    ? (Date.now() - lastRunTime.getTime()) / (1000 * 60 * 60)
    : Infinity;
  const recentErrors = pipelineRuns.reduce((sum, r) => sum + r.errors_count, 0);

  const pipelineStatus: StatusLevel =
    hoursSinceRun > 6 || recentErrors > 0
      ? "red"
      : hoursSinceRun > 2
        ? "yellow"
        : "green";

  const unproc = unprocessedFilings ?? 0;
  const filingStatus: StatusLevel =
    unproc > 200 ? "red" : unproc > 50 ? "yellow" : "green";

  const noSector = companiesWithoutSector ?? 0;
  const companyStatus: StatusLevel = noSector >= 100 ? "red" : noSector >= 50 ? "yellow" : "green";

  const pending = pendingReviewCount ?? 0;
  const contentStatus: StatusLevel =
    pending > 3 ? "red" : pending > 0 ? "yellow" : "green";

  const apiCalls = totalApiCallsToday;
  const apiStatus: StatusLevel =
    apiCalls >= 950 ? "red" : apiCalls >= 800 ? "yellow" : "green";

  const now = new Date().toISOString();

  return (
    <main className="flex-1 px-4 py-6 max-w-[1920px] mx-auto w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold tracking-tight">System Monitor</h1>
          <p className="text-sm text-muted-foreground">
            Live dashboard — auto-refreshes every 30 seconds.
          </p>
        </div>
        <AutoRefresh interval={30000} />
      </div>

      {/* Row 1 — Pipeline Health */}
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {/* Pipeline Status */}
        <Card
          size="sm"
          className={`border ${statusColor(pipelineStatus)}`}
        >
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Activity className="size-3.5" />
                Pipeline Status
              </span>
              <span
                className={`size-2 rounded-full ${statusDot(pipelineStatus)}`}
              />
            </CardDescription>
            <CardTitle className="text-lg">
              {lastRunTime
                ? lastRunTime.toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "No runs"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <span>
                <span className="text-muted-foreground">Last run: </span>
                {hoursSinceRun === Infinity
                  ? "Never"
                  : `${hoursSinceRun.toFixed(1)}h ago`}
              </span>
              <span>
                <span className="text-muted-foreground">Processed: </span>
                {lastRun ? formatNum(lastRun.filings_processed) : "0"}
              </span>
              <span>
                <span className="text-muted-foreground">Errors: </span>
                {recentErrors}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Filing Coverage */}
        <Card
          size="sm"
          className={`border ${statusColor(filingStatus)}`}
        >
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <FileText className="size-3.5" />
                Filing Coverage
              </span>
              <span
                className={`size-2 rounded-full ${statusDot(filingStatus)}`}
              />
            </CardDescription>
            <CardTitle className="text-lg">
              {formatNum(totalFilings ?? 0)} filings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <span>
                <span className="text-muted-foreground">Today: </span>
                {formatNum(todayFilings ?? 0)}
              </span>
              <span>
                <span className="text-muted-foreground">Unprocessed: </span>
                {formatNum(unproc)}
              </span>
              <span>
                <span className="text-muted-foreground">EDGAR today: </span>
                {edgarTodayCount !== null ? formatNum(edgarTodayCount) : "N/A"}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Company Coverage */}
        <Card
          size="sm"
          className={`border ${statusColor(companyStatus)}`}
        >
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Building2 className="size-3.5" />
                Company Coverage
              </span>
              <span
                className={`size-2 rounded-full ${statusDot(companyStatus)}`}
              />
            </CardDescription>
            <CardTitle className="text-lg">
              {formatNum(totalCompanies ?? 0)} companies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <span>
                <span className="text-muted-foreground">Real tickers: </span>
                {formatNum(realTickerCompanies ?? 0)}
              </span>
              <span>
                <span className="text-muted-foreground">With market cap: </span>
                {formatNum(companiesWithMarketCap ?? 0)}
              </span>
              <span>
                <span className="text-muted-foreground">No sector: </span>
                {formatNum(noSector)}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Content Queue */}
        <Card
          size="sm"
          className={`border ${statusColor(contentStatus)}`}
        >
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Inbox className="size-3.5" />
                Content Queue
              </span>
              <span
                className={`size-2 rounded-full ${statusDot(contentStatus)}`}
              />
            </CardDescription>
            <CardTitle className="text-lg">
              {pending === 0 ? "Clear" : `${pending} pending`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <span>
                <span className="text-muted-foreground">Pending review: </span>
                {pending}
              </span>
              <span>
                <span className="text-muted-foreground">Blog posts: </span>
                {formatNum(blogPostCount ?? 0)}
              </span>
              <span>
                <span className="text-muted-foreground">Newsletters: </span>
                {formatNum(newslettersSentCount ?? 0)}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 2 — System Health */}
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {/* Users & Subscribers */}
        <Card size="sm">
          <CardHeader>
            <CardDescription className="flex items-center gap-1.5">
              <Users className="size-3.5" />
              Users &amp; Subscribers
            </CardDescription>
            <CardTitle className="text-lg">
              {formatNum(totalUsers ?? 0)} users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <span>
                <span className="text-muted-foreground">Newsletter: </span>
                {formatNum(newsletterSubscribers ?? 0)}
              </span>
              <span>
                <span className="text-muted-foreground">API keys: </span>
                {formatNum(activeApiKeys ?? 0)}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* API Usage */}
        <Card
          size="sm"
          className={`border ${statusColor(apiStatus)}`}
        >
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Zap className="size-3.5" />
                API Usage
              </span>
              <span
                className={`size-2 rounded-full ${statusDot(apiStatus)}`}
              />
            </CardDescription>
            <CardTitle className="text-lg">
              {formatNum(apiCalls)} calls today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs">
              <div className="mb-1.5 h-1.5 w-full rounded-full bg-muted">
                <div
                  className={`h-1.5 rounded-full transition-all ${
                    apiStatus === "green"
                      ? "bg-emerald-500"
                      : apiStatus === "yellow"
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                  style={{ width: `${Math.min((apiCalls / 1000) * 100, 100)}%` }}
                />
              </div>
              <span className="text-muted-foreground">
                {formatNum(apiCalls)} / 1,000 daily limit
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Last Refresh */}
        <Card size="sm">
          <CardHeader>
            <CardDescription className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              Last Refresh
            </CardDescription>
            <CardTitle className="text-lg">
              {new Date(now).toLocaleString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              {now}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card size="sm">
          <CardHeader>
            <CardDescription className="flex items-center gap-1.5">
              <ExternalLink className="size-3.5" />
              Quick Actions
            </CardDescription>
            <CardTitle className="text-lg">Admin Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <a
                href="/admin/pipeline"
                className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium hover:bg-muted/80 transition-colors"
              >
                Pipeline
              </a>
              <a
                href="/admin/content"
                className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium hover:bg-muted/80 transition-colors"
              >
                Content
              </a>
              <a
                href="/api/admin/pipeline/run"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium hover:bg-muted/80 transition-colors"
              >
                Trigger Run
                <ExternalLink className="size-3" />
              </a>
              <a
                href="/api/admin/pipeline/backfill"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium hover:bg-muted/80 transition-colors"
              >
                Backfill
                <ExternalLink className="size-3" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
