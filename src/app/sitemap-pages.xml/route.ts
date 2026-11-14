import { NextResponse } from "next/server";
import { createStaticClient } from "@/lib/supabase/static";
import { glossaryTerms } from "@/data/glossary/index";
import { secFilingArticles } from "@/data/learn/sec-filings";
import { SECTOR_SLUGS } from "@/lib/constants/sectors";
import { fetchAll, siteUrl, toSitemapXml, type SitemapEntry } from "@/lib/sitemap-utils";

export async function GET() {
  const supabase = createStaticClient();
  const now = new Date().toISOString();

  const blogPosts = await fetchAll<{ slug: string; published_at: string | null }>(() =>
    supabase
      .from("blog_posts")
      .select("slug, published_at")
      .not("published_at", "is", null)
      .order("published_at", { ascending: false })
  );

  const entries: SitemapEntry[] = [
    // Homepage
    { url: siteUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    // Static marketing pages
    ...["/pricing", "/about", "/privacy-policy", "/terms", "/disclaimer", "/newsletter", "/api-docs"].map(
      (path) => ({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.3 })
    ),
    // Content index pages
    ...["/blog", "/archive", "/trending", "/insider-buying", "/insider-selling", "/earnings-this-week", "/recent-filings", "/glossary", "/learn", "/learn/sec-filings"].map(
      (path) => ({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency: "daily", priority: 0.5 })
    ),
    // Sector pages
    ...SECTOR_SLUGS.map((slug) => ({
      url: `${siteUrl}/sectors/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
    // Blog posts
    ...blogPosts
      .filter((p) => p.slug)
      .map((p) => ({
        url: `${siteUrl}/blog/${p.slug}`,
        lastModified: p.published_at ? new Date(p.published_at).toISOString() : now,
        changeFrequency: "monthly",
        priority: 0.6,
      })),
    // Glossary terms
    ...glossaryTerms.map((t) => ({
      url: `${siteUrl}/glossary/${t.slug}`,
      lastModified: new Date(t.lastUpdated).toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    // Learn articles
    ...secFilingArticles.map((a) => ({
      url: `${siteUrl}/learn/sec-filings/${a.slug}`,
      lastModified: new Date(a.lastUpdated).toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];

  return new NextResponse(toSitemapXml(entries), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
