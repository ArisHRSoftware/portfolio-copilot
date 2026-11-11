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

// sicToSector() removed — use the canonical version from "@/lib/constants/sectors"

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
