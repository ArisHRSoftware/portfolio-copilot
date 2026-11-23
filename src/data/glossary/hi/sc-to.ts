import type { GlossaryTerm } from "../../types";

export const termSCTOHi: GlossaryTerm = {
  slug: "sc-to",
  term: "SC TO (शेड्यूल TO)",
  title: "SC TO — Tender Offer Statement Investors के लिए Explained",
  shortDefinition:
    "SC TO (Schedule TO) एक SEC filing है जो required होती है जब कोई person या entity public company के shareholders से directly shares purchase करने के लिए tender offer करता है — offer की terms, conditions, financing, और purpose disclose करती है।",
  metaDescription:
    "SC TO filing क्या है? Tender offer statements कैसे काम करते हैं, क्या contain करते हैं, और investors tender offer evaluate कैसे करें।",
  wordCount: 450,
  category: "SEC Filings",
  tags: ["sec-filing", "tender-offer", "mergers-acquisitions", "edgar", "takeover"],
  relatedSlugs: ["schedule-13d", "8-k-filing", "def-14a", "sec-edgar", "beneficial-owner"],
  relatedTerms: ["schedule-13d", "8-k-filing", "def-14a", "sec-edgar", "beneficial-owner"],
  faq: [
    {
      question: "Tender offer क्या होता है?",
      answer:
        "Tender offer एक public proposal है company के shares directly shareholders से specified price पर खरीदने का — usually current market price से premium पर। Open-market purchases के unlike, tender offers stock exchange bypass करते हैं — bidder सीधे shareholders से shares 'tender' (deliver) करने को कहता है। Acquisitions, going-private transactions, और self-tenders (company अपने shares buyback करे) में commonly used।",
    },
    {
      question: "Tender offer कितने समय तक open रहता है?",
      answer:
        "SEC rules require करते हैं कि tender offer minimum 20 business days open रहे। Material term change हो (price, percentage, consideration) तो कम से कम 10 additional business days। Shareholders tendered shares offer expire होने से पहले कभी भी withdraw कर सकते हैं — यह critical investor protection है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Schedule TO वो SEC filing है जो tender offer launch और govern करती है। जब bidder board of directors bypass करके directly shareholders को shares purchase offer करता है, Schedule TO official opening move है। Terms table पर रखती है, bidder की financing और intentions disclose करती है, और regulatory clock start करती है। Shareholders के लिए, SC TO और accompanying offer to purchase वो documents हैं जो determine करते हैं shares tender करें, hold करें, या better offer wait करें।</p>

<h2>Schedule TO कब File होता है</h2>

<p>Tender offer commence होने वाले दिन SEC को file करना होता है। Filing में include: offer to purchase (detailed terms), letter of transmittal (shareholders tender करने के लिए form), और सभी materials shareholders को distributed।</p>

<p>Tender offers कई contexts में होते हैं: <strong>third-party acquisitions</strong> (hostile bid), <strong>negotiated acquisitions</strong> (friendly deal tender offer mechanism use करे), <strong>self-tenders</strong> (company अपने shares repurchase), <strong>going-private transactions</strong>।</p>

<h2>SC TO क्या Contain करता है</h2>

<p><strong>Offer terms।</strong> Price per share, shares sought, expiration date, conditions। Conditions section critical — circumstances list करता है जिनमें bidder walk away कर सकता है।</p>

<p><strong>Source और amount of funds।</strong> Bidder कैसे pay करेगा — cash, debt financing, equity, या combination। Heavily leveraged offers ज़्यादा risk carry करते हैं।</p>

<p><strong>Purpose।</strong> Shares acquire करने के बाद company के लिए plans — mergers, reorganizations, board changes, management changes, dividend policy changes।</p>

<h2>Target Company की Response</h2>

<p>10 business days के अंदर, target board Schedule 14D-9 file करती है — recommendation: accept, reject, no opinion, या unable to take position। Board typically fairness opinion और detailed analysis include करती है। Hostile situations में, board poison pill, white knight search, या litigation recommend कर सकती है।</p>

<h2>Investors Tender Offer Evaluate कैसे करें</h2>

<p><strong>Premium क्या है?</strong> Undisturbed stock price से compare करें — 20-40% premiums typical हैं।</p>
<p><strong>Conditions क्या हैं?</strong> Fewer conditions, more certain outcome।</p>
<p><strong>Competing interest likely है?</strong> Go-shop period या low break-up fee competing offer probability increase।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI Takeover Regulations tender offers govern करती हैं। US stocks hold करने वाले investors को SC TO filings monitor करनी चाहिए। Brefyr पर tender offer filings material events highlight होती हैं AI-generated summaries के साथ।</p>
`,
};
