import type { Metadata } from "next";
import Link from "next/link";
import { sectorArticlesHi } from "@/data/learn/hi/sectors";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbSchema } from "@/components/json-ld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";
export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Sector Analysis — Hindi Guides",
  description: "Technology, Healthcare, Financial, Energy sectors की SEC filings कैसे analyze करें। Hindi guides।",
  alternates: { canonical: "/hi/learn/sectors", languages: { en: "/learn/sectors", hi: "/hi/learn/sectors", "x-default": "/learn/sectors" } },
};

export default function HindiSectorsIndexPage() {
  return (
    <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-6">
      <BreadcrumbSchema items={[{ name: "Home", url: siteUrl }, { name: "सीखें", url: `${siteUrl}/hi/learn` }, { name: "Sectors", url: `${siteUrl}/hi/learn/sectors` }]} />
      <h1 className="text-3xl font-bold">Sector Analysis</h1>
      <p className="text-muted-foreground">हर sector की SEC filings अलग होती हैं — यहाँ सीखें कैसे analyze करें।</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {sectorArticlesHi.map((a) => (
          <Link key={a.slug} href={`/hi/learn/sectors/${a.slug}`} className="group">
            <Card className="h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex gap-2 mb-1"><Badge variant="outline" className="text-xs">{a.difficulty}</Badge><Badge variant="secondary" className="text-xs">{a.readingTime} min</Badge></div>
                <CardTitle className="text-base">{a.title}</CardTitle>
                <CardDescription className="line-clamp-2">{a.metaDescription}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
