import type { LearnArticle } from "../types";

import { articleHowToAnalyzeTechnologyStocks } from "./how-to-analyze-technology-stocks";
import { articleHealthcareSectorSecFilingsGuide } from "./healthcare-sector-sec-filings-guide";
import { articleFinancialSectorAnalysisGuide } from "./financial-sector-analysis-guide";
import { articleEnergySectorSecFilings } from "./energy-sector-sec-filings";

/** All sector analysis articles, sorted by difficulty then title */
export const sectorArticles: LearnArticle[] = [
  articleHowToAnalyzeTechnologyStocks,
  articleHealthcareSectorSecFilingsGuide,
  articleFinancialSectorAnalysisGuide,
  articleEnergySectorSecFilings,
].sort((a, b) => {
  const diffOrder = { beginner: 0, intermediate: 1, advanced: 2 };
  const diffDiff = diffOrder[a.difficulty] - diffOrder[b.difficulty];
  if (diffDiff !== 0) return diffDiff;
  return a.title.localeCompare(b.title);
});

/** Look up a sector article by slug */
export function getSectorArticle(slug: string): LearnArticle | undefined {
  return sectorArticles.find((a) => a.slug === slug);
}
