import { test, expect } from "@playwright/test";

/**
 * E2E tests for payment flows (Razorpay).
 *
 * These tests validate the pricing page UI, tier rendering, currency display,
 * CTA buttons, and auth gating on the billing page. They do NOT attempt actual
 * Razorpay checkout because that requires test keys and a running payment backend.
 */

// ---------------------------------------------------------------------------
// Tier definitions — mirrored from src/lib/constants/tiers.ts so tests stay
// self-contained and can detect drift between constants and rendered UI.
// ---------------------------------------------------------------------------

const TIERS = {
  free: { name: "Free", priceUSD: 0, priceINR: 0 },
  starter: { name: "Starter", priceUSD: 5, priceINR: 249 },
  plus: { name: "Plus", priceUSD: 9, priceINR: 749 },
  pro: { name: "Pro", priceUSD: 29, priceINR: 1999 },
} as const;

const PAID_TIERS = ["starter", "plus", "pro"] as const;

// ---------------------------------------------------------------------------
// 1. Pricing page renders all tiers
// ---------------------------------------------------------------------------

test.describe("Pricing page — tier rendering", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/pricing");
  });

  test("displays the pricing page heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /simple, transparent pricing/i })
    ).toBeVisible();
  });

  test("shows all four tier names", async ({ page }) => {
    for (const tier of Object.values(TIERS)) {
      // Each tier name appears as a CardTitle
      await expect(page.getByText(tier.name, { exact: true }).first()).toBeVisible();
    }
  });

  test("renders the correct USD price for every tier", async ({ page }) => {
    // Free tier shows "$0"
    await expect(page.getByText("$0").first()).toBeVisible();

    // Paid tiers show "$X" as the primary price
    for (const key of PAID_TIERS) {
      const tier = TIERS[key];
      await expect(
        page.getByText(`$${tier.priceUSD}`).first()
      ).toBeVisible();
    }
  });

  test("renders INR prices as secondary text for paid tiers", async ({ page }) => {
    // The pricing page renders INR with the rupee sign (&#x20B9; -> ₹)
    // followed by the amount and "/month"
    for (const key of PAID_TIERS) {
      const tier = TIERS[key];
      // INR price appears in a <p> like "or ₹249/month"
      await expect(
        page.getByText(new RegExp(`₹${tier.priceINR.toLocaleString("en-IN")}`, "i")).first()
      ).toBeVisible();
    }
  });

  test("shows 'Free forever' label for the free tier", async ({ page }) => {
    await expect(page.getByText("Free forever")).toBeVisible();
  });

  test("marks the Plus tier as popular", async ({ page }) => {
    await expect(page.getByText("Popular")).toBeVisible();
  });

  test("displays feature rows for each tier card", async ({ page }) => {
    // Spot-check key features that appear across tiers
    await expect(page.getByText("3 tracked stocks")).toBeVisible();
    await expect(page.getByText("15 tracked stocks")).toBeVisible();
    await expect(page.getByText("50 tracked stocks")).toBeVisible();
    await expect(page.getByText("Unlimited stocks")).toBeVisible();

    // Email digest variants
    await expect(page.getByText("Weekly email digest")).toBeVisible();
    await expect(page.getByText("Daily email digest").first()).toBeVisible();

    // Pro-only features
    await expect(page.getByText("API access").first()).toBeVisible();
    await expect(page.getByText("Data export (CSV)").first()).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// 2. Currency display — both INR and USD shown simultaneously
// ---------------------------------------------------------------------------

test.describe("Pricing page — dual currency display", () => {
  test("shows USD as primary and INR as secondary for paid tiers", async ({ page }) => {
    await page.goto("/pricing");

    // The Starter card should show "$5" and "₹249"
    const starterUSD = page.getByText("$5").first();
    const starterINR = page.getByText(/₹249/).first();

    await expect(starterUSD).toBeVisible();
    await expect(starterINR).toBeVisible();

    // The Pro card should show "$29" and "₹1,999"
    const proUSD = page.getByText("$29").first();
    const proINR = page.getByText(/₹1,999/).first();

    await expect(proUSD).toBeVisible();
    await expect(proINR).toBeVisible();
  });

  test("does not show INR price for the free tier", async ({ page }) => {
    await page.goto("/pricing");

    // Free tier renders "Free forever" instead of an INR line
    // Verify there is no "₹0" on the page
    await expect(page.getByText(/₹0/)).not.toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// 3. Free tier has no buy button — shows "Get Started Free"
// ---------------------------------------------------------------------------

test.describe("Pricing page — free tier CTA", () => {
  test("free tier button says 'Get Started Free' and links to signup", async ({ page }) => {
    await page.goto("/pricing");

    const freeButton = page.getByRole("link", { name: "Get Started Free" });
    await expect(freeButton).toBeVisible();
    await expect(freeButton).toHaveAttribute("href", "/auth/signup");
  });

  test("free tier button does NOT say 'Start 7-Day Trial'", async ({ page }) => {
    await page.goto("/pricing");

    // The free tier card is the first card. Its CTA should NOT mention a trial.
    // All four cards are in a grid; the free tier is the first one.
    const cards = page.locator('[class*="card"]').filter({ hasText: "Free forever" });
    await expect(cards.getByText("Start 7-Day Trial")).not.toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// 4. Paid tiers have subscribe CTAs
// ---------------------------------------------------------------------------

test.describe("Pricing page — paid tier CTAs", () => {
  test("all paid tiers show 'Start 7-Day Trial' buttons", async ({ page }) => {
    await page.goto("/pricing");

    // There should be exactly 3 "Start 7-Day Trial" links (starter, plus, pro)
    const trialButtons = page.getByRole("link", { name: "Start 7-Day Trial" });
    await expect(trialButtons).toHaveCount(3);
  });

  test("paid tier CTAs link to signup with the plan query param", async ({ page }) => {
    await page.goto("/pricing");

    for (const key of PAID_TIERS) {
      const link = page
        .getByRole("link", { name: "Start 7-Day Trial" })
        .and(page.locator(`[href="/auth/signup?plan=${key}"]`));
      await expect(link).toBeVisible();
    }
  });
});

// ---------------------------------------------------------------------------
// 5. FAQ section renders
// ---------------------------------------------------------------------------

test.describe("Pricing page — FAQ section", () => {
  test("renders the FAQ heading and all questions", async ({ page }) => {
    await page.goto("/pricing");

    await expect(
      page.getByRole("heading", { name: /frequently asked questions/i })
    ).toBeVisible();

    const questions = [
      "Can I switch plans anytime?",
      "What payment methods do you accept?",
      "Is there a free trial?",
      "What SEC filings do you cover?",
    ];

    for (const q of questions) {
      await expect(page.getByText(q)).toBeVisible();
    }
  });

  test("FAQ mentions Razorpay as a payment method", async ({ page }) => {
    await page.goto("/pricing");

    await expect(page.getByText(/razorpay/i)).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// 6. Billing page requires authentication
// ---------------------------------------------------------------------------

test.describe("Billing page — auth gating", () => {
  test("redirects unauthenticated users to the login page", async ({ page }) => {
    // Navigate to /billing without being logged in.
    // The (dashboard) layout and the billing page both call redirect("/auth/login")
    // when there is no authenticated user.
    await page.goto("/billing");

    // After the server-side redirect, the URL should contain /auth/login
    await page.waitForURL(/\/auth\/login/, { timeout: 15_000 });
    expect(page.url()).toContain("/auth/login");
  });

  test("login page renders after billing redirect", async ({ page }) => {
    await page.goto("/billing");

    await page.waitForURL(/\/auth\/login/, { timeout: 15_000 });

    // The login page should have rendered its form
    await expect(page.getByText(/log in/i).first()).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// 7. Pricing page metadata and accessibility
// ---------------------------------------------------------------------------

test.describe("Pricing page — metadata and structure", () => {
  test("page has correct title", async ({ page }) => {
    await page.goto("/pricing");

    await expect(page).toHaveTitle(/pricing/i);
  });

  test("pricing grid has exactly 4 tier cards", async ({ page }) => {
    await page.goto("/pricing");

    // Each tier renders a Card with a CardTitle. Count the tier name headings.
    // The tier names (Free, Starter, Plus, Pro) appear as CardTitle elements.
    // We also have FAQ cards, so we scope to the pricing grid area.
    const pricingGrid = page.locator(".grid.gap-6");
    const tierCards = pricingGrid.locator("> div");
    await expect(tierCards).toHaveCount(4);
  });

  test("all CTA buttons are keyboard-focusable links", async ({ page }) => {
    await page.goto("/pricing");

    // All four CTAs are <a> elements (via the Link render prop on Button)
    const allCTAs = page.getByRole("link", {
      name: /get started free|start 7-day trial/i,
    });
    await expect(allCTAs).toHaveCount(4);

    // Verify each is focusable (has no tabindex=-1)
    for (const cta of await allCTAs.all()) {
      const tabindex = await cta.getAttribute("tabindex");
      expect(tabindex).not.toBe("-1");
    }
  });
});

// ---------------------------------------------------------------------------
// 8. Pricing page — "/month" label logic
// ---------------------------------------------------------------------------

test.describe("Pricing page — per-month labels", () => {
  test("paid tiers show '/month' after the price", async ({ page }) => {
    await page.goto("/pricing");

    // Each paid tier has a "/month" span next to the USD price
    const monthLabels = page.getByText("/month");
    // 3 paid tiers showing "/month" next to USD price + 3 paid tiers showing
    // "or ₹X/month" = at least 3 visible instances (the INR lines include /month too)
    const count = await monthLabels.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("free tier does not show '/month'", async ({ page }) => {
    await page.goto("/pricing");

    // The free card contains "Free forever" but not "/month" in the price section.
    // We find the card containing "$0" and verify it does not also contain "/month"
    // next to the price (the "/month" span only renders when priceUSD > 0).
    const freeCard = page.locator('[class*="card"]').filter({ hasText: "Free forever" });
    // The "$0" element should exist, but there should be no sibling "/month"
    await expect(freeCard.getByText("$0")).toBeVisible();
    // The span with "/month" should not exist within the price block of the free card.
    // Note: "/month" text may appear elsewhere on the page, so we scope to the card's
    // price area (the div.space-y-1 containing the price).
    const priceBlock = freeCard.locator(".space-y-1").first();
    await expect(priceBlock.getByText("/month")).not.toBeVisible();
  });
});
