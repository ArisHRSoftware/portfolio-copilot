import { createStaticClient } from "@/lib/supabase/static";
import type { Database } from "@/lib/types/database";

type Filing = Database["public"]["Tables"]["filings"]["Row"];
type Company = Database["public"]["Tables"]["companies"]["Row"];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfoliocopilot.com";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ ticker: string }> }
): Promise<Response> {
  const { ticker } = await params;
  const upperTicker = ticker.toUpperCase();
  const supabase = createStaticClient();

  // Get company
  const { data: rawCompanies } = await supabase
    .from("companies")
    .select("*")
    .eq("ticker", upperTicker)
    .limit(1);

  const company = ((rawCompanies as Company[] | null) ?? [])[0];

  if (!company) {
    return new Response("Company not found", { status: 404 });
  }

  const { data: rawFilings } = await supabase
    .from("filings")
    .select("*")
    .eq("company_id", company.id)
    .is("superseded_by", null)
    .order("filed_date", { ascending: false })
    .limit(20);

  const filings = rawFilings as Filing[] | null;

  const items = (filings ?? [])
    .map((f) => {
      const title = `${company.ticker} ${f.filing_type}`;
      const description = f.one_line_summary || `${f.filing_type} filing`;
      const link = `${SITE_URL}/filings/${f.slug}`;
      const pubDate = new Date(f.filed_date).toUTCString();

      return `    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${description}]]></description>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${company.ticker} SEC Filings — Portfolio Copilot</title>
    <link>${SITE_URL}/stocks/${company.ticker.toLowerCase()}</link>
    <description>AI-powered SEC filing analysis for ${company.name} (${company.ticker}).</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed/${company.ticker.toLowerCase()}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
    },
  });
}
