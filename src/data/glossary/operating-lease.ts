import type { GlossaryTerm } from "../types";

export const termOperatingLease: GlossaryTerm = {
  slug: "operating-lease",
  term: "Operating Lease",
  title: "Operating Lease — The Most Common Type of Lease and How It Appears in Financial Statements",
  shortDefinition: "An operating lease is a lease arrangement in which the lessee uses an asset for a portion of its useful life without taking on the risks and rewards of ownership, now recognized on the balance sheet as a right-of-use asset and lease liability under ASC 842.",
  metaDescription: "What is an operating lease? How ASC 842 changed lease accounting, the difference between operating and finance leases, and where to find lease details in SEC filings.",
  wordCount: 850, category: "Accounting & Audit", tags: ["operating-lease", "asc-842", "right-of-use", "lease-liability", "balance-sheet"],
  relatedSlugs: ["finance-lease", "right-of-use-asset", "gaap", "10-k-filing"], relatedTerms: ["finance-lease", "right-of-use-asset", "gaap", "10-k-filing"],
  faq: [{ question: "What changed with the new lease accounting standard (ASC 842)?", answer: "Before ASC 842 (effective 2019), operating leases were entirely off-balance-sheet — only rent expense appeared on the income statement, and the future lease obligations were disclosed only in the footnotes. ASC 842 brought operating leases onto the balance sheet by requiring companies to record a right-of-use (ROU) asset and a corresponding lease liability for virtually all leases longer than 12 months. This added trillions of dollars of assets and liabilities to corporate balance sheets globally. The income statement treatment for operating leases remained largely unchanged — a single straight-line lease expense." },
  { question: "What is the difference between an operating lease and a finance lease?", answer: "An operating lease is essentially a rental — the lessee uses the asset temporarily and returns it at lease end. The income statement shows a single straight-line expense. A finance lease is more like a purchase — the lessee effectively acquires the asset with financing. The income statement shows separate depreciation expense (on the ROU asset) and interest expense (on the lease liability), resulting in higher total expense in early years (front-loaded). Both appear on the balance sheet under ASC 842, but the income statement patterns differ." }],
  lastUpdated: "2026-11-18",
  body: `
<p>An operating lease is a contractual arrangement in which one party (the lessee) pays another party (the lessor) for the right to use an asset — real estate, equipment, vehicles, aircraft — for a specified period without taking ownership. Operating leases are the most common form of commercial leasing. Retailers lease store locations, airlines lease aircraft, technology companies lease office space and data centers, and manufacturers lease equipment. Under the current lease accounting standard (ASC 842), operating leases are recognized on the balance sheet as right-of-use assets and lease liabilities, eliminating the off-balance-sheet treatment that existed under the prior standard.</p>

<h2 id="balance-sheet-recognition">Balance Sheet Recognition Under ASC 842</h2>

<p>When a company enters an operating lease, it records two items on its balance sheet at the lease commencement date:</p>

<p><strong>Right-of-use (ROU) asset:</strong> Represents the lessee's right to use the underlying asset for the lease term. The ROU asset is initially measured at the present value of lease payments plus any initial direct costs and prepaid lease payments, minus any lease incentives received.</p>

<p><strong>Lease liability:</strong> Represents the lessee's obligation to make lease payments over the lease term. The liability is initially measured at the present value of remaining lease payments, discounted at the incremental borrowing rate (or the rate implicit in the lease if determinable).</p>

<p>The ROU asset and lease liability are equal at inception (before adjustments) and decline over the lease term as payments are made. For companies with significant leased real estate portfolios, the balance sheet impact can be enormous — retailers, airlines, and hospitality companies added billions in ROU assets and lease liabilities when ASC 842 took effect.</p>

<h2 id="income-statement">Income Statement Treatment</h2>

<p>Operating leases produce a single, straight-line lease expense on the income statement — the total lease cost is spread evenly over the lease term. This contrasts with finance leases, which produce front-loaded expense (higher total cost in early years due to separate depreciation and interest charges). The straight-line treatment means that the lease liability declines slower than the ROU asset in early years — a quirk of the accounting that becomes apparent when analyzing the balance sheet over time.</p>

<h2 id="common-examples">Common Operating Lease Scenarios</h2>

<p><strong>Office and retail space.</strong> Most commercial real estate leases are operating leases with terms of 5-15 years. For retailers, the aggregate operating lease obligation is a major financial commitment that significantly affects the balance sheet.</p>

<p><strong>Equipment leasing.</strong> Companies lease equipment, vehicles, and technology when they want to avoid the upfront capital cost, retain flexibility to upgrade, or when the asset has a useful life significantly longer than the lease term.</p>

<p><strong>Aircraft leasing.</strong> Airlines operate large fleets of leased aircraft. The mix of owned vs leased aircraft significantly affects the balance sheet composition and financial ratios.</p>

<h2 id="analyzing-leases">Analyzing Operating Leases</h2>

<p>Investors should examine the total lease obligations (undiscounted future minimum payments, disclosed in a maturity table in the lease footnote), the weighted-average remaining lease term (indicates how locked in the company is), the weighted-average discount rate (affects the present value calculation), and the annual lease expense relative to revenue (a measure of how lease-dependent the company's operations are). Companies with large lease portfolios and thin margins are vulnerable to lease cost inflation.</p>

<h2 id="sec-filings">Operating Leases in SEC Filings</h2>

<ul>
<li><strong>Balance sheet:</strong> Operating lease ROU assets in non-current assets; operating lease liabilities split between current and non-current liabilities.</li>
<li><strong>Lease footnote (10-K):</strong> Detailed maturity analysis of future lease payments by year, weighted-average lease term and discount rate, lease expense by type, and cash paid for operating leases.</li>
<li><strong>Cash flow statement:</strong> Cash payments for operating leases appear in operating activities.</li>
<li><strong>MD&A:</strong> Discussion of significant lease commitments and their impact on liquidity.</li>
</ul>

<p>Brefyr extracts lease data from 10-K filings, including ROU asset balances, total lease liabilities, and future payment schedules, helping investors assess the lease-related obligations of companies in their portfolio.</p>
`,
};
