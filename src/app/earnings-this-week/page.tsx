import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import {
  getRecentFilings,
  getFilingsWithCompanies,
  type FilingWithCompany,
} from "@/lib/supabase/queries";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Earnings This Week — Small-Cap Earnings Calendar",
  description:
    "See which small-cap stocks are reporting earnings this week. AI-powered analysis of earnings-related SEC filings with significance scores.",
  openGraph: {
    title: "Earnings This Week — Small-Cap Earnings Calendar | Portfolio Copilot",
    description:
      "Small-cap earnings calendar with AI-powered filing analysis.",
  },
};

function significanceBadge(score: number) {
  if (score >= 8)
    return <Badge variant="destructive">Critical ({score}/10)</Badge>;
  if (score >= 5)
    return <Badge variant="default">Notable ({score}/10)</Badge>;
  return <Badge variant="secondary">Routine ({score}/10)</Badge>;
}

function getWeekDates(): { start: Date; end: Date; days: Date[] } {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const start = new Date(now);
  start.setDate(now.getDate() - dayOfWeek + 1); // Monday
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(start.getDate() + 4); // Friday
  end.setHours(23, 59, 59, 999);

  const days: Date[] = [];
  for (let i = 0; i < 5; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }

  return { start, end, days };
}

function formatDateISO(d: Date): string {
  return d.toISOString().split("T")[0];
}

export default async function EarningsThisWeekPage() {
  const supabase = createStaticClient();
  const { start, end, days } = getWeekDates();

  const allFilings = await getRecentFilings(supabase, {
    hasEarnings: true,
    limit: 100,
  });

  // Filter to this week's date range
  const startISO = formatDateISO(start);
  const endISO = formatDateISO(end);
  const weekFilings = allFilings.filter((f) => {
    const d = f.filed_date.split("T")[0];
    return d >= startISO && d <= endISO;
  });

  const filingsWithCompanies = await getFilingsWithCompanies(supabase, weekFilings);

  const filingsByDay = new Map<string, FilingWithCompany[]>();
  for (const day of days) {
    filingsByDay.set(formatDateISO(day), []);
  }
  for (const filing of filingsWithCompanies) {
    const dateKey = filing.filed_date.split("T")[0];
    const existing = filingsByDay.get(dateKey);
    if (existing) {
      existing.push(filing);
    }
  }

  const weekLabel = `${start.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  })} — ${end.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;

  return (
    <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Earnings This Week
        </h1>
        <p className="text-muted-foreground">{weekLabel}</p>
      </div>

      {/* Vertical Day Stack */}
      <div className="space-y-6">
        {days.map((day) => {
          const dateKey = formatDateISO(day);
          const dayFilings = filingsByDay.get(dateKey) ?? [];
          const dayLabel = day.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          });
          const isToday = formatDateISO(day) === formatDateISO(new Date());

          return (
            <div key={dateKey} className="space-y-3">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold">{dayLabel}</h2>
                {isToday && <Badge variant="default">Today</Badge>}
                <Badge variant="secondary">
                  {dayFilings.length} report{dayFilings.length !== 1 ? "s" : ""}
                </Badge>
              </div>

              {dayFilings.length === 0 ? (
                <Card>
                  <CardContent className="py-6 text-center text-sm text-muted-foreground">
                    No earnings filings expected for this day.
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  {dayFilings.map((filing) => {
                    const company = filing.company;

                    return (
                      <Card key={filing.id} size="sm">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between gap-2">
                            <Link
                              href={`/stocks/${(company?.ticker ?? "").toLowerCase()}`}
                              className="hover:underline"
                            >
                              <span className="font-mono">
                                {company?.ticker}
                              </span>{" "}
                              — {company?.name}
                            </Link>
                            {significanceBadge(filing.significance_score)}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {filing.one_line_summary ??
                              "Earnings filing detected. AI summary pending."}
                          </p>
                          <div className="mt-3">
                            <Button
                              variant="ghost"
                              size="sm"
                              render={
                                <Link href={`/filings/${filing.slug}`} />
                              }
                            >
                              View Filing
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 pt-4">
        <Button variant="outline" render={<Link href="/recent-filings" />}>
          All Recent Filings
        </Button>
        <Button variant="outline" render={<Link href="/trending" />}>
          Trending Stocks
        </Button>
      </div>
    </main>
  );
}
