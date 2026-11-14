import { NextResponse } from "next/server";
import { createStaticClient } from "@/lib/supabase/static";
import { fetchAll, siteUrl, toSitemapXml, type SitemapEntry } from "@/lib/sitemap-utils";

export async function GET() {
  const supabase = createStaticClient();
  const now = new Date().toISOString();

  const companies = await fetchAll<{ ticker: string; updated_at: string | null }>(() =>
    supabase
      .from("companies")
      .select("ticker, updated_at")
      .eq("status", "active")
      .order("last_filing_date", { ascending: false })
  );

  // Deduplicate multi-ticker companies
  const seenTickers = new Set<string>();
  const entries: SitemapEntry[] = [];
  for (const c of companies) {
    const ticker = c.ticker.split(",")[0].trim().toLowerCase();
    if (!ticker || seenTickers.has(ticker)) continue;
    seenTickers.add(ticker);
    entries.push({
      url: `${siteUrl}/stocks/${ticker}`,
      lastModified: c.updated_at ? new Date(c.updated_at).toISOString() : now,
      changeFrequency: "daily",
      priority: 0.8,
    });
  }

  return new NextResponse(toSitemapXml(entries), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
