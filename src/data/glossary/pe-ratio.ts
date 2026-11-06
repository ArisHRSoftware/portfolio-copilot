import type { GlossaryTerm } from "../types";

export const termPeRatio: GlossaryTerm = {
  slug: "pe-ratio",
  term: "P/E Ratio",
  title: "P/E Ratio — The Most Common Valuation Metric and Its Blind Spots",
  shortDefinition:
    "The price-to-earnings ratio (P/E) divides a company's stock price by its earnings per share, showing how much investors pay for each dollar of profit.",
  metaDescription:
    "What is the P/E ratio? How to calculate trailing and forward P/E, what a high or low ratio means, when P/E is misleading, and better alternatives for small-cap valuation.",
  wordCount: 2100,
  category: "Financial Metrics",
  tags: ["pe-ratio", "valuation", "earnings", "financial-metrics", "investing-basics"],
  relatedSlugs: ["ebitda", "enterprise-value", "free-cash-flow", "market-capitalization"],
  relatedTerms: ["ebitda", "enterprise-value", "free-cash-flow", "market-capitalization"],
  faq: [
    {
      question: "What is a good P/E ratio?",
      answer:
        "There is no universal 'good' P/E. The S&P 500 historical average is roughly 16-17x. Growth companies routinely trade at 30-50x or higher because investors are paying for future earnings growth. Value stocks trade at 8-12x. A P/E of 10 for a tech company growing 40% annually is extremely cheap; a P/E of 10 for a declining newspaper company might be expensive if earnings are falling. Always compare to industry peers and growth rates.",
    },
    {
      question: "What is the difference between trailing P/E and forward P/E?",
      answer:
        "Trailing P/E uses the past 12 months of actual earnings (from SEC filings). Forward P/E uses analyst estimates for the next 12 months of expected earnings. Trailing P/E is factual but backward-looking. Forward P/E is predictive but depends on analyst accuracy. When companies report the P/E ratio in press releases, it's usually trailing unless specified otherwise.",
    },
    {
      question: "Why do some companies have no P/E ratio?",
      answer:
        "Companies with negative earnings (net losses) have no meaningful P/E ratio because dividing by a negative number produces a negative multiple, which is economically meaningless. Pre-profit companies — common in biotech, early-stage tech, and high-growth SaaS — must be valued using alternative metrics like EV/Revenue, price-to-sales, or price-to-book.",
    },
    {
      question: "Can the P/E ratio be manipulated?",
      answer:
        "The E (earnings) part is susceptible to accounting choices. Companies can boost EPS through share buybacks (reducing the denominator), one-time asset sales, aggressive revenue recognition, or reduced R&D spending. The P/E improves without the underlying business improving. Always check whether EPS growth is driven by genuine operational improvement or financial engineering.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>The P/E ratio is the first metric most investors learn and the one they rely on longest. It has one job: tell you how much you're paying for each dollar of a company's earnings. A stock trading at $50 with $5 in earnings per share has a P/E of 10 — you're paying $10 for every $1 of annual profit. Simple, intuitive, and universally understood.</p>

<p>That simplicity is both its strength and its greatest vulnerability. The P/E ratio hides more than it reveals about a company's true value, and relying on it without understanding its blind spots leads to bad investment decisions — particularly in small-cap stocks where earnings are volatile, accounting choices vary widely, and capital structures differ dramatically.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>P/E Ratio = Stock Price / Earnings Per Share (EPS)</strong></p>

<p>Or equivalently: <strong>P/E = Market Capitalization / Net Income</strong></p>

<p>Both formulas produce the same number. EPS and net income come from the income statement in the 10-K or 10-Q. Use diluted EPS (not basic) to account for the effect of outstanding stock options and convertible securities.</p>

<h3>Trailing P/E vs Forward P/E</h3>

<p><strong>Trailing P/E</strong> uses the sum of the last four quarters of reported EPS. This is factual — the numbers come from audited (10-K) or reviewed (10-Q) financial statements. The drawback: it's backward-looking. A company that earned $5/share last year but is expected to earn $8/share this year has a trailing P/E that makes it look more expensive than it is.</p>

<p><strong>Forward P/E</strong> uses consensus analyst estimates for the next 12 months. This is predictive — it prices in expected growth. The drawback: analyst estimates are often wrong, especially for small-caps with limited coverage. Forward P/E is only as good as the estimate feeding it.</p>

<p>When financial websites display a single P/E number without specifying, it's usually trailing P/E based on GAAP earnings.</p>

<h2 id="what-pe-tells-you">What the P/E Ratio Tells You</h2>

<p>At its core, P/E reflects the market's expectations for a company's future earnings growth.</p>

<p>A <strong>high P/E (25-50+)</strong> means investors expect earnings to grow significantly. They're paying a premium today for profits they believe will materialize tomorrow. High-P/E stocks include fast-growing tech companies, dominant market leaders, and companies in early innings of a secular trend. If the growth materializes, the high P/E was justified. If it doesn't, the stock corrects sharply.</p>

<p>A <strong>low P/E (5-12)</strong> means investors have modest or negative expectations. Either the company is in a slow-growth or declining industry, faces specific risks, or is genuinely undervalued. Low P/E doesn't mean cheap — a P/E of 8 for a company whose earnings will halve next year is actually expensive at 16x next year's earnings.</p>

<p>A <strong>market-average P/E (14-18)</strong> suggests the company is priced roughly in line with expected returns. Neither a bargain nor a premium.</p>

<h2 id="blind-spots">The P/E Ratio's Blind Spots</h2>

<h3>Ignores Capital Structure</h3>
<p>P/E uses net income, which is calculated after interest expense. A company that finances growth with debt (high interest expense, lower net income) will have a higher P/E than an identical company that finances with equity — even though their operating businesses are equally profitable. This is why EV/EBITDA is preferred for comparing companies with different debt levels.</p>

<h3>Ignores Cash Position</h3>
<p>A company with $10 per share in cash trading at $30 with $2 in EPS has a P/E of 15. But $10 of that $30 stock price is just cash sitting in the bank. The actual business is valued at $20, making the effective P/E for the operating business only 10x. P/E doesn't separate the value of the business from the value of the cash — enterprise value does.</p>

<h3>Earnings Are Manipulable</h3>
<p>Net income — the "E" in P/E — is an accounting number subject to management judgment. Revenue recognition timing, depreciation methods, inventory accounting, and the classification of items as "one-time" all affect reported earnings. Two identical businesses can report different EPS by making different accounting choices, producing different P/E ratios for economically equivalent companies.</p>

<h3>Negative Earnings Break It</h3>
<p>When EPS is negative, P/E is meaningless. A stock trading at $20 with -$3 EPS has a P/E of -6.7. That number tells you nothing useful. Many small-caps, biotech companies, and high-growth startups have negative earnings for years. For these companies, investors use alternative metrics: EV/Revenue, price-to-book, price-to-sales, or discounted cash flow analysis.</p>

<h3>Cyclical Earnings Distort It</h3>
<p>Cyclical companies (energy, mining, construction, semiconductors) have earnings that swing dramatically with the economic cycle. At the peak of a cycle, earnings are high and P/E looks low — but the stock is actually expensive because earnings are about to decline. At the trough, earnings are depressed and P/E looks impossibly high — but the stock may be cheap because earnings are about to recover.</p>

<p>For cyclical companies, the Shiller P/E (CAPE ratio) — which averages earnings over 10 years to smooth the cycle — is more informative than a single-year P/E.</p>

<h2 id="better-alternatives">Better Alternatives for Small-Cap Valuation</h2>

<p>For small-cap stocks with volatile earnings, high leverage, or pre-profit business models, consider these alternatives:</p>

<table>
<thead><tr><th>Metric</th><th>Best For</th><th>Why It's Better Than P/E</th></tr></thead>
<tbody>
<tr><td><strong>EV/EBITDA</strong></td><td>Capital-intensive, levered companies</td><td>Neutralizes debt and depreciation differences</td></tr>
<tr><td><strong>EV/Revenue</strong></td><td>Pre-profit growth companies</td><td>Works when earnings are negative</td></tr>
<tr><td><strong>Price/Free Cash Flow</strong></td><td>Mature businesses</td><td>Uses actual cash, not accounting earnings</td></tr>
<tr><td><strong>Price/Book</strong></td><td>Asset-heavy companies (banks, real estate)</td><td>Anchored to balance sheet value</td></tr>
<tr><td><strong>PEG Ratio</strong></td><td>Growth companies</td><td>Adjusts P/E for earnings growth rate</td></tr>
</tbody>
</table>

<p>The PEG ratio (P/E divided by earnings growth rate) deserves special mention. A company with a P/E of 30 and a growth rate of 30% has a PEG of 1.0 — fairly valued for its growth. A company with a P/E of 30 and a growth rate of 10% has a PEG of 3.0 — overpriced relative to growth. Peter Lynch popularized the PEG ratio as a way to identify growth stocks that aren't already priced for perfection.</p>

<h2 id="pe-in-sec-filings">Finding P/E Components in SEC Filings</h2>

<p>EPS appears on the income statement in the 10-K and 10-Q, reported as both basic and diluted. The 10-K includes full-year EPS; the 10-Q includes quarterly EPS plus year-to-date. To calculate trailing 12-month EPS from 10-Q data, add the four most recent quarters.</p>

<p>For the stock price (the "P"), use the current market price — not a historical price. P/E is a point-in-time metric that changes every time the stock moves.</p>

<p>On Brefyr, stock pages display financial data extracted from SEC filings for 7,600+ companies, including the earnings and share data needed to assess valuation alongside filing history, insider trading, and AI-generated significance scores.</p>
`,
};
