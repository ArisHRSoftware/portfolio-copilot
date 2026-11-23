import type { GlossaryTerm } from "../types";

import { term10KFiling } from "./10k-filing";
import { term10QFiling } from "./10q-filing";
import { term13FFiling } from "./13f-filing";
import { term8KFiling } from "./8k-filing";
import { termAccessionNumber } from "./accession-number";
import { termAccreditedInvestor } from "./accredited-investor";
import { termAcquisition } from "./acquisition";
import { termAdjustedEarnings } from "./adjusted-earnings";
import { termAdverseOpinion } from "./adverse-opinion";
import { termAfterHoursTrading } from "./after-hours-trading";
import { termAlpha } from "./alpha";
import { termAngelInvesting } from "./angel-investing";
import { termAssetAllocation } from "./asset-allocation";
import { termAssetTurnover } from "./asset-turnover";
import { termAtTheMarketOffering } from "./at-the-market-offering";
import { termAuditOpinion } from "./audit-opinion";
import { termBeneficialOwner } from "./beneficial-owner";
import { termBeneficialOwnershipReport } from "./beneficial-ownership-report";
import { termBeta } from "./beta";
import { termBidAskSpread } from "./bid-ask-spread";
import { termBigFour } from "./big-four";
import { termBlackoutPeriod } from "./blackout-period";
import { termBlockTrade } from "./block-trade";
import { termBlueSkyLaws } from "./blue-sky-laws";
import { termBookValue } from "./book-value";
import { termCallOption } from "./call-option";
import { termCarveOut } from "./carve-out";
import { termCashConversionCycle } from "./cash-conversion-cycle";
import { termCircuitBreaker } from "./circuit-breaker";
import { termClawbackProvision } from "./clawback-provision";
import { termCompoundInterest } from "./compound-interest";
import { termCorrelation } from "./correlation";
import { termCostOfDebt } from "./cost-of-debt";
import { termCostOfEquity } from "./cost-of-equity";
import { termCoveredCall } from "./covered-call";
import { termCurrentRatio } from "./current-ratio";
import { termDarkPool } from "./dark-pool";
import { termDCF } from "./dcf";
import { termDebtToEquity } from "./debt-to-equity";
import { termDef14A } from "./def-14a";
import { termDeferredRevenue } from "./deferred-revenue";
import { termDeferredTax } from "./deferred-tax";
import { termDilution } from "./dilution";
import { termDirectListing } from "./direct-listing";
import { termDividend } from "./dividend";
import { termDividendPayoutRatio } from "./dividend-payout-ratio";
import { termDividendYield } from "./dividend-yield";
import { termDoddFrank } from "./dodd-frank";
import { termDollarCostAveraging } from "./dollar-cost-averaging";
import { termDrawdown } from "./drawdown";
import { termDrip } from "./drip";
import { termDualClassShares } from "./dual-class-shares";
import { termDutchAuction } from "./dutch-auction";
import { termEarningsManagement } from "./earnings-management";
import { termEbitda } from "./ebitda";
import { termEconomicMoat } from "./economic-moat";
import { termEnterpriseValue } from "./enterprise-value";
import { termEPS } from "./eps";
import { termEtf } from "./etf";
import { termExecutiveCompensation } from "./executive-compensation";
import { termFactorInvesting } from "./factor-investing";
import { termFCFYield } from "./fcf-yield";
import { termFilerCategory } from "./filer-category";
import { termFinanceLease } from "./finance-lease";
import { termForm11K } from "./form-11k";
import { termForm144 } from "./form-144";
import { termForm15 } from "./form-15";
import { termForm20F } from "./form-20f";
import { termForm3 } from "./form-3";
import { termForm4 } from "./form-4";
import { termForm424B } from "./form-424b";
import { termForm5 } from "./form-5";
import { termForm6K } from "./form-6k";
import { termForm8A } from "./form-8a";
import { termFormARS } from "./form-ars";
import { termFormD } from "./form-d";
import { termFreeCashFlow } from "./free-cash-flow";
import { termGaap } from "./gaap";
import { termGammaSqueeze } from "./gamma-squeeze";
import { termGoingConcern } from "./going-concern";
import { termGoldenParachute } from "./golden-parachute";
import { termGoodwill } from "./goodwill";
import { termGrossMargin } from "./gross-margin";
import { termGrowthInvesting } from "./growth-investing";
import { termHedgeFund } from "./hedge-fund";
import { termIfrs } from "./ifrs";
import { termImpairment } from "./impairment";
import { termImpliedVolatility } from "./implied-volatility";
import { termIndexFund } from "./index-fund";
import { termInformationRatio } from "./information-ratio";
import { termInsiderTrading } from "./insider-trading";
import { termIntangibleAssets } from "./intangible-assets";
import { termInterestCoverage } from "./interest-coverage";
import { termIntrinsicValue } from "./intrinsic-value";
import { termInventoryTurnover } from "./inventory-turnover";
import { termIpo } from "./ipo";
import { termIronCondor } from "./iron-condor";
import { termLeverage } from "./leverage";
import { termLeveragedBuyout } from "./leveraged-buyout";
import { termLimitOrder } from "./limit-order";
import { termManagementBuyout } from "./management-buyout";
import { termMarginOfSafety } from "./margin-of-safety";
import { termMarginTrading } from "./margin-trading";
import { termMarketCapitalization } from "./market-capitalization";
import { termMarketMaker } from "./market-maker";
import { termMarketOrder } from "./market-order";
import { termMaterialWeakness } from "./material-weakness";
import { termMerger } from "./merger";
import { termMomentumInvesting } from "./momentum-investing";
import { termMutualFund } from "./mutual-fund";
import { termNetMargin } from "./net-margin";
import { termNonGaapMeasures } from "./non-gaap-measures";
import { termNT10K } from "./nt-10k";
import { termNT10Q } from "./nt-10q";
import { termOperatingLease } from "./operating-lease";
import { termOperatingMargin } from "./operating-margin";
import { termOptions } from "./options";
import { termOptionsChain } from "./options-chain";
import { termPeRatio } from "./pe-ratio";
import { termPEGRatio } from "./peg-ratio";
import { termPoisonPill } from "./poison-pill";
import { termPortfolioDiversification } from "./portfolio-diversification";
import { termPre14A } from "./pre-14a";
import { termPreMarketTrading } from "./pre-market-trading";
import { termPriceToBook } from "./price-to-book";
import { termPriceToSales } from "./price-to-sales";
import { termPrivateEquity } from "./private-equity";
import { termProForma } from "./pro-forma";
import { termProxyStatement } from "./proxy-statement";
import { termPutOption } from "./put-option";
import { termQualifiedInstitutionalBuyer } from "./qualified-institutional-buyer";
import { termQualifiedOpinion } from "./qualified-opinion";
import { termQuickRatio } from "./quick-ratio";
import { termQuietPeriod } from "./quiet-period";
import { termRSquared } from "./r-squared";
import { termRebalancing } from "./rebalancing";
import { termReceivablesTurnover } from "./receivables-turnover";
import { termRegulationAPlus } from "./regulation-a-plus";
import { termRegulationCF } from "./regulation-cf";
import { termRegulationD } from "./regulation-d";
import { termRegulationFD } from "./regulation-fd";
import { termRegulationSK } from "./regulation-sk";
import { termRegulationSX } from "./regulation-sx";
import { termRestatement } from "./restatement";
import { termReverseMerger } from "./reverse-merger";
import { termReverseStockSplit } from "./reverse-stock-split";
import { termRevenueRecognition } from "./revenue-recognition";
import { termRightOfUseAsset } from "./right-of-use-asset";
import { termRightsOffering } from "./rights-offering";
import { termROA } from "./roa";
import { termROE } from "./roe";
import { termROIC } from "./roic";
import { termRsu } from "./rsu";
import { termRule10b5 } from "./rule-10b5";
import { termRule144 } from "./rule-144";
import { termRule144A } from "./rule-144a";
import { termS1Filing } from "./s-1-filing";
import { termS3Filing } from "./s-3-filing";
import { termSarbanesOxley } from "./sarbanes-oxley";
import { termSayOnPay } from "./say-on-pay";
import { termSCTO } from "./sc-to";
import { termSchedule13D } from "./schedule-13d";
import { termSchedule13G } from "./schedule-13g";
import { termSecEdgar } from "./sec-edgar";
import { termSecondaryOffering } from "./secondary-offering";
import { termSection16 } from "./section-16";
import { termSecuritiesAct1933 } from "./securities-act-1933";
import { termSecuritiesExchangeAct1934 } from "./securities-exchange-act-1934";
import { termShareRepurchase } from "./share-repurchase";
import { termSharpeRatio } from "./sharpe-ratio";
import { termShelfRegistration } from "./shelf-registration";
import { termShortSelling } from "./short-selling";
import { termShortSqueeze } from "./short-squeeze";
import { termShortSwingProfit } from "./short-swing-profit";
import { termSicCode } from "./sic-code";
import { termSmallCap } from "./small-cap";
import { termSortinoRatio } from "./sortino-ratio";
import { termSpac } from "./spac";
import { termSpecialDividend } from "./special-dividend";
import { termSpinOff } from "./spin-off";
import { termStaggeredBoard } from "./staggered-board";
import { termStandardDeviation } from "./standard-deviation";
import { termStockBasedCompensation } from "./stock-based-compensation";
import { termStockSplit } from "./stock-split";
import { termStopLoss } from "./stop-loss";
import { termStrikePrice } from "./strike-price";
import { termSupermajority } from "./supermajority";
import { termTaxLossHarvesting } from "./tax-loss-harvesting";
import { termTenderOffer } from "./tender-offer";
import { termTerminalValue } from "./terminal-value";
import { termTrackingError } from "./tracking-error";
import { termTreasuryStock } from "./treasury-stock";
import { termValueInvesting } from "./value-investing";
import { termVentureCapital } from "./venture-capital";
import { termVolatility } from "./volatility";
import { termVotingRights } from "./voting-rights";
import { termWACC } from "./wacc";
import { termWashSaleRule } from "./wash-sale-rule";
import { termWhistleblowerProgram } from "./whistleblower-program";
import { termWorkingCapital } from "./working-capital";

