import { NextRequest } from "next/server";
import { validateApiKey, checkApiAccess, apiError, rateLimitError, withRateLimitHeaders } from "@/lib/api-auth";
import { createWebhookClient } from "@/lib/supabase/server";
import type { Filing, Company } from "@/lib/supabase/queries";

/**
 * GET /api/v1/export
 *
 * Exports filing data as CSV. Pro plan only.
 *
 * Query params:
 *   - ticker (optional): Filter by company ticker
 *   - days (optional): Lookback period (default 90, max 365)
 *   - type (optional): Filing type filter
 */
export async function GET(request: NextRequest) {
  const auth = await validateApiKey(request);
  if (!auth.ok) {
    if (auth.rateLimited) return rateLimitError(auth.dailyLimit);
    return apiError("Invalid or missing API key", 401);
  }

  const hasAccess = await checkApiAccess(auth.userId);
  if (!hasAccess) return apiError("Data export requires Pro plan", 403);

  const searchParams = request.nextUrl.searchParams;
  const ticker = searchParams.get("ticker")?.toUpperCase();
  const safeInt = (v: string | null, fallback: number) => {
    const n = parseInt(v ?? String(fallback), 10);
    return Number.isFinite(n) ? n : fallback;
  };
  const days = Math.min(safeInt(searchParams.get("days"), 90), 365);
  const filingType = searchParams.get("type");

  const supabase = createWebhookClient();

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  let query = supabase
    .from("filings")
    .select("*")
    .is("superseded_by", null)
    .gte("filed_date", startDate.toISOString().split("T")[0])
    .order("filed_date", { ascending: false })
    .limit(5000);

  if (filingType) query = query.eq("filing_type", filingType);

  if (ticker) {
    const { data: company } = await supabase
      .from("companies")
      .select("*")
      .eq("ticker", ticker)
      .single();

    if (!company) return apiError(`Company not found: ${ticker}`, 404);
    query = query.eq("company_id", (company as Company).id);
  }

  const { data, error } = await query;
  if (error) return apiError("Failed to export data", 500);

  const filings = (data ?? []) as Filing[];

  // Resolve companies
  const companyIds = [...new Set(filings.map((f) => f.company_id))];
  const { data: companies } = await supabase
    .from("companies")
    .select("*")
    .in("id", companyIds.length > 0 ? companyIds : ["_none_"]);

  const companyMap = new Map(
    ((companies ?? []) as Company[]).map((c) => [c.id, c])
  );

  // Build CSV
  const headers = [
    "ticker",
    "company_name",
    "filing_type",
    "filed_date",
    "significance_score",
    "one_line_summary",
    "has_earnings_data",
    "raw_url",
  ];

  const rows = filings.map((f) => {
    const c = companyMap.get(f.company_id);
    return [
      c?.ticker ?? "",
      csvEscape(c?.name ?? ""),
      f.filing_type,
      f.filed_date,
      String(f.significance_score),
      csvEscape(f.one_line_summary ?? ""),
      String(f.has_earnings_data),
      f.raw_url,
    ].join(",");
  });

  const csv = [headers.join(","), ...rows].join("\n");

  return withRateLimitHeaders(
    new Response(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="filings-export-${new Date().toISOString().split("T")[0]}.csv"`,
      },
    }),
    auth
  );
}

function csvEscape(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}
