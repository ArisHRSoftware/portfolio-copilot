import { test, expect } from "@playwright/test";

// Lightweight performance checks using Playwright (no Lighthouse dependency)
// For full Lighthouse audits, run: npm run lighthouse

const PUBLIC_PAGES = [
  { path: "/", name: "Landing page" },
  { path: "/pricing", name: "Pricing page" },
  { path: "/disclaimer", name: "Disclaimer page" },
  { path: "/blog", name: "Blog listing" },
  { path: "/archive", name: "Newsletter archive" },
  { path: "/api-docs", name: "API docs" },
  { path: "/insider-buying", name: "Insider buying hub" },
  { path: "/recent-filings", name: "Recent filings hub" },
  { path: "/trending", name: "Trending hub" },
];

test.describe("Performance and accessibility checks", () => {
  for (const { path, name } of PUBLIC_PAGES) {
    test(`${name} (${path}) loads within 5 seconds`, async ({ page }) => {
      const start = Date.now();
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      const loadTime = Date.now() - start;

      expect(response?.status()).toBeLessThan(400);
      expect(loadTime).toBeLessThan(5000);
    });

    test(`${name} (${path}) has correct meta tags for SEO`, async ({
      page,
    }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });

      // Title exists and is non-empty
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
      expect(title.length).toBeLessThanOrEqual(70);

      // Meta description exists
      const metaDesc = await page
        .locator('meta[name="description"]')
        .getAttribute("content");
      expect(metaDesc).toBeTruthy();
      expect(metaDesc!.length).toBeGreaterThan(0);
      expect(metaDesc!.length).toBeLessThanOrEqual(160);

      // Viewport meta tag
      const viewport = await page
        .locator('meta[name="viewport"]')
        .getAttribute("content");
      expect(viewport).toBeTruthy();
    });

    test(`${name} (${path}) has semantic HTML structure`, async ({ page }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });

      // Has a main landmark
      const mainCount = await page.locator("main").count();
      expect(mainCount).toBeGreaterThanOrEqual(1);

      // Has at least one heading
      const headingCount = await page
        .locator("h1, h2, h3, h4, h5, h6")
        .count();
      expect(headingCount).toBeGreaterThan(0);

      // Has only one h1 (SEO best practice)
      const h1Count = await page.locator("h1").count();
      expect(h1Count).toBeLessThanOrEqual(1);

      // HTML lang attribute set
      const lang = await page.locator("html").getAttribute("lang");
      expect(lang).toBeTruthy();
    });

    test(`${name} (${path}) images have alt attributes`, async ({ page }) => {
      await page.goto(path, { waitUntil: "domcontentloaded" });

      const images = page.locator("img");
      const count = await images.count();

      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute("alt");
        // alt should exist (can be empty string for decorative images)
        expect(alt).not.toBeNull();
      }
    });
  }

  test("no console errors on landing page", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        // Ignore known non-critical errors
        if (
          text.includes("Failed to load resource") ||
          text.includes("favicon")
        )
          return;
        errors.push(text);
      }
    });

    await page.goto("/", { waitUntil: "networkidle" });
    expect(errors).toEqual([]);
  });

  test("all internal links are valid on landing page", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });

    const links = await page.locator('a[href^="/"]').all();
    const hrefs = new Set<string>();

    for (const link of links) {
      const href = await link.getAttribute("href");
      if (href) hrefs.add(href);
    }

    // Check a sample of internal links return non-404
    for (const href of Array.from(hrefs).slice(0, 10)) {
      const response = await page.request.get(href);
      expect(
        response.status(),
        `Internal link ${href} returned ${response.status()}`
      ).not.toBe(404);
    }
  });
});
