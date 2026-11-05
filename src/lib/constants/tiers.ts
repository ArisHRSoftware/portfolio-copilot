export const TIERS = {
  free: {
    name: "Free",
    stocks: 3,
    alertRules: 0,
    digest: "weekly",
    screener: false,
    api: false,
    export: false,
    webhook: false,
    priceINR: 0,
    priceUSD: 0,
  },
  starter: {
    name: "Starter",
    stocks: 15,
    alertRules: 3,
    digest: "daily",
    screener: false,
    api: false,
    export: false,
    webhook: false,
    priceINR: 249,
    priceUSD: 5,
  },
  plus: {
    name: "Plus",
    stocks: 50,
    alertRules: 10,
    digest: "daily",
    screener: true,
    api: false,
    export: false,
    webhook: true,
    priceINR: 749,
    priceUSD: 9,
  },
  pro: {
    name: "Pro",
    stocks: -1, // unlimited
    alertRules: -1, // unlimited
    digest: "daily",
    screener: true,
    api: true,
    export: true,
    webhook: true,
    priceINR: 1999,
    priceUSD: 29,
  },
} as const;

export type TierName = keyof typeof TIERS;
