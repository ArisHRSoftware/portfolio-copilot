import type { GlossaryTerm } from "../../types";

// SEC Filings
import { term10KFilingHi } from "./10k-filing";
import { term10QFilingHi } from "./10q-filing";
import { term13FFilingHi } from "./13f-filing";
import { term8KFilingHi } from "./8k-filing";
import { termDef14AHi } from "./def-14a";
import { termForm3Hi } from "./form-3";
import { termForm4Hi } from "./form-4";
import { termForm5Hi } from "./form-5";
import { termForm6KHi } from "./form-6k";
import { termForm8AHi } from "./form-8a";
import { termForm11KHi } from "./form-11k";
import { termForm20FHi } from "./form-20f";
import { termForm144Hi } from "./form-144";
import { termForm15Hi } from "./form-15";
import { termForm424BHi } from "./form-424b";
import { termFormARSHi } from "./form-ars";
import { termFormDHi } from "./form-d";
import { termNT10KHi } from "./nt-10k";
import { termNT10QHi } from "./nt-10q";
import { termPre14AHi } from "./pre-14a";
import { termProxyStatementHi } from "./proxy-statement";
import { termS1FilingHi } from "./s-1-filing";
import { termS3FilingHi } from "./s-3-filing";
import { termSCTOHi } from "./sc-to";
import { termSchedule13DHi } from "./schedule-13d";
import { termSchedule13GHi } from "./schedule-13g";

// Financial Metrics
import { termAssetTurnoverHi } from "./asset-turnover";
import { termBookValueHi } from "./book-value";
import { termCashConversionCycleHi } from "./cash-conversion-cycle";
import { termCostOfDebtHi } from "./cost-of-debt";
import { termCostOfEquityHi } from "./cost-of-equity";
import { termCurrentRatioHi } from "./current-ratio";
import { termDCFHi } from "./dcf";
import { termDebtToEquityHi } from "./debt-to-equity";
import { termDividendPayoutRatioHi } from "./dividend-payout-ratio";
import { termDividendYieldHi } from "./dividend-yield";
import { termEbitdaHi } from "./ebitda";
import { termEconomicMoatHi } from "./economic-moat";
import { termEnterpriseValueHi } from "./enterprise-value";
import { termEPSHi } from "./eps";
import { termFCFYieldHi } from "./fcf-yield";
import { termFreeCashFlowHi } from "./free-cash-flow";
import { termGrossMarginHi } from "./gross-margin";
import { termInterestCoverageHi } from "./interest-coverage";
import { termIntrinsicValueHi } from "./intrinsic-value";
import { termInventoryTurnoverHi } from "./inventory-turnover";
import { termMarginOfSafetyHi } from "./margin-of-safety";
import { termMarketCapitalizationHi } from "./market-capitalization";
import { termNetMarginHi } from "./net-margin";
import { termOperatingMarginHi } from "./operating-margin";
import { termPeRatioHi } from "./pe-ratio";
import { termPEGRatioHi } from "./peg-ratio";
import { termPriceToBookHi } from "./price-to-book";
import { termPriceToSalesHi } from "./price-to-sales";
import { termQuickRatioHi } from "./quick-ratio";
import { termReceivablesTurnoverHi } from "./receivables-turnover";
import { termRevenueRecognitionHi } from "./revenue-recognition";
import { termROAHi } from "./roa";
import { termROEHi } from "./roe";
import { termROICHi } from "./roic";
import { termTerminalValueHi } from "./terminal-value";
import { termWACCHi } from "./wacc";
import { termWorkingCapitalHi } from "./working-capital";

// Risk Metrics
import { termAlphaHi } from "./alpha";
import { termBetaHi } from "./beta";
import { termCorrelationHi } from "./correlation";
import { termDrawdownHi } from "./drawdown";
import { termInformationRatioHi } from "./information-ratio";
import { termRSquaredHi } from "./r-squared";
import { termSharpeRatioHi } from "./sharpe-ratio";
import { termSortinoRatioHi } from "./sortino-ratio";
import { termStandardDeviationHi } from "./standard-deviation";
import { termTrackingErrorHi } from "./tracking-error";
import { termVolatilityHi } from "./volatility";

