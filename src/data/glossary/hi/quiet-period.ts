import type { GlossaryTerm } from "../../types";

export const termQuietPeriodHi: GlossaryTerm = {
  slug: "quiet-period",
  term: "Quiet Period (क्वाइट पीरियड)",
  title: "Quiet Period — जब Companies को अपने Business के बारे में Silent रहना होता है",
  shortDefinition:
    "Quiet period time window है जिसमें company और insiders public statements restrict करते हैं जो investor decisions influence कर सकते — IPO process और earnings announcements से पहले सबसे common।",
  metaDescription:
    "Quiet period क्या है? IPO और earnings से पहले कब apply, companies क्या कह सकती/नहीं, SEC rules, और investors के लिए क्यों matter।",
  wordCount: 420,
  category: "Regulatory & Compliance",
  tags: ["quiet-period", "ipo", "earnings", "sec-regulation", "disclosure"],
  relatedSlugs: ["regulation-fd", "blackout-period", "securities-act-1933", "insider-trading"],
  relatedTerms: ["regulation-fd", "blackout-period", "securities-act-1933", "insider-trading"],
  faq: [
    { question: "Quiet period और blackout period में difference?", answer: "Quiet period restrict what company says publicly — communications limit। Blackout period restrict what insiders do with shares — trading prohibit। Often overlap: pre-earnings quiet + trading blackout। Different purposes: quiet = market protect premature/selective disclosure; blackout = insiders trading on nonpublic info prevent।" },
    { question: "Quiet period में company press release issue कर सकती?", answer: "IPO quiet: normal business communications continue, regular SEC filings। Forward-looking promotional statements या IPO discuss beyond prospectus prohibited। Pre-earnings (voluntary): current-quarter performance comment avoid, Regulation FD compliance। Routine SEC filings (10-K, 10-Q, 8-K) continue regardless।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Quiet period time window — company और representatives public communications restrict financial performance, business prospects, securities offerings। Two distinct types: SEC-mandated IPO process और voluntary (widely observed) pre-earnings। Same fundamental purpose — selective/premature material information disclosure prevent, certain investors over others advantage prevent।</p>

<p>Indian context: India SEBI regulations भी IPO period communications restrict करती हैं — "offer period" restrictions। Pre-earnings quiet periods Indian companies voluntarily observe। Same principles US market।</p>

<h2>IPO Quiet Period</h2>
<p>Most strictly enforced। Securities Act 1933 Section 5 — S-1 file करने के बाद promotional communications restrict। Prospectus = primary information source investors evaluating offering।</p>

<p><strong>Pre-filing:</strong> S-1 file से पहले avoid "conditioning the market" — media interviews, blog posts, social media promoting growth/value upcoming IPO influence।</p>

<p><strong>Waiting period:</strong> S-1 filed, SEC effective declare से पहले — oral offers, preliminary prospectus ("red herring") distribute, written selling materials beyond prospectus prohibited। IPO roadshow — institutional presentations — specific SEC rules under।</p>

<p><strong>Post-effective:</strong> IPO prices, shares trade — traditional 25-40 day quiet (industry convention, not SEC-mandated)। Company/underwriters research reports, earnings projections refrain। Rationale: underwriter analysts "buy" immediately recommend prevent before independent analysis।</p>

<h2>Pre-Earnings Quiet Period</h2>
<p>Most companies voluntarily observe — typically 2-4 weeks before quarterly earnings। Company current-quarter performance public comment, investor conferences participate, one-on-one analyst meetings refrain।</p>

<p>Not SEC-mandated, Regulation FD best practice। Risk: executive inadvertently material financial information disclose — confirming/denying expectations private conversation। Blanket quiet period = selective disclosure violation risk reduce।</p>

<p>Quiet period ends: earnings publicly announce (8-K + press release) + earnings conference call webcast all investors simultaneously।</p>

<h2>Analyst Research Impact</h2>
<p>Post-IPO quiet period: underwriting banks analysts cannot research publish/coverage initiate। Quiet period expire → multiple analysts coverage initiate simultaneously — often favorable "buy"/"overweight" (conflict: analysts firms IPO underwriting profited)। Significant trading activity and price movements।</p>

<h2>Violations</h2>
<p>"Gun-jumping" — SEC may delay/halt offering, cooling-off require, enforcement actions। Most arise careless public statements executives (interviews, social media, conferences) rather than deliberate।</p>

<h2>SEC Filings</h2>
<p><strong>S-1:</strong> Primary disclosure IPO quiet period। <strong>8-K:</strong> Earnings announcement ends pre-earnings quiet। <strong>FWP:</strong> Written communications beyond prospectus IPO process filed।</p>

<p>Brefyr earnings announcement dates 8-K track, company communications cadence monitor — quiet periods begin/end anticipate portfolio companies।</p>
`,
};
