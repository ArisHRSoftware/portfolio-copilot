import type { GlossaryTerm } from "../types";

export const termRsu: GlossaryTerm = {
  slug: "rsu",
  term: "RSU (Restricted Stock Unit)",
  title: "RSU — How Restricted Stock Units Work as Executive and Employee Compensation",
  shortDefinition:
    "A restricted stock unit (RSU) is a company's promise to deliver shares of stock to an employee after a vesting period, used as compensation and disclosed in proxy statements and 10-K filings.",
  metaDescription:
    "What is an RSU? How restricted stock units work as compensation, vesting schedules, tax implications, how RSUs cause dilution, and how to track them in SEC filings.",
  wordCount: 2000,
  category: "Compensation & Governance",
  tags: ["rsu", "stock-compensation", "vesting", "dilution", "proxy-statement"],
  relatedSlugs: ["dilution", "proxy-statement", "form-4", "10-k-filing"],
  relatedTerms: ["dilution", "proxy-statement", "form-4", "10-k-filing"],
  faq: [
    {
      question: "How are RSUs different from stock options?",
      answer: "Stock options give you the right to buy shares at a predetermined price (the strike price). They're worthless if the stock trades below the strike. RSUs are a promise to receive shares outright — they have value as long as the stock has any value at all. RSUs are simpler, less risky for the employee, and have become the dominant form of equity compensation, replacing options at most public companies.",
    },
    {
      question: "When do RSU holders pay taxes?",
      answer: "RSU recipients pay ordinary income tax when the shares vest (are delivered), not when they're granted. The taxable amount is the fair market value of the shares on the vesting date. Companies typically withhold shares to cover the tax — which appears as transaction code F on Form 4 filings. This automatic withholding is not a sell signal.",
    },
    {
      question: "How do RSUs affect shareholders?",
      answer: "RSUs create dilution. When RSUs vest, new shares are issued, increasing the total share count and reducing each existing shareholder's ownership percentage. The cost appears as 'stock-based compensation' (SBC) on the cash flow statement and income statement. At some tech companies, SBC represents 15-30% of revenue — a significant ongoing cost borne by shareholders through dilution.",
    },
    {
      question: "Where are RSU grants disclosed in SEC filings?",
      answer: "The proxy statement (DEF 14A) discloses RSU grants to named executive officers in the Summary Compensation Table and the Grants of Plan-Based Awards table. The 10-K notes to financial statements describe the company's stock compensation plans, total fair value of grants, and unvested award balances. Individual vesting events appear as Form 4 filings with transaction code A (acquisition/grant) or F (tax withholding).",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Restricted stock units have replaced stock options as the primary form of equity compensation at most public companies. When a company grants 10,000 RSUs to an employee, it's promising to deliver 10,000 shares of stock after the vesting conditions are met — typically continued employment over 3-4 years. The employee doesn't pay for the shares. They receive them as compensation, like salary but paid in stock instead of cash.</p>

<p>For investors, RSUs matter because they create dilution. Every RSU that vests becomes a new share, reducing existing shareholders' ownership percentage. The magnitude can be substantial — at some technology companies, stock-based compensation (primarily RSUs) exceeds 20% of revenue annually. Understanding how RSUs work, how to track them in SEC filings, and how to assess their impact on shareholder value is essential for anyone investing in companies that rely on equity compensation.</p>

<h2 id="how-rsus-work">How RSUs Work</h2>

<h3>Grant</h3>
<p>The company awards RSUs to an employee. No shares change hands at this point — it's a contractual promise. The grant specifies the number of units, the vesting schedule, and any performance conditions. The grant date fair value (stock price on the grant date multiplied by units) is the accounting cost that will be expensed over the vesting period.</p>

<h3>Vesting</h3>
<p>RSUs vest — convert from promise to actual shares — according to a schedule. The most common patterns:</p>
<ul>
<li><strong>4-year annual vesting.</strong> 25% of the RSUs vest each year for four years. Standard at most tech companies.</li>
<li><strong>3-year cliff + ratable.</strong> Nothing vests for 3 years, then all shares vest at once. Common for senior executives with retention goals.</li>
<li><strong>Performance vesting.</strong> RSUs vest only if specific metrics are achieved — revenue targets, EPS goals, total shareholder return vs peers. The proxy statement's Compensation Discussion & Analysis (CD&A) describes performance criteria.</li>
</ul>

<p>If the employee leaves before vesting, unvested RSUs are typically forfeited. This is the "golden handcuffs" retention mechanism — employees with large unvested RSU balances face a significant financial cost to leaving.</p>

<h3>Settlement</h3>
<p>On the vesting date, the company delivers actual shares to the employee. The shares are fully owned — no restrictions. The employee can hold or sell. The company typically withholds a portion of shares to cover the employee's income tax obligation, which appears as a Form 4 transaction with code F (payment of exercise price or tax liability).</p>

<h2 id="financial-impact">Financial Impact on Shareholders</h2>

<h3>Stock-Based Compensation Expense</h3>

<p>Under ASC 718, companies must expense the fair value of RSU grants on the income statement over the vesting period. A grant of 10,000 RSUs worth $50/share ($500,000 total) vesting over 4 years creates $125,000 in annual SBC expense. This reduces reported operating income and net income — it's a real cost, not just an accounting entry.</p>

<p>SBC appears as a line item on the income statement (within operating expenses) and as a non-cash add-back on the cash flow statement (because no cash was spent). Some companies highlight "adjusted" metrics that exclude SBC — these metrics overstate profitability by ignoring a real cost to shareholders.</p>

<h3>Dilution</h3>

<p>When RSUs vest and new shares are created, the share count increases. If a company has 100 million shares and 5 million RSUs vest during the year, shares outstanding grow to 105 million — a 5% dilution. Existing shareholders now own a smaller percentage of the company.</p>

<p>Some companies offset RSU dilution through share buybacks, keeping the net share count roughly constant. Check the cash flow statement: compare "Repurchase of common stock" (financing activities) to "Stock-based compensation" (operating activities). If buybacks exceed SBC, the company is more than offsetting dilution. If SBC exceeds buybacks, net dilution is occurring.</p>

<h2 id="tracking-in-filings">Tracking RSUs in SEC Filings</h2>

<h3>Proxy Statement (DEF 14A)</h3>
<p>The most detailed source for executive RSU grants. The Summary Compensation Table shows the grant-date fair value of RSU awards for each named executive officer. The Grants of Plan-Based Awards table shows the specific number of RSUs granted during the year, the grant date, and performance thresholds (if applicable). The Outstanding Equity Awards table shows how many RSUs remain unvested.</p>

<h3>10-K Notes to Financial Statements</h3>
<p>The stock compensation note (typically Note 10-15) provides company-wide RSU data: total RSUs granted during the year, total fair value, weighted-average grant-date price, total unvested RSUs outstanding, and the total unrecognized SBC expense (the remaining cost to be expensed over future vesting periods).</p>

<h3>Form 4</h3>
<p>Individual RSU vesting events appear as Form 4 filings. A typical vesting event shows two simultaneous transactions: code A (acquisition of shares through vesting) and code F (shares withheld for tax). The net shares delivered to the insider appear in the ownership table. Large vesting events for C-suite executives are worth noting — the insider's subsequent decision to hold or sell the vested shares carries informational value.</p>

<h3>Cash Flow Statement</h3>
<p>Total SBC expense appears in the operating activities section as a non-cash add-back. This is the company-wide annual cost of all equity compensation — not just RSUs but also options and performance shares. Compare this figure to revenue and operating income to assess the burden on shareholders.</p>

<h2 id="evaluating-sbc">How to Evaluate Whether SBC Is Excessive</h2>

<p><strong>SBC as % of Revenue.</strong> Below 10% is moderate. 10-20% is high but common in tech. Above 20% means equity compensation is consuming a significant share of the company's economic output. Compare to direct peers.</p>

<p><strong>Net dilution rate.</strong> (New shares from SBC - Shares repurchased) / Total shares outstanding. A net dilution rate above 3% annually is aggressive. Above 5% is a red flag unless justified by exceptional growth.</p>

<p><strong>SBC growth vs revenue growth.</strong> If SBC is growing faster than revenue, the company is giving away an increasing share of its value to employees. This may be justified during hypergrowth phases but becomes concerning in mature companies.</p>

<p>Brefyr tracks financial data from SEC filings including SBC expense, share count changes, and insider transactions for 7,600+ companies, making it easier to identify companies where equity compensation creates outsized dilution risk.</p>
`,
};
