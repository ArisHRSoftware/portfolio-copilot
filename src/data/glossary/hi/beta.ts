import type { GlossaryTerm } from "../../types";

export const termBetaHi: GlossaryTerm = {
  slug: "beta",
  term: "Beta (बीटा)",
  title: "Beta — Stock की Market Movements के प्रति Sensitivity Measure करना",
  shortDefinition:
    "Beta measure करता है कि stock की price overall market relative कितना move करती है, systematic risk quantify करता है जो investors diversify away नहीं कर सकते।",
  metaDescription:
    "Beta investing में क्या है? Beta values interpret करना, CAPM और portfolio construction में beta क्यों matter करता है, और beta कब mislead करता है।",
  wordCount: 430,
  category: "Risk Metrics",
  tags: ["beta", "systematic-risk", "risk-metrics", "capm", "portfolio-management"],
  relatedSlugs: ["alpha", "standard-deviation", "r-squared", "cost-of-equity"],
  relatedTerms: ["alpha", "standard-deviation", "r-squared", "cost-of-equity"],
  faq: [
    {
      question: "Beta 1.5 का क्या मतलब है?",
      answer:
        "Beta 1.5 मतलब stock historically market से 50% ज़्यादा volatile है। Market 10% rise करे, तो stock tend करता है 15% rise। Market 10% fall करे, तो stock 15% fall। Higher beta मतलब market movements दोनों directions में higher sensitivity। Beta 1.0 मतलब stock market के साथ move करता है; 1.0 से नीचे मतलब market से कम volatile।",
    },
    {
      question: "Low beta हमेशा safer है?",
      answer:
        "Necessarily नहीं। Beta सिर्फ systematic (market-related) risk measure करता है। Stock low beta रख सकती है लेकिन high company-specific risk — biotech company FDA decision await कर रही है beta 0.5 (low market correlation) हो सकता है लेकिन enormous binary risk। Beta tail risks, liquidity risk, या regime changes capture नहीं करता।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Beta modern portfolio theory का risk measurement foundation है। यह stock की volatility का वो portion isolate करता है जो overall market movements से आता है — systematic risk जो सभी stocks varying degrees में affect करता है। Recession most companies hurt करती है; rising interest rates nearly हर sector affect करती हैं। Beta quantify करता है कि हर individual stock इन market-wide forces के प्रति कितनी sensitive है।</p>

<h2>Beta Values Interpret करना</h2>

<p><strong>Beta = 1.0:</strong> Stock market के साथ perfect sync में move करता है। Most large-cap diversified companies 1.0 near cluster करती हैं।</p>

<p><strong>Beta > 1.0 (high beta):</strong> Stock market movements amplify करता है। Technology stocks, growth companies, small-caps typically 1.2-2.0 betas। Bull markets में greater upside लेकिन bear markets में greater drawdown risk।</p>

<p><strong>Beta < 1.0 (low beta):</strong> Stock market movements dampen करता है। Utilities, consumer staples, healthcare typically 0.3-0.8 betas। Downturns में relative stability लेकिन strong rallies में lag।</p>

<p><strong>Negative beta:</strong> Stock market inversely move करता है। Individual stocks में rare। Gold और कुछ inverse ETFs sometimes negative betas show करते हैं।</p>

<h2>CAPM में Beta की Role</h2>

<p>Beta capital asset pricing model का critical input है: <strong>Re = Rf + Beta x ERP</strong>। Beta 1.5 stock और 6% equity risk premium मतलब 9% risk premium above risk-free rate। यह directly WACC affect करता है — higher-beta company higher WACC, lower intrinsic value।</p>

<p>High-beta stocks higher long-term returns deliver करने चाहिए higher volatility compensate करने के लिए। लेकिन "low-beta anomaly" research suggest करती है low-beta stocks surprisingly competitive risk-adjusted returns deliver करती हैं।</p>

<h2>Limitations</h2>

<p>Beta backward-looking है — historical data से calculate होता है, future risk reflect नहीं कर सकता। Massive debt लेने, major customer lose करने, या new industry enter करने के बाद company की risk profile historical beta से very different हो सकती है।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>Indian investors Nifty 50 या Sensex relative beta से familiar हैं। US stocks evaluate करते समय beta S&P 500 relative calculate होता है। Indian IT stocks (Infosys, TCS) relatively low beta रखती हैं US-listed stocks में — defensive businesses। लेकिन currency risk (INR depreciation) एक additional volatility layer add करता है जो beta capture नहीं करता। Reliance Industries ADR beta और BSE-listed Reliance beta different हो सकता है क्योंकि different market benchmarks और investor bases हैं।</p>

<p>Brefyr पर SEC filings से financial data market data के साथ combine होकर risk assessment enable करता है।</p>
`,
};
