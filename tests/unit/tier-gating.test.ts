import { describe, it, expect, vi } from "vitest";
import {
  canTrackMoreStocks,
  canAccessScreener,
  canUseAPI,
  canExportData,
  canUseWebhook,
  getAlertDelay,
  getMaxAlertRules,
  getTierInfo,
} from "@/lib/tier-gating";
import { TIERS } from "@/lib/constants/tiers";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** A future date string guaranteed to be after "now" during any test run. */
const FUTURE_DATE = "2099-12-31T23:59:59Z";
/** A past date string guaranteed to be before "now" during any test run. */
const PAST_DATE = "2000-01-01T00:00:00Z";

const USER_ID = "user-test-123";

/**
 * Build a mock Supabase client whose `.from(table)` returns a chainable
 * query builder that resolves to a per-table response.
 *
 * `tableResponses` maps table name -> { data, error, count? }.
 * Any table not in the map resolves to `{ data: null, error: null }`.
 */
function buildMockSupabase(
  tableResponses: Record<
    string,
    { data: unknown; error: unknown; count?: number }
  > = {}
) {
  function createChain(response: {
    data: unknown;
    error: unknown;
    count?: number;
  }) {
    const chain: Record<string, unknown> = {};
    const methods = [
      "select",
      "insert",
      "update",
      "delete",
      "eq",
      "neq",
      "gt",
      "gte",
      "lt",
      "lte",
      "in",
      "is",
      "order",
      "limit",
      "range",
      "single",
      "maybeSingle",
      "filter",
      "match",
      "not",
      "or",
      "contains",
      "overlaps",
      "textSearch",
      "head",
    ];
    for (const m of methods) {
      chain[m] = () => chain;
    }
    // Make the chain thenable so `await supabase.from(...)...` resolves.
    chain.then = (resolve: (v: unknown) => void) =>
      Promise.resolve(response).then(resolve);
    return chain;
  }

  return {
    from: vi.fn((table: string) => {
      const response = tableResponses[table] ?? { data: null, error: null };
      return createChain(response);
    }),
  } as unknown as Parameters<typeof canTrackMoreStocks>[0];
}

/** Shortcut: active subscription row for a given plan. */
function activeSubscription(plan: string) {
  return {
    data: {
      user_id: USER_ID,
      plan,
      status: "active",
      current_period_end: FUTURE_DATE,
    },
    error: null,
  };
}

/** Subscription that is active but has already expired (period end in the past). */
function expiredSubscription(plan: string) {
  return {
    data: {
      user_id: USER_ID,
      plan,
      status: "active",
      current_period_end: PAST_DATE,
    },
    error: null,
  };
}

/** Subscription with a non-active status (cancelled, paused, etc.). */
function cancelledSubscription(plan: string) {
  return {
    data: {
      user_id: USER_ID,
      plan,
      status: "cancelled",
      current_period_end: FUTURE_DATE,
    },
    error: null,
  };
}

/** No subscription row at all (data: null). */
function noSubscription() {
  return { data: null, error: null };
}

// ---------------------------------------------------------------------------
// canTrackMoreStocks
// ---------------------------------------------------------------------------

