import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { OrganizationSchema } from "@/components/json-ld";
import { PostHogProvider } from "@/components/posthog-provider";
import { CookieConsent } from "@/components/cookie-consent";
import { SkipToContent } from "@/components/skip-to-content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio Copilot — AI SEC Filing Analysis for Small-Cap Investors",
    template: "%s | Portfolio Copilot",
  },
  description:
    "AI-powered SEC filing analysis for 2,000+ uncovered US small-cap stocks. Get instant insider trading alerts, significance scores, and plain-English summaries.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://portfoliocopilot.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Portfolio Copilot",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@portfoliocopilot",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SkipToContent />
        <OrganizationSchema />
        <PostHogProvider>
          <TooltipProvider>{children}</TooltipProvider>
          <CookieConsent />
        </PostHogProvider>
      </body>
    </html>
  );
}
