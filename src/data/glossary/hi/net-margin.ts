import type { GlossaryTerm } from "../../types";

export const termNetMarginHi: GlossaryTerm = {
  slug: "net-margin",
  term: "Net Profit Margin (नेट प्रॉफ़िट मार्जिन)",
  title: "Net Profit Margin — Profitability की Bottom Line",
  shortDefinition:
    "Net profit margin revenue का वो percentage है जो सभी expenses — COGS, operating expenses, interest, taxes — deduct करने के बाद बचता है, company की true bottom-line profitability represent करता है।",
  metaDescription:
    "Net profit margin क्या है? Calculate कैसे करें, net vs gross vs operating margins compare, और bottom-line profitability कौन सी चीज़ें drive करती हैं।",
  wordCount: 420,
  category: "Financial Metrics",
  tags: ["net-margin", "profitability", "income-statement", "financial-metrics", "bottom-line"],
  relatedSlugs: ["gross-margin", "operating-margin", "eps", "roe"],
  relatedTerms: ["gross-margin", "operating-margin", "eps", "roe"],
  faq: [
    { question: "अच्छी net profit margin कितनी होती है?", answer: "Industry vary: Software/tech 20-35%, financial services 15-30%, healthcare 10-20%, retail/food 2-8%। Industry average matter करता है — 5% grocery excellent, software mediocre। S&P 500 historical average ~8-10%।" },
    { question: "Net margin operating margin से lower क्यों?", answer: "Net margin में दो additional expense categories: interest expense (debt cost) और income taxes। 20% operating margin → ~13% net margin after 4% interest + 3% taxes। Little debt + favorable tax = small gap। Heavy leverage + high tax = substantial gap।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Net profit margin company profitability का ultimate measure — सब capture करती है: products बनाने, operations run करने, debt interest, taxes — और बताती है revenue का कितना percent actually profit बनता shareholders के लिए। 15% net margin = हर expense pay करने के बाद 15 cents retained हर revenue dollar से। Reinvest, dividends, या share buybacks।</p>

<p>Indian context: Indian companies Ind AS reports में same margin metrics use — Reliance, HUL, HDFC Bank। US stocks analyze करें तो net margin comparison cross-border important — tax structures और capital structures different।</p>

<h2>Calculation</h2>
<p><strong>Net Profit Margin = Net Income / Revenue x 100</strong></p>
<p>Net income = bottom line income statement। Revenue = top line। 10-K/10-Q filings में। कुछ analysts net income attributable to common shareholders prefer — preferred dividends और minority interests exclude।</p>

<h2>Margin Waterfall</h2>
<p>Revenue (100%) → minus COGS = Gross Profit (gross margin) → minus operating expenses = Operating Income (operating margin) → minus interest + other income = Pre-tax Income → minus taxes = Net Income (net margin)।</p>

<p>Gross margin = production efficiency। Operating margin = business management। Net margin adds financial structure + tax strategy। Healthy gross/operating margins but weak net = too much debt (high interest) या unfavorable tax।</p>

<h2>Leverage Effect</h2>
<p>Net margin सबसे leverage-sensitive। Identical companies $100M revenue, $20M operating income (20% operating margin)। Company A: no debt, $4M taxes → 16% net margin। Company B: $50M debt @ 8%, $4M interest + $3.2M taxes → 12.8% net margin। Same business, 3+ percentage points difference purely capital structure।</p>

<p>Operating margin preferred comparing different leverage। Net margin better absolute profitability available to equity shareholders।</p>

<h2>Quality of Earnings</h2>
<p>सभी net income equal नहीं। Sustainable: core operations recurring revenue, controlled costs, efficient tax। Low-quality: one-time gains (building sell, lawsuit win, tax law change) temporarily inflate। Unusual items check: asset sale gains, lawsuit settlements, insurance recoveries inflate; restructuring, write-downs, legal settlements depress temporarily। Adjust → sustainable run-rate net margin for valuation।</p>

<h2>Trend Analysis</h2>
<p>5-10 year net margin trends long-term earnings trajectory reveal। 8% → 12% → 15% decade = scale advantages, operational efficiency, pricing power strengthening। Declining = competitive erosion, cost inflation, margin-dilutive growth।</p>

<p>Competitors compare: Company A rising 12% → 18%, Company B falling 15% → 10% — Company A likely taking market share या operating efficiently।</p>

<p>Brefyr पर income statement data SEC filings — profitability margins track thousands of companies, insider trading data, AI-generated filing analysis alongside।</p>
`,
};
