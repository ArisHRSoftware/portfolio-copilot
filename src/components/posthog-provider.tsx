"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

function getCookieConsent(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    /(?:^|; )cookie-consent=([^;]*)/
  );
  return match ? decodeURIComponent(match[1]) : null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (key && host) {
      posthog.init(key, {
        api_host: host,
        person_profiles: "identified_only",
        capture_pageview: true,
        capture_pageleave: true,
      });

      // Respect cookie consent state after initialization
      const consent = getCookieConsent();
      if (consent === "rejected") {
        posthog.opt_out_capturing();
      }
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
