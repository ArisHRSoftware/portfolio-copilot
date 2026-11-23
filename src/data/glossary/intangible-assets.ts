import type { GlossaryTerm } from "../types";

export const termIntangibleAssets: GlossaryTerm = {
  slug: "intangible-assets",
  term: "Intangible Assets",
  title: "Intangible Assets — The Non-Physical Assets That Often Drive Most of a Company's Value",
  shortDefinition: "Intangible assets are non-physical assets with economic value, such as patents, trademarks, customer relationships, and technology, that are recorded on the balance sheet when acquired through a business combination and amortized over their useful lives.",
  metaDescription: "What are intangible assets? Types of intangibles, how they appear on the balance sheet from acquisitions, amortization vs impairment, and where to find details in SEC filings.",
  wordCount: 850, category: "Accounting & Audit", tags: ["intangible-assets", "patents", "trademarks", "amortization", "balance-sheet"],
  relatedSlugs: ["goodwill", "impairment", "acquisition", "gaap", "stock-based-compensation"], relatedTerms: ["goodwill", "impairment", "acquisition", "gaap", "stock-based-compensation"],
  faq: [{ question: "What is the difference between goodwill and intangible assets?", answer: "Identifiable intangible assets can be separated from the business and sold, licensed, or transferred — examples include patents, customer lists, trade names, and technology. They have measurable fair values and finite or indefinite useful lives. Goodwill is the residual — the amount paid in an acquisition that cannot be attributed to any identifiable asset. Goodwill cannot be separated and sold; it represents synergies, brand reputation, and workforce value that are inseparable from the business as a whole. Both appear on the balance sheet, but they receive different accounting treatment: identifiable intangibles with finite lives are amortized; goodwill is not amortized but is tested annually for impairment." },
  { question: "Why don't internally developed intangible assets appear on the balance sheet?", answer: "Under U.S. GAAP, most internally developed intangible assets are not capitalized — the costs are expensed as incurred. This means a company that spends $1 billion developing a drug internally shows zero asset value for that drug on its balance sheet, while a company that acquires the same drug for $1 billion records it as an intangible asset. This asymmetry is a known limitation of GAAP. It means that companies with strong R&D capabilities may have significantly more value than their balance sheets suggest, and that balance sheet comparisons between companies that grow organically vs through acquisitions can be misleading." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Intangible assets are non-physical assets that provide economic benefits to a company. They include patents, copyrights, trademarks, trade names, customer relationships, developed technology, software, franchise agreements, non-compete agreements, and many other forms of intellectual property and contractual rights. In the modern economy, intangible assets often represent the majority of a company's true economic value — the technology, brands, and customer relationships that generate revenue and competitive advantages. Yet under GAAP, most internally developed intangibles never appear on the balance sheet. Only intangible assets acquired through business combinations or purchased individually are capitalized.</p>

<h2 id="acquired-intangibles">Acquired Intangible Assets</h2>

<p>When a company acquires another business, ASC 805 (Business Combinations) requires the acquirer to identify and separately value all intangible assets of the target that meet either the contractual-legal criterion (rights arising from contracts or legal arrangements) or the separability criterion (the asset can be separated from the entity and sold, transferred, or licensed). Common categories include:</p>
<ul>
<li><strong>Customer relationships:</strong> The value of existing customer contracts and relationships expected to generate future revenue. Often the largest identifiable intangible.</li>
<li><strong>Developed technology:</strong> Patented or proprietary technology, software, and processes.</li>
<li><strong>Trade names and trademarks:</strong> Brand names, logos, and associated brand equity.</li>
<li><strong>Patents:</strong> Legal rights to inventions and innovations.</li>
<li><strong>Non-compete agreements:</strong> Contractual restrictions preventing key employees from competing.</li>
<li><strong>Order backlog:</strong> Value of existing unfulfilled orders at the acquisition date.</li>
</ul>

<h2 id="amortization">Amortization of Intangible Assets</h2>

<p>Finite-lived intangible assets are amortized over their estimated useful lives — typically 3-20 years depending on the type. Customer relationships might be amortized over 10-15 years, technology over 5-7 years, and non-compete agreements over 2-5 years. The amortization expense flows through the income statement, reducing operating income. For serial acquirers, intangible amortization can be a significant expense — billions of dollars annually for the largest technology and pharmaceutical companies.</p>

<p>Indefinite-lived intangible assets (certain trade names, perpetual licenses) are not amortized but are tested annually for impairment, similar to goodwill. The determination of whether an intangible has a finite or indefinite life requires judgment and is disclosed in the notes to financial statements.</p>

<h2 id="internally-developed">The Internal Development Problem</h2>

<p>Under GAAP, most internally developed intangible assets are expensed as incurred — R&D costs, brand-building advertising, and customer acquisition costs are charged to the income statement rather than capitalized as assets. This creates a significant asymmetry: a pharmaceutical company that acquires a drug for $5 billion records a $5 billion intangible asset, while a competitor that develops an equivalent drug internally for $5 billion in R&D shows nothing on its balance sheet. This limitation means that GAAP balance sheets systematically understate the asset base of innovation-driven companies that grow organically.</p>

<h2 id="investor-analysis">Analyzing Intangible Assets</h2>

<p>When evaluating intangible assets, investors should consider the age and remaining useful life (assets nearing full amortization provide less future benefit), the annual amortization expense relative to earnings (high amortization depresses GAAP earnings, which is why many companies report adjusted earnings excluding this charge), and whether any impairment testing indicates the intangibles may not deliver expected value. The intangible asset rollforward in the notes shows beginning balance, additions from acquisitions, amortization, impairments, and ending balance — a valuable summary of the company's intangible asset dynamics.</p>

<h2 id="sec-filings">Intangible Assets in SEC Filings</h2>

<ul>
<li><strong>Balance sheet:</strong> Intangible assets are presented as a separate line item (or combined with goodwill) in total assets.</li>
<li><strong>Notes to financial statements:</strong> Detailed breakdown by type, gross carrying amount, accumulated amortization, net carrying value, estimated future amortization expense by year, and useful life assumptions.</li>
<li><strong>8-K/A:</strong> Purchase price allocations for significant acquisitions detail the fair values assigned to each intangible asset category.</li>
<li><strong>MD&A:</strong> May discuss critical estimates related to intangible asset valuation and impairment testing.</li>
</ul>

<p>Brefyr extracts intangible asset data from 10-K filings for all SEC-reporting companies, helping investors understand the balance sheet composition and the magnitude of acquisition-related amortization affecting reported earnings.</p>
`,
};
