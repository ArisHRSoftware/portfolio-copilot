import { test, expect } from "@playwright/test";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Collect console errors during a page visit. */
function collectConsoleErrors(page: import("@playwright/test").Page) {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(msg.text());
    }
  });
  return errors;
}

// ---------------------------------------------------------------------------
// 1. Landing page
// ---------------------------------------------------------------------------

test.describe("Landing page", () => {
  test("renders hero, pricing CTA, and footer", async ({ page }) => {
    const errors = collectConsoleErrors(page);

    await page.goto("/");

    // Title contains the product name
    await expect(page).toHaveTitle(/Portfolio Copilot/i);

    // Hero section — heading visible
    const hero = page.locator("h1");
    await expect(hero.first()).toBeVisible();
    await expect(hero.first()).toContainText("SEC filing");

    // Pricing / CTA section — "Start Free" or "Compare Plans" link present
    await expect(
      page.getByRole("link", { name: /Start Free|Compare Plans/i }).first()
    ).toBeVisible();

    // Footer — contains product name and copyright
    const footer = page.locator("footer");
    await expect(footer).toContainText("Portfolio Copilot");

    // No console errors (ignoring hydration-safe noise)
    const meaningful = errors.filter(
      (e) => !e.includes("Download the React DevTools")
    );
    expect(meaningful).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// 2. Stock page /stocks/AAPL — may 404 if not in DB
// ---------------------------------------------------------------------------

test.describe("Stock page", () => {
  test("renders stock details or a meaningful not-found message", async ({
    page,
  }) => {
    const response = await page.goto("/stocks/AAPL");
    expect(response).not.toBeNull();
    const status = response!.status();

    if (status === 200) {
      // Successful render — check for ticker badge and page structure
      const heading = page.locator("h1").first();
      await expect(heading).toBeVisible();

      // Ticker badge should be somewhere on the page
      await expect(page.locator("text=AAPL").first()).toBeVisible();

      // Filing Timeline section exists
      await expect(
        page.getByRole("heading", { name: /Filing Timeline/i })
      ).toBeVisible();
    } else {
      // Not-found state — the page component renders its own 404 UI
      // (status may still be 200 since Next.js SSR returns the shell)
      const body = await page.textContent("body");
      expect(body).toContain("Stock Not Found");
    }
  });

  test("shows not-found UI for a clearly invalid ticker", async ({ page }) => {
    await page.goto("/stocks/ZZZZZZNOTREAL");

    // The page renders a not-found message rather than crashing
    await expect(page.locator("h1")).toContainText("Stock Not Found");
    await expect(page.locator("text=ZZZZZZNOTREAL")).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// 3. Filing page with non-existent slug — expect 404 UI
// ---------------------------------------------------------------------------

test.describe("Filing page (non-existent)", () => {
  test("shows filing-not-found message for a bogus slug", async ({ page }) => {
    await page.goto("/filings/this-filing-does-not-exist-xyz");

    await expect(page.locator("h1")).toContainText("Filing Not Found");
    await expect(
      page.locator("text=does not exist").or(page.locator("text=not been processed"))
    ).toBeVisible();

    // Offers a way to navigate away
    await expect(
      page.getByRole("link", { name: /Browse Recent Filings/i })
    ).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// 4. Hub pages
// ---------------------------------------------------------------------------

test.describe("Hub pages", () => {
  test("insider buying page renders heading", async ({ page }) => {
    await page.goto("/insider-buying");
    await expect(page.locator("h1")).toContainText("Insider Buying");
  });

  test("insider selling page renders heading", async ({ page }) => {
    await page.goto("/insider-selling");
    await expect(page.locator("h1")).toContainText("Insider Selling");
  });

  test("earnings this week page renders heading", async ({ page }) => {
    await page.goto("/earnings-this-week");
    await expect(page.locator("h1")).toContainText("Earnings This Week");
  });

  test("recent filings page renders heading", async ({ page }) => {
    await page.goto("/recent-filings");
    await expect(page).toHaveTitle(/Recent SEC Filings/i);
    await expect(page.locator("main")).toBeVisible();
  });

  test("trending page renders heading", async ({ page }) => {
    await page.goto("/trending");
    await expect(page.locator("h1")).toContainText("Trending Stocks");
  });
});

// ---------------------------------------------------------------------------
// 5. Blog listing
// ---------------------------------------------------------------------------

test.describe("Blog listing", () => {
  test("renders blog page heading", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.locator("h1")).toContainText("Blog");
    await expect(page).toHaveTitle(/Blog/i);
  });
});

// ---------------------------------------------------------------------------
// 6. Newsletter archive
// ---------------------------------------------------------------------------

test.describe("Newsletter archive", () => {
  test("renders archive heading", async ({ page }) => {
    await page.goto("/archive");
    await expect(page.locator("h1")).toContainText("Newsletter Archive");
    await expect(page).toHaveTitle(/Newsletter Archive/i);
  });
});

// ---------------------------------------------------------------------------
// 7. Pricing page
// ---------------------------------------------------------------------------

test.describe("Pricing page", () => {
  test("shows all four tier names", async ({ page }) => {
    await page.goto("/pricing");

    await expect(page.locator("h1")).toContainText("Pricing");

    // All tier names visible
    for (const tier of ["Free", "Starter", "Plus", "Pro"]) {
      await expect(page.locator(`text=${tier}`).first()).toBeVisible();
    }
  });

  test("shows USD price amounts", async ({ page }) => {
    await page.goto("/pricing");

    // Free tier shows $0, Starter $5, Plus $9, Pro $29
    await expect(page.locator("text=$0").first()).toBeVisible();
    await expect(page.locator("text=$5").first()).toBeVisible();
    await expect(page.locator("text=$9").first()).toBeVisible();
    await expect(page.locator("text=$29").first()).toBeVisible();
  });

  test("shows INR pricing for paid tiers", async ({ page }) => {
    await page.goto("/pricing");

    // INR amounts rendered with ₹ symbol — check at least one is present
    await expect(page.locator("text=/\\u20B9/").first()).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// 8. Disclaimer page
// ---------------------------------------------------------------------------

test.describe("Disclaimer page", () => {
  test("shows investment disclaimer content", async ({ page }) => {
    await page.goto("/disclaimer");

    await expect(page.locator("h1")).toContainText("Disclaimer");
    await expect(page).toHaveTitle(/Disclaimer/i);

    // Key disclaimer sections present
    await expect(page.locator("text=Not Financial Advice")).toBeVisible();
    await expect(page.locator("text=No Guarantee of Accuracy")).toBeVisible();
    await expect(
      page.locator("text=Consult a Financial Advisor")
    ).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// 9. API docs
// ---------------------------------------------------------------------------

test.describe("API docs page", () => {
  test("shows API documentation heading and endpoint descriptions", async ({
    page,
  }) => {
    await page.goto("/api-docs");

    await expect(page.locator("h1")).toContainText(
      "Filing Intelligence API"
    );
    await expect(page).toHaveTitle(/API Documentation/i);

    // Endpoint cards present
    await expect(
      page.locator("text=GET /api/v1/filings").first()
    ).toBeVisible();
    await expect(
      page.locator("text=GET /api/v1/companies").first()
    ).toBeVisible();
    await expect(
      page.locator("text=GET /api/v1/insider-trades").first()
    ).toBeVisible();
    await expect(
      page.locator("text=GET /api/v1/export").first()
    ).toBeVisible();

    // Authentication section
    await expect(
      page.getByRole("heading", { name: /Authentication/i })
    ).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// 10. RSS feed — non-HTML route
// ---------------------------------------------------------------------------

test.describe("RSS feed", () => {
  test("returns XML content type", async ({ page }) => {
    const response = await page.request.get("/feed.xml");

    expect(response.status()).toBe(200);

    const contentType = response.headers()["content-type"] ?? "";
    expect(contentType).toContain("xml");

    const body = await response.text();
    expect(body).toContain("<?xml");
    expect(body).toContain("<rss");
    expect(body).toContain("Portfolio Copilot");
  });
});

// ---------------------------------------------------------------------------
// 11. llms.txt — non-HTML route
// ---------------------------------------------------------------------------

test.describe("llms.txt", () => {
  test("returns text/plain content type with site info", async ({ page }) => {
    const response = await page.request.get("/llms.txt");

    expect(response.status()).toBe(200);

    const contentType = response.headers()["content-type"] ?? "";
    expect(contentType).toContain("text/plain");

    const body = await response.text();
    expect(body).toContain("Portfolio Copilot");
    expect(body).toContain("SEC filing");
  });
});

// ---------------------------------------------------------------------------
// 12. robots.txt — Next.js metadata file
// ---------------------------------------------------------------------------

test.describe("robots.txt", () => {
  test("returns text content mentioning sitemap", async ({ page }) => {
    const response = await page.request.get("/robots.txt");

    expect(response.status()).toBe(200);

    const body = await response.text();
    expect(body.toLowerCase()).toContain("sitemap");
    expect(body.toLowerCase()).toContain("user-agent");
  });
});

// ---------------------------------------------------------------------------
// 13. Sitemap — Next.js metadata file
// ---------------------------------------------------------------------------

test.describe("Sitemap", () => {
  test("returns valid XML sitemap", async ({ page }) => {
    const response = await page.request.get("/sitemap.xml");

    expect(response.status()).toBe(200);

    const contentType = response.headers()["content-type"] ?? "";
    expect(contentType).toContain("xml");

    const body = await response.text();
    expect(body).toContain("<?xml");
    expect(body.toLowerCase()).toContain("urlset");
  });
});
