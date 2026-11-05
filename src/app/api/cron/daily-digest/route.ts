import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";
import { sendDailyDigest } from "@/lib/resend";
import type { DigestFilingItem } from "@/lib/resend";
import type { Filing, Company, Subscription } from "@/lib/supabase/queries";

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  // ── Main logic ─────────────────────────────────────────────────
  const supabase = createWebhookClient();

  try {
    // 1. Get all users with active paid subscriptions (starter/plus/pro) — paginated
    const activeSubs: Subscription[] = [];
    let subOffset = 0;
    const SUB_PAGE = 1000;
    while (true) {
      const { data } = await supabase
        .from("subscriptions")
        .select("*")
        .in("plan", ["starter", "plus", "pro"])
        .eq("status", "active")
        .range(subOffset, subOffset + SUB_PAGE - 1);
      const batch = (data ?? []) as Subscription[];
      activeSubs.push(...batch);
      if (batch.length < SUB_PAGE) break;
      subOffset += SUB_PAGE;
    }

    if (activeSubs.length === 0) {
      return Response.json({
        success: true,
        message: "No active paid subscribers",
        emailsSent: 0,
      });
    }

    // 2. Get filings from the last 24 hours
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const cutoff = yesterday.toISOString();

    const allFilings: Filing[] = [];
    let filingOffset = 0;
    const FILING_PAGE = 1000;
    while (true) {
      const { data } = await supabase
        .from("filings")
        .select("*")
        .gte("filed_date", cutoff.split("T")[0])
        .is("superseded_by", null)
        .order("filed_date", { ascending: false })
        .range(filingOffset, filingOffset + FILING_PAGE - 1);
      const batch = (data ?? []) as Filing[];
      allFilings.push(...batch);
      if (batch.length < FILING_PAGE) break;
      filingOffset += FILING_PAGE;
    }

    const filings = allFilings;

    if (filings.length === 0) {
      return Response.json({
        success: true,
        message: "No filings in the last 24 hours",
        emailsSent: 0,
      });
    }

    // 3. Build a map of company_id -> company
    const companyIds = [...new Set(filings.map((f) => f.company_id))];
    const { data: companiesData } = await supabase
      .from("companies")
      .select("*")
      .in("id", companyIds);

    const companies = (companiesData ?? []) as Company[];
    const companyMap = new Map(companies.map((c) => [c.id, c]));

    // 4. For each user, find their tracked stocks and matching filings
    const userIds = activeSubs.map((s) => s.user_id);

    // Paginate user_stocks to avoid Supabase 1000-row default limit
    const userStocks: Array<{ user_id: string; company_id: string }> = [];
    let stockOffset = 0;
    const STOCK_PAGE = 1000;
    while (true) {
      const { data } = await supabase
        .from("user_stocks")
        .select("*")
        .in("user_id", userIds)
        .range(stockOffset, stockOffset + STOCK_PAGE - 1);
      const batch = (data ?? []) as Array<{ user_id: string; company_id: string }>;
      userStocks.push(...batch);
      if (batch.length < STOCK_PAGE) break;
      stockOffset += STOCK_PAGE;
    }

    // Group stocks by user
    const stocksByUser = new Map<string, Set<string>>();
    for (const us of userStocks) {
      const existing = stocksByUser.get(us.user_id);
      if (existing) {
        existing.add(us.company_id);
      } else {
        stocksByUser.set(us.user_id, new Set([us.company_id]));
      }
    }

    // 5. Get user emails from Supabase Auth admin API (paginated)
    const emailByUserId = new Map<string, string>();
    let page = 1;
    let hasMore = true;
    while (hasMore) {
      const { data: { users } } = await supabase.auth.admin.listUsers({
        page,
        perPage: 1000,
      });
      for (const u of users) {
        if (u.email) emailByUserId.set(u.id, u.email);
      }
      hasMore = users.length === 1000;
      page++;
    }

    // 6. Send digest emails
    const today = new Date().toISOString().split("T")[0];
    let emailsSent = 0;
    const errors: string[] = [];

    for (const sub of activeSubs) {
      const trackedCompanyIds = stocksByUser.get(sub.user_id);
      if (!trackedCompanyIds || trackedCompanyIds.size === 0) continue;

      const userFilings = filings.filter((f) =>
        trackedCompanyIds.has(f.company_id)
      );
      if (userFilings.length === 0) continue;

      const email = emailByUserId.get(sub.user_id);
      if (!email) continue;

      const digestItems: DigestFilingItem[] = userFilings.map((f) => {
        const company = companyMap.get(f.company_id);
        return {
          ticker: company?.ticker ?? "???",
          companyName: company?.name ?? "Unknown",
          filingType: f.filing_type,
          filedDate: f.filed_date,
          oneLiner: f.one_line_summary,
          slug: f.slug,
          significanceScore: f.significance_score,
        };
      });

      try {
        await sendDailyDigest(email, {
          filings: digestItems,
          periodLabel: "Today",
          startDate: cutoff.split("T")[0],
          endDate: today,
        });
        emailsSent++;
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Unknown email error";
        errors.push(`${sub.user_id}: ${msg}`);
        console.error(`Daily digest failed for ${sub.user_id}:`, msg);
      }
    }

    return Response.json({
      success: true,
      emailsSent,
      totalSubscribers: activeSubs.length,
      filingsFound: filings.length,
      errors: errors.length > 0 ? errors : undefined,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Daily digest cron error:", message);

    return Response.json(
      { success: false, error: message, timestamp: new Date().toISOString() },
      { status: 500 }
    );
  }
}