/** All glossary terms, sorted alphabetically by slug */
export const glossaryTerms: GlossaryTerm[] = [
  term10KFiling,
  term10QFiling,
  term13FFiling,
  term8KFiling,
  termAccessionNumber,
  termAccreditedInvestor,
  termAcquisition,
  termAdjustedEarnings,
  termAdverseOpinion,
  termAfterHoursTrading,
  termAlpha,
  termAngelInvesting,
  termAssetAllocation,
  termAssetTurnover,
  termAtTheMarketOffering,
  termAuditOpinion,
  termBeneficialOwner,
  termBeneficialOwnershipReport,
  termBeta,
  termBidAskSpread,
  termBigFour,
  termBlackoutPeriod,
  termBlockTrade,
  termBlueSkyLaws,
  termBookValue,
  termCallOption,
  termCarveOut,
  termCashConversionCycle,
  termCircuitBreaker,
  termClawbackProvision,
  termCompoundInterest,
  termCorrelation,
  termCostOfDebt,
  termCostOfEquity,
  termCoveredCall,
  termCurrentRatio,
  termDarkPool,
  termDCF,
  termDebtToEquity,
  termDef14A,
  termDeferredRevenue,
  termDeferredTax,
  termDilution,
  termDirectListing,
  termDividend,
  termDividendPayoutRatio,
  termDividendYield,
  termDoddFrank,
  termDollarCostAveraging,
  termDrawdown,
  termDrip,
  termDualClassShares,
  termDutchAuction,
  termEarningsManagement,
  termEbitda,
  termEconomicMoat,
  termEnterpriseValue,
  termEPS,
  termEtf,
  termExecutiveCompensation,
  termFactorInvesting,
  termFCFYield,
  termFilerCategory,
  termFinanceLease,
  termForm11K,
  termForm144,
  termForm15,
  termForm20F,
  termForm3,
  termForm4,
  termForm424B,
  termForm5,
  termForm6K,
  termForm8A,
  termFormARS,
  termFormD,
  termFreeCashFlow,
  termGaap,
  termGammaSqueeze,
  termGoingConcern,
  termGoldenParachute,
  termGoodwill,
  termGrossMargin,
  termGrowthInvesting,
  termHedgeFund,
  termIfrs,
  termImpairment,
  termImpliedVolatility,
  termIndexFund,
  termInformationRatio,
  termInsiderTrading,
  termIntangibleAssets,
  termInterestCoverage,
  termIntrinsicValue,
  termInventoryTurnover,
  termIpo,
  termIronCondor,
  termLeverage,
  termLeveragedBuyout,
  termLimitOrder,
  termManagementBuyout,
  termMarginOfSafety,
  termMarginTrading,
  termMarketCapitalization,
  termMarketMaker,
  termMarketOrder,
  termMaterialWeakness,
  termMerger,
  termMomentumInvesting,
  termMutualFund,
  termNetMargin,
  termNonGaapMeasures,
  termNT10K,
  termNT10Q,
  termOperatingLease,
  termOperatingMargin,
  termOptions,
  termOptionsChain,
  termPeRatio,
  termPEGRatio,
  termPoisonPill,
  termPortfolioDiversification,
  termPre14A,
  termPreMarketTrading,
  termPriceToBook,
  termPriceToSales,
  termPrivateEquity,
  termProForma,
  termProxyStatement,
  termPutOption,
  termQualifiedInstitutionalBuyer,
  termQualifiedOpinion,
  termQuickRatio,
  termQuietPeriod,
  termRSquared,
  termRebalancing,
  termReceivablesTurnover,
  termRegulationAPlus,
  termRegulationCF,
  termRegulationD,
  termRegulationFD,
  termRegulationSK,
  termRegulationSX,
  termRestatement,
  termReverseMerger,
  termReverseStockSplit,
  termRevenueRecognition,
  termRightOfUseAsset,
  termRightsOffering,
  termROA,
  termROE,
  termROIC,
  termRsu,
  termRule10b5,
  termRule144,
  termRule144A,
  termS1Filing,
  termS3Filing,
  termSarbanesOxley,
  termSayOnPay,
  termSCTO,
  termSchedule13D,
  termSchedule13G,
  termSecEdgar,
  termSecondaryOffering,
  termSection16,
  termSecuritiesAct1933,
  termSecuritiesExchangeAct1934,
  termShareRepurchase,
  termSharpeRatio,
  termShelfRegistration,
  termShortSelling,
  termShortSqueeze,
  termShortSwingProfit,
  termSicCode,
  termSmallCap,
  termSortinoRatio,
  termSpac,
  termSpecialDividend,
  termSpinOff,
  termStaggeredBoard,
  termStandardDeviation,
  termStockBasedCompensation,
  termStockSplit,
  termStopLoss,
  termStrikePrice,
  termSupermajority,
  termTaxLossHarvesting,
  termTenderOffer,
  termTerminalValue,
  termTrackingError,
  termTreasuryStock,
  termValueInvesting,
  termVentureCapital,
  termVolatility,
  termVotingRights,
  termWACC,
  termWashSaleRule,
  termWhistleblowerProgram,
  termWorkingCapital,
].sort((a, b) => a.slug.localeCompare(b.slug));

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
