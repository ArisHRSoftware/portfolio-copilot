import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";
import { sendFilingAlert } from "@/lib/resend";
import type { FilingEmailData } from "@/lib/resend";
import type { Filing, Company } from "@/lib/supabase/queries";

export const maxDuration = 300;

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  const supabase = createWebhookClient();

  try {
    // 1. Get all users with tracked stocks — paginated
    const userStocks: Array<{ user_id: string; company_id: string }> = [];
    let stockOffset = 0;
    const PAGE_SIZE = 1000;
    while (true) {
      const { data } = await supabase
        .from("user_stocks")
        .select("*")
        .range(stockOffset, stockOffset + PAGE_SIZE - 1);
      const batch = (data ?? []) as Array<{
        user_id: string;
        company_id: string;
      }>;
      userStocks.push(...batch);
      if (batch.length < PAGE_SIZE) break;
      stockOffset += PAGE_SIZE;
    }

    if (userStocks.length === 0) {
      return Response.json({
        success: true,
        message: "No users with tracked stocks",
        emailsSent: 0,
      });
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

    // 2. Get Form 4 filings from the last 6 hours with insider_data
    const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString();

    const allFilings: Filing[] = [];
    let filingOffset = 0;
    while (true) {
      const { data } = await supabase
        .from("filings")
        .select("*")
        .eq("filing_type", "4")
        .not("insider_data", "is", null)
        .gte("filed_date", sixHoursAgo.split("T")[0])
        .order("filed_date", { ascending: false })
        .range(filingOffset, filingOffset + PAGE_SIZE - 1);
      const batch = (data ?? []) as Filing[];
      allFilings.push(...batch);
      if (batch.length < PAGE_SIZE) break;
      filingOffset += PAGE_SIZE;
    }

    if (allFilings.length === 0) {
      return Response.json({
        success: true,
        message: "No Form 4 filings with insider data in the last 6 hours",
        emailsSent: 0,
      });
    }

    // 3. Build company map for the matched filings
    const companyIds = [...new Set(allFilings.map((f) => f.company_id))];
    const companies: Company[] = [];
    // Paginate company lookups in chunks (in() has limits)
    for (let i = 0; i < companyIds.length; i += PAGE_SIZE) {
      const chunk = companyIds.slice(i, i + PAGE_SIZE);
      const { data } = await supabase
        .from("companies")
        .select("*")
        .in("id", chunk);
      companies.push(...((data ?? []) as Company[]));
    }
    const companyMap = new Map(companies.map((c) => [c.id, c]));

    // 4. Get user emails from Supabase Auth admin API (paginated)
    const userIds = [...stocksByUser.keys()];
    const emailByUserId = new Map<string, string>();
    let page = 1;
    let hasMore = true;
    while (hasMore) {
      const {
        data: { users },
      } = await supabase.auth.admin.listUsers({
        page,
        perPage: 1000,
      });
      for (const u of users) {
        if (u.email && userIds.includes(u.id)) {
          emailByUserId.set(u.id, u.email);
        }
      }
      hasMore = users.length === 1000;
      page++;
    }

    // 5. Get existing alerts to avoid duplicates — paginated
    const filingIds = allFilings.map((f) => f.id);
    const existingAlerts = new Set<string>();
    let alertOffset = 0;
    while (true) {
      const { data } = await supabase
        .from("alerts")
        .select("user_id, filing_id")
        .in("filing_id", filingIds)
        .in("user_id", userIds)
        .range(alertOffset, alertOffset + PAGE_SIZE - 1);
      const batch = (data ?? []) as Array<{
        user_id: string;
        filing_id: string;
      }>;
      for (const a of batch) {
        existingAlerts.add(`${a.user_id}:${a.filing_id}`);
      }
      if (batch.length < PAGE_SIZE) break;
      alertOffset += PAGE_SIZE;
    }

    // 6. Match filings to users and send alerts
    let emailsSent = 0;
    let matchesFound = 0;
    let duplicatesSkipped = 0;
    const errors: string[] = [];

    for (const [userId, trackedCompanyIds] of stocksByUser) {
      const email = emailByUserId.get(userId);
      if (!email) continue;

      const matchedFilings = allFilings.filter((f) =>
        trackedCompanyIds.has(f.company_id)
      );
      if (matchedFilings.length === 0) continue;

      for (const filing of matchedFilings) {
        matchesFound++;

        // Check for duplicate
        const alertKey = `${userId}:${filing.id}`;
        if (existingAlerts.has(alertKey)) {
          duplicatesSkipped++;
          continue;
        }

        const company = companyMap.get(filing.company_id);
        const emailData: FilingEmailData = {
          ticker: company?.ticker ?? "???",
          companyName: company?.name ?? "Unknown",
          filingType: filing.filing_type,
          filedDate: filing.filed_date,
          oneLiner: filing.one_line_summary,
          slug: filing.slug,
          significanceScore: filing.significance_score,
        };

        try {
          await sendFilingAlert(email, emailData);

          // Record in alerts table to prevent future duplicates
          await supabase.from("alerts").insert({
            user_id: userId,
            filing_id: filing.id,
            channel: "email" as const,
          } as never);

          existingAlerts.add(alertKey);
          emailsSent++;
        } catch (err) {
          const msg =
            err instanceof Error ? err.message : "Unknown email error";
          errors.push(`${userId}/${filing.id}: ${msg}`);
          console.error(
            `Insider alert failed for user ${userId}, filing ${filing.id}:`,
            msg
          );
        }
      }
    }

    console.log(
      `Insider alerts complete: ${emailsSent} sent, ${matchesFound} matches, ${duplicatesSkipped} duplicates skipped`
    );

    return Response.json({
      success: true,
      emailsSent,
      matchesFound,
      duplicatesSkipped,
      filingsChecked: allFilings.length,
      usersWithStocks: stocksByUser.size,
      errors: errors.length > 0 ? errors : undefined,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Insider alerts cron error:", message);

    return Response.json(
      {
        success: false,
        error: message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
