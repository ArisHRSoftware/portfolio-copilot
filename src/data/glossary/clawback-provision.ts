import type { GlossaryTerm } from "../types";

export const termClawbackProvision: GlossaryTerm = {
  slug: "clawback-provision",
  term: "Clawback Provision",
  title: "Clawback Provision — Recovering Executive Pay After Financial Restatements",
  shortDefinition:
    "A clawback provision is a corporate policy or contractual clause that requires the recovery of incentive-based compensation from executives when the company is required to restate its financial results, ensuring that executives do not keep pay earned based on inaccurate financials.",
  metaDescription:
    "What is a clawback provision? How the Dodd-Frank mandatory clawback rules work, what triggers a clawback, how much must be recovered, and where to find clawback policies in SEC filings.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["clawback", "executive-compensation", "restatement", "dodd-frank", "corporate-governance"],
  relatedSlugs: ["dodd-frank", "executive-compensation", "restatement", "sarbanes-oxley", "say-on-pay"],
  relatedTerms: ["dodd-frank", "executive-compensation", "restatement", "sarbanes-oxley", "say-on-pay"],
  faq: [
    {
      question: "Does the executive have to be at fault for a clawback to apply?",
      answer:
        "Under the Dodd-Frank mandatory clawback rules (effective 2023), no. The clawback is 'no-fault' — it applies regardless of whether the executive was responsible for the error that led to the restatement. The rationale is straightforward: if the financial results were wrong, compensation based on those results was wrong, and it must be returned. The executive's intent, knowledge, and culpability are irrelevant. This is a significant difference from the Sarbanes-Oxley Section 304 clawback, which requires personal misconduct by the CEO or CFO.",
    },
    {
      question: "What types of compensation are subject to clawback?",
      answer:
        "The Dodd-Frank clawback covers incentive-based compensation received during the three-year period preceding the restatement. 'Incentive-based compensation' includes cash bonuses tied to financial metrics (revenue, EPS, EBITDA), stock awards based on financial performance, and stock options whose vesting depends on financial targets. It does not cover base salary, time-vesting RSUs (not tied to financial performance), or discretionary bonuses not based on financial metrics. The amount recovered is the excess over what would have been paid under the restated financials.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A clawback provision is a mechanism that allows — or requires — a company to recover incentive compensation that was paid to executives based on financial results that later prove to be incorrect. When a company restates its financial statements, the restated numbers may show that the company did not actually achieve the performance targets that triggered executive bonuses, stock vesting, or other incentive pay. Clawback provisions ensure that executives return the difference between what they received and what they would have received under the corrected financials.</p>

<h2 id="dodd-frank-mandate">The Dodd-Frank Mandatory Clawback</h2>

<p>Section 954 of the Dodd-Frank Act directed the SEC to require stock exchanges to mandate that all listed companies adopt clawback policies meeting minimum standards. The SEC finalized these rules in 2022, and they became effective in 2023. Key features of the mandatory clawback:</p>

<p><strong>Trigger:</strong> Any accounting restatement required because previously issued financial statements contain a material error (including both "Big R" restatements that require restated filings and "little r" restatements that correct errors in the current period). The company must recover excess compensation regardless of whether the restatement involves fraud or innocent error.</p>

<p><strong>Covered persons:</strong> All current and former executive officers (as defined by Rule 16a-1 — typically about 10-15 individuals including the CEO, CFO, division presidents, and other senior officers designated by the board).</p>

<p><strong>Lookback period:</strong> Three completed fiscal years immediately preceding the date the company is required to prepare the restatement. This means compensation received up to three years ago is subject to recovery.</p>

<p><strong>Amount:</strong> The excess of the incentive compensation received over the amount that would have been received under the restated financial results. For stock-based awards, this is calculated based on a reasonable estimate of the effect of the restatement on the stock price at the time the award was granted or vested.</p>

<p><strong>No-fault:</strong> The clawback applies regardless of the executive's involvement in the error. Even an executive who had no knowledge of the accounting issue must return the excess compensation.</p>

<p><strong>No discretion:</strong> Companies must recover the compensation — the board cannot waive the clawback except in limited circumstances (cost of recovery would exceed the amount recovered, recovery would violate the company's home country law for foreign private issuers, or recovery would cause an otherwise tax-qualified retirement plan to fail to meet qualification requirements).</p>

<h2 id="sox-304">Sarbanes-Oxley Section 304 Clawback</h2>

<p>Before Dodd-Frank, the Sarbanes-Oxley Act's Section 304 provided a narrower clawback: the CEO and CFO must reimburse the company for bonuses and stock profits received during the 12 months following the filing of financials that are subsequently restated due to misconduct. Key differences: Section 304 requires misconduct, covers only the CEO and CFO, has a shorter lookback, and is enforced by the SEC rather than the company. The Dodd-Frank clawback supplements but does not replace Section 304.</p>

<h2 id="voluntary-clawbacks">Voluntary Clawback Policies</h2>

<p>Many companies adopted voluntary clawback policies before the Dodd-Frank mandate. These policies often go beyond the mandatory minimum — covering conduct-based triggers (fraud, ethical violations, compliance failures), broader groups of employees, and longer lookback periods. Voluntary policies can be more flexible than the mandatory rule, allowing boards to exercise judgment about when recovery is appropriate.</p>

<h2 id="sec-filings">Clawback Provisions in SEC Filings</h2>

<ul>
<li><strong>DEF 14A:</strong> Proxy statements describe the company's clawback policy and must disclose whether a restatement triggered a recovery analysis during the year. The company must file the full clawback policy as an exhibit to its 10-K.</li>
<li><strong>10-K:</strong> The clawback policy is filed as Exhibit 97. The annual report also discloses any restatements that triggered the clawback analysis.</li>
<li><strong>8-K:</strong> Restatements are reported as current events, triggering the clawback recovery process.</li>
</ul>

<p>Brefyr monitors restatement disclosures and proxy statement compensation information, alerting investors when companies experience the type of financial reporting errors that trigger mandatory clawback recoveries.</p>
`,
};
