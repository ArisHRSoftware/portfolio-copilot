import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/json-ld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export const metadata: Metadata = {
  title: "अस्वीकरण — Financial Disclaimer",
  description: "Brefyr financial disclaimer Hindi mein। यह website investment advice नहीं देती। सभी निवेश निर्णय अपने विवेक से लें।",
  alternates: {
    canonical: "/hi/disclaimer",
    languages: { en: "/disclaimer", hi: "/hi/disclaimer", "x-default": "/disclaimer" },
  },
};

export default function HindiDisclaimerPage() {
  return (
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto w-full prose prose-sm">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "अस्वीकरण", url: `${siteUrl}/hi/disclaimer` },
        ]}
      />
      <h1>वित्तीय अस्वीकरण</h1>

      <h2>यह Investment Advice नहीं है</h2>
      <p>
        Brefyr पर दी गई जानकारी केवल शैक्षिक और सूचनात्मक उद्देश्यों के लिए है।
        यह website, इसकी AI-generated summaries, significance scores, और analysis
        किसी भी securities को buy, sell, या hold करने की सलाह (investment advice) नहीं है।
      </p>

      <h2>AI Analysis की सीमाएं</h2>
      <p>
        Brefyr SEC filings analyze करने के लिए artificial intelligence (AI) use करता है।
        AI analysis में errors हो सकती हैं। Significance scores subjective हैं और
        investment decisions का आधार नहीं होने चाहिए। हमेशा original SEC filing verify करें।
      </p>

      <h2>जोखिम चेतावनी</h2>
      <p>
        Securities markets में invest करना inherent risks carry करता है। Past performance
        future results guarantee नहीं करता। आप अपनी invested capital का कुछ या पूरा हिस्सा
        खो सकते हैं। Small-cap stocks particularly volatile और risky होते हैं।
      </p>

      <h2>भारतीय निवेशकों के लिए</h2>
      <p>
        US securities में investment RBI Liberalised Remittance Scheme (LRS) के अंतर्गत
        आता है। LRS limits, tax obligations (LTCG, STCG, dividend withholding), और
        FEMA regulations की जानकारी रखें। Professional tax advisor से consult करें।
      </p>

      <h2>No Guarantee</h2>
      <p>
        Brefyr data accuracy, completeness, या timeliness की कोई guarantee नहीं देता।
        SEC EDGAR official source है — हमेशा EDGAR पर verify करें।
      </p>

      <p className="text-muted-foreground">
        <Link href="/disclaimer" className="underline">English disclaimer →</Link>
      </p>
    </main>
  );
}
