import { createStaticClient } from "@/lib/supabase/static";

const PAGE_SIZE = 1000;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export type SitemapEntry = {
  url: string;
  lastModified?: string;
  changeFrequency?: string;
  priority?: number;
};

/**
 * Paginate through ALL rows in a Supabase table.
 * PostgREST caps each request at ~1,000 rows regardless of .limit().
 */
export async function fetchAll<T extends Record<string, unknown>>(
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
 * Fetch a specific range of rows from a Supabase table using pagination.
 */
export async function fetchRange<T extends Record<string, unknown>>(
  query: () => ReturnType<ReturnType<ReturnType<typeof createStaticClient>["from"]>["select"]>,
  from: number,
  count: number
): Promise<T[]> {
  const all: T[] = [];
  let offset = from;
  const end = from + count;
  while (offset < end) {
    const batchEnd = Math.min(offset + PAGE_SIZE - 1, end - 1);
    const { data } = await (query() as any).range(offset, batchEnd);
    const rows = (data ?? []) as T[];
    all.push(...rows);
    if (rows.length < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }
  return all;
}

/** Generate a <urlset> XML sitemap from entries. */
export function toSitemapXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map((e) => {
      let xml = `  <url>\n    <loc>${escapeXml(e.url)}</loc>`;
      if (e.lastModified) xml += `\n    <lastmod>${e.lastModified}</lastmod>`;
      if (e.changeFrequency) xml += `\n    <changefreq>${e.changeFrequency}</changefreq>`;
      if (e.priority != null) xml += `\n    <priority>${e.priority}</priority>`;
      xml += `\n  </url>`;
      return xml;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

/** Generate a sitemap index XML. */
export function toSitemapIndexXml(
  sitemaps: { loc: string; lastmod?: string }[]
): string {
  const entries = sitemaps
    .map((s) => {
      let xml = `  <sitemap>\n    <loc>${escapeXml(s.loc)}</loc>`;
      if (s.lastmod) xml += `\n    <lastmod>${s.lastmod}</lastmod>`;
      xml += `\n  </sitemap>`;
      return xml;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
