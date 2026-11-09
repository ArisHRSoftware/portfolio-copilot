export { cn } from "cn"

/** Escape PostgREST pattern characters to prevent filter injection in ilike queries. */
export function escapeIlike(input: string): string {
  return input.replace(/[%_\\]/g, (ch) => `\\${ch}`);
}

/**
 * Display-friendly ticker. For auto-created entities without a real ticker
 * (CIK-based like "CIK1234567"), returns the company name instead.
 */
export function displayTicker(ticker: string, companyName?: string | null): string {
  if (!ticker.startsWith("CIK")) return ticker;
  if (companyName) {
    // Truncate long names
    return companyName.length > 25 ? companyName.slice(0, 23) + "..." : companyName;
  }
  return ticker;
}

/**
 * Whether this is a real stock ticker vs a CIK-based placeholder.
 */
export function isRealTicker(ticker: string): boolean {
  return !ticker.startsWith("CIK");
}

/**
 * Map SIC code to a broad sector name.
 * Based on SIC division structure (first 2 digits).
 */
export function sicToSector(sic: string): string {
  const code = parseInt(sic, 10);
  if (isNaN(code)) return "";
  if (code <= 999) return "Agriculture";
  if (code <= 1499) return "Mining & Energy";
  if (code <= 1799) return "Construction";
  if (code <= 2099) return "Food & Beverage";
  if (code <= 2799) return "Manufacturing";
  if (code <= 2899) return "Chemicals & Materials";
  if (code <= 3199) return "Materials";
  if (code <= 3499) return "Industrials";
  if (code <= 3599) return "Industrial Equipment";
  if (code <= 3699) return "Electronics";
  if (code <= 3799) return "Transportation Equipment";
  if (code <= 3899) return "Instruments & Controls";
  if (code <= 3999) return "Manufacturing";
  if (code <= 4799) return "Transportation & Logistics";
  if (code <= 4999) return "Utilities";
  if (code <= 5199) return "Wholesale Trade";
  if (code <= 5999) return "Retail";
  if (code <= 6199) return "Financial Services";
  if (code <= 6599) return "Insurance & Real Estate";
  if (code <= 6799) return "Financial Services";
  if (code <= 7019) return "Hospitality";
  if (code <= 7299) return "Consumer Services";
  if (code <= 7399) return "Business Services";
  if (code <= 7499) return "Consumer Services";
  if (code <= 7599) return "Automotive Services";
  if (code <= 7699) return "Repair Services";
  if (code <= 7829) return "Entertainment";
  if (code <= 7999) return "Recreation";
  if (code <= 8099) return "Healthcare";
  if (code <= 8199) return "Education";
  if (code <= 8399) return "Social Services";
  if (code <= 8749) return "Technology";
  if (code <= 8999) return "Professional Services";
  if (code <= 9199) return "Government";
  if (code <= 9729) return "Government";
  return "Other";
}
