import type { GlossaryTerm } from "../types";

export const termEnterpriseValue: GlossaryTerm = {
  slug: "enterprise-value",
  term: "Enterprise Value",
  title: "Enterprise Value — The True Price Tag for Buying an Entire Company",
  shortDefinition:
    "Enterprise value (EV) is the total cost to acquire a company — market capitalization plus total debt, minority interest, and preferred equity, minus cash and equivalents.",
  metaDescription:
    "What is enterprise value? How to calculate EV from SEC filings, why acquirers and analysts prefer it over market cap, and how EV-based ratios compare companies with different debt levels.",
  wordCount: 2200,
  category: "Financial Metrics",
  tags: ["enterprise-value", "valuation", "ev-ebitda", "market-cap", "acquisition"],
  relatedSlugs: ["market-capitalization", "ebitda", "free-cash-flow", "10-k-filing"],
  relatedTerms: ["market-capitalization", "ebitda", "free-cash-flow", "10-k-filing"],
  faq: [
    {
      question: "How do you calculate enterprise value?",
      answer:
        "EV = Market Capitalization + Total Debt + Preferred Equity + Minority Interest - Cash and Cash Equivalents. Market cap comes from the stock price times shares outstanding. Total debt, preferred equity, minority interest, and cash all come from the balance sheet in the 10-K or 10-Q.",
    },
    {
      question: "Why is enterprise value better than market cap for comparing companies?",
      answer:
        "Market cap only measures the equity portion of a company's value. Two companies with the same $1 billion market cap could have very different total values if one has $500 million in debt and the other has $500 million in cash. Enterprise value captures the full economic value by including debt (which an acquirer would assume) and subtracting cash (which the acquirer would receive).",
    },
    {
      question: "What is a good EV/EBITDA ratio?",
      answer:
        "EV/EBITDA varies dramatically by industry. Software companies often trade at 15-30x EV/EBITDA. Utilities and industrials might trade at 8-12x. Banks and financials use different metrics entirely (EV/EBITDA is not meaningful for banks). A 'good' ratio is one that's below the industry average for a company with above-average growth — that suggests undervaluation. Compare to direct peers, not to the market overall.",
    },
    {
      question: "Can enterprise value be negative?",
      answer:
        "Theoretically yes — if a company has more cash than its market cap plus debt. This is extremely rare and usually signals deep market skepticism about the company's future (the market thinks the cash will be destroyed through operating losses). A negative EV is sometimes called a 'net-net' situation and attracts deep value investors.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Enterprise value answers the question that market capitalization doesn't: what would it actually cost to buy this entire company? Market cap tells you the value of the equity — what shareholders collectively own. Enterprise value adds the debt the acquirer would assume and subtracts the cash they'd receive, producing the true economic price tag for the whole business.</p>

<p>This is why private equity firms, investment banks, and M&A analysts think in enterprise value terms. When Broadcom acquires VMware or Microsoft acquires Activision, the deal price reflects enterprise value — not just the stock price times the shares.</p>

<h2 id="the-formula">The Formula</h2>

<p><strong>Enterprise Value = Market Cap + Total Debt + Preferred Equity + Minority Interest - Cash and Cash Equivalents</strong></p>

<p>Each component comes from the company's SEC filings:</p>

<ul>
<li><strong>Market Capitalization.</strong> Stock price × shares outstanding. Shares outstanding appear on the 10-K cover page and the balance sheet. Use diluted shares if significant stock options or convertible securities exist.</li>
<li><strong>Total Debt.</strong> Current portion of long-term debt + long-term debt. Both appear on the balance sheet. Include notes payable, capital lease obligations, and any other interest-bearing obligations. The notes to financial statements break debt down by maturity and interest rate.</li>
<li><strong>Preferred Equity.</strong> The liquidation value of preferred stock, if any. Found on the balance sheet under stockholders' equity. Many companies have no preferred stock; for those that do, it's treated like debt for EV purposes because preferred shareholders have priority over common shareholders.</li>
<li><strong>Minority Interest.</strong> Also called non-controlling interest. When a company owns less than 100% of a subsidiary but consolidates it fully, the portion it doesn't own is the minority interest. Found on the balance sheet under equity.</li>
<li><strong>Cash and Cash Equivalents.</strong> The first line under current assets on the balance sheet. Include short-term investments and marketable securities if they're liquid and available.</li>
</ul>

<h3>Worked Example</h3>

<p>From a company's 10-K and current stock price:</p>
<ul>
<li>Stock price: $45 | Shares outstanding: 100 million | <strong>Market Cap: $4.5 billion</strong></li>
<li>Long-term debt: $800 million | Current portion of LTD: $100 million | <strong>Total Debt: $900 million</strong></li>
<li>Preferred equity: $0 | Minority interest: $50 million</li>
<li>Cash and equivalents: $600 million</li>
</ul>

<p><strong>EV = $4,500M + $900M + $0 + $50M - $600M = $4,850M</strong></p>

<p>The enterprise value ($4.85B) exceeds the market cap ($4.5B) by $350 million because the company carries net debt of $300M ($900M debt - $600M cash) plus $50M minority interest. An acquirer paying market cap for the equity would also assume $900M in debt obligations, offset by $600M in cash they'd receive.</p>

<h2 id="why-ev-matters">Why Enterprise Value Matters</h2>

<h3>Apples-to-Apples Comparison</h3>

<p>Consider two software companies, each generating $200M in EBITDA:</p>

<table>
<thead><tr><th></th><th>Company A</th><th>Company B</th></tr></thead>
<tbody>
<tr><td>Market Cap</td><td>$3,000M</td><td>$3,000M</td></tr>
<tr><td>Total Debt</td><td>$0</td><td>$1,500M</td></tr>
<tr><td>Cash</td><td>$500M</td><td>$200M</td></tr>
<tr><td><strong>Enterprise Value</strong></td><td><strong>$2,500M</strong></td><td><strong>$4,300M</strong></td></tr>
<tr><td>P/E Ratio</td><td>15x</td><td>15x</td></tr>
<tr><td><strong>EV/EBITDA</strong></td><td><strong>12.5x</strong></td><td><strong>21.5x</strong></td></tr>
</tbody>
</table>

<p>Using market cap (P/E), both companies look identically valued at 15x earnings. Using enterprise value, Company B is nearly twice as expensive because an acquirer would need to assume $1.5 billion in debt. The EV/EBITDA ratio reveals what the P/E ratio hides: Company B is far more leveraged and far more expensive on a total-business basis.</p>

<h3>M&A Valuation</h3>

<p>When an acquirer bids for a company, they're buying the enterprise — equity plus debt minus cash. If Company A has a $3B market cap and you offer a 30% premium ($3.9B for the equity), your total outlay is $3.9B - $500M cash + $0 debt = $3.4B enterprise value. You're paying 17x EBITDA.</p>

<p>If Company B has the same $3B market cap and you offer the same 30% premium, your total outlay is $3.9B - $200M cash + $1,500M debt = $5.2B enterprise value. You're paying 26x EBITDA. Same premium, same market cap, dramatically different deals.</p>

<h2 id="ev-ratios">Key EV-Based Ratios</h2>

<h3>EV/EBITDA</h3>
<p>The most widely used EV-based ratio. It measures how many years of pre-interest, pre-tax operating earnings you're paying for the entire business. Lower is cheaper. A 10x EV/EBITDA company is half the price (relative to earnings) of a 20x company.</p>

<p>Typical ranges by industry:</p>
<table>
<thead><tr><th>Industry</th><th>Typical EV/EBITDA</th></tr></thead>
<tbody>
<tr><td>Software (SaaS)</td><td>15-30x</td></tr>
<tr><td>Technology (hardware)</td><td>10-18x</td></tr>
<tr><td>Healthcare / Biotech</td><td>12-25x</td></tr>
<tr><td>Consumer Staples</td><td>10-15x</td></tr>
<tr><td>Industrials</td><td>8-14x</td></tr>
<tr><td>Utilities</td><td>8-12x</td></tr>
<tr><td>Energy</td><td>4-8x</td></tr>
</tbody>
</table>

<h3>EV/Revenue</h3>
<p>Used for pre-profit companies (common in SaaS and biotech) where EBITDA is negative or meaningless. A company trading at 5x EV/Revenue is priced at $5 for every $1 of annual revenue. Useful for comparing high-growth companies that aren't yet profitable.</p>

<h3>EV/Free Cash Flow</h3>
<p>Combines enterprise value with actual cash generation. More conservative than EV/EBITDA because FCF accounts for capital expenditures. Particularly useful for capital-intensive businesses where EBITDA overstates true earnings power.</p>

<h2 id="finding-in-filings">Finding EV Components in SEC Filings</h2>

<p>Everything you need is on the balance sheet (Item 8 of the 10-K):</p>

<ol>
<li><strong>Cash and equivalents</strong> — First line under "Current Assets"</li>
<li><strong>Short-term debt</strong> — Under "Current Liabilities," look for "Current portion of long-term debt" or "Notes payable"</li>
<li><strong>Long-term debt</strong> — Under "Non-Current Liabilities"</li>
<li><strong>Preferred stock</strong> — Under "Stockholders' Equity" (if any)</li>
<li><strong>Minority interest</strong> — Under "Equity," labeled "Non-controlling interest"</li>
<li><strong>Shares outstanding</strong> — Cover page of the 10-K or the equity section of the balance sheet</li>
</ol>

<p>The debt note in the financial statements (often Note 7-10) breaks down debt by instrument, interest rate, and maturity date — useful for assessing refinancing risk.</p>

<p>On Brefyr, each stock page displays key financial data extracted from SEC filings for 7,600+ companies. Enterprise value and EV-based ratios can be derived from the balance sheet data presented alongside filing history and insider trading activity.</p>

<h2 id="common-mistakes">Common Mistakes with Enterprise Value</h2>

<p><strong>Forgetting operating leases.</strong> Under ASC 842, operating lease liabilities appear on the balance sheet. Some analysts add these to debt for a more complete EV; others don't. Be consistent when comparing companies.</p>

<p><strong>Using book value of debt instead of market value.</strong> For investment-grade companies, book and market values are close. For distressed companies, market value of debt can be significantly below book value (if the debt is trading at a discount). Using book value overstates EV for distressed situations.</p>

<p><strong>Including restricted cash.</strong> Cash that's legally restricted (escrowed for litigation, pledged as collateral) shouldn't be subtracted from EV because it's not available to the acquirer. Check the balance sheet footnotes for restricted cash disclosures.</p>

<p><strong>Comparing EV/EBITDA across industries.</strong> A 12x EV/EBITDA software company is cheap. A 12x EV/EBITDA utility company is expensive. Industry context is everything.</p>
`,
};
