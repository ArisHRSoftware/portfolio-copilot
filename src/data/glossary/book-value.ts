import type { GlossaryTerm } from "../types";

export const termBookValue: GlossaryTerm = {
  slug: "book-value",
  term: "Book Value",
  title: "Book Value — What a Company Is Worth on Paper According to Its Balance Sheet",
  shortDefinition:
    "Book value is a company's total assets minus total liabilities as reported on the balance sheet — the theoretical amount shareholders would receive if the company liquidated everything at stated values.",
  metaDescription:
    "What is book value? How to calculate it from SEC filings, the price-to-book ratio, why book value matters for banks and asset-heavy companies, and when it's misleading.",
  wordCount: 2100,
  category: "Financial Metrics",
  tags: ["book-value", "balance-sheet", "valuation", "price-to-book", "net-asset-value"],
  relatedSlugs: ["market-capitalization", "enterprise-value", "pe-ratio", "10-k-filing"],
  relatedTerms: ["market-capitalization", "enterprise-value", "pe-ratio", "10-k-filing"],
  faq: [
    {
      question: "How do you calculate book value per share?",
      answer: "Book Value Per Share = (Total Assets - Total Liabilities - Preferred Equity) / Shares Outstanding. All components come from the balance sheet in the 10-K. Some analysts use tangible book value, which further subtracts intangible assets and goodwill.",
    },
    {
      question: "What does it mean when a stock trades below book value?",
      answer: "A price-to-book ratio below 1.0 means the market values the company at less than its net asset value on paper. This can signal undervaluation — you're buying assets for less than they're worth. But it can also signal that the market expects writedowns, that the assets are overvalued on the books, or that the company is destroying value through operations. Banks trading below book value during the 2008 crisis reflected genuine asset quality concerns.",
    },
    {
      question: "Why is book value important for banks?",
      answer: "Banks are essentially portfolios of financial assets (loans, securities) and liabilities (deposits, borrowings). Their assets are carried close to market value under fair value accounting rules. This makes book value a reasonable approximation of what the bank is actually worth, unlike for tech companies where the most valuable assets (software, brand, talent) don't appear on the balance sheet.",
    },
    {
      question: "When is book value misleading?",
      answer: "Book value is most misleading for asset-light businesses like software companies, consulting firms, and brands. Their most valuable assets — intellectual property, customer relationships, human capital — either don't appear on the balance sheet or appear at historical cost far below their economic value. Google's book value doesn't capture the value of its search algorithm. Nike's book value doesn't capture the value of its brand.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Book value is the accountant's answer to "what is this company worth?" It takes everything the company owns (assets), subtracts everything it owes (liabilities), and the remainder belongs to shareholders. On the balance sheet, this appears as total stockholders' equity — the literal "book value" of the business as recorded in its accounting books.</p>

<p>The concept is straightforward. The interpretation is not. Book value captures tangible reality (cash, buildings, inventory) but largely misses intangible value (brands, technology, customer loyalty). For some industries — banking, insurance, real estate — book value is the primary valuation anchor. For others — software, pharmaceuticals, consumer brands — it barely scratches the surface.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Book Value = Total Assets - Total Liabilities</strong></p>

<p>This equals total stockholders' equity on the balance sheet. To get per-share book value:</p>

<p><strong>Book Value Per Share = (Total Stockholders' Equity - Preferred Equity) / Common Shares Outstanding</strong></p>

<p>Preferred equity is subtracted because preferred shareholders have priority over common shareholders in liquidation. Shares outstanding come from the balance sheet or the 10-K cover page.</p>

<h3>Tangible Book Value</h3>

<p>Many analysts prefer tangible book value, which further removes intangible assets:</p>

<p><strong>Tangible Book Value = Book Value - Goodwill - Other Intangible Assets</strong></p>

<p>Goodwill arises from acquisitions — it's the premium paid above the fair value of acquired net assets. If a company paid $500 million for a business with $300 million in net assets, $200 million appears as goodwill. Whether that goodwill is worth anything depends entirely on whether the acquisition was successful. Tangible book value strips this uncertainty away.</p>

<h2 id="price-to-book">The Price-to-Book Ratio</h2>

<p><strong>P/B = Stock Price / Book Value Per Share</strong></p>

<p>Or equivalently: <strong>P/B = Market Capitalization / Total Stockholders' Equity</strong></p>

<p>A P/B of 1.0 means the market values the company exactly at its book value — you're paying $1 for $1 of net assets. A P/B above 1.0 means the market sees value beyond what's on the balance sheet (growth potential, competitive advantages, brand value). A P/B below 1.0 means the market thinks the stated assets are overvalued or the company is destroying shareholder value through operations.</p>

<h3>P/B Ranges by Industry</h3>

<table>
<thead><tr><th>Industry</th><th>Typical P/B</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Software / SaaS</td><td>5-20x</td><td>Value is in code, customers, and network effects — not on the balance sheet</td></tr>
<tr><td>Pharma / Biotech</td><td>2-8x</td><td>Drug pipelines have massive value not reflected in book</td></tr>
<tr><td>Consumer Brands</td><td>3-10x</td><td>Brand equity is the primary asset, largely intangible</td></tr>
<tr><td>Banks</td><td>0.8-1.5x</td><td>Assets are mostly financial instruments at near-market value</td></tr>
<tr><td>REITs</td><td>0.8-1.3x</td><td>Properties are carried near appraised value</td></tr>
<tr><td>Industrials</td><td>1.5-4x</td><td>Mix of tangible assets and operational franchise value</td></tr>
<tr><td>Utilities</td><td>1.2-2x</td><td>Regulated asset base with predictable returns</td></tr>
</tbody>
</table>

<h2 id="when-book-matters">When Book Value Is the Right Metric</h2>

<h3>Banks and Financial Institutions</h3>

<p>Banking is the industry where book value matters most. A bank's balance sheet consists primarily of financial assets (loans, securities) and financial liabilities (deposits, borrowings). Under fair value and expected credit loss accounting, these assets are carried close to market value. Tangible book value per share is the single most watched metric for bank stocks — analyst reports lead with it, and acquisition multiples are expressed as a premium or discount to tangible book.</p>

<p>During the 2008 financial crisis, major banks traded at 0.3-0.5x tangible book value. Investors who bought at those levels and held through the recovery saw 200-400% returns as valuations normalized to 1.0-1.5x book. Conversely, banks that traded below book because their loan portfolios were genuinely impaired (Washington Mutual, Wachovia) went to zero.</p>

<h3>Real Estate Companies and REITs</h3>

<p>Real estate companies own physical properties that are appraised and carried on the balance sheet at cost less depreciation (or fair value under certain methods). Net Asset Value (NAV) — the REIT equivalent of book value — is the primary valuation metric. REITs trading at discounts to NAV attract value investors; those at premiums signal the market expects the portfolio to appreciate.</p>

<h3>Holding Companies and Conglomerates</h3>

<p>Companies whose primary activity is owning other companies or financial assets — Berkshire Hathaway, Leucadia, Loews — are often valued relative to book or NAV. The sum-of-the-parts book value provides a floor for the holding company discount.</p>

<h2 id="when-book-misleads">When Book Value Is Misleading</h2>

<p><strong>Asset-light businesses.</strong> A software company might have $500 million in book value but a $15 billion market cap. The gap doesn't mean the stock is overvalued — it means the company's competitive advantages (code, data, network effects) don't appear on the balance sheet. Buying Microsoft at book value would be buying it for roughly 5% of its market price.</p>

<p><strong>Goodwill-heavy companies.</strong> A company that has made many acquisitions may have billions in goodwill on its balance sheet, inflating book value. If those acquisitions don't generate returns, the goodwill will eventually be written down (impaired), collapsing book value. Check the ratio of goodwill to total assets — above 50% means the balance sheet is dominated by acquisition premiums.</p>

<p><strong>Negative book value.</strong> Some companies have negative stockholders' equity — total liabilities exceed total assets. This happens with companies that have accumulated large losses (pre-profit biotech), executed massive buybacks funded by debt (McDonald's, Starbucks), or have significant off-balance-sheet obligations. Negative book value doesn't mean the company is worthless — it means book value is not a useful metric for valuation.</p>

<h2 id="finding-in-filings">Finding Book Value in SEC Filings</h2>

<p>On the balance sheet in the 10-K or 10-Q:</p>
<ol>
<li><strong>Total Assets</strong> — The sum of all current and non-current assets</li>
<li><strong>Total Liabilities</strong> — The sum of all current and non-current liabilities</li>
<li><strong>Total Stockholders' Equity</strong> — Assets minus liabilities (this is book value)</li>
<li><strong>Goodwill</strong> — Listed under non-current assets; subtract for tangible book</li>
<li><strong>Other Intangible Assets</strong> — Also under non-current assets; subtract for tangible book</li>
</ol>

<p>The notes to financial statements provide a breakdown of intangible assets by type (customer relationships, technology, trade names) and their amortization schedules — useful for assessing how much of book value is "hard" versus "soft."</p>

<p>On Brefyr, financial data from SEC filings is extracted for 7,600+ companies, including the balance sheet components needed to calculate book value and price-to-book alongside filing history and insider trading data.</p>
`,
};
