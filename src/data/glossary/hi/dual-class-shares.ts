import type { GlossaryTerm } from "../../types";

export const termDualClassSharesHi: GlossaryTerm = {
  slug: "dual-class-shares",
  term: "Dual Class Share Structure (दोहरी श्रेणी शेयर संरचना)",
  title: "Dual Class Shares — जब Founders Supervoting Stock से Control रखते हैं",
  shortDefinition: "Dual class share structure दो या ज़्यादा classes stock create करती है different voting rights — founders/insiders को supervoting shares (10+ votes per share) while public investors को एक vote per share।",
  metaDescription: "Dual class shares क्या हैं? Supervoting structures कैसे work करती हैं, tech founders क्यों use करते हैं, governance debate, और SEC filings में share class details कहाँ find करें।",
  wordCount: 440, category: "Corporate Actions", tags: ["dual-class-shares", "voting-rights", "corporate-governance", "ipo", "founder-control"],
  relatedSlugs: ["voting-rights", "staggered-board", "poison-pill", "proxy-statement"], relatedTerms: ["voting-rights", "staggered-board", "poison-pill", "proxy-statement"],
  faq: [{ question: "कौन सी major companies dual class structures रखती हैं?", answer: "Alphabet (Google), Meta (Facebook), Snap, Lyft, Pinterest, Zoom सब IPO supervoting shares। Berkshire Hathaway Class A (full voting) और Class B (1/1,500th vote)। New York Times editorial independence protect करने।" },
  { question: "IPO के बाद dual class structures change हो सकती हैं?", answer: "Rarely — supervoting shareholders (founders) consent without। कुछ companies sunset provisions include — 7-20 years बाद automatically one-share-one-vote convert। Without sunset, change requires supervoting class vote — founders control। Voluntary collapse uncommon।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>Dual class share structure दो या ज़्यादा classes common stock create करती है different voting rights। Most common: Class B (founders, insiders) 10 votes per share, Class A (public investors) 1 vote per share। Founders majority economic interest sell करने के बाद भी voting control maintain कर सकते हैं। 10% total shares hold करने वाला founder 50%+ voting power control कर सकता है।</p>

<h2>कैसे Work करता है</h2>
<p><strong>Economic rights:</strong> दोनों classes equal dividends per share, equal per-share distributions। Economic interest identical regardless of class।</p>
<p><strong>Voting rights:</strong> Supervoting class corporate decisions control: board elections, executive compensation, merger votes। Public shareholders unanimously oppose भी करें, founder override कर सकता है।</p>
<p><strong>Conversion:</strong> Supervoting shares typically automatically convert ordinary shares में non-insider transfer पर। Structure time पर collapse ensure।</p>

<h2>Founders क्यों Adopt करते हैं</h2>
<p><strong>Long-term vision:</strong> Short-term market pressures protect। Activist investors या hostile bidders force नहीं कर सकते R&D cut, company sell।</p>
<p><strong>Takeover protection:</strong> Ultimate anti-takeover defense। No hostile acquirer control gain कर सकता।</p>

<h2>Governance Debate</h2>
<p><strong>Against:</strong> Unaccountable power structure। Failing founder-CEO remove mechanism नहीं। S&P 500 ने 2017 से new dual class companies exclude किया।</p>
<p><strong>Sunset provisions:</strong> Compromise — time-based conversion ensure long-term shareholder democracy।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>India में SEBI dual class shares allow नहीं करती listed companies के लिए — one share one vote principle। DVR (Differential Voting Rights) shares limited cases में issue हुई हैं (Tata Motors DVR) लेकिन supervisory regulatory framework restrictive है। 2019 में SEBI ने SR (Superior Rights) shares startups के लिए allow किए, sunset clauses mandatory।</p>

<p>Indian investors US tech stocks buy करते समय dual class structure significant governance implication है। Alphabet, Meta, Snap में public shareholders practically powerless हैं major decisions पर। यह necessarily बुरा नहीं — Zuckerberg और Pichai long-term decisions ले पाते हैं — लेकिन accountability concern है अगर management quality deteriorate करे।</p>

<p>IPO invest करने से पहले S-1 "Description of Capital Stock" section check करें dual class structure, voting ratio, और sunset provisions। Brefyr proxy statements और S-1 filings process करता है voting power distribution track करने।</p>
`,
};
