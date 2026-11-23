import type { GlossaryTerm } from "../types";

export const termTrackingError: GlossaryTerm = {
  slug: "tracking-error",
  term: "Tracking Error",
  title: "Tracking Error — Measuring How Much a Portfolio Deviates From Its Benchmark",
  shortDefinition:
    "Tracking error is the standard deviation of the difference between a portfolio's returns and its benchmark's returns, measuring how closely (or loosely) the portfolio follows the benchmark over time.",
  metaDescription:
    "What is tracking error? Learn how to calculate it, why it matters for index funds and active managers, and what tracking error levels are typical.",
  wordCount: 440,
  category: "Risk Metrics",
  tags: ["tracking-error", "benchmark", "risk-metrics", "active-management", "index-funds"],
  relatedSlugs: ["information-ratio", "r-squared", "alpha", "standard-deviation"],
  relatedTerms: ["information-ratio", "r-squared", "alpha", "standard-deviation"],
  faq: [
    {
      question: "What is a typical tracking error for different fund types?",
      answer:
        "Index funds and ETFs tracking large-cap benchmarks typically show tracking errors of 0.02-0.20% — extremely tight adherence to the benchmark. Enhanced index funds operate at 0.5-2.0%. Active large-cap managers typically run 2-6% tracking error. Concentrated active managers may show 6-10%. Hedge funds and unconstrained strategies can exceed 10-15%. Higher tracking error means more deviation from the benchmark, which can lead to outperformance or underperformance.",
    },
    {
      question: "Is lower tracking error always better?",
      answer:
        "For index funds, yes — the whole point is to replicate the benchmark, so lower tracking error is unambiguously better. For active managers, it depends. Very low tracking error (under 1%) for an actively managed fund suggests closet indexing — the manager isn't taking enough active bets to justify fees. The ideal tracking error for an active manager is high enough to generate meaningful alpha but low enough to maintain a positive information ratio. The right level depends on the manager's skill and the investor's tolerance for deviation from the benchmark.",
    },
    {
      question: "What causes tracking error in index funds?",
      answer:
        "Even well-managed index funds have some tracking error due to: management fees (which reduce returns relative to the gross index), transaction costs from rebalancing, cash drag (holding small cash positions for liquidity), sampling (not holding every index constituent for less liquid benchmarks), securities lending income (which can reduce or eliminate tracking error), and timing differences between index reconstitution and actual portfolio trades.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Tracking error is the volatility of active risk — the standard deviation of the return difference between a portfolio and its benchmark. It tells you how much a portfolio's performance deviates from its reference index over time. For index fund investors, tracking error measures replication quality. For active fund investors, it quantifies how aggressively the manager departs from the benchmark. In both cases, tracking error is essential context for evaluating whether a fund is doing what it's supposed to do.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Tracking Error = Standard Deviation of (Portfolio Returns - Benchmark Returns)</strong></p>

<p>Calculate the return difference (active return) for each period (monthly or weekly), then compute the standard deviation of that series and annualize it. If a fund's monthly active returns have a standard deviation of 0.87%, the annualized tracking error is approximately 0.87% x Square Root of 12 = 3.0%.</p>

<p>A tracking error of 3% means that in any given year, the fund's return is likely to differ from the benchmark by roughly 3 percentage points (one standard deviation). There's approximately a 5% chance the difference exceeds 6 percentage points (two standard deviations) in either direction.</p>

<h2 id="index-fund-quality">Tracking Error for Index Funds</h2>

<p>For passive investors, tracking error is the primary quality metric for index fund selection. When choosing between two S&P 500 index funds, the one with lower tracking error more faithfully replicates the benchmark. The difference between 0.05% and 0.20% tracking error seems small, but over decades of compounding, minimizing tracking error (along with expense ratios) can add up to meaningful wealth differences.</p>

<p>Sources of tracking error in index funds include the expense ratio (which creates a constant drag), transaction costs during rebalancing, cash drag from maintaining liquidity reserves, sampling (for funds that hold a subset of index constituents), and dividend reinvestment timing. Securities lending income can partially offset these costs, sometimes reducing net tracking error to nearly zero for large, well-managed funds.</p>

<p>For less liquid benchmarks (small-cap, emerging markets, high-yield bonds), tracking error is structurally higher because the underlying securities are harder and more expensive to trade. An emerging markets ETF with 0.5% tracking error may be achieving excellent replication given the inherent challenges, while a large-cap domestic fund at the same level would be performing poorly.</p>

<h2 id="active-management">Tracking Error Budget for Active Managers</h2>

<p>Active managers operate with a tracking error "budget" — the amount of active risk they're willing to take. This budget reflects the manager's investment philosophy, client expectations, and risk constraints. A manager with a 4% tracking error budget can deviate enough from the benchmark to generate meaningful alpha if their stock picks are correct, but not so much that a few bad picks devastate relative performance.</p>

<p>The tracking error budget is directly related to position sizing and concentration. A manager who overweights a single stock by 5% relative to its benchmark weight introduces more tracking error than one who spreads the same active risk across twenty 0.25% overweights. Concentrated portfolios have higher tracking error because each bet is larger, while diversified active portfolios spread risk across many smaller bets.</p>

<p>Too little tracking error means the manager isn't using their active mandate — they're essentially running an expensive index fund. Too much tracking error means the manager's performance will be highly variable, with large swings of outperformance and underperformance. The optimal tracking error maximizes the information ratio — it takes enough active risk to generate alpha without introducing so much volatility that the outperformance becomes unreliable.</p>

<h2 id="ex-ante-vs-ex-post">Ex-Ante vs Ex-Post Tracking Error</h2>

<p>Ex-ante tracking error is a forward-looking estimate based on current portfolio positions and a risk model. It tells the manager: given your current holdings, how much return deviation from the benchmark should you expect? This is the operational control metric used in day-to-day portfolio management.</p>

<p>Ex-post tracking error is calculated from actual historical returns. It tells investors: how much did this fund actually deviate from its benchmark? Ex-post tracking error is higher during volatile markets and lower during calm periods, even if the manager's active positions haven't changed. Comparing ex-ante and ex-post tracking error reveals whether the risk model accurately predicted the portfolio's active risk behavior.</p>

<p>On Brefyr, company financial data from SEC filings provides fundamental context for understanding portfolio positioning and benchmark deviations across thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
