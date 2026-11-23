import type { GlossaryTerm } from "../../types";

export const termStandardDeviationHi: GlossaryTerm = {
  slug: "standard-deviation",
  term: "Standard Deviation (स्टैंडर्ड डेविएशन)",
  title: "Standard Deviation — Investment Volatility का सबसे Common Measure",
  shortDefinition:
    "Standard deviation investment returns का average के around dispersion measure करता है — returns period to period कितना fluctuate करते हैं। Higher standard deviation मतलब greater volatility और uncertainty।",
  metaDescription:
    "Investing में standard deviation क्या है? Volatility कैसे measure करता है, high/low reading का मतलब, और portfolio risk assessment के लिए कैसे use करें।",
  wordCount: 430,
  category: "Risk Metrics",
  tags: ["standard-deviation", "volatility", "risk-metrics", "statistics", "portfolio-management"],
  relatedSlugs: ["volatility", "sharpe-ratio", "beta", "drawdown"],
  relatedTerms: ["volatility", "sharpe-ratio", "beta", "drawdown"],
  faq: [
    {
      question: "Standard deviation investors को क्या बताता है?",
      answer:
        "Investment returns average से कितना vary करते हैं। Stock 10% average annual return और 20% standard deviation: roughly two-thirds time annual returns -10% और +30% (one standard deviation) के बीच। About 95% time -30% और +50% (two standard deviations)। Higher standard deviation: wider swings, ज़्यादा uncertainty।",
    },
    {
      question: "Stocks vs bonds typical standard deviation?",
      answer:
        "U.S. large-cap stocks (S&P 500) historical annualized: approximately 15-18%। Small-cap stocks: 20-25%। International stocks: 17-22%। Investment-grade bonds: 4-6%। Treasury bonds: 3-5%। Higher-return asset classes proportionally higher volatility — risk-return tradeoff।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Standard deviation finance में bedrock risk measurement है। Analyst, fund manager, financial advisor "risk" कहें, usually volatility मतलब standard deviation। <strong>Investment returns के बारे में सबसे fundamental uncertainty capture करता है: outcomes expected result से कितना widely vary करते हैं।</strong> 10% expected return और 5% standard deviation: fairly predictable। Same expected return 30% standard deviation: wildly unpredictable। Destination same, journey turbulence vastly different।</p>

<h2>Calculation</h2>

<p><strong>Standard Deviation = Square Root of [ Sum of (Each Return - Average Return)^2 / (N - 1) ]</strong></p>

<p>हर observed return और mean return के बीच difference square करें, squared differences average करें, square root लें। Annualization: monthly standard deviation × square root of 12। Daily × square root of 252।</p>

<h2>Normal Distribution Assumption</h2>

<p>Standard deviation की interpretive power normal distribution से आती है। Returns normally distributed हों तो: 68.2% observations एक standard deviation में, 95.4% दो में, 99.7% तीन में। Probabilistic framework future returns think करने के लिए।</p>

<p>लेकिन real-world returns perfectly normal नहीं हैं। Fat tails (extreme events ज़्यादा frequent), negative skew (large losses ज़्यादा common)। 2008 crisis: कई assets 4-5 standard deviations below mean — normal distribution predicts once in 10,000-100,000 years। <strong>Standard deviation extreme events probability understate करता है।</strong></p>

<h2>Portfolio Context</h2>

<p>Standard deviation की greatest utility portfolio construction में। Portfolio standard deviation individual assets की simply weighted average नहीं — correlations पर भी depend। Assets less than perfectly correlated हों (almost always), combine करने पर portfolio standard deviation reduce। <strong>Diversification का mathematical foundation।</strong></p>

<p>60/40 stock-bond portfolio industry standard बना precisely इसलिए — meaningful risk reduction with modest return sacrifice। Stock-bond correlations low/negative many market regimes में।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>Indian market (Nifty 50) historically US market (S&P 500) से higher standard deviation — emerging market volatility। India-US diversified portfolio potential risk reduction offer। Standard deviation Brefyr पर company data alongside evaluate करें — business risk assessment thousands of companies।</p>
`,
};
