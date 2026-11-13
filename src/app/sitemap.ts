import type { MetadataRoute } from "next";
import { createStaticClient } from "@/lib/supabase/static";
import { type Company } from "@/lib/supabase/queries";
import { glossaryTerms } from "@/data/glossary/index";
import { secFilingArticles } from "@/data/learn/sec-filings";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

import { SECTOR_SLUGS } from "@/lib/constants/sectors";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createStaticClient();

  // Fetch ALL dynamic data — no caps. Google sitemaps support 50,000 URLs per file.
  // Supabase PostgREST defaults to 1,000 rows — always use explicit .limit()
  const [companies, blogPosts, filings] = await Promise.all([
    supabase
      .from("companies")
      .select("*")
      .eq("status", "active")
      .order("last_filing_date", { ascending: false })
      .limit(50000)
      .then(({ data }) => (data ?? []) as Company[]),
    supabase
      .from("blog_posts")
      .select("*")
      .not("published_at", "is", null)
      .order("published_at", { ascending: false })
      .limit(50000)
      .then(({ data }) => (data ?? []) as { slug: string; published_at: string | null }[]),
    supabase
      .from("filings")
      .select("slug, filed_date")
      .is("superseded_by", null)
      .order("filed_date", { ascending: false })
      .limit(50000)
      .then(({ data }) => (data ?? []) as { slug: string; filed_date: string | null }[]),
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

  // --- Stock pages (7600+, single query already done) ---
  // Sanitize tickers: multi-ticker companies (e.g. "JETBF, JETMF") take first ticker only
  const stockPages: MetadataRoute.Sitemap = companies.map((c) => ({
    url: `${siteUrl}/stocks/${c.ticker.split(",")[0].trim().toLowerCase()}`,
    lastModified: c.updated_at ? new Date(c.updated_at) : now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // --- Blog posts ---
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.published_at ? new Date(post.published_at) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // --- Filing pages (all non-superseded) ---
  const filingPages: MetadataRoute.Sitemap = filings.map((filing) => ({
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