describe("canTrackMoreStocks", () => {
  // For canTrackMoreStocks we need TWO table responses: subscriptions + user_stocks.
  function buildSupabaseForStocks(
    subscriptionResponse: { data: unknown; error: unknown },
    stockCount: number
  ) {
    return buildMockSupabase({
      subscriptions: subscriptionResponse,
      user_stocks: { data: null, error: null, count: stockCount },
    });
  }

  describe("free tier (limit 3)", () => {
    it("returns true when user has fewer stocks than the limit", async () => {
      const sb = buildSupabaseForStocks(activeSubscription("free"), 2);
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(true);
    });

    it("returns false when user has reached the limit", async () => {
      const sb = buildSupabaseForStocks(activeSubscription("free"), 3);
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(false);
    });

    it("returns false when user exceeds the limit", async () => {
      const sb = buildSupabaseForStocks(activeSubscription("free"), 5);
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(false);
    });

    it("returns true when user has 0 stocks", async () => {
      const sb = buildSupabaseForStocks(activeSubscription("free"), 0);
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(true);
    });
  });

  describe("starter tier (limit 15)", () => {
    it("returns true below limit", async () => {
      const sb = buildSupabaseForStocks(activeSubscription("starter"), 14);
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(true);
    });

    it("returns false at limit", async () => {
      const sb = buildSupabaseForStocks(activeSubscription("starter"), 15);
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(false);
    });
  });

  describe("plus tier (limit 50)", () => {
    it("returns true below limit", async () => {
      const sb = buildSupabaseForStocks(activeSubscription("plus"), 49);
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(true);
    });

    it("returns false at limit", async () => {
      const sb = buildSupabaseForStocks(activeSubscription("plus"), 50);
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(false);
    });
  });

  describe("pro tier (unlimited, -1)", () => {
    it("returns true regardless of stock count", async () => {
      // Pro has stocks === -1 (unlimited) — getUserTier returns early before
      // querying user_stocks, so we only need subscriptions in the mock.
      const sb = buildMockSupabase({
        subscriptions: activeSubscription("pro"),
      });
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(true);
    });

    it("returns true even with a very large stock count", async () => {
      const sb = buildMockSupabase({
        subscriptions: activeSubscription("pro"),
        user_stocks: { data: null, error: null, count: 99999 },
      });
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(true);
    });
  });

  describe("edge cases", () => {
    it("expired subscription falls back to free limit", async () => {
      const sb = buildSupabaseForStocks(expiredSubscription("pro"), 3);
      // Expired pro -> free -> limit 3, count 3 -> false
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(false);
    });

    it("cancelled subscription falls back to free limit", async () => {
      const sb = buildSupabaseForStocks(cancelledSubscription("plus"), 2);
      // Cancelled -> free -> limit 3, count 2 -> true
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(true);
    });

    it("no subscription row falls back to free limit", async () => {
      const sb = buildSupabaseForStocks(noSubscription(), 3);
      expect(await canTrackMoreStocks(sb, USER_ID)).toBe(false);
    });
  });
});

// ---------------------------------------------------------------------------
// canAccessScreener
// ---------------------------------------------------------------------------

