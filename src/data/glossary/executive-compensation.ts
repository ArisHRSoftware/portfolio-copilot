import type { GlossaryTerm } from "../types";

export const termExecutiveCompensation: GlossaryTerm = {
  slug: "executive-compensation",
  term: "Executive Compensation",
  title: "Executive Compensation — How CEOs Get Paid and Where to Find the Details in SEC Filings",
  shortDefinition:
    "Executive compensation encompasses all forms of pay and benefits provided to a company's top officers, including base salary, annual bonuses, stock options, restricted stock units, retirement benefits, and perquisites, as disclosed in the proxy statement.",
  metaDescription:
    "What is executive compensation? How CEO pay packages are structured, the Summary Compensation Table, pay-versus-performance disclosure, and where to find all the details in SEC filings.",
  wordCount: 950,
  category: "Regulatory & Compliance",
  tags: ["executive-compensation", "ceo-pay", "proxy-statement", "say-on-pay", "corporate-governance"],
  relatedSlugs: ["say-on-pay", "golden-parachute", "clawback-provision", "rsu", "proxy-statement"],
  relatedTerms: ["say-on-pay", "golden-parachute", "clawback-provision", "rsu", "proxy-statement"],
  faq: [
    {
      question: "What is the Summary Compensation Table?",
      answer:
        "The Summary Compensation Table (SCT) is the primary disclosure table in the proxy statement showing total compensation for each named executive officer (NEO) over the past three fiscal years. It includes columns for: salary, bonus, stock awards (grant date fair value), option awards (Black-Scholes value), non-equity incentive plan compensation (annual cash bonuses based on performance), change in pension value and deferred compensation earnings, and all other compensation (perquisites, severance, life insurance, etc.). The 'Total' column adds these components, producing the headline CEO pay figure that appears in media reports.",
    },
    {
      question: "Why is reported CEO pay sometimes misleading?",
      answer:
        "The SCT reports the grant date fair value of equity awards in the year they are granted, not when they vest or are sold. A CEO might be reported as receiving $50 million in a year primarily because of a large equity grant — but that grant vests over 3-4 years and its ultimate value depends on the stock price at vesting. If the stock declines, the CEO may realize far less than the reported amount. Conversely, the actual gains from prior-year equity awards exercised or vested in the current year appear in separate tables. The 'pay versus performance' table (new in 2022) attempts to address this by showing 'compensation actually paid.'",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Executive compensation is one of the most heavily disclosed and intensely scrutinized topics in corporate governance. The SEC requires detailed disclosure of how the five highest-paid executives — the named executive officers (NEOs) — are compensated, including every component of pay, the rationale behind compensation decisions, and the relationship between pay and performance. This disclosure appears primarily in the annual proxy statement (DEF 14A) and runs 30-60 pages in a typical large-company filing. For investors, executive compensation reveals management incentives, board governance quality, and potential agency costs.</p>

<h2 id="components">Components of Executive Pay</h2>

<p><strong>Base salary.</strong> Fixed annual cash compensation. For S&P 500 CEOs, base salaries typically range from $1 million to $1.5 million — often the smallest component of total pay. Some CEOs take nominal salaries ($1) and receive compensation primarily through equity.</p>

<p><strong>Annual incentive (bonus).</strong> Cash payments tied to short-term performance metrics — typically one-year financial targets like revenue growth, EPS, operating income, or return on capital. Target bonuses are expressed as a percentage of salary (100-200% is common for CEOs) and can pay out at zero (if thresholds are missed) or above target (if stretch goals are exceeded). The CD&A discloses the specific metrics, targets, and actual results.</p>

<p><strong>Long-term incentive (equity).</strong> The largest component for most executives. Includes restricted stock units (RSUs) that vest over time, performance share units (PSUs) that vest based on multi-year financial or stock performance targets, and stock options that gain value only if the stock price increases above the exercise price. Equity awards align executive interests with shareholders by tying compensation to stock price and business performance over 3-5 year horizons.</p>

<p><strong>Retirement benefits.</strong> Includes defined benefit pension plans (increasingly rare), supplemental executive retirement plans (SERPs), and employer contributions to 401(k) and deferred compensation plans. Pension values can be substantial — some CEOs have accrued pension benefits worth $20-50 million.</p>

<p><strong>Perquisites.</strong> Personal benefits provided by the company: corporate aircraft use, car allowances, security services, financial planning, club memberships, and relocation expenses. The SEC requires disclosure of perquisites exceeding $10,000 individually and $25,000 in aggregate.</p>

<p><strong>Severance and change-of-control.</strong> Contractual provisions specifying payments upon termination (without cause, for good reason, or following a change of control). These "golden parachute" provisions are disclosed in the "Potential Payments Upon Termination or Change of Control" table in the proxy statement.</p>

<h2 id="disclosure-tables">Key Disclosure Tables</h2>

<p>The proxy statement contains several mandatory compensation tables that investors should understand:</p>
<ul>
<li><strong>Summary Compensation Table:</strong> Three-year total compensation for each NEO, broken down by component.</li>
<li><strong>Grants of Plan-Based Awards:</strong> Details of equity and non-equity incentive awards granted during the year.</li>
<li><strong>Outstanding Equity Awards:</strong> All unvested equity held by each NEO as of year-end.</li>
<li><strong>Option Exercises and Stock Vested:</strong> Value realized from stock option exercises and RSU vesting during the year.</li>
<li><strong>Pension Benefits:</strong> Accumulated pension values for each NEO.</li>
<li><strong>Nonqualified Deferred Compensation:</strong> Executive deferred compensation account balances and activity.</li>
<li><strong>Pay Versus Performance:</strong> Comparison of compensation actually paid to total shareholder return, net income, and a company-selected financial metric.</li>
<li><strong>CEO Pay Ratio:</strong> Ratio of CEO total compensation to median employee total compensation.</li>
</ul>

<h2 id="pay-governance">Pay Governance</h2>

<p>The compensation committee — composed entirely of independent directors — sets executive pay. The committee typically retains an independent compensation consultant, benchmarks pay against a peer group of comparable companies, designs incentive metrics aligned with the company's strategy, and sets performance targets that balance challenge with achievability. The CD&A section explains all of these decisions in narrative form.</p>

<h2 id="sec-filings">Executive Compensation in SEC Filings</h2>

<ul>
<li><strong>DEF 14A:</strong> The primary source: CD&A narrative, all compensation tables, pay versus performance, CEO pay ratio, and say-on-pay resolution.</li>
<li><strong>10-K:</strong> Notes to financial statements disclose total stock-based compensation expense. Employment agreements and equity plan documents are filed as exhibits.</li>
<li><strong>8-K:</strong> New employment agreements, compensation changes, and equity grant modifications are reported as current events.</li>
</ul>

<p>Brefyr processes proxy statements for all SEC-reporting companies, extracting executive compensation data to help investors evaluate whether management incentives are properly aligned with shareholder interests.</p>
`,
};