// Trading
import { termAfterHoursTradingHi } from "./after-hours-trading";
import { termCallOptionHi } from "./call-option";
import { termCoveredCallHi } from "./covered-call";
import { termDilutionHi } from "./dilution";
import { termImpliedVolatilityHi } from "./implied-volatility";
import { termInsiderTradingHi } from "./insider-trading";
import { termIronCondorHi } from "./iron-condor";
import { termLeverageHi } from "./leverage";
import { termLimitOrderHi } from "./limit-order";
import { termMarginTradingHi } from "./margin-trading";
import { termMarketOrderHi } from "./market-order";
import { termOptionsHi } from "./options";
import { termOptionsChainHi } from "./options-chain";
import { termPreMarketTradingHi } from "./pre-market-trading";
import { termPutOptionHi } from "./put-option";
import { termRsuHi } from "./rsu";
import { termShortSellingHi } from "./short-selling";
import { termShortSqueezeHi } from "./short-squeeze";
import { termSmallCapHi } from "./small-cap";
import { termStopLossHi } from "./stop-loss";
import { termStrikePriceHi } from "./strike-price";

// Market Structure
import { termAtTheMarketOfferingHi } from "./at-the-market-offering";
import { termBidAskSpreadHi } from "./bid-ask-spread";
import { termBlockTradeHi } from "./block-trade";
import { termCircuitBreakerHi } from "./circuit-breaker";
import { termDarkPoolHi } from "./dark-pool";
import { termDirectListingHi } from "./direct-listing";
import { termDutchAuctionHi } from "./dutch-auction";
import { termGammaSqueezeHi } from "./gamma-squeeze";
import { termIpoHi } from "./ipo";
import { termMarketMakerHi } from "./market-maker";
import { termReverseMergerHi } from "./reverse-merger";
import { termSecondaryOfferingHi } from "./secondary-offering";
import { termShelfRegistrationHi } from "./shelf-registration";
import { termSpacHi } from "./spac";

// Corporate Actions
import { termAcquisitionHi } from "./acquisition";
import { termCarveOutHi } from "./carve-out";
import { termDividendHi } from "./dividend";
import { termDualClassSharesHi } from "./dual-class-shares";
import { termGoldenParachuteHi } from "./golden-parachute";
import { termLeveragedBuyoutHi } from "./leveraged-buyout";
import { termManagementBuyoutHi } from "./management-buyout";
import { termMergerHi } from "./merger";
import { termPoisonPillHi } from "./poison-pill";
import { termReverseStockSplitHi } from "./reverse-stock-split";
import { termRightsOfferingHi } from "./rights-offering";
import { termShareRepurchaseHi } from "./share-repurchase";
import { termSpecialDividendHi } from "./special-dividend";
import { termSpinOffHi } from "./spin-off";
import { termStaggeredBoardHi } from "./staggered-board";
import { termStockSplitHi } from "./stock-split";
import { termSupermajorityHi } from "./supermajority";
import { termTenderOfferHi } from "./tender-offer";
import { termTreasuryStockHi } from "./treasury-stock";
import { termVotingRightsHi } from "./voting-rights";

