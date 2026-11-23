import type { GlossaryTerm } from "../../types";

export const termSortinoRatioHi: GlossaryTerm = {
  slug: "sortino-ratio",
  term: "Sortino Ratio (सॉर्टिनो रेशियो)",
  title: "Sortino Ratio — Downside Pain पर Focus करने वाला Risk-Adjusted Return",
  shortDefinition:
    "Sortino ratio risk-adjusted return measure करता है सिर्फ downside deviation risk measure के रूप में use करके — harmful volatility (losses) penalize करता है, total volatility (gains सहित) नहीं।",
  metaDescription:
    "Sortino ratio क्या है? Sharpe ratio पर कैसे improve करता है, calculate कैसे करें, और downside risk पर focus investor concerns बेहतर reflect क्यों करता है।",
  wordCount: 420,
  category: "Risk Metrics",
  tags: ["sortino-ratio", "downside-risk", "risk-metrics", "risk-adjusted-return", "portfolio-management"],
  relatedSlugs: ["sharpe-ratio", "standard-deviation", "drawdown", "volatility"],
  relatedTerms: ["sharpe-ratio", "standard-deviation", "drawdown", "volatility"],
  faq: [
    {
      question: "Sortino ratio Sharpe ratio से कैसे different है?",
      answer:
        "दोनों return per unit of risk measure करते हैं, लेकिन risk differently define करते हैं। Sharpe ratio total standard deviation use करता है (upside + downside equally)। Sortino ratio सिर्फ downside deviation — target rate (usually zero/risk-free rate) से नीचे returns की volatility। Investors positive surprises penalize नहीं करना चाहते — 30% unexpected gain Sharpe denominator increase करता है लेकिन Sortino denominator नहीं।",
    },
    {
      question: "Good Sortino ratio कितना होता है?",
      answer:
        "Sortino ratios typically Sharpe ratios से higher होते हैं (downside deviation smaller number)। 2.0 से ऊपर good। 3.0 से ऊपर excellent। S&P 500 का long-term Sortino ratio approximately 0.8-1.0। Absolute return targeting hedge funds 2.0 या higher benchmark करते हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Sortino ratio Sharpe ratio के risk measurement approach को refine करता है एक truth recognize करके जो हर investor intuitively समझता है: <strong>upside volatility risk नहीं है</strong>। Stock great earnings report पर 20% jump करे, वो volatility desirable है। 20% drop bad news पर, वो volatility investors fear करते हैं। Sharpe ratio दोनों lump करता है। Sortino ratio separate करता है — सिर्फ downside volatility count करता है जो actually hurt करती है।</p>

<h2>Calculation</h2>

<p><strong>Sortino Ratio = (Rp - T) / Downside Deviation</strong></p>

<p>Rp portfolio return, T target या minimum acceptable return (अक्सर zero/risk-free rate), downside deviation सिर्फ उन returns की standard deviation जो target से नीचे fall करें। Target से ऊपर returns calculation से entirely excluded — core innovation।</p>

<h2>Downside क्यों ज़्यादा Matter करता है</h2>

<p>Behavioral finance research (Kahneman, Tversky) दिखाता है कि losses equivalent gains से approximately दोगुना hurt करती हैं — loss aversion। 10% portfolio loss recover करने के लिए 11.1% gain चाहिए। 50% loss के लिए 100% gain। Losses का asymmetric mathematics means large downside moves avoid करना equally important है large upside capture करने जितना।</p>

<p>Sortino ratio risk measurement इस reality से align करता है। Consistent या positively skewed returns strategies reward करता है — modest/rare losses, occasional large gains।</p>

<h2>Asymmetric Strategies Evaluate करना</h2>

<p>Sortino ratio especially valuable है non-normal return distributions वाली strategies evaluate करने में। <strong>Venture capital</strong>: कई small losses, occasional enormous gains — Sharpe large gains penalize करता है, Sortino correctly evaluate।</p>

<p><strong>Options selling strategies</strong>: Small consistent gains, rare catastrophic losses — Sharpe excellent दिखाता है, Sortino reality check provide करता है downside events focus करके।</p>

<h2>Practical Application</h2>

<p>Portfolio construction में, high Sortino ratio वाले investments limited downside रखते हैं — market stress में blow up नहीं करते। Similar Sharpe ratios वाले दो funds में, higher Sortino ratio वाला typically better choice — risk-adjusted return कम downside pain के साथ achieve करता है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>Indian investors funds evaluate करते समय Sortino ratio essential है — especially volatile markets (Nifty crashes) में downside protection assess करने के लिए। Brefyr पर SEC filings financial data risk characteristics evaluate करने में context provide करता है।</p>
`,
};
