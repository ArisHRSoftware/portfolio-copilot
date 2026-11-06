import type { GlossaryTerm } from "../types";

export const termEbitda: GlossaryTerm = {
  slug: "ebitda",
  term: "EBITDA",
  title: "EBITDA — What It Measures, How to Calculate It, and Why Investors Use It",
  shortDefinition:
    "EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization — a measure of a company's operating profitability before non-cash charges and capital structure decisions.",
  metaDescription:
    "What is EBITDA? How to calculate it from SEC filings, when it's useful vs misleading, the difference between GAAP and adjusted EBITDA, and why Wall Street loves it.",
  wordCount: 2500,
  category: "Financial Metrics",
  tags: ["ebitda", "financial-metrics", "profitability", "valuation"],
  relatedSlugs: ["free-cash-flow", "operating-income", "market-capitalization", "enterprise-value"],
  relatedTerms: ["free-cash-flow", "operating-income", "market-capitalization", "enterprise-value"],
  faq: [
    {
      question: "How do you calculate EBITDA?",
      answer:
        "Start with net income from the income statement. Add back interest expense, income tax expense, depreciation, and amortization. Alternatively, start with operating income (EBIT) and add back only depreciation and amortization. Both methods produce the same result. The numbers come from the income statement and cash flow statement in the 10-K or 10-Q.",
    },
    {
      question: "Why do companies report 'adjusted EBITDA' instead of regular EBITDA?",
      answer:
        "Adjusted EBITDA excludes additional items that management considers non-recurring or non-operational — restructuring charges, stock-based compensation, litigation settlements, acquisition costs, and more. The problem is that some companies adjust out expenses that recur every single year, making their 'adjusted' profitability look better than reality. Always check what's being adjusted out by reading the reconciliation table in the earnings release or 10-K.",
    },
    {
      question: "Is EBITDA the same as cash flow?",
      answer:
        "No. EBITDA is an approximation of operating cash generation, but it ignores capital expenditures (the cash spent maintaining or expanding the business), changes in working capital, and cash taxes. A company can have positive EBITDA and negative free cash flow if it's spending heavily on equipment or if customers are slow to pay. Free cash flow is a more complete measure of actual cash generation.",
    },
    {
      question: "When is EBITDA misleading?",
      answer:
        "EBITDA is most misleading for capital-intensive businesses (airlines, telecom, manufacturing) where depreciation represents real economic costs of replacing equipment. It's also misleading when companies abuse 'adjusted EBITDA' by stripping out stock-based compensation, which is a real cost to shareholders through dilution. Warren Buffett has famously criticized EBITDA, asking: 'Does management think the tooth fairy pays for capital expenditures?'",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>EBITDA has become Wall Street's favorite profitability metric — and its most abused one. The acronym stands for Earnings Before Interest, Taxes, Depreciation, and Amortization. It strips away financing decisions (interest), tax jurisdictions (taxes), and non-cash accounting charges (depreciation and amortization) to isolate how much money the core business operations generate.</p>

<p>That isolation is both the strength and the weakness of EBITDA. It lets you compare companies with different capital structures and tax situations on an apples-to-apples basis. It also lets companies present a rosier picture of profitability by ignoring real economic costs.</p>

<h2 id="the-calculation">The Calculation</h2>

<p>There are two ways to calculate EBITDA from a company's SEC filings. Both produce the same number.</p>

<h3>Bottom-Up (from Net Income)</h3>
<p>Start at the bottom of the income statement:</p>
<p><strong>EBITDA = Net Income + Interest Expense + Income Tax Expense + Depreciation + Amortization</strong></p>

<p>Net income, interest, and taxes come from the income statement. Depreciation and amortization come from the cash flow statement (they're added back in the operating activities section because they're non-cash charges).</p>

<h3>Top-Down (from Operating Income)</h3>
<p>Start with operating income (also called EBIT — Earnings Before Interest and Taxes):</p>
<p><strong>EBITDA = Operating Income + Depreciation + Amortization</strong></p>

<p>This method is cleaner because operating income already excludes interest and taxes. You only need to add back the non-cash charges.</p>

<h3>Worked Example</h3>

<p>Suppose a company's 10-K shows:</p>
<ul>
<li>Revenue: $500 million</li>
<li>Cost of goods sold: $300 million</li>
<li>Operating expenses: $120 million (includes $30M depreciation and $10M amortization)</li>
<li>Operating income: $80 million</li>
<li>Interest expense: $15 million</li>
<li>Income tax: $16 million</li>
<li>Net income: $49 million</li>
</ul>

<p><strong>Bottom-up:</strong> $49M + $15M + $16M + $30M + $10M = <strong>$120M EBITDA</strong></p>
<p><strong>Top-down:</strong> $80M + $30M + $10M = <strong>$120M EBITDA</strong></p>

<p>The EBITDA margin (EBITDA / revenue) is $120M / $500M = 24%. This tells you that for every dollar of revenue, the company retains 24 cents before financing, taxes, and non-cash charges.</p>

<h2 id="why-investors-use-it">Why Investors Use EBITDA</h2>

<h3>Comparing Companies with Different Capital Structures</h3>

<p>Company A has no debt. Company B has $500 million in debt at 6% interest ($30 million annual interest expense). Their operating businesses are identical, but Company B's net income is $30 million lower simply because of how it chose to finance itself. EBITDA lets you see through the financing difference to the underlying business performance.</p>

<p>This is why private equity firms and acquirers think in EBITDA terms. The EV/EBITDA ratio (Enterprise Value divided by EBITDA) is the standard acquisition valuation metric. It answers: "How many years of pre-interest, pre-tax operating earnings am I paying for this entire business?"</p>

<h3>Comparing Companies Across Tax Jurisdictions</h3>

<p>A company headquartered in Ireland pays a 12.5% corporate tax rate. A company headquartered in the U.S. pays 21%. Their after-tax profits differ for reasons that have nothing to do with operational quality. EBITDA neutralizes tax rate differences.</p>

<h3>Removing Non-Cash Distortions</h3>

<p>Depreciation and amortization are accounting estimates, not cash outflows. Two identical factories, one purchased in 2015 and one in 2023, will have different depreciation schedules even if they produce the same output. An acquisition-heavy company carries large amortization charges from purchase accounting that don't reflect ongoing operational costs. EBITDA strips these timing and estimation differences away.</p>

<h2 id="when-misleading">When EBITDA Is Misleading</h2>

<h3>Capital-Intensive Businesses</h3>

<p>For airlines, telecom companies, and manufacturers, depreciation is not a theoretical accounting charge — it represents the real cost of wearing out planes, towers, and machines that must eventually be replaced. Ignoring depreciation for these companies significantly overstates their economic profitability. A company with $100M EBITDA that spends $80M per year on replacement equipment is really generating $20M in surplus cash, not $100M.</p>

<h3>The "Adjusted EBITDA" Problem</h3>

<p>Public companies increasingly report "adjusted EBITDA" that excludes items beyond the standard four (interest, taxes, depreciation, amortization). Common adjustments include:</p>

<ul>
<li><strong>Stock-based compensation.</strong> The most controversial exclusion. SBC is a real cost — it dilutes shareholders — but many tech companies strip it out because including it would make their profitability look much worse. In 2024, some software companies excluded SBC equal to 20-30% of revenue from their adjusted EBITDA.</li>
<li><strong>Restructuring charges.</strong> Layoff costs, facility closures, and reorganization expenses. These are legitimate one-time costs — except when they recur every year, which is common.</li>
<li><strong>Acquisition-related costs.</strong> Integration expenses, transaction fees, and purchase accounting adjustments. Reasonable for a one-time acquisition. Less reasonable for a company that makes acquisitions every year.</li>
<li><strong>Litigation settlements.</strong> A one-time settlement is genuinely non-recurring. A company that settles lawsuits every year has a structural legal cost that shouldn't be excluded.</li>
</ul>

<p>The test: look at the reconciliation table that bridges GAAP net income to adjusted EBITDA (SEC rules require this disclosure). Add up the adjustments over the past three years. If the same types of adjustments appear every year, they're not non-recurring — they're the cost of doing business.</p>

<h3>Buffett's Critique</h3>

<p>Warren Buffett has repeatedly challenged the use of EBITDA as a profitability measure. In his 2000 Berkshire Hathaway shareholder letter, he wrote: "References to EBITDA make us shudder — does management think the tooth fairy pays for capital expenditures?" His point: depreciation represents real economic costs that must be funded through capital expenditures. Ignoring both creates a misleading picture of a company's economics.</p>

<p>Charlie Munger was more direct: "I think that every time you see the word EBITDA, you should substitute the words 'bull**** earnings.'"</p>

<h2 id="ebitda-vs-alternatives">EBITDA vs Alternative Metrics</h2>

<table>
<thead><tr><th>Metric</th><th>What It Measures</th><th>Advantages</th><th>Limitations</th></tr></thead>
<tbody>
<tr><td><strong>EBITDA</strong></td><td>Operating profit before D&A</td><td>Comparable across companies</td><td>Ignores capex, working capital, SBC</td></tr>
<tr><td><strong>Operating Income (EBIT)</strong></td><td>Profit including D&A</td><td>Includes depreciation as a cost</td><td>Still ignores tax and interest</td></tr>
<tr><td><strong>Free Cash Flow</strong></td><td>Cash generated after capex</td><td>Measures actual cash available</td><td>Volatile quarter to quarter</td></tr>
<tr><td><strong>Net Income</strong></td><td>Bottom-line profit</td><td>All costs included</td><td>Distorted by one-time items, tax changes</td></tr>
<tr><td><strong>Owner Earnings</strong></td><td>Buffett's preferred metric</td><td>Net income + D&A - maintenance capex</td><td>Requires estimating maintenance capex</td></tr>
</tbody>
</table>

<p>No single metric tells the whole story. Sophisticated investors use EBITDA for comparability but verify with free cash flow for actual cash generation. The best analysis uses both, reconciled from the SEC filing data.</p>

<h2 id="finding-in-filings">Finding EBITDA in SEC Filings</h2>

<p>EBITDA is not a GAAP metric, so companies are not required to report it in their financial statements. However, most companies disclose EBITDA (and adjusted EBITDA) in:</p>

<ul>
<li><strong>The earnings press release</strong> (8-K, Item 2.02) — usually in a reconciliation table</li>
<li><strong>The MD&A section</strong> of the 10-K or 10-Q — when management discusses non-GAAP measures</li>
<li><strong>The segment reporting notes</strong> — some companies report segment-level EBITDA</li>
</ul>

<p>If the company doesn't disclose EBITDA, you can calculate it yourself from the income statement and cash flow statement. On Brefyr, company pages display key financial metrics extracted from SEC filings, making it easier to compare EBITDA and other measures across the 7,600+ tracked companies.</p>
`,
};
