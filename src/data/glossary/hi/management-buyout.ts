import type { GlossaryTerm } from "../../types";

export const termManagementBuyoutHi: GlossaryTerm = {
  slug: "management-buyout",
  term: "Management Buyout (मैनेजमेंट बायआउट)",
  title: "Management Buyout (MBO) — जब Executives अपनी ही Company ख़रीदते हैं",
  shortDefinition:
    "Management buyout वो transaction है जिसमें company की existing management team controlling interest purchase करती है, अक्सर PE financing की help से, company को private लेकर।",
  metaDescription:
    "MBO क्या है? कैसे काम करता है, conflicts of interest, SEC disclosure requirements, और investors को क्या watch करना चाहिए।",
  wordCount: 420,
  category: "Corporate Actions",
  tags: ["management-buyout", "mbo", "going-private", "corporate-action", "conflict-of-interest"],
  relatedSlugs: ["leveraged-buyout", "acquisition", "golden-parachute", "executive-compensation"],
  relatedTerms: ["leveraged-buyout", "acquisition", "golden-parachute", "executive-compensation"],
  faq: [
    {
      question: "MBO में main concern क्या है?",
      answer:
        "Conflict of interest — management को company true value, hidden potential, upcoming catalysts better पता हैं। Buyers के रूप में lowest price चाहते हैं। Fiduciaries के रूप में highest price seek करना चाहिए। SEC extensive disclosure require करती है Schedule 13E-3 में, independent special committee negotiate करे shareholders behalf।",
    },
    {
      question: "Managers MBO finance कैसे करते हैं?",
      answer:
        "Own money से पूरा purchase almost never। PE firm partner — majority equity capital और debt financing arrange। Management equity 1-5% total purchase price, PE firm 20-35%, बाकी debt। Management को equity incentives भी मिलती हैं (options, profit interests) new private company में।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Management buyout (MBO) acquisition form है जिसमें current executives और senior managers controlling stake purchase करते हैं, typically company private लेकर। Management team usually PE firms partner करती है जो bulk of capital provide करती हैं, management smaller equity stake contribute। MBOs leveraged buyouts का subset — primarily debt finance — distinguishing feature: buyers वही लोग हैं जो company run कर रहे।</p>

<p>Indian context: India में भी MBOs हुए हैं — family businesses succession planning में management teams को ownership transfer common। Concept same, scale different US market से।</p>

<h2>MBOs क्यों होते हैं</h2>

<p><strong>Undervaluation:</strong> Management believe करती है company public market undervalue कर रही — operational improvements, strategic pivots difficult under quarterly pressure। Private जाकर long-term invest without stock price volatility।</p>

<p><strong>Succession planning:</strong> Family businesses/founder-led companies — founding family exit, management team ownership transfer। Competitor sell से preferable।</p>

<p><strong>Corporate divestiture:</strong> Large company non-core division sell — division management team buy, deep knowledge, quick close, competitive PE-backed price।</p>

<p><strong>Activism defense:</strong> Activist investor pressure face — MBO offer preempt activist demands। Intense scrutiny price fairness पर।</p>

<h2>Conflict of Interest Problem</h2>

<p>Corporate finance का सबसे acute conflict। Same executives fiduciary duty shareholder value maximize — दूसरी तरफ़ buyers acquisition price minimize। Management information control, public narrative set (stock price depress कर सकती है), offer timing temporarily depressed results।</p>

<p>Safeguards: <strong>Independent special committee:</strong> Independent directors evaluate, negotiate, potentially competing bids solicit। <strong>Independent financial advisor:</strong> Fairness opinion और independent valuation। <strong>Market check/go-shop:</strong> Potential buyers canvass या post-signing competing offers window। <strong>Majority of minority:</strong> Disinterested shareholders approval।</p>

<h2>MBO Process</h2>

<p>Management + PE partner buyer group form → non-binding proposal → board special committee form → committee evaluate + alternatives solicit → negotiations → definitive agreement → SEC filings → shareholder vote → close। Typically 6-12 months total।</p>

<h2>SEC Filings में MBOs</h2>

<p><strong>Schedule 13E-3:</strong> Going-private filing — fairness, conflicts, special committee process extensive disclosure। <strong>DEF 14A:</strong> Board recommendation, fairness opinions, financial analyses, competing proposals। <strong>SC 13D:</strong> Management buyer group 5%+ acquire। <strong>8-K:</strong> Initial proposal, special committee, agreement, closing।</p>

<p>Brefyr going-private filings और proxy statements monitor करती है — MBO proposals flag, special committee process track, investors evaluate करें offered price fair है या नहीं।</p>
`,
};
