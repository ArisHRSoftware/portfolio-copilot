import type { GlossaryTerm } from "../types";

export const termForm11K: GlossaryTerm = {
  slug: "form-11k",
  term: "Form 11-K",
  title: "Form 11-K — Employee Stock Purchase Plan Annual Report Explained",
  shortDefinition:
    "Form 11-K is an annual SEC filing for employee benefit plans that offer company securities, containing audited financial statements of the plan itself — separate from the company's own financial reports.",
  metaDescription:
    "What is Form 11-K? Learn how employee stock purchase and retirement plan reporting works, what 11-K filings contain, and who they matter to.",
  wordCount: 1800,
  category: "SEC Filings",
  tags: ["sec-filing", "employee-benefit-plan", "espp", "edgar", "retirement-plan"],
  relatedSlugs: ["10-k-filing", "def-14a", "rsu", "sec-edgar", "form-d"],
  relatedTerms: ["10-k-filing", "def-14a", "rsu", "sec-edgar", "form-d"],
  faq: [
    {
      question: "What types of plans file Form 11-K?",
      answer:
        "Form 11-K is filed for employee benefit plans that hold securities of the employer company and that required registration under the Securities Act. The most common types are 401(k) plans with a company stock fund, employee stock purchase plans (ESPPs), employee stock ownership plans (ESOPs), and thrift or savings plans that offer company stock as an investment option. If the plan does not offer company securities — for example, a 401(k) that only offers mutual funds — it does not file 11-K with the SEC (though it still files with the Department of Labor).",
    },
    {
      question: "Who is responsible for filing Form 11-K?",
      answer:
        "The plan administrator — typically the company itself or a committee appointed by the company — is responsible for filing Form 11-K. The filing must include financial statements audited by an independent registered public accounting firm. The audit of the plan is separate from the audit of the company's own financial statements, though many companies use the same audit firm for both. The 11-K must be filed within 180 days after the plan's fiscal year-end (usually June 30 for plans following a calendar fiscal year, since the plan's fiscal year may differ from the company's).",
    },
    {
      question: "Why should investors care about Form 11-K?",
      answer:
        "Most investors skip Form 11-K because it reports on the plan rather than the company. However, 11-K filings reveal important data points: the total amount of company stock held by employees through the plan, whether employees are net buyers or sellers of company stock within the plan, the plan's total assets, and any issues identified in the plan audit. A large employee stock holding can affect the company's float and trading dynamics. Plans experiencing significant net withdrawals of company stock may signal low employee confidence.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Form 11-K is one of the SEC's least-read filings — but it covers one of the most consequential areas of corporate finance: how a company's employees invest in and hold their employer's stock. Filed annually under Section 15(d) of the Securities Exchange Act of 1934, the 11-K reports on the financial condition of employee benefit plans that hold company securities. For companies where employees collectively own a significant percentage of outstanding shares, the dynamics revealed in the 11-K can affect stock liquidity, shareholder voting, and corporate governance.</p>

<h2 id="what-triggers-11k">What Triggers a Form 11-K Filing</h2>

<p>When a company establishes an employee benefit plan that offers company securities — common stock, preferred stock, or debt securities — as an investment option, those securities must generally be registered with the SEC under the Securities Act of 1933. This registration, typically done on Form S-8, creates an ongoing reporting obligation for the plan itself. That obligation is fulfilled through the annual Form 11-K filing.</p>

<p>The most common plans that trigger 11-K filings include:</p>

<ul>
<li><strong>401(k) plans with a company stock fund.</strong> Many employer-sponsored retirement plans include the employer's stock as one of the investment options. When employees allocate their contributions to the company stock fund, the plan holds registered securities that must be reported.</li>
<li><strong>Employee stock purchase plans (ESPPs).</strong> Plans that allow employees to purchase company stock at a discount (typically 15% below market price) through payroll deductions.</li>
<li><strong>Employee stock ownership plans (ESOPs).</strong> Retirement plans that invest primarily in the employer's stock, sometimes used as a corporate finance tool for succession planning or leveraged buyouts.</li>
<li><strong>Profit-sharing and thrift plans.</strong> Savings plans that may include company stock among the investment options.</li>
</ul>

<h2 id="what-11k-contains">What Form 11-K Contains</h2>

<p>The 11-K is a financial report about the plan — not about the company. Its contents are specific to the plan's assets, activity, and financial condition:</p>

<p><strong>Audited financial statements.</strong> A statement of net assets available for benefits (the plan's balance sheet) and a statement of changes in net assets available for benefits (the plan's income statement). These statements show the total value of plan assets, contributions received during the year, investment gains and losses, benefit payments made to participants, and administrative expenses.</p>

<p><strong>Notes to financial statements.</strong> Detailed descriptions of the plan's accounting policies, investment options, fair value measurements, and any significant transactions or events. The notes also describe the plan's eligibility requirements, vesting schedules, and employer matching formulas.</p>

<p><strong>Schedule of assets held.</strong> A required supplemental schedule listing all investments held by the plan at year-end, including the number of shares of company stock, their fair value, and their cost basis. This schedule reveals the total employee ownership of company stock through the plan and how it has changed from the prior year.</p>

<p><strong>Independent auditor's report.</strong> An opinion from a registered public accounting firm on whether the plan's financial statements are presented fairly in conformity with U.S. GAAP. The audit provides assurance that plan assets are properly accounted for and that contributions, distributions, and investment returns are accurately reported.</p>

<h2 id="employee-stock-concentration">Employee Stock Concentration Risk</h2>

<p>One of the most important signals in the 11-K is the concentration of plan assets in company stock. The Enron scandal in 2001 — where employees lost billions when their 401(k) plans, heavily invested in Enron stock, became worthless — highlighted the dangers of employee stock concentration. Since then, regulations have encouraged diversification, and many companies have added requirements that employees can diversify out of company stock after a certain period.</p>

<p>Despite these reforms, some plans still hold substantial percentages of their assets in company stock. The 11-K reveals this concentration. A plan where company stock represents 40% or more of total assets has significant concentration risk — if the stock price declines, employees face simultaneous losses in both their retirement savings and their employment prospects.</p>

<p>From a corporate governance perspective, large employee stock holdings create a block of shares that may be voted in predictable ways — often in support of management proposals. Companies with ESOPs in particular may have significant employee-held voting blocks that influence the outcome of proxy contests and shareholder votes.</p>

<h2 id="espp-insights">ESPP Participation as a Signal</h2>

<p>For companies with employee stock purchase plans, the 11-K reveals participation rates and purchase volumes. High participation in an ESPP — where employees voluntarily use after-tax income to buy company stock at a discount — can be interpreted as a measure of employee confidence in the company's prospects. Employees who work at a company every day have insights into product quality, customer satisfaction, management competence, and competitive dynamics that outside investors lack. When they choose to put their own money into the stock, it carries informational weight similar to insider buying.</p>

<p>Conversely, declining ESPP participation rates — especially at a company where the discount makes participation almost always mathematically advantageous — may signal declining employee morale or confidence.</p>

<h2 id="filing-timeline">Filing Timeline</h2>

<p>Form 11-K must be filed within 180 days after the plan's fiscal year-end. Because many plans follow a calendar fiscal year (ending December 31), 11-K filings are typically due by June 30. This means 11-K data lags significantly — investors reading a 11-K in July are seeing plan data from December 31 of the prior year. Companies can request an extension using Form 12b-25 (the same NT process used for late 10-K and 10-Q filings), though this is uncommon.</p>

<p>As an alternative to filing a full 11-K, the plan may file its audited financial statements and schedules as an exhibit to the company's 10-K annual report. This approach is simpler and avoids a separate filing, though the plan financial data may be less visible to investors who are not specifically looking for it.</p>

<h2 id="where-to-find-11k">Where to Find Form 11-K Filings</h2>

<p>All Form 11-K filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=11-K&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. Search by the company name — the plan's filings appear alongside the company's other SEC filings. On Brefyr, 11-K data is surfaced when employee stock ownership represents a material factor in the company's ownership structure, ensuring investors are aware of significant employee ownership concentrations.</p>
`,
};
