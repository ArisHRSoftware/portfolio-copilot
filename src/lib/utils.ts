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

/**
 * Map SEC state/country of incorporation codes to human-readable names.
 * SEC uses 2-char codes: US states (AL, CA, NY...) and foreign countries (Z4, X2...).
 * Returns the readable name, or null if the code is unrecognized.
 */
const SEC_JURISDICTION_CODES: Record<string, string> = {
  // US States (standard 2-letter)
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi",
  MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire",
  NJ: "New Jersey", NM: "New Mexico", NY: "New York", NC: "North Carolina",
  ND: "North Dakota", OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania",
  RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota", TN: "Tennessee",
  TX: "Texas", UT: "Utah", VT: "Vermont", VA: "Virginia", WA: "Washington",
  WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming", DC: "District of Columbia",
  PR: "Puerto Rico", VI: "US Virgin Islands", GU: "Guam",
  // SEC foreign country codes
  A0: "Alberta, Canada", A1: "British Columbia, Canada", A2: "Manitoba, Canada",
  A3: "New Brunswick, Canada", A4: "Newfoundland, Canada", A5: "Nova Scotia, Canada",
  A6: "Ontario, Canada", A7: "Prince Edward Island, Canada", A8: "Quebec, Canada",
  A9: "Saskatchewan, Canada", B0: "Yukon, Canada",
  X0: "United Kingdom", X2: "United Kingdom", X3: "Ireland",
  Y6: "Cayman Islands", E9: "Cayman Islands",
  L2: "Bermuda", V8: "British Virgin Islands",
  Z4: "Canada", C8: "China", F4: "Hong Kong",
  G7: "Israel", J5: "Japan", K7: "South Korea",
  N4: "Netherlands", Q2: "Australia",
  S8: "South Africa", T7: "Switzerland",
  W8: "Germany", X1: "France",
};

export function formatJurisdiction(code: string | null | undefined): string | null {
  if (!code) return null;
  const upper = code.toUpperCase().trim();
  // If it's already a readable name (more than 2 chars), return as-is
  if (upper.length > 2) return code;
  return SEC_JURISDICTION_CODES[upper] ?? null;
}
