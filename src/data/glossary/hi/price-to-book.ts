import type { GlossaryTerm } from "../../types";

export const termPriceToBookHi: GlossaryTerm = {
  slug: "price-to-book",
  term: "Price-to-Book Ratio (प्राइस-टू-बुक रेशियो)",
  title: "Price-to-Book Ratio (P/B) — Net Assets के एक Dollar के लिए Investors कितना Pay करते हैं",
  shortDefinition:
    "Price-to-book ratio company market value को book value (net assets) से compare करती है — investors balance sheet equity को कितना premium या discount assign करते हैं।",
  metaDescription:
    "P/B ratio क्या है? Calculate कैसे करें, कब best काम करती है, banks क्यों use करते हैं, और कब book value misleading।",
  wordCount: 410,
  category: "Financial Metrics",
  tags: ["price-to-book", "valuation", "book-value", "financial-metrics", "balance-sheet"],
  relatedSlugs: ["pe-ratio", "price-to-sales", "roe", "intrinsic-value"],
  relatedTerms: ["pe-ratio", "price-to-sales", "roe", "intrinsic-value"],
  faq: [
    { question: "P/B 1.0 से नीचे का मतलब?", answer: "Market company value accounting net worth से कम — theoretically assets कम पैसे में buy। Genuine bargain, या assets overvalued on books, value destroying, poor earnings prospects। Banks below book usually credit losses expected erode asset base।" },
    { question: "Banks valuation के लिए P/B preferred क्यों?", answer: "Banks primary assets loans/financial instruments — close to fair value balance sheet। Book value reasonable approximation economic value। Banks earn returns regulatory-constrained equity capital। P/B captures asset-based nature intuitively। P/B-ROE relationship: 1.5x book + 15% ROE = priced for above-cost-of-equity returns।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Price-to-book ratio investing की oldest valuation tools में — Benjamin Graham 1930s-50s extensively use। Asset-heavy businesses (railroads, steel, utilities) balance sheet reasonable economic value representation। Today P/B certain sectors essential लेकिन intangible-heavy modern companies lost relevance।</p>

<p>Indian context: India banking sector P/B ratio primary valuation metric — HDFC Bank, Kotak Mahindra, SBI। Same applies US banks (JPMorgan, Goldman)। Indian investors banking-familiar P/B concept directly transfer।</p>

<h2>Calculation</h2>
<p><strong>P/B = Market Price Per Share / Book Value Per Share</strong></p>
<p>या: <strong>P/B = Market Cap / Total Shareholders' Equity</strong></p>
<p>Book value = total assets - total liabilities (balance sheet)। Tangible book value further subtracts goodwill + intangibles — more conservative floor। P/B 2.0 = $2 pay $1 book value। P/B 0.7 = 30% discount।</p>

<h2>कब P/B काम करती है</h2>
<p>Balance sheet economic reality reflect industries: <strong>Financial institutions</strong> — banks, insurance, asset managers — portfolios marked to market/near fair value। Book value ≈ actual worth।</p>
<p><strong>Real estate (REITs):</strong> Tangible properties observable market values। <strong>Holding companies, industrials, infrastructure:</strong> Large PP&E — depreciation distort possible।</p>
<p>P/B-ROE relationship: 2x book + 20% ROE = reasonably priced, premium justified। 2x book + 8% ROE = expensive, profitability doesn't justify premium। Fair P/B directly relates ROE।</p>

<h2>कब P/B Fail करती है</h2>
<p>Modern companies: accounting systematically understate intangible assets value। R&D expensed (not capitalized), brand value absent, customer relationships zero book value। Asset-light + strong competitive advantages = P/B 10-50x routinely। Microsoft P/B = intangible dominance, not physical assets। Smartphone weight assess value = irrelevant।</p>

<h2>Tangible Book Value</h2>
<p>Goodwill + intangibles strip equity calculation। Acquisition-heavy companies especially useful — purchase premium goodwill sits balance sheet, may/may not reflect real value until impairment। Downside risk assess: tangible book $20, stock $22 = limited downside tangible assets। Tangible book $5, stock $50 = no balance sheet protection, valuation entirely future earnings depend।</p>

<p>Brefyr balance sheet data SEC filings — book values, P/B ratios assess thousands companies, insider trading, AI-generated filing analysis alongside।</p>
`,
};
