import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Portfolio Copilot privacy policy. Learn how we collect, use, and protect your data.",
  openGraph: {
    title: "Privacy Policy | Portfolio Copilot",
    description:
      "Learn how Portfolio Copilot collects, uses, and protects your data.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">
          Last updated: November 2026
        </p>
      </div>

      <Separator />

      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            1. Information We Collect
          </h2>
          <p>
            When you create an account, we collect your email address and any
            profile information you choose to provide. When you use Portfolio
            Copilot, we collect usage data such as which stock pages you visit,
            alert preferences, and subscription status.
          </p>
          <p>
            We use cookies and similar technologies to maintain your session and
            improve the service. We do not sell or share your personal data with
            third-party advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide and improve the Portfolio Copilot service</li>
            <li>Send filing alerts and email digests based on your preferences</li>
            <li>Process payments and manage your subscription</li>
            <li>Communicate service updates and respond to support requests</li>
            <li>
              Analyze aggregate usage patterns to improve the product (we do not
              track individual investment decisions)
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            3. Data Security
          </h2>
          <p>
            We use industry-standard security measures including encryption in
            transit (TLS), encrypted storage for sensitive data, and secure
            authentication via Supabase Auth. Payment processing is handled by
            Razorpay, and we do not store credit card numbers on our servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            4. Third-Party Services
          </h2>
          <p>
            Portfolio Copilot uses the following third-party services that may
            process your data according to their own privacy policies:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Supabase (authentication and database hosting)</li>
            <li>Razorpay (payment processing)</li>
            <li>Vercel (website hosting)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            5. Data Retention
          </h2>
          <p>
            We retain your account data for as long as your account is active. If
            you delete your account, we remove your personal data within 30 days.
            Anonymized, aggregate usage data may be retained indefinitely to
            improve the service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            6. Your Rights
          </h2>
          <p>
            You can request access to, correction of, or deletion of your
            personal data at any time by contacting us. You can also unsubscribe
            from marketing emails using the link in any email, or adjust alert
            preferences in your account settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            registered users of material changes by email. Continued use of the
            service after changes constitutes acceptance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">8. Contact</h2>
          <p>
            If you have questions about this privacy policy or your data, contact
            us at{" "}
            <a
              href="mailto:privacy@portfoliocopilot.com"
              className="text-primary hover:underline"
            >
              privacy@portfoliocopilot.com
            </a>
            .
          </p>
        </section>
      </div>

      <Separator />

      <div className="flex items-center gap-4">
        <Button variant="outline" render={<Link href="/terms" />}>
          Terms of Service
        </Button>
        <Button variant="outline" render={<Link href="/" />}>
          Home
        </Button>
      </div>
    </main>
  );
}
