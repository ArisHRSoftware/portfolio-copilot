import type { GlossaryTerm } from "../types";

export const termPriceToBook: GlossaryTerm = {
  slug: "price-to-book",
  term: "Price-to-Book Ratio",
  title: "Price-to-Book Ratio (P/B) — What Investors Pay for a Dollar of Net Assets",
  shortDefinition:
    "The price-to-book ratio compares a company's market value to its book value (net assets), showing how much premium or discount investors assign to the company's balance sheet equity.",
  metaDescription:
    "What is the price-to-book ratio? Learn how to calculate P/B, when it works best, why banks use it, and when book value is misleading.",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["price-to-book", "valuation", "book-value", "financial-metrics", "balance-sheet"],
  relatedSlugs: ["pe-ratio", "price-to-sales", "roe", "intrinsic-value"],
  relatedTerms: ["pe-ratio", "price-to-sales", "roe", "intrinsic-value"],
  faq: [
    {
      question: "What does a price-to-book ratio below 1.0 mean?",
      answer:
        "A P/B below 1.0 means the market values the company at less than its accounting net worth — investors can theoretically buy the company's assets for less than they're worth on paper. This can signal a genuine bargain, or it can mean the market believes the assets are overvalued on the books (carrying value exceeds liquidation value), the company is destroying value, or earnings prospects are poor. Banks trading below book value usually signals that investors expect credit losses to erode the asset base.",
    },
    {
      question: "Why is P/B the preferred metric for valuing banks?",
      answer:
        "Banks' primary assets are loans and financial instruments that are carried close to fair value on the balance sheet, making book value a reasonable approximation of economic value. Banks also earn returns on their equity capital that are constrained by regulatory requirements. A bank trading at 1.5x book with a 15% ROE is priced for its ability to generate returns above the cost of equity. P/E works for banks too, but P/B captures the asset-based nature of their business more intuitively.",
    },
    {
      question: "Why is P/B misleading for technology companies?",
      answer:
        "Technology companies' most valuable assets — software code, algorithms, brand, user base, network effects, and human capital — are mostly invisible on the balance sheet. Accounting rules do not recognize internally developed intangibles at fair value. A software company might have $1 billion in economic value from its platform but only $100 million in book value, producing a P/B of 10 that tells you nothing useful. For tech companies, revenue-based and earnings-based metrics are far more informative.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The price-to-book ratio is one of the oldest valuation tools in investing. Benjamin Graham, the father of value investing, used book value extensively in his analysis during the 1930s-1950s, when most publicly traded companies were asset-heavy businesses — railroads, steel mills, utilities — where the balance sheet was a reasonable representation of economic value. Today, P/B remains essential for certain sectors but has lost relevance for the intangible-heavy companies that dominate modern stock markets.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>P/B Ratio = Market Price Per Share / Book Value Per Share</strong></p>

<p>Or equivalently: <strong>P/B = Market Capitalization / Total Shareholders' Equity</strong></p>

<p>Book value per share equals total shareholders' equity divided by shares outstanding. Shareholders' equity comes from the balance sheet and represents total assets minus total liabilities — the net worth of the company according to accounting rules. Some analysts use tangible book value, which further subtracts goodwill and other intangible assets, providing a more conservative floor valuation.</p>

<p>A P/B of 2.0 means investors pay $2 for every $1 of book value. A P/B of 0.7 means the market discounts the company's net assets by 30%.</p>

<h2 id="when-pb-works">When P/B Works</h2>

<p>P/B is most informative for industries where the balance sheet reflects economic reality. Financial institutions — banks, insurance companies, asset managers — carry portfolios of financial assets marked to market or carried near fair value. Book value approximates what the company's assets are actually worth, making P/B a meaningful valuation anchor.</p>

<p>Real estate companies (REITs) and holding companies also benefit from P/B analysis because their primary assets are tangible properties or financial investments with observable market values. Industrial conglomerates and infrastructure companies with large property, plant, and equipment balances are also reasonable P/B candidates, though depreciation schedules can distort the relationship between book value and replacement cost.</p>

<p>The P/B-ROE relationship provides additional insight. A company trading at 2x book value with a 20% ROE is reasonably priced — the premium reflects the company's ability to generate returns well above its cost of equity. A company at 2x book with only an 8% ROE is expensive — investors are paying a premium that the company's profitability doesn't justify. The fair P/B multiple is directly related to ROE: higher returns on equity justify higher premiums to book value.</p>

<h2 id="when-pb-fails">When P/B Fails</h2>

<p>For the majority of modern companies, book value is a poor approximation of economic value because accounting rules systematically understate the value of intangible assets. Research and development spending is expensed immediately rather than capitalized, even though it creates long-lived assets (drugs, software, patents). Brand value from decades of marketing investment doesn't appear on the balance sheet. Customer relationships, proprietary data, and network effects have enormous economic value but zero book value.</p>

<p>The result is that asset-light companies with strong competitive advantages routinely trade at P/B ratios of 10-50x. Microsoft, with its vast software ecosystem, trades at a P/B that reflects its intangible dominance, not its physical assets. Using P/B to value such companies is like using the weight of a smartphone to assess its value — the physical materials are almost irrelevant compared to the technology embedded within.</p>

<h2 id="tangible-book-value">Tangible Book Value</h2>

<p>Tangible book value strips out goodwill and intangible assets from the equity calculation. This matters enormously for companies that have grown through acquisitions, as the purchase price premium is recorded as goodwill — an intangible asset that may or may not reflect real economic value. If an acquisition destroys value, goodwill sits on the balance sheet making the company look more asset-rich than it truly is until an impairment charge is taken.</p>

<p>Price-to-tangible-book-value (P/TBV) is especially useful for evaluating acquisition-heavy companies and for assessing downside risk. If a company's tangible book value is $20 per share and the stock trades at $22, there is relatively little downside to tangible assets. If tangible book is $5 and the stock is at $50, the balance sheet provides almost no downside protection — the valuation depends entirely on future earnings.</p>

<p>On Brefyr, balance sheet data from SEC filings lets you assess book values and price-to-book ratios across thousands of public companies alongside insider trading activity and AI-generated filing analysis.</p>
`,
};
