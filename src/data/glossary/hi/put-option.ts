import type { GlossaryTerm } from "../../types";

export const termPutOptionHi: GlossaryTerm = {
  slug: "put-option",
  term: "Put Option (पुट ऑप्शन)",
  title: "Put Option — गिरती Stock Prices से Profit या Hedge कैसे करें",
  shortDefinition:
    "Put option एक contract है जो holder को right देता है (obligation नहीं) 100 shares underlying stock के specified strike price पर expiration date से पहले sell करने का।",
  metaDescription:
    "Put option क्या है? Put options कैसे काम करते हैं, short selling से कैसे different हैं, portfolio insurance के रूप में use, profit calculations, और SEC filings में put activity कैसे दिखती है।",
  wordCount: 480,
  category: "Trading",
  tags: ["put-option", "options", "bearish", "hedging", "portfolio-insurance"],
  relatedSlugs: ["call-option", "options", "strike-price", "short-selling", "implied-volatility"],
  relatedTerms: ["call-option", "options", "strike-price", "short-selling", "implied-volatility"],
  faq: [
    {
      question: "Put buy करना short selling से कैसे different है?",
      answer:
        "दोनों bearish strategies हैं, लेकिन risk profiles fundamentally different हैं। Short selling में potential loss unlimited है — stock कितना भी ऊपर जा सकता है। Put buy करने में maximum loss premium paid है, चाहे stock कितना भी ऊपर जाए। Puts को margin account, shares borrowing, या ongoing borrow fees की ज़रूरत नहीं। Trade-off: puts की expiration date होती है — stock decline नहीं हुआ expiration तक तो premium lost। Indian investors के लिए puts safer bearish tool हैं short selling की complexity से।",
    },
    {
      question: "Stock zero हो जाए तो put option का क्या होता है?",
      answer:
        "Put option maximum value achieve करता है जब stock zero हो। Put worth = strike price x 100 shares। $50 put अगर stock zero हो तो $50/share ($5,000/contract) worth है। Profit = $5,000 minus premium paid। यह defined maximum gain calls से contrast है जिनका upside theoretically unlimited है।",
    },
    {
      question: "कोई put option sell क्यों करेगा?",
      answer:
        "Put sell करना income generate करने या stock lower price पर acquire करने की strategy है। Put sell करने पर premium collect होता है और obligation लेते हैं कि strike price पर 100 shares buy करेंगे अगर buyer exercise करे। Stock strike से ऊपर रहा तो put expire worthless — premium pocket। Stock गिरा तो shares buy होते हैं strike price पर, लेकिन effective cost premium से reduce होता है। Value investors यह strategy use करते हैं stocks पर जो वो own करना चाहते हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Put option bearish instrument या defensive tool है, use पर depend करता है। Speculators stock decline से profit करने के लिए puts buy करते हैं। Portfolio managers existing positions को market drops से protect करने के लिए insurance के रूप में puts buy करते हैं। दोनों cases में put holder को right मिलता है 100 shares strike price पर expiration से पहले sell करने का — stock चाहे कितना भी गिर जाए।</p>

<p>Short selling की unlike, puts buy करने में defined risk है। Premium से ज़्यादा loss कभी नहीं हो सकता। यह puts को accessible bearish tool बनाता है investors के लिए जो short position की unlimited-loss exposure नहीं चाहते।</p>

<h2>Put Option कैसे काम करता है — Example</h2>

<p>आपने XYZ March $80 put $4.00 में buy किया:</p>
<ul>
<li><strong>Strike price:</strong> $80</li>
<li><strong>Premium:</strong> $4.00/share = $400 total</li>
<li><strong>Breakeven:</strong> $76 ($80 strike - $4 premium)</li>
</ul>

<p><strong>XYZ $65 पर expiration:</strong> Put worth $15 intrinsic ($80 - $65)। Profit = $15 - $4 = $11/share = $1,100 — 275% return।</p>
<p><strong>XYZ $78 पर:</strong> Put worth $2। $4 paid, $2/share loss ($200)।</p>
<p><strong>XYZ $85 पर:</strong> Put expire worthless। पूरा $400 premium lost।</p>

<h2>Puts as Portfolio Insurance</h2>

<p>Put options का सबसे sophisticated use hedging है। 10,000 shares ($100 each = $1 million position) hold करने वाला investor 100 put contracts $90 strike पर $3.00 each ($30,000 total) buy कर सकता है। यह price floor establish करता है: stock कितना भी गिरे, investor $90 पर sell कर सकता है। $30,000 premium insurance cost है — portfolio value का 3%।</p>

<p>इसे <strong>protective put</strong> strategy कहते हैं। Institutional portfolio managers earnings, elections, या Federal Reserve decisions जैसे high-risk events से पहले widely use करते हैं। Puts की cost ऐसे events से पहले बढ़ जाती है rising implied volatility की वजह से।</p>

<h2>Cash-Secured Put Strategy</h2>

<p>Puts sell करना risk profile flip करता है। Put seller premium collect करता है और obligation लेता है shares strike price पर buy करने का अगर stock गिरे। <strong>Cash-secured put</strong> में seller के पास पूरा cash account में होता है shares buy करने के लिए।</p>

<p>Value investors यह strategy पसंद करते हैं। $60 worth stock $50 पर excellent purchase लगता है तो $50 put sell करें और $2 premium collect करें। Stock $50 गिरा तो buy at $50 — effective cost $48। Stock ऊपर रहा तो $2 premium income। Either way, satisfactory outcome।</p>

<h2>Put/Call Ratio — Sentiment Indicator</h2>

<p>Put volume और call volume का ratio widely tracked sentiment indicator है। High ratio (1.0 से ऊपर) = bearish sentiment। Low ratio (0.7 से नीचे) = bullish sentiment। Contrarian investors extreme readings को signals मानते हैं — बहुत high put/call ratio कभी-कभी market bottoms mark करता है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में Nifty put options hedging के लिए widely used हैं। US market में institutional put positions 13F-HR filings में disclosed होती हैं। Prominent hedge fund की large put position bearish conviction signal करती है। Brefyr पर put activity track करें — insider selling (Form 4) के साथ combine करके multi-layered bearish sentiment view मिलता है।</p>
`,
};
