import type { GlossaryTerm } from "../../types";

export const termSpinOffHi: GlossaryTerm = {
  slug: "spin-off",
  term: "Spin-Off (स्पिन-ऑफ)",
  title: "Spin-Off — जब कंपनी अपना Business Unit एक नई Public Company में अलग करती है",
  shortDefinition:
    "Spin-off एक corporate action है जिसमें parent company अपनी subsidiary या business unit के shares existing shareholders को distribute करती है, एक नई independent publicly traded company बनाती है।",
  metaDescription:
    "Corporate spin-off क्या है? Spin-offs कैसे काम करते हैं, कंपनियाँ divisions क्यों spin off करती हैं, spin-off stocks का historical performance, और SEC filings में कैसे track करें।",
  wordCount: 450,
  category: "Corporate Actions",
  tags: ["spin-off", "corporate-action", "divestiture", "restructuring", "shareholder"],
  relatedSlugs: ["carve-out", "merger", "acquisition", "8-k-filing", "special-dividend"],
  relatedTerms: ["carve-out", "merger", "acquisition", "8-k-filing", "special-dividend"],
  faq: [
    {
      question: "Spin-offs shareholders के लिए अच्छे हैं?",
      answer:
        "Historically, हाँ। Academic research consistently दिखाती है कि parent company और spun-off entity दोनों spin-off के बाद 1-3 years में broader market को outperform करते हैं। Theory: conglomerates discount पर trade करते हैं क्योंकि market diverse businesses को एक साथ value करने में difficulty face करता है। India में भी demergers (Reliance Jio/Retail, ITC Hotels) ने value unlock किया है। US spin-offs Indian investors के लिए interesting opportunity हो सकते हैं।",
    },
    {
      question: "Spin-off shares पर tax कैसे लगता है?",
      answer:
        "ज़्यादातर spin-offs Section 355 के under tax-free distribution की तरह structured होते हैं। Shareholders को received shares पर immediate tax नहीं लगता। Original cost basis parent और spin-off के बीच relative market values के basis पर allocate होता है। Indian investors को India-US DTAA provisions check करने चाहिए — spin-off shares की cost basis allocation important है future capital gains calculation के लिए।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Spin-off तब होता है जब parent company अपनी subsidiary या division के shares existing shareholders को pro rata dividend के रूप में distribute करती है, एक नई standalone public company बनाती है। अगर आपके पास parent company के 100 shares हैं और spin-off हर 5 parent shares पर 1 new company share distribute करता है, तो आपको 20 new shares मिलते हैं बिना कुछ pay किए। Parent की subsidiary में ownership zero हो जाती है, नई entity independently stock exchange पर trade करने लगती है।</p>

<h2>कंपनियाँ Spin-Off क्यों करती हैं</h2>

<p><strong>Conglomerate discount.</strong> Diversified companies अक्सर sum of their parts से discount पर trade करती हैं। India में Reliance Industries ने similar logic से Jio platform अलग करने पर विचार किया। Separation each business को independently value करने देता है।</p>

<p><strong>Strategic focus.</strong> जब subsidiary की growth characteristics parent से different हों — competing priorities create होती हैं। Separation each management team को अपनी strategy pursue करने देता है।</p>

<p><strong>Unlocking shareholder value.</strong> अगर management believe करता है कि market subsidiary को undervalue कर रहा है, spin-off market को independent value assign करने force करता है।</p>

<h2>Spin-Off Process</h2>

<p>Multi-month process: Board approval, subsidiary Form 10 registration statement SEC के पास file (audited financials, risk factors), IRS ruling tax-free treatment के लिए, distribution date पर shares brokerage accounts में credit, cost basis allocation guidance।</p>

<h2>Historical Performance</h2>

<p>Joel Greenblatt की well-known analysis समेत studies दिखाती हैं कि spun-off companies S&P 500 को average 10-15% outperform करती हैं first year में। Institutional selling temporary price pressure create करती है — index funds spin-off shares sell करते हैं अगर new company उनकी mandate से बाहर हो। यह informed investors के लिए opportunity create करता है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में demergers (ITC Hotels, Reliance) similar concept हैं — SEBI regulated process। US spin-offs में RBI LRS से invest करने वालों को: spin-off shares automatically Vested/INDMoney account में credit होंगे। Cost basis allocation important — Form 1099-B में reflected होगा। India में capital gains calculate करते समय allocated cost basis use करें।</p>

<h2>SEC Filings में Spin-Offs</h2>

<ul>
<li><strong>Form 10:</strong> Spin-off की registration statement — full standalone financials।</li>
<li><strong>8-K filing:</strong> Parent distribution ratio और timeline announce करता है।</li>
<li><strong>DEF 14A:</strong> Shareholder approval required हो तो proxy statement।</li>
<li><strong>10-K:</strong> Parent's annual report spin-off discuss करता है notes में।</li>
</ul>

<p>Brefyr Form 10 filings और 8-K announcements track करता है, spin-off events flag करता है 7,600+ SEC filers across।</p>
`,
};
