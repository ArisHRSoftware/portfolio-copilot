import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database";

type Tables = Database["public"]["Tables"];

// Helper types for common query results
export type Company = Tables["companies"]["Row"];
export type Filing = Tables["filings"]["Row"];
export type FilingWithCompany = Filing & { company: Company | null };
export type BlogPost = Tables["blog_posts"]["Row"];
export type NewsletterIssue = Tables["newsletter_issues"]["Row"];
export type PageView = Tables["page_views"]["Row"];
export type Subscription = Tables["subscriptions"]["Row"];
export type Profile = Tables["profiles"]["Row"];
export type ContentQueueItem = Tables["content_queue"]["Row"];
export type PipelineRun = Tables["pipeline_runs"]["Row"];
export type Alert = Tables["alerts"]["Row"];

type Supabase = SupabaseClient<Database>;

// Typed query helpers that avoid the select() type inference issue
export async function getCompanyByTicker(supabase: Supabase, ticker: string) {
  const { data } = await supabase
    .from("companies")
    .select("*")
    .eq("ticker", ticker.toUpperCase())
    .single();
  return data as Company | null;
}

export async function getTopCompanies(supabase: Supabase, limit = 100) {
  const { data } = await supabase
    .from("companies")
    .select("*")
    .eq("status", "active")
    .order("last_filing_date", { ascending: false })
    .limit(limit);
  return (data ?? []) as Company[];
}

export async function getFilingBySlug(supabase: Supabase, slug: string) {
  const { data: filing } = await supabase
    .from("filings")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!filing) return null;

  const { data: company } = await supabase
    .from("companies")
    .select("*")
    .eq("id", (filing as Filing).company_id)
    .single();

  return { ...(filing as Filing), company: company as Company | null };
}

export async function getRecentFilings(
  supabase: Supabase,
  options: {
    limit?: number;
    filingType?: string;
    minSignificance?: number;
    hasEarnings?: boolean;
    hasInsiderData?: boolean;
    companyId?: string;
  } = {}
) {
  let query = supabase
    .from("filings")
    .select("*")
    .is("superseded_by", null)
    .order("filed_date", { ascending: false })
    .limit(options.limit ?? 50);

  if (options.filingType) {
    query = query.eq("filing_type", options.filingType);
  }
  if (options.minSignificance) {
    query = query.gte("significance_score", options.minSignificance);
  }
  if (options.hasEarnings) {
    query = query.eq("has_earnings_data", true);
  }
  if (options.companyId) {
    query = query.eq("company_id", options.companyId);
  }

  const { data } = await query;
  return (data ?? []) as Filing[];
}

export async function getFilingsWithCompanies(
  supabase: Supabase,
  filings: Filing[]
): Promise<FilingWithCompany[]> {
  if (filings.length === 0) return [];

  const companyIds = [...new Set(filings.map((f) => f.company_id))];
  const { data: companies } = await supabase
    .from("companies")
    .select("*")
    .in("id", companyIds);

  const companyMap = new Map(
    ((companies ?? []) as Company[]).map((c) => [c.id, c])
  );

  return filings.map((f) => ({
    ...f,
    company: companyMap.get(f.company_id) ?? null,
  }));
}

export async function getCompaniesBySector(supabase: Supabase, sector: string) {
  const results: Company[] = [];
  let offset = 0;
  const PAGE = 1000;
  while (true) {
    const { data } = await supabase
      .from("companies")
      .select("*")
      .eq("sector", sector)
      .eq("status", "active")
      .order("last_filing_date", { ascending: false })
      .range(offset, offset + PAGE - 1);
    const batch = (data ?? []) as Company[];
    results.push(...batch);
    if (batch.length < PAGE) break;
    offset += PAGE;
  }
  return results;
}

export async function getTrendingStocks(supabase: Supabase, days = 7, limit = 10) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const { data } = await supabase
    .from("page_views")
    .select("*")
    .gte("date", startDate.toISOString().split("T")[0])
    .order("count", { ascending: false })
    .limit(limit);

  return (data ?? []) as PageView[];
}

export async function getPublishedBlogPosts(supabase: Supabase) {
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .not("published_at", "is", null)
    .order("published_at", { ascending: false });
  return (data ?? []) as BlogPost[];
}

export async function getNewsletterIssues(supabase: Supabase) {
  const { data } = await supabase
    .from("newsletter_issues")
    .select("*")
    .not("sent_at", "is", null)
    .order("sent_at", { ascending: false });
  return (data ?? []) as NewsletterIssue[];
}

