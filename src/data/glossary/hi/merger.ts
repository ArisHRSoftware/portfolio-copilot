import type { GlossaryTerm } from "../../types";

export const termMergerHi: GlossaryTerm = {
  slug: "merger",
  term: "Merger (मर्जर)",
  title: "Merger — जब दो Companies मिलकर एक Entity बनती हैं",
  shortDefinition:
    "Merger corporate transaction है जिसमें दो companies combine होकर single entity बनती हैं, दोनों companies के shareholders typically combined company में shares receive करते हैं।",
  metaDescription:
    "Merger क्या है? Types, acquisition से difference, regulatory approval process, merger arbitrage, और SEC filings में merger activity track कैसे करें।",
  wordCount: 440,
  category: "Corporate Actions",
  tags: ["merger", "m-and-a", "corporate-action", "restructuring", "shareholder"],
  relatedSlugs: ["acquisition", "tender-offer", "leveraged-buyout", "poison-pill", "proxy-statement"],
  relatedTerms: ["acquisition", "tender-offer", "leveraged-buyout", "poison-pill", "proxy-statement"],
  faq: [
    { question: "Merger और acquisition में क्या difference है?", answer: "Merger में दो companies combine — दोनों shareholders new/combined entity shares receive। Acquisition में एक company दूसरी purchase — target shareholders cash/stock/combination receive। Practice में ज़्यादातर 'mergers' actually acquisitions structured as mergers legal/tax reasons से। 'Merger of equals' implies equal size, power-sharing — genuinely rare।" },
    { question: "Merger complete होने में कितना time लगता है?", answer: "Announcement to closing: 3-12 months। Regulatory approvals (FTC, DOJ, SEC), shareholder votes, closing conditions। Simple: 3-4 months। Complex regulated industries (banking, healthcare, telecom): 12-18 months, sometimes blocked।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Merger corporate transaction है जिसमें दो separate companies operations, assets, liabilities combine करती हैं single entity में। Close होने के बाद एक या दोनों original companies independent entity exist नहीं करतीं। Industries reshape, shareholder value create या destroy, extensive SEC filings generate — investors को समझना ज़रूरी।</p>

<p>Indian context: Vodafone-Idea merger, HDFC-HDFC Bank merger — Indian investors merger concept से familiar। US market में M&A activity significantly larger scale — SEC filings comprehensive disclosure provide करती हैं।</p>

<h2>Types</h2>
<p><strong>Horizontal:</strong> Same industry, same stage — antitrust scrutiny ज़्यादा। <strong>Vertical:</strong> Supplier/customer merge — efficiencies लेकिन competition concerns possible। <strong>Conglomerate:</strong> Unrelated industries — 1960s-80s common, अब conglomerate discount penalize। <strong>Merger of equals:</strong> Similar size, shared leadership — exceptionally rare in practice।</p>

<h2>Merger Process</h2>
<p><strong>Negotiation:</strong> Exchange ratio, governance, management structure, regulatory strategy negotiate। Definitive merger agreement binding contract।</p>

<p><strong>SEC filing:</strong> Both companies 8-K announce। Stock-based mergers — acquirer S-4 registration (new shares register)। Both proxy statements shareholder approval। Full merger agreement, fairness opinions, pro forma financials, risk factors।</p>

<p><strong>Regulatory review:</strong> FTC, DOJ antitrust, SEC, state regulators, foreign competition authorities। Hart-Scott-Rodino pre-merger notification size thresholds। Unconditional approve, divestitures require, या block entirely।</p>

<p><strong>Shareholder vote:</strong> Both companies shareholders approve (exceptions exist)। Proxy statement complete information।</p>

<p><strong>Closing:</strong> All conditions satisfied — regulatory approvals, votes, no material adverse change — target shares exchanged, target delisted, combined entity operate।</p>

<h2>Merger Arbitrage</h2>
<p>Announcement के बाद target stock typically small discount पर trades offer price से — deal close न होने का risk reflect। Merger arb: target stock buy after announcement, hold through closing। Return = discount, closing probability, time।</p>

<h2>Value Create होती है?</h2>
<p>Target shareholders almost always benefit — 20-40% premium। Acquirer shareholders often stock decline on announcement — market believes overpaying। ~Half mergers fail to deliver promised synergies — cultural integration, customer attrition, management distraction।</p>

<h2>SEC Filings</h2>
<p><strong>8-K:</strong> Announcement + merger agreement exhibit। <strong>S-4:</strong> New shares registration — most comprehensive disclosure। <strong>DEF 14A:</strong> Both companies proxy statements। <strong>SC 13E-3:</strong> Going-private mergers। <strong>10-K:</strong> Post-closing combined entity acquisition discussion।</p>

<p>Brefyr merger-related SEC filings monitor करती है 7,600+ companies — 8-K announcements, S-4 registrations, proxy solicitations flag — deal progress announcement to closing track।</p>
`,
};
