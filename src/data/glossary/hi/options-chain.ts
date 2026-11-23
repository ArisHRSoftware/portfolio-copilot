import type { GlossaryTerm } from "../../types";

export const termOptionsChainHi: GlossaryTerm = {
  slug: "options-chain",
  term: "Options Chain (ऑप्शंस चेन)",
  title: "Options Chain — Available Options Contracts का Complete Menu कैसे पढ़ें",
  shortDefinition:
    "Options chain एक table है जिसमें stock के सभी available options contracts listed होते हैं, expiration date और strike price से organized, हर contract की prices, volume, open interest, और key metrics दिखाते हुए।",
  metaDescription:
    "Options chain क्या है? Options chain कैसे पढ़ें, bid/ask, open interest, volume, Greeks समझें, और informed options trading decisions के लिए chain कैसे use करें।",
  wordCount: 460,
  category: "Trading",
  tags: ["options-chain", "options", "open-interest", "volume", "greeks", "trading"],
  relatedSlugs: ["options", "strike-price", "implied-volatility", "call-option", "put-option"],
  relatedTerms: ["options", "strike-price", "implied-volatility", "call-option", "put-option"],
  faq: [
    {
      question: "Options chain में open interest क्या बताता है?",
      answer:
        "Open interest outstanding options contracts की total number है जो open किए गए लेकिन अभी तक close, exercise, या expire नहीं हुए। Particular strike पर high open interest significant existing positions indicate करता है। Stock जब high open interest वाली strike approach करता है, price action 'sticky' हो सकता है क्योंकि dealers hedging dynamically stock buy/sell करते हैं उस level के around। India में NSE options chain पर भी same data available है।",
    },
    {
      question: "Volume और open interest में क्या difference है?",
      answer:
        "Volume = आज कितने contracts trade हुए। Open interest = total outstanding contracts। High volume on low open interest = new positions open हो रहे हैं। High volume on decreasing open interest = existing positions close हो रहे हैं। New positions fresh conviction signal करती हैं; closing positions profit-taking या capitulation signal करती हैं।",
    },
    {
      question: "Chain में सबसे liquid options contracts कैसे find करें?",
      answer:
        "Highest open interest + volume combination देखें tightest bid-ask spreads के साथ। ATM options typically most liquid होते हैं। Near-term expirations distant से ज़्यादा liquid। SPY जैसे broad market ETFs पर nearly हर strike liquid है। Individual stocks पर liquidity round-number strikes ($50, $100) और current price के near concentrate होती है। 100 से कम open interest या 10% mid-price से wider spreads वाले contracts avoid करें।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Options chain stock के लिए available options contracts की complete inventory है। यह हर strike price और expiration date combination दिखाती है, साथ में price, volume, open interest, और calculated Greeks। Options chain पढ़ना options trading का essential skill है — यह बताता है market क्या price कर रहा है, liquidity कहाँ है, और दूसरे traders कैसे positioned हैं।</p>

<h2>Options Chain की Anatomy</h2>

<p>Typical options chain calls left side पर और puts right side पर organized होती है, strike prices vertically center में। हर contract के लिए chain display करती है:</p>

<ul>
<li><strong>Bid/Ask:</strong> Current bid (buyer highest price pay करेगा) और ask (seller lowest price accept करेगा)। Spread entering trade की implicit cost है।</li>
<li><strong>Last price:</strong> Most recent trade का price। Illiquid contracts के लिए stale हो सकता है।</li>
<li><strong>Volume:</strong> आज trade हुए contracts। High volume = active trading interest।</li>
<li><strong>Open interest:</strong> Total outstanding contracts। Cumulative positioning represent करता है उस strike और expiration पर।</li>
<li><strong>Implied volatility:</strong> Market's expected annualized volatility, option price से derived। हर contract का अपना IV होता है, strikes across IV vary करता है (volatility skew)।</li>
<li><strong>Greeks:</strong> Delta (stock movement sensitivity), gamma (delta change rate), theta (daily time decay), vega (IV sensitivity)। Risk exposures quantify करते हैं।</li>
</ul>

<h2>Options Chain कैसे Read करें</h2>

<p>पहले expiration date select करें। Chain उस expiration की सभी strikes दिखाती है। Current stock price से ऊपर strikes calls के लिए OTM (differently highlighted); नीचे strikes puts के लिए OTM।</p>

<p>ATM strike — current stock price के closest — focal point है। ATM options highest time value, most liquidity, calls के लिए ~0.50 delta (puts के लिए ~-0.50)। ATM से दूर जाने पर options cheaper लेकिन profit probability कम।</p>

<p>Chain market expectations reveal करती है। ATM straddle (call + put) $10 cost $100 stock पर → market ~10% move expect करता है expiration तक। Open interest particular strike पर concentrated है तो वो level stock price के लिए magnet या barrier है dealer hedging dynamics की वजह से।</p>

<h2>Open Interest Analysis</h2>

<p>Open interest concentration बताती है traders ने bets कहाँ लगाए हैं। $50 call strike पर large cluster = traders expect करते हैं stock $50+ reach करे। $40 put strike पर large cluster = $40 तक decline पर bet या protection।</p>

<p>"Max pain" theory कहती है stocks expiring options की total value minimize होने वाली strike की तरफ gravitate करते हैं। Reliable prediction tool नहीं, लेकिन dealers के dynamic hedging की reality reflect करती है।</p>

<h2>Unusual Options Activity Spot करना</h2>

<p>Normally 50 contracts/day trade करने वाला contract suddenly 5,000 trade करे — कुछ बदला है। Volume को open interest changes से compare करें (opening या closing trades), और trades ask पर buy हुए (bullish) या bid पर sell (bearish/income) — institutional conviction SEC filings में appear होने से पहले signal हो सकता है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में NSE website और trading platforms पर Nifty/Bank Nifty options chain easily available है — format same है। US market options chain data 13F filings timing से पहले institutional positioning दिखाता है। Brefyr पर filings track करें और options chain data combine करें — smart money positioning identify करने के लिए।</p>
`,
};