describe("canAccessScreener", () => {
  it("returns false for free tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("free") });
    expect(await canAccessScreener(sb, USER_ID)).toBe(false);
  });

  it("returns false for starter tier", async () => {
    const sb = buildMockSupabase({
      subscriptions: activeSubscription("starter"),
    });
    expect(await canAccessScreener(sb, USER_ID)).toBe(false);
  });

  it("returns true for plus tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("plus") });
    expect(await canAccessScreener(sb, USER_ID)).toBe(true);
  });

  it("returns true for pro tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("pro") });
    expect(await canAccessScreener(sb, USER_ID)).toBe(true);
  });

  it("returns false for expired pro subscription", async () => {
    const sb = buildMockSupabase({
      subscriptions: expiredSubscription("pro"),
    });
    expect(await canAccessScreener(sb, USER_ID)).toBe(false);
  });

  it("returns false for cancelled plus subscription", async () => {
    const sb = buildMockSupabase({
      subscriptions: cancelledSubscription("plus"),
    });
    expect(await canAccessScreener(sb, USER_ID)).toBe(false);
  });

  it("returns false when no subscription row exists", async () => {
    const sb = buildMockSupabase({ subscriptions: noSubscription() });
    expect(await canAccessScreener(sb, USER_ID)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// canUseAPI
// ---------------------------------------------------------------------------

describe("canUseAPI", () => {
  it("returns false for free tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("free") });
    expect(await canUseAPI(sb, USER_ID)).toBe(false);
  });

  it("returns false for starter tier", async () => {
    const sb = buildMockSupabase({
      subscriptions: activeSubscription("starter"),
    });
    expect(await canUseAPI(sb, USER_ID)).toBe(false);
  });

  it("returns false for plus tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("plus") });
    expect(await canUseAPI(sb, USER_ID)).toBe(false);
  });

  it("returns true for pro tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("pro") });
    expect(await canUseAPI(sb, USER_ID)).toBe(true);
  });

  it("returns false for expired pro subscription", async () => {
    const sb = buildMockSupabase({
      subscriptions: expiredSubscription("pro"),
    });
    expect(await canUseAPI(sb, USER_ID)).toBe(false);
  });

  it("returns false for cancelled pro subscription", async () => {
    const sb = buildMockSupabase({
      subscriptions: cancelledSubscription("pro"),
    });
    expect(await canUseAPI(sb, USER_ID)).toBe(false);
  });

  it("returns false when no subscription row exists", async () => {
    const sb = buildMockSupabase({ subscriptions: noSubscription() });
    expect(await canUseAPI(sb, USER_ID)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// canExportData
// ---------------------------------------------------------------------------

describe("canExportData", () => {
  it("returns false for free tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("free") });
    expect(await canExportData(sb, USER_ID)).toBe(false);
  });

  it("returns false for starter tier", async () => {
    const sb = buildMockSupabase({
      subscriptions: activeSubscription("starter"),
    });
    expect(await canExportData(sb, USER_ID)).toBe(false);
  });

  it("returns false for plus tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("plus") });
    expect(await canExportData(sb, USER_ID)).toBe(false);
  });

  it("returns true for pro tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("pro") });
    expect(await canExportData(sb, USER_ID)).toBe(true);
  });

  it("returns false for expired pro subscription", async () => {
    const sb = buildMockSupabase({
      subscriptions: expiredSubscription("pro"),
    });
    expect(await canExportData(sb, USER_ID)).toBe(false);
  });

  it("returns false for cancelled pro subscription", async () => {
    const sb = buildMockSupabase({
      subscriptions: cancelledSubscription("pro"),
    });
    expect(await canExportData(sb, USER_ID)).toBe(false);
  });

  it("returns false when no subscription row exists", async () => {
    const sb = buildMockSupabase({ subscriptions: noSubscription() });
    expect(await canExportData(sb, USER_ID)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// canUseWebhook
// ---------------------------------------------------------------------------

describe("canUseWebhook", () => {
  it("returns false for free tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("free") });
    expect(await canUseWebhook(sb, USER_ID)).toBe(false);
  });

  it("returns false for starter tier", async () => {
    const sb = buildMockSupabase({
      subscriptions: activeSubscription("starter"),
    });
    expect(await canUseWebhook(sb, USER_ID)).toBe(false);
  });

  it("returns true for plus tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("plus") });
    expect(await canUseWebhook(sb, USER_ID)).toBe(true);
  });

  it("returns true for pro tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("pro") });
    expect(await canUseWebhook(sb, USER_ID)).toBe(true);
  });

  it("returns false for expired plus subscription", async () => {
    const sb = buildMockSupabase({
      subscriptions: expiredSubscription("plus"),
    });
    expect(await canUseWebhook(sb, USER_ID)).toBe(false);
  });

  it("returns false for cancelled plus subscription", async () => {
    const sb = buildMockSupabase({
      subscriptions: cancelledSubscription("plus"),
    });
    expect(await canUseWebhook(sb, USER_ID)).toBe(false);
  });

  it("returns false when no subscription row exists", async () => {
    const sb = buildMockSupabase({ subscriptions: noSubscription() });
    expect(await canUseWebhook(sb, USER_ID)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// getAlertDelay
// ---------------------------------------------------------------------------

describe("getAlertDelay", () => {
  it("returns -1 for free tier (weekly digest only)", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("free") });
    expect(await getAlertDelay(sb, USER_ID)).toBe(-1);
  });

  it("returns 60 for starter tier (1 hour delay)", async () => {
    const sb = buildMockSupabase({
      subscriptions: activeSubscription("starter"),
    });
    expect(await getAlertDelay(sb, USER_ID)).toBe(60);
  });

  it("returns 0 for plus tier (real-time)", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("plus") });
    expect(await getAlertDelay(sb, USER_ID)).toBe(0);
  });

  it("returns 0 for pro tier (real-time)", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("pro") });
    expect(await getAlertDelay(sb, USER_ID)).toBe(0);
  });

  it("returns -1 for expired subscription (falls back to free)", async () => {
    const sb = buildMockSupabase({
      subscriptions: expiredSubscription("pro"),
    });
    expect(await getAlertDelay(sb, USER_ID)).toBe(-1);
  });

  it("returns -1 for cancelled subscription (falls back to free)", async () => {
    const sb = buildMockSupabase({
      subscriptions: cancelledSubscription("starter"),
    });
    expect(await getAlertDelay(sb, USER_ID)).toBe(-1);
  });

  it("returns -1 when no subscription row exists", async () => {
    const sb = buildMockSupabase({ subscriptions: noSubscription() });
    expect(await getAlertDelay(sb, USER_ID)).toBe(-1);
  });
});

