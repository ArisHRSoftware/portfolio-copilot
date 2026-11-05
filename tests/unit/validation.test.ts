import { describe, it, expect } from "vitest";
import {
  validateTicker,
  validateEmail,
  validatePlanId,
  validateWebhookUrl,
  validateSignificanceScore,
  validateDateRange,
} from "@/lib/validation";

// ---------------------------------------------------------------------------
// validateTicker
// ---------------------------------------------------------------------------
describe("validateTicker", () => {
  // --- valid inputs ---
  it("accepts a standard uppercase ticker", () => {
    const result = validateTicker("AAPL");
    expect(result).toEqual({ valid: true, value: "AAPL" });
  });

  it("uppercases a lowercase ticker", () => {
    const result = validateTicker("aapl");
    expect(result).toEqual({ valid: true, value: "AAPL" });
  });

  it("accepts a single-character ticker", () => {
    const result = validateTicker("A");
    expect(result).toEqual({ valid: true, value: "A" });
  });

  it("accepts a 5-character ticker (max length)", () => {
    const result = validateTicker("ABCDE");
    expect(result).toEqual({ valid: true, value: "ABCDE" });
  });

  it("trims whitespace around a valid ticker", () => {
    const result = validateTicker("  MSFT  ");
    expect(result).toEqual({ valid: true, value: "MSFT" });
  });

  // --- invalid: non-string types ---
  it("rejects null", () => {
    const result = validateTicker(null);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });

  it("rejects undefined", () => {
    const result = validateTicker(undefined);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });

  it("rejects a number", () => {
    const result = validateTicker(123);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });

  // --- invalid: length ---
  it("rejects an empty string", () => {
    const result = validateTicker("");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/1-5/);
  });

  it("rejects a 6-character ticker (too long)", () => {
    const result = validateTicker("ABCDEF");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/1-5/);
  });

  // --- invalid: forbidden characters ---
  it("rejects a ticker containing numbers", () => {
    const result = validateTicker("AB1");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/letters/i);
  });

  it("rejects a ticker containing spaces", () => {
    const result = validateTicker("AB CD");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/letters/i);
  });

  it("rejects a ticker containing punctuation", () => {
    const result = validateTicker("AB.C");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/letters/i);
  });

  // --- security: injection attempts ---
  it("rejects SQL injection payload", () => {
    const result = validateTicker("'; DROP TABLE--");
    expect(result.valid).toBe(false);
  });

  it("rejects XSS payload", () => {
    const result = validateTicker("<script>alert('xss')</script>");
    expect(result.valid).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// validateEmail
// ---------------------------------------------------------------------------
describe("validateEmail", () => {
  // --- valid inputs ---
  it("accepts a standard email", () => {
    const result = validateEmail("user@example.com");
    expect(result).toEqual({ valid: true, value: "user@example.com" });
  });

  it("lowercases an uppercase email", () => {
    const result = validateEmail("USER@EXAMPLE.COM");
    expect(result).toEqual({ valid: true, value: "user@example.com" });
  });

  it("accepts a minimal valid email (a@b.c)", () => {
    const result = validateEmail("a@b.c");
    expect(result).toEqual({ valid: true, value: "a@b.c" });
  });

  it("trims whitespace around a valid email", () => {
    const result = validateEmail("  test@test.com  ");
    expect(result).toEqual({ valid: true, value: "test@test.com" });
  });

  // --- invalid: non-string types ---
  it("rejects null", () => {
    const result = validateEmail(null);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });

  it("rejects undefined", () => {
    const result = validateEmail(undefined);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });

  it("rejects a number", () => {
    const result = validateEmail(42);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });

  // --- invalid: format ---
  it("rejects an empty string", () => {
    const result = validateEmail("");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/invalid|format/i);
  });

  it("rejects an email without @", () => {
    const result = validateEmail("userexample.com");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/invalid|format/i);
  });

  it("rejects an email without a domain", () => {
    const result = validateEmail("user@");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/invalid|format/i);
  });

  it("rejects an email with spaces", () => {
    const result = validateEmail("user @example.com");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/invalid|format/i);
  });

  // --- invalid: length ---
  it("rejects an email longer than 254 characters", () => {
    const longLocal = "a".repeat(243); // 243 + @ + example.com (11) = 255
    const result = validateEmail(`${longLocal}@example.com`);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/long/i);
  });
});

// ---------------------------------------------------------------------------
// validatePlanId
// ---------------------------------------------------------------------------
describe("validatePlanId", () => {
  // --- valid plans ---
  it.each(["free", "starter", "plus", "pro"])("accepts '%s'", (plan) => {
    const result = validatePlanId(plan);
    expect(result).toEqual({ valid: true, value: plan });
  });

  it("accepts case-insensitive input (FREE)", () => {
    const result = validatePlanId("FREE");
    expect(result).toEqual({ valid: true, value: "free" });
  });

  it("accepts mixed-case input (Starter)", () => {
    const result = validatePlanId("Starter");
    expect(result).toEqual({ valid: true, value: "starter" });
  });

  it("trims whitespace around a valid plan", () => {
    const result = validatePlanId("  pro  ");
    expect(result).toEqual({ valid: true, value: "pro" });
  });

  // --- invalid plans ---
  it("rejects 'enterprise' (not a valid plan)", () => {
    const result = validatePlanId("enterprise");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/must be one of/i);
  });

  it("rejects 'basic' (not a valid plan)", () => {
    const result = validatePlanId("basic");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/must be one of/i);
  });

  it("rejects null", () => {
    const result = validatePlanId(null);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });

  it("rejects an empty string", () => {
    const result = validatePlanId("");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/must be one of/i);
  });

  it("rejects a number", () => {
    const result = validatePlanId(1);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });
});

