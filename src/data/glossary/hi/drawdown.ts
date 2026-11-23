import type { GlossaryTerm } from "../../types";

export const termDrawdownHi: GlossaryTerm = {
  slug: "drawdown",
  term: "Maximum Drawdown (मैक्सिमम ड्रॉडाउन)",
  title: "Maximum Drawdown — Worst-Case Peak-to-Trough Loss",
  shortDefinition: "Maximum drawdown investment value में largest peak-to-trough decline measure करता है specific period में, worst loss capture करता है investor experience करता।",
  metaDescription: "Maximum drawdown क्या है? Calculate कैसे करें, volatility से many investors के लिए ज़्यादा क्यों matter करता है, और risk assessment कैसे use करें।",
  wordCount: 420, category: "Risk Metrics", tags: ["drawdown", "maximum-drawdown", "risk-metrics", "loss", "portfolio-management"],
  relatedSlugs: ["standard-deviation", "volatility", "sharpe-ratio", "sortino-ratio"], relatedTerms: ["standard-deviation", "volatility", "sharpe-ratio", "sortino-ratio"],
  faq: [{ question: "Maximum drawdown कैसे calculate करें?", answer: "Largest percentage decline किसी peak से subsequent trough तक new peak establish होने से पहले। हर time point: Drawdown = (Current Value - Peak Value) / Peak Value। Maximum drawdown series की most negative value। Worst possible timing scenario capture — peak पर buy, trough पर sell।" },
  { question: "Stock market का typical maximum drawdown कितना है?", answer: "S&P 500 drawdowns: ~50% 2000-2002 dot-com crash, 57% 2007-2009 financial crisis, 34% 2020 COVID crash। 10-20% corrections (corrections) average हर few years। Equity investing baseline risk — 30-50% losses lifetime में expect करें।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>Maximum drawdown investors को रात में जगाने वाला question answer करता है: कितना बुरा हो सकता है? Standard deviation average risk behavior describe करता है, maximum drawdown extreme capture — highest से lowest point तक worst-case loss recovery से पहले। सबसे intuitive risk metric क्योंकि directly real money lost और real time underwater translate।</p>

<h2>Drawdown की Anatomy</h2>
<p><strong>Depth:</strong> Peak से trough percentage decline — headline number। 40% drawdown मतलब peak value का 40% lost।</p>
<p><strong>Duration:</strong> Peak से full recovery total time। 2007-2009 S&P 500 57% drawdown 2013 तक recovery — 5.5-year round trip।</p>
<p><strong>Recovery time:</strong> Trough से new peak — investor unrealized losses hold करता है, break even wait — psychologically most difficult phase।</p>

<h2>Recovery की Mathematics</h2>
<p>Drawdowns recovery gains से asymmetric relationship रखती हैं। 10% loss = 11.1% gain break even। 25% loss = 33%। 50% loss = 100%। 75% loss = 300%। Large drawdowns disproportionately destructive — deeper hole, exponentially harder climb out।</p>

<p>8% annual return 15% max drawdown portfolio 20 years significantly ज़्यादा wealth compound करेगा 10% annual return 45% max drawdown — severe drawdown compounding process years set back।</p>

<h2>Behavioral Impact</h2>
<p>Investors most likely sell (capitulate) near drawdown bottom — pain greatest, fear most intense। Recovery miss, losses lock in। "Best" strategy necessarily highest return नहीं — investor actually stick with through inevitable drawdowns वो।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>Indian markets ने भी significant drawdowns experience किए: Sensex 2008 ~60% decline, 2020 COVID ~38%। Indian investors US stocks invest करते समय drawdown INR terms में ज़्यादा या कम हो सकता है currency movements depend करके। 2008 में S&P 500 ~57% decline + INR depreciation = INR terms में ज़्यादा severe drawdown Indian investors के लिए।</p>

<p>Risk management tip: Indian और US markets different drawdown patterns रखती हैं — partial correlation मतलब diversification benefit। Portfolio drawdown reduce करने international diversification (India + US + bonds) effective strategy। Maximum drawdown tolerance personally define करें — 30% tolerate कर सकते हैं? 50%? Asset allocation accordingly set करें।</p>

<p>Brefyr पर SEC filings से financial data business risks समझने context provide करता है जो stock drawdowns drive करती हैं।</p>
`,
};
