"use client";

import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "cn";

interface FreshnessBadgeProps {
  lastFilingDate: string | null; // ISO date string
}

function getFreshnessConfig(lastFilingDate: string | null) {
  if (!lastFilingDate) {
    return {
      label: "No filings on record",
      className: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    };
  }

  const filed = new Date(lastFilingDate);
  const now = new Date();
  const diffMs = now.getTime() - filed.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    // Future date edge case — treat as recent
    return {
      label: "Recent filing: today",
      className:
        "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    };
  }

  if (diffDays <= 30) {
    const daysText = diffDays === 0 ? "today" : diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
    return {
      label: `Recent filing: ${daysText}`,
      className:
        "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    };
  }

  if (diffDays <= 90) {
    return {
      label: `Last filing: ${diffDays} days ago`,
      className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    };
  }

  if (diffDays <= 180) {
    const months = Math.floor(diffDays / 30);
    return {
      label: `Last filing: ${months} month${months === 1 ? "" : "s"} ago`,
      className:
        "bg-orange-500/10 text-orange-500 border-orange-500/20",
    };
  }

  return {
    label: "No recent filings (6+ months)",
    className: "bg-red-500/10 text-red-500 border-red-500/20",
  };
}

export function FreshnessBadge({ lastFilingDate }: FreshnessBadgeProps) {
  const { label, className } = getFreshnessConfig(lastFilingDate);

  return (
    <Badge
      variant="outline"
      className={cn(className, "gap-1")}
    >
      <Clock className="size-3" />
      {label}
    </Badge>
  );
}
