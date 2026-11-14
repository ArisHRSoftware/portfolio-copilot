import type { LearnArticle } from "../types";

import { articleUnderstandingForm4Filings } from "./understanding-form-4-filings";
import { articleInsiderBuyingSignals } from "./insider-buying-signals";
import { articleInsiderSellingAnalysis } from "./insider-selling-analysis";
import { articleClusterBuyingPatterns } from "./cluster-buying-patterns";

/** All insider trading education articles, sorted by difficulty then title */
export const insiderTradingArticles: LearnArticle[] = [
  articleUnderstandingForm4Filings,
  articleInsiderBuyingSignals,
  articleInsiderSellingAnalysis,
  articleClusterBuyingPatterns,
].sort((a, b) => {
  const diffOrder = { beginner: 0, intermediate: 1, advanced: 2 };
  const diffDiff = diffOrder[a.difficulty] - diffOrder[b.difficulty];
  if (diffDiff !== 0) return diffDiff;
  return a.title.localeCompare(b.title);
});

/** Look up an insider trading article by slug */
export function getInsiderTradingArticle(slug: string): LearnArticle | undefined {
  return insiderTradingArticles.find((a) => a.slug === slug);
}
