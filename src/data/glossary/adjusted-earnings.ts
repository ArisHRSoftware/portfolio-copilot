import type { GlossaryTerm } from "../types";

export const termAdjustedEarnings: GlossaryTerm = {
  slug: "adjusted-earnings",
  term: "Adjusted Earnings",
  title: "Adjusted Earnings — The Modified Profit Figure Companies Use to Showcase Core Performance",
  shortDefinition:
    "Adjusted earnings are a non-GAAP measure that modifies reported net income by excluding items management considers non-recurring, non-cash, or unrelated to core operations, such as restructuring charges, impairments, stock-based compensation, and acquisition costs.",
  metaDescription:
    "What are adjusted earnings? How companies calculate them, common adjustments, SEC reconciliation requirements, and how investors should interpret the gap between GAAP and adjusted earnings.",
  wordCount: 850,
  category: "Accounting & Audit",
  tags: ["adjusted-earnings", "non-gaap", "earnings", "financial-reporting", "core-operations"],
  relatedSlugs: ["non-gaap-measures", "gaap", "pro-forma", "ebitda", "earnings-management"],
  relatedTerms: ["non-gaap-measures", "gaap", "pro-forma", "ebitda", "earnings-management"],
  faq: [
    {
      question: "What items are typically excluded from adjusted earnings?",
      answer:
        "Common exclusions include: stock-based compensation expense, amortization of acquired intangible assets, restructuring and severance charges, acquisition and integration costs, litigation settlements, asset impairment charges, gains or losses on divestitures, debt extinguishment costs, and the tax effects of these adjustments. Each company defines its own adjusted earnings, so the specific exclusions vary. The reconciliation table in the earnings release bridges GAAP net income to adjusted earnings, showing each adjustment line by line.",
    },
    {
      question: "Should I use GAAP or adjusted earnings for valuation?",
      answer:
        "Both, with judgment. GAAP earnings reflect all economic costs — including real costs like stock compensation that dilutes shareholders. Adjusted earnings may better reflect cash-generating ability if the adjustments are genuinely one-time. For valuation, many analysts use adjusted earnings for the numerator (applied to a PE multiple) but cross-check with GAAP earnings and free cash flow. If a company's adjusted earnings have been consistently 40% higher than GAAP for five years, the adjustments are removing persistent costs, and the adjusted figure overstates sustainable profitability.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Adjusted earnings are a company's self-defined profit measure that starts with GAAP net income and adds back (or subtracts) items that management believes do not reflect the company's ongoing, core operating performance. The concept is straightforward: if a company took a one-time $500 million impairment charge on a failed acquisition, that charge dramatically reduces GAAP earnings for the quarter — but it does not reflect the company's current operating trajectory. Adjusted earnings remove that charge, showing what earnings would have looked like from ongoing operations alone.</p>

<h2 id="common-adjustments">Common Adjustments</h2>

<p><strong>Stock-based compensation (SBC).</strong> The most widespread and controversial adjustment. GAAP requires companies to expense the fair value of equity awards (options, RSUs, PSUs) over the vesting period. Many companies — particularly in technology — add this expense back because it is non-cash. Critics argue that SBC is a real economic cost (it dilutes shareholders) and should not be excluded. Proponents argue it distorts comparability because SBC expense depends on stock price volatility and compensation structure rather than operating performance.</p>

<p><strong>Amortization of acquired intangibles.</strong> When a company acquires another business, GAAP requires allocating part of the purchase price to identifiable intangible assets (customer relationships, technology, trade names) and amortizing them over their useful lives. Companies add back this amortization because it is a non-cash charge driven by acquisition accounting rather than current operations. The counterargument: these intangibles were acquired for a reason (they generate revenue), and the amortization reflects the consumption of that value.</p>

<p><strong>Restructuring charges.</strong> Costs associated with facility closures, workforce reductions, and organizational reorganizations. Companies exclude these as non-recurring. The question is whether a company that restructures every two years should consider these costs truly non-recurring.</p>

<p><strong>Acquisition and integration costs.</strong> Legal fees, advisory fees, integration expenses, and other costs directly related to completing and integrating acquisitions. For serial acquirers, these costs are effectively a cost of doing business, raising questions about their exclusion.</p>

<p><strong>Impairment charges.</strong> Write-downs of goodwill, intangible assets, or other long-lived assets. These are non-cash charges that reflect a decline in the value of previous investments. While legitimately one-time, they represent real economic losses that adjusted earnings ignore.</p>

<p><strong>Tax adjustments.</strong> The tax effects of the above adjustments, plus any discrete tax items (tax reform effects, audit settlements, valuation allowance changes) that distort the effective tax rate.</p>

<h2 id="gaap-gap">The GAAP-to-Adjusted Gap</h2>

<p>The magnitude of the gap between GAAP and adjusted earnings varies enormously across companies and industries. For a mature industrial company with stable operations, the gap might be 5-10%. For a fast-growing technology company with heavy stock compensation and frequent acquisitions, adjusted earnings can be 50-100%+ higher than GAAP earnings. The wider the gap, the more skepticism investors should apply.</p>

<p>Track the gap over time. If the gap has been consistent for years at roughly the same magnitude, the excluded items are likely recurring in nature, and the adjusted figure may overstate sustainable profitability. If the gap is narrowing, the company's GAAP and adjusted results are converging — a positive sign.</p>

<h2 id="analyst-consensus">Adjusted Earnings and Analyst Estimates</h2>

<p>Wall Street consensus earnings estimates typically correspond to adjusted (non-GAAP) earnings, not GAAP earnings. When a company "beats estimates" or "misses estimates," the comparison is usually to the adjusted figure. This creates a situation where the most prominent earnings metric in the market is a non-standardized, company-defined measure. Investors should be aware that the "earnings surprise" driving stock price moves may be based on a non-GAAP figure that excludes significant real costs.</p>

<h2 id="sec-filings">Adjusted Earnings in SEC Filings</h2>

<ul>
<li><strong>8-K:</strong> Earnings releases (Item 2.02) contain the adjusted earnings figure with the required GAAP reconciliation table.</li>
<li><strong>10-K and 10-Q:</strong> May include adjusted measures in MD&A, with reconciliation.</li>
<li><strong>Earnings call transcripts:</strong> Management typically discusses adjusted earnings in the prepared remarks and Q&A.</li>
</ul>

<p>Brefyr extracts both GAAP and adjusted earnings from SEC filings and earnings releases, displaying the reconciliation so investors can see exactly what is being excluded and make their own assessment of which measure better reflects economic reality.</p>
`,
};
