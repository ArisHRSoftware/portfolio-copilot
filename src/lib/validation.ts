type ValidationResult =
  | { valid: true; value: string }
  | { valid: false; error: string };

type NumericValidationResult =
  | { valid: true; value: number }
  | { valid: false; error: string };

export function validateTicker(ticker: unknown): ValidationResult {
  if (typeof ticker !== "string") {
    return { valid: false, error: "Ticker must be a string" };
  }
  const cleaned = ticker.trim().toUpperCase();
  if (cleaned.length < 1 || cleaned.length > 5) {
    return { valid: false, error: "Ticker must be 1-5 characters" };
  }
  if (!/^[A-Z]+$/.test(cleaned)) {
    return { valid: false, error: "Ticker must contain only letters" };
  }
  return { valid: true, value: cleaned };
}

export function validateEmail(email: unknown): ValidationResult {
  if (typeof email !== "string") {
    return { valid: false, error: "Email must be a string" };
  }
  const cleaned = email.trim().toLowerCase();
  if (cleaned.length > 254) {
    return { valid: false, error: "Email is too long" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) {
    return { valid: false, error: "Invalid email format" };
  }
  return { valid: true, value: cleaned };
}

const VALID_PLANS = ["free", "starter", "plus", "pro"] as const;

export function validatePlanId(plan: unknown): ValidationResult {
  if (typeof plan !== "string") {
    return { valid: false, error: "Plan must be a string" };
  }
  const cleaned = plan.trim().toLowerCase();
  if (!VALID_PLANS.includes(cleaned as (typeof VALID_PLANS)[number])) {
    return {
      valid: false,
      error: `Plan must be one of: ${VALID_PLANS.join(", ")}`,
    };
  }
  return { valid: true, value: cleaned };
}

export function validateWebhookUrl(url: unknown): ValidationResult {
  if (typeof url !== "string") {
    return { valid: false, error: "URL must be a string" };
  }
  try {
    const parsed = new URL(url.trim());
    if (parsed.protocol !== "https:") {
      return { valid: false, error: "Webhook URL must use HTTPS" };
    }
    return { valid: true, value: parsed.toString() };
  } catch {
    return { valid: false, error: "Invalid URL format" };
  }
}

export function validateSignificanceScore(
  score: unknown
): NumericValidationResult {
  const num = typeof score === "string" ? parseInt(score, 10) : score;
  if (typeof num !== "number" || !Number.isInteger(num)) {
    return { valid: false, error: "Significance score must be an integer" };
  }
  if (num < 1 || num > 10) {
    return { valid: false, error: "Significance score must be between 1-10" };
  }
  return { valid: true, value: num };
}

export function validateDateRange(
  start: unknown,
  end: unknown
): { valid: true; start: Date; end: Date } | { valid: false; error: string } {
  if (typeof start !== "string" || typeof end !== "string") {
    return { valid: false, error: "Dates must be strings" };
  }
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (isNaN(startDate.getTime())) {
    return { valid: false, error: "Invalid start date" };
  }
  if (isNaN(endDate.getTime())) {
    return { valid: false, error: "Invalid end date" };
  }
  if (startDate >= endDate) {
    return { valid: false, error: "Start date must be before end date" };
  }
  return { valid: true, start: startDate, end: endDate };
}
