import type { GlossaryTerm } from "../../types";

export const termPoisonPillHi: GlossaryTerm = {
  slug: "poison-pill",
  term: "Poison Pill (पॉइज़न पिल)",
  title: "Poison Pill — Hostile Acquirers को Dilute करने वाला Anti-Takeover Defense",
  shortDefinition:
    "Poison pill (shareholder rights plan) anti-takeover defense mechanism है — existing shareholders additional shares steep discount पर purchase कर सकते हैं अगर कोई investor specified percentage से ज़्यादा acquire करे, hostile acquirer massively dilute।",
  metaDescription:
    "Poison pill क्या है? Shareholder rights plans कैसे काम करती हैं, types, famous examples, legal challenges, और SEC filings में कैसे identify करें।",
  wordCount: 420,
  category: "Corporate Actions",
  tags: ["poison-pill", "anti-takeover", "shareholder-rights-plan", "corporate-governance", "hostile-takeover"],
  relatedSlugs: ["staggered-board", "tender-offer", "merger", "acquisition", "voting-rights"],
  relatedTerms: ["staggered-board", "tender-offer", "merger", "acquisition", "voting-rights"],
  faq: [
    { question: "क्या poison pill कभी actually trigger हुई है?", answer: "Almost never — purpose deterrence। Massive dilution threat so severe hostile acquirers negotiate (board waive कर सकती है approved deal) या abandon। Effectiveness deterrent power में — acquirers force negotiate board से directly shareholders approach बजाय।" },
    { question: "Shareholder approval बिना adopt कर सकती है?", answer: "हाँ — board unilaterally adopt, shareholder vote बिना। Controversial: board entrench without consent। Proxy advisory firms (ISS, Glass Lewis) recommend vote against directors long-term pills without ratification। Short-duration pills (12-18 months) expire without shareholder ratification।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Poison pill — technically shareholder rights plan — publicly traded companies का सबसे common anti-takeover defense। Existing shareholders को right grant: additional shares deep discount (typically 50% below market) purchase अगर single investor/group specified ownership threshold (usually 10-20%) board approval बिना exceed करे। Discounted shares flood → hostile acquirer massively dilute → takeover prohibitively expensive। Friendly acquisitions prevent नहीं — board waive कर सकती है।</p>

<p>Indian context: India में SEBI takeover regulations govern करती हैं — open offer mandatory certain thresholds। Poison pill concept US-specific है लेकिन anti-takeover defense principles similar।</p>

<h2>कैसे काम करती है</h2>
<p><strong>Rights distribution:</strong> Board one "right" per share dividend declare — rights common stock attached, together trade। Normal circumstances dormant।</p>
<p><strong>Trigger:</strong> Person/group beneficial ownership trigger threshold exceed (10-20%) board approval बिना → rights exercisable।</p>
<p><strong>Flip-in:</strong> Triggered → all rights holders except hostile acquirer additional shares 50% below market purchase। 100M shares outstanding + half-price rights → acquirer percentage dramatically diluted।</p>
<p><strong>Flip-over:</strong> Hostile acquirer merger complete despite flip-in → target shareholders acquiring company shares 50% below market purchase — further penalize।</p>

<h2>Types</h2>
<p><strong>Traditional:</strong> Standard plan, 10-year duration। Rare now — governance concerns।</p>
<p><strong>Short-duration:</strong> 12-18 months, specific threat response। Expire without shareholder ratification — governance advocates prefer।</p>
<p><strong>NOL pill:</strong> Net operating loss tax assets protect। Section 382 IRC — 50%+ ownership change limits NOL use। Very low thresholds (4.99%)।</p>
<p><strong>Dead-hand:</strong> Only adopting directors redeem — not new hostile-elected directors। Most aggressive — courts struck down some jurisdictions।</p>

<h2>Governance Debate</h2>
<p><strong>Favor:</strong> Coercive two-tier tenders prevent, board negotiate higher price, time explore alternatives। Companies with pills higher premiums negotiated deals।</p>
<p><strong>Against:</strong> Underperforming boards/management entrench, shareholder-beneficial ownership changes prevent, adopted without approval, boards reject bids shareholders accept।</p>

<h2>Legal Framework</h2>
<p>Delaware courts upheld: business judgment rule, reasonable threat to corporate policy, proportional response (Unocal 1985)। Extreme variations struck down。</p>

<h2>SEC Filings</h2>
<p><strong>8-K/8-A:</strong> Adoption filed, rights agreement exhibit। <strong>DEF 14A:</strong> Governance section discuss, ratification proposals। <strong>10-K:</strong> Risk factors, equity description reference। <strong>SC 13D:</strong> Investors approaching threshold reference target pill।</p>

<p>Brefyr 8-K filings track — poison pill adoptions/modifications flag, anti-takeover landscape monitor।</p>
`,
};
