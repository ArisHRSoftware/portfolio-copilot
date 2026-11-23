import type { GlossaryTerm } from "../types";

import { term13FFiling } from "./13f-filing";
import { term10KFiling } from "./10k-filing";
import { term10QFiling } from "./10q-filing";
import { term8KFiling } from "./8k-filing";
import { termAccessionNumber } from "./accession-number";
import { termBeneficialOwner } from "./beneficial-owner";
import { termBookValue } from "./book-value";
import { termDef14A } from "./def-14a";
import { termDilution } from "./dilution";
import { termDividendYield } from "./dividend-yield";
import { termEbitda } from "./ebitda";
import { termEnterpriseValue } from "./enterprise-value";
import { termFilerCategory } from "./filer-category";
import { termForm3 } from "./form-3";
import { termForm4 } from "./form-4";
import { termForm5 } from "./form-5";
import { termForm8A } from "./form-8a";
import { termForm11K } from "./form-11k";
import { termForm15 } from "./form-15";
import { termForm20F } from "./form-20f";
import { termForm144 } from "./form-144";
import { termForm424B } from "./form-424b";
import { termForm6K } from "./form-6k";
import { termFormARS } from "./form-ars";
import { termFormD } from "./form-d";
import { termFreeCashFlow } from "./free-cash-flow";
import { termGoingConcern } from "./going-concern";
import { termInsiderTrading } from "./insider-trading";
import { termMarketCapitalization } from "./market-capitalization";
import { termMaterialWeakness } from "./material-weakness";
import { termNT10K } from "./nt-10k";
import { termNT10Q } from "./nt-10q";
import { termPeRatio } from "./pe-ratio";
import { termPre14A } from "./pre-14a";
import { termProxyStatement } from "./proxy-statement";
import { termRevenueRecognition } from "./revenue-recognition";
import { termRsu } from "./rsu";
import { termS1Filing } from "./s-1-filing";
import { termS3Filing } from "./s-3-filing";
import { termSCTO } from "./sc-to";
import { termSchedule13D } from "./schedule-13d";
import { termSchedule13G } from "./schedule-13g";
import { termSecEdgar } from "./sec-edgar";
import { termAfterHoursTrading } from "./after-hours-trading";
import { termAtTheMarketOffering } from "./at-the-market-offering";
import { termBidAskSpread } from "./bid-ask-spread";
import { termBlockTrade } from "./block-trade";
import { termCallOption } from "./call-option";
import { termCircuitBreaker } from "./circuit-breaker";
import { termCoveredCall } from "./covered-call";
import { termDarkPool } from "./dark-pool";
import { termDirectListing } from "./direct-listing";
import { termDutchAuction } from "./dutch-auction";
import { termGammaSqueeze } from "./gamma-squeeze";
import { termImpliedVolatility } from "./implied-volatility";
import { termIpo } from "./ipo";
import { termIronCondor } from "./iron-condor";
import { termLeverage } from "./leverage";
import { termLimitOrder } from "./limit-order";
import { termMarginTrading } from "./margin-trading";
import { termMarketMaker } from "./market-maker";
import { termMarketOrder } from "./market-order";
import { termOptions } from "./options";
import { termOptionsChain } from "./options-chain";
import { termPreMarketTrading } from "./pre-market-trading";
import { termPutOption } from "./put-option";
import { termReverseMerger } from "./reverse-merger";
import { termSecondaryOffering } from "./secondary-offering";
import { termShelfRegistration } from "./shelf-registration";
import { termShortSelling } from "./short-selling";
import { termShortSqueeze } from "./short-squeeze";
import { termSicCode } from "./sic-code";
import { termSmallCap } from "./small-cap";
import { termSpac } from "./spac";
import { termStopLoss } from "./stop-loss";
import { termStrikePrice } from "./strike-price";
// Corporate Actions
import { termStockSplit } from "./stock-split";
import { termReverseStockSplit } from "./reverse-stock-split";
import { termDividend } from "./dividend";
import { termSpecialDividend } from "./special-dividend";
import { termSpinOff } from "./spin-off";
import { termCarveOut } from "./carve-out";
import { termMerger } from "./merger";
import { termAcquisition } from "./acquisition";
import { termTenderOffer } from "./tender-offer";
import { termLeveragedBuyout } from "./leveraged-buyout";
import { termManagementBuyout } from "./management-buyout";
import { termRightsOffering } from "./rights-offering";
import { termShareRepurchase } from "./share-repurchase";
import { termTreasuryStock } from "./treasury-stock";
import { termGoldenParachute } from "./golden-parachute";
import { termPoisonPill } from "./poison-pill";
import { termStaggeredBoard } from "./staggered-board";
import { termDualClassShares } from "./dual-class-shares";
import { termVotingRights } from "./voting-rights";
import { termSupermajority } from "./supermajority";
// Regulatory & Compliance
import { termRegulationFD } from "./regulation-fd";
import { termRegulationSK } from "./regulation-sk";
import { termRegulationSX } from "./regulation-sx";
import { termRule10b5 } from "./rule-10b5";
import { termRule144 } from "./rule-144";
import { termRule144A } from "./rule-144a";
import { termSarbanesOxley } from "./sarbanes-oxley";
import { termDoddFrank } from "./dodd-frank";
import { termSecuritiesAct1933 } from "./securities-act-1933";
import { termSecuritiesExchangeAct1934 } from "./securities-exchange-act-1934";
import { termBlueSkyLaws } from "./blue-sky-laws";
import { termQuietPeriod } from "./quiet-period";
import { termBlackoutPeriod } from "./blackout-period";
import { termRegulationAPlus } from "./regulation-a-plus";
import { termRegulationCF } from "./regulation-cf";
import { termRegulationD } from "./regulation-d";
import { termQualifiedInstitutionalBuyer } from "./qualified-institutional-buyer";
import { termAccreditedInvestor } from "./accredited-investor";
import { termSection16 } from "./section-16";
import { termShortSwingProfit } from "./short-swing-profit";
import { termWhistleblowerProgram } from "./whistleblower-program";
import { termClawbackProvision } from "./clawback-provision";
import { termSayOnPay } from "./say-on-pay";
import { termExecutiveCompensation } from "./executive-compensation";
import { termBeneficialOwnershipReport } from "./beneficial-ownership-report";
// Accounting & Audit
import { termGaap } from "./gaap";
import { termIfrs } from "./ifrs";
import { termNonGaapMeasures } from "./non-gaap-measures";
import { termAdjustedEarnings } from "./adjusted-earnings";
import { termProForma } from "./pro-forma";
import { termRestatement } from "./restatement";
import { termImpairment } from "./impairment";
import { termGoodwill } from "./goodwill";
import { termIntangibleAssets } from "./intangible-assets";
import { termDeferredRevenue } from "./deferred-revenue";
import { termDeferredTax } from "./deferred-tax";
import { termOperatingLease } from "./operating-lease";
import { termFinanceLease } from "./finance-lease";
import { termRightOfUseAsset } from "./right-of-use-asset";
import { termStockBasedCompensation } from "./stock-based-compensation";
import { termEarningsManagement } from "./earnings-management";
import { termBigFour } from "./big-four";
import { termAuditOpinion } from "./audit-opinion";
import { termQualifiedOpinion } from "./qualified-opinion";
import { termAdverseOpinion } from "./adverse-opinion";
// Investment Strategy
import { termValueInvesting } from "./value-investing";
import { termGrowthInvesting } from "./growth-investing";
import { termMomentumInvesting } from "./momentum-investing";
import { termFactorInvesting } from "./factor-investing";
import { termIndexFund } from "./index-fund";
import { termEtf } from "./etf";
import { termMutualFund } from "./mutual-fund";
import { termHedgeFund } from "./hedge-fund";
import { termPrivateEquity } from "./private-equity";
import { termVentureCapital } from "./venture-capital";
import { termAngelInvesting } from "./angel-investing";
import { termDollarCostAveraging } from "./dollar-cost-averaging";
import { termPortfolioDiversification } from "./portfolio-diversification";
import { termAssetAllocation } from "./asset-allocation";
import { termRebalancing } from "./rebalancing";
import { termTaxLossHarvesting } from "./tax-loss-harvesting";
import { termWashSaleRule } from "./wash-sale-rule";
import { termDrip } from "./drip";
import { termCompoundInterest } from "./compound-interest";

