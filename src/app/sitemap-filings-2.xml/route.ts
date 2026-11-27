import { NextResponse } from "next/server";
import { createStaticClient } from "@/lib/supabase/static";
import { fetchRange, siteUrl, toSitemapXml, type SitemapEntry } from "@/lib/sitemap-utils";

const CHUNK_SIZE = 45000;

export async function GET() {
  const supabase = createStaticClient();
  const now = new Date().toISOString();

  let entries: SitemapEntry[] = [];

  try {
    const filings = await fetchRange<{ slug: string; filed_date: string | null }>(
      () =>
        supabase
          .from("filings")
          .select("slug, filed_date")
          .is("superseded_by", null)
          .order("filed_date", { ascending: false }),
      CHUNK_SIZE,
      CHUNK_SIZE
    );

    entries = filings
      .filter((f) => f.slug)
      .map((f) => ({
        url: `${siteUrl}/filings/${f.slug}`,
        lastModified: f.filed_date ? new Date(f.filed_date).toISOString() : now,
        changeFrequency: "monthly",
        priority: 0.7,
      }));
  } catch {
    // Supabase down — return empty sitemap instead of 500
  }

  return new NextResponse(toSitemapXml(entries), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
