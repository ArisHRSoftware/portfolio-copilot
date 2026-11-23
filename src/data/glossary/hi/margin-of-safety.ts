import type { GlossaryTerm } from "../../types";

export const termMarginOfSafetyHi: GlossaryTerm = {
  slug: "margin-of-safety",
  term: "Margin of Safety (मार्जिन ऑफ़ सेफ्टी)",
  title: "Margin of Safety — Investors को Galat Hone Se Bachane Wala Risk Buffer",
  shortDefinition:
    "Margin of safety stock की intrinsic value और market price के बीच difference है — buffer provide करती है valuation errors, unforeseen events, और analytical mistakes से protection।",
  metaDescription:
    "Margin of safety क्या है? Benjamin Graham ने investment का central concept क्यों कहा, calculate कैसे करें, और buffer कितना wide होना चाहिए।",
  wordCount: 420,
  category: "Financial Metrics",
  tags: ["margin-of-safety", "value-investing", "risk-management", "valuation", "fundamental-analysis"],
  relatedSlugs: ["intrinsic-value", "dcf", "economic-moat", "pe-ratio"],
  relatedTerms: ["intrinsic-value", "dcf", "economic-moat", "pe-ratio"],
  faq: [
    { question: "Margin of safety कितनी बड़ी होनी चाहिए?", answer: "Graham ने 33-50% discount recommend किया common stocks के लिए। High-quality predictable businesses: 20-30% sufficient (reliable estimate)। Cyclical, turnaround, speculative: 40-50%+ (higher uncertainty)। Uncertainty बढ़े = ज़्यादा discount demand करें।" },
    { question: "क्या margin of safety = cheap stocks ख़रीदना?", answer: "ज़रूरी नहीं। Low PE stock declining business — no margin of safety अगर intrinsic value market price से कम। High PE stock tremendous growth — margin of safety अगर worth significantly more। Relative to intrinsic value, arbitrary benchmarks नहीं। Wonderful company fair price > mediocre company cheap price।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Benjamin Graham ने margin of safety को "central concept of investment" कहा और "The Intelligent Investor" का final chapter इसे dedicate किया। Simple principle: full price कभी pay न करें। Always significant discount पर buy estimated value से। वो gap — price और value — margin of safety है। Bad luck, analytical errors, future uncertainty — सबसे protect करती है।</p>

<p>Indian context: Parag Parikh, Mohnish Pabrai जैसे Indian value investors Graham-Buffett principles follow करते हैं। Indian stock market में भी margin of safety concept same apply — US stocks analyze करें तो SEC filings fundamental inputs provide करती हैं।</p>

<h2>Concept</h2>
<p><strong>Margin of Safety = (Intrinsic Value - Market Price) / Intrinsic Value x 100</strong></p>
<p>Intrinsic value estimate $100, stock $65 पर trades = 35% margin of safety। Wrong हो सकते हैं 35% तक और फिर भी loss नहीं। Buffer transforms investing precise prediction game से (impossible) approximate valuation game meaningful error tolerance के साथ।</p>

<h2>क्यों Matter करती है</h2>
<p>हर analysis assumptions involve: revenue growth, margins, capital requirements, competition, management quality, macro conditions। हर assumption uncertainty carry। Multiple uncertain assumptions compound — intrinsic value range wide हो जाती है।</p>

<p>Margin of safety honestly acknowledge करती है uncertainty। Precise answer pretend नहीं करती। Price demand करती है जो downside scenario में भी protect करे। $80-120 worth analysis कहती है, $60 पर buy — pessimistic end से भी margin। Unforeseeable events (recessions, pandemics, fraud) — large discount room absorb negative surprises।</p>

<h2>Application</h2>
<p>High-quality companies wide moats, predictable cash flows, strong balance sheets: 20-25% sufficient। Lower-quality, cyclical, turnaround: 40-50% demand। Uncertainty ज़्यादा = margin ज़्यादा।</p>

<p>Graham specific application: stocks below net current asset value (current assets minus all liabilities) — "net-net" stocks। Extreme margin — protection even if business fails। Modern markets में rare, principle timeless।</p>

<h2>Common Mistakes</h2>
<p>सबसे frequent: intrinsic value estimates inflate करना current price justify करने — optimistic assumptions margin eliminate। 25% decade growth assume करना cheap दिखाने = purpose defeated। Discipline to wait separates successful from unsuccessful।</p>

<p>दूसरी mistake: same margin requirement all investments। 50% discount blue-chip = rarely invest, miss opportunities। 10% margin speculative biotech = dangerously exposed।</p>

<p>Brefyr पर SEC filings financial data — intrinsic value estimate और margin of safety assess thousands of companies alongside insider trading signals।</p>
`,
};
