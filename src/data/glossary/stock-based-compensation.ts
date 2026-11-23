import type { GlossaryTerm } from "../types";

export const termStockBasedCompensation: GlossaryTerm = {
  slug: "stock-based-compensation",
  term: "Stock-Based Compensation",
  title: "Stock-Based Compensation — How Companies Pay Employees With Equity and Its Impact on Financials",
  shortDefinition: "Stock-based compensation (SBC) is a method of paying employees with equity instruments — stock options, restricted stock units (RSUs), and performance shares — which must be expensed at fair value on the income statement under GAAP.",
  metaDescription: "What is stock-based compensation? How SBC expense is calculated, its impact on earnings and cash flow, the dilution debate, and where to find SBC details in SEC filings.",
  wordCount: 900, category: "Accounting & Audit", tags: ["stock-based-compensation", "sbc", "rsu", "stock-options", "dilution"],
  relatedSlugs: ["rsu", "dilution", "non-gaap-measures", "executive-compensation", "gaap"], relatedTerms: ["rsu", "dilution", "non-gaap-measures", "executive-compensation", "gaap"],
  faq: [{ question: "Why do so many tech companies add back stock-based compensation in their adjusted earnings?", answer: "Tech companies argue that SBC is a non-cash expense that does not represent an outflow of corporate cash, and that including it distorts comparability between companies with different compensation structures. The counterargument — made by Warren Buffett and many fundamental investors — is that SBC is a real economic cost because it dilutes existing shareholders' ownership. If a company did not issue equity, it would need to pay more in cash compensation, so SBC is effectively a cash expense paid in a different form. The SEC has expressed concern about the universal exclusion of SBC from non-GAAP measures and scrutinizes companies that do so." },
  { question: "How does stock-based compensation affect the share count?", answer: "When stock options are exercised or RSUs vest, new shares are issued (or treasury shares are released), increasing the total shares outstanding and diluting existing shareholders. The dilutive effect is reflected in diluted EPS, which assumes all in-the-money options and all RSUs will convert to shares. Companies often offset this dilution through share repurchase programs. Investors should compare the total SBC-related share issuance against the total buyback to determine whether the company is experiencing net dilution or net share count reduction." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Stock-based compensation (SBC) is the practice of paying employees — from the CEO to rank-and-file engineers — with equity instruments instead of (or in addition to) cash. The most common forms are restricted stock units (RSUs), which vest over time and convert to shares, and stock options, which give employees the right to buy shares at a predetermined price. Under ASC 718, companies must recognize the fair value of SBC as an expense on the income statement over the vesting period. For technology companies, SBC can represent 15-30% of revenue, making it one of the most significant line items affecting profitability.</p>

<h2 id="types-of-sbc">Types of Stock-Based Compensation</h2>

<p><strong>Restricted Stock Units (RSUs).</strong> The most common form at large companies. The employee receives a promise that a certain number of shares will be delivered after a vesting period (typically 3-4 years, vesting annually or quarterly). The grant date fair value equals the stock price on the date of grant, and this value is expensed ratably over the vesting period. RSUs have value regardless of stock price movements — the employee receives shares worth the current market price at vesting.</p>

<p><strong>Stock options.</strong> Give the employee the right to purchase shares at a fixed exercise price (typically the stock price on the grant date) for up to 10 years. Options only have value if the stock price rises above the exercise price. The fair value is estimated using option pricing models (Black-Scholes or Monte Carlo) and expensed over the vesting period. Options are less common than RSUs at large companies but remain prevalent at startups.</p>

<p><strong>Performance shares (PSUs).</strong> Similar to RSUs but vest based on achieving specific performance targets — revenue growth, EPS targets, relative total shareholder return, or other metrics — rather than simply the passage of time. The fair value is estimated based on the probability of achieving the targets, and the expense is adjusted as performance expectations change.</p>

<p><strong>Employee stock purchase plans (ESPPs).</strong> Allow employees to purchase company stock at a discount (typically 15%) through payroll deductions. The discount is treated as compensation expense under ASC 718.</p>

<h2 id="income-statement-impact">Income Statement Impact</h2>

<p>SBC expense flows through the income statement as an operating expense, reducing operating income and net income. For many technology companies, SBC is one of the largest expense categories — sometimes exceeding $1 billion annually for major firms. The expense is recognized over the vesting period on a straight-line or accelerated basis, depending on the vesting terms. Because the expense is based on grant date fair value and does not change with subsequent stock price movements (for most award types), SBC expense can be counterintuitive — it may increase during a stock price decline if the company is granting more shares at lower prices.</p>

<h2 id="cash-flow">Cash Flow Impact</h2>

<p>SBC is a non-cash expense — no corporate cash is paid to employees when shares vest or options are exercised (the employee receives shares, not cash from the company). Therefore, SBC expense is added back in the reconciliation from net income to operating cash flow. This means companies with high SBC can report strong operating cash flow even with modest GAAP net income. However, the dilution is real — every share issued through SBC increases the denominator in per-share calculations and represents economic value transferred from existing shareholders to employees.</p>

<h2 id="dilution-debate">The Dilution Debate</h2>

<p>The central question for investors: is SBC a real cost? The accounting answer is unambiguous — yes, GAAP requires expensing it. The investment community is more divided. The "real cost" camp argues that SBC dilutes shareholders and would be replaced by cash compensation if eliminated, making it economically equivalent to a cash expense. The "non-cash" camp argues that SBC allows companies to conserve cash, attract talent, and align employee incentives with shareholders, and that the dilution is better captured through the share count than through the income statement. Both perspectives have merit; the best practice is to analyze both GAAP and non-GAAP results.</p>

<h2 id="sec-filings">Stock-Based Compensation in SEC Filings</h2>

<ul>
<li><strong>Income statement:</strong> SBC expense by function (cost of revenue, R&D, sales & marketing, G&A) in the notes.</li>
<li><strong>Cash flow statement:</strong> SBC added back as a non-cash adjustment in operating activities.</li>
<li><strong>Stock compensation footnote (10-K):</strong> Total expense, unrecognized cost and expected recognition period, award activity (grants, vestings, forfeitures), and valuation assumptions.</li>
<li><strong>DEF 14A:</strong> Individual executive equity grants in the compensation tables.</li>
</ul>

<p>Brefyr extracts SBC expense data from 10-K and 10-Q filings, tracking this significant non-cash cost across companies and industries to help investors evaluate the true economic profitability and dilution impact at companies they follow.</p>
`,
};
