import type { GlossaryTerm } from "../../types";

export const termStopLossHi: GlossaryTerm = {
  slug: "stop-loss",
  term: "Stop-Loss Order (स्टॉप-लॉस ऑर्डर)",
  title: "Stop-Loss Order — Automatically अपना Downside Risk Limit करें",
  shortDefinition:
    "Stop-loss order एक risk management tool है जो stock price specified level तक गिरने पर automatically sell order trigger करता है। यह market order में convert हो जाता है और loss limit करने के लिए design किया गया है।",
  metaDescription:
    "Stop-loss order क्या है? Stop-loss और stop-limit orders कैसे काम करते हैं, gap-down risk, trailing stops, और भारतीय निवेशकों के लिए portfolio protection strategies।",
  wordCount: 470,
  category: "Trading",
  tags: ["stop-loss", "order-types", "risk-management", "trading", "stop-limit"],
  relatedSlugs: ["market-order", "limit-order", "short-selling", "circuit-breaker"],
  relatedTerms: ["market-order", "limit-order", "short-selling", "circuit-breaker"],
  faq: [
    {
      question: "Stop-loss और stop-limit order में क्या difference है?",
      answer:
        "Stop-loss order trigger होने पर market order बन जाता है — execution guaranteed है लेकिन specific price नहीं। Stop-limit order trigger होने पर limit order बन जाता है — minimum price guaranteed है लेकिन execution नहीं। अगर stock overnight gap-down करता है (मान लें $50 से $40), stop-limit at $48 कभी fill नहीं होगा क्योंकि stock already $40 पर है — आप position में फँसे रहते हैं। Stop-loss execute ज़रूर होगा, भले ही worse price पर।",
    },
    {
      question: "Stop-loss कितना नीचे set करना चाहिए current price से?",
      answer:
        "कोई universal answer नहीं है — stock की volatility, risk tolerance, और time horizon पर depend करता है। Common approach: stock के ATR (Average True Range) का 1.5-2x entry price से नीचे। Less volatile stocks के लिए 5-8% नीचे reasonable है। Volatile growth stocks के लिए 15-20% ज़रूरी हो सकता है normal fluctuations से bachne के लिए। बहुत tight stop whipsaw (premature exit) करता है; बहुत loose stop risk management defeat करता है।",
    },
    {
      question: "After-hours में stop-loss trigger होता है?",
      answer:
        "ज़्यादातर brokers पर standard stop-loss orders सिर्फ regular market hours (9:30 AM - 4:00 PM ET) में active हैं। After-hours या pre-market price movements पर trigger नहीं होते। अगर stock after-close earnings miss पर 30% गिरता है, आपका stop-loss अगले दिन opening price पर trigger होगा — जो stop price से काफी नीचे हो सकता है। Indian investors ध्यान रखें — earnings usually IST रात को आती हैं जब active monitoring मुश्किल है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Stop-loss order एक risk management tool है जो automatically stock sell कर देता है जब price predetermined level तक गिर जाती है। यह discipline enforce करता है: losing position देखते हुए recovery की hope करने के बजाय, stop-loss mechanically execute होता है और damage limit करता है। Concept simple है — "अगर यह stock $X तक गिरे, मुझे निकालो" — लेकिन execution details बहुत matter करते हैं।</p>

<h2>Stop-Loss Order कैसे काम करता है</h2>

<p>Stop-loss order में आप <strong>stop price</strong> set करते हैं current market price से नीचे। Order dormant रहता है जब तक stock price stop price तक गिर नहीं जाती। उस point पर stop-loss <a href="/glossary/market-order">market order</a> में convert होता है और next available price पर execute होता है।</p>

<p><strong>Example:</strong> आपने shares $60 पर खरीदे। Stop-loss $54 पर set किया (10% loss limit)। Stock $54 तक गिरता है → stop trigger → market sell order → liquid market में $54 के पास fill। Fast-moving decline में $53.50 या lower पर fill हो सकता है (slippage)।</p>

<p><strong>Critical point:</strong> Stop-loss exactly stop price पर sell guarantee नहीं करता। यह guarantee करता है कि sell order submit होगा। Actual execution price market conditions पर depend करता है।</p>

<h2>Stop-Limit Order</h2>

<p><strong>Stop-limit</strong> order price floor add करता है। Trigger होने पर market order के बजाय <a href="/glossary/limit-order">limit order</a> बनता है। Crash में terrible price पर selling से protect करता है — लेकिन risk है कि order fill ही न हो।</p>

<p>Stop-loss at $54: Stock $54 तक गिरता है, next available price पर sell — $53.80 हो सकता है, gap-down में $51 भी। Position close हो जाती है।</p>

<p>Stop-limit at $54 stop / $52 limit: Stock $54 trigger, $52 limit sell active। Stock $52-$54 के बीच है तो fill। Stock overnight $45 पर gap-down करता है → $52 limit order unfilled बैठा रहता है। आप $45 पर position hold कर रहे हैं।</p>

<h2>Trailing Stop Orders</h2>

<p>Trailing stop stock price के साथ move करता है। Fixed stop price के बजाय, trail amount (dollar या percentage) set करते हैं highest price से नीचे। Stock rise करता है, stop rise करता है। Stock reverse करता है, stop stays put।</p>

<p><strong>Example:</strong> $50 पर buy, 10% trailing stop। Initial stop $45। Stock $70 तक rise → stop $63 पर move। Stock $63 तक drop → stop trigger। $13/share profit lock — stock $50 या lower तक ride back करने के बजाय।</p>

<h2>Gap Risk — Stop-Loss की Weakness</h2>

<p>Stop-loss orders की biggest vulnerability <strong>gap risk</strong> है। Market 4 PM ET close होता है, 9:30 AM reopen। Overnight negative news — earnings miss, fraud allegation, FDA rejection — stock dramatically lower open कर सकता है, stop price completely bypass करके।</p>

<p>Indian investors के लिए यह especially relevant है: US market IST रात को trade करता है, earnings after-close IST midnight-2 AM आती हैं। आपका stop $54 पर है लेकिन stock next morning $35 पर open होता है — stop $35 के पास execute होता है।</p>

<h2>भारतीय निवेशकों के लिए Strategy</h2>

<p>NSE/BSE पर भी stop-loss orders same तरीके से काम करते हैं। US market में Indian investors के लिए:</p>

<ul>
<li><strong>Earnings dates track करें:</strong> Earnings season में stop-loss gap risk highest है</li>
<li><strong>Volatility-based stops:</strong> ATR-based stops stock की normal fluctuation accommodate करते हैं</li>
<li><strong>SEC filings combine करें:</strong> Brefyr पर Form 4 insider sales + stop-loss proximity = compound exit signal</li>
</ul>

<p>Brefyr पर SEC filings monitor करें — CFO का Form 4 large insider sale + stock approaching stop level = stop tighten करें या manually exit करें।</p>
`,
};
