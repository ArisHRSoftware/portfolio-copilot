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
  AlertTriangle,
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

function statusBorder(level: StatusLevel) {
  return level === "green"
    ? "border-emerald-500/40"
    : level === "yellow"
      ? "border-amber-500/40"
      : "border-red-500/40";
}

function statusBg(level: StatusLevel) {
  return level === "green"
    ? "bg-emerald-500/10"
    : level === "yellow"
      ? "bg-amber-500/10"
      : "bg-red-500/10";
}

function dot(level: StatusLevel) {
  return level === "green"
    ? "bg-emerald-500"
    : level === "yellow"
      ? "bg-amber-500"
      : "bg-red-500";
}

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

async function fetchEdgarTodayCount(): Promise<number | null> {
  try {
    const today = new Date().toISOString().split("T")[0];
    const res = await fetch(
      `https://efts.sec.gov/LATEST/search-index?q=%22&dateRange=custom&startdt=${today}&enddt=${today}`,
      {
        next: { revalidate: 0 },
        headers: { "User-Agent": "Brefyr/1.0 admin-monitor" },
        signal: AbortSignal.timeout(5000),
      }
    );
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

  if (!user) redirect("/auth/login");
  if (!process.env.ADMIN_EMAIL || user.email !== process.env.ADMIN_EMAIL) redirect("/dashboard");

  const todayDate = new Date().toISOString().split("T")[0];

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
    edgarTodayCount,
  ] = await Promise.all([
    getPipelineRuns(supabase, 10),
    supabase.from("filings").select("id", { count: "exact", head: true }),
    supabase.from("filings").select("id", { count: "exact", head: true }).gte("filed_date", todayDate),
    supabase.from("filings").select("id", { count: "exact", head: true }).is("ai_enhanced_at", null),
    supabase.from("companies").select("id", { count: "exact", head: true }).eq("status", "active"),
    supabase.from("companies").select("id", { count: "exact", head: true }).eq("status", "active").not("ticker", "ilike", "CIK%"),
    supabase.from("companies").select("id", { count: "exact", head: true }).eq("status", "active").gt("market_cap", 0),
    supabase.from("companies").select("id", { count: "exact", head: true }).eq("status", "active").or("sector.is.null,sector.eq."),
    supabase.from("content_queue").select("id", { count: "exact", head: true }).eq("status", "pending_review"),
    supabase.from("blog_posts").select("id", { count: "exact", head: true }).not("published_at", "is", null),
    supabase.from("newsletter_issues").select("id", { count: "exact", head: true }).not("sent_at", "is", null),
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("newsletter_subscribers").select("id", { count: "exact", head: true }).is("unsubscribed_at", null),
    supabase.from("api_keys").select("id", { count: "exact", head: true }),
    fetchEdgarTodayCount(),
  ]);

  // API calls sum
  const { data: apiKeyRows } = await supabase.from("api_keys").select("calls_today").gt("calls_today", 0);
  const apiCalls = (apiKeyRows ?? []).reduce((s, r) => s + ((r as { calls_today: number }).calls_today ?? 0), 0);

  // ── Derived metrics ─────────────────────────────────────────────
  const lastRun = pipelineRuns.length > 0 ? pipelineRuns[0] : null;
  const lastRunTime = lastRun ? new Date(lastRun.started_at) : null;
  const minsSinceRun = lastRunTime ? (Date.now() - lastRunTime.getTime()) / 60000 : Infinity;
  const hoursSinceRun = minsSinceRun / 60;

  // Errors in last 10 runs
  const recentErrors = pipelineRuns.reduce((s, r) => s + r.errors_count, 0);
  const recentFailed = pipelineRuns.filter((r) => r.status === "failed").length;
  const recentProcessed = pipelineRuns.reduce((s, r) => s + r.filings_processed, 0);

  // Backlog: EDGAR filings today minus what we've ingested today
  const edgarToday = edgarTodayCount ?? 0;
  const ourToday = todayFilings ?? 0;
  const backlog = Math.max(0, edgarToday - ourToday);

  const unproc = unprocessedFilings ?? 0;
  const pending = pendingReviewCount ?? 0;
  const noSector = companiesWithoutSector ?? 0;

  // ── Status levels ───────────────────────────────────────────────
  const pipelineStatus: StatusLevel =
    recentFailed >= 3 || hoursSinceRun > 6 ? "red"
    : recentErrors > 0 || hoursSinceRun > 2 ? "yellow"
    : "green";

  const backlogStatus: StatusLevel =
    backlog > 50 || unproc > 200 ? "red"
    : backlog > 10 || unproc > 50 ? "yellow"
    : "green";

  const companyStatus: StatusLevel =
    noSector >= 100 ? "yellow" : "green";

  const contentStatus: StatusLevel =
    pending > 5 ? "red" : pending > 0 ? "yellow" : "green";

  const apiStatus: StatusLevel =
    apiCalls >= 950 ? "red" : apiCalls >= 800 ? "yellow" : "green";

  // ── Attention items ─────────────────────────────────────────────
  const attentionItems: string[] = [];
  if (pending > 0) attentionItems.push(`${pending} content items need your approval`);
  if (recentFailed >= 3) attentionItems.push(`Pipeline failing — ${recentFailed} of last 10 runs failed`);
  if (backlog > 10) attentionItems.push(`${fmt(backlog)} EDGAR filings not yet ingested`);
  if (hoursSinceRun > 6) attentionItems.push(`Pipeline stale — last ran ${hoursSinceRun.toFixed(1)}h ago`);
  if (apiCalls >= 950) attentionItems.push(`API approaching daily limit: ${fmt(apiCalls)}/1,000`);

  const overallStatus: StatusLevel =
    attentionItems.length === 0 ? "green"
    : attentionItems.some((a) => a.includes("failing") || a.includes("limit")) ? "red"
    : "yellow";

  const now = new Date().toISOString();

  return (
    <main className="flex-1 px-4 py-6 max-w-[1920px] mx-auto w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold tracking-tight">System Monitor</h1>
          <p className="text-sm text-muted-foreground">Auto-refreshes every 30s</p>
        </div>
        <AutoRefresh interval={30000} />
      </div>

      {/* Attention Banner */}
      {attentionItems.length > 0 ? (
        <div className={`rounded-lg border px-4 py-3 ${statusBorder(overallStatus)} ${statusBg(overallStatus)}`}>
          <div className="flex items-start gap-2">
            <AlertTriangle className="size-4 mt-0.5 shrink-0" />
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Needs your attention</p>
              {attentionItems.map((item, i) => (
                <p key={i} className="text-xs">{item}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3">
          <p className="text-sm font-medium text-emerald-600 flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />
            All systems healthy — nothing needs your attention
          </p>
        </div>
      )}

      {/* Row 1 — Pipeline & Filings */}
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {/* Pipeline Status */}
        <Card size="sm" className={`border ${statusBorder(pipelineStatus)} ${statusBg(pipelineStatus)}`}>
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Activity className="size-3.5" /> Pipeline</span>
              <span className={`size-2 rounded-full ${dot(pipelineStatus)}`} />
            </CardDescription>
            <CardTitle className="text-lg">
              {lastRunTime
                ? lastRunTime.toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
                : "No runs"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-y-1 text-xs">
              <span className="text-muted-foreground">Last run</span>
              <span className="text-right">{minsSinceRun === Infinity ? "Never" : `${Math.round(minsSinceRun)}m ago`}</span>
              <span className="text-muted-foreground">Last 10 runs</span>
              <span className="text-right">{fmt(recentProcessed)} processed, {recentErrors} errors</span>
              <span className="text-muted-foreground">Failed runs</span>
              <span className={`text-right ${recentFailed > 0 ? "text-red-500 font-medium" : ""}`}>{recentFailed} / 10</span>
            </div>
          </CardContent>
        </Card>

        {/* Filing Backlog */}
        <Card size="sm" className={`border ${statusBorder(backlogStatus)} ${statusBg(backlogStatus)}`}>
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><FileText className="size-3.5" /> Filing Backlog</span>
              <span className={`size-2 rounded-full ${dot(backlogStatus)}`} />
            </CardDescription>
            <CardTitle className="text-lg">
              {backlog === 0 ? "Caught up" : `${fmt(backlog)} behind`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-y-1 text-xs">
              <span className="text-muted-foreground">EDGAR today</span>
              <span className="text-right">{edgarTodayCount !== null ? fmt(edgarTodayCount) : "N/A"}</span>
              <span className="text-muted-foreground">We ingested today</span>
              <span className="text-right">{fmt(ourToday)}</span>
              <span className="text-muted-foreground">Backlog</span>
              <span className={`text-right font-medium ${backlog > 10 ? "text-amber-500" : ""} ${backlog > 50 ? "text-red-500" : ""}`}>{fmt(backlog)}</span>
              <span className="text-muted-foreground">Awaiting AI analysis</span>
              <span className="text-right">{fmt(unproc)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Total Filings */}
        <Card size="sm">
          <CardHeader>
            <CardDescription className="flex items-center gap-1.5"><FileText className="size-3.5" /> Total Filings</CardDescription>
            <CardTitle className="text-lg">{fmt(totalFilings ?? 0)}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-y-1 text-xs">
              <span className="text-muted-foreground">Today</span>
              <span className="text-right">{fmt(ourToday)}</span>
              <span className="text-muted-foreground">Awaiting AI</span>
              <span className="text-right">{fmt(unproc)}</span>
              <span className="text-muted-foreground">AI enhanced</span>
              <span className="text-right">{fmt((totalFilings ?? 0) - unproc)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Content Queue */}
        <Card size="sm" className={`border ${statusBorder(contentStatus)} ${statusBg(contentStatus)}`}>
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Inbox className="size-3.5" /> Content Queue</span>
              <span className={`size-2 rounded-full ${dot(contentStatus)}`} />
            </CardDescription>
            <CardTitle className="text-lg">
              {pending === 0 ? "All clear" : `${pending} need approval`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-y-1 text-xs">
              <span className="text-muted-foreground">Pending review</span>
              <span className={`text-right ${pending > 0 ? "text-amber-500 font-medium" : ""}`}>{pending}</span>
              <span className="text-muted-foreground">Blog posts</span>
              <span className="text-right">{fmt(blogPostCount ?? 0)}</span>
              <span className="text-muted-foreground">Newsletters sent</span>
              <span className="text-right">{fmt(newslettersSentCount ?? 0)}</span>
            </div>
            {pending > 0 && (
              <a href="/admin/content" className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                Review now <ExternalLink className="size-3" />
              </a>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Row 2 — Companies, Users, API, Refresh */}
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {/* Company Coverage */}
        <Card size="sm" className={`border ${statusBorder(companyStatus)} ${statusBg(companyStatus)}`}>
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Building2 className="size-3.5" /> Companies</span>
              <span className={`size-2 rounded-full ${dot(companyStatus)}`} />
            </CardDescription>
            <CardTitle className="text-lg">{fmt(realTickerCompanies ?? 0)} real tickers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-y-1 text-xs">
              <span className="text-muted-foreground">Total (incl. CIK)</span>
              <span className="text-right">{fmt(totalCompanies ?? 0)}</span>
              <span className="text-muted-foreground">With market cap</span>
              <span className="text-right">{fmt(companiesWithMarketCap ?? 0)}</span>
              <span className="text-muted-foreground">Missing sector</span>
              <span className={`text-right ${noSector >= 100 ? "text-amber-500 font-medium" : ""}`}>{fmt(noSector)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Users & Subscribers */}
        <Card size="sm">
          <CardHeader>
            <CardDescription className="flex items-center gap-1.5"><Users className="size-3.5" /> Users</CardDescription>
            <CardTitle className="text-lg">{fmt(totalUsers ?? 0)} users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-y-1 text-xs">
              <span className="text-muted-foreground">Newsletter subs</span>
              <span className="text-right">{fmt(newsletterSubscribers ?? 0)}</span>
              <span className="text-muted-foreground">API keys</span>
              <span className="text-right">{fmt(activeApiKeys ?? 0)}</span>
            </div>
          </CardContent>
        </Card>

        {/* API Usage */}
        <Card size="sm" className={`border ${statusBorder(apiStatus)} ${statusBg(apiStatus)}`}>
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Zap className="size-3.5" /> API Usage</span>
              <span className={`size-2 rounded-full ${dot(apiStatus)}`} />
            </CardDescription>
            <CardTitle className="text-lg">{fmt(apiCalls)} / 1,000</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-2 w-full rounded-full bg-muted">
              <div
                className={`h-2 rounded-full transition-all ${apiStatus === "green" ? "bg-emerald-500" : apiStatus === "yellow" ? "bg-amber-500" : "bg-red-500"}`}
                style={{ width: `${Math.min((apiCalls / 1000) * 100, 100)}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions + Last Refresh */}
        <Card size="sm">
          <CardHeader>
            <CardDescription className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> Quick Actions</span>
              <span className="text-[10px] text-muted-foreground">{new Date(now).toLocaleTimeString()}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: "Pipeline", href: "/admin/pipeline" },
                { label: "Content", href: "/admin/content" },
                { label: "EDGAR", href: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&type=&dateb=&owner=include&count=40", external: true },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium hover:bg-muted/80 transition-colors"
                >
                  {l.label}
                  {l.external && <ExternalLink className="size-2.5" />}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
