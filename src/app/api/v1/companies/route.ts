import { NextRequest } from "next/server";
import { validateApiKey, checkApiAccess, apiError, rateLimitError, withRateLimitHeaders } from "@/lib/api-auth";
import { createWebhookClient } from "@/lib/supabase/server";
import type { Company } from "@/lib/supabase/queries";

/**
 * GET /api/v1/companies
 *
 * Query params:
 *   - sector (optional): Filter by sector name
 *   - search (optional): Search by ticker or name
 *   - limit (optional): Results per page (default 100, max 500)
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
  const sector = params.get("sector");
  const search = params.get("search");
  const safeInt = (v: string | null, fallback: number) => {
    const n = parseInt(v ?? String(fallback), 10);
    return Number.isFinite(n) ? n : fallback;
  };
  const limit = Math.min(safeInt(params.get("limit"), 100), 500);
  const offset = Math.max(0, safeInt(params.get("offset"), 0));

  const supabase = createWebhookClient();

  let query = supabase
    .from("companies")
    .select("*")
    .eq("status", "active")
    .order("ticker", { ascending: true })
    .range(offset, offset + limit - 1);

  if (sector) {
    query = query.eq("sector", sector);
  }
  if (search) {
    query = query.or(
      `ticker.ilike.%${search.replace(/[%_\\]/g, (ch) => `\\${ch}`)}%,name.ilike.%${search.replace(/[%_\\]/g, (ch) => `\\${ch}`)}%`
    );
  }

  const { data, error } = await query;
  if (error) return apiError("Failed to fetch companies", 500);

  const companies = (data ?? []) as Company[];

  const results = companies.map((c) => ({
    id: c.id,
    ticker: c.ticker,
    name: c.name,
    sector: c.sector,
    market_cap: c.market_cap,
    exchange: c.exchange,
    last_filing_date: c.last_filing_date,
  }));

  return withRateLimitHeaders(
    Response.json({
      data: results,
      meta: {
        count: results.length,
        offset,
        limit,
      },
    }),
    auth
  );
}
