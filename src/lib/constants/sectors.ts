/**
 * Canonical sector definitions — single source of truth.
 * All sector-related code MUST import from here.
 *
 * Names match what gets stored in the companies.sector DB column.
 * Slugs are URL-safe versions used in /sectors/[sector] routes.
 */
export const SECTOR_DEFINITIONS = [
  { name: "Technology", slug: "technology" },
  { name: "Healthcare", slug: "healthcare" },
  { name: "Financial Services", slug: "financial-services" },
  { name: "Consumer Cyclical", slug: "consumer-cyclical" },
  { name: "Consumer Defensive", slug: "consumer-defensive" },
  { name: "Industrials", slug: "industrials" },
  { name: "Energy", slug: "energy" },
  { name: "Basic Materials", slug: "basic-materials" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "Utilities", slug: "utilities" },
  { name: "Communication Services", slug: "communication-services" },
] as const;

/** Sector names as stored in the database */
export const SECTORS = SECTOR_DEFINITIONS.map((s) => s.name);

/** Sector slugs for URL routing */
export const SECTOR_SLUGS = SECTOR_DEFINITIONS.map((s) => s.slug);

/** Map slug → display name */
export function sectorSlugToName(slug: string): string {
  const found = SECTOR_DEFINITIONS.find((s) => s.slug === slug);
  return (
    found?.name ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

/** Map display name → slug */
export function sectorNameToSlug(name: string): string {
  const found = SECTOR_DEFINITIONS.find((s) => s.name === name);
  return found?.slug ?? name.toLowerCase().replace(/\s+/g, "-");
}

export type Sector = (typeof SECTOR_DEFINITIONS)[number]["name"];

/**
 * SIC code to sector mapping.
 * Used by the EDGAR import script to classify companies.
 */
export function sicToSector(sicCode: string): string {
  const sic = parseInt(sicCode, 10);
  if (isNaN(sic)) return "Technology"; // fallback

  // Agriculture, Mining, Construction → Basic Materials / Industrials
  if (sic < 1000) return "Basic Materials";
  if (sic < 1500) return "Basic Materials";
  if (sic < 1800) return "Industrials";

  // Manufacturing
  if (sic >= 2000 && sic < 2800) return "Consumer Defensive"; // Food, tobacco, textiles
  if (sic >= 2800 && sic < 2900) return "Healthcare"; // Chemicals/pharma
  if (sic >= 2900 && sic < 3000) return "Energy"; // Petroleum refining
  // Computer & office equipment (3570-3579): AAPL=3571, etc. — MUST be before 3000-3600 catch-all
  if (sic >= 3570 && sic < 3580) return "Technology";
  // Semiconductors & electronic components (3670-3679): must be before 3600-3700
  if (sic >= 3670 && sic < 3680) return "Technology";
  if (sic >= 3000 && sic < 3600) return "Industrials"; // Rubber, metals, machinery
  if (sic >= 3600 && sic < 3700) return "Technology"; // Electronics
  if (sic >= 3700 && sic < 3800) return "Consumer Cyclical"; // Transportation equipment
  if (sic >= 3800 && sic < 3900) return "Healthcare"; // Medical instruments
  if (sic >= 3900 && sic < 4000) return "Consumer Cyclical"; // Misc manufacturing

  // Transportation & Utilities
  if (sic >= 4000 && sic < 4900) return "Industrials"; // Transportation
  if (sic >= 4900 && sic < 5000) return "Utilities"; // Electric, gas, water

  // Wholesale & Retail
  if (sic >= 5000 && sic < 5200) return "Consumer Cyclical"; // Wholesale
  if (sic >= 5200 && sic < 6000) return "Consumer Cyclical"; // Retail

  // Finance, Insurance, Real Estate
  if (sic >= 6000 && sic < 6200) return "Financial Services"; // Banking
  if (sic >= 6200 && sic < 6300) return "Financial Services"; // Securities
  if (sic >= 6300 && sic < 6500) return "Financial Services"; // Insurance
  if (sic >= 6500 && sic < 6600) return "Real Estate";
  if (sic >= 6600 && sic < 6800) return "Financial Services"; // Other finance

  // Services
  if (sic >= 7000 && sic < 7400) return "Consumer Cyclical"; // Hotels, personal services
  if (sic >= 7300 && sic < 7400) return "Technology"; // Computer services
  if (sic >= 7370 && sic < 7380) return "Technology"; // Software, data processing
  if (sic >= 7400 && sic < 7500) return "Industrials"; // Management services
  if (sic >= 7500 && sic < 7600) return "Consumer Cyclical"; // Auto services
  if (sic >= 7800 && sic < 8000) return "Communication Services"; // Entertainment
  if (sic >= 8000 && sic < 8100) return "Healthcare"; // Health services
  if (sic >= 8100 && sic < 8200) return "Industrials"; // Legal services
  if (sic >= 8200 && sic < 8300) return "Consumer Cyclical"; // Education
  if (sic >= 8300 && sic < 8800) return "Industrials"; // Social, engineering services
  if (sic >= 8700 && sic < 8800) return "Technology"; // Engineering & R&D

  // Telecom
  if (sic >= 4800 && sic < 4900) return "Communication Services";

  return "Industrials"; // fallback for unclassified
}
