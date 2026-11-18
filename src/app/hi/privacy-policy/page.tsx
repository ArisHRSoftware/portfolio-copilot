import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/json-ld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export const metadata: Metadata = {
  title: "गोपनीयता नीति — Privacy Policy",
  description: "Brefyr privacy policy Hindi mein। हम आपका data कैसे collect, use, और protect करते हैं।",
  alternates: {
    canonical: "/hi/privacy-policy",
    languages: { en: "/privacy-policy", hi: "/hi/privacy-policy", "x-default": "/privacy-policy" },
  },
};

export default function HindiPrivacyPolicyPage() {
  return (
    <main className="flex-1 px-4 py-12 max-w-3xl mx-auto w-full prose prose-sm">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "गोपनीयता नीति", url: `${siteUrl}/hi/privacy-policy` },
        ]}
      />
      <h1>गोपनीयता नीति</h1>
      <p className="text-muted-foreground">आखिरी अपडेट: November 2026</p>

      <h2>हम क्या Collect करते हैं</h2>
      <ul>
        <li><strong>Account information:</strong> Email address, name (optional), password (hashed)</li>
        <li><strong>Usage data:</strong> Pages visited, features used, filing views</li>
        <li><strong>Payment data:</strong> Razorpay handles payment — हम card numbers store नहीं करते</li>
        <li><strong>Newsletter:</strong> Email address अगर subscribe करें</li>
      </ul>

      <h2>हम Data कैसे Use करते हैं</h2>
      <ul>
        <li>Account management और authentication</li>
        <li>Filing alerts और digest emails भेजने के लिए</li>
        <li>Service improvement और analytics</li>
        <li>Customer support</li>
      </ul>

      <h2>Data Protection</h2>
      <p>
        आपका data Supabase (PostgreSQL) पर encrypted stored है। Passwords bcrypt hashed हैं।
        HTTPS encryption सभी communications पर। हम data third parties को sell नहीं करते।
      </p>

      <h2>आपके अधिकार</h2>
      <ul>
        <li><strong>Access:</strong> अपना data request कर सकते हैं</li>
        <li><strong>Deletion:</strong> Account delete कर सकते हैं — सारा data permanently remove होगा</li>
        <li><strong>Correction:</strong> गलत data correct करवा सकते हैं</li>
        <li><strong>Unsubscribe:</strong> Newsletter से कभी भी unsubscribe करें</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        हम essential cookies (authentication, preferences) और analytics cookies
        (Google Analytics) use करते हैं। Cookie consent banner पर manage कर सकते हैं।
      </p>

      <h2>कानूनी भाषा</h2>
      <p>
        Privacy policy की precise legal interpretation के लिए English version देखें।
        Hindi translation सुविधा के लिए है।
      </p>

      <p className="text-muted-foreground">
        <Link href="/privacy-policy" className="underline">Complete English privacy policy →</Link>
      </p>
    </main>
  );
}
