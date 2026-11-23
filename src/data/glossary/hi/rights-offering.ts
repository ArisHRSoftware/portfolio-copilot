import type { GlossaryTerm } from "../../types";

export const termRightsOfferingHi: GlossaryTerm = {
  slug: "rights-offering",
  term: "Rights Offering (राइट्स ऑफरिंग)",
  title: "Rights Offering — जब Companies Existing Shareholders को पहले New Shares खरीदने का मौका देती हैं",
  shortDefinition:
    "Rights offering एक capital-raising method है जिसमें company existing shareholders को discounted price पर additional shares खरीदने का right offer करती है उनकी current holdings के proportion में — public को offer करने से पहले।",
  metaDescription:
    "Rights offering क्या है? Subscription rights कैसे काम करते हैं, companies इन्हें क्यों use करती हैं, participate न करने पर dilution risk, और SEC filings में details कैसे find करें।",
  wordCount: 430,
  category: "Corporate Actions",
  tags: ["rights-offering", "capital-raising", "dilution", "shareholder", "corporate-action"],
  relatedSlugs: ["dilution", "share-repurchase", "stock-split", "8-k-filing"],
  relatedTerms: ["dilution", "share-repurchase", "stock-split", "8-k-filing"],
  faq: [
    {
      question: "अगर मैं rights offering में participate नहीं करूँ तो क्या होगा?",
      answer:
        "आपकी ownership percentage decrease होगी (dilution) क्योंकि अन्य shareholders new shares खरीद रहे हैं जबकि आप नहीं। उदाहरण: company 20% ज़्यादा shares issue करे और आप participate न करें, तो ownership stake approximately 17% shrink होगा। कुछ rights offerings में rights transferable हैं — open market पर sell कर सकते हैं। Non-transferable rights exercise न करें तो expire होकर worthless हो जाते हैं।",
    },
    {
      question: "Company rights offering regular stock offering की बजाय क्यों करती है?",
      answer:
        "Rights offerings existing shareholders के लिए fairer हैं — हर holder को proportional ownership maintain करने का opportunity मिलता है। Regular public offering में shares किसी को भी sell हो सकते हैं। Rights offerings में lower underwriting costs भी होती हैं। हालांकि, execute होने में ज़्यादा time लगता है और subscription ensure करने के लिए significant discount (10-30% below market price) required होता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Rights offering — rights issue या subscription rights offering भी कहते हैं — equity capital raise करने का एक method है जिसमें company existing shareholders को current market price से नीचे additional shares खरीदने का opportunity offer करती है, उनकी existing holdings के proportion में। हर shareholder को subscription rights मिलते हैं जो specified number of new shares खरीदने के entitle करते हैं। Rights typically <strong>15-30 days exercise period</strong> और market price से <strong>10-30% discount</strong> पर subscription price होती है।</p>

<h2>Rights Offerings कैसे काम करती हैं</h2>

<p><strong>Announcement।</strong> Board terms approve और announce करता है: subscription price, ratio (कितने new shares per existing share), record date, subscription period, और rights transferable हैं या नहीं।</p>

<p><strong>Rights distribution।</strong> Record date पर हर shareholder of record को proportion में rights मिलते हैं। 1-for-5 rights offering में, हर 5 shares पर एक right मिलता है।</p>

<p><strong>Subscription period।</strong> Fixed window (typically 15-30 days) — exercise करें, sell करें (transferable हों तो), या expire होने दें।</p>

<p><strong>Oversubscription privilege।</strong> कई rights offerings oversubscription privilege include करती हैं — जो shareholders सभी basic rights exercise करें, unexercised pool से additional shares खरीद सकते हैं।</p>

<h2>Companies Rights Offerings क्यों Use करती हैं</h2>

<p><strong>Existing shareholders के लिए Fairness।</strong> हर shareholder को equal opportunity ownership percentage maintain करने का।</p>

<p><strong>Lower costs।</strong> Traditional public offerings से lower underwriting fees।</p>

<p><strong>Distressed capital raising।</strong> Financial difficulty वाली companies के लिए viable option — discount subscription ensure करता है।</p>

<h2>Dilution Problem</h2>

<p>Non-participation meaningful dilution result करता है। उदाहरण: 100 million shares outstanding $10 each पर। 1-for-4 rights offering $7 पर — 25 million new shares, $175 million raise। अगर 1,000 shares ($10,000) hold करें और participate न करें, shares अब $9,400 worth हैं — 6% loss। Participate करें तो $7 पर 250 shares खरीदें, 1,250 shares $11,750 worth — net gain।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में rights issues SEBI regulations govern करती हैं और Indian stock market में बहुत common हैं। US stocks hold करने वाले Indian investors को rights offerings monitor करनी चाहिए — timely decisions लेने के लिए। Brefyr registration statements और 8-K filings track करता है, rights offering announcements alert करता है।</p>
`,
};
