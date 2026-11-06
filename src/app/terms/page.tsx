import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Brefyr terms of service. Read our terms governing the use of our AI-powered SEC filing analysis platform.",
  openGraph: {
    title: "Terms of Service | Brefyr",
    description:
      "Terms governing the use of Brefyr's AI-powered SEC filing analysis platform.",
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-sm text-muted-foreground">
          Last updated: November 2026
        </p>
      </div>

      <Separator />

      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using Brefyr (&quot;the Service&quot;),
            you agree to be bound by these Terms of Service. If you do not agree,
            you may not use the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            2. Description of Service
          </h2>
          <p>
            Brefyr provides AI-powered analysis of SEC filings for US
            publicly traded companies. The Service includes filing summaries,
            significance scoring, insider trade tracking, and email alerts. The
            Service is provided for informational purposes only.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            3. Not Financial Advice
          </h2>
          <p>
            Brefyr does not provide investment advice, financial
            advice, tax advice, or legal advice. The AI-generated summaries,
            significance scores, and other analysis are for informational
            purposes only and should not be relied upon as a basis for investment
            decisions. Always conduct your own research and consult a qualified
            financial advisor before making investment decisions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            4. User Accounts
          </h2>
          <p>
            You are responsible for maintaining the security of your account
            credentials. You must not share your account or API keys with others.
            You are responsible for all activity under your account.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            5. Subscriptions and Payment
          </h2>
          <p>
            Paid plans are billed monthly. You can cancel at any time, and your
            subscription will remain active until the end of the current billing
            period. Refunds are handled on a case-by-case basis. Prices may
            change with 30 days&apos; notice to existing subscribers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            6. API Usage
          </h2>
          <p>
            API access is available on the Pro plan. You must not exceed
            reasonable rate limits or use the API in a manner that degrades
            service for other users. API keys must be kept confidential and not
            embedded in client-side code.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            7. Accuracy and Limitations
          </h2>
          <p>
            While we strive for accuracy, AI-generated summaries and analysis may
            contain errors. SEC filing data is sourced from public EDGAR filings.
            We make no guarantee that all filings are processed or that analysis
            is error-free. You should verify critical information by reviewing the
            original SEC filing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            8. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Brefyr and its
            operators shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including loss of profits or
            investment losses, arising from your use of the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            9. Prohibited Uses
          </h2>
          <p>You may not use the Service to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Scrape, crawl, or systematically download data in bulk</li>
            <li>Redistribute data or analysis commercially without permission</li>
            <li>Circumvent rate limits or access controls</li>
            <li>Attempt to reverse-engineer AI models or proprietary systems</li>
            <li>Engage in market manipulation or any illegal activity</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            10. Termination
          </h2>
          <p>
            We may suspend or terminate your account for violation of these
            terms. You may delete your account at any time through your account
            settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            11. Changes to Terms
          </h2>
          <p>
            We may update these terms from time to time. Material changes will be
            communicated to registered users by email. Continued use after
            changes constitutes acceptance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">12. Contact</h2>
          <p>
            Questions about these terms? Contact us at{" "}
            <a
              href="mailto:legal@brefyr.com"
              className="text-primary hover:underline"
            >
              legal@brefyr.com
            </a>
            .
          </p>
        </section>
      </div>

      <Separator />

      <div className="flex items-center gap-4">
        <Button variant="outline" render={<Link href="/privacy" />}>
          Privacy Policy
        </Button>
        <Button variant="outline" render={<Link href="/" />}>
          Home
        </Button>
      </div>
    </main>
    </>
  );
}
