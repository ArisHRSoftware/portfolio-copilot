import type { GlossaryTerm } from "../types";

export const termDeferredTax: GlossaryTerm = {
  slug: "deferred-tax",
  term: "Deferred Tax Asset/Liability",
  title: "Deferred Tax — Timing Differences Between Book and Tax Accounting",
  shortDefinition: "Deferred tax assets and liabilities arise from temporary differences between how transactions are treated for financial reporting (GAAP) and how they are treated for tax purposes (IRS rules), creating future tax benefits or obligations on the balance sheet.",
  metaDescription: "What are deferred tax assets and liabilities? How timing differences create them, valuation allowances, what they signal about a company, and where to find them in SEC filings.",
  wordCount: 850, category: "Accounting & Audit", tags: ["deferred-tax", "tax-accounting", "timing-differences", "valuation-allowance", "balance-sheet"],
  relatedSlugs: ["gaap", "tax-loss-harvesting", "going-concern", "10-k-filing"], relatedTerms: ["gaap", "tax-loss-harvesting", "going-concern", "10-k-filing"],
  faq: [{ question: "What is the difference between a deferred tax asset and a deferred tax liability?", answer: "A deferred tax asset (DTA) means the company has overpaid taxes relative to its GAAP tax expense — it will pay less tax in the future. Common sources: accrued expenses recognized for GAAP but not yet deductible for tax, net operating loss carryforwards, and stock compensation. A deferred tax liability (DTL) means the company has underpaid taxes relative to its GAAP tax expense — it will pay more tax in the future. Common sources: accelerated depreciation for tax (faster write-offs reduce current taxes), revenue recognized for tax before GAAP, and undistributed foreign earnings. The net deferred tax position (DTA minus DTL) appears on the balance sheet." },
  { question: "What is a valuation allowance on deferred tax assets?", answer: "A valuation allowance is a reserve that reduces the value of deferred tax assets when it is 'more likely than not' (greater than 50% probability) that some or all of the DTA will not be realized. If a company has $500 million in net operating loss carryforwards but management believes only $300 million will be utilized before they expire, a $200 million valuation allowance is recorded. Recording or increasing a valuation allowance is a negative signal — it means management doubts the company will generate enough future taxable income to use its tax benefits." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Deferred taxes are one of the most confusing topics in financial reporting, but the concept is fundamental: GAAP and tax law often treat the same transaction differently in terms of timing. Revenue may be recognized in one period for GAAP and a different period for taxes. Expenses may be deducted earlier for tax than for GAAP (or vice versa). These timing differences create deferred tax assets (future tax benefits) and deferred tax liabilities (future tax obligations) on the balance sheet. Understanding deferred taxes is essential for evaluating a company's true tax burden and the quality of its balance sheet.</p>

<h2 id="how-they-arise">How Deferred Taxes Arise</h2>

<p><strong>Deferred tax assets (DTAs).</strong> Created when a company pays more tax currently than its GAAP financial statements suggest. Common sources include net operating loss (NOL) carryforwards — losses from prior years that can offset future taxable income, reducing future tax payments. Stock-based compensation is typically expensed over time for GAAP but generates a tax deduction only when options are exercised or RSUs vest. Accrued liabilities (warranty reserves, restructuring reserves, bad debt reserves) are recognized as expenses for GAAP when estimated but are deductible for tax only when actually paid. Each of these creates a DTA — the company has effectively prepaid taxes and will benefit in the future.</p>

<p><strong>Deferred tax liabilities (DTLs).</strong> Created when a company pays less tax currently than its GAAP financial statements suggest. The most common source is depreciation — tax law allows accelerated depreciation (bonus depreciation, MACRS) that generates larger deductions in early years, while GAAP uses straight-line depreciation that spreads the deduction evenly. This timing difference means the company pays less tax now (thanks to the accelerated tax deduction) but will pay more later when the tax deduction has been fully used while the GAAP expense continues. Revenue recognition differences and unrealized gains on investments also create DTLs.</p>

<h2 id="balance-sheet-presentation">Balance Sheet Presentation</h2>

<p>Companies present their net deferred tax position on the balance sheet — either a net DTA or a net DTL, classified as non-current. The income tax footnote in the 10-K provides the full detail: a table listing every significant source of deferred tax assets and liabilities, the gross amounts, the valuation allowance (if any), and the net deferred tax position. This footnote is essential reading for understanding the company's tax situation.</p>

<h2 id="valuation-allowance">Valuation Allowance</h2>

<p>When management determines it is more likely than not that some portion of the deferred tax assets will not be realized, they must record a valuation allowance — a contra-asset that reduces the DTA. Recording a new valuation allowance or increasing an existing one is a charge to tax expense on the income statement and signals that management questions the company's ability to generate sufficient taxable income. Conversely, releasing (reducing) a valuation allowance is a benefit to tax expense and can significantly boost net income. Changes in the valuation allowance are among the most judgment-intensive areas of financial reporting.</p>

<h2 id="nol-carryforwards">Net Operating Loss Carryforwards</h2>

<p>Companies with accumulated tax losses can carry those losses forward to offset future taxable income, creating deferred tax assets. Under current tax law, NOLs generated after 2017 can be carried forward indefinitely but can only offset 80% of taxable income in any given year. Pre-2018 NOLs may have different carryforward periods. For companies with large NOL balances, the DTA can be enormous — representing billions of dollars in potential future tax savings. However, the value is contingent on the company generating taxable income, which is why valuation allowances are common for companies with historical losses.</p>

<h2 id="sec-filings">Deferred Taxes in SEC Filings</h2>

<ul>
<li><strong>Balance sheet:</strong> Net deferred tax asset or liability in non-current assets or liabilities.</li>
<li><strong>Income tax footnote (10-K):</strong> Detailed breakdown of DTA and DTL sources, valuation allowance, effective tax rate reconciliation, and NOL carryforward details.</li>
<li><strong>MD&A:</strong> Discussion of tax rate trends and factors affecting the tax provision.</li>
<li><strong>Cash flow statement:</strong> Deferred tax changes appear as an adjustment in operating activities.</li>
</ul>

<p>Brefyr processes income tax footnotes from 10-K filings for all SEC-reporting companies, extracting deferred tax positions and NOL carryforward data to help investors assess the tax-related risks and opportunities on the balance sheet.</p>
`,
};
