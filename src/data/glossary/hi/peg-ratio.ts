import type { GlossaryTerm } from "../../types";

export const termPEGRatioHi: GlossaryTerm = {
  slug: "peg-ratio",
  term: "PEG Ratio (पीईजी रेशियो)",
  title: "PEG Ratio — P/E Ratio को Growth के लिए Adjust करना",
  shortDefinition:
    "PEG ratio P/E ratio को expected earnings growth rate से divide करती है — valuation normalize करती है growth के लिए ताकि different speeds grow करने वाली companies compare हो सकें।",
  metaDescription:
    "PEG ratio क्या है? Calculate कैसे करें, Peter Lynch rule of thumb, और growth stock valuation में कब best काम करती है।",
  wordCount: 410,
  category: "Financial Metrics",
  tags: ["peg-ratio", "valuation", "growth", "financial-metrics", "pe-ratio"],
  relatedSlugs: ["pe-ratio", "eps", "price-to-sales", "fcf-yield"],
  relatedTerms: ["pe-ratio", "eps", "price-to-sales", "fcf-yield"],
  faq: [
    { question: "अच्छा PEG ratio कितना?", answer: "Peter Lynch rule: PEG 1.0 = fair value (PE = growth rate)। Below 1.0 potentially undervalued, above 2.0 overvalued। Best works 10-30% growth। Very high-growth (50%+) PEG < 1.0 rare — market doubts sustainability। Slow-growth (<10%) PEG misleadingly favorable।" },
    { question: "PEG में कौन सी growth rate use करें?", answer: "Consensus analyst 3-5 year annual EPS growth estimate। Single-year too noisy, overly long too uncertain। Past 5 years actual growth sanity check। Analyst estimates frequently wrong especially small-caps limited coverage।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>PEG ratio PE ratio की सबसे बड़ी shortcoming solve करती है: growth adjust नहीं करती। 30x earnings expensive लगता PE पर, लेकिन 30% growth = reasonable price। PEG explicit adjustment — PE divide by growth rate — expensive slow-growers penalize, proportionally priced fast-growers reward।</p>

<p>Indian context: Indian market में भी PEG ratio use होती है — Nifty stocks evaluate करने। US stocks cross-border analysis same metric apply — SEC filings earnings growth data provide।</p>

<h2>Calculation</h2>
<p><strong>PEG Ratio = P/E Ratio / Annual EPS Growth Rate (%)</strong></p>
<p>PE trailing या forward EPS use। Growth rate 3-5 year expected annual EPS growth percentage। PE 25, expected growth 20% = PEG 1.25।</p>
<p>Growth rate input critical — most important और most uncertain। PE 30: PEG 1.0 at 30% growth, 1.5 at 20%, 3.0 at 10%। Stock same — growth assumption change।</p>

<h2>Peter Lynch Framework</h2>
<p>Lynch "One Up on Wall Street" — fairly valued: PE = growth rate (PEG 1.0)। 15% growth = ~15x earnings। 25% growth = ~25x। PEG < 1.0 potential bargain। PEG > 2.0 too much growth priced in। 1.0-2.0 further analysis needed — quality, competition, sustainability।</p>

<p>Limitations: PE-growth relationship not perfectly linear। 5% growth ≠ 5x earnings (earnings yield 20% — no cash flow model suggest)। 50% growth ≠ PE 50 (high rates rarely persist)।</p>

<h2>Growth-Adjusted Screening</h2>
<p>PEG greatest practical value screening tool। Multiple growth stocks compare — raw PE misleading, PEG normalize growth-adjusted basis।</p>
<p>Three stocks: A PE 15 growing 10% (PEG 1.5), B PE 30 growing 25% (PEG 1.2), C PE 45 growing 40% (PEG 1.125)। Cheapest PE (A) most expensive PEG। Most expensive PE (C) cheapest PEG। Reversal frequent growth investing — PE alone inadequate।</p>

<h2>Limitations</h2>
<p>Biggest: growth rate estimate wildly inaccurate possible। 3-5 year analyst estimates frequently wrong significantly। "Cheap" PEG → expensive overnight growth disappoint। PEG ignores balance sheet — PEG 0.8 no debt vs PEG 0.8 5x leverage — different safety। Pair PEG + balance sheet metrics।</p>

<p>PEGY refinement: P/E / (Growth + Dividend Yield) — credit companies cash return while growing। Mature 8% growth + 3% dividend = P/E/11 better than PEG P/E/8।</p>

<p>Brefyr earnings growth data SEC filings — PEG ratios calculate across thousands, insider trading, AI-driven analysis context।</p>
`,
};
