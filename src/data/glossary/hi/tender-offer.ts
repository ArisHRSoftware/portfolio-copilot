import type { GlossaryTerm } from "../../types";

export const termTenderOfferHi: GlossaryTerm = {
  slug: "tender-offer",
  term: "Tender Offer (टेंडर ऑफर)",
  title: "Tender Offer — Shareholders से Directly Shares खरीदने की Direct Bid",
  shortDefinition:
    "Tender offer shareholders के shares specified price पर (typically current market price से premium) fixed time period में purchase करने की public bid है।",
  metaDescription:
    "Tender offer क्या है? कैसे काम करता है, third-party और self-tender offers में difference, SEC rules, और investors को क्या consider करना चाहिए।",
  wordCount: 430,
  category: "Corporate Actions",
  tags: ["tender-offer", "m-and-a", "corporate-action", "takeover", "shareholder"],
  relatedSlugs: ["acquisition", "merger", "share-repurchase", "poison-pill", "8-k-filing"],
  relatedTerms: ["acquisition", "merger", "share-repurchase", "poison-pill", "8-k-filing"],
  faq: [
    {
      question: "क्या tender offer में shares sell करना ज़रूरी है?",
      answer:
        "नहीं। Tender offers voluntary हैं — आप choose करें shares tender (sell) करें या keep। लेकिन tender offer result में acquirer enough shares gain करे back-end merger complete करने के लिए (usually supermajority), remaining shareholders subsequent squeeze-out merger में same price forced accept। Tendering optional, लेकिन holdouts practical outcome अक्सर same price — later, less certainty।",
    },
    {
      question: "Shares tender करने के बाद mind change कर सकते हैं?",
      answer:
        "हाँ। SEC rules under, offer expire होने से पहले कभी भी tendered shares withdraw कर सकते हैं। Offer extend हो तो withdrawal rights भी extend। 60 days original offer बाद shares accept न हों तो withdraw। Material new information emerge होने पर shareholders mind change protect।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Tender offer formal, public proposal है company के shareholders से directly specified price पर fixed period में shares purchase करने की। Offer typically pre-announcement trading price से <strong>20-50% premium</strong> पर — shareholders incentivize shares tender (sell) करने के लिए। Acquisitions (particularly hostile takeovers) और share repurchase programs में common mechanism।</p>

<h2>Types</h2>

<p><strong>Third-party tender offer:</strong> Acquiring company target company shares buy करने offer। Classic takeover mechanism — acquirer directly shareholders से, target board bypass। Board oppose करे — hostile tender offer। Board support — friendly, traditional merger से faster।</p>

<p><strong>Self-tender offer (issuer tender):</strong> Company अपने shares existing shareholders से buy back offer। Open-market repurchases का alternative — large block quickly fixed/range-bound price पर।</p>

<h2>SEC Rules</h2>

<p>Williams Act (Securities Exchange Act Sections 13(d), 14(d)-(e)) और SEC Rules 14d/14e govern करते हैं:</p>

<p><strong>Minimum duration:</strong> 20 business days open रहना ज़रूरी। Terms change: 10 additional business days।</p>

<p><strong>All-holders/best-price rule:</strong> Targeted class के सभी holders को offer open। सभी tendering shareholders best price।</p>

<p><strong>Withdrawal rights:</strong> Expire से पहले कभी भी withdraw। 60 days बाद accept न हों तो withdraw।</p>

<p><strong>Pro rata acceptance:</strong> Partial tender में ज़्यादा shares tender हों — pro rata basis सभी tendering shareholders से accept।</p>

<h2>Tender Offer Process</h2>

<p><strong>Announcement और filing:</strong> Offeror announce करता है, Schedule TO SEC file।</p>
<p><strong>Target response:</strong> 10 business days में board Schedule 14D-9 file — accept, reject, no opinion recommend।</p>
<p><strong>Tender period:</strong> Shareholders decide (minimum 20 days)। Broker through tender।</p>
<p><strong>Settlement:</strong> Expiration पर conditions met — shares accept, offer price pay, 2-3 business days।</p>

<h2>Investors के लिए Strategic Considerations</h2>

<p>Tender करें या नहीं consider करें: premium over market price, higher competing bid likelihood, tender न करें और acquirer control gain — back-end merger same/lower price, tax implications। Hostile offer में target higher price negotiate, white knight find, poison pill deploy कर सकता है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI Takeover Regulations tender offers govern — similar protections। US stocks hold करने वाले investors को tender offer analysis framework apply करना चाहिए। Brefyr Schedule TO और 14D-9 filings monitor करता है — tender offer alerts।</p>
`,
};
