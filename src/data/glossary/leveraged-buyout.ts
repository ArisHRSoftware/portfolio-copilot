import type { GlossaryTerm } from "../types";

export const termLeveragedBuyout: GlossaryTerm = {
  slug: "leveraged-buyout",
  term: "Leveraged Buyout (LBO)",
  title: "Leveraged Buyout (LBO) — Acquiring Companies Using Borrowed Money",
  shortDefinition:
    "A leveraged buyout is an acquisition in which the buyer finances a significant portion of the purchase price with borrowed money, using the target company's assets and cash flows as collateral for the debt.",
  metaDescription:
    "What is a leveraged buyout? How LBOs work, why private equity firms use leverage, the risks for the target company, and how to identify LBO-related filings with the SEC.",
  wordCount: 1000,
  category: "Corporate Actions",
  tags: ["leveraged-buyout", "lbo", "private-equity", "corporate-action", "debt-financing"],
  relatedSlugs: ["management-buyout", "acquisition", "tender-offer", "private-equity", "8-k-filing"],
  relatedTerms: ["management-buyout", "acquisition", "tender-offer", "private-equity", "8-k-filing"],
  faq: [
    {
      question: "Why do private equity firms use so much debt in LBOs?",
      answer:
        "Debt amplifies returns. If a PE firm buys a company for $1 billion using $300 million of equity and $700 million of debt, and sells the company five years later for $1.5 billion after paying down debt to $400 million, the equity value has grown from $300 million to $1.1 billion — a 3.7x return. Without leverage, the same purchase funded entirely with equity would have returned only 1.5x. Additionally, interest payments on debt are tax-deductible, reducing the company's tax burden. The tradeoff is risk: if the business deteriorates and cannot service the debt, the company may default or go bankrupt.",
    },
    {
      question: "What happens to a public company's shareholders in an LBO?",
      answer:
        "Public shareholders receive a cash buyout at a premium — typically 20-50% above the pre-announcement stock price. The company goes private (is delisted from the stock exchange), and the PE firm and its co-investors become the sole equity owners. The transaction requires shareholder approval through a proxy vote. After the company is taken private, it still files with the SEC (10-K, 10-Q) if it has public debt outstanding, but its equity is no longer publicly traded.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A leveraged buyout (LBO) is an acquisition strategy in which the buyer — typically a private equity firm — finances the majority of the purchase price with debt rather than equity. In a typical LBO, 60-80% of the acquisition cost is funded by borrowed money, with the target company's own assets and future cash flows serving as collateral. The remaining 20-40% comes from the buyer's equity. After the transaction closes, the target company bears the debt on its balance sheet, and its cash flows are used to service the interest payments and gradually repay the principal.</p>

<h2 id="how-lbos-work">How LBOs Work</h2>

<p><strong>Target selection.</strong> Private equity firms look for companies with specific characteristics: stable and predictable cash flows (to service debt), strong market position, undervalued assets, potential for operational improvement, and manageable existing debt levels. Industries like healthcare services, business services, food and beverage, and industrial manufacturing are frequent LBO targets because of their cash flow predictability.</p>

<p><strong>Financing structure.</strong> The debt in an LBO is layered in tranches, each with different risk levels, interest rates, and repayment priority. Senior secured debt (bank loans) has the lowest interest rate and highest repayment priority. Subordinated debt (mezzanine or high-yield bonds) carries higher interest rates and lower priority. The equity portion — the PE firm's investment — is the most junior claim but captures all the upside beyond debt repayment.</p>

<p><strong>Value creation levers.</strong> PE firms aim to increase the company's value through several mechanisms: operational improvements (cost reduction, revenue growth, margin expansion), strategic repositioning (entering new markets, adding products), financial engineering (optimizing the capital structure, refinancing at lower rates), and multiple expansion (improving the business quality so it commands a higher valuation when sold).</p>

<p><strong>Exit.</strong> PE firms typically hold LBO investments for 3-7 years, then exit through a sale to another buyer (trade sale or secondary buyout), an IPO (re-listing the company publicly), or a dividend recapitalization (borrowing additional money to pay a special dividend to themselves).</p>

<h2 id="debt-structure">Typical Debt Structure</h2>

<p>A typical LBO capital structure might look like this for a $1 billion acquisition:</p>
<ul>
<li><strong>Senior secured term loan:</strong> $500 million at SOFR + 300-400 basis points, secured by company assets.</li>
<li><strong>Revolving credit facility:</strong> $100 million available for working capital needs.</li>
<li><strong>High-yield bonds or second lien debt:</strong> $150 million at 8-10% fixed rate, subordinated to the senior loan.</li>
<li><strong>Equity:</strong> $250 million from the PE firm and its limited partners (25% of total).</li>
</ul>

<h2 id="risks">Risks of LBOs</h2>

<p><strong>Financial distress.</strong> The heavy debt load means the company has less margin for error. An economic downturn, industry disruption, or operational misstep that would be manageable for a conservatively financed company can push a leveraged company into default. Research shows that approximately 20% of LBOs eventually experience financial distress.</p>

<p><strong>Employee and operational impact.</strong> LBOs are often associated with cost-cutting, layoffs, and reduced investment in R&D or long-term initiatives. While this can improve near-term profitability, it may undermine long-term competitiveness. The balance between operational efficiency and long-term investment is a central tension in LBO management.</p>

<p><strong>Interest rate risk.</strong> Since much of the debt carries floating interest rates, rising rates increase the company's interest burden. PE firms sometimes hedge this risk with interest rate swaps, but hedging adds cost and complexity.</p>

<h2 id="sec-filings">LBOs in SEC Filings</h2>

<ul>
<li><strong>SC 13E-3:</strong> Filed for going-private transactions, disclosing the terms, fairness of the price, and any conflicts of interest.</li>
<li><strong>DEF 14A:</strong> Proxy statement seeking shareholder approval for the take-private merger.</li>
<li><strong>Schedule TO:</strong> Filed if the acquisition is structured as a tender offer.</li>
<li><strong>10-K and 10-Q:</strong> Post-closing, the company continues filing if it has public debt. The filings reveal the debt load, interest expense, and covenant compliance — critical information for bondholders.</li>
<li><strong>8-K:</strong> Announcement of the transaction and subsequent material developments.</li>
</ul>

<p>Brefyr tracks going-private filings (SC 13E-3), proxy statements, and 8-K announcements for all SEC-reporting companies, alerting investors when their portfolio companies become LBO targets or when LBO-related debt filings reveal financial stress.</p>
`,
};
