import type { GlossaryTerm } from "../types";

import { term10KFiling } from "./10k-filing";
import { term10QFiling } from "./10q-filing";
import { term8KFiling } from "./8k-filing";
import { termForm4 } from "./form-4";
import { termGoingConcern } from "./going-concern";
import { termInsiderTrading } from "./insider-trading";
import { termMarketCapitalization } from "./market-capitalization";
import { termProxyStatement } from "./proxy-statement";
import { termSecEdgar } from "./sec-edgar";
import { termSmallCap } from "./small-cap";

/** All glossary terms, sorted alphabetically by term name */
export const glossaryTerms: GlossaryTerm[] = [
  term10KFiling,
  term10QFiling,
  term8KFiling,
  termForm4,
  termGoingConcern,
  termInsiderTrading,
  termMarketCapitalization,
  termProxyStatement,
  termSecEdgar,
  termSmallCap,
].sort((a, b) => a.term.localeCompare(b.term));

/** Look up a glossary term by its URL slug */
export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

/** Group glossary terms by first letter for the A-Z index */
export function getGlossaryByLetter(): Map<string, GlossaryTerm[]> {
  const map = new Map<string, GlossaryTerm[]>();
  for (const term of glossaryTerms) {
    const letter = /^[A-Za-z]/.test(term.term)
      ? term.term[0].toUpperCase()
      : "#";
    const existing = map.get(letter) ?? [];
    existing.push(term);
    map.set(letter, existing);
  }
  return map;
}
