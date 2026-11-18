import { glossaryTermsHi } from "@/data/glossary/hi/index";
import { secFilingArticlesHi } from "@/data/learn/hi/sec-filings";
import { sectorArticlesHi } from "@/data/learn/hi/sectors";
import { insiderTradingArticlesHi } from "@/data/learn/hi/insider-trading";
import { companyGuidesHi } from "@/data/companies/hi/index";
import { siteUrl, toSitemapXml, type SitemapEntry } from "@/lib/sitemap-utils";

export async function GET() {
  const now = new Date().toISOString();

  const entries: SitemapEntry[] = [
    // Hindi hub pages
    { url: `${siteUrl}/hi/glossary`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteUrl}/hi/learn`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteUrl}/hi/learn/sec-filings`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/hi/learn/sectors`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/hi/learn/insider-trading`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Hindi static pages
    { url: `${siteUrl}/hi/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/hi/about`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${siteUrl}/hi/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/hi/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/hi/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },

    // Hindi glossary terms (26)
    ...glossaryTermsHi.map((t) => ({
      url: `${siteUrl}/hi/glossary/${t.slug}`,
      lastModified: t.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.6,
    })),

    // Hindi learn articles (12)
    ...secFilingArticlesHi.map((a) => ({
      url: `${siteUrl}/hi/learn/sec-filings/${a.slug}`,
      lastModified: a.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...sectorArticlesHi.map((a) => ({
      url: `${siteUrl}/hi/learn/sectors/${a.slug}`,
      lastModified: a.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...insiderTradingArticlesHi.map((a) => ({
      url: `${siteUrl}/hi/learn/insider-trading/${a.slug}`,
      lastModified: a.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    })),

    // Hindi company guides (50)
    ...companyGuidesHi.map((g) => ({
      url: `${siteUrl}/hi/stocks/${g.slug}`,
      lastModified: g.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.5,
    })),
  ];

  return new Response(toSitemapXml(entries), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
