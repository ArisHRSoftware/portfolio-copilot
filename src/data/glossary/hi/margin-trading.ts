import type { GlossaryTerm } from "../../types";

export const termMarginTradingHi: GlossaryTerm = {
  slug: "margin-trading",
  term: "Margin Trading (मार्जिन ट्रेडिंग)",
  title: "Margin Trading — Broker से पैसा उधार लेकर Stocks कैसे खरीदें",
  shortDefinition:
    "Margin trading broker से पैसा उधार लेकर securities purchase करना है, existing holdings collateral के रूप में use करके। यह gains और losses दोनों amplify करता है, और account value बहुत गिरने पर broker forced sell कर सकता है।",
  metaDescription:
    "Margin trading क्या है? Margin accounts कैसे काम करते हैं, initial और maintenance margin requirements, margin calls, Regulation T rules, और leveraged trading के amplified risks।",
  wordCount: 470,
  category: "Trading",
  tags: ["margin-trading", "leverage", "margin-call", "regulation-t", "borrowing", "risk"],
  relatedSlugs: ["leverage", "short-selling", "market-order", "stop-loss"],
  relatedTerms: ["leverage", "short-selling", "market-order", "stop-loss"],
  faq: [
    {
      question: "Margin call क्या है और मिलने पर क्या होता है?",
      answer:
        "Margin call तब होता है जब account equity broker के maintenance margin requirement (typically 25-30% total position value) से नीचे गिर जाती है। Broker demand करता है additional cash या securities deposit करें। 2-5 business days में meet नहीं किया तो broker आपकी securities बिना consent sell कर सकता है। ये forced liquidations worst possible time — markets गिरने पर — होती हैं, losses lock कर देती हैं। India में SEBI regulated margin requirements similar concept follow करते हैं।",
    },
    {
      question: "Margin पर कितना borrow कर सकते हैं?",
      answer:
        "US में Federal Reserve Regulation T under marginable securities की purchase price का 50% तक borrow कर सकते हैं — $10,000 cash पर $20,000 stock buy। सभी securities marginable नहीं — penny stocks, IPOs (first 30 days), volatile securities eligible नहीं। India में SEBI margin rules different structure follow करती हैं — brokers pledged shares के against margin provide करते हैं, लेकिन peak margin reporting mandatory है।",
    },
    {
      question: "Margin पर borrow करने की cost कितनी है?",
      answer:
        "Brokers margin loans पर interest charge करते हैं, typically broker call rate + markup। 2025-2026 में major brokers पर margin rates 5-12% annually (balance size पर dependent)। Interest daily accrue होता है, monthly charge। $50,000 margin loan at 8% = ~$4,000/year = ~$333/month — investments profitable हों या नहीं। India में broker margin funding rates similar range में हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Margin trading मतलब broker से पैसा उधार लेकर cash alone से ज़्यादा securities buy करना। $50,000 हैं और margin use करें तो $100,000 worth stock buy सकते हैं — broker $50,000 interest पर lend करता है, securities collateral। यह leverage buying power double करता है, potential gains और losses दोनों double।</p>

<p>Margin accounts short selling, options trading, और credit पर buying के लिए required हैं। Cash accounts से distinct हैं जहाँ सिर्फ deposited money से trade होता है।</p>

<h2>Margin कैसे काम करता है</h2>

<p>Margin account open करने पर broker दो critical thresholds set करता है:</p>

<ul>
<li><strong>Initial margin (Regulation T):</strong> Securities buy करते समय minimum 50% purchase price deposit करना होगा। $100,000 stock के लिए $50,000 equity चाहिए। Broker बाकी lend करता है।</li>
<li><strong>Maintenance margin:</strong> Purchase के बाद equity minimum percentage (typically 25% exchange level, brokers 30-40% set कर सकते हैं) maintain करनी होगी। Equity threshold से नीचे → margin call।</li>
</ul>

<p><strong>Example:</strong> $50,000 cash, $100,000 stock buy on margin। Equity = $50,000 (50%)। Stock 20% drop → $80,000। Equity = $30,000 ($80,000 - $50,000 loan) = 37.5% — still above 25%। Further 15% drop → $68,000, equity $18,000 (26.5%) — approaching threshold। $66,667 पर equity exactly 25% — margin call triggered।</p>

<h2>Margin Calls और Forced Liquidation</h2>

<p>Margin call broker की demand है account compliance restore करने की। Meet करने के options: additional cash deposit, additional marginable securities deposit, या existing positions sell करके loan balance reduce। Fail करने पर broker securities — typically most liquid ones — बिना approval sell कर देगा।</p>

<p>Forced liquidation especially painful है क्योंकि market declines में होती है। Broker best, most liquid stocks sell करता है margin shortfall cover करने के लिए — worst-performing positions बचती हैं। यह margin spiral है: declining prices → margin calls → forced selling → further price depression।</p>

<h2>Margin की Cost</h2>

<p>Margin loans interest rates broker और loan size पर vary करती हैं। 6-12% annually typical। Interest daily accrue होता है और compound करता है — constant drag on returns। Margin justify करने के लिए investments margin interest rate से ज़्यादा earn करनी चाहिए taxes के बाद। 8% margin loan पर 10% portfolio return = net benefit सिर्फ 2% — amplified drawdown risk account करने से पहले।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में SEBI margin framework US से structure में different है। Indian brokers margin trading facility (MTF) offer करते हैं जहाँ pledged shares against margin मिलता है। Peak margin reporting 2021 से mandatory है — over-leveraging पर penalties। RBI LRS under US stocks invest करने वाले Indian investors Interactive Brokers जैसे US brokers पर margin facility access कर सकते हैं, लेकिन cross-border margin trading extra complexity add करती है।</p>

<p>Brefyr पर SEC filings analyze करते समय margin considerations stock selection में context add करते हैं। Margin पर purchase की गई stock margin interest rate + forced liquidation risk से ज़्यादा returns generate करनी चाहिए। Conservative investors margin sparingly use करते हैं; aggressive traders conviction trades amplify करने का core tool मानते हैं।</p>
`,
};
