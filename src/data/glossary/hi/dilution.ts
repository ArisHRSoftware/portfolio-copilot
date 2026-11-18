import type { GlossaryTerm } from "../../types";

export const termDilutionHi: GlossaryTerm = {
  slug: "dilution",
  term: "Dilution (डायल्यूशन)",
  title: "Dilution — नई Shares से आपकी Ownership कैसे कम होती है",
  shortDefinition:
    "Dilution तब होता है जब company new shares issue करती है — existing shareholders की ownership percentage कम हो जाती है। RSU vesting, stock offerings, और convertible debt dilution cause करते हैं।",
  metaDescription:
    "Stock dilution क्या है? जानें कैसे new share issuance से existing shareholders की ownership कम होती है — dilution track करना, EPS impact, और 10-K में dilution data कहाँ मिलता है।",
  wordCount: 450,
  category: "Trading",
  tags: ["dilution", "shares-outstanding", "eps", "stock-offering"],
  relatedSlugs: ["rsu", "pe-ratio", "free-cash-flow", "10-k-filing"],
  relatedTerms: ["rsu", "pe-ratio", "free-cash-flow", "10-k-filing"],
  faq: [
    {
      question: "Dilution track कैसे करें?",
      answer: "10-K/10-Q में 'weighted average shares outstanding' (basic और diluted) हर quarter report होती हैं। Diluted shares count quarter-over-quarter बढ़ रहा है? Red flag — company shareholder value dilute कर रही है। Buybacks से shares count कम होता है (anti-dilution)।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Dilution investing का एक critical concept है जो बहुत से retail investors miss करते हैं। जब company new shares issue करती है — RSU vesting, secondary offering, convertible notes conversion — existing shareholders की ownership percentage <strong>automatically कम हो जाती है</strong>।</p>

<h2>Dilution कैसे काम करता है</h2>

<p>Example: Company के 100 million shares outstanding हैं, आपके पास 10,000 shares = 0.01% ownership। Company 20 million new shares issue करती है → total shares 120 million → आपकी ownership 0.0083% हो गई। आपके shares की संख्या same है, लेकिन pie बड़ा हो गया।</p>

<h2>Dilution के Sources</h2>

<ul>
<li><strong>RSU/Stock options:</strong> Employee compensation से हर quarter new shares create होती हैं। Tech companies में यह biggest dilution source है।</li>
<li><strong>Secondary offerings:</strong> Company capital raise करने के लिए new shares sell करती है। Cash मिलता है लेकिन existing shareholders diluted।</li>
<li><strong>Convertible debt:</strong> Bonds जो shares में convert हो सकती हैं। Conversion पर dilution।</li>
<li><strong>Warrants:</strong> Rights to buy shares at a specific price। Exercise पर new shares create।</li>
</ul>

<h2>EPS Impact</h2>

<p>Dilution directly Earnings Per Share (EPS) को affect करता है:</p>

<p><strong>EPS = Net Income ÷ Shares Outstanding</strong></p>

<p>Shares बढ़े → same earnings spread over more shares → EPS गिरा → P/E ratio effectively बढ़ा। Company earnings बढ़ा रही है लेकिन shares भी उतनी तेज़ी से बढ़ रही हैं? Net result zero — shareholders को कोई benefit नहीं।</p>

<h2>Anti-Dilution: Share Buybacks</h2>

<p>Companies dilution counter करने के लिए share buybacks करती हैं — open market से अपने shares वापस खरीदकर retire करती हैं। Apple हर साल $80-90 billion buyback करती है — यही reason है shares outstanding steadily कम हो रहे हैं despite RSU grants।</p>

<p><strong>Net dilution check:</strong> Shares outstanding year-over-year बढ़ रहे हैं या घट रहे? घट रहे = management shareholder-friendly (buyback > dilution)। बढ़ रहे = dilution winning।</p>

<h2>10-K में Dilution Data</h2>

<p>10-K में तीन जगह dilution data मिलता है:</p>
<ol>
<li><strong>EPS section:</strong> Basic vs Diluted EPS — gap बड़ा = ज़्यादा potential dilution</li>
<li><strong>Stock compensation note:</strong> Unvested RSU/options count — future dilution pipeline</li>
<li><strong>Shares outstanding trend:</strong> Cover page पर total shares, year-over-year compare करें</li>
</ol>

<h2>भारतीय निवेशकों के लिए</h2>

<p>Indian market में भी dilution concept same है (rights issues, QIP, ESOP). US tech stocks में dilution typically higher है because of heavy RSU compensation। $100 billion SBC annually across S&P 500। Brefyr 10-K analysis dilution trends automatically track करती है।</p>
`,
};
