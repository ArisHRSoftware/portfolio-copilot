import type { MetadataRoute } from "next";
import { createStaticClient } from "@/lib/supabase/static";
import { glossaryTerms } from "@/data/glossary/index";
import { secFilingArticles } from "@/data/learn/sec-filings";
import { SECTOR_SLUGS } from "@/lib/constants/sectors";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

const PAGE_SIZE = 1000;

/**
 * Paginate through ALL rows in a Supabase table.
 * PostgREST caps each request at ~1,000 rows regardless of .limit().
 */
async function fetchAll<T extends Record<string, unknown>>(
  query: () => ReturnType<ReturnType<ReturnType<typeof createStaticClient>["from"]>["select"]>
): Promise<T[]> {
  const all: T[] = [];
  let offset = 0;
  while (true) {
    const { data } = await (query() as any).range(offset, offset + PAGE_SIZE - 1);
    const rows = (data ?? []) as T[];
    all.push(...rows);
    if (rows.length < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }
  return all;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createStaticClient();

  // Paginate ALL dynamic data — PostgREST silently caps at 1,000 rows per request
  const [companies, blogPosts, filings] = await Promise.all([
    fetchAll<{ ticker: string; updated_at: string | null }>(() =>
      supabase
        .from("companies")
        .select("ticker, updated_at")
        .eq("status", "active")
        .order("last_filing_date", { ascending: false })
    ),
    fetchAll<{ slug: string; published_at: string | null }>(() =>
      supabase
        .from("blog_posts")
        .select("slug, published_at")
        .not("published_at", "is", null)
        .order("published_at", { ascending: false })
    ),
    fetchAll<{ slug: string; filed_date: string | null }>(() =>
      supabase
        .from("filings")
        .select("slug, filed_date")
        .is("superseded_by", null)
        .order("filed_date", { ascending: false })
    ),
  ]);

  const now = new Date();

  // --- Static pages ---
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...[
      "/pricing",
      "/about",
      "/privacy-policy",
      "/terms",
      "/disclaimer",
      "/newsletter",
      "/api-docs",
    ].map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
    ...[
      "/blog",
      "/archive",
      "/trending",
      "/insider-buying",
      "/insider-selling",
      "/earnings-this-week",
      "/recent-filings",
      "/glossary",
      "/learn",
      "/learn/sec-filings",
    ].map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.5,
    })),
  ];

  // --- Sector pages ---
  const sectorPages: MetadataRoute.Sitemap = SECTOR_SLUGS.map((slug) => ({
    url: `${siteUrl}/sectors/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // --- Stock pages — deduplicate multi-ticker companies ---
  const seenTickers = new Set<string>();
  const stockPages: MetadataRoute.Sitemap = [];
  for (const c of companies) {
    const ticker = c.ticker.split(",")[0].trim().toLowerCase();
    if (!ticker || seenTickers.has(ticker)) continue;
    seenTickers.add(ticker);
    stockPages.push({
      url: `${siteUrl}/stocks/${ticker}`,
      lastModified: c.updated_at ? new Date(c.updated_at) : now,
      changeFrequency: "daily" as const,
      priority: 0.8,
    });
  }

  // --- Blog posts (filter null slugs) ---
  const blogPages: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.slug)
    .map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.published_at ? new Date(post.published_at) : now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  // --- Filing pages (all non-superseded, filter null slugs) ---
  const filingPages: MetadataRoute.Sitemap = filings
    .filter((filing) => filing.slug)
    .map((filing) => ({
      url: `${siteUrl}/filings/${filing.slug}`,
      lastModified: filing.filed_date ? new Date(filing.filed_date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // --- Glossary pages ---
  const glossaryPages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
    url: `${siteUrl}/glossary/${term.slug}`,
    lastModified: new Date(term.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // --- Learn article pages ---
  const learnPages: MetadataRoute.Sitemap = secFilingArticles.map((article) => ({
    url: `${siteUrl}/learn/sec-filings/${article.slug}`,
    lastModified: new Date(article.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...sectorPages,
    ...stockPages,
    ...blogPages,
    ...filingPages,
    ...glossaryPages,
    ...learnPages,
  ];
}
