import type { GlossaryTerm } from "../../types";

export const termCorrelationHi: GlossaryTerm = {
  slug: "correlation",
  term: "Correlation (सहसंबंध)",
  title: "Correlation — Investments एक साथ कैसे Move करती हैं (या नहीं)",
  shortDefinition:
    "Correlation measure करता है कि दो investments की returns किस degree तक एक साथ move करती हैं, +1 (perfect lockstep) से -1 (perfect opposition) तक, और portfolio diversification का foundation है।",
  metaDescription:
    "Correlation investing में क्या है? Diversification कैसे drive करता है, crises में correlations क्यों change होती हैं, और truly diversified portfolios कैसे build करें।",
  wordCount: 420,
  category: "Risk Metrics",
  tags: ["correlation", "diversification", "risk-metrics", "portfolio-management", "statistics"],
  relatedSlugs: ["r-squared", "standard-deviation", "beta", "volatility"],
  relatedTerms: ["r-squared", "standard-deviation", "beta", "volatility"],
  faq: [
    {
      question: "Different correlation values का क्या मतलब है?",
      answer:
        "+1.0: perfect positive — दोनों assets हमेशा same direction proportional amounts में move। 0.0: no correlation — assets independently move करती हैं। -1.0: perfect negative — हमेशा opposite directions। Practice में most stock pairs +0.3 और +0.8 बीच correlations रखती हैं। Stocks और bonds historically near zero या slightly negative correlations दिखाती हैं — इसलिए portfolios में अच्छे combine होते हैं।",
    },
    {
      question: "Market crises में correlations increase क्यों होती हैं?",
      answer:
        "Crises में fear और forced selling common factor asset-specific factors overwhelm करता है। Investors liquid assets sell करते हैं regardless of fundamentals। Margin calls forced sales trigger करती हैं। Result: normally low correlation assets एक साथ move करने लगती हैं — 'correlation convergence' — diversification benefit precisely तब reduce होता है जब सबसे ज़्यादा ज़रूरत है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Correlation diversification का mathematical engine है — finance में only free lunch। Assets combine करके जिनकी returns perfect lockstep में move नहीं करतीं, investors portfolio risk reduce कर सकते हैं without proportionally expected return reduce किए। Lower correlation, greater diversification benefit। Portfolio construct करने वाले हर investor के लिए correlation समझना essential है।</p>

<h2>Correlation Scale</h2>

<p><strong>+1.0 (perfect positive):</strong> दोनों assets हमेशा same direction और proportion। No diversification benefit। Identical index funds tracking same benchmark approach +1.0।</p>

<p><strong>0.0 (zero correlation):</strong> Assets independently move। एक की return जानकर दूसरी predict नहीं कर सकते। Meaningful diversification provide करता है।</p>

<p><strong>-1.0 (perfect negative):</strong> हमेशा opposite directions। Hedging के लिए theoretical ideal। Real financial assets में essentially exist नहीं करता, लेकिन moderately negative correlations powerful portfolio protection provide करती हैं।</p>

<h2>Correlation Instability</h2>

<p>सबसे dangerous assumption: future correlations past resemble करेंगी। Correlations fixed constants नहीं — market regimes, economic conditions, और policy changes से shift होती हैं। Most critical: market stress में correlations increase tend करती हैं। Normal markets में low correlation assets crashes में highly correlated बन सकती हैं।</p>

<p>Stock-bond correlation decades में dramatically shift हुई है। 2000-2020 negatively correlated — bonds rose when stocks fell। 2022 में positive हो गई — rising interest rates ने stocks और bonds दोनों hurt किए।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>Indian investors के लिए correlation especially relevant है cross-border diversification में। Indian equities (Nifty 50) और US equities (S&P 500) historically moderate correlation (~0.4-0.6) रखती हैं — perfect lockstep नहीं, meaningful diversification benefit provide करती हैं। Gold (traditionally Indian portfolios में significant) low-to-negative correlation stocks से रखता है — crisis hedge के रूप में valuable।</p>

<p>INR/USD currency correlation भी consider करें — INR depreciation during global crises actually US investments की INR value boost कर सकती है, natural hedge provide करता है। Indian Government Bonds और US Treasuries different monetary policies follow करती हैं, correlation vary करती है।</p>

<p>Brefyr पर SEC filings से financial data return correlations drive करने वाली fundamental characteristics understand करने में help करता है।</p>
`,
};
