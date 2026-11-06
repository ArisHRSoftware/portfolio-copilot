import type { GlossaryTerm } from "../types";

import { term10KFiling } from "./10k-filing";
import { term10QFiling } from "./10q-filing";
import { term8KFiling } from "./8k-filing";
import { termAccessionNumber } from "./accession-number";
import { termBeneficialOwner } from "./beneficial-owner";
import { termEbitda } from "./ebitda";
import { termForm4 } from "./form-4";
import { termFreeCashFlow } from "./free-cash-flow";
import { termGoingConcern } from "./going-concern";
import { termInsiderTrading } from "./insider-trading";
import { termMarketCapitalization } from "./market-capitalization";
import { termMaterialWeakness } from "./material-weakness";
import { termFilerCategory } from "./filer-category";
import { termProxyStatement } from "./proxy-statement";
import { termRevenueRecognition } from "./revenue-recognition";
import { termSecEdgar } from "./sec-edgar";
import { termSicCode } from "./sic-code";
import { termSmallCap } from "./small-cap";

/** All glossary terms, sorted alphabetically by term name */
export const glossaryTerms: GlossaryTerm[] = [
  term10KFiling,
  term10QFiling,
  term8KFiling,
  termAccessionNumber,
  termBeneficialOwner,
  termEbitda,
  termFilerCategory,
  termForm4,
  termFreeCashFlow,
  termGoingConcern,
  termInsiderTrading,
  termMarketCapitalization,
  termMaterialWeakness,
  termProxyStatement,
  termRevenueRecognition,
  termSecEdgar,
  termSicCode,
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
