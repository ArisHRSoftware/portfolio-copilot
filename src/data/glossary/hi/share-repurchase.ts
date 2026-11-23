import type { GlossaryTerm } from "../../types";

export const termShareRepurchaseHi: GlossaryTerm = {
  slug: "share-repurchase",
  term: "Share Repurchase / Buyback (शेयर बायबैक)",
  title: "Share Repurchase — Companies अपने Shares क्यों और कैसे वापस खरीदती हैं",
  shortDefinition:
    "Share repurchase (stock buyback) तब होता है जब company अपने outstanding shares market से वापस खरीदती है — total shares in circulation reduce होते हैं और हर remaining shareholder की ownership percentage increase होती है।",
  metaDescription:
    "Share repurchase क्या है? Stock buybacks कैसे काम करते हैं, companies shares क्यों buyback करती हैं, buybacks debate, और SEC filings में repurchase activity कैसे track करें।",
  wordCount: 450,
  category: "Corporate Actions",
  tags: ["share-repurchase", "buyback", "capital-return", "treasury-stock", "corporate-action"],
  relatedSlugs: ["treasury-stock", "dividend", "special-dividend", "free-cash-flow", "ebitda"],
  relatedTerms: ["treasury-stock", "dividend", "special-dividend", "free-cash-flow", "ebitda"],
  faq: [
    {
      question: "Share buybacks investors के लिए अच्छे हैं?",
      answer:
        "Price paid पर depend करता है। Intrinsic value से नीचे buyback से remaining shareholders benefit — larger percentage at good price। Company overp pay करे (highest prices पर aggressively buy) तो value destroy। Key metric: buyback price intrinsic value per share से नीचे है या नहीं। Critics argue कई companies buybacks EPS और stock price prop up करने के लिए use करती हैं executive compensation purposes से।",
    },
    {
      question: "Buybacks EPS कैसे affect करते हैं?",
      answer:
        "Buybacks share count reduce करते हैं — mechanically EPS increase होता है even if net income flat। $1 billion earnings, 500 million shares: EPS $2.00। 50 million shares buyback: EPS $2.22 same earnings पर। इसलिए कुछ analysts buybacks adjust करके EPS growth evaluate करते हैं — company ने buybacks alone से 10% EPS grow किया, business actually grow नहीं हुआ। Total net income growth देखें, सिर्फ per-share growth नहीं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Share repurchase — commonly stock buyback — तब होता है जब company अपना cash use करके open market या structured programs से अपने shares खरीदती है। Repurchased shares या तो retire हो जाते हैं (permanently share count reduce) या treasury stock के रूप में hold होते हैं। Shares outstanding reduce करके, buybacks <strong>हर remaining shareholder की proportional ownership increase</strong> करते हैं company की earnings, cash flows, और assets में।</p>

<h2>Buybacks कैसे काम करते हैं</h2>

<p><strong>Open market repurchases।</strong> सबसे common method। Company broker through open market पर shares buy करती है। SEC Rule 10b-18 safe harbor provide करता है — specific conditions follow करने पर market manipulation charges से protection।</p>

<p><strong>Accelerated share repurchase (ASR)।</strong> Company investment bank से contract करती है, lump sum pay करती है। Bank immediately large block of shares deliver करता है, weeks/months में open market पर purchase करता है।</p>

<p><strong>Tender offer repurchase।</strong> Company formally offer करती है specified shares fixed price पर buy करने की — usually market price premium। Large block quickly repurchase करने के लिए।</p>

<h2>Companies Shares क्यों Buyback करती हैं</h2>

<p><strong>Excess capital return।</strong> Operations, capex, strategic investments से ज़्यादा cash generate हो तो shareholders को return — buybacks dividends से ज़्यादा flexibility देते हैं।</p>

<p><strong>Undervaluation signal।</strong> Management believe करे stock undervalued है — company's money conviction के पीछे लगाना strong signal।</p>

<p><strong>EPS management।</strong> Share count reduce करके EPS increase — analyst estimates meet करने और executive compensation targets hit करने में help।</p>

<p><strong>Dilution offset।</strong> Employee stock options, RSU vesting, equity acquisitions से ongoing dilution offset।</p>

<h2>Buyback Activity का Scale</h2>

<p>S&P 500 companies ने recent years में $800 billion+ annually buybacks पर spend किया। Apple अकेले ने 2012 से $600 billion+ stock repurchase किया — share count approximately 40% reduce।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI buyback regulations different structure follow करती हैं — tender offer route mandatory certain cases में। US stocks hold करने वाले investors को buyback activity track करनी चाहिए — capital allocation decisions company value significantly impact करती हैं। 2023 से US में 1% excise tax net repurchases पर लागू।</p>

<p>Brefyr 10-K/10-Q से buyback disclosure tables extract करता है और 8-Ks में new authorization announcements track करता है।</p>
`,
};
