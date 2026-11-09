import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { OrganizationSchema } from "@/components/json-ld";
import { PostHogProvider } from "@/components/posthog-provider";
import { CookieConsent } from "@/components/cookie-consent";
import { SkipToContent } from "@/components/skip-to-content";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
    default: "Brefyr — SEC Filing Intelligence for Small-Cap Investors",
    template: "%s | Brefyr",
  },
  description:
    "SEC filing analysis for 7,600+ uncovered US small-cap stocks. Instant insider trading alerts, significance scores, and plain-English summaries.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Brefyr",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@brefyr",
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
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <SkipToContent />
        <OrganizationSchema />
        <PostHogProvider>
          <TooltipProvider>
            {children}
            <SiteFooter />
          </TooltipProvider>
          <CookieConsent />
        </PostHogProvider>
      </body>
    </html>
  );
}
