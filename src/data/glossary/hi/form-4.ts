import type { GlossaryTerm } from "../../types";

export const termForm4Hi: GlossaryTerm = {
  slug: "form-4",
  term: "Form 4 (इनसाइडर ट्रेडिंग डिस्क्लोज़र)",
  title: "Form 4 — Insider Buying और Selling को कैसे Track करें",
  shortDefinition:
    "Form 4 एक SEC filing है जो company insiders (officers, directors, और 10%+ shareholders) को stock buy या sell करने के 2 business days में submit करनी होती है।",
  metaDescription:
    "SEC Form 4 क्या है? Insider trading disclosures की complete guide — कौन file करता है, Form 4 में क्या पता चलता है, और investors insider buying/selling signals कैसे use करें।",
  wordCount: 800,
  category: "SEC Filings",
  tags: ["sec-filing", "insider-trading", "form-4", "insider-buying", "insider-selling"],
  relatedSlugs: ["insider-trading", "10-k-filing", "sec-edgar", "beneficial-owner"],
  relatedTerms: ["insider-trading", "10-k-filing", "sec-edgar", "beneficial-owner"],
  faq: [
    {
      question: "Form 4 कौन file करता है?",
      answer:
        "Company के officers (CEO, CFO, COO, etc.), board of directors के members, और कोई भी shareholder जिसके पास 10% या उससे ज़्यादा shares हों। इन सबको 'insiders' कहते हैं। जब भी ये लोग company का stock buy, sell, या transfer करते हैं, उन्हें 2 business days में Form 4 SEC के पास file करनी होती है।",
    },
    {
      question: "Insider buying क्यों important है?",
      answer:
        "जब CEO अपने पैसे से company का stock खरीदता है, तो यह confidence signal है — वो अपना पैसा वहाँ लगा रहा है जहाँ उसका career लगा है। Research दिखाता है कि significant insider buying के बाद stocks अक्सर market को outperform करते हैं। लेकिन insider selling हमेशा negative नहीं होती — executives tax planning, diversification, या personal expenses के लिए भी sell करते हैं।",
    },
    {
      question: "भारत से Form 4 कैसे track करें?",
      answer:
        "EDGAR पर सभी Form 4 filings free में available हैं। Brefyr पर insider buying और selling pages dedicated हैं जहाँ latest Form 4 filings significance score के साथ दिखती हैं। आप अपनी tracked stocks के लिए insider trading alerts भी set कर सकते हैं।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Form 4 SEC की सबसे closely watched filings में से एक है। जब भी कोई company insider — CEO, CFO, board member, या 10%+ shareholder — company का stock buy या sell करता है, उसे <strong>2 business days</strong> के अंदर Form 4 file करनी होती है।</p>

<p>यह filing public होती है और EDGAR पर free में available है। Investors Form 4 को इसलिए closely track करते हैं क्योंकि insiders को company के बारे में सबसे ज़्यादा जानकारी होती है। अगर CEO $5 million worth stock open market से खरीद रहा है, तो वो कुछ जानता है जो बाकी market अभी नहीं जानता।</p>

<h2>Form 4 में क्या होता है</h2>

<h3>Transaction Details</h3>
<p>हर Form 4 में बताया जाता है: किसने trade किया (name और title), कब trade हुआ (date), कितने shares खरीदे/बेचे (quantity), किस price पर, और transaction के बाद उसके पास total कितने shares हैं।</p>

<h3>Transaction Codes</h3>
<p>SEC specific codes use करता है:</p>
<ul>
<li><strong>P (Purchase)</strong> — Open market purchase। यह सबसे bullish signal है क्योंकि insider ने अपना पैसा लगाया।</li>
<li><strong>S (Sale)</strong> — Open market sale। Bearish signal हो सकता है, लेकिन context ज़रूरी है।</li>
<li><strong>A (Award)</strong> — Stock award/grant। Company compensation है, insider ने खरीदा नहीं।</li>
<li><strong>M (Exercise)</strong> — Stock option exercise। Often followed by a sale।</li>
<li><strong>G (Gift)</strong> — Shares gift किए गए। Tax planning के लिए common।</li>
</ul>

<h3>Direct vs Indirect Ownership</h3>
<p>Form 4 direct ownership (insiders के नाम पर) और indirect ownership (family trusts, partnerships के through) दोनों report करता है।</p>

<h2>Insider Buying Signals कैसे पढ़ें</h2>

<p><strong>Strong bullish signals:</strong></p>
<ul>
<li>CEO या CFO ने open market purchase किया (P code)</li>
<li>Multiple insiders ने same period में buy किया (cluster buying)</li>
<li>Purchase amount insider की salary का significant percentage है</li>
<li>Stock price down होने के बाद insiders ने buy किया</li>
</ul>

<p><strong>Weak या neutral signals:</strong></p>
<ul>
<li>Automated purchases (10b5-1 plan के through) — pre-scheduled हैं, current view reflect नहीं करते</li>
<li>Exercise + immediate sell — tax planning, bullish signal नहीं</li>
<li>Small purchases ($10,000 से कम) — token gesture हो सकता है</li>
</ul>

<h2>Insider Selling को कैसे Interpret करें</h2>

<p>Insider selling automatically negative नहीं है। Executives sell करते हैं:</p>
<ul>
<li><strong>Diversification</strong> — अपनी wealth single stock में concentrated नहीं रखना चाहते</li>
<li><strong>Tax obligations</strong> — RSU vest होने पर tax pay करने के लिए</li>
<li><strong>Personal expenses</strong> — घर खरीदना, बच्चों की education</li>
</ul>

<p><strong>Red flags:</strong> Multiple insiders simultaneously sell कर रहे हैं, CEO ने significant portion sell किया earnings announcement से ठीक पहले, या selling volume historically unusual है।</p>

<h2>भारतीय निवेशकों के लिए Form 4</h2>

<p>भारत में SEBI भी insider trading disclosures require करता है, लेकिन US system ज़्यादा transparent और fast है। Form 4 2 business days में file होती है, जबकि India में insider trading disclosures में अक्सर delay होता है।</p>

<p>अगर आप Vested, INDMoney, या Groww International से Apple, Tesla, या Microsoft जैसे stocks hold करते हैं, तो insider activity monitor करना critical है। एक cluster buying event (3-4 insiders ने same week में buy किया) often stock price rally से पहले आता है।</p>

<p>Brefyr पर <strong>/insider-buying</strong> और <strong>/insider-selling</strong> pages dedicated हैं जहाँ latest Form 4 filings AI-scored format में दिखती हैं। High significance score (7+) वाली insider trades अक्सर market-moving होती हैं। आप अपनी portfolio stocks के लिए insider trading alerts भी set कर सकते हैं।</p>
`,
};