// Regulatory & Compliance
import { termAccessionNumberHi } from "./accession-number";
import { termAccreditedInvestorHi } from "./accredited-investor";
import { termBeneficialOwnerHi } from "./beneficial-owner";
import { termBeneficialOwnershipReportHi } from "./beneficial-ownership-report";
import { termBlackoutPeriodHi } from "./blackout-period";
import { termBlueSkyLawsHi } from "./blue-sky-laws";
import { termClawbackProvisionHi } from "./clawback-provision";
import { termDoddFrankHi } from "./dodd-frank";
import { termExecutiveCompensationHi } from "./executive-compensation";
import { termFilerCategoryHi } from "./filer-category";
import { termGoingConcernHi } from "./going-concern";
import { termMaterialWeaknessHi } from "./material-weakness";
import { termQualifiedInstitutionalBuyerHi } from "./qualified-institutional-buyer";
import { termQuietPeriodHi } from "./quiet-period";
import { termRegulationAPlusHi } from "./regulation-a-plus";
import { termRegulationCFHi } from "./regulation-cf";
import { termRegulationDHi } from "./regulation-d";
import { termRegulationFDHi } from "./regulation-fd";
import { termRegulationSKHi } from "./regulation-sk";
import { termRegulationSXHi } from "./regulation-sx";
import { termRule10b5Hi } from "./rule-10b5";
import { termRule144Hi } from "./rule-144";
import { termRule144AHi } from "./rule-144a";
import { termSarbanesOxleyHi } from "./sarbanes-oxley";
import { termSayOnPayHi } from "./say-on-pay";
import { termSecEdgarHi } from "./sec-edgar";
import { termSection16Hi } from "./section-16";
import { termSecuritiesAct1933Hi } from "./securities-act-1933";
import { termSecuritiesExchangeAct1934Hi } from "./securities-exchange-act-1934";
import { termShortSwingProfitHi } from "./short-swing-profit";
import { termSicCodeHi } from "./sic-code";
import { termWhistleblowerProgramHi } from "./whistleblower-program";

// Accounting & Audit
import { termAdjustedEarningsHi } from "./adjusted-earnings";
import { termAdverseOpinionHi } from "./adverse-opinion";
import { termAuditOpinionHi } from "./audit-opinion";
import { termBigFourHi } from "./big-four";
import { termDeferredRevenueHi } from "./deferred-revenue";
import { termDeferredTaxHi } from "./deferred-tax";
import { termEarningsManagementHi } from "./earnings-management";
import { termFinanceLeaseHi } from "./finance-lease";
import { termGaapHi } from "./gaap";
import { termGoodwillHi } from "./goodwill";
import { termIfrsHi } from "./ifrs";
import { termImpairmentHi } from "./impairment";
import { termIntangibleAssetsHi } from "./intangible-assets";
import { termNonGaapMeasuresHi } from "./non-gaap-measures";
import { termOperatingLeaseHi } from "./operating-lease";
import { termProFormaHi } from "./pro-forma";
import { termQualifiedOpinionHi } from "./qualified-opinion";
import { termRestatementHi } from "./restatement";
import { termRightOfUseAssetHi } from "./right-of-use-asset";
import { termStockBasedCompensationHi } from "./stock-based-compensation";

// Investment Strategy
import { termAngelInvestingHi } from "./angel-investing";
import { termAssetAllocationHi } from "./asset-allocation";
import { termCompoundInterestHi } from "./compound-interest";
import { termDollarCostAveragingHi } from "./dollar-cost-averaging";
import { termDripHi } from "./drip";
import { termEtfHi } from "./etf";
import { termFactorInvestingHi } from "./factor-investing";
import { termGrowthInvestingHi } from "./growth-investing";
import { termHedgeFundHi } from "./hedge-fund";
import { termMomentumInvestingHi } from "./momentum-investing";
import { termMutualFundHi } from "./mutual-fund";
import { termPortfolioDiversificationHi } from "./portfolio-diversification";
import { termPrivateEquityHi } from "./private-equity";
import { termRebalancingHi } from "./rebalancing";
import { termTaxLossHarvestingHi } from "./tax-loss-harvesting";
import { termValueInvestingHi } from "./value-investing";
import { termVentureCapitalHi } from "./venture-capital";
import { termWashSaleRuleHi } from "./wash-sale-rule";

