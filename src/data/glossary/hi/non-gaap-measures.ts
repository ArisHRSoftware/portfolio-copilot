import type { GlossaryTerm } from "../../types";

export const termNonGaapMeasuresHi: GlossaryTerm = {
  slug: "non-gaap-measures",
  term: "Non-GAAP Financial Measures (नॉन-गैप मेज़र्स)",
  title: "Non-GAAP Measures — Companies Official Results के साथ Report करती हैं Adjusted Numbers",
  shortDefinition:
    "Non-GAAP financial measures ऐसी metrics हैं जो GAAP required/permitted items exclude या include करती हैं — adjusted earnings, adjusted EBITDA, free cash flow — GAAP results alongside management का view of core performance।",
  metaDescription:
    "Non-GAAP measures क्या हैं? Companies adjusted numbers क्यों report, SEC rules, common adjustments, और investors कैसे evaluate करें।",
  wordCount: 420,
  category: "Accounting & Audit",
  tags: ["non-gaap", "adjusted-earnings", "ebitda", "financial-reporting", "sec-regulation"],
  relatedSlugs: ["gaap", "adjusted-earnings", "ebitda", "pro-forma", "free-cash-flow"],
  relatedTerms: ["gaap", "adjusted-earnings", "ebitda", "pro-forma", "free-cash-flow"],
  faq: [
    { question: "क्या non-GAAP measures misleading हैं?", answer: "हो सकती हैं। SEC concern expressed — real, recurring expenses exclude। Tech companies stock-based compensation exclude — real cost (dilutes shareholders)। 'Non-recurring' restructuring charges every year = recurring expense exclude। Key: transparent (clearly disclosed), consistent (same items each period), reasonable (genuinely unusual)। Always start GAAP।" },
    { question: "SEC के non-GAAP rules क्या हैं?", answer: "Regulation G + Item 10(e) Reg S-K: (1) nearest GAAP measure accompany, (2) quantitative reconciliation each adjustment, (3) GAAP से greater prominence नहीं, (4) cash settlement charges exclude prohibited। SEC hundreds companies को comment letters issue।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Non-GAAP financial measures performance metrics हैं companies official GAAP results alongside report करती हैं। Adjusted metrics certain items exclude जो management believe करती है underlying operating performance obscure करते हैं — stock-based compensation, acquired intangibles amortization, restructuring charges, acquisition costs, impairment, litigation settlements। "Adjusted" figures intended clearer view recurring core performance — लेकिन rosier picture present भी possible GAAP support से ज़्यादा।</p>

<p>Indian context: India में भी companies "adjusted EBITDA" या "core profit" report करती हैं — SEBI regulations govern disclosure। US non-GAAP practices ज़्यादा prevalent especially tech sector — Indian investors US stocks evaluate करें तो GAAP vs non-GAAP difference critical।</p>

<h2>Common Non-GAAP Measures</h2>
<p><strong>Adjusted EBITDA:</strong> EBITDA + stock compensation, restructuring, one-time charges exclude। Tech/growth companies widely use।</p>
<p><strong>Adjusted EPS:</strong> GAAP EPS non-recurring/non-operational items adjust। Most commonly reported — analysts valuation use।</p>
<p><strong>Free cash flow (FCF):</strong> Operating cash flow - capex। GAAP define नहीं लेकिन universally used legitimate measure।</p>
<p><strong>Adjusted operating income:</strong> Acquired intangibles amortization, stock compensation, restructuring exclude — operating efficiency compare different acquisition histories।</p>

<h2>Companies Non-GAAP क्यों Use करती हैं</h2>
<p><strong>Comparability:</strong> GAAP results vary unrelated to operations — acquisition accounting, compensation structures, one-time events। Non-GAAP improve comparability।</p>
<p><strong>Management perspective:</strong> Executives manage operating metrics jo GAAP line items directly map नहीं। Same metrics investors को give।</p>
<p><strong>Analyst alignment:</strong> Wall Street analysts non-GAAP forecast/value — companies align expectations comparison।</p>

<h2>Legitimate Concerns</h2>
<p><strong>Cherry-picking:</strong> Genuinely recurring exclude — restructuring every year, acquisition costs serial acquirers, standard compensation program। Not truly "non-recurring"।</p>
<p><strong>Magnitude:</strong> Non-GAAP 50-100%+ higher than GAAP = massive adjustments, extreme scrutiny warrant।</p>
<p><strong>Asymmetric:</strong> Losses exclude लेकिन gains keep — SEC flagged potentially misleading।</p>

<h2>Evaluate कैसे करें</h2>
<p>Systematic: (1) Always start GAAP। (2) Reconciliation table examine — each adjustment understand। (3) Genuinely non-recurring (once) या effectively recurring (every year)? (4) GAAP-non-GAAP gap multiple years — widening = increasing share real expenses adjust away। (5) Peers compare — company stock compensation exclude, peers नहीं = not apples-to-apples।</p>

<h2>SEC Filings</h2>
<p><strong>8-K:</strong> Earnings releases (Item 2.02) primary vehicle, GAAP-to-non-GAAP reconciliation tables। <strong>10-K/10-Q:</strong> MD&A में sometimes, reconciliations required। <strong>S-1:</strong> IPO prospectuses, SEC review।</p>

<p>Brefyr GAAP और non-GAAP दोनों process — investors both bases evaluate, adjustments adding clarity या masking weakness assess।</p>
`,
};
