import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/json-ld";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export const metadata: Metadata = {
  title: "Disclaimer — Brefyr",
  description:
    "Important disclaimers regarding Brefyr's AI-powered SEC filing analysis. Not financial advice. Consult a qualified financial advisor before making investment decisions.",
  openGraph: {
    title: "Disclaimer | Brefyr",
    description:
      "Important disclaimers regarding Brefyr's AI-powered SEC filing analysis.",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "Disclaimer", url: `${siteUrl}/disclaimer` },
        ]}
      />
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Disclaimer</h1>
          <p className="text-muted-foreground">
            Please read this disclaimer carefully before using Brefyr.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Not Financial Advice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Brefyr provides informational analysis only. Nothing
                on this website constitutes financial advice, investment advice,
                trading advice, or any other form of professional advice.
              </p>
              <p>
                The AI-generated summaries, significance scores, insider trading
                alerts, and other content are provided for informational and
                educational purposes. They should not be relied upon as the sole
                basis for any investment decision.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>No Guarantee of Accuracy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Brefyr uses artificial intelligence to analyze and
                summarize SEC filings. AI-generated summaries may contain errors,
                omissions, or misinterpretations of the source material. While we
                strive for accuracy, we cannot guarantee that any AI-generated
                content is complete, correct, or up to date.
              </p>
              <p>
                Users should always verify information by reviewing the original
                SEC filings directly on{" "}
                <a
                  href="https://www.sec.gov/cgi-bin/browse-edgar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  SEC EDGAR
                </a>
                .
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Past Performance</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Past filings, historical insider trading patterns, and prior
                significance scores do not predict future performance. The
                analysis of historical SEC filings should not be interpreted as
                an indication of future results for any company or security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEC Data and Delays</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                All SEC filing data displayed on Brefyr is sourced
                from the U.S. Securities and Exchange Commission&apos;s EDGAR
                (Electronic Data Gathering, Analysis, and Retrieval) system.
                Filing data may be subject to delays between the time a document
                is filed with the SEC and when it appears on our platform.
              </p>
              <p>
                We do not guarantee real-time availability of filings. Processing
                times vary depending on filing complexity and system load.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consult a Financial Advisor</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                You should consult a qualified financial advisor before making
                any investment decisions. A licensed professional can provide
                personalized advice based on your individual financial situation,
                risk tolerance, and investment goals. Brefyr is not a
                substitute for professional financial guidance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>No Regulatory Affiliation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Brefyr is not affiliated with, endorsed by, or in any
                way officially connected to the U.S. Securities and Exchange
                Commission (SEC) or any other regulatory body. Our use of
                publicly available EDGAR data does not imply any relationship
                with or endorsement by the SEC.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="border-t border-border pt-6 text-xs text-muted-foreground space-y-2">
          <p>
            By using Brefyr, you acknowledge that you have read and
            understood this disclaimer.
          </p>
          <p>
            Questions? Contact us at{" "}
            <a
              href="mailto:support@brefyr.com"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              support@brefyr.com
            </a>
            .
          </p>
          <p>
            <Link
              href="/terms"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Terms of Service
            </Link>
            {" | "}
            <Link
              href="/privacy"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