// ─── Dashboard / Portfolio queries ───────────────────────────────

export type UserStock = Tables["user_stocks"]["Row"];
export type AlertRule = Tables["alert_rules"]["Row"];

export async function getUserStocks(supabase: Supabase, userId: string) {
  const { data } = await supabase
    .from("user_stocks")
    .select("*")
    .eq("user_id", userId)
    .order("added_at", { ascending: false });
  return (data ?? []) as UserStock[];
}

export async function getUserStocksWithCompanies(
  supabase: Supabase,
  userId: string
): Promise<(UserStock & { company: Company | null })[]> {
  const stocks = await getUserStocks(supabase, userId);
  if (stocks.length === 0) return [];

  const companyIds = [...new Set(stocks.map((s) => s.company_id))];
  const { data: companies } = await supabase
    .from("companies")
    .select("*")
    .in("id", companyIds);

  const companyMap = new Map(
    ((companies ?? []) as Company[]).map((c) => [c.id, c])
  );

  return stocks.map((s) => ({
    ...s,
    company: companyMap.get(s.company_id) ?? null,
  }));
}

export async function getUserAlerts(
  supabase: Supabase,
  userId: string,
  limit = 20
) {
  const { data } = await supabase
    .from("alerts")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);
  return (data ?? []) as Alert[];
}

export async function getUserAlertsWithFilings(
  supabase: Supabase,
  userId: string,
  limit = 20
): Promise<(Alert & { filing: Filing | null; company: Company | null })[]> {
  const alerts = await getUserAlerts(supabase, userId, limit);
  if (alerts.length === 0) return [];

  const filingIds = [...new Set(alerts.map((a) => a.filing_id))];
  const { data: filings } = await supabase
    .from("filings")
    .select("*")
    .in("id", filingIds);

  const filingMap = new Map(
    ((filings ?? []) as Filing[]).map((f) => [f.id, f])
  );

  const companyIds = [
    ...new Set(((filings ?? []) as Filing[]).map((f) => f.company_id)),
  ];
  const { data: companies } = await supabase
    .from("companies")
    .select("*")
    .in("id", companyIds.length > 0 ? companyIds : ["_none_"]);

  const companyMap = new Map(
    ((companies ?? []) as Company[]).map((c) => [c.id, c])
  );

  return alerts.map((a) => {
    const filing = filingMap.get(a.filing_id) ?? null;
    return {
      ...a,
      filing,
      company: filing ? companyMap.get(filing.company_id) ?? null : null,
    };
  });
}

export async function getUserSubscription(supabase: Supabase, userId: string) {
  const { data } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .single();
  return data as Subscription | null;
}

export async function getUserProfile(supabase: Supabase, userId: string) {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  return data as Profile | null;
}

export async function getUserAlertRules(supabase: Supabase, userId: string) {
  const { data } = await supabase
    .from("alert_rules")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  return (data ?? []) as AlertRule[];
}

export async function searchCompanies(
  supabase: Supabase,
  query: string,
  limit = 10
) {
  const { data } = await supabase
    .from("companies")
    .select("*")
    .eq("status", "active")
    .or(`ticker.ilike.%${query.replace(/[%_\\]/g, (ch) => `\\${ch}`)}%,name.ilike.%${query.replace(/[%_\\]/g, (ch) => `\\${ch}`)}%`)
    .limit(limit);
  return (data ?? []) as Company[];
}

// ─── Admin queries ───────────────────────────────────────────────

export async function getContentQueue(
  supabase: Supabase,
  status?: ContentQueueItem["status"]
) {
  let query = supabase
    .from("content_queue")
    .select("*")
    .order("created_at", { ascending: false });

  if (status) {
    query = query.eq("status", status);
  }

  const { data } = await query;
  return (data ?? []) as ContentQueueItem[];
}

export async function getPipelineRuns(supabase: Supabase, limit = 20) {
  const { data } = await supabase
    .from("pipeline_runs")
    .select("*")
    .order("started_at", { ascending: false })
    .limit(limit);
  return (data ?? []) as PipelineRun[];
}

export type PipelineError = Tables["pipeline_errors"]["Row"];

export async function getPipelineErrors(
  supabase: Supabase,
  runId: string
) {
  const { data } = await supabase
    .from("pipeline_errors")
    .select("*")
    .eq("pipeline_run_id", runId)
    .order("created_at", { ascending: false });
  return (data ?? []) as PipelineError[];
}
