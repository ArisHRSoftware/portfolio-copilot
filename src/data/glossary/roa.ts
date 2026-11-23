import type { GlossaryTerm } from "../types";

export const termROA: GlossaryTerm = {
  slug: "roa",
  term: "Return on Assets",
  title: "Return on Assets (ROA) — How Efficiently a Company Turns Assets Into Profit",
  shortDefinition:
    "Return on assets (ROA) divides net income by total assets, measuring how effectively a company uses everything it owns to generate profit regardless of how those assets were financed.",
  metaDescription:
    "What is return on assets? Learn how to calculate ROA, interpret it by industry, compare ROA vs ROE, and spot companies that use assets efficiently.",
  wordCount: 480,
  category: "Financial Metrics",
  tags: ["roa", "profitability", "asset-efficiency", "financial-metrics", "fundamental-analysis"],
  relatedSlugs: ["roe", "roic", "asset-turnover", "net-margin"],
  relatedTerms: ["roe", "roic", "asset-turnover", "net-margin"],
  faq: [
    {
      question: "What is the difference between ROA and ROE?",
      answer:
        "ROA measures profitability relative to total assets (funded by both equity and debt), while ROE measures profitability relative to shareholders' equity alone. ROA is unaffected by capital structure — a company with heavy debt and a company with no debt can have identical ROAs if their operating efficiency is the same. ROE, by contrast, rises when leverage increases because debt reduces the equity denominator. ROA gives a cleaner picture of operational efficiency.",
    },
    {
      question: "Why do banks have lower ROA than tech companies?",
      answer:
        "Banks hold enormous asset bases because their primary business model involves borrowing deposits (liabilities) and lending them out (assets). A large bank might have $2 trillion in assets but earn $20 billion in net income, producing an ROA of just 1%. Technology companies hold comparatively few physical assets — their value is in software, patents, and human capital — so even modest profits produce high ROAs. An ROA of 1-2% is excellent for a bank; for a tech company, 10-15% or higher is common.",
    },
    {
      question: "Can ROA be negative?",
      answer:
        "Yes. ROA turns negative when a company reports a net loss. This is common for pre-profit startups, companies in turnaround situations, or cyclical businesses at the bottom of their cycle. A persistently negative ROA signals that the company's assets are destroying value rather than creating it, which is a serious red flag unless the company is investing heavily for future growth.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Return on assets strips away the complexity of capital structure and asks the simplest possible efficiency question: given everything this company owns, how much profit does it produce? A company with $10 million in assets that earns $1 million in net income has a 10% ROA. That means every dollar of assets — factories, inventory, cash, receivables, intellectual property — collectively generated ten cents of profit over the year.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>ROA = Net Income / Total Assets</strong></p>

<p>Net income comes from the income statement. Total assets come from the balance sheet. As with ROE, some analysts use average total assets (the average of beginning and ending assets for the period) to account for asset changes throughout the year from acquisitions, disposals, or capital expenditures.</p>

<p>The result is expressed as a percentage. Because total assets are always larger than shareholders' equity (assets = equity + liabilities), ROA is always lower than or equal to ROE for a profitable company with any amount of debt.</p>

<h2 id="why-roa-matters">Why ROA Matters</h2>

<p>ROA's greatest strength is its indifference to capital structure. Two companies in the same industry with identical operations will have the same ROA even if one is debt-free and the other is levered at 3x. ROE would differ dramatically between them because leverage amplifies returns on equity. This makes ROA superior for comparing operational efficiency across companies with different financing strategies.</p>

<p>ROA also reveals asset-light versus asset-heavy business models. A consulting firm with minimal physical assets might generate a 25% ROA because its value comes from people, not property. A steel manufacturer with billions in plant and equipment might earn a 4% ROA — perfectly respectable for its industry. Comparing these two ROAs directly is meaningless, but comparing each to its industry peers reveals which company is the better operator within its competitive set.</p>

<h2 id="industry-benchmarks">Industry Benchmarks</h2>

<p>ROA varies enormously by sector because industries differ in asset intensity. Technology and software companies frequently exceed 15% ROA. Consumer staples and healthcare companies typically fall in the 8-12% range. Industrial and manufacturing firms earn 4-8%. Financial institutions — banks, insurance companies, REITs — have structurally low ROAs of 0.5-2% because their business models require holding massive asset bases relative to the income they generate.</p>

<p>Within financial services, ROA is actually the preferred profitability metric over ROE because bank leverage is so extreme (10:1 or higher) that ROE becomes difficult to interpret. Bank analysts use ROA to compare operational efficiency and reserve the return on tangible common equity (ROTCE) for assessing shareholder returns.</p>

<h2 id="limitations">Limitations of ROA</h2>

<p>ROA has meaningful blind spots. First, <strong>intangible assets</strong>: accounting rules often understate the true asset base of knowledge-intensive businesses. A pharmaceutical company's most valuable asset — its drug pipeline — may not appear on the balance sheet at its economic value. This inflates reported ROA for companies whose competitive advantages live in intellectual property rather than physical assets.</p>

<p>Second, <strong>asset age and depreciation</strong>: a company using fully depreciated equipment has lower reported assets than a competitor that recently invested in new equipment. The older company appears more efficient (higher ROA) even though its facilities may be outdated and less productive. Net asset values depend heavily on depreciation schedules and accounting choices.</p>

<p>Third, <strong>operating leases</strong>: before recent accounting standards changes, companies could keep leased assets off the balance sheet, deflating total assets and inflating ROA. Updated standards now require most leases to be capitalized, but historical comparisons still need adjustment.</p>

<p>Fourth, <strong>acquisitions and goodwill</strong>: when a company acquires another at a premium, the excess purchase price is recorded as goodwill on the balance sheet. This inflates total assets without necessarily improving earning capacity, which depresses ROA. Companies that grow through acquisitions almost always show lower ROAs than organic growers, even if the acquisitions are value-creating.</p>

<p>Despite these limitations, ROA remains one of the best single-number indicators of management quality. A consistently high ROA across economic cycles signals a business that generates strong profits without requiring excessive capital investment — the hallmark of a well-run company with durable competitive advantages.</p>

<p>On Brefyr, company financial pages pull data directly from SEC filings, letting you track ROA and other efficiency metrics across thousands of public companies alongside insider trading and filing history.</p>
`,
};
