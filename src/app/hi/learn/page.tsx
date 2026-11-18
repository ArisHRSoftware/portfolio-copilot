import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BreadcrumbSchema } from "@/components/json-ld";
import { FileText, BarChart3, TrendingUp } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "सीखें — SEC Filings और US Stock Market",
  description: "SEC filings, insider trading, और sector analysis Hindi में सीखें। भारतीय निवेशकों के लिए free educational guides।",
  alternates: {
    canonical: "/hi/learn",
    languages: { en: "/learn", hi: "/hi/learn", "x-default": "/learn" },
  },
};

const PILLARS = [
  {
    href: "/hi/learn/sec-filings",
    title: "SEC Filings",
    titleHi: "SEC Filings समझें",
    description: "10-K, 10-Q, 8-K कैसे पढ़ें। EDGAR कैसे use करें। भारतीय निवेशकों के लिए step-by-step guides।",
    icon: FileText,
  },
  {
    href: "/hi/learn/sectors",
    title: "Sector Analysis",
    titleHi: "Sector Analysis",
    description: "Technology, Healthcare, Financial, Energy — हर sector की SEC filings कैसे analyze करें।",
    icon: BarChart3,
  },
  {
    href: "/hi/learn/insider-trading",
    title: "Insider Trading",
    titleHi: "Insider Trading समझें",
    description: "Form 4 कैसे पढ़ें। Insider buying signals। Cluster buying patterns। Selling analysis।",
    icon: TrendingUp,
  },
];

export default function HindiLearnPage() {
  return (
    <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "सीखें", url: `${siteUrl}/hi/learn` },
        ]}
      />

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          US Stock Market और SEC Filings सीखें
        </h1>
        <p className="text-muted-foreground text-lg">
          भारतीय निवेशकों के लिए free educational guides — Hindi में।
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {PILLARS.map((p) => (
          <Link key={p.href} href={p.href} className="group">
            <Card className="h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <p.icon className="size-8 text-primary mb-2" />
                <CardTitle className="text-lg">{p.titleHi}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/learn" className="text-sm text-muted-foreground hover:text-foreground">
          English version →
        </Link>
      </div>
    </main>
  );
}
