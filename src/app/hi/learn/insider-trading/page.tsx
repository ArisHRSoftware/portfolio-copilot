import type { Metadata } from "next";
import Link from "next/link";
import { insiderTradingArticlesHi } from "@/data/learn/hi/insider-trading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbSchema } from "@/components/json-ld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";
export const revalidate = 86400;
export const metadata: Metadata = {
  title: "Insider Trading समझें — Hindi Guides",
  description: "Form 4 कैसे पढ़ें, insider buying signals, cluster buying patterns। Hindi में insider trading guides।",
  alternates: { canonical: "/hi/learn/insider-trading", languages: { en: "/learn/insider-trading", hi: "/hi/learn/insider-trading", "x-default": "/learn/insider-trading" } },
};

export default function HindiInsiderTradingIndexPage() {
  return (
    <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-6">
      <BreadcrumbSchema items={[{ name: "Home", url: siteUrl }, { name: "सीखें", url: `${siteUrl}/hi/learn` }, { name: "Insider Trading", url: `${siteUrl}/hi/learn/insider-trading` }]} />
      <h1 className="text-3xl font-bold">Insider Trading समझें</h1>
      <p className="text-muted-foreground">Form 4 filings, insider buying/selling signals, और cluster buying patterns।</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {insiderTradingArticlesHi.map((a) => (
          <Link key={a.slug} href={`/hi/learn/insider-trading/${a.slug}`} className="group">
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