/** All glossary terms, sorted alphabetically by term name */
export const glossaryTerms: GlossaryTerm[] = [
  term13FFiling,
  term10KFiling,
  term10QFiling,
  term8KFiling,
  termAccessionNumber,
  termBeneficialOwner,
  termBookValue,
  termDef14A,
  termDilution,
  termDividendYield,
  termEbitda,
  termEnterpriseValue,
  termFilerCategory,
  termForm3,
  termForm4,
  termForm5,
  termForm8A,
  termForm11K,
  termForm15,
  termForm20F,
  termForm144,
  termForm424B,
  termForm6K,
  termFormARS,
  termFormD,
  termFreeCashFlow,
  termGoingConcern,
  termInsiderTrading,
  termMarketCapitalization,
  termMaterialWeakness,
  termNT10K,
  termNT10Q,
  termPeRatio,
  termPre14A,
  termProxyStatement,
  termRevenueRecognition,
  termRsu,
  termS1Filing,
  termS3Filing,
  termSCTO,
  termSchedule13D,
  termSchedule13G,
  termAfterHoursTrading,
  termAtTheMarketOffering,
  termBidAskSpread,
  termBlockTrade,
  termCallOption,
  termCircuitBreaker,
  termCoveredCall,
  termDarkPool,
  termDirectListing,
  termDutchAuction,
  termGammaSqueeze,
  termImpliedVolatility,
  termIpo,
  termIronCondor,
  termLeverage,
  termLimitOrder,
  termMarginTrading,
  termMarketMaker,
  termMarketOrder,
  termOptions,
  termOptionsChain,
  termPreMarketTrading,
  termPutOption,
  termReverseMerger,
  termSecEdgar,
  termSecondaryOffering,
  termShelfRegistration,
  termShortSelling,
  termShortSqueeze,
  termSicCode,
  termSmallCap,
  termSpac,
  termStopLoss,
  termStrikePrice,
  // Corporate Actions
  termStockSplit,
  termReverseStockSplit,
  termDividend,
  termSpecialDividend,
  termSpinOff,
  termCarveOut,
  termMerger,
  termAcquisition,
  termTenderOffer,
  termLeveragedBuyout,
  termManagementBuyout,
  termRightsOffering,
  termShareRepurchase,
  termTreasuryStock,
  termGoldenParachute,
  termPoisonPill,
  termStaggeredBoard,
  termDualClassShares,
  termVotingRights,
  termSupermajority,
  // Regulatory & Compliance
  termRegulationFD,
  termRegulationSK,
  termRegulationSX,
  termRule10b5,
  termRule144,
  termRule144A,
  termSarbanesOxley,
  termDoddFrank,
  termSecuritiesAct1933,
  termSecuritiesExchangeAct1934,
  termBlueSkyLaws,
  termQuietPeriod,
  termBlackoutPeriod,
  termRegulationAPlus,
  termRegulationCF,
  termRegulationD,
  termQualifiedInstitutionalBuyer,
  termAccreditedInvestor,
  termSection16,
  termShortSwingProfit,
  termWhistleblowerProgram,
  termClawbackProvision,
  termSayOnPay,
  termExecutiveCompensation,
  termBeneficialOwnershipReport,
  // Accounting & Audit
  termGaap,
  termIfrs,
  termNonGaapMeasures,
  termAdjustedEarnings,
  termProForma,
  termRestatement,
  termImpairment,
  termGoodwill,
  termIntangibleAssets,
  termDeferredRevenue,
  termDeferredTax,
  termOperatingLease,
  termFinanceLease,
  termRightOfUseAsset,
  termStockBasedCompensation,
  termEarningsManagement,
  termBigFour,
  termAuditOpinion,
  termQualifiedOpinion,
  termAdverseOpinion,
  // Investment Strategy
  termValueInvesting,
  termGrowthInvesting,
  termMomentumInvesting,
  termFactorInvesting,
  termIndexFund,
  termEtf,
  termMutualFund,
  termHedgeFund,
  termPrivateEquity,
  termVentureCapital,
  termAngelInvesting,
  termDollarCostAveraging,
  termPortfolioDiversification,
  termAssetAllocation,
  termRebalancing,
  termTaxLossHarvesting,
  termWashSaleRule,
  termDrip,
  termCompoundInterest,
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
