import { test, expect } from "@playwright/test";

test.describe("Auth flow", () => {
  // ───────────────────────────────────────────────
  // 1. Protected route redirect
  // ───────────────────────────────────────────────

  test("protected route /dashboard redirects unauthenticated users to login", async ({
    page,
  }) => {
    await page.goto("/dashboard");
    // The dashboard layout calls redirect("/auth/login") when there is no user.
    await expect(page).toHaveURL(/\/auth\/login/);
  });

  test("protected route /portfolio redirects unauthenticated users to login", async ({
    page,
  }) => {
    await page.goto("/portfolio");
    await expect(page).toHaveURL(/\/auth\/login/);
  });

  test("protected route /settings redirects unauthenticated users to login", async ({
    page,
  }) => {
    await page.goto("/settings");
    await expect(page).toHaveURL(/\/auth\/login/);
  });

  // ───────────────────────────────────────────────
  // 2. Login page renders correctly
  // ───────────────────────────────────────────────

  test("login page renders with email input, password input, and submit button", async ({
    page,
  }) => {
    await page.goto("/auth/login");

    // Page title
    await expect(page).toHaveTitle(/Log In/);

    // Card heading
    await expect(
      page.getByRole("heading", { name: "Welcome back" })
    ).toBeVisible();

    // Card description
    await expect(
      page.getByText("Log in to your Portfolio Copilot account")
    ).toBeVisible();

    // Email input (id="email", type="email", placeholder="you@example.com")
    const emailInput = page.locator("#email");
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute("type", "email");
    await expect(emailInput).toHaveAttribute("placeholder", "you@example.com");

    // Password input (id="password", type="password")
    const passwordInput = page.locator("#password");
    await expect(passwordInput).toBeVisible();
    await expect(passwordInput).toHaveAttribute("type", "password");
    await expect(passwordInput).toHaveAttribute("placeholder", "••••••••");

    // Submit button
    const submitButton = page.getByRole("button", { name: "Log in" });
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });

  test("login page renders Google OAuth button", async ({ page }) => {
    await page.goto("/auth/login");

    const googleButton = page.getByRole("button", {
      name: "Continue with Google",
    });
    await expect(googleButton).toBeVisible();
  });

  test("login page renders 'Or continue with email' separator", async ({
    page,
  }) => {
    await page.goto("/auth/login");

    await expect(page.getByText("Or continue with email")).toBeVisible();
  });

  // ───────────────────────────────────────────────
  // 3. Signup page renders correctly
  // ───────────────────────────────────────────────

  test("signup page renders with registration form fields", async ({
    page,
  }) => {
    await page.goto("/auth/signup");

    // Page title
    await expect(page).toHaveTitle(/Sign Up/);

    // Card heading
    await expect(
      page.getByRole("heading", { name: "Create your account" })
    ).toBeVisible();

    // Card description
    await expect(
      page.getByText(
        "Start tracking SEC filings for free — no credit card required"
      )
    ).toBeVisible();

    // Full name input (id="fullName")
    const fullNameInput = page.locator("#fullName");
    await expect(fullNameInput).toBeVisible();
    await expect(fullNameInput).toHaveAttribute("type", "text");
    await expect(fullNameInput).toHaveAttribute("placeholder", "John Doe");

    // Email input (id="email", type="email")
    const emailInput = page.locator("#email");
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute("type", "email");
    await expect(emailInput).toHaveAttribute("placeholder", "you@example.com");

    // Password input (id="password")
    const passwordInput = page.locator("#password");
    await expect(passwordInput).toBeVisible();
    await expect(passwordInput).toHaveAttribute("type", "password");
    await expect(passwordInput).toHaveAttribute(
      "placeholder",
      "Minimum 8 characters"
    );

    // Submit button
    const submitButton = page.getByRole("button", {
      name: "Create free account",
    });
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });

  test("signup page renders Google OAuth button", async ({ page }) => {
    await page.goto("/auth/signup");

    const googleButton = page.getByRole("button", {
      name: "Continue with Google",
    });
    await expect(googleButton).toBeVisible();
  });

  test("signup page renders 'Or sign up with email' separator", async ({
    page,
  }) => {
    await page.goto("/auth/signup");

    await expect(page.getByText("Or sign up with email")).toBeVisible();
  });

  // ───────────────────────────────────────────────
  // 4. Invalid login shows error message
  // ───────────────────────────────────────────────

  test("submitting login with invalid credentials shows an error message", async ({
    page,
  }) => {
    await page.goto("/auth/login");

    // Fill in invalid credentials
    await page.locator("#email").fill("nonexistent@example.com");
    await page.locator("#password").fill("wrong-password-12345");

    // Submit the form
    await page.getByRole("button", { name: "Log in" }).click();

    // Button should show loading state while request is in flight
    await expect(
      page.getByRole("button", { name: "Logging in..." })
    ).toBeVisible();

    // After the request completes, an error message should appear.
    // Supabase returns "Invalid login credentials" for bad email/password.
    // We look for a .text-destructive element (the error <p> tag).
    const errorMessage = page.locator(".text-destructive");
    await expect(errorMessage).toBeVisible({ timeout: 15_000 });
    await expect(errorMessage).not.toBeEmpty();

    // The submit button should be re-enabled after error
    await expect(
      page.getByRole("button", { name: "Log in" })
    ).toBeEnabled();
  });

  test("login form enforces HTML5 required validation on empty fields", async ({
    page,
  }) => {
    await page.goto("/auth/login");

    // Both fields are marked `required`. Clicking submit without filling
    // them should NOT trigger a navigation or Supabase call.
    const emailInput = page.locator("#email");
    const passwordInput = page.locator("#password");

    // Verify the required attribute is present
    await expect(emailInput).toHaveAttribute("required", "");
    await expect(passwordInput).toHaveAttribute("required", "");
  });

  test("login form enforces minimum password length of 8 characters", async ({
    page,
  }) => {
    await page.goto("/auth/login");

    const passwordInput = page.locator("#password");
    await expect(passwordInput).toHaveAttribute("minlength", "8");
  });

  // ───────────────────────────────────────────────
  // 5. Login page has links to signup and forgot password
  // ───────────────────────────────────────────────

  test("login page has a link to the signup page", async ({ page }) => {
    await page.goto("/auth/login");

    const signupLink = page.getByRole("link", { name: "Sign up free" });
    await expect(signupLink).toBeVisible();
    await expect(signupLink).toHaveAttribute("href", "/auth/signup");
  });

  test("login page has a link to the forgot password page", async ({
    page,
  }) => {
    await page.goto("/auth/login");

    const forgotLink = page.getByRole("link", { name: "Forgot password?" });
    await expect(forgotLink).toBeVisible();
    await expect(forgotLink).toHaveAttribute("href", "/auth/forgot-password");
  });

  test("signup page has a link back to the login page", async ({ page }) => {
    await page.goto("/auth/signup");

    const loginLink = page.getByRole("link", { name: "Log in" });
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveAttribute("href", "/auth/login");
  });

  test("forgot password page has a link back to the login page", async ({
    page,
  }) => {
    await page.goto("/auth/forgot-password");

    const backLink = page.getByRole("link", { name: "Back to login" });
    await expect(backLink).toBeVisible();
    await expect(backLink).toHaveAttribute("href", "/auth/login");
  });

  // ───────────────────────────────────────────────
  // 6. Auth pages are accessible without authentication
  // ───────────────────────────────────────────────

  test("login page loads without redirecting away", async ({ page }) => {
    const response = await page.goto("/auth/login");
    // The page should load successfully (200) and stay on /auth/login
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveURL(/\/auth\/login/);
  });

  test("signup page loads without redirecting away", async ({ page }) => {
    const response = await page.goto("/auth/signup");
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveURL(/\/auth\/signup/);
  });

  test("forgot password page loads without redirecting away", async ({
    page,
  }) => {
    const response = await page.goto("/auth/forgot-password");
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveURL(/\/auth\/forgot-password/);
  });

  // ───────────────────────────────────────────────
  // Bonus: Forgot-password form structure
  // ───────────────────────────────────────────────

  test("forgot password page renders reset form", async ({ page }) => {
    await page.goto("/auth/forgot-password");

    // Heading
    await expect(
      page.getByRole("heading", { name: "Reset your password" })
    ).toBeVisible();

    // Description
    await expect(
      page.getByText("Enter your email and we'll send you a reset link")
    ).toBeVisible();

    // Email input
    const emailInput = page.locator("#email");
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute("type", "email");
    await expect(emailInput).toHaveAttribute("required", "");

    // Submit button
    const submitButton = page.getByRole("button", {
      name: "Send reset link",
    });
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });

  // ───────────────────────────────────────────────
  // Bonus: Navigation between auth pages
  // ───────────────────────────────────────────────

  test("navigating from login to signup via link works", async ({ page }) => {
    await page.goto("/auth/login");

    await page.getByRole("link", { name: "Sign up free" }).click();

    await expect(page).toHaveURL(/\/auth\/signup/);
    await expect(
      page.getByRole("heading", { name: "Create your account" })
    ).toBeVisible();
  });

  test("navigating from signup to login via link works", async ({ page }) => {
    await page.goto("/auth/signup");

    await page.getByRole("link", { name: "Log in" }).click();

    await expect(page).toHaveURL(/\/auth\/login/);
    await expect(
      page.getByRole("heading", { name: "Welcome back" })
    ).toBeVisible();
  });

  test("navigating from login to forgot password via link works", async ({
    page,
  }) => {
    await page.goto("/auth/login");

    await page.getByRole("link", { name: "Forgot password?" }).click();

    await expect(page).toHaveURL(/\/auth\/forgot-password/);
    await expect(
      page.getByRole("heading", { name: "Reset your password" })
    ).toBeVisible();
  });
});