/** All Hindi glossary terms, sorted alphabetically by English term name */
export const glossaryTermsHi: GlossaryTerm[] = [
  term10KFilingHi,
  term10QFilingHi,
  term13FFilingHi,
  term8KFilingHi,
  termAccessionNumberHi,
  termAccreditedInvestorHi,
  termAcquisitionHi,
  termAdjustedEarningsHi,
  termAdverseOpinionHi,
  termAfterHoursTradingHi,
  termAlphaHi,
  termAngelInvestingHi,
  termAssetAllocationHi,
  termAssetTurnoverHi,
  termAtTheMarketOfferingHi,
  termAuditOpinionHi,
  termBeneficialOwnerHi,
  termBeneficialOwnershipReportHi,
  termBetaHi,
  termBidAskSpreadHi,
  termBigFourHi,
  termBlackoutPeriodHi,
  termBlockTradeHi,
  termBlueSkyLawsHi,
  termBookValueHi,
  termCallOptionHi,
  termCarveOutHi,
  termCashConversionCycleHi,
  termCircuitBreakerHi,
  termClawbackProvisionHi,
  termCompoundInterestHi,
  termCorrelationHi,
  termCostOfDebtHi,
  termCostOfEquityHi,
  termCoveredCallHi,
  termCurrentRatioHi,
  termDCFHi,
  termDarkPoolHi,
  termDebtToEquityHi,
  termDef14AHi,
  termDeferredRevenueHi,
  termDeferredTaxHi,
  termDilutionHi,
  termDirectListingHi,
  termDividendHi,
  termDividendPayoutRatioHi,
  termDividendYieldHi,
  termDoddFrankHi,
  termDollarCostAveragingHi,
  termDrawdownHi,
  termDripHi,
  termDualClassSharesHi,
  termDutchAuctionHi,
  termEPSHi,
  termEarningsManagementHi,
  termEbitdaHi,
  termEconomicMoatHi,
  termEnterpriseValueHi,
  termEtfHi,
  termExecutiveCompensationHi,
  termFCFYieldHi,
  termFactorInvestingHi,
  termFilerCategoryHi,
  termFinanceLeaseHi,
  termForm11KHi,
  termForm144Hi,
  termForm15Hi,
  termForm20FHi,
  termForm3Hi,
  termForm424BHi,
  termForm4Hi,
  termForm5Hi,
  termForm6KHi,
  termForm8AHi,
  termFormARSHi,
  termFormDHi,
  termFreeCashFlowHi,
  termGaapHi,
  termGammaSqueezeHi,
  termGoingConcernHi,
  termGoldenParachuteHi,
  termGoodwillHi,
  termGrossMarginHi,
  termGrowthInvestingHi,
  termHedgeFundHi,
  termIfrsHi,
  termImpairmentHi,
  termImpliedVolatilityHi,
  termInformationRatioHi,
  termInsiderTradingHi,
  termIntangibleAssetsHi,
  termInterestCoverageHi,
  termIntrinsicValueHi,
  termInventoryTurnoverHi,
  termIpoHi,
  termIronCondorHi,
  termLeverageHi,
  termLeveragedBuyoutHi,
  termLimitOrderHi,
  termManagementBuyoutHi,
  termMarginOfSafetyHi,
  termMarginTradingHi,
  termMarketCapitalizationHi,
  termMarketMakerHi,
  termMarketOrderHi,
  termMaterialWeaknessHi,
  termMergerHi,
  termMomentumInvestingHi,
  termMutualFundHi,
  termNT10KHi,
  termNT10QHi,
  termNetMarginHi,
  termNonGaapMeasuresHi,
  termOperatingLeaseHi,
  termOperatingMarginHi,
  termOptionsHi,
  termOptionsChainHi,
  termPEGRatioHi,
  termPeRatioHi,
  termPoisonPillHi,
  termPortfolioDiversificationHi,
  termPre14AHi,
  termPreMarketTradingHi,
  termPriceToBookHi,
  termPriceToSalesHi,
  termPrivateEquityHi,
  termProFormaHi,
  termProxyStatementHi,
  termPutOptionHi,
  termQualifiedInstitutionalBuyerHi,
  termQualifiedOpinionHi,
  termQuickRatioHi,
  termQuietPeriodHi,
  termRSquaredHi,
  termROAHi,
  termROEHi,
  termROICHi,
  termRebalancingHi,
  termReceivablesTurnoverHi,
  termRegulationAPlusHi,
  termRegulationCFHi,
  termRegulationDHi,
  termRegulationFDHi,
  termRegulationSKHi,
  termRegulationSXHi,
  termRestatementHi,
  termRevenueRecognitionHi,
  termReverseMergerHi,
  termReverseStockSplitHi,
  termRightOfUseAssetHi,
  termRightsOfferingHi,
  termRsuHi,
  termRule10b5Hi,
  termRule144Hi,
  termRule144AHi,
  termS1FilingHi,
  termS3FilingHi,
  termSCTOHi,
  termSarbanesOxleyHi,
  termSayOnPayHi,
  termSchedule13DHi,
  termSchedule13GHi,
  termSecEdgarHi,
  termSecondaryOfferingHi,
  termSection16Hi,
  termSecuritiesAct1933Hi,
  termSecuritiesExchangeAct1934Hi,
  termShareRepurchaseHi,
  termSharpeRatioHi,
  termShelfRegistrationHi,
  termShortSellingHi,
  termShortSqueezeHi,
  termShortSwingProfitHi,
  termSicCodeHi,
  termSmallCapHi,
  termSortinoRatioHi,
  termSpacHi,
  termSpecialDividendHi,
  termSpinOffHi,
  termStaggeredBoardHi,
  termStandardDeviationHi,
  termStockBasedCompensationHi,
  termStockSplitHi,
  termStopLossHi,
  termStrikePriceHi,
  termSupermajorityHi,
  termTaxLossHarvestingHi,
  termTenderOfferHi,
  termTerminalValueHi,
  termTrackingErrorHi,
  termTreasuryStockHi,
  termValueInvestingHi,
  termVentureCapitalHi,
  termVolatilityHi,
  termVotingRightsHi,
  termWACCHi,
  termWashSaleRuleHi,
  termWhistleblowerProgramHi,
  termWorkingCapitalHi,
];

