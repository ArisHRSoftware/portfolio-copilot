import type { Metadata } from "next";
import Link from "next/link";
import { secFilingArticlesHi } from "@/data/learn/hi/sec-filings";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbSchema } from "@/components/json-ld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "SEC Filings कैसे पढ़ें — Hindi Guides",
  description: "SEC filings (10-K, 10-Q, 8-K) कैसे पढ़ें और समझें। EDGAR use करना सीखें। भारतीय निवेशकों के लिए Hindi guides।",
  alternates: { canonical: "/hi/learn/sec-filings", languages: { en: "/learn/sec-filings", hi: "/hi/learn/sec-filings", "x-default": "/learn/sec-filings" } },
};

export default function HindiSecFilingsIndexPage() {
  return (
    <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-6">
      <BreadcrumbSchema items={[{ name: "Home", url: siteUrl }, { name: "सीखें", url: `${siteUrl}/hi/learn` }, { name: "SEC Filings", url: `${siteUrl}/hi/learn/sec-filings` }]} />
      <h1 className="text-3xl font-bold">SEC Filings समझें</h1>
      <p className="text-muted-foreground">10-K, 10-Q, 8-K — SEC filings कैसे पढ़ें और EDGAR कैसे use करें।</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {secFilingArticlesHi.map((a) => (
          <Link key={a.slug} href={`/hi/learn/sec-filings/${a.slug}`} className="group">
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
