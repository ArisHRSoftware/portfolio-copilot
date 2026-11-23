import type { GlossaryTerm } from "../../types";

export const termLimitOrderHi: GlossaryTerm = {
  slug: "limit-order",
  term: "Limit Order (लिमिट ऑर्डर)",
  title: "Limit Order — Stock की Price आप Control करें, Market नहीं",
  shortDefinition:
    "Limit order एक instruction है जो specified price या उससे better price पर ही security buy या sell करता है। Price guarantee है, लेकिन execution guarantee नहीं — अगर market आपकी price तक नहीं पहुँचा तो order unfilled रहता है।",
  metaDescription:
    "Limit order क्या है? Buy और sell limit orders कैसे काम करते हैं, time-in-force options, partial fills, और Indian investors के लिए US stock trading में limit orders क्यों ज़रूरी हैं।",
  wordCount: 460,
  category: "Trading",
  tags: ["limit-order", "order-types", "trading", "price-control", "execution"],
  relatedSlugs: ["market-order", "stop-loss", "bid-ask-spread", "after-hours-trading"],
  relatedTerms: ["market-order", "stop-loss", "bid-ask-spread", "after-hours-trading"],
  faq: [
    {
      question: "Limit order fill नहीं हुआ तो क्या होता है?",
      answer:
        "Order अपनी time-in-force setting के अनुसार open रहता है। Day order trading session के end में expire हो जाता है (4:00 PM ET)। GTC (Good-til-canceled) order broker-defined period (typically 60-90 days) तक active रहता है। अगर market आपकी limit price तक नहीं पहुँचा, order cancel हो जाता है — कोई cost नहीं, बस missed opportunity।",
    },
    {
      question: "Limit order specified price से better price पर भी fill हो सकता है?",
      answer:
        "हाँ। Limit order guaranteed price या better देता है। अगर आपने $50 पर buy limit लगाया और stock $48 पर trade हो रहा है, तो order $48 पर fill होगा, $50 पर नहीं। Buy limit ceiling है (इससे ज़्यादा नहीं) और sell limit floor है (इससे कम नहीं)।",
    },
    {
      question: "Indian investors को US stocks में limit order क्यों prefer करना चाहिए?",
      answer:
        "RBI LRS $250,000/year limit में हर dollar important है। Vested, INDMoney, Groww जैसे platforms से trade करते समय INR→USD conversion already एक cost है। Limit order exact price guarantee करता है, slippage eliminate करता है। Especially after-hours trading में (जब Indian investors active होते हैं IST time zone के कारण) सिर्फ limit orders ही accept होते हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Limit order आपको trade execute होने की price पर control देता है। Buy limit order में आप maximum price specify करते हैं जो आप pay करने को तैयार हैं। Sell limit order में minimum price specify करते हैं जो आप accept करेंगे। Order सिर्फ तभी execute होता है जब market आपकी price या उससे better price offer करता है।</p>

<p>यह price control एक trade-off के साथ आता है: <a href="/glossary/market-order">market order</a> के विपरीत, limit order execution guarantee नहीं करता। अगर stock आपकी limit price तक नहीं पहुँचा, order unfilled रहता है।</p>

<h2>Limit Order कैसे काम करता है</h2>

<p><strong>Buy limit at $50:</strong> "यह stock तभी खरीदो जब $50 या उससे कम मिले।" Ask price $50 या नीचे आने पर exchange order match और fill करता है।</p>

<p><strong>Sell limit at $100:</strong> "यह stock तभी बेचो जब $100 या उससे ज़्यादा मिले।" Bid price $100 या ऊपर पहुँचने पर order execute होता है।</p>

<p>Limit orders <a href="/glossary/bid-ask-spread">bid-ask spread</a> के साथ interact करते हैं। अगर stock $49.90 bid / $50.10 ask पर quoted है और आप $50.00 पर buy limit लगाते हैं, आपका order bid side पर $50.00 पर enter होता है — spread narrow होता है।</p>

<h2>Time-in-Force Settings</h2>

<p>हर limit order के साथ एक time-in-force (TIF) instruction होती है:</p>

<ul>
<li><strong>Day order:</strong> Current trading session (4:00 PM ET) के close पर expire। ज़्यादातर platforms पर default है।</li>
<li><strong>GTC (Good-til-canceled):</strong> Fill होने या manually cancel करने तक active रहता है (broker maximum typically 60-90 days)।</li>
<li><strong>IOC (Immediate-or-cancel):</strong> Limit price पर जितना available है उतना तुरंत fill, बाकी cancel।</li>
<li><strong>FOK (Fill-or-kill):</strong> पूरा order limit price पर तुरंत fill होना चाहिए, नहीं तो पूरा cancel।</li>
<li><strong>Extended hours:</strong> कुछ brokers <a href="/glossary/pre-market-trading">pre-market</a> और <a href="/glossary/after-hours-trading">after-hours</a> में limit orders allow करते हैं — extended hours में सिर्फ limit orders ही permitted हैं।</li>
</ul>

<h2>Limit Order कब Use करें</h2>

<p>Limit orders इन situations में <a href="/glossary/market-order">market orders</a> से better हैं:</p>

<ul>
<li><strong>Illiquid stocks:</strong> Small-cap stocks में wide spreads होते हैं। $0.50 spread वाले stock पर market order implicit $0.25/share cost लगाता है।</li>
<li><strong>Volatile markets:</strong> Earnings releases, macro events के दौरान spreads widen होते हैं। Limit order inflated price पर buying या depressed price पर selling prevent करता है।</li>
<li><strong>Specific entry points:</strong> Technical analysis से support/resistance levels पर entry/exit target करने के लिए limit orders automate execution।</li>
<li><strong>Large orders:</strong> 10,000 shares का market order mid-cap stock की price move कर सकता है। Limit order per-share cost cap करता है।</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>NSE/BSE पर भी limit orders same concept से काम करते हैं। US market में Indian investors के लिए limit orders especially important हैं क्योंकि:</p>

<ul>
<li><strong>After-hours trading:</strong> IST time zone में US market close के बाद active होते हैं — सिर्फ limit orders accepted हैं</li>
<li><strong>Currency impact:</strong> LRS remittance cost + slippage = unnecessary drain। Limit order slippage eliminate करता है</li>
<li><strong>Disciplined investing:</strong> SEC filings analyze करने के बाद target price decide करें, limit order लगाएँ, और wait करें</li>
</ul>

<p>Brefyr पर SEC filings research करने के बाद informed limit orders set करें — आपकी analysis जिस price support करती है, उसी price पर buy करें, market के mood पर नहीं।</p>
`,
};
