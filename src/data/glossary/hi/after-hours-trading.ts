import type { GlossaryTerm } from "../../types";

export const termAfterHoursTradingHi: GlossaryTerm = {
  slug: "after-hours-trading",
  term: "After-Hours Trading (आफ्टर-आवर्स ट्रेडिंग)",
  title: "After-Hours Trading — Market Close के बाद Stocks कैसे Buy/Sell करें",
  shortDefinition:
    "After-hours trading regular market 4:00 PM Eastern Time पर close होने के बाद electronic exchanges पर stocks buy/sell करना है, typically 8:00 PM ET तक ECN (Electronic Communication Network) platforms through available।",
  metaDescription:
    "After-hours trading क्या है? Extended-hours sessions कैसे काम करती हैं, wider spreads और low liquidity के risks, earnings reactions after hours क्यों होती हैं, और practical tips।",
  wordCount: 440,
  category: "Trading",
  tags: ["after-hours-trading", "extended-hours", "ecn", "liquidity", "earnings"],
  relatedSlugs: ["pre-market-trading", "limit-order", "bid-ask-spread", "market-order"],
  relatedTerms: ["pre-market-trading", "limit-order", "bid-ask-spread", "market-order"],
  faq: [
    {
      question: "After hours stocks इतना ज़्यादा क्यों move करते हैं?",
      answer:
        "ज़्यादातर after-hours price moves earnings announcements की reactions हैं। Majority US companies 4:00 PM close के बाद (या 9:30 AM open से पहले) report करती हैं। After-hours liquidity regular-hours volume का fraction — modest buying/selling pressure exaggerated swings cause। Regular hours में 3% move same news पर after hours 8-10% हो सकता है thin order books और wider spreads से। भारतीय investors IST 1:30 AM - 5:30 AM window में live reactions देख सकते हैं।",
    },
    {
      question: "After-hours trading में market orders use कर सकते हैं?",
      answer:
        "ज़्यादातर brokers after-hours sessions में सिर्फ limit orders accept करते हैं। Market orders reject या next regular session तक hold। Wide spreads protection — stock $1.00 spread after hours (vs $0.02 regular) → market order terrible price पर fill। Always limit orders use करें extended hours में — conservative pricing।",
    },
    {
      question: "After-hours trading सभी investors के लिए available है?",
      answer:
        "ज़्यादातर major online brokers after-hours trading offer करते हैं, कुछ opt-in या risk acknowledgement require। Typical session 4:00-8:00 PM ET, कुछ brokers 11:59 PM तक extend। सभी securities available नहीं — generally major exchanges (NYSE, Nasdaq) listed stocks। Options, mutual funds after hours trade नहीं। Indian investors Vested, INDMoney जैसे platforms से after-hours trading access limited हो सकती है — Interactive Brokers full extended hours provide करता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>After-hours trading stock market day regular 9:30 AM - 4:00 PM ET session से beyond extend करती है। ECNs through investors 4:00 PM - 8:00 PM ET (कुछ brokers और late) trade कर सकते हैं। यह window year की कुछ सबसे significant stock moves capture करती है — earnings reactions, breaking news, after-close announcements सब after-hours session में play out।</p>

<h2>After-Hours Trading कैसे काम करती है</h2>

<p>Regular hours में orders public exchanges (NYSE, Nasdaq) पर route — full ecosystem of market makers, institutional traders, retail investors deep liquidity provide। 4:00 PM बाद main exchanges close लेकिन ECNs orders electronically match करते रहते हैं।</p>

<p>Regular hours से key differences:</p>

<ul>
<li><strong>Lower volume:</strong> After-hours volume typically regular-hours का 5-10%। Day में millions shares trade करने वाले stocks after hours tens of thousands।</li>
<li><strong>Wider spreads:</strong> Fewer participants → bid-ask gap dramatically expand। Day में $0.01 spread after hours $0.10-$1.00 हो सकता है।</li>
<li><strong>Limit orders only:</strong> ज़्यादातर brokers extended hours में limit orders require — thin markets में poor fills protection।</li>
<li><strong>No stop-loss orders:</strong> Stop orders typically extended hours function नहीं करते।</li>
<li><strong>Price volatility:</strong> Thin order books से individual trades price significantly move कर सकते हैं।</li>
</ul>

<h2>Earnings Season और After-Hours Activity</h2>

<p>After-hours trading matter करने का primary reason earnings है। Approximately 70% S&P 500 companies 4:00 PM close के बाद quarterly results report। Initial reaction — release के बाद पहले 15-30 minutes — next regular session opening price set करती है।</p>

<p>Reactions dramatic हो सकती हैं: earnings beat wide margin से → 10-15% jump; miss → similar decline। 8-K filing earnings release associated EDGAR system पर after-hours session में या shortly बाद hit।</p>

<p>लेकिन after-hours reaction always final word नहीं। बहुत से large moves next day close तक partially या completely reverse। Studies दिखाती हैं after-hours earnings reaction tend to overreact — 10% jump settle 6-7% gain by next close।</p>

<h2>After-Hours Trading के Specific Risks</h2>

<ul>
<li><strong>Unfavorable fills:</strong> Limit orders पर भी thin liquidity = long wait या no fill। Fill मिले तो reasonable price पर exit buyer/seller नहीं मिलता।</li>
<li><strong>Information asymmetry:</strong> Professional/institutional traders earnings releases तक faster access। Retail investors headline देखने तक initial move already reflected।</li>
<li><strong>Price gaps:</strong> After-hours close → pre-market open next morning — कोई trading नहीं। Overnight developments gap create।</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>Indian investors US after-hours trading IST late night/early morning access कर सकते हैं — roughly 1:30 AM - 5:30 AM IST (summer)। Vested और INDMoney extended hours support limited है; Interactive Brokers full access। After-hours earnings reactions monitor करें — Brefyr पर filing timing track करने से 5:30 PM EDT EDGAR hit context मिलता है कि after-hours move filing-driven है या speculative। Wait करना next regular session तक often better decision।</p>
`,
};
