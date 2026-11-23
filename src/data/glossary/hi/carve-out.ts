import type { GlossaryTerm } from "../../types";

export const termCarveOutHi: GlossaryTerm = {
  slug: "carve-out",
  term: "Equity Carve-Out (इक्विटी कार्व-आउट)",
  title: "Equity Carve-Out — Subsidiary में Minority Stake IPO के ज़रिए बेचना",
  shortDefinition:
    "Equity carve-out में parent company अपनी subsidiary का minority ownership stake IPO के through public investors को sell करती है, cash raise करती है जबकि majority control retain रखती है।",
  metaDescription:
    "Equity carve-out क्या है? Carve-outs spin-offs से कैसे different हैं, कंपनियाँ subsidiaries में partial stakes क्यों बेचती हैं, और SEC filings में कैसे track करें।",
  wordCount: 420,
  category: "Corporate Actions",
  tags: ["carve-out", "ipo", "divestiture", "corporate-action", "subsidiary"],
  relatedSlugs: ["spin-off", "merger", "acquisition", "leveraged-buyout", "8-k-filing"],
  relatedTerms: ["spin-off", "merger", "acquisition", "leveraged-buyout", "8-k-filing"],
  faq: [
    {
      question: "Carve-out और spin-off में क्या difference है?",
      answer:
        "Spin-off में parent सभी subsidiary shares existing shareholders को free में distribute करता है — parent zero ownership retain करता, कोई cash नहीं मिलता। Carve-out में parent minority stake (typically 10-30%) IPO के through new public investors को sell करता है — cash मिलता है, majority control रहता है। Carve-outs अक्सर spin-offs से पहले होते हैं: carve-out public market value establish करता है, फिर बाद में remaining stake spin off।",
    },
    {
      question: "Company पूरी subsidiary sell करने की बजाय carve-out क्यों करेगी?",
      answer:
        "Carve-out parent को cash raise करने देता है strategic control retain करते हुए। Parent 70-90% own करता रहता है। Public market valuation establish होती है। Subsidiary अपनी publicly traded stock पाती है — employee compensation और acquisitions के लिए useful। India में Reliance Retail/Jio की potential IPO similar carve-out strategy की example होगी।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Equity carve-out — partial IPO भी कहा जाता है — एक transaction है जिसमें parent company subsidiary को public करती है minority stake IPO के through sell करके। Parent majority ownership (typically 70-90%) retain करता है जबकि minority stake public exchange पर trade करने लगता है। Full spin-off के विपरीत, जहाँ parent सभी shares distribute करता है और कुछ नहीं मिलता, <strong>carve-out cash proceeds generate करता है</strong>।</p>

<h2>Carve-Outs कैसे काम करते हैं</h2>

<p>Parent company subsidiary की तरफ से S-1 registration statement SEC के पास file करती है — subsidiary के standalone financial statements, business description, risk factors। Investment banks IPO underwrite करते हैं। Offering के बाद subsidiary independently exchange पर trade करती है, parent consolidation continue करता है (controlling interest)।</p>

<p><strong>Typical structure:</strong> Parent 15-25% subsidiary shares IPO में sell, 75-85% retain। IPO cash parent को जा सकता है (secondary offering) या subsidiary को (primary offering growth fund करने), या combination।</p>

<h2>Strategic Reasons</h2>

<p><strong>Cash generation.</strong> Spin-off कोई cash generate नहीं करता — carve-out money raise करता है। Debt pay down, other investments fund, या shareholders को capital return।</p>
<p><strong>Price discovery.</strong> Public trading price establish करने से subsidiary की market validation मिलती है।</p>
<p><strong>Step toward full separation.</strong> Carve-out अक्सर two-step separation का first step — public company establish, फिर tax-free spin-off remaining stake का।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में carve-out concept familiar है — Reliance Jio IPO plans, HDFC Life IPO (HDFC Group subsidiary) similar transactions हैं। SEBI regulations subsidiary listings govern करती हैं। US carve-outs में invest करने वाले Indian investors के लिए: S-1 filing carefully read करें — parent-subsidiary related-party transactions, intercompany overlaps important risk factors हैं। RBI LRS से IPO participate कर सकते हैं अगर US brokerage account हो।</p>

<h2>SEC Filings में Carve-Outs</h2>

<ul>
<li><strong>S-1 Registration:</strong> Subsidiary की IPO prospectus — full standalone financials, parent relationship।</li>
<li><strong>8-K filing:</strong> Parent carve-out transaction और terms announce।</li>
<li><strong>10-K:</strong> Parent subsidiary consolidate करता है, minority interest balance sheet पर।</li>
<li><strong>Related-party disclosures:</strong> दोनों filings में parent-subsidiary transactions detail।</li>
</ul>

<p>Brefyr S-1 filings और 8-K announcements track करता है, carve-out IPOs flag करता है।</p>
`,
};
