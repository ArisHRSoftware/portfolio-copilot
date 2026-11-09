import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  getUserStocksWithCompanies,
  getUserAlertsWithFilings,
  getUserSubscription,
  getRecentFilings,
} from "@/lib/supabase/queries";
import { getTierInfo } from "@/lib/tier-gating";
import { TIERS } from "@/lib/constants/tiers";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Bell,
  TrendingUp,
  Plus,
  ChevronRight,
  AlertTriangle,
  Zap,
  BarChart3,
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Check if onboarding is completed — redirect new users to onboarding flow.
  // Only redirect if the column exists AND is explicitly false.
  // If the column is missing or profile doesn't exist, skip onboarding
  // (the column may not have been migrated yet).
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const profileRecord = profile as Record<string, unknown> | null;
  if (
    profileRecord &&
    "onboarding_completed" in profileRecord &&
    profileRecord.onboarding_completed === false
  ) {
    redirect("/onboarding");
  }

  const [trackedStocks, recentAlerts, subscription, tierInfo] =
    await Promise.all([
      getUserStocksWithCompanies(supabase, user.id),
      getUserAlertsWithFilings(supabase, user.id, 10),
      getUserSubscription(supabase, user.id),
      getTierInfo(supabase, user.id),
    ]);

  // Count filings from today across tracked companies
  const today = new Date().toISOString().split("T")[0];
  const trackedCompanyIds = trackedStocks.map((s) => s.company_id);

  let todayFilingsCount = 0;
  let highSignificanceCount = 0;

  if (trackedCompanyIds.length > 0) {
    const recentFilings = await getRecentFilings(supabase, {
      limit: 200,
    });

    const todayFilings = recentFilings.filter(
      (f) =>
        f.filed_date.startsWith(today) &&
        trackedCompanyIds.includes(f.company_id)
    );
    todayFilingsCount = todayFilings.length;
    highSignificanceCount = todayFilings.filter(
      (f) => f.significance_score >= 7
    ).length;
  }

  // Usage calculations
  const stocksUsed = trackedStocks.length;
  const stocksLimit = tierInfo.stocks;
  const alertRulesLimit = tierInfo.alertRules;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Your portfolio overview and latest filings.
        </p>
      </div>

      {/* Today's Briefing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="size-4 text-primary" />
            Today&apos;s Briefing
          </CardTitle>
          <CardDescription>
            Filing activity across your tracked stocks today
          </CardDescription>
        </CardHeader>
        <CardContent>
          {trackedCompanyIds.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Track stocks to see your daily briefing.
            </p>
          ) : todayFilingsCount === 0 ? (
            <p className="text-sm text-muted-foreground">
              No new filings today across your {trackedStocks.length} tracked
              stock{trackedStocks.length !== 1 ? "s" : ""}.
            </p>
          ) : (
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="size-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{todayFilingsCount}</p>
                  <p className="text-xs text-muted-foreground">
                    new filing{todayFilingsCount !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              {highSignificanceCount > 0 && (
                <div className="flex items-center gap-2">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                    <AlertTriangle className="size-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {highSignificanceCount}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      high significance
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tracked Stocks Grid */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            Tracked Stocks
          </h2>
          {stocksLimit === -1 || stocksUsed < stocksLimit ? (
            <Button variant="outline" size="sm" render={<Link href="/portfolio" />}>
              <Plus className="size-3.5" />
              Add Stock
            </Button>
          ) : (
            <Badge variant="secondary">
              {stocksUsed}/{stocksLimit} limit reached
            </Badge>
          )}
        </div>

        {trackedStocks.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <TrendingUp className="mx-auto mb-3 size-8 text-muted-foreground" />
              <p className="text-sm font-medium">No stocks tracked yet</p>
              <p className="mb-4 text-sm text-muted-foreground">
                Add stocks to your portfolio to get filing alerts and analysis.
              </p>
              <Button render={<Link href="/portfolio" />}>
                <Plus className="size-3.5" />
                Add Your First Stock
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trackedStocks.map((stock) => (
              <Card key={stock.id} size="sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>
                        {stock.company?.ticker ?? "N/A"}
                      </CardTitle>
                      <CardDescription className="line-clamp-1">
                        {stock.company?.name ?? "Unknown company"}
                      </CardDescription>
                    </div>
                    {stock.company?.sector && (
                      <Badge variant="secondary" className="shrink-0 text-[10px]">
                        {stock.company.sector}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Last filing</span>
                    <span>
                      {stock.company?.last_filing_date
                        ? new Date(
                            stock.company.last_filing_date
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "None"}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto"
                    render={
                      <Link
                        href={`/stocks/${stock.company?.ticker?.toLowerCase() ?? ""}`}
                      />
                    }
                  >
                    View Filings
                    <ChevronRight className="size-3.5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Recent Alerts Timeline */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            Recent Alerts
          </h2>
          {recentAlerts.length > 0 && (
            <Button variant="ghost" size="sm" render={<Link href="/settings" />}>
              Manage Alerts
              <ChevronRight className="size-3.5" />
            </Button>
          )}
        </div>

        {recentAlerts.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <Bell className="mx-auto mb-3 size-8 text-muted-foreground" />
              <p className="text-sm font-medium">No alerts yet</p>
              <p className="text-sm text-muted-foreground">
                {tierInfo.alertRules === 0
                  ? "Upgrade your plan to set up custom alert rules."
                  : "Alerts will appear here when new filings match your rules."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="divide-y">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FileText className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {alert.company?.ticker ?? "N/A"}
                      </span>
                      {alert.filing?.filing_type && (
                        <Badge variant="outline" className="text-[10px]">
                          {alert.filing.filing_type}
                        </Badge>
                      )}
                      {alert.filing && alert.filing.significance_score >= 7 && (
                        <Badge variant="destructive" className="text-[10px]">
                          High
                        </Badge>
                      )}
                    </div>
                    <p className="line-clamp-1 text-xs text-muted-foreground">
                      {alert.filing?.one_line_summary ??
                        `${alert.filing?.filing_type ?? "Filing"} filed on ${
                          alert.filing?.filed_date ?? "unknown date"
                        }`}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground/70">
                      {new Date(alert.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  {alert.filing?.slug && (
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      render={<Link href={`/filings/${alert.filing.slug}`} />}
                    >
                      <ChevronRight className="size-3.5" />
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </section>

      {/* Plan Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="size-4 text-primary" />
            Plan Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Plan</span>
                <Badge variant="secondary">
                  {TIERS[tierInfo.tier].name}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {tierInfo.digest === "daily" ? "Daily digest" : "Weekly digest"}
              </p>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Tracked Stocks
                </span>
                <span className="text-sm font-medium">
                  {stocksUsed}
                  {stocksLimit === -1 ? "" : ` / ${stocksLimit}`}
                </span>
              </div>
              {stocksLimit !== -1 && (
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{
                      width: `${Math.min(
                        100,
                        (stocksUsed / stocksLimit) * 100
                      )}%`,
                    }}
                  />
                </div>
              )}
              {stocksLimit === -1 && (
                <p className="text-xs text-muted-foreground">Unlimited</p>
              )}
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Alert Rules
                </span>
                <span className="text-sm font-medium">
                  {alertRulesLimit === -1
                    ? "Unlimited"
                    : alertRulesLimit === 0
                      ? "Not available"
                      : `${alertRulesLimit} max`}
                </span>
              </div>
              {alertRulesLimit === 0 && (
                <p className="text-xs text-muted-foreground">
                  Upgrade to Starter or above
                </p>
              )}
            </div>
          </div>
        </CardContent>
        {tierInfo.tier === "free" && (
          <CardFooter>
            <div className="flex w-full items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Unlock more stocks and real-time alerts
              </span>
              <Button
                variant="outline"
                size="sm"
                render={<Link href="/pricing" />}
              >
                <Zap className="size-3.5" />
                Upgrade
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
