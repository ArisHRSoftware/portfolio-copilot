import { NextResponse } from "next/server";
import { siteUrl, toSitemapIndexXml } from "@/lib/sitemap-utils";

export async function GET() {
  const now = new Date().toISOString();

  const xml = toSitemapIndexXml([
    { loc: `${siteUrl}/sitemap-pages.xml`, lastmod: now },
    { loc: `${siteUrl}/sitemap-stocks.xml`, lastmod: now },
    { loc: `${siteUrl}/sitemap-filings-1.xml`, lastmod: now },
    { loc: `${siteUrl}/sitemap-filings-2.xml`, lastmod: now },
  ]);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
