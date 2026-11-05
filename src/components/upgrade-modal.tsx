"use client";

import Link from "next/link";
import { Zap, Check, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TIERS, type TierName } from "@/lib/constants/tiers";
import { formatPrice, type Currency } from "@/lib/currency";

interface UpgradeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feature: string;
  currentTier: string;
  requiredTier: string;
  currency: Currency;
}

const TIER_FEATURES: Record<string, string[]> = {
  starter: [
    "Track up to 15 stocks",
    "3 custom alert rules",
    "Daily filing digests",
  ],
  plus: [
    "Track up to 50 stocks",
    "10 custom alert rules",
    "Daily filing digests",
    "Filing screener access",
    "Webhook notifications",
  ],
  pro: [
    "Unlimited stock tracking",
    "Unlimited alert rules",
    "Daily filing digests",
    "Filing screener access",
    "Webhook notifications",
    "Full API access",
    "Data export (CSV/JSON)",
  ],
};

export function UpgradeModal({
  open,
  onOpenChange,
  feature,
  currentTier,
  requiredTier,
  currency,
}: UpgradeModalProps) {
  const required = TIERS[requiredTier as TierName];
  const current = TIERS[currentTier as TierName];

  if (!required || !current) return null;

  const price =
    currency === "INR" ? required.priceINR : required.priceUSD;
  const features = TIER_FEATURES[requiredTier] ?? [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10">
            <Zap className="size-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-lg">
            Unlock {feature}
          </DialogTitle>
          <DialogDescription className="text-center">
            This feature requires the{" "}
            <span className="font-medium text-foreground">
              {required.name}
            </span>{" "}
            plan. Upgrade to get access.
          </DialogDescription>
        </DialogHeader>

        {/* Tier comparison */}
        <div className="flex items-center justify-center gap-3 py-2">
          <Badge variant="outline">{current.name}</Badge>
          <ArrowRight className="size-4 text-muted-foreground" />
          <Badge variant="default">{required.name}</Badge>
        </div>

        {/* Feature list */}
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            What you get with {required.name}
          </p>
          <ul className="space-y-2">
            {features.map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div className="text-center">
          <span className="text-2xl font-bold tracking-tight">
            {formatPrice(price, currency)}
          </span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>

        {/* Actions */}
        <DialogFooter className="flex-col gap-2 sm:flex-col">
          <Button render={<Link href="/billing" />} className="w-full">
            <Zap className="size-4" />
            Upgrade to {required.name}
          </Button>
          <Button
            variant="ghost"
            className="w-full"
            onClick={() => onOpenChange(false)}
          >
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
