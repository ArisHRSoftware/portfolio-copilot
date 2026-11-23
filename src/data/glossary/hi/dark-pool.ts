import type { GlossaryTerm } from "../../types";

export const termDarkPoolHi: GlossaryTerm = {
  slug: "dark-pool",
  term: "Dark Pool (डार्क पूल)",
  title: "Dark Pool — Private Exchanges जहाँ Large Trades Invisibly होते हैं",
  shortDefinition:
    "Dark pool एक private, off-exchange trading venue है जहाँ institutional investors large blocks of stock publicly display किए बिना buy और sell कर सकते हैं, market impact minimize करने के लिए।",
  metaDescription:
    "Dark pool क्या है? जानें dark pools कैसे काम करते हैं, institutions क्यों use करते हैं, ATS regulation, transparency controversy, और dark pool activity stock prices कैसे affect करती है।",
  wordCount: 440,
  category: "Market Structure",
  tags: ["dark-pool", "market-structure", "institutional-trading", "ats", "liquidity"],
  relatedSlugs: ["market-maker", "block-trade", "bid-ask-spread", "market-order"],
  relatedTerms: ["market-maker", "block-trade", "bid-ask-spread", "market-order"],
  faq: [
    {
      question: "Institutions dark pools क्यों use करते हैं regular exchanges के बजाय?",
      answer:
        "जब कोई large institution millions of shares buy या sell करना चाहता है, public exchange पर order place करने से intention सबको दिखता है। दूसरे traders ahead trade करते हैं (front-running), price push करते हैं institution का order complete होने से पहले। Dark pools order छुपाते हैं execution तक — institution prevailing market rate के करीब trade complete कर पाता है। Large order पर price impact savings millions of dollars हो सकती है।",
    },
    {
      question: "कितना trading volume dark pools से होता है?",
      answer:
        "Dark pools approximately 40-45% US equity trading volume handle करते हैं (2025 data)। एक decade पहले ~15% था। Largest dark pools: Citadel Connect, Virtu Financial, UBS ATS, Morgan Stanley MS Pool। FINRA weekly dark pool volume data publish करता है two-week delay से, security और ATS venue wise breakdown। यह data public है।",
    },
    {
      question: "India में dark pools हैं?",
      answer:
        "SEBI ने India में dark pools allow नहीं किए हैं। NSE और BSE पर सभी orders visible order book में जाते हैं — full pre-trade transparency। Block deal window (morning 8:45-9:00 AM) institutional large trades के लिए available है लेकिन यह US dark pools से fundamentally different है। Indian market structure transparency prioritize करती है जबकि US market ने off-exchange trading evolve होने दिया है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Dark pools private trading venues हैं जहाँ buyers और sellers बिना orders publicly display किए match होते हैं। Name pre-trade transparency की कमी से आता है — public exchanges जहाँ हर bid और offer visible है, dark pool orders execution तक invisible हैं। ये एक specific problem solve करने के लिए बने: large institutions enormous stock blocks market अपने against move किए बिना कैसे trade करें?</p>

<h2>Dark Pools क्यों Exist करते हैं</h2>

<p>सोचें एक mutual fund को $50 stock के 5 million shares sell करने हैं — $250 million trade। यह order NYSE order book पर दिखे तो हर algorithmic trader, market maker देखेगा। वे sell first करेंगे (या bids pull करेंगे), stock drop होगा fund का order complete होने से पहले। यह <strong>information leakage</strong> है — tens of millions dollars worse execution।</p>

<p>Dark pools order hide करके solve करते हैं। Fund sell order submit करता है, invisibly sit करता है। Matching buyer (दूसरी institution) आए तो reference price पर match — typically <a href="/glossary/bid-ask-spread">bid-ask spread</a> का midpoint। Trade done होने तक कोई किसी का order नहीं देखता।</p>

<h2>Dark Pool के Types</h2>

<ul>
<li><strong>Broker-dealer operated:</strong> Major banks (Goldman Sachs, Morgan Stanley) अपने clients के लिए। Client orders एक-दूसरे से या firm की own trading desk से match। Conflicts of interest inherent।</li>
<li><strong>Electronic market maker dark pools:</strong> Citadel Securities, Virtu Financial retail order flow internalize करते हैं। <a href="/glossary/market-maker">Market maker</a> PFOF ecosystem से overlap।</li>
<li><strong>Independent crossing networks:</strong> Liquidnet जैसे venues purely institutional block orders match करते हैं, no proprietary trading। Original dark pool concept के closest।</li>
<li><strong>Exchange-operated:</strong> Public exchanges अपने platform में dark pool tiers operate करते हैं — midpoint peg या hidden order types।</li>
</ul>

<h2>Regulation और Transparency</h2>

<p>Dark pools SEC Regulation ATS के तहत <strong>Alternative Trading Systems (ATS)</strong> classified हैं। SEC registration, FINRA membership, Form ATS-N (operations, conflicts, safeguards disclose) ज़रूरी। FINRA weekly aggregate volume data publish करता है per ATS, per stock, two-week delay से।</p>

<p>Controversy points:</p>
<ul>
<li><strong>Reduced price discovery:</strong> 40%+ volume dark में trade हो तो public exchange prices fully supply-demand reflect नहीं कर सकतीं</li>
<li><strong>Conflicts of interest:</strong> Bank-operated dark pools bank की proprietary trading favor कर सकते हैं</li>
<li><strong>Information asymmetry:</strong> कुछ dark pools high-frequency traders allow करते हैं जो slower institutions exploit कर सकते हैं</li>
</ul>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में SEBI ने dark pools ban रखे हैं — NSE/BSE पर full order book transparency है। Block deal window (8:45-9:00 AM) large institutional trades accommodate करता है लेकिन यह pre-trade transparency maintain करता है। US market structure fundamentally different है।</p>

<p>Indian investors US stocks track करते समय dark pool dynamics समझना ज़रूरी है। जब Brefyr पर tracked stock 3x average volume trade करता है लेकिन price barely moves, institutional block matching dark pools में likely explanation है — large buyers और sellers off-exchange मिले बिना public market compete किए।</p>
`,
};
