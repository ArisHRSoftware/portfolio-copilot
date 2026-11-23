import type { GlossaryTerm } from "../types";

export const termRightOfUseAsset: GlossaryTerm = {
  slug: "right-of-use-asset",
  term: "Right-of-Use Asset",
  title: "Right-of-Use Asset — The Balance Sheet Asset Created by Lease Accounting",
  shortDefinition: "A right-of-use (ROU) asset is a balance sheet asset representing a lessee's right to use a leased asset for the duration of the lease term, recorded under ASC 842 for both operating and finance leases.",
  metaDescription: "What is a right-of-use asset? How ROU assets are measured, their impact on the balance sheet, the relationship to lease liabilities, and where to find them in SEC filings.",
  wordCount: 800, category: "Accounting & Audit", tags: ["right-of-use", "rou-asset", "asc-842", "lease-accounting", "balance-sheet"],
  relatedSlugs: ["operating-lease", "finance-lease", "gaap", "10-k-filing"], relatedTerms: ["operating-lease", "finance-lease", "gaap", "10-k-filing"],
  faq: [{ question: "How is a right-of-use asset measured?", answer: "At lease commencement, the ROU asset is measured at the initial amount of the lease liability, plus any lease payments made at or before commencement, plus any initial direct costs incurred by the lessee, minus any lease incentives received from the lessor. Over the lease term, operating lease ROU assets are reduced by straight-line lease expense minus the lease liability reduction (creating an uneven decline pattern). Finance lease ROU assets are reduced through straight-line depreciation. The ROU asset is also subject to impairment testing if events indicate its value may be impaired." },
  { question: "Do right-of-use assets affect financial ratios?", answer: "Significantly. ROU assets increase total assets, which reduces asset turnover ratios and return on assets (ROA). The corresponding lease liabilities increase total liabilities, which affects the debt-to-equity ratio, interest coverage, and other leverage metrics. When ASC 842 took effect, many companies saw their total assets and liabilities jump by 10-30% due to the recognition of previously off-balance-sheet operating leases. Investors comparing current-period ratios to pre-ASC 842 periods must adjust for this structural change." }],
  lastUpdated: "2026-11-18",
  body: `
<p>A right-of-use (ROU) asset is the balance sheet representation of a lessee's right to use a leased asset over the lease term. Introduced by ASC 842 (effective 2019 for public companies), ROU assets brought trillions of dollars of previously off-balance-sheet lease rights onto corporate balance sheets for the first time. Every lease longer than 12 months — whether classified as an operating lease or a finance lease — now generates an ROU asset on the lessee's balance sheet, paired with a corresponding lease liability representing the obligation to make future lease payments.</p>

<h2 id="initial-measurement">Initial Measurement</h2>

<p>At the commencement date of a lease, the ROU asset is measured as the initial amount of the lease liability plus any lease payments made at or before commencement (prepaid rent), plus any initial direct costs (legal fees, broker commissions directly related to negotiating and arranging the lease), minus any lease incentives received from the lessor (tenant improvement allowances, rent-free periods).</p>

<p>The lease liability — the other side of the entry — is measured as the present value of remaining lease payments over the lease term, discounted at the rate implicit in the lease (if determinable) or the lessee's incremental borrowing rate. The discount rate significantly affects both the ROU asset and lease liability amounts, and it is disclosed in the lease footnote.</p>

<h2 id="subsequent-measurement">Subsequent Measurement</h2>

<p><strong>Operating lease ROU assets</strong> are amortized over the lease term in a pattern that results in straight-line total lease expense. Because the lease liability reduction accelerates over time (similar to a mortgage payment schedule), the ROU asset decline is uneven — faster in later years.</p>

<p><strong>Finance lease ROU assets</strong> are depreciated on a straight-line basis over the shorter of the lease term or the useful life of the underlying asset. This is simpler and more intuitive than the operating lease amortization pattern.</p>

<h2 id="impairment">ROU Asset Impairment</h2>

<p>ROU assets are subject to impairment testing under ASC 360 (long-lived asset impairment) when triggering events occur. If a company closes a leased facility, abandons leased space, or subleases at below-market rates, the ROU asset may be impaired. The impairment charge appears on the income statement as an operating expense. ROU asset impairments became common during and after the COVID-19 pandemic as companies reduced their physical footprints and exited leases for unused office space.</p>

<h2 id="balance-sheet-impact">Balance Sheet Impact</h2>

<p>The magnitude of ROU assets on corporate balance sheets is substantial. Major retailers can have $10-30 billion in operating lease ROU assets. Airlines carry billions in finance lease ROU assets for leased aircraft. Technology companies with large campus leases show significant ROU balances. For many companies, ROU assets are among the largest asset categories, comparable to or exceeding property, plant, and equipment.</p>

<p>The balance sheet impact extends to financial ratios. Total assets increase (reducing ROA and asset turnover), total liabilities increase (increasing leverage ratios), and the nature of the balance sheet shifts to include obligations that were previously only in the footnotes. Analysts comparing companies with different lease strategies (heavy leasing vs heavy ownership) now have better comparability thanks to the on-balance-sheet treatment.</p>

<h2 id="practical-exemptions">Practical Exemptions</h2>

<p>ASC 842 provides two practical exemptions that keep certain leases off the balance sheet: short-term leases (12 months or less, with no purchase option the lessee is reasonably certain to exercise) and leases of low-value assets (a practical expedient available under IFRS 16 but not explicitly in ASC 842, though the effect is similar for immaterial items). Companies must disclose their policy for these exemptions.</p>

<h2 id="sec-filings">Right-of-Use Assets in SEC Filings</h2>

<ul>
<li><strong>Balance sheet:</strong> Operating lease ROU assets and finance lease ROU assets presented as separate line items or combined with other asset categories.</li>
<li><strong>Lease footnote:</strong> Detailed breakdown of ROU assets by type, maturity schedule of lease liabilities, weighted-average lease term and discount rate.</li>
<li><strong>Cash flow statement:</strong> Non-cash ROU asset additions are supplementally disclosed. Cash payments for operating and finance leases are shown separately.</li>
</ul>

<p>Brefyr extracts ROU asset balances and lease liability schedules from 10-K filings, providing investors with a clear view of lease-related balance sheet items for companies across their portfolio.</p>
`,
};
