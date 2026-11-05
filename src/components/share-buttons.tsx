"use client";

import { useState, useCallback } from "react";
import { Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  url: string;
  ticker: string;
  filingType: string;
  oneLiner: string | null;
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function ShareButtons({
  url,
  ticker,
  filingType,
  oneLiner,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const tweetText = `AI caught ${filingType} from $${ticker}: ${oneLiner || filingType + " filing"} — via @portfoliocopilot`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [url]);

  const handleTwitter = useCallback(() => {
    window.open(twitterUrl, "_blank", "noopener,noreferrer,width=550,height=420");
  }, [twitterUrl]);

  const handleLinkedIn = useCallback(() => {
    window.open(linkedinUrl, "_blank", "noopener,noreferrer,width=550,height=550");
  }, [linkedinUrl]);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-muted-foreground mr-1">Share:</span>
      <Button
        variant="outline"
        size="sm"
        className="h-9 px-3"
        onClick={handleTwitter}
      >
        <XIcon className="size-3.5" />
        Post
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="h-9 px-3"
        onClick={handleCopyLink}
      >
        {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
        {copied ? "Copied!" : "Copy Link"}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="h-9 px-3"
        onClick={handleLinkedIn}
      >
        <LinkedInIcon className="size-3.5" />
        LinkedIn
      </Button>
    </div>
  );
}
