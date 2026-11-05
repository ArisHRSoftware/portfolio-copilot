import { NextRequest } from "next/server";
import { validateApiKey, checkApiAccess, apiError, rateLimitError, withRateLimitHeaders } from "@/lib/api-auth";
import { createWebhookClient } from "@/lib/supabase/server";
import type { Filing, Company } from "@/lib/supabase/queries";

/**
 * GET /api/v1/filings
 *
 * Query params:
 *   - ticker (optional): Filter by company ticker
 *   - type (optional): Filter by filing type (10-K, 8-K, etc.)
 *   - min_significance (optional): Minimum significance score (1-10)
 *   - days (optional): Lookback period in days (default 30, max 365)
 *   - limit (optional): Results per page (default 50, max 100)
 *   - offset (optional): Pagination offset
 */
export async function GET(request: NextRequest) {
  const auth = await validateApiKey(request);
  if (!auth.ok) {
    if (auth.rateLimited) return rateLimitError(auth.dailyLimit);
    return apiError("Invalid or missing API key", 401);
  }

  const hasAccess = await checkApiAccess(auth.userId);
  if (!hasAccess) return apiError("API access requires Pro plan", 403);

  const params = request.nextUrl.searchParams;
  const ticker = params.get("ticker")?.toUpperCase();
  const filingType = params.get("type");
  const safeInt = (v: string | null, fallback: number) => {
    const n = parseInt(v ?? String(fallback), 10);
    return Number.isFinite(n) ? n : fallback;
  };
  const minSignificance = safeInt(params.get("min_significance"), 0);
  const days = Math.min(safeInt(params.get("days"), 30), 365);
  const limit = Math.min(safeInt(params.get("limit"), 50), 100);
  const offset = Math.max(0, safeInt(params.get("offset"), 0));

  const supabase = createWebhookClient();

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  let query = supabase
    .from("filings")
    .select("*")
    .is("superseded_by", null)
    .gte("filed_date", startDate.toISOString().split("T")[0])
    .order("filed_date", { ascending: false })
    .range(offset, offset + limit - 1);

  if (filingType) {
    query = query.eq("filing_type", filingType);
  }
  if (minSignificance > 0) {
    query = query.gte("significance_score", minSignificance);
  }

  // If ticker filter, resolve to company_id first
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
  if (error) return apiError("Failed to fetch filings", 500);

  const filings = (data ?? []) as Filing[];

  // Resolve company tickers for the response
  const companyIds = [...new Set(filings.map((f) => f.company_id))];
  const { data: companies } = await supabase
    .from("companies")
    .select("*")
    .in("id", companyIds.length > 0 ? companyIds : ["_none_"]);

  const companyMap = new Map(
    ((companies ?? []) as Company[]).map((c) => [c.id, c])
  );

  const results = filings.map((f) => {
    const c = companyMap.get(f.company_id);
    return {
      id: f.id,
      ticker: c?.ticker ?? null,
      company_name: c?.name ?? null,
      filing_type: f.filing_type,
      filed_date: f.filed_date,
      significance_score: f.significance_score,
      one_line_summary: f.one_line_summary,
      ai_summary_prose: f.ai_summary_prose,
      has_earnings_data: f.has_earnings_data,
      insider_data: f.insider_data,
      raw_url: f.raw_url,
    };
  });

  return withRateLimitHeaders(
    Response.json({
      data: results,
      meta: {
        count: results.length,
        offset,
        limit,
        days,
      },
    }),
    auth
  );
}
