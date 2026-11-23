import type { GlossaryTerm } from "../types";

export const termEPS: GlossaryTerm = {
  slug: "eps",
  term: "Earnings Per Share",
  title: "Earnings Per Share (EPS) — The Metric That Drives Stock Prices",
  shortDefinition:
    "Earnings per share divides a company's net income by the number of outstanding shares, showing how much profit is attributable to each share of common stock.",
  metaDescription:
    "What is EPS? Learn the difference between basic and diluted EPS, how to find it in SEC filings, and why earnings per share drives stock prices.",
  wordCount: 490,
  category: "Financial Metrics",
  tags: ["eps", "earnings", "per-share", "financial-metrics", "income-statement", "valuation"],
  relatedSlugs: ["pe-ratio", "net-margin", "peg-ratio", "price-to-sales"],
  relatedTerms: ["pe-ratio", "net-margin", "peg-ratio", "price-to-sales"],
  faq: [
    {
      question: "What is the difference between basic EPS and diluted EPS?",
      answer:
        "Basic EPS divides net income by the weighted average number of common shares outstanding during the period. Diluted EPS adjusts the share count to include the potential dilution from stock options, convertible bonds, restricted stock units, and warrants — all securities that could become common shares. Diluted EPS is always less than or equal to basic EPS because it assumes more shares outstanding. Analysts and investors primarily use diluted EPS because it reflects the worst-case dilution scenario.",
    },
    {
      question: "Why do companies report adjusted or non-GAAP EPS?",
      answer:
        "Companies report adjusted EPS to strip out items they consider non-recurring or non-operational: restructuring charges, acquisition-related costs, stock-based compensation, amortization of acquired intangibles, and one-time legal settlements. The idea is to show the 'true' recurring earnings power of the business. While sometimes informative, adjusted EPS is not standardized and companies have discretion over what they exclude, which creates a bias toward presenting overly optimistic numbers. Always compare adjusted EPS to GAAP EPS to see what's being excluded.",
    },
    {
      question: "How can EPS grow even when net income is flat?",
      answer:
        "Share buybacks. When a company repurchases its own stock, the number of shares outstanding decreases. If net income stays the same but the share count drops, EPS rises — the same pie is sliced into fewer pieces. This is a legitimate way to return value to shareholders, but investors should distinguish between EPS growth driven by genuine profit improvement and EPS growth driven purely by financial engineering. Check whether net income and revenue are also growing, not just EPS.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Earnings per share is the single most watched metric on Wall Street. When a company reports quarterly results, the first question analysts ask is whether EPS beat, met, or missed expectations. Stock prices move immediately in response. Entire trading strategies are built around predicting earnings surprises. EPS matters not because it's the best measure of business quality — it's not — but because it's the numerator in the P/E ratio and the basis for consensus estimates that drive short-term stock price movements.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Basic EPS = (Net Income - Preferred Dividends) / Weighted Average Shares Outstanding</strong></p>

<p><strong>Diluted EPS = (Net Income - Preferred Dividends + Convertible Preferred Dividends + Convertible Debt Interest x (1 - Tax Rate)) / (Weighted Average Shares + Dilutive Securities)</strong></p>

<p>Preferred dividends are subtracted because they represent a claim on earnings that takes priority over common shareholders. The weighted average share count adjusts for shares issued or repurchased during the period, counting each share only for the portion of the period it was outstanding.</p>

<p>For diluted EPS, potentially dilutive securities (stock options, RSUs, convertible bonds, warrants) are added to the denominator using the treasury stock method (for options) or the if-converted method (for convertible securities). If a security would increase EPS (antidilutive), it is excluded from the diluted calculation.</p>

<p>Both basic and diluted EPS are required disclosures on the income statement in every 10-K and 10-Q filing.</p>

<h2 id="gaap-vs-adjusted">GAAP EPS vs Adjusted EPS</h2>

<p>The gap between GAAP and non-GAAP (adjusted) EPS has widened significantly over the past two decades. For many technology companies, adjusted EPS can be 50-100% higher than GAAP EPS because they exclude stock-based compensation — a real cost that dilutes existing shareholders. When a company reports $3.00 adjusted EPS but only $1.50 GAAP EPS, the difference represents real economic costs that adjusted metrics ignore.</p>

<p>Stock-based compensation is the most controversial exclusion. Companies argue it's a non-cash expense that doesn't reflect operating performance. Critics point out that it represents genuine dilution — the company is issuing new shares that reduce existing shareholders' ownership percentage. If the company had to pay those employees in cash instead, net income would be even lower than GAAP reports.</p>

<p>The practical approach is to use GAAP EPS for valuation comparisons and adjusted EPS to understand trends in core operating performance. When adjusted EPS grows 20% but GAAP EPS grows only 5%, the difference comes from ballooning stock compensation or other excluded items — a yellow flag worth investigating.</p>

<h2 id="eps-growth">EPS Growth — Organic vs Manufactured</h2>

<p>EPS can grow through three mechanisms: revenue growth (more sales), margin expansion (more profit per sale), and share count reduction (fewer shares dividing the same profit). The first two create genuine value. The third merely redistributes existing value among fewer shareholders.</p>

<p>The healthiest EPS growth comes from revenue-driven expansion. A company growing revenue at 15% with stable margins and a stable share count will naturally grow EPS at approximately 15%. This is organic, sustainable, and reflects real business improvement.</p>

<p>Margin-driven EPS growth (revenue flat, margins expanding) often results from cost cutting, pricing increases, or operational improvements. It's valuable but has natural limits — margins can't expand forever. Eventually the company must grow revenue to continue growing EPS.</p>

<p>Buyback-driven EPS growth (revenue and margins flat, share count declining) is common among mature companies with excess cash flow. It shows financial discipline but doesn't reflect business improvement. If a company borrows money to fund buybacks, it's trading equity for debt — EPS rises today, but interest expense rises too, limiting future flexibility.</p>

<h2 id="sec-filings">Finding EPS in SEC Filings</h2>

<p>EPS is reported on the face of the income statement (statement of operations) in every 10-K and 10-Q. Both basic and diluted EPS must be presented, along with the weighted average share counts used in each calculation. The share count includes a footnote explaining what securities were considered dilutive and antidilutive.</p>

<p>For trailing twelve-month (TTM) EPS, add the most recent four quarters. When a company has not yet filed its latest quarter, analysts use the available quarters plus estimates for the missing period. For companies with fiscal years that don't end in December, the TTM calculation crosses calendar years.</p>

<p>On Brefyr, earnings data sourced from SEC filings is available across thousands of public companies, letting you track EPS trends and compare valuations alongside insider trading activity and AI-generated filing analysis.</p>
`,
};