// ---------------------------------------------------------------------------
// getMaxAlertRules
// ---------------------------------------------------------------------------

describe("getMaxAlertRules", () => {
  it("returns 0 for free tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("free") });
    expect(await getMaxAlertRules(sb, USER_ID)).toBe(0);
  });

  it("returns 3 for starter tier", async () => {
    const sb = buildMockSupabase({
      subscriptions: activeSubscription("starter"),
    });
    expect(await getMaxAlertRules(sb, USER_ID)).toBe(3);
  });

  it("returns 10 for plus tier", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("plus") });
    expect(await getMaxAlertRules(sb, USER_ID)).toBe(10);
  });

  it("returns -1 for pro tier (unlimited)", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("pro") });
    expect(await getMaxAlertRules(sb, USER_ID)).toBe(-1);
  });

  it("returns 0 for expired subscription (falls back to free)", async () => {
    const sb = buildMockSupabase({
      subscriptions: expiredSubscription("plus"),
    });
    expect(await getMaxAlertRules(sb, USER_ID)).toBe(0);
  });

  it("returns 0 for cancelled subscription (falls back to free)", async () => {
    const sb = buildMockSupabase({
      subscriptions: cancelledSubscription("pro"),
    });
    expect(await getMaxAlertRules(sb, USER_ID)).toBe(0);
  });

  it("returns 0 when no subscription row exists", async () => {
    const sb = buildMockSupabase({ subscriptions: noSubscription() });
    expect(await getMaxAlertRules(sb, USER_ID)).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// getTierInfo
// ---------------------------------------------------------------------------

describe("getTierInfo", () => {
  it("returns full free tier info for free user", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("free") });
    const info = await getTierInfo(sb, USER_ID);
    expect(info).toEqual({ tier: "free", ...TIERS.free });
  });

  it("returns full starter tier info", async () => {
    const sb = buildMockSupabase({
      subscriptions: activeSubscription("starter"),
    });
    const info = await getTierInfo(sb, USER_ID);
    expect(info).toEqual({ tier: "starter", ...TIERS.starter });
  });

  it("returns full plus tier info", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("plus") });
    const info = await getTierInfo(sb, USER_ID);
    expect(info).toEqual({ tier: "plus", ...TIERS.plus });
  });

  it("returns full pro tier info", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("pro") });
    const info = await getTierInfo(sb, USER_ID);
    expect(info).toEqual({ tier: "pro", ...TIERS.pro });
  });

  it("returns free tier info for expired subscription", async () => {
    const sb = buildMockSupabase({
      subscriptions: expiredSubscription("pro"),
    });
    const info = await getTierInfo(sb, USER_ID);
    expect(info.tier).toBe("free");
    expect(info.stocks).toBe(TIERS.free.stocks);
    expect(info.screener).toBe(false);
    expect(info.api).toBe(false);
  });

  it("returns free tier info for cancelled subscription", async () => {
    const sb = buildMockSupabase({
      subscriptions: cancelledSubscription("plus"),
    });
    const info = await getTierInfo(sb, USER_ID);
    expect(info.tier).toBe("free");
    expect(info).toEqual({ tier: "free", ...TIERS.free });
  });

  it("returns free tier info when no subscription row exists", async () => {
    const sb = buildMockSupabase({ subscriptions: noSubscription() });
    const info = await getTierInfo(sb, USER_ID);
    expect(info).toEqual({ tier: "free", ...TIERS.free });
  });

  it("tier property matches the TIERS constant name", async () => {
    const sb = buildMockSupabase({ subscriptions: activeSubscription("plus") });
    const info = await getTierInfo(sb, USER_ID);
    expect(info.tier).toBe("plus");
    expect(info.name).toBe(TIERS.plus.name);
  });
});
