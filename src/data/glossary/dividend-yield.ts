import type { GlossaryTerm } from "../types";

export const termDividendYield: GlossaryTerm = {
  slug: "dividend-yield",
  term: "Dividend Yield",
  title: "Dividend Yield — How to Measure the Income a Stock Pays You",
  shortDefinition:
    "Dividend yield is the annual dividend per share divided by the stock price, expressed as a percentage — it tells you how much income you receive for each dollar invested.",
  metaDescription:
    "What is dividend yield? How to calculate it, what a high vs low yield signals, dividend safety checks using SEC filings, and why yield alone doesn't tell the whole story.",
  wordCount: 2000,
  category: "Financial Metrics",
  tags: ["dividend", "yield", "income-investing", "payout-ratio", "financial-metrics"],
  relatedSlugs: ["free-cash-flow", "pe-ratio", "10-k-filing", "small-cap"],
  relatedTerms: ["free-cash-flow", "pe-ratio", "10-k-filing", "small-cap"],
  faq: [
    {
      question: "How is dividend yield calculated?",
      answer: "Dividend Yield = (Annual Dividends Per Share / Stock Price) × 100. If a stock pays $2 per year in dividends and trades at $50, its yield is 4%. The yield changes daily as the stock price moves — it goes up when the stock falls and down when the stock rises.",
    },
    {
      question: "What is a good dividend yield?",
      answer: "The S&P 500 average yield is roughly 1.3-1.5%. Utility stocks typically yield 3-5%. REITs often yield 4-8%. A yield above 6-7% for a non-REIT stock warrants skepticism — it may signal the market expects a dividend cut. The 'best' yield depends on your income needs and risk tolerance. A 3% yield that's been growing 8% annually is more valuable than a 6% yield that's stagnant.",
    },
    {
      question: "How do I check if a dividend is safe?",
      answer: "Check the payout ratio (dividends / earnings) and the free cash flow coverage (dividends / free cash flow). A payout ratio above 80% leaves little margin for earnings drops. Also check the balance sheet for debt levels — highly leveraged companies are more likely to cut dividends in a downturn. The dividend history in the 10-K shows whether the company has maintained or grown its dividend over time.",
    },
    {
      question: "Do all stocks pay dividends?",
      answer: "No. Many growth companies retain all earnings for reinvestment rather than paying dividends. Most tech companies didn't pay dividends for their first 10-20 years. Paying dividends is a board decision, not a requirement. Companies that do pay typically announce dividend declarations via 8-K filings, and the proxy statement (DEF 14A) discusses the dividend policy.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Dividend yield converts a company's annual cash payments to shareholders into a rate of return. A 4% dividend yield means you receive $4 in cash for every $100 you invest — regardless of what happens to the stock price. For income-focused investors, dividend yield is the starting point for evaluating whether a stock can fund their cash flow needs.</p>

<p>But yield alone is a dangerous metric. An abnormally high yield is often a signal that the stock price has crashed (the denominator shrank) or that the market expects the dividend to be cut. Chasing yield without checking dividend sustainability is one of the most common mistakes retail investors make — and SEC filings are the best tool for assessing that sustainability.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Dividend Yield = (Annual Dividends Per Share / Current Stock Price) × 100</strong></p>

<p>Annual dividends per share is the sum of all regular dividends paid over the trailing 12 months. Special (one-time) dividends are typically excluded from yield calculations because they're not expected to recur.</p>

<p>Example: A stock trading at $80 that pays quarterly dividends of $0.75 ($3.00 annually) has a yield of 3.75%.</p>

<p>Because the denominator is the current stock price, yield is dynamic. If the stock drops to $60 with the same $3 dividend, yield rises to 5.0%. If the stock rises to $100, yield falls to 3.0%. A rising yield can mean either that the company increased its dividend (positive) or that the stock price fell (potentially negative).</p>

<h2 id="types-of-yield">Forward vs Trailing Yield</h2>

<p><strong>Trailing yield</strong> uses the actual dividends paid over the past 12 months. It's factual — based on declared and distributed payments.</p>

<p><strong>Forward yield</strong> annualizes the most recently declared quarterly dividend. If the company just raised its dividend from $0.75 to $0.85 per quarter, the forward yield uses $3.40 ($0.85 × 4) even though the trailing 12-month total was only $3.15 (three quarters at $0.75 plus one at $0.85).</p>

<p>Financial websites typically display forward yield because it reflects the current dividend rate. SEC filings contain the actual payment history — check the cash flow statement ("Dividends paid to common shareholders") for the definitive trailing number.</p>

<h2 id="dividend-safety">Checking Dividend Safety in SEC Filings</h2>

<p>A high yield means nothing if the company can't afford to maintain the payment. Three metrics from SEC filings assess dividend safety:</p>

<h3>Payout Ratio (Earnings-Based)</h3>

<p><strong>Payout Ratio = Dividends Per Share / Earnings Per Share</strong></p>

<p>A payout ratio of 50% means the company pays half its earnings as dividends and retains the rest. Below 60% is generally comfortable. Between 60-80% is watchable. Above 80% leaves minimal cushion for earnings volatility. Above 100% means the company is paying out more than it earns — funded by cash reserves or borrowing, which is unsustainable.</p>

<h3>FCF Coverage (Cash-Based)</h3>

<p><strong>FCF Coverage = Free Cash Flow / Total Dividends Paid</strong></p>

<p>More reliable than the earnings-based payout ratio because it uses actual cash. A coverage ratio of 2.0x means the company generates twice the cash needed to fund dividends — plenty of room for capex, debt repayment, and weather economic downturns. Below 1.0x means dividends exceed free cash flow — unsustainable without asset sales or new borrowing.</p>

<p>Both metrics come from the 10-K: EPS from the income statement, free cash flow from the cash flow statement, and dividends paid from the financing activities section.</p>

<h3>Balance Sheet Health</h3>

<p>Companies with heavy debt loads are more likely to cut dividends during downturns because debt service takes priority. Check the debt-to-equity ratio and interest coverage ratio (EBIT / interest expense). A highly leveraged company with a thin interest coverage ratio is one recession away from choosing between debt payments and dividend payments — and debt always wins.</p>

<h2 id="dividend-growth">Dividend Growth vs High Yield</h2>

<p>The income investing debate centers on two strategies:</p>

<p><strong>High yield now.</strong> Buy stocks yielding 5-8% for immediate income. Risk: high yields often signal distress, dividend cuts, or slow/negative growth. Utilities, telecom, and REITs dominate this category.</p>

<p><strong>Dividend growth.</strong> Buy stocks yielding 1.5-3% that have been increasing their dividend 8-12% annually. Over 10-20 years, the growing dividend surpasses the high-yield stock's static payment, and the stock price typically appreciates as well. The "Dividend Aristocrats" — S&P 500 companies with 25+ consecutive years of dividend increases — exemplify this approach.</p>

<p>SEC filings reveal the trajectory. Compare the per-share dividend in this year's 10-K to five years ago. A company that's raised its dividend every year for a decade is far more reliable than one that offers a high yield with a flat or erratic payment history.</p>

<h2 id="yield-traps">The Yield Trap</h2>

<p>A yield trap occurs when a stock's high yield attracts income investors just before the dividend is cut. The pattern:</p>

<ol>
<li>Company's business deteriorates. Stock price falls.</li>
<li>Falling stock price pushes yield up to 8%, 10%, even 15%.</li>
<li>Income investors buy, attracted by the high yield.</li>
<li>Company cuts or eliminates the dividend (because they can't afford it).</li>
<li>Stock price drops another 20-30% on the cut announcement.</li>
<li>Investors lose on both the dividend income and the stock price.</li>
</ol>

<p>How to avoid yield traps: always check free cash flow coverage, debt levels, and the trend in the payout ratio before buying a high-yield stock. If the payout ratio has risen from 50% to 90% over three years, the dividend is becoming less sustainable even if it hasn't been cut yet. The 10-K and 10-Q financial statements contain all the data needed for this analysis.</p>

<h2 id="dividends-in-filings">Dividends in SEC Filings</h2>

<p>Dividend declarations appear in multiple places:</p>
<ul>
<li><strong>8-K filing.</strong> Companies file an 8-K when the board declares a dividend, specifying the amount per share, record date, and payment date.</li>
<li><strong>Cash flow statement.</strong> "Dividends paid to common shareholders" in the financing activities section shows the total cash distributed during the period.</li>
<li><strong>Notes to financial statements.</strong> The equity note may discuss dividend policy, restrictions on dividends (from debt covenants), and details of any special dividends.</li>
<li><strong>Proxy statement (DEF 14A).</strong> Often discusses the board's dividend philosophy — whether they prioritize stable dividends, growing dividends, or retaining capital for growth.</li>
</ul>

<p>Brefyr processes all SEC filings including 8-K dividend declarations and tracks financial metrics from 10-K/10-Q filings for 7,600+ companies, helping income investors monitor the fundamental health behind the dividend yield they're counting on.</p>
`,
};
