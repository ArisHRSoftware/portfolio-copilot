import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/json-ld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export const metadata: Metadata = {
  title: "सेवा की शर्तें — Terms of Service",
  description: "Brefyr उपयोग की शर्तें Hindi mein। Account creation, acceptable use, और subscription terms।",
  alternates: {
    canonical: "/hi/terms",
    languages: { en: "/terms", hi: "/hi/terms", "x-default": "/terms" },
  },
};

export default function HindiTermsPage() {
  return (
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto w-full prose prose-sm">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "शर्तें", url: `${siteUrl}/hi/terms` },
        ]}
      />
      <h1>सेवा की शर्तें</h1>
      <p className="text-muted-foreground">आखिरी अपडेट: November 2026</p>

      <h2>सेवा का विवरण</h2>
      <p>
        Brefyr एक SEC filing intelligence platform है जो US Securities and Exchange Commission
        (SEC) द्वारा प्रकाशित filings को AI technology से analyze करता है। हम SEC filings की
        summaries, significance scores, insider trading alerts, और related analysis provide करते हैं।
      </p>

      <h2>Account Registration</h2>
      <p>
        Account create करने के लिए valid email address ज़रूरी है। आप अपने account की
        security के लिए responsible हैं। एक person एक account — multiple accounts
        prohibited हैं।
      </p>

      <h2>Subscription और Payment</h2>
      <p>
        Plans yearly billing cycle पर हैं। Free trial 30 दिनों का है। Payment Razorpay
        के through process होती है। Refund policy: पहले 7 दिनों में full refund।
      </p>

      <h2>Acceptable Use</h2>
      <p>
        Brefyr data commercial redistribution prohibited है। API access plan terms के
        अनुसार। Automated scraping prohibited। Rate limits apply।
      </p>

      <h2>कानूनी भाषा</h2>
      <p>
        Legal terms की precise interpretation के लिए कृपया English version देखें।
        Hindi translation सुविधा के लिए है; legal disputes में English version prevail करेगा।
      </p>

      <p className="text-muted-foreground">
        <Link href="/terms" className="underline">Complete English terms →</Link>
      </p>
    </main>
  );
}
