import type { GlossaryTerm } from "../../types";

import { term13FFilingHi } from "./13f-filing";
import { term10KFilingHi } from "./10k-filing";
import { term10QFilingHi } from "./10q-filing";
import { term8KFilingHi } from "./8k-filing";
import { termAccessionNumberHi } from "./accession-number";
import { termBeneficialOwnerHi } from "./beneficial-owner";
import { termBookValueHi } from "./book-value";
import { termDilutionHi } from "./dilution";
import { termDividendYieldHi } from "./dividend-yield";
import { termEbitdaHi } from "./ebitda";
import { termEnterpriseValueHi } from "./enterprise-value";
import { termFilerCategoryHi } from "./filer-category";
import { termForm4Hi } from "./form-4";
import { termFreeCashFlowHi } from "./free-cash-flow";
import { termGoingConcernHi } from "./going-concern";
import { termInsiderTradingHi } from "./insider-trading";
import { termMarketCapitalizationHi } from "./market-capitalization";
import { termMaterialWeaknessHi } from "./material-weakness";
import { termPeRatioHi } from "./pe-ratio";
import { termProxyStatementHi } from "./proxy-statement";
import { termRevenueRecognitionHi } from "./revenue-recognition";
import { termRsuHi } from "./rsu";
import { termSecEdgarHi } from "./sec-edgar";
import { termShortSellingHi } from "./short-selling";
import { termSicCodeHi } from "./sic-code";
import { termSmallCapHi } from "./small-cap";

/** All Hindi glossary terms, sorted alphabetically by English term name */
export const glossaryTermsHi: GlossaryTerm[] = [
  term13FFilingHi,
  term10KFilingHi,
  term10QFilingHi,
  term8KFilingHi,
  termAccessionNumberHi,
  termBeneficialOwnerHi,
  termBookValueHi,
  termDilutionHi,
  termDividendYieldHi,
  termEbitdaHi,
  termEnterpriseValueHi,
  termFilerCategoryHi,
  termForm4Hi,
  termFreeCashFlowHi,
  termGoingConcernHi,
  termInsiderTradingHi,
  termMarketCapitalizationHi,
  termMaterialWeaknessHi,
  termPeRatioHi,
  termProxyStatementHi,
  termRevenueRecognitionHi,
  termRsuHi,
  termSecEdgarHi,
  termShortSellingHi,
  termSicCodeHi,
  termSmallCapHi,
];

/** Hindi glossary terms organized by topic (for the index page) */
export const glossaryTopicsHi = {
  "SEC फॉर्म": [
    term10KFilingHi,
    term10QFilingHi,
    term8KFilingHi,
    termForm4Hi,
    termProxyStatementHi,
    term13FFilingHi,
  ],
  "वित्तीय मापदंड": [
    termPeRatioHi,
    termEbitdaHi,
    termEnterpriseValueHi,
    termMarketCapitalizationHi,
    termFreeCashFlowHi,
    termBookValueHi,
    termDividendYieldHi,
    termRevenueRecognitionHi,
  ],
  "ट्रेडिंग शब्द": [
    termInsiderTradingHi,
    termShortSellingHi,
    termRsuHi,
    termDilutionHi,
    termBeneficialOwnerHi,
    termSmallCapHi,
  ],
  "नियामक अवधारणाएँ": [
    termSecEdgarHi,
    termAccessionNumberHi,
    termFilerCategoryHi,
    termSicCodeHi,
    termGoingConcernHi,
    termMaterialWeaknessHi,
  ],
};
