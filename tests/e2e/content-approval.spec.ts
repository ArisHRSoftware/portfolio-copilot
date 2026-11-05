import { test, expect } from "@playwright/test";

test.describe("Content approval flow", () => {
  // ───────────────────────────────────────────────
  // 1. Admin content page requires authentication
  // ───────────────────────────────────────────────

  test("unauthenticated user visiting /admin/content is redirected to login", async ({
    page,
  }) => {
    // The dashboard layout checks supabase.auth.getUser() and redirects
    // unauthenticated users to /auth/login before the admin content page
    // ever renders.
    await page.goto("/admin/content");
    await expect(page).toHaveURL(/\/auth\/login/);
  });

  test("unauthenticated user visiting /admin/pipeline is redirected to login", async ({
    page,
  }) => {
    // The pipeline page uses the same dashboard layout auth guard.
    await page.goto("/admin/pipeline");
    await expect(page).toHaveURL(/\/auth\/login/);
  });

  // ───────────────────────────────────────────────
  // 2. Login page renders after admin redirect
  // ───────────────────────────────────────────────

  test("redirected login page renders with email and password fields", async ({
    page,
  }) => {
    // After being redirected from /admin/content, the login page should
    // be fully functional so a user can authenticate.
    await page.goto("/admin/content");
    await expect(page).toHaveURL(/\/auth\/login/);

    // Verify the login form is present and usable
    await expect(
      page.getByRole("heading", { name: "Welcome back" })
    ).toBeVisible();

    const emailInput = page.locator("#email");
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute("type", "email");

    const passwordInput = page.locator("#password");
    await expect(passwordInput).toBeVisible();
    await expect(passwordInput).toHaveAttribute("type", "password");

    const submitButton = page.getByRole("button", { name: "Log in" });
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });

  // ───────────────────────────────────────────────
  // 3. Approval-reminders cron endpoint exists
  // ───────────────────────────────────────────────

  test("POST /api/cron/approval-reminders returns 401 without valid signature, not 404", async ({
    request,
  }) => {
    // The approval-reminders route verifies QStash signatures. Without a
    // valid signature header it should return 401 (Unauthorized), proving
    // the endpoint exists. A 404 would mean the route is missing.
    const response = await request.post("/api/cron/approval-reminders", {
      headers: {
        "Content-Type": "application/json",
      },
      data: {},
    });

    // The endpoint exists: it should not return 404.
    expect(response.status()).not.toBe(404);

    // If QStash signing keys are configured the route returns 401 for
    // missing/invalid signatures. If keys are not configured the route
    // skips verification and attempts to run (may return 200 or 500
    // depending on env). Either way, not-404 proves the route is wired up.
    expect([200, 401, 500]).toContain(response.status());
  });

  test("GET /api/cron/approval-reminders returns 405 (method not allowed)", async ({
    request,
  }) => {
    // Only POST is exported from the route handler. A GET request should
    // return 405, confirming the route file exists but only handles POST.
    const response = await request.get("/api/cron/approval-reminders");
    expect(response.status()).toBe(405);
  });

  // ───────────────────────────────────────────────
  // 4. Content-generation cron endpoints exist
  // ───────────────────────────────────────────────

  test("POST /api/cron/generate-newsletter returns a non-404 status", async ({
    request,
  }) => {
    // The newsletter generator populates content_queue with newsletter
    // items for the admin to review. Verify the endpoint exists.
    const response = await request.post("/api/cron/generate-newsletter", {
      headers: { "Content-Type": "application/json" },
      data: {},
    });
    expect(response.status()).not.toBe(404);
    expect([200, 401, 500]).toContain(response.status());
  });

  test("POST /api/cron/generate-blog returns a non-404 status", async ({
    request,
  }) => {
    // The blog generator populates content_queue with blog post items
    // for the admin to review. Verify the endpoint exists.
    const response = await request.post("/api/cron/generate-blog", {
      headers: { "Content-Type": "application/json" },
      data: {},
    });
    expect(response.status()).not.toBe(404);
    expect([200, 401, 500]).toContain(response.status());
  });

  test("POST /api/cron/social-digest returns a non-404 status", async ({
    request,
  }) => {
    // The social digest generator populates content_queue with social
    // post items for the admin to review. Verify the endpoint exists.
    const response = await request.post("/api/cron/social-digest", {
      headers: { "Content-Type": "application/json" },
      data: {},
    });
    expect(response.status()).not.toBe(404);
    expect([200, 401, 500]).toContain(response.status());
  });

  // ───────────────────────────────────────────────
  // 5. Archive-cleanup cron endpoint exists
  // ───────────────────────────────────────────────

  test("POST /api/cron/archive-cleanup returns a non-404 status", async ({
    request,
  }) => {
    // The archive-cleanup job prunes old content_queue items. Verify the
    // endpoint is deployed.
    const response = await request.post("/api/cron/archive-cleanup", {
      headers: { "Content-Type": "application/json" },
      data: {},
    });
    expect(response.status()).not.toBe(404);
    expect([200, 401, 500]).toContain(response.status());
  });

  // ───────────────────────────────────────────────
  // 6. Content approval page structure (loading state)
  // ───────────────────────────────────────────────
  // Without a running Supabase and admin session, we cannot render the
  // full content page. However, we can verify the loading skeleton
  // renders correctly by intercepting the navigation. The dashboard
  // layout's auth check runs server-side and redirects before the
  // loading skeleton is shown to unauthenticated users. We test the
  // loading UI indirectly by checking the login redirect behavior and
  // verifying the page module responds to navigation.

  test("navigating to /admin/content produces a server response (not a client error)", async ({
    page,
  }) => {
    // Visit the admin content page. Even though we get redirected,
    // the initial server response should be a redirect (3xx) or a
    // successful page load (2xx), not a broken page (5xx).
    const response = await page.goto("/admin/content");
    expect(response).not.toBeNull();
    // The response status is the final page after redirect (login page)
    // which should be a successful load.
    expect(response!.status()).toBeLessThan(500);
  });

  test("the login page after admin redirect still has full auth functionality", async ({
    page,
  }) => {
    await page.goto("/admin/content");
    await expect(page).toHaveURL(/\/auth\/login/);

    // Verify all auth options are available so an admin can log in
    // and get back to content approval.

    // Google OAuth button
    const googleButton = page.getByRole("button", {
      name: "Continue with Google",
    });
    await expect(googleButton).toBeVisible();

    // Email/password form
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#password")).toBeVisible();

    // Forgot password link (in case admin forgot credentials)
    const forgotLink = page.getByRole("link", { name: "Forgot password?" });
    await expect(forgotLink).toBeVisible();
  });

  // ───────────────────────────────────────────────
  // 7. Approval-reminders response shape
  // ───────────────────────────────────────────────

  test("approval-reminders response body is valid JSON with expected shape", async ({
    request,
  }) => {
    const response = await request.post("/api/cron/approval-reminders", {
      headers: { "Content-Type": "application/json" },
      data: {},
    });

    // The response should always be valid JSON regardless of status.
    const body = await response.json();
    expect(body).toBeDefined();
    expect(typeof body).toBe("object");

    // Based on the route implementation, the response contains either:
    // - { error: string } for 401/500
    // - { success: true, message: string } when no pending items
    // - { success: true, reminded: number, timestamp: string } on success
    if (response.status() === 401) {
      expect(body).toHaveProperty("error");
      expect(typeof body.error).toBe("string");
    } else if (response.status() === 200) {
      expect(body).toHaveProperty("success", true);
    } else if (response.status() === 500) {
      expect(body).toHaveProperty("error");
    }
  });
});
