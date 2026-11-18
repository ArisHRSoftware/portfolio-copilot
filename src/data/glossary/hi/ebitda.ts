import type { GlossaryTerm } from "../../types";

export const termEbitdaHi: GlossaryTerm = {
  slug: "ebitda",
  term: "EBITDA (ईबीआईटीडीए)",
  title: "EBITDA — Company की Operating Performance कैसे Measure करें",
  shortDefinition:
    "EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) एक profitability metric है जो company की core operating performance बताता है, financing और accounting decisions को remove करके।",
  metaDescription:
    "EBITDA क्या है? Company की operating profitability measure करने का सबसे popular metric समझें — calculation, limitations, और भारतीय निवेशक इसे US stocks analyze करने में कैसे use करें।",
  wordCount: 600,
  category: "Financial Metrics",
  tags: ["valuation", "ebitda", "profitability", "financial-analysis"],
  relatedSlugs: ["pe-ratio", "enterprise-value", "free-cash-flow", "revenue-recognition"],
  relatedTerms: ["pe-ratio", "enterprise-value", "free-cash-flow", "revenue-recognition"],
  faq: [
    {
      question: "EBITDA और Net Income में क्या difference है?",
      answer:
        "Net income bottom line है — सब expenses, taxes, interest, depreciation काटने के बाद बचा profit। EBITDA उससे ऊपर का number है — interest, taxes, depreciation, amortization वापस add करता है। EBITDA company की operating performance isolate करता है, जबकि net income पूरी picture दिखाता है including financing और tax structure।",
    },
    {
      question: "EBITDA कब misleading हो सकता है?",
      answer:
        "EBITDA capital-intensive businesses में misleading हो सकता है। एक telecom company जो हर साल billions depreciation book करती है — EBITDA great दिख सकता है लेकिन free cash flow negative हो सकता है क्योंकि real capex spend हो रहा है। Warren Buffett EBITDA को 'misleading' कहते हैं इसी reason से।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) corporate finance और stock analysis में सबसे widely used profitability metrics में से एक है। Simple शब्दों में: EBITDA बताता है कि company अपने core operations से कितना पैसा कमा रही है, financing decisions (interest), government obligations (taxes), और accounting entries (depreciation/amortization) को side में रखकर।</p>

<h2>EBITDA कैसे Calculate करें</h2>

<p><strong>Formula:</strong> EBITDA = Net Income + Interest + Taxes + Depreciation + Amortization</p>

<p>या alternatively: <strong>EBITDA = Operating Income (EBIT) + Depreciation + Amortization</strong></p>

<p>Example: एक company का net income $50M, interest expense $10M, taxes $15M, depreciation $20M, amortization $5M है। तो EBITDA = $50M + $10M + $15M + $20M + $5M = <strong>$100M</strong>।</p>

<h2>EBITDA क्यों Use करते हैं</h2>

<p><strong>Company comparison:</strong> अलग-अलग tax jurisdictions, capital structures (debt vs equity), और asset ages वाली companies को compare करने के लिए EBITDA useful है। India की company (30% tax) और Ireland की company (12.5% tax) का net income compare करना unfair है, लेकिन EBITDA apples-to-apples comparison देता है।</p>

<p><strong>Valuation metric:</strong> EV/EBITDA multiple (Enterprise Value ÷ EBITDA) सबसे popular valuation metric है M&A transactions में। Industry average EV/EBITDA multiple company की relative valuation बताता है।</p>

<p><strong>Debt capacity:</strong> Banks और lenders EBITDA use करते हैं company की debt repayment capacity measure करने के लिए। Debt/EBITDA ratio 3x से कम generally healthy माना जाता है।</p>

<h2>EBITDA की Limitations</h2>

<p><strong>Capex ignore करता है:</strong> EBITDA depreciation add back करता है, लेकिन company को real cash spend करना पड़ता है equipment replace करने पर। Capital-intensive industries (telecom, airlines, oil & gas) में EBITDA misleading हो सकता है।</p>

<p><strong>Non-GAAP metric:</strong> EBITDA SEC-mandated metric नहीं है। Companies "Adjusted EBITDA" report करती हैं जहाँ वो stock-based compensation, restructuring charges, और दूसरे items भी remove कर देती हैं। ज़्यादा adjustments = ज़्यादा skepticism deserved।</p>

<p><strong>Warren Buffett's criticism:</strong> Buffett कहते हैं "Does management think the tooth fairy pays for capital expenditures?" EBITDA real cash costs ignore करता है।</p>

<h2>EBITDA Margin</h2>

<p><strong>Formula:</strong> EBITDA Margin = EBITDA ÷ Revenue × 100</p>

<p>EBITDA margin बताता है कि revenue का कितना percent operating profit में convert हो रहा है। Industry benchmarks:</p>
<ul>
<li><strong>Software/SaaS:</strong> 25-40% (high margins, low capex)</li>
<li><strong>Manufacturing:</strong> 10-20%</li>
<li><strong>Retail:</strong> 5-12%</li>
<li><strong>Airlines:</strong> 15-25% (but high capex makes free cash flow much lower)</li>
</ul>

<h2>भारतीय निवेशकों के लिए EBITDA</h2>

<p>Indian stock market analysis में भी EBITDA commonly use होता है (Infosys, TCS, Reliance सब EBITDA report करती हैं), तो concept familiar होगा। US stocks में EBITDA use करते समय:</p>

<ul>
<li><strong>10-K देखें:</strong> Company का "Adjusted EBITDA" reconciliation 10-K की MD&A section में मिलता है। Check करें कि कितने adjustments किए गए — ज़्यादा adjustments = ज़्यादा skepticism।</li>
<li><strong>EV/EBITDA compare करें:</strong> Same sector companies का EV/EBITDA compare करें। Tech companies (15-25x) vs Banks (8-12x) vs Energy (5-8x)।</li>
<li><strong>Free cash flow भी देखें:</strong> EBITDA strong लेकिन free cash flow weak? Red flag। Company पैसा कमा रही है लेकिन capex या working capital में खर्च हो रहा है।</li>
</ul>

<p>Brefyr पर 10-K और 10-Q filings से financial data automatically extract होती है, EBITDA trends track करना easy है।</p>
`,
};
