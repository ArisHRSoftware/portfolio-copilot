import type { GlossaryTerm } from "../../types";

export const term13FFilingHi: GlossaryTerm = {
  slug: "13f-filing",
  term: "13F फाइलिंग (13F Filing)",
  title: "13F फाइलिंग — Institutional Investors की Holdings कैसे Track करें",
  shortDefinition:
    "13F-HR एक quarterly SEC filing है जो $100 million से ज़्यादा manage करने वाले institutional investment managers को file करनी होती है, जिसमें उनकी US equity holdings की पूरी list होती है।",
  metaDescription:
    "13F filing क्या है? जानें कैसे hedge funds, mutual funds, और institutional investors की holdings track करें। Warren Buffett की Berkshire Hathaway भी 13F file करती है।",
  wordCount: 600,
  category: "SEC Filings",
  tags: ["sec-filing", "institutional-investors", "13f", "hedge-funds"],
  relatedSlugs: ["10-k-filing", "form-4", "sec-edgar", "beneficial-owner"],
  relatedTerms: ["10-k-filing", "form-4", "sec-edgar", "beneficial-owner"],
  faq: [
    {
      question: "13F filing में कौन सी information मिलती है?",
      answer:
        "13F में institutional manager की सभी US-listed equity holdings की list होती है — stock name, shares held, और market value। लेकिन यह quarter-end की snapshot होती है, real-time holdings नहीं। Filing deadline quarter end के 45 days बाद है, तो data 1-2 months पुरानी हो सकती है।",
    },
    {
      question: "Warren Buffett की holdings कैसे देखें?",
      answer:
        "Berkshire Hathaway 13F-HR file करती है जो EDGAR पर free में available है। Brefyr पर Berkshire Hathaway की stock page पर direct EDGAR link मिलता है। लेकिन याद रखें — 13F data delayed होता है, Buffett ने filing date तक positions change कर दी हो सकती हैं।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>13F-HR filing institutional investment managers की सबसे important public disclosure है। SEC require करता है कि हर manager जो $100 million से ज़्यादा US equities manage करता है, उसे quarterly 13F file करनी होगी। इसमें उनकी सभी US-listed stock holdings की complete list होती है।</p>

<p>दुनिया के सबसे बड़े investors — Warren Buffett (Berkshire Hathaway), Ray Dalio (Bridgewater), Cathie Wood (ARK Invest) — सब 13F file करते हैं। यह retail investors के लिए एक window है कि "smart money" कहाँ invest कर रहा है।</p>

<h2>13F में क्या होता है</h2>

<p>13F filing में हर US-listed equity holding report होती है:</p>
<ul>
<li><strong>Company name और CUSIP</strong> — कौन सा stock</li>
<li><strong>Shares held</strong> — कितने shares</li>
<li><strong>Market value</strong> — quarter-end market value</li>
<li><strong>Investment discretion</strong> — sole, shared, या other</li>
<li><strong>Voting authority</strong> — किसके पास voting rights हैं</li>
</ul>

<h2>13F की Limitations</h2>

<p><strong>45-day delay:</strong> 13F quarter end के 45 days बाद file होती है। Q4 (December 31) की 13F February 14 तक file होती है। इस बीच manager ने positions significantly change कर दी हो सकती हैं।</p>

<p><strong>Only US equities:</strong> 13F में bonds, foreign stocks, derivatives, और short positions report नहीं होतीं। एक hedge fund जिसने Apple long किया है लेकिन Tesla short — 13F में केवल Apple दिखेगा।</p>

<p><strong>Copycat risk:</strong> सिर्फ इसलिए कि Buffett ने कुछ खरीदा, आपको खरीदना चाहिए — ऐसा नहीं है। 13F data पुरानी है और बड़े investors का investment thesis आपसे बहुत different हो सकता है।</p>

<h2>भारतीय निवेशकों के लिए 13F</h2>

<p>Indian investors के लिए 13F एक powerful research tool है:</p>

<p><strong>Concentration analysis:</strong> अगर आप Vested या INDMoney से किसी small-cap stock में invest कर रहे हैं, तो 13F check करें — कितने institutional investors उस stock में हैं? Zero institutional ownership एक warning sign हो सकता है (या एक opportunity, अगर fundamentals strong हैं)।</p>

<p><strong>Trend tracking:</strong> Quarter-over-quarter 13F compare करने से पता चलता है कि institutions किस sector में allocation बढ़ा रहे हैं और कहाँ से exit कर रहे हैं। यह macro-level insight Indian retail investors को rarely मिलती है।</p>

<p>Brefyr पर institutional ownership data हर company की stock page पर available है, 13F filings से automatically extracted।</p>
`,
};
