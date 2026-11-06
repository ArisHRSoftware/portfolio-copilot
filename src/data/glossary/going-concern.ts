import type { GlossaryTerm } from "../types";

export const termGoingConcern: GlossaryTerm = {
  slug: "going-concern",
  term: "Going Concern",
  title: "Going Concern — The Warning in SEC Filings That Signals Potential Bankruptcy",
  shortDefinition:
    "A going concern warning is a statement by auditors that there is substantial doubt about a company's ability to continue operating for the next 12 months without additional financing or restructuring.",
  metaDescription:
    "What is a going concern warning? How auditors flag bankruptcy risk in SEC filings, what triggers the warning, and what it means for investors holding the stock.",
  wordCount: 2300,
  category: "Accounting & Financial",
  tags: ["going-concern", "audit", "bankruptcy", "risk-flag", "10-k-filing"],
  relatedSlugs: ["10-k-filing", "material-weakness", "auditors-report"],
  relatedTerms: ["10-k-filing", "material-weakness", "auditors-report"],
  faq: [
    {
      question: "Does a going concern warning mean the company will go bankrupt?",
      answer:
        "Not necessarily. A going concern warning means the auditor believes there is substantial doubt about the company's ability to continue as a going concern for at least 12 months. Many companies that receive going concern warnings survive — they raise capital, restructure debt, cut costs, or find new revenue sources. However, the warning is a serious red flag. Academic research shows that roughly 50% of companies receiving going concern opinions ultimately fail within 5 years.",
    },
    {
      question: "Where do I find going concern warnings in SEC filings?",
      answer:
        "Going concern language appears in two places: (1) the auditor's report, which is included in the 10-K just before the financial statements, and (2) the notes to the financial statements, where management discusses the company's ability to continue operations. The auditor's report is the more authoritative source — it represents the independent auditor's professional judgment.",
    },
    {
      question: "Can a company receive a going concern warning and still be listed on the NYSE or Nasdaq?",
      answer:
        "Yes, but listing standards impose additional requirements. Both exchanges require companies to maintain minimum financial standards. A going concern warning often triggers review by the exchange's listing committee. If the company can't demonstrate a plan to address the concern within a specified period, delisting proceedings may begin. Many companies voluntarily delist to OTC markets before that happens.",
    },
    {
      question: "How does a going concern warning affect the stock price?",
      answer:
        "Initial disclosure typically causes a significant drop — 10-30% is common, depending on whether the market already suspected trouble. However, if the warning is already priced in (the stock has been declining for months on deteriorating financials), the additional impact may be modest. The real damage often comes from secondary effects: credit lines get revoked, suppliers demand cash on delivery, and customers look for alternative vendors.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>When an auditor adds going concern language to a company's annual report, they're raising a specific alarm: this company might not survive the next 12 months in its current form. It's the strongest warning an auditor can issue short of refusing to sign off on the financials entirely.</p>

<p>The phrase "going concern" comes from accounting's foundational assumption that a business will continue to operate indefinitely — that it's a "going" entity rather than a "gone" one. Financial statements are prepared on this assumption. Assets are valued at cost or fair market value, not liquidation value. Liabilities are classified as current or long-term based on when they mature. When the going concern assumption is in doubt, everything on the balance sheet needs to be reconsidered.</p>

<h2 id="what-triggers-warning">What Triggers a Going Concern Warning</h2>

<p>Auditors issue going concern opinions when they identify conditions that, individually or collectively, raise substantial doubt about the entity's ability to continue as a going concern. The accounting standard (ASC 205-40 under U.S. GAAP) specifies what auditors must evaluate:</p>

<p><strong>Recurring operating losses.</strong> A company that has lost money for several consecutive years and shows no path to profitability is a candidate. Pre-revenue biotech companies are frequent recipients — they burn cash on R&D with no revenue to offset it.</p>

<p><strong>Negative cash flow from operations.</strong> Reported net income can be positive (through accrual accounting) while actual cash flow is negative. Auditors look at cash flow because a company dies when it runs out of cash, not when it reports a loss.</p>

<p><strong>Working capital deficiency.</strong> When current liabilities exceed current assets, the company may not be able to pay its near-term obligations. A negative working capital position combined with limited access to credit markets is a common trigger.</p>

<p><strong>Debt covenant violations.</strong> If the company has breached its loan covenants — maximum leverage ratios, minimum interest coverage, or other financial tests — the lender can demand immediate repayment. Unless the company can negotiate a waiver or refinance, this can be fatal.</p>

<p><strong>Inability to obtain financing.</strong> A company that needs capital to continue operations but cannot raise it — because banks won't lend, investors won't buy equity, and existing credit lines are exhausted — faces an existential threat.</p>

<p><strong>Loss of a major customer or supplier.</strong> If 40% of revenue comes from one customer and that customer leaves, the business model may no longer be viable.</p>

<h2 id="where-to-find">Where to Find Going Concern Language in SEC Filings</h2>

<p>Going concern disclosures appear in two distinct locations within a 10-K:</p>

<h3>The Auditor's Report</h3>

<p>The independent auditor's report appears immediately before the financial statements in the 10-K. In a clean audit, the report states that the financial statements are presented fairly in all material respects. When going concern doubt exists, the auditor adds an explanatory paragraph — typically after the opinion paragraph — stating:</p>

<blockquote>
<p>"The accompanying financial statements have been prepared assuming that the Company will continue as a going concern. As discussed in Note X to the financial statements, the Company has suffered recurring losses from operations and has a net capital deficiency that raises substantial doubt about its ability to continue as a going concern."</p>
</blockquote>

<p>This language is standardized. If you see the phrase "substantial doubt about its ability to continue as a going concern" in an auditor's report, that is a going concern opinion.</p>

<h3>Notes to Financial Statements</h3>

<p>Management is required under ASC 205-40 to evaluate going concern conditions and, if substantial doubt exists, disclose their plans to address it. This disclosure typically appears in Note 1 (Nature of Operations) or Note 2 (Summary of Significant Accounting Policies). Management's discussion will describe:</p>
<ul>
<li>The specific conditions creating doubt</li>
<li>Management's plans to mitigate those conditions (e.g., planned capital raise, cost cutting, asset sales)</li>
<li>Whether those plans, if successfully implemented, would alleviate the doubt</li>
</ul>

<p>There's an important subtlety: management's plans can alleviate the doubt even if the auditor still issues the going concern opinion. The auditor evaluates whether the plans are probable, not merely possible. A company that says "we plan to raise $50 million in equity" needs more than a plan — they need evidence that financing is likely (term sheets, investor commitments, etc.).</p>

<h2 id="what-happens-after">What Happens After a Going Concern Warning</h2>

<p>A going concern opinion sets off a chain of consequences:</p>

<p><strong>Stock price decline.</strong> The market reaction is typically negative, though the severity depends on how much was already priced in. A company that's been visibly struggling for quarters may see a modest additional drop. A company where the going concern warning is a surprise can lose 30%+ in a single session.</p>

<p><strong>Credit line acceleration.</strong> Many loan agreements include provisions that allow lenders to accelerate repayment if the borrower receives a going concern opinion. This creates a death spiral: the going concern warning triggers loan acceleration, which worsens the cash position, which confirms the going concern risk.</p>

<p><strong>Customer and supplier reactions.</strong> Business partners pay attention to audit opinions. Customers who depend on the company's products may begin looking for alternatives. Suppliers may shift to cash-on-delivery terms instead of extending credit. Both reactions drain working capital further.</p>

<p><strong>Delisting risk.</strong> Stock exchanges require companies to meet minimum financial standards. A going concern opinion, while not an automatic delisting trigger, often leads the exchange to send a notification letter requesting a plan to regain compliance.</p>

<h2 id="investor-playbook">How Investors Should Respond</h2>

<p>A going concern warning is not automatically a sell signal. Some investors specialize in distressed situations and look for going concern companies where the market has overreacted. The decision depends on the specific circumstances:</p>

<p><strong>Read management's plan.</strong> Is the plan specific and credible? "We plan to reduce costs" is vague. "We have signed a term sheet with XYZ Capital for a $30 million senior secured facility, expected to close within 60 days" is concrete.</p>

<p><strong>Check the cash runway.</strong> How many months of cash remain at the current burn rate? If the company has 18 months of cash, there's time for the plan to work. If it has 3 months, the situation is urgent.</p>

<p><strong>Assess the business viability.</strong> Is this a fundamentally viable business that ran into a temporary cash crunch, or is the business model broken? A profitable company with a short-term debt maturity problem is very different from a pre-revenue company that has never generated cash.</p>

<p><strong>Look at insider behavior.</strong> Are insiders buying shares? If the CEO is purchasing stock after a going concern warning, they believe the company survives. If insiders are selling, they may be heading for the exits.</p>

<p>Brefyr flags going concern warnings automatically in its AI significance scoring. When a company's 10-K receives a going concern opinion, the filing typically receives a significance score of 8-10, ensuring that investors tracking the stock are alerted immediately.</p>
`,
};
