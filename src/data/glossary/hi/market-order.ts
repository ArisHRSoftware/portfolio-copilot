import type { GlossaryTerm } from "../../types";

export const termMarketOrderHi: GlossaryTerm = {
  slug: "market-order",
  term: "Market Order (मार्केट ऑर्डर)",
  title: "Market Order — Stock तुरंत Buy या Sell करने का सबसे Fast तरीका",
  shortDefinition:
    "Market order एक instruction है जो broker को कहता है कि security को तुरंत best available price पर buy या sell करो। Execution guarantee है, लेकिन exact price की guarantee नहीं।",
  metaDescription:
    "Market order क्या है? जानें market order कैसे काम करता है, slippage का risk, limit order से कैसे different है, और Indian investors को US stocks trade करते समय क्या ध्यान रखना चाहिए।",
  wordCount: 480,
  category: "Trading",
  tags: ["market-order", "order-types", "trading", "execution", "slippage"],
  relatedSlugs: ["limit-order", "stop-loss", "bid-ask-spread", "market-maker"],
  relatedTerms: ["limit-order", "stop-loss", "bid-ask-spread", "market-maker"],
  faq: [
    {
      question: "Market order और limit order में क्या difference है?",
      answer:
        "Market order में execution guarantee है — trade ज़रूर होगा, लेकिन price uncertain है। Limit order में price guarantee है — आप specify करते हैं maximum (buy) या minimum (sell) price, लेकिन trade नहीं भी हो सकता अगर market आपकी price तक नहीं पहुँचा। Liquid large-cap stocks (Apple, Microsoft) के लिए market order ठीक है क्योंकि spread एक-दो पैसे का होता है। Illiquid small-cap stocks के लिए limit order बेहतर है।",
    },
    {
      question: "Slippage क्या है और Indian investors को क्यों care करना चाहिए?",
      answer:
        "Slippage तब होता है जब expected price और actual fill price में difference आता है। Vested या INDMoney जैसे platforms से US stocks trade करने पर time zone difference (IST रात 8 बजे के बाद US market open होता है) और lower personal engagement hours में slippage ज़्यादा हो सकता है। RBI LRS के तहत $250,000/year limit में हर dollar matters — slippage unnecessary cost है। Large-cap stocks में slippage minimal है, लेकिन volatile small-caps में significant हो सकता है।",
    },
    {
      question: "After-hours में market order use कर सकते हैं?",
      answer:
        "नहीं। ज़्यादातर brokers after-hours (4 PM ET के बाद) और pre-market (9:30 AM ET से पहले) में सिर्फ limit orders accept करते हैं। After-hours में liquidity बहुत कम होती है और spread wide होता है — market order terrible price पर fill हो सकता है। Indian investors जो late-night US market track करते हैं, उन्हें हमेशा limit order use करना चाहिए extended hours में।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Market order stock market का सबसे basic order type है। जब आप market order place करते हैं, आप broker को कह रहे हैं: "यह stock अभी खरीदो (या बेचो), जो भी best available price हो।" कोई price condition नहीं है — exchange आपके order को opposite side के best limit orders से match करता है।</p>

<p>Market orders <strong>speed को priority</strong> देते हैं price precision के ऊपर। ज़्यादातर brokerage platforms पर यह default order type है क्योंकि liquid securities में regular market hours के दौरान execution virtually guaranteed है। Trade-off यह है कि exact price आपके control में नहीं है।</p>

<h2>Market Order कैसे काम करता है</h2>

<p>जब आप market buy order submit करते हैं, exchange इसे lowest-priced sell (ask) orders से fill करता है। Market sell order highest-priced buy (bid) orders से fill होता है। Order <strong>NBBO (National Best Bid and Offer)</strong> पर execute होता है — सभी exchanges का best aggregated price।</p>

<p>Example: Stock $100.00 bid / $100.02 ask पर quoted है:</p>
<ul>
<li>Market buy order: approximately $100.02 (ask price) पर fill</li>
<li>Market sell order: approximately $100.00 (bid price) पर fill</li>
</ul>

<p>इन दोनों prices का difference <a href="/glossary/bid-ask-spread">bid-ask spread</a> है — trading की implicit cost।</p>

<h2>Slippage — Market Order का Primary Risk</h2>

<p><strong>Slippage</strong> expected execution price और actual fill price का difference है। यह इन situations में ज़्यादा होता है:</p>

<ul>
<li><strong>Low-volume stocks:</strong> Small-cap और micro-cap stocks में best price पर limited shares available होते हैं। बड़ा market order multiple price levels sweep करता है।</li>
<li><strong>Volatile moments:</strong> Earnings announcements, FDA decisions, breaking news के दौरान <a href="/glossary/market-maker">market makers</a> quotes widen कर देते हैं।</li>
<li><strong>After-hours और pre-market:</strong> Liquidity regular hours का fraction होती है। Mid-cap stocks पर $0.10 से $1.00+ spreads common हैं।</li>
<li><strong>Large orders:</strong> Best price पर available size से बड़ा order multiple price levels पर fill होता है।</li>
</ul>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में NSE/BSE पर भी market orders available हैं और concept same है। लेकिन US market access Vested, INDMoney, या Groww Global जैसे platforms से करते समय कुछ बातें ध्यान रखें:</p>

<ul>
<li><strong>Time zone:</strong> US market IST रात 8 बजे (summer) या 9:30 बजे (winter) खुलता है। Late-night trading में ध्यान कम हो सकता है — limit order ज़्यादा safe है।</li>
<li><strong>Currency conversion:</strong> RBI LRS के तहत INR→USD conversion cost already है। Slippage unnecessary extra cost add करता है।</li>
<li><strong>Large-cap stocks safe हैं:</strong> Apple, Microsoft, Amazon जैसे stocks में spread penny-level है — market order practically fine है।</li>
</ul>

<h2>Regulatory Context — SEC Rules</h2>

<p>SEC का Regulation NMS brokers को require करता है कि market orders NBBO (best publicly available price) पर route हों। लेकिन बहुत से retail brokers orders wholesale market makers (Citadel Securities, Virtu Financial) को route करते हैं <strong>payment-for-order-flow (PFOF)</strong> arrangements से। ये market makers usually slight price improvement देते हैं NBBO से better, लेकिन practice controversial है।</p>

<p>Brefyr पर SEC filings analyze करने के बाद जब trade execute करें, order type का choice important है। Large-cap blue-chip stocks में market order ठीक है, लेकिन volatile small-cap stocks में <a href="/glossary/limit-order">limit order</a> use करें — pennies की savings long-term returns में compound होती हैं।</p>
`,
};
