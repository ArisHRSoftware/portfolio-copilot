import { createStaticClient } from "@/lib/supabase/static";
import type { Database } from "@/lib/types/database";

type Filing = Database["public"]["Tables"]["filings"]["Row"];
type Company = Database["public"]["Tables"]["companies"]["Row"];

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export async function GET(): Promise<Response> {
  const supabase = createStaticClient();

  // Fetch recent filings
  const { data: rawFilings } = await supabase
    .from("filings")
    .select("*")
    .is("superseded_by", null)
    .order("filed_date", { ascending: false })
    .limit(50);

  const filings = rawFilings as Filing[] | null;

  if (!filings || filings.length === 0) {
    return new Response(emptyFeed(), {
      headers: rssHeaders(),
    });
  }

  // Fetch unique companies for these filings
  const companyIds = [...new Set(filings.map((f) => f.company_id))];
  const { data: rawCompanies } = await supabase
    .from("companies")
    .select("*")
    .in("id", companyIds);

  const companyMap = new Map(
    ((rawCompanies as Company[] | null) ?? []).map((c) => [c.id, c])
  );

  const items = filings
    .map((f) => {
      const company = companyMap.get(f.company_id);
      const ticker = company?.ticker ?? "UNKNOWN";
      const companyName = company?.name ?? "";
      const title = `${ticker} ${f.filing_type} — ${companyName}`;
      const description =
        f.one_line_summary || `${f.filing_type} filing from ${ticker}`;
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
    <title>Brefyr — SEC Filing Analysis</title>
    <link>${SITE_URL}</link>
    <description>AI-powered SEC filing analysis for 7,600+ uncovered US small-cap stocks. Get instant summaries, significance scores, and insider trade alerts.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: rssHeaders(),
  });
}

function rssHeaders() {
  return {
    "Content-Type": "application/rss+xml; charset=utf-8",
    "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=21600",
  };
}

function emptyFeed() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Brefyr — SEC Filing Analysis</title>
    <link>${SITE_URL}</link>
    <description>AI-powered SEC filing analysis for small-cap stocks.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
  </channel>
</rss>`;
}
