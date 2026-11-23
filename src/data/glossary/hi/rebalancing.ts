import type { GlossaryTerm } from "../../types";

export const termRebalancingHi: GlossaryTerm = {
  slug: "rebalancing",
  term: "Portfolio Rebalancing (पोर्टफोलियो रीबैलेंसिंग)",
  title: "Portfolio Rebalancing — Target Asset Mix Maintain करने का Disciplined तरीका",
  shortDefinition:
    "Portfolio rebalancing एक process है जिसमें portfolio की asset allocation को periodically अपने target weights पर वापस लाया जाता है — जो assets ज़्यादा बढ़ गए हैं उन्हें बेचकर और जो कम हुए हैं उन्हें खरीदकर — यह एक disciplined buy-low, sell-high strategy enforce करती है।",
  metaDescription:
    "Portfolio rebalancing क्या है? यह कैसे काम करता है, कब और कितनी बार rebalance करना चाहिए, tax considerations, और Indian investors के लिए practical approaches।",
  wordCount: 450,
  category: "Investment Strategy",
  tags: ["rebalancing", "asset-allocation", "portfolio-management", "risk-management", "discipline"],
  relatedSlugs: ["asset-allocation", "portfolio-diversification", "tax-loss-harvesting", "index-fund"],
  relatedTerms: ["asset-allocation", "portfolio-diversification", "tax-loss-harvesting", "index-fund"],
  faq: [
    {
      question: "Portfolio को कितनी बार rebalance करना चाहिए?",
      answer:
        "Research बताता है कि specific frequency से ज़्यादा important है consistent approach। Common approaches: (1) Calendar-based — annually, semi-annually, या quarterly fixed dates पर rebalance करें। Annual rebalancing ज़्यादातर investors के लिए sufficient है। (2) Threshold-based — जब कोई asset class अपने target से 5% drift करे तभी rebalance करें। (3) Hybrid — calendar basis पर check करें और threshold exceed होने पर ही rebalance करें। बहुत ज़्यादा rebalancing (monthly) transaction costs और tax events बढ़ाती है बिना meaningful risk reduction के।",
    },
    {
      question: "Rebalancing से returns improve होते हैं?",
      answer:
        "Rebalancing primarily risk manage करता है, returns maximize नहीं करता। Outperforming asset class sell करके और underperforming buy करके, आप systematically buy-low sell-high करते हैं — counterintuitive लगता है लेकिन discipline enforce करता है। Trending markets में rebalancing returns reduce कर सकता है क्योंकि आप winners trim कर रहे हैं। Long periods में, rebalancing slightly lower returns देता है लेकिन significantly lower risk के साथ — portfolio अपना intended risk profile maintain करता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Portfolio rebalancing एक disciplined practice है जिसमें market movements के बाद portfolio को उसकी target asset allocation पर वापस लाया जाता है। अगर आपकी target allocation 70% stocks और 30% bonds है, और strong stock market ने portfolio को 80% stocks और 20% bonds पर push कर दिया, तो rebalancing में कुछ stocks sell करके bonds खरीदने होंगे ताकि 70/30 split restore हो। यह mechanical process एक <strong>buy-low, sell-high discipline</strong> enforce करता है — आप systematically उस asset class को बेच रहे हैं जो expensive हो गया है और वो खरीद रहे हैं जो relatively cheap है।</p>

<h2>Rebalancing क्यों ज़रूरी है</h2>

<p><strong>Risk management।</strong> Rebalancing के बिना, portfolio का risk profile समय के साथ बदल जाता है। 70/30 stock/bond portfolio जो bull market के बाद 85/15 पर drift हो गया, investor ने originally जितना risk choose किया था उससे काफ़ी ज़्यादा risk carry करता है। Bear market आने पर unrebalanced portfolio को ज़्यादा losses होंगे।</p>

<p><strong>Disciplined contrarianism।</strong> Rebalancing investors को वो करने पर मजबूर करती है जो psychologically difficult है: winners sell करना और losers buy करना। Stock market surge के बाद natural instinct होता है winners को ride करने देना। Rebalancing इन emotions को systematic process से override करती है।</p>

<p><strong>Plan maintain करना।</strong> Asset allocation एक reason से choose की जाती है — investor के time horizon, risk tolerance, और goals match करने के लिए। Market movements जो allocation बदल देते हैं, plan बदल रहे हैं। Rebalancing बस plan पर stick करने का mechanism है।</p>

<h2>Rebalancing Methods</h2>

<p><strong>Calendar-based।</strong> Fixed schedule पर rebalance करें — annually, semi-annually, या quarterly। Annual rebalancing सबसे common और sufficient है। कई advisors recommend करते हैं कि market events से unrelated date पर rebalance करें (जैसे birthday) emotional decision-making avoid करने के लिए।</p>

<p><strong>Threshold-based।</strong> जब कोई asset class अपने target से 5 percentage points ज़्यादा deviate करे तभी rebalance करें। यह approach unnecessary transactions avoid करता है।</p>

<p><strong>Cash flow rebalancing।</strong> Overweight positions sell करने की बजाय, new contributions (savings, dividends) underweight asset class में direct करें। यह बिना sell किए rebalancing achieve करता है — सबसे tax-efficient method है।</p>

<h2>भारतीय निवेशकों के लिए Rebalancing</h2>

<p>India में mutual fund investors SIP (Systematic Investment Plan) through invest करते हैं — लेकिन SIP automatic rebalancing नहीं करता। अगर equity allocation target से ज़्यादा बढ़ गई है, तो manually debt में shift करना पड़ेगा। Vested, INDMoney, या Groww से US stocks hold करने वाले investors को भी international और domestic allocation rebalance करनी चाहिए।</p>

<p>Brefyr पर SEC filing data से investors अपने equity portfolio की fundamental characteristics समझ सकते हैं — rebalancing process में किन positions को trim करना है और किन में add करना है, यह informed decision लेने में मदद मिलती है।</p>
`,
};
