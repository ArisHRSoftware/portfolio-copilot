import type { GlossaryTerm } from "../../types";

export const termSharpeRatioHi: GlossaryTerm = {
  slug: "sharpe-ratio",
  term: "Sharpe Ratio (शार्प रेशियो)",
  title: "Sharpe Ratio — हर Unit of Risk पर कितना Return",
  shortDefinition:
    "Sharpe ratio risk-adjusted return measure करता है — risk-free rate से excess return को returns की standard deviation से divide करके — दिखाता है investment total volatility की हर unit पर कितना return earn करता है।",
  metaDescription:
    "Sharpe ratio क्या है? कैसे calculate और interpret करें, good Sharpe ratio क्या है, और सबसे widely used risk-adjusted metric क्यों है।",
  wordCount: 430,
  category: "Risk Metrics",
  tags: ["sharpe-ratio", "risk-adjusted-return", "risk-metrics", "portfolio-management", "volatility"],
  relatedSlugs: ["sortino-ratio", "standard-deviation", "alpha", "information-ratio"],
  relatedTerms: ["sortino-ratio", "standard-deviation", "alpha", "information-ratio"],
  faq: [
    {
      question: "Good Sharpe ratio कितना होता है?",
      answer:
        "1.0 से ऊपर good माना जाता है — per unit risk एक unit से ज़्यादा return। 2.0 से ऊपर excellent और rare। 3.0 से ऊपर exceptional — usually not sustainable long-term। S&P 500 का long-term Sharpe ratio approximately 0.4-0.5। Hedge funds 1.0-2.0 target करते हैं। 3.0 से ज़्यादा persistent Sharpe claim extreme skepticism से देखें — hidden risks हो सकते हैं।",
    },
    {
      question: "Sharpe ratio और Sortino ratio में difference?",
      answer:
        "Sharpe ratio total standard deviation (upside + downside volatility) risk measure के रूप में use करता है। Sortino ratio सिर्फ downside deviation — minimum threshold से नीचे returns की volatility। Sortino ज़्यादा relevant है investors के लिए क्योंकि upside volatility (unexpected gains) desirable है, risky नहीं। High upside variance strategy Sharpe penalize करता है लेकिन Sortino correctly reward करता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Sharpe ratio, Nobel laureate William Sharpe ने 1966 में develop किया, finance में risk-adjusted performance का सबसे widely used measure है। Insight profound और simple: <strong>raw returns बिना context meaningless हैं</strong>। 20% return impressive लगता है जब तक पता न चले 40% volatility आई — risk-adjusted performance mediocre। 10% return 8% volatility के साथ far superior है। Sharpe ratio इस intuition को single number में formalize करता है।</p>

<h2>Calculation</h2>

<p><strong>Sharpe Ratio = (Rp - Rf) / Sigma_p</strong></p>

<p>Rp portfolio return, Rf risk-free rate, Sigma_p portfolio returns की standard deviation। Numerator (excess return) measure करता है risk-free alternative से कितना outperform किया। Denominator (volatility) risk की price। Higher ratio means more reward per unit of risk।</p>

<p>Annualization important: monthly returns use करें तो monthly Sharpe × square root of 12। Daily Sharpe × square root of 252। Different time frequencies mix करने से misleading comparisons।</p>

<h2>Practical Interpretation</h2>

<p>Sharpe ratio 0.5 roughly broad market indices का long-term performance। Active managers जो consistently 0.5 exceed करें, passive investing पर value add कर रहे हैं। 0.5 से नीचे हों तो index funds better serve करते।</p>

<p>Portfolio allocation decisions के लिए, Sharpe ratio dissimilar investments की apples-to-apples comparison enable करता है। Bond fund (6% return, 4% volatility) directly compare हो सकता है stock fund (15% return, 20% volatility) से।</p>

<h2>Limitations</h2>

<p>Sharpe ratio upside और downside volatility equally treat करता है — 20% loss और 20% gain को same risk। Investors के लिए loss psychologically और financially बहुत worse है। <strong>Sortino ratio यह address करता है</strong> — सिर्फ downside deviation risk measure।</p>

<p>Non-normal return distributions में problems। Options strategies जो rare events insurance sell करें, normal times में excellent Sharpe दिखाएंगी और extreme events में catastrophic losses।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>Indian mutual funds और US ETFs compare करते समय Sharpe ratio essential tool है। India-listed mutual funds का Sharpe ratio different risk-free rate use करता है (Indian T-bills vs US Treasuries)। Cross-country comparison carefully करें। Brefyr पर company data risk-return profiles assess करने में context provide करता है।</p>
`,
};
