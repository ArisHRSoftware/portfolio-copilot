import type { GlossaryTerm } from "../types";

export const termDividendPayoutRatio: GlossaryTerm = {
  slug: "dividend-payout-ratio",
  term: "Dividend Payout Ratio",
  title: "Dividend Payout Ratio — How Much Profit a Company Returns to Shareholders",
  shortDefinition:
    "The dividend payout ratio measures the percentage of net income a company distributes to shareholders as dividends, revealing the balance between returning cash and reinvesting in growth.",
  metaDescription:
    "What is the dividend payout ratio? Learn how to calculate it, what a sustainable payout looks like, and when high payouts signal danger vs stability.",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["dividend-payout-ratio", "dividends", "income", "financial-metrics", "shareholder-returns"],
  relatedSlugs: ["eps", "fcf-yield", "net-margin", "roe"],
  relatedTerms: ["eps", "fcf-yield", "net-margin", "roe"],
  faq: [
    {
      question: "What is a sustainable dividend payout ratio?",
      answer:
        "For most companies, a payout ratio of 30-60% is considered sustainable. This leaves enough retained earnings to fund growth, handle unexpected downturns, and maintain financial flexibility. Utilities and REITs commonly pay out 60-90% because their regulated or contractual cash flows are highly predictable. A payout ratio above 100% means the company is paying more in dividends than it earns — it's either dipping into reserves or borrowing to fund the dividend, which is unsustainable long-term.",
    },
    {
      question: "Why do some profitable companies pay no dividends?",
      answer:
        "Companies in high-growth phases typically retain all earnings to fund expansion. If the company can reinvest profits at a 20% return but shareholders would only earn 8% investing the dividend elsewhere, retaining earnings creates more shareholder value. Berkshire Hathaway, Alphabet, and Amazon are examples of highly profitable companies that have historically paid no or minimal dividends because management believes reinvestment generates superior returns. The dividend policy depends on whether the company has attractive reinvestment opportunities.",
    },
    {
      question: "What happens when the payout ratio exceeds 100%?",
      answer:
        "A payout ratio above 100% means the company paid more in dividends than it earned. This can happen temporarily during a down year when management maintains the dividend despite lower earnings, drawing on cash reserves. If it persists, the company must either cut the dividend or fund it through debt, neither of which is healthy. Tracking the payout ratio trend over multiple years reveals whether a dividend is growing comfortably within earnings or straining to be maintained.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The dividend payout ratio reveals a company's capital allocation priorities. A high payout ratio says: "We believe returning cash to shareholders is the best use of our profits." A low payout ratio says: "We believe reinvesting profits in the business generates higher returns than dividends would." Neither is inherently better — the right payout ratio depends on the company's growth opportunities, cash flow stability, and industry norms.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Dividend Payout Ratio = Dividends Per Share / Earnings Per Share x 100</strong></p>

<p>Or equivalently: <strong>Payout Ratio = Total Dividends Paid / Net Income x 100</strong></p>

<p>Dividends per share and earnings per share are both reported in SEC filings. The cash flow statement shows total dividends paid. Use diluted EPS for the most conservative calculation. Some analysts prefer to use free cash flow instead of net income in the denominator, producing a cash-based payout ratio that better reflects dividend sustainability.</p>

<p>A payout ratio of 40% means the company distributes 40 cents of every dollar of earnings as dividends and retains 60 cents for reinvestment, debt reduction, or share buybacks.</p>

<h2 id="retention-rate">The Retention Rate — The Other Side</h2>

<p>The retention rate (also called plowback ratio) equals 1 minus the payout ratio. If the payout ratio is 35%, the retention rate is 65%. The retention rate matters for growth analysis because retained earnings fund future expansion. The sustainable growth rate — the maximum rate a company can grow without external financing — equals ROE multiplied by the retention rate.</p>

<p>A company with a 20% ROE and a 60% retention rate has a sustainable growth rate of 12%. If management wants to grow faster, it needs to either improve ROE, retain more earnings (reduce dividends), or raise external capital. This relationship explains why high-growth companies typically pay low or no dividends — they need the retained earnings to fund expansion.</p>

<h2 id="industry-norms">Industry Norms</h2>

<p>Payout ratios cluster by industry based on growth opportunities and cash flow characteristics. Technology companies, with abundant reinvestment opportunities and volatile earnings, typically pay out 0-25% of earnings. Consumer staples, with predictable cash flows and modest growth, pay 50-70%. Utilities, with regulated returns and highly stable earnings, pay 60-80%. REITs are required by law to distribute at least 90% of taxable income, pushing payout ratios to 70-100% or higher.</p>

<p>Within an industry, payout ratios signal management's confidence in the business. A company raising its payout ratio is telling the market: "We expect earnings to remain at this level or grow, and we don't have enough high-return reinvestment opportunities to justify retaining more." A company cutting its payout ratio might be signaling deteriorating earnings or the discovery of attractive growth investments.</p>

<h2 id="dividend-safety">Dividend Safety Analysis</h2>

<p>The payout ratio is the primary tool for assessing dividend safety. A company paying out 30% of earnings has a wide margin of safety — earnings could decline by more than half before the dividend is threatened. A company at 95% has virtually no margin — any earnings decline forces a dividend cut or external funding.</p>

<p>But the payout ratio alone is insufficient. You must also assess the volatility and cyclicality of earnings. A utility with a 70% payout ratio and earnings that never fluctuate more than 5% is safer than a cyclical manufacturer with a 50% payout ratio whose earnings can drop 40% in a recession. The effective safety depends on both the payout percentage and the earnings variability.</p>

<p>The free-cash-flow payout ratio provides a more reliable safety assessment. If a company pays $2 per share in dividends and generates $4 per share in free cash flow, the FCF payout ratio is 50% — this is sustainable as long as free cash flow holds up. If free cash flow is only $2.50, the 80% FCF payout ratio leaves little room for error.</p>

<p>Dividend coverage over multiple years reveals the trend. If the payout ratio has crept from 40% to 70% over five years because dividends grew faster than earnings, the trajectory points toward eventual unsustainability unless earnings growth accelerates.</p>

<p>On Brefyr, dividend and earnings data from SEC filings enables payout ratio analysis across thousands of public companies, alongside insider trading patterns that may signal management's confidence in sustaining dividends.</p>
`,
};
