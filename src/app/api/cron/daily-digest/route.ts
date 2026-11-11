import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";
import { sendDailyDigest } from "@/lib/resend";
import type { DigestFilingItem } from "@/lib/resend";
import type { Filing, Company } from "@/lib/supabase/queries";

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  // ── Main logic ─────────────────────────────────────────────────
  const supabase = createWebhookClient();

  try {
    // 1. Get ALL users who have at least one tracked stock (paginated)
    const allUserStocks: Array<{ user_id: string; company_id: string }> = [];
    let usOffset = 0;
    const US_PAGE = 1000;
    while (true) {
      const { data } = await supabase
        .from("user_stocks")
        .select("user_id, company_id")
        .range(usOffset, usOffset + US_PAGE - 1);
      const batch = (data ?? []) as Array<{ user_id: string; company_id: string }>;
      allUserStocks.push(...batch);
      if (batch.length < US_PAGE) break;
      usOffset += US_PAGE;
    }

    // Deduplicate user IDs
    const userIds = [...new Set(allUserStocks.map((us) => us.user_id))];

    if (userIds.length === 0) {
      return Response.json({
        success: true,
        message: "No users with tracked stocks",
        emailsSent: 0,
      });
    }

    // Group stocks by user
    const stocksByUser = new Map<string, Set<string>>();
    for (const us of allUserStocks) {
      const existing = stocksByUser.get(us.user_id);
      if (existing) {
        existing.add(us.company_id);
      } else {
        stocksByUser.set(us.user_id, new Set([us.company_id]));
      }
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

    // 4. Build top 5 market-wide filings by significance score
    const topMarketFilings = [...filings]
      .sort((a, b) => b.significance_score - a.significance_score)
      .slice(0, 5);

    const topFilingsItems: DigestFilingItem[] = topMarketFilings.map((f) => {
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

    // 6. Send digest emails to ALL users with tracked stocks
    const today = new Date().toISOString().split("T")[0];
    let emailsSent = 0;
    const errors: string[] = [];

    for (const userId of userIds) {
      const trackedCompanyIds = stocksByUser.get(userId);
      if (!trackedCompanyIds || trackedCompanyIds.size === 0) continue;

      const email = emailByUserId.get(userId);
      if (!email) continue;

      const userFilings = filings.filter((f) =>
        trackedCompanyIds.has(f.company_id)
      );

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
          topFilings: topFilingsItems,
          periodLabel: "Today",
          startDate: cutoff.split("T")[0],
          endDate: today,
        });
        emailsSent++;
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Unknown email error";
        errors.push(`${userId}: ${msg}`);
        console.error(`Daily digest failed for ${userId}:`, msg);
      }
    }

    return Response.json({
      success: true,
      emailsSent,
      totalUsers: userIds.length,
      filingsFound: filings.length,
      topFilingsIncluded: topFilingsItems.length,
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
