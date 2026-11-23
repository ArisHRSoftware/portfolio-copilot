import type { GlossaryTerm } from "../types";

export const termPEGRatio: GlossaryTerm = {
  slug: "peg-ratio",
  term: "PEG Ratio",
  title: "PEG Ratio — Adjusting the P/E Ratio for Growth",
  shortDefinition:
    "The PEG ratio divides the P/E ratio by the expected earnings growth rate, normalizing valuation for growth so investors can compare companies growing at different speeds.",
  metaDescription:
    "What is the PEG ratio? Learn how to calculate it, what Peter Lynch's rule of thumb means, and when PEG works best for growth stock valuation.",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["peg-ratio", "valuation", "growth", "financial-metrics", "pe-ratio"],
  relatedSlugs: ["pe-ratio", "eps", "price-to-sales", "fcf-yield"],
  relatedTerms: ["pe-ratio", "eps", "price-to-sales", "fcf-yield"],
  faq: [
    {
      question: "What is a good PEG ratio?",
      answer:
        "Peter Lynch popularized the rule that a PEG of 1.0 indicates fair value — the P/E equals the growth rate. A PEG below 1.0 suggests the stock may be undervalued relative to its growth, while above 2.0 suggests overvaluation. However, this rule works best for companies growing 10-30%. For very high-growth companies (50%+), a PEG below 1.0 is rare and may not indicate a bargain but rather that the market doubts the growth rate is sustainable. For slow-growth companies (under 10%), PEG can be misleadingly favorable.",
    },
    {
      question: "What growth rate should I use for PEG?",
      answer:
        "The most common choice is the consensus analyst estimate for the next 3-5 years of annual EPS growth. Some investors use the past 5 years of actual growth as a sanity check. Using a single-year forward estimate introduces too much noise. Using overly long forecasts introduces too much uncertainty. The 3-5 year consensus estimate balances reliability and forward-looking relevance, but remember that analyst estimates are frequently wrong — especially for small-caps with limited coverage.",
    },
    {
      question: "Why doesn't PEG work for all companies?",
      answer:
        "PEG breaks down in several situations: when earnings are negative (P/E is undefined), when growth is negative (PEG becomes negative, which is meaningless), when growth is near zero (PEG approaches infinity), and when growth rates are extremely high (the relationship between P/E and growth isn't linear at high growth rates). PEG also doesn't account for risk — a company growing 20% with volatile earnings in an emerging market deserves a different PEG than a consumer staple growing 20% with steady predictable earnings.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The PEG ratio solves one of the P/E ratio's biggest shortcomings: it doesn't adjust for growth. A stock trading at 30x earnings looks expensive on a P/E basis, but if the company is growing earnings at 30% per year, investors are paying a reasonable price for that growth. The PEG ratio makes this adjustment explicit by dividing the P/E by the expected growth rate, creating a metric that penalizes expensive slow-growers and rewards fast-growers that are priced proportionally to their expansion.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>PEG Ratio = P/E Ratio / Annual EPS Growth Rate (%)</strong></p>

<p>The P/E ratio uses either trailing or forward earnings per share. The growth rate is typically the expected annual EPS growth over the next 3-5 years, expressed as a percentage (not a decimal). A stock with a P/E of 25 and expected growth of 20% has a PEG of 1.25.</p>

<p>The growth rate input is critical — it's both the most important variable and the most uncertain. Different growth rate assumptions produce dramatically different PEG ratios. A stock with P/E 30 has a PEG of 1.0 at 30% expected growth, 1.5 at 20% growth, and 3.0 at 10% growth. The stock hasn't changed — only the growth assumption.</p>

<h2 id="peter-lynch">Peter Lynch's Framework</h2>

<p>Legendary investor Peter Lynch popularized the PEG ratio in his books "One Up on Wall Street" and "Beating the Street." His rule of thumb: a fairly valued company has a P/E ratio equal to its growth rate (PEG = 1.0). A company growing at 15% per year should trade at roughly 15x earnings. A company growing at 25% should trade at 25x.</p>

<p>Lynch viewed PEG below 1.0 as a potential bargain — the stock was cheap relative to its growth. PEG above 2.0 meant the market was pricing in more growth than the fundamentals justified. Between 1.0 and 2.0 required further analysis of the company's quality, competitive position, and growth sustainability.</p>

<p>This framework is intuitive and practical, but it has mathematical limitations. The relationship between P/E and growth rate isn't perfectly linear. A company growing at 5% shouldn't necessarily trade at only 5x earnings — that would imply an earnings yield of 20%, which is far above what any cash flow model would suggest. Similarly, a company growing at 50% wouldn't necessarily warrant a P/E of 50, because such high growth rates rarely persist for long enough to justify that premium.</p>

<h2 id="growth-adjusted-screening">Growth-Adjusted Screening</h2>

<p>PEG's greatest practical value is as a screening tool. When comparing multiple growth stocks, raw P/E ratios can be misleading because they conflate valuation with growth expectations. PEG normalizes this by putting all companies on a growth-adjusted basis.</p>

<p>Consider three tech stocks: Stock A at P/E 15 growing 10% (PEG 1.5), Stock B at P/E 30 growing 25% (PEG 1.2), and Stock C at P/E 45 growing 40% (PEG 1.125). The cheapest on P/E (Stock A) is actually the most expensive on PEG. The most expensive on P/E (Stock C) is the cheapest on PEG. This reversal happens frequently in growth investing and illustrates why P/E alone is an inadequate tool for comparing growth companies.</p>

<h2 id="limitations">Limitations and Refinements</h2>

<p>The biggest limitation of PEG is its reliance on a growth rate estimate that may be wildly inaccurate. Analyst estimates for 3-5 year EPS growth are frequently wrong by significant margins, especially for small-caps and companies in rapidly evolving industries. A company screened as "cheap" on PEG might become expensive overnight if the growth rate disappoints.</p>

<p>PEG also ignores balance sheet strength. A company with PEG 0.8 and no debt is a much safer investment than a company with PEG 0.8 and 5x leverage, but the PEG ratio can't distinguish between them. Pairing PEG with balance sheet metrics — debt-to-equity, interest coverage, and cash position — provides a more complete picture.</p>

<p>Some analysts refine PEG by adding the dividend yield to the growth rate in the denominator, creating the PEGY ratio: P/E / (Growth Rate + Dividend Yield). This gives credit to companies that return cash to shareholders while growing, which PEG ignores. A mature company growing at 8% with a 3% dividend yield looks better on PEGY (P/E / 11) than on PEG (P/E / 8).</p>

<p>On Brefyr, earnings growth data from SEC filings lets you calculate PEG ratios across thousands of public companies, alongside insider trading signals and AI-driven filing analysis to put valuation in context.</p>
`,
};
