import type { GlossaryTerm } from "../../types";

export const termRSquaredHi: GlossaryTerm = {
  slug: "r-squared",
  term: "R-Squared (आर-स्क्वेयर्ड)",
  title: "R-Squared — Stock की कितनी Movement Market से Explain होती है",
  shortDefinition:
    "R-squared measure करता है कि investment की return variability का कितना percentage benchmark index की movements से explain होता है — investment benchmark को कितना closely track करता है।",
  metaDescription:
    "R-squared क्या है? Stocks और funds के लिए कैसे interpret करें, R-squared और beta की relationship, और कब low R-squared actually अच्छा है।",
  wordCount: 430,
  category: "Risk Metrics",
  tags: ["r-squared", "correlation", "risk-metrics", "benchmark", "portfolio-management"],
  relatedSlugs: ["beta", "correlation", "alpha", "tracking-error"],
  relatedTerms: ["beta", "correlation", "alpha", "tracking-error"],
  faq: [
    {
      question: "R-squared 0.85 का क्या मतलब है?",
      answer:
        "R-squared 0.85 (या 85%) मतलब investment की return variability का 85% benchmark movements से explain होता है। बाकी 15% investment-specific factors से आता है — company-specific news, sector rotation, manager decisions। Actively managed fund के लिए, 85% performance market exposure से driven है और सिर्फ 15% manager के active decisions से।",
    },
    {
      question: "Beta interpret करते समय R-squared क्यों matter करता है?",
      answer:
        "Beta market sensitivity measure करता है, लेकिन R-squared बताता है कि measurement कितना reliable है। Beta 1.3 और R-squared 0.90 वाला stock genuinely predictable तरीके से market के साथ move करता है। Beta 1.3 और R-squared 0.15 वाले stock का beta estimate statistically unreliable है। CAPM cost of equity calculations में low R-squared beta use करने से wildly inaccurate results आ सकते हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>R-squared बताता है कि investment का behavior कितना market द्वारा driven है versus बाकी सब। यह statistical measure of fit है उस regression से जो beta भी produce करता है। अगर R-squared high है, investment essentially market है leverage factor (beta) के साथ। अगर R-squared low है, investment अपनी खुद की beat पर चलता है — returns company-specific, sector-specific, या strategy-specific factors से driven हैं।</p>

<h2>Calculation</h2>

<p><strong>R-Squared = (Investment returns और benchmark returns के बीच Correlation)^2</strong></p>

<p>R-squared 0 से 1 (या 0% से 100%) range करता है। Correlation 0.9 R-squared 0.81 produce करता है। Correlation -0.7 R-squared 0.49 produce करता है — R-squared positive और negative correlation distinguish नहीं करता; explanatory power measure करता है regardless of direction।</p>

<h2>Closet Indexing Detect करना</h2>

<p>R-squared investment industry की सबसे common और costly practice reveal करता है: <strong>closet indexing</strong>। जब actively managed fund active management fees charge करे (1.0-1.5% annually) लेकिन benchmark के साथ R-squared 0.95 से ज़्यादा हो, fund essentially expensive index fund है। Returns almost entirely market exposure से explain होते हैं — manager के "active" decisions virtually nothing explain करते।</p>

<p>Active fees pay करने वाले investors को active management demand करनी चाहिए — R-squared low enough हो जो genuine deviation indicate करे।</p>

<h2>Beta Quality Check के लिए R-Squared</h2>

<p>Beta तभी meaningful है जब R-squared sufficiently high हो। Low R-squared में data points regression line से widely scattered होते हैं — slope estimate unreliable और potentially misleading। Biotech stock जिसका S&P 500 के साथ R-squared सिर्फ 0.10 है, calculated beta 0.3 हो सकता है — लेकिन stock low-risk नहीं है। ऐसे stocks के लिए industry-average beta या 1.0 की तरफ adjust करना ज़्यादा realistic।</p>

<h2>Portfolio Construction में Use</h2>

<p>R-squared diversification benefits समझने के लिए valuable है। Low R-squared वाला investment existing holdings से different factors से driven होता है — portfolio risk ज़्यादा reduce करता है high R-squared investment की तुलना में।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>Indian investors जो US mutual funds या ETFs evaluate करते हैं, R-squared check करना essential है closet indexing detect करने के लिए। Brefyr पर company financial data और market data stock performance के fundamental drivers समझने में मदद करता है।</p>
`,
};
