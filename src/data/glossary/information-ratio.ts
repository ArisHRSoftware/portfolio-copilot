import type { GlossaryTerm } from "../types";

export const termInformationRatio: GlossaryTerm = {
  slug: "information-ratio",
  term: "Information Ratio",
  title: "Information Ratio — How Consistently a Manager Outperforms the Benchmark",
  shortDefinition:
    "The information ratio measures a portfolio manager's ability to generate excess returns relative to a benchmark, adjusted for the consistency of that outperformance, by dividing active return by tracking error.",
  metaDescription:
    "What is the information ratio? Learn how to calculate it, why it's the best measure of active management skill, and what a good information ratio looks like.",
  wordCount: 440,
  category: "Risk Metrics",
  tags: ["information-ratio", "active-management", "risk-metrics", "benchmark", "performance"],
  relatedSlugs: ["tracking-error", "alpha", "sharpe-ratio", "r-squared"],
  relatedTerms: ["tracking-error", "alpha", "sharpe-ratio", "r-squared"],
  faq: [
    {
      question: "What is a good information ratio?",
      answer:
        "An information ratio above 0.5 is considered good — the manager generates half a unit of excess return for every unit of active risk. Above 0.75 is very good and above 1.0 is exceptional. Very few active managers sustain information ratios above 0.5 over long periods. Grinold and Kahn's 'Active Portfolio Management' characterizes an IR of 0.5 as a 'good' manager and notes that even 0.3 places a manager in the upper quartile of active managers over multi-year periods.",
    },
    {
      question: "How does the information ratio differ from the Sharpe ratio?",
      answer:
        "The Sharpe ratio measures total return per unit of total risk relative to the risk-free rate. The information ratio measures excess return per unit of active risk relative to a benchmark. Sharpe evaluates whether the investment earned enough return for its total volatility. The information ratio evaluates whether the manager's active decisions (deviations from the benchmark) added value. A fund could have a good Sharpe ratio simply from market exposure while having a negative information ratio from poor stock picking.",
    },
    {
      question: "How is the information ratio calculated?",
      answer:
        "Information Ratio = (Portfolio Return - Benchmark Return) / Tracking Error. The numerator (active return or alpha) is the difference between the portfolio's return and the benchmark's return. The denominator (tracking error) is the standard deviation of the active return over time. If a fund outperforms by 2% annually with a tracking error of 4%, its information ratio is 0.5. The ratio rewards consistent outperformance and penalizes erratic active returns.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The information ratio is the most precise measure of active management skill. It answers a pointed question: for every unit of risk the manager takes by deviating from the benchmark, how much excess return is generated? A high information ratio means the manager's active bets — overweighting certain stocks, underweighting others, tilting toward specific sectors — consistently pay off relative to the risk they introduce. A low or negative information ratio means the manager's active decisions are destroying value.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Information Ratio = Active Return / Tracking Error</strong></p>

<p><strong>Active Return = Portfolio Return - Benchmark Return</strong></p>

<p><strong>Tracking Error = Standard Deviation of Active Returns</strong></p>

<p>Active return measures the magnitude of outperformance (or underperformance). Tracking error measures the consistency of that outperformance. A manager who outperforms by 3% one year, underperforms by 2% the next, and outperforms by 4% the third has a positive average active return but high tracking error — erratic results. The information ratio captures both dimensions in a single number.</p>

<h2 id="grinold-kahn">The Fundamental Law of Active Management</h2>

<p>Grinold and Kahn's fundamental law connects the information ratio to two underlying factors: the manager's skill (measured by the information coefficient — the correlation between forecasts and actual outcomes) and the breadth of the strategy (the number of independent bets made per year).</p>

<p><strong>IR = IC x Square Root of Breadth</strong></p>

<p>This formula has powerful implications. A manager with modest forecasting skill (IC of 0.05) can achieve a respectable information ratio by making many independent bets. A quantitative strategy evaluating hundreds of stocks monthly has enormous breadth, allowing tiny predictive edges to compound into meaningful outperformance. A concentrated manager holding 20 stocks has limited breadth and needs much higher forecasting accuracy to achieve the same information ratio.</p>

<p>This explains why quantitative strategies often produce more consistent (though potentially modest) information ratios than concentrated fundamental strategies — they compensate for lower per-bet accuracy with dramatically higher breadth.</p>

<h2 id="evaluating-managers">Evaluating Active Managers</h2>

<p>The information ratio is the gold standard metric for evaluating whether an active manager's fees are justified. If a manager charges 1% annually and generates an average active return of 1.5% with a tracking error of 5%, the information ratio is 0.3 — the gross outperformance barely covers fees, and the net information ratio after fees is approximately 0.1. The active risk taken is not being compensated adequately.</p>

<p>For the information ratio to justify active management fees, the gross IR should exceed approximately 0.4-0.5 (depending on fee level), leaving a positive net-of-fees IR. Below that threshold, investors are paying for active management but receiving index-like returns with additional tracking error — worse than an index fund in every dimension.</p>

<p>Time period matters for IR evaluation. Short measurement periods (under 3 years) produce unreliable estimates because active return can be distorted by a few lucky or unlucky positions. Five to ten years of data provides a more robust estimate of a manager's true information ratio, as luck washes out over longer periods.</p>

<h2 id="practical-implications">Practical Implications</h2>

<p>When selecting among active managers in the same category, the information ratio is a better comparison tool than raw returns. A manager returning 12% versus a 10% benchmark with 3% tracking error (IR = 0.67) is more skilled than one returning 14% versus a 10% benchmark with 8% tracking error (IR = 0.50), even though the second manager's raw outperformance is larger. The first manager converts active risk into active return more efficiently.</p>

<p>At the portfolio level, combining managers with high individual information ratios and low correlation between their active returns produces a portfolio with an even higher aggregate information ratio — the diversification principle applied to active management rather than asset allocation.</p>

<p>On Brefyr, company financial data from SEC filings provides fundamental context for understanding active investment opportunities across thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
