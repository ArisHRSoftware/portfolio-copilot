import type { LearnArticle } from "../types";

import { articleHowToReadSecFilings } from "./how-to-read-sec-filings";
import { articleHowToTrackInsiderTrading } from "./how-to-track-insider-trading";
import { articleHowToUseEdgar } from "./how-to-use-edgar";
import { articleSecFilingTypes } from "./sec-filing-types-explained";

/** All SEC filing education articles, sorted by difficulty then title */
export const secFilingArticles: LearnArticle[] = [
  articleHowToReadSecFilings,
  articleHowToTrackInsiderTrading,
  articleHowToUseEdgar,
  articleSecFilingTypes,
].sort((a, b) => {
  const diffOrder = { beginner: 0, intermediate: 1, advanced: 2 };
  const diffDiff = diffOrder[a.difficulty] - diffOrder[b.difficulty];
  if (diffDiff !== 0) return diffDiff;
  return a.title.localeCompare(b.title);
});

/** Look up a learn article by slug */
export function getSecFilingArticle(slug: string): LearnArticle | undefined {
  return secFilingArticles.find((a) => a.slug === slug);
}
