import type { GlossaryTerm } from "../../types";

export const termOperatingMarginHi: GlossaryTerm = {
  slug: "operating-margin",
  term: "Operating Margin (ऑपरेटिंग मार्जिन)",
  title: "Operating Margin — Core Operations से Company कितना Profit Earn करती है",
  shortDefinition:
    "Operating margin revenue का percentage measure करती है जो COGS और operating expenses दोनों निकालने के बाद बचता है — core business profitability interest और taxes से पहले reveal।",
  metaDescription:
    "Operating margin क्या है? Calculate कैसे करें, gross margin से better comparison क्यों, और operating leverage क्या drive करता है।",
  wordCount: 420,
  category: "Financial Metrics",
  tags: ["operating-margin", "profitability", "income-statement", "financial-metrics", "operating-leverage"],
  relatedSlugs: ["gross-margin", "net-margin", "eps", "roic"],
  relatedTerms: ["gross-margin", "net-margin", "eps", "roic"],
  faq: [
    { question: "अच्छा operating margin कितना?", answer: "Industry depend: Software 25-40%, healthcare 15-30%, retail/restaurants 5-15%, grocery/airlines 2-5%। Key consistency: stable/improving margins through economic cycles = real operational discipline। Direct competitors compare, cross-industry नहीं।" },
    { question: "Operating leverage क्या है?", answer: "Operating income revenue changes से कितनी sensitive। High fixed costs + low variable = high leverage — small revenue increase → large operating income increase। Software extreme: development costs paid, incremental customer almost entirely operating profit। Manufacturing moderate; services low leverage।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Operating margin core business evaluation का सबसे important profitability metric। Gross margin सिर्फ़ production efficiency, net margin includes items beyond management control (interest, tax)। Operating margin full cost capture — production, sales, marketing, R&D, admin — financing और tax exclude। Revenue dollar survive all operating costs कितना percent।</p>

<p>Indian context: Indian companies operating profit margin quarterly results announce करती हैं — investors closely track। US stocks comparison: different tax rates cross-border, so operating margin better metric than net margin for comparison।</p>

<h2>Calculation</h2>
<p><strong>Operating Margin = Operating Income / Revenue x 100</strong></p>
<p>Operating income = revenue - COGS - operating expenses (SG&A, R&D, D&A)। Interest, non-operating income/expense, taxes explicitly exclude। 20% = 20 cents retained production, selling, running costs — before lenders/government।</p>

<h2>Operating Leverage</h2>
<p>High fixed costs relative variable = high operating leverage। Small revenue changes → outsized operating profit changes।</p>
<p>Software company: $100M revenue, $30M COGS, $50M fixed operating. Op income $20M (20%). Revenue 10% grow $110M, COGS $33M proportional, fixed $50M stay. Op income $27M — 35% increase from 10% revenue. Margin 20% → 24.5%।</p>
<p>Reverse: 10% decline → op income $20M → $13M (35% drop)। Amplifies gains AND losses।</p>

<h2>Margin Decomposition</h2>
<p>Gross margin - operating margin = operating expense ratio। 70% gross, 15% operating = 55% revenue operating expenses। Young tech companies heavy R&D/sales investing। Mature → spending moderate → operating margins expand — "margin expansion story" growth stock valuations drive।</p>

<p>Individual lines track: R&D % revenue declining + revenue growing = more innovation per dollar. SG&A rising faster revenue = sales efficiency deteriorating।</p>

<h2>Cross-Company Comparison</h2>
<p>Operating margin superior to net margin companies compare — strips capital structure और tax jurisdiction differences। Identical operations companies = identical operating margins even if one debt-free, other leveraged। International comparison: different tax rates distort net margins, operating margins same underlying business reflect।</p>

<h2>Warning Signs</h2>
<p>Declining trend strongest negative signal. Revenue grow + margins compress = costs rising faster sales. Loss pricing power, competition, bloat, lower-quality revenue। "Adjusted operating margin" persistent one-time charges exclude = ongoing structural problems management dressing up।</p>

<p>Brefyr income statement data SEC filings — operating margins track, peer comparisons, insider trading, filing history alongside।</p>
`,
};