// ---------------------------------------------------------------------------
// validateWebhookUrl
// ---------------------------------------------------------------------------
describe("validateWebhookUrl", () => {
  // --- valid URLs ---
  it("accepts a basic https URL", () => {
    const result = validateWebhookUrl("https://example.com/webhook");
    expect(result.valid).toBe(true);
    if (result.valid) expect(result.value).toContain("https://example.com/webhook");
  });

  it("accepts an https URL with subdomain, path, and query", () => {
    const result = validateWebhookUrl("https://sub.domain.com/path?query=1");
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.value).toContain("https://sub.domain.com/path");
      expect(result.value).toContain("query=1");
    }
  });

  // --- invalid: wrong protocol ---
  it("rejects an http URL (not https)", () => {
    const result = validateWebhookUrl("http://example.com");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/https/i);
  });

  it("rejects an ftp URL", () => {
    const result = validateWebhookUrl("ftp://example.com");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/https/i);
  });

  // --- invalid: not a URL ---
  it("rejects a plain string that is not a URL", () => {
    const result = validateWebhookUrl("not a url");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/invalid|url/i);
  });

  // --- invalid: non-string types ---
  it("rejects null", () => {
    const result = validateWebhookUrl(null);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });

  it("rejects undefined", () => {
    const result = validateWebhookUrl(undefined);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });

  it("rejects a number", () => {
    const result = validateWebhookUrl(123);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/string/i);
  });
});

// ---------------------------------------------------------------------------
// validateSignificanceScore
// ---------------------------------------------------------------------------
describe("validateSignificanceScore", () => {
  // --- valid scores ---
  it("accepts minimum value (1)", () => {
    expect(validateSignificanceScore(1)).toEqual({ valid: true, value: 1 });
  });

  it("accepts mid-range value (5)", () => {
    expect(validateSignificanceScore(5)).toEqual({ valid: true, value: 5 });
  });

  it("accepts maximum value (10)", () => {
    expect(validateSignificanceScore(10)).toEqual({ valid: true, value: 10 });
  });

  it("accepts a string number and coerces it", () => {
    expect(validateSignificanceScore("5")).toEqual({ valid: true, value: 5 });
  });

  // --- invalid: out of range ---
  it("rejects 0 (below minimum)", () => {
    const result = validateSignificanceScore(0);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/1-10/);
  });

  it("rejects 11 (above maximum)", () => {
    const result = validateSignificanceScore(11);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/1-10/);
  });

  it("rejects -1 (negative)", () => {
    const result = validateSignificanceScore(-1);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/1-10/);
  });

  // --- invalid: non-integer ---
  it("rejects a decimal (1.5)", () => {
    const result = validateSignificanceScore(1.5);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/integer/i);
  });

  // --- invalid: non-numeric types ---
  it("rejects a non-numeric string", () => {
    const result = validateSignificanceScore("abc");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/integer/i);
  });

  it("rejects null", () => {
    const result = validateSignificanceScore(null);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/integer/i);
  });

  it("rejects undefined", () => {
    const result = validateSignificanceScore(undefined);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/integer/i);
  });
});

// ---------------------------------------------------------------------------
// validateDateRange
// ---------------------------------------------------------------------------
describe("validateDateRange", () => {
  // --- valid ranges ---
  it("accepts a valid date range (start before end)", () => {
    const result = validateDateRange("2024-01-01", "2024-12-31");
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.start).toBeInstanceOf(Date);
      expect(result.end).toBeInstanceOf(Date);
      expect(result.start.getTime()).toBeLessThan(result.end.getTime());
    }
  });

  it("accepts consecutive days", () => {
    const result = validateDateRange("2024-06-15", "2024-06-16");
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.start.toISOString()).toContain("2024-06-15");
      expect(result.end.toISOString()).toContain("2024-06-16");
    }
  });

  // --- invalid: same date ---
  it("rejects when start and end are the same date", () => {
    const result = validateDateRange("2024-06-15", "2024-06-15");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/before/i);
  });

  // --- invalid: end before start ---
  it("rejects when end date is before start date", () => {
    const result = validateDateRange("2024-12-31", "2024-01-01");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/before/i);
  });

  // --- invalid: bad date strings ---
  it("rejects an invalid start date string", () => {
    const result = validateDateRange("not-a-date", "2024-12-31");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/start date/i);
  });

  it("rejects an invalid end date string", () => {
    const result = validateDateRange("2024-01-01", "not-a-date");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/end date/i);
  });

  it("rejects when both date strings are invalid", () => {
    const result = validateDateRange("foo", "bar");
    expect(result.valid).toBe(false);
  });

  // --- invalid: non-string types ---
  it("rejects non-string start (number)", () => {
    const result = validateDateRange(20240101, "2024-12-31");
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/strings/i);
  });

  it("rejects non-string end (null)", () => {
    const result = validateDateRange("2024-01-01", null);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/strings/i);
  });

  it("rejects when both arguments are non-strings", () => {
    const result = validateDateRange(undefined, undefined);
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toMatch(/strings/i);
  });
});
