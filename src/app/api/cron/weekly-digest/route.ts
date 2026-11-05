import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";
import { sendWeeklyDigest } from "@/lib/resend";
import type { DigestFilingItem } from "@/lib/resend";
import type { Filing, Company, Subscription } from "@/lib/supabase/queries";

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  // ── Main logic ─────────────────────────────────────────────────
  const supabase = createWebhookClient();

  try {
    // 1. Get free-tier users: no subscription row, or plan='free'
    //    First get all user IDs that have a paid subscription so we can exclude them.
    const paidSubsList: Subscription[] = [];
    let subOffset = 0;
    const PAGE_SIZE = 1000;
    while (true) {
      const { data } = await supabase
        .from("subscriptions")
        .select("*")
        .in("plan", ["starter", "plus", "pro"])
        .eq("status", "active")
        .range(subOffset, subOffset + PAGE_SIZE - 1);
      const batch = (data ?? []) as Subscription[];
      paidSubsList.push(...batch);
      if (batch.length < PAGE_SIZE) break;
      subOffset += PAGE_SIZE;
    }

    const paidUserIds = new Set(paidSubsList.map((s) => s.user_id));

    // Get all users who have tracked stocks (paginated)
    const userStockRows: Array<{ user_id: string; company_id: string }> = [];
    let stockOffset = 0;
    while (true) {
      const { data } = await supabase
        .from("user_stocks")
        .select("*")
        .range(stockOffset, stockOffset + PAGE_SIZE - 1);
      const batch = (data ?? []) as Array<{ user_id: string; company_id: string }>;
      userStockRows.push(...batch);
      if (batch.length < PAGE_SIZE) break;
      stockOffset += PAGE_SIZE;
    }

    // Group stocks by user, excluding paid users
    const stocksByUser = new Map<string, Set<string>>();
    for (const us of userStockRows) {
      if (paidUserIds.has(us.user_id)) continue;

      const existing = stocksByUser.get(us.user_id);
      if (existing) {
        existing.add(us.company_id);
      } else {
        stocksByUser.set(us.user_id, new Set([us.company_id]));
      }
    }

    const freeUserIds = [...stocksByUser.keys()];

    if (freeUserIds.length === 0) {
      return Response.json({
        success: true,
        message: "No free-tier users with tracked stocks",
        emailsSent: 0,
      });
    }

    // 2. Get filings from the last 7 days
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const cutoff = weekAgo.toISOString();

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
        message: "No filings in the last 7 days",
        emailsSent: 0,
      });
    }

    // 3. Build company map
    const companyIds = [...new Set(filings.map((f) => f.company_id))];
    const { data: companiesData } = await supabase
      .from("companies")
      .select("*")
      .in("id", companyIds);

    const companies = (companiesData ?? []) as Company[];
    const companyMap = new Map(companies.map((c) => [c.id, c]));

    // 4. Get user emails from Supabase Auth admin API (paginated)
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

    // 5. Send weekly digest emails
    const today = new Date().toISOString().split("T")[0];
    const weekAgoDate = cutoff.split("T")[0];
    let emailsSent = 0;
    const errors: string[] = [];

    for (const userId of freeUserIds) {
      const trackedCompanyIds = stocksByUser.get(userId);
      if (!trackedCompanyIds || trackedCompanyIds.size === 0) continue;

      const userFilings = filings.filter((f) =>
        trackedCompanyIds.has(f.company_id)
      );
      if (userFilings.length === 0) continue;

      const email = emailByUserId.get(userId);
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
        await sendWeeklyDigest(email, {
          filings: digestItems,
          periodLabel: "This Week",
          startDate: weekAgoDate,
          endDate: today,
        });
        emailsSent++;
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Unknown email error";
        errors.push(`${userId}: ${msg}`);
        console.error(`Weekly digest failed for ${userId}:`, msg);
      }
    }

    return Response.json({
      success: true,
      emailsSent,
      totalFreeUsers: freeUserIds.length,
      filingsFound: filings.length,
      errors: errors.length > 0 ? errors : undefined,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Weekly digest cron error:", message);

    return Response.json(
      { success: false, error: message, timestamp: new Date().toISOString() },
      { status: 500 }
    );
  }
}
