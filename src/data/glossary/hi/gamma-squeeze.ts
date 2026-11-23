import type { GlossaryTerm } from "../../types";

export const termGammaSqueezeHi: GlossaryTerm = {
  slug: "gamma-squeeze",
  term: "Gamma Squeeze (गामा स्क्वीज़)",
  title: "Gamma Squeeze — Options Market Mechanics Stock Moves कैसे Amplify करती हैं",
  shortDefinition:
    "Gamma squeeze तब होता है जब market makers जिन्होंने call options sell किए हैं उन्हें stock price rise होने पर increasing amounts of stock buy करना पड़ता है exposure hedge करने के लिए, feedback loop create होता है जो price move amplify करता है।",
  metaDescription:
    "Gamma squeeze क्या है? Dealer hedging through gamma self-reinforcing stock price moves कैसे create करती है, short squeezes से कैसे different है, और GameStop जैसे events में role।",
  wordCount: 460,
  category: "Market Structure",
  tags: ["gamma-squeeze", "options", "gamma", "delta-hedging", "market-maker", "volatility"],
  relatedSlugs: ["short-squeeze", "options", "call-option", "market-maker", "implied-volatility"],
  relatedTerms: ["short-squeeze", "options", "call-option", "market-maker", "implied-volatility"],
  faq: [
    {
      question: "Options context में gamma क्या है?",
      answer:
        "Gamma option के delta change की rate है stock price move होने पर। Delta measure करता है option price $1 stock move पर कितना change। Gamma बताता है sensitivity कितनी fast change हो रहा है। 0.30 delta और 0.05 gamma वाला call → $1 stock rise के बाद delta 0.35। Gamma ATM options near expiration पर highest। Market maker calls sell करे तो 'short gamma' है — stock rise → progressively ज़्यादा stock buy — यही gamma squeeze mechanism।",
    },
    {
      question: "Gamma squeeze short squeeze से कैसे different है?",
      answer:
        "Short squeeze: short sellers forced stock buy। Gamma squeeze: market makers forced stock buy options exposure hedge करने। दोनों forced buying feedback loops create, अक्सर simultaneously होते हैं — GameStop दोनों था। Key difference: short squeeze requires high short interest; gamma squeeze requires high call option open interest और volume, especially near-term ATM/slightly OTM calls जिनका gamma highest।",
    },
    {
      question: "Gamma squeeze reverse (downward) हो सकता है?",
      answer:
        "हाँ। Market makers short put options हों (common), declining stock price puts का delta increase करती है, market makers stock sell करने force → price और नीचे → downward spiral। February 2018 'Volmageddon' selloff और March 2020 COVID crash में यह dynamic contribute। Protective puts at-the-money become होने पर gamma-driven selling fundamentals से far beyond move accelerate कर सकती है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Gamma squeeze market-structure phenomenon है जहाँ options hedging mechanics stock buying (या selling) का self-reinforcing cycle create करती हैं। तब होता है जब market makers जिन्होंने call options sell किए हैं उन्हें continuously increasing amounts of stock buy करना पड़ता है delta-neutral रहने के लिए जैसे stock price rise। उनकी buying price और ऊपर push → और ज़्यादा buying required — feedback loop driven by options hedging mathematics, fundamental news या investor sentiment से नहीं।</p>

<h2>Delta Hedging — The Mechanism</h2>

<p>Market maker customer को call option sell करे तो exposure लेता है: stock rise → call पर loss। Risk neutralize करने के लिए underlying stock shares buy करता है option के delta proportion में। Delta 0.30 है तो 30 shares/contract (100 shares represent) buy। यह <strong>delta hedging</strong> है।</p>

<p>Stock price rise → call delta increase (option ज़्यादा sensitive) → market maker additional shares buy to maintain delta-neutral। Stock further rise → delta again increase → more buying। यह gamma effect — gamma measure करता है delta कितनी fast change।</p>

<p>Unusually large open call interest हो (dealers ने many call options sell किए) तो hedging flow total stock volume का significant percentage बन जाता है। Dealers की forced buying stock price move करती है → more buying required → squeeze।</p>

<h2>Gamma Squeeze Create करने वाली Conditions</h2>

<ul>
<li><strong>High call option volume और open interest:</strong> Dealers ने ज़्यादा calls sell किए = price rise पर ज़्यादा stock buy। Retail traders short-dated OTM calls buy → conditions create।</li>
<li><strong>Near-term expiration:</strong> Expiration near options का highest gamma। 2% OTM call 1 day expiration — 3% stock move से 0.20 delta → 1.00 delta → dealer 80 additional shares/contract buy single session में।</li>
<li><strong>Low stock float और volume:</strong> Fewer freely tradable shares = dealer hedging flow total volume का larger fraction = ज़्यादा price impact।</li>
<li><strong>Momentum-driven call buying:</strong> Retail traders stock rise देखें → more calls buy → dealers more calls sell → short gamma exposure increase। Positive feedback loop — GameStop event इसलिए explosive था।</li>
</ul>

<h2>GameStop में Gamma की Role</h2>

<p>GameStop January 2021 short squeeze (100%+ short interest) + gamma squeeze (massive retail call buying) combine। Options data analysis दिखाता है dealers tens of thousands call contracts across multiple strikes पर short थे। Stock हर strike — $20, $30, $60, $100, $200 — through move करते gamma exposure forced additional hedging purchases। Straight line rise नहीं; call strikes clusters through accelerate।</p>

<h2>Gamma Exposure (GEX) as Market Indicator</h2>

<p>कुछ analysts aggregate <strong>gamma exposure (GEX)</strong> calculate करते हैं — given stock price change पर dealers को कितना delta-hedging volume execute करना होगा। Positive GEX = dealers long gamma (rallies में sell, dips में buy — volatility dampen)। Negative GEX = dealers short gamma (rallies में buy, dips में sell — volatility amplify)। Negative GEX environments = gamma squeezes।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में Nifty options पर gamma dynamics similar impact करती हैं — weekly expiry Thursdays पर gamma exposure highest होती है। US market में company fundamentals (filings में reflected) और short-term price action disconnect हो तो gamma squeeze mechanics — options chain में visible — अक्सर explanation है। Brefyr पर SEC filings track करके fundamental vs technical move distinguish करें।</p>
`,
};
