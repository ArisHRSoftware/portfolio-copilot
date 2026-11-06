import type { MetadataRoute } from "next";
import { createStaticClient } from "@/lib/supabase/static";
import { getPublishedBlogPosts, getRecentFilings, type Company } from "@/lib/supabase/queries";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

import { SECTOR_SLUGS } from "@/lib/constants/sectors";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createStaticClient();

  // Fetch all dynamic data in parallel — single query each, no per-item lookups
  const [companies, blogPosts, filings] = await Promise.all([
    supabase
      .from("companies")
      .select("*")
      .eq("status", "active")
      .order("last_filing_date", { ascending: false })
      .then(({ data }) => (data ?? []) as Company[]),
    getPublishedBlogPosts(supabase),
    getRecentFilings(supabase, { limit: 500 }),
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
      "/privacy",
      "/terms",
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
  const stockPages: MetadataRoute.Sitemap = companies.map((c) => ({
    url: `${siteUrl}/stocks/${c.ticker.toLowerCase()}`,
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

  // --- Filing pages (last 500) ---
  const filingPages: MetadataRoute.Sitemap = filings.map((filing) => ({
    url: `${siteUrl}/filings/${filing.slug}`,
    lastModified: filing.filed_date ? new Date(filing.filed_date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...sectorPages,
    ...stockPages,
    ...blogPages,
    ...filingPages,
  ];
}