/** Hindi glossary terms organized by topic (for the index page) */
export const glossaryTopicsHi = {
  "SEC फॉर्म": [
    term10KFilingHi,
    term10QFilingHi,
    term13FFilingHi,
    term8KFilingHi,
    termDef14AHi,
    termForm3Hi,
    termForm4Hi,
    termForm5Hi,
    termForm6KHi,
    termForm8AHi,
    termForm11KHi,
    termForm15Hi,
    termForm20FHi,
    termForm144Hi,
    termForm424BHi,
    termFormARSHi,
    termFormDHi,
    termNT10KHi,
    termNT10QHi,
    termPre14AHi,
    termProxyStatementHi,
    termS1FilingHi,
    termS3FilingHi,
    termSCTOHi,
    termSchedule13DHi,
    termSchedule13GHi,
  ],
  "वित्तीय मापदंड": [
    termAssetTurnoverHi,
    termBookValueHi,
    termCashConversionCycleHi,
    termCostOfDebtHi,
    termCostOfEquityHi,
    termCurrentRatioHi,
    termDCFHi,
    termDebtToEquityHi,
    termDividendPayoutRatioHi,
    termDividendYieldHi,
    termEbitdaHi,
    termEconomicMoatHi,
    termEnterpriseValueHi,
    termEPSHi,
    termFCFYieldHi,
    termFreeCashFlowHi,
    termGrossMarginHi,
    termInterestCoverageHi,
    termIntrinsicValueHi,
    termInventoryTurnoverHi,
    termMarginOfSafetyHi,
    termMarketCapitalizationHi,
    termNetMarginHi,
    termOperatingMarginHi,
    termPeRatioHi,
    termPEGRatioHi,
    termPriceToBookHi,
    termPriceToSalesHi,
    termQuickRatioHi,
    termReceivablesTurnoverHi,
    termRevenueRecognitionHi,
    termROAHi,
    termROEHi,
    termROICHi,
    termTerminalValueHi,
    termWACCHi,
    termWorkingCapitalHi,
  ],
  "जोखिम मापदंड": [
    termAlphaHi,
    termBetaHi,
    termCorrelationHi,
    termDrawdownHi,
    termInformationRatioHi,
    termRSquaredHi,
    termSharpeRatioHi,
    termSortinoRatioHi,
    termStandardDeviationHi,
    termTrackingErrorHi,
    termVolatilityHi,
  ],
  "ट्रेडिंग शब्द": [
    termAfterHoursTradingHi,
    termCallOptionHi,
    termCoveredCallHi,
    termDilutionHi,
    termImpliedVolatilityHi,
    termInsiderTradingHi,
    termIronCondorHi,
    termLeverageHi,
    termLimitOrderHi,
    termMarginTradingHi,
    termMarketOrderHi,
    termOptionsHi,
    termOptionsChainHi,
    termPreMarketTradingHi,
    termPutOptionHi,
    termRsuHi,
    termShortSellingHi,
    termShortSqueezeHi,
    termSmallCapHi,
    termStopLossHi,
    termStrikePriceHi,
  ],
  "बाज़ार संरचना": [
    termAtTheMarketOfferingHi,
    termBidAskSpreadHi,
    termBlockTradeHi,
    termCircuitBreakerHi,
    termDarkPoolHi,
    termDirectListingHi,
    termDutchAuctionHi,
    termGammaSqueezeHi,
    termIpoHi,
    termMarketMakerHi,
    termReverseMergerHi,
    termSecondaryOfferingHi,
    termShelfRegistrationHi,
    termSpacHi,
  ],
  "कॉर्पोरेट कार्रवाई": [
    termAcquisitionHi,
    termCarveOutHi,
    termDividendHi,
    termDualClassSharesHi,
    termGoldenParachuteHi,
    termLeveragedBuyoutHi,
    termManagementBuyoutHi,
    termMergerHi,
    termPoisonPillHi,
    termReverseStockSplitHi,
    termRightsOfferingHi,
    termShareRepurchaseHi,
    termSpecialDividendHi,
    termSpinOffHi,
    termStaggeredBoardHi,
    termStockSplitHi,
    termSupermajorityHi,
    termTenderOfferHi,
    termTreasuryStockHi,
    termVotingRightsHi,
  ],
  "नियामक अवधारणाएँ": [
    termAccessionNumberHi,
    termAccreditedInvestorHi,
    termBeneficialOwnerHi,
    termBeneficialOwnershipReportHi,
    termBlackoutPeriodHi,
    termBlueSkyLawsHi,
    termClawbackProvisionHi,
    termDoddFrankHi,
    termExecutiveCompensationHi,
    termFilerCategoryHi,
    termGoingConcernHi,
    termMaterialWeaknessHi,
    termQualifiedInstitutionalBuyerHi,
    termQuietPeriodHi,
    termRegulationAPlusHi,
    termRegulationCFHi,
    termRegulationDHi,
    termRegulationFDHi,
    termRegulationSKHi,
    termRegulationSXHi,
    termRule10b5Hi,
    termRule144Hi,
    termRule144AHi,
    termSarbanesOxleyHi,
    termSayOnPayHi,
    termSecEdgarHi,
    termSection16Hi,
    termSecuritiesAct1933Hi,
    termSecuritiesExchangeAct1934Hi,
    termShortSwingProfitHi,
    termSicCodeHi,
    termWhistleblowerProgramHi,
  ],
  "लेखा और ऑडिट": [
    termAdjustedEarningsHi,
    termAdverseOpinionHi,
    termAuditOpinionHi,
    termBigFourHi,
    termDeferredRevenueHi,
    termDeferredTaxHi,
    termEarningsManagementHi,
    termFinanceLeaseHi,
    termGaapHi,
    termGoodwillHi,
    termIfrsHi,
    termImpairmentHi,
    termIntangibleAssetsHi,
    termNonGaapMeasuresHi,
    termOperatingLeaseHi,
    termProFormaHi,
    termQualifiedOpinionHi,
    termRestatementHi,
    termRightOfUseAssetHi,
    termStockBasedCompensationHi,
  ],
  "निवेश रणनीति": [
    termAngelInvestingHi,
    termAssetAllocationHi,
    termCompoundInterestHi,
    termDollarCostAveragingHi,
    termDripHi,
    termEtfHi,
    termFactorInvestingHi,
    termGrowthInvestingHi,
    termHedgeFundHi,
    termMomentumInvestingHi,
    termMutualFundHi,
    termPortfolioDiversificationHi,
    termPrivateEquityHi,
    termRebalancingHi,
    termTaxLossHarvestingHi,
    termValueInvestingHi,
    termVentureCapitalHi,
    termWashSaleRuleHi,
  ],
};
