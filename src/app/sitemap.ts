import type { MetadataRoute } from "next";
import { createStaticClient } from "@/lib/supabase/static";
import { glossaryTerms } from "@/data/glossary/index";
import { secFilingArticles } from "@/data/learn/sec-filings";
import { SECTOR_SLUGS } from "@/lib/constants/sectors";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

const PAGE_SIZE = 1000;
const SITEMAP_CHUNK = 45000;

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

/**
 * Fetch a specific range of rows from a Supabase table.
 */
async function fetchRange<T extends Record<string, unknown>>(
  query: () => ReturnType<ReturnType<ReturnType<typeof createStaticClient>["from"]>["select"]>,
  from: number,
  to: number
): Promise<T[]> {
  const all: T[] = [];
  let offset = from;
  while (offset <= to) {
    const end = Math.min(offset + PAGE_SIZE - 1, to);
    const { data } = await (query() as any).range(offset, end);
    const rows = (data ?? []) as T[];
    all.push(...rows);
    if (rows.length < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }
  return all;
}

/**
 * Sitemap index: splits URLs across multiple sitemaps.
 * ID 0 = static + sectors + glossary + learn + blog
 * ID 1 = all stocks
 * ID 2+ = filings (paginated in chunks of 45,000)
 */
export async function generateSitemaps() {
  const supabase = createStaticClient();
  const { count } = await supabase
    .from("filings")
    .select("*", { count: "exact", head: true })
    .is("superseded_by", null);

  const filingChunks = Math.max(1, Math.ceil((count ?? 0) / SITEMAP_CHUNK));

  return Array.from({ length: 2 + filingChunks }, (_, i) => ({ id: i }));
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const supabase = createStaticClient();
  const now = new Date();

  // --- ID 0: Static pages + sectors + glossary + learn + blog ---
  if (id === 0) {
    const blogPosts = await fetchAll<{ slug: string; published_at: string | null }>(() =>
      supabase
        .from("blog_posts")
        .select("slug, published_at")
        .not("published_at", "is", null)
        .order("published_at", { ascending: false })
    );

    return [
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
      ...SECTOR_SLUGS.map((slug) => ({
        url: `${siteUrl}/sectors/${slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })),
      ...blogPosts
        .filter((post) => post.slug)
        .map((post) => ({
          url: `${siteUrl}/blog/${post.slug}`,
          lastModified: post.published_at ? new Date(post.published_at) : now,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        })),
      ...glossaryTerms.map((term) => ({
        url: `${siteUrl}/glossary/${term.slug}`,
        lastModified: new Date(term.lastUpdated),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
      ...secFilingArticles.map((article) => ({
        url: `${siteUrl}/learn/sec-filings/${article.slug}`,
        lastModified: new Date(article.lastUpdated),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ];
  }

  // --- ID 1: All stock pages ---
  if (id === 1) {
    const companies = await fetchAll<{ ticker: string; updated_at: string | null }>(() =>
      supabase
        .from("companies")
        .select("ticker, updated_at")
        .eq("status", "active")
        .order("last_filing_date", { ascending: false })
    );

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
    return stockPages;
  }

  // --- ID 2+: Filing pages (paginated in chunks of 45,000) ---
  const chunkIndex = id - 2;
  const from = chunkIndex * SITEMAP_CHUNK;
  const to = from + SITEMAP_CHUNK - 1;

  const filings = await fetchRange<{ slug: string; filed_date: string | null }>(
    () =>
      supabase
        .from("filings")
        .select("slug, filed_date")
        .is("superseded_by", null)
        .order("filed_date", { ascending: false }),
    from,
    to
  );

  return filings
    .filter((filing) => filing.slug)
    .map((filing) => ({
      url: `${siteUrl}/filings/${filing.slug}`,
      lastModified: filing.filed_date ? new Date(filing.filed_date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
}
