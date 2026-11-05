"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { Button } from "@/components/ui/button";

function getCookie(name: string): string | null {
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie-consent");

    if (consent === "accepted") {
      if (posthog.has_opted_out_capturing?.()) {
        posthog.opt_in_capturing();
      }
      return;
    }

    if (consent === "rejected") {
      if (!posthog.has_opted_out_capturing?.()) {
        posthog.opt_out_capturing();
      }
      return;
    }

    // No cookie set yet — show the banner
    setVisible(true);
  }, []);

  function handleAccept() {
    setCookie("cookie-consent", "accepted", 365);
    if (posthog.has_opted_out_capturing?.()) {
      posthog.opt_in_capturing();
    }
    setVisible(false);
  }

  function handleReject() {
    setCookie("cookie-consent", "rejected", 365);
    posthog.opt_out_capturing();
    setVisible(false);
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transform transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="banner"
      aria-label="Cookie consent"
    >
      <div className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            We use cookies to improve your experience. See our{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline" size="sm" onClick={handleReject}>
              Reject
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
