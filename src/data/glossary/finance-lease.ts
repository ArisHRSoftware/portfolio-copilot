import type { GlossaryTerm } from "../types";

export const termFinanceLease: GlossaryTerm = {
  slug: "finance-lease",
  term: "Finance Lease",
  title: "Finance Lease — When a Lease Is Treated More Like a Purchase on the Financial Statements",
  shortDefinition: "A finance lease (formerly called a capital lease) is a lease arrangement that transfers substantially all the risks and rewards of ownership to the lessee, recorded on the balance sheet with separate depreciation and interest expense on the income statement.",
  metaDescription: "What is a finance lease? How it differs from an operating lease, the classification criteria, income statement impact, and where to find finance lease details in SEC filings.",
  wordCount: 850, category: "Accounting & Audit", tags: ["finance-lease", "capital-lease", "asc-842", "depreciation", "interest-expense"],
  relatedSlugs: ["operating-lease", "right-of-use-asset", "gaap", "10-k-filing"], relatedTerms: ["operating-lease", "right-of-use-asset", "gaap", "10-k-filing"],
  faq: [{ question: "When is a lease classified as a finance lease?", answer: "Under ASC 842, a lease is classified as a finance lease if it meets any of five criteria: (1) the lease transfers ownership to the lessee by the end of the term, (2) the lease grants the lessee a purchase option that is reasonably certain to be exercised, (3) the lease term is for the major part of the asset's remaining economic life, (4) the present value of lease payments equals or exceeds substantially all of the asset's fair value, or (5) the asset is so specialized that it has no alternative use to the lessor. If none of these criteria are met, the lease is classified as an operating lease." },
  { question: "Why does the income statement treatment differ between finance and operating leases?", answer: "Finance leases are treated like financed purchases — the lessee is considered to have effectively bought the asset with borrowed money. Therefore, the income statement shows depreciation of the ROU asset (like depreciation on an owned asset) and interest on the lease liability (like interest on a loan). These two charges are front-loaded — interest is higher in early years when the liability is largest. Operating leases show a single straight-line rent expense, which is simpler and more evenly distributed. The total expense over the lease term is the same; only the timing pattern differs." }],
  lastUpdated: "2026-11-18",
  body: `
<p>A finance lease — called a capital lease under the prior accounting standard (ASC 840) — is a lease that effectively transfers the economic risks and rewards of asset ownership from the lessor to the lessee. Unlike an operating lease, which is essentially a rental, a finance lease is accounted for as if the lessee purchased the asset using financing. The lessee records a right-of-use asset and lease liability (similar to an operating lease under ASC 842), but the income statement treatment is markedly different: instead of a single straight-line expense, the lessee records separate depreciation expense on the ROU asset and interest expense on the lease liability.</p>

<h2 id="classification-criteria">Classification Criteria</h2>

<p>ASC 842 provides five criteria for classifying a lease as a finance lease. A lease meeting any one of the following is a finance lease:</p>
<ul>
<li><strong>Ownership transfer:</strong> The lease transfers ownership of the underlying asset to the lessee by the end of the lease term.</li>
<li><strong>Purchase option:</strong> The lessee has the option to purchase the asset, and it is reasonably certain that the lessee will exercise this option (typically because the option price is significantly below fair value).</li>
<li><strong>Lease term:</strong> The lease term is for the major part of the remaining economic life of the asset (commonly interpreted as 75% or more).</li>
<li><strong>Present value:</strong> The present value of the lease payments and any residual value guarantee equals or exceeds substantially all of the fair value of the asset (commonly interpreted as 90% or more).</li>
<li><strong>Specialization:</strong> The asset is so specialized that it has no alternative use to the lessor at the end of the lease term.</li>
</ul>

<h2 id="income-statement-impact">Income Statement Impact</h2>

<p><strong>Depreciation.</strong> The ROU asset is depreciated over the shorter of the lease term or the asset's useful life (or over the useful life if the lease transfers ownership or contains a bargain purchase option). Depreciation is typically straight-line and appears as an operating expense.</p>

<p><strong>Interest.</strong> The lease liability accrues interest at the discount rate used to measure the liability. Interest expense is higher in early years (when the liability balance is largest) and declines over time as payments reduce the principal. This creates a front-loaded expense pattern — total expense (depreciation + interest) is higher in early years and lower in later years.</p>

<p><strong>Comparison to operating leases.</strong> Over the full lease term, total expense is identical for finance and operating leases — only the timing differs. But the front-loaded pattern of finance leases depresses earnings in early years, which is why the distinction matters for financial analysis.</p>

<h2 id="balance-sheet">Balance Sheet Presentation</h2>

<p>Finance lease ROU assets and liabilities are presented separately from operating lease items on the balance sheet (or in the notes). The ROU asset declines through depreciation; the liability declines through payments minus interest accrual. Some companies present finance lease assets within property, plant, and equipment and finance lease liabilities within debt — reflecting the economic substance of the arrangement as a financed purchase.</p>

<h2 id="cash-flow">Cash Flow Classification</h2>

<p>A key difference from operating leases: for finance leases, only the interest portion of lease payments is classified as operating cash flow. The principal repayment portion is classified as financing cash flow. For operating leases, the entire cash payment is classified as operating cash flow. This classification difference means that converting operating leases to finance leases (through lease restructuring or new lease terms) shifts cash outflows from operating to financing activities, improving operating cash flow metrics without changing the actual cash paid.</p>

<h2 id="sec-filings">Finance Leases in SEC Filings</h2>

<ul>
<li><strong>Balance sheet:</strong> Finance lease ROU assets (often within PP&E) and finance lease liabilities (often within debt) presented separately or in the notes.</li>
<li><strong>Income statement:</strong> Depreciation expense on finance lease assets and interest expense on finance lease liabilities — may require reading the notes to identify the lease-specific components.</li>
<li><strong>Lease footnote (10-K):</strong> Maturity analysis, weighted-average lease term and discount rate, comparison of finance vs operating lease balances.</li>
<li><strong>Cash flow statement:</strong> Interest portion in operating activities; principal portion in financing activities.</li>
</ul>

<p>Brefyr processes lease disclosures from 10-K and 10-Q filings, distinguishing between finance and operating lease obligations to give investors a complete picture of lease-related commitments and their impact on financial metrics.</p>
`,
};
