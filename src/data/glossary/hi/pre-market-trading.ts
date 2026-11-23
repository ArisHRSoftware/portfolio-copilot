import type { GlossaryTerm } from "../../types";

export const termPreMarketTradingHi: GlossaryTerm = {
  slug: "pre-market-trading",
  term: "Pre-Market Trading (प्री-मार्केट ट्रेडिंग)",
  title: "Pre-Market Trading — Opening Bell से पहले Stocks कैसे Trade करें",
  shortDefinition:
    "Pre-market trading regular market 9:30 AM Eastern Time open से पहले stocks buy/sell करना है, typically 4:00 AM - 9:30 AM ET electronic exchanges through available।",
  metaDescription:
    "Pre-market trading क्या है? Pre-market sessions कैसे काम करती हैं, कब available, risks और advantages, earnings/overnight news pre-market activity कैसे drive करते हैं, practical guidelines।",
  wordCount: 430,
  category: "Trading",
  tags: ["pre-market-trading", "extended-hours", "ecn", "earnings", "opening-price"],
  relatedSlugs: ["after-hours-trading", "limit-order", "bid-ask-spread", "market-order"],
  relatedTerms: ["after-hours-trading", "limit-order", "bid-ask-spread", "market-order"],
  faq: [
    {
      question: "Pre-market trading कब start होती है?",
      answer:
        "ज़्यादातर brokers 4:00 AM ET (IST roughly 1:30 PM summer / 2:30 PM winter) पर open करते हैं, कुछ 7:00 या 8:00 AM। Session regular market open 9:30 AM ET तक run। 7:00 AM से पहले liquidity extremely thin — ज़्यादातर pre-market volume 8:00-9:30 AM में। Spreads opening bell approach होने पर progressively narrow।",
    },
    {
      question: "Pre-market price previous close से बहुत different क्यों होता है?",
      answer:
        "Pre-market prices reflect: after-hours earnings announcements, overnight news (geopolitical events, overseas markets, economic data), analyst upgrades/downgrades published open से पहले, pre-market earnings releases। Company 5:00 PM terrible earnings report करे → stock 15% drop after-hours → pre-market lower price open। European/Asian markets overnight moves भी US pre-market influence करती हैं।",
    },
    {
      question: "Pre-market price moves पर react करना चाहिए?",
      answer:
        "Cautious रहें। Pre-market prices thin liquidity based और misleading हो सकती हैं। Stock 'down 8%' pre-market लेकिन सिर्फ 5,000 shares traded → flat open हो सकता है। Volume ज़्यादा → true opening price reflect करने likely ज़्यादा। Generally open के बाद 15-30 minutes wait better liquidity और reliable pricing। Exception: major catalyst (earnings, M&A, FDA) जहाँ direction unambiguous।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Pre-market trading after-hours trading की mirror image है। After-hours post-close events की immediate reaction capture करती है; pre-market session overnight digestion और regular market open से पहले final positioning capture करती है। Investors के लिए pre-market market कैसे open होगा early look provide करती है — reliability और execution quality के significant caveats साथ।</p>

<h2>Pre-Market Trading कैसे काम करती है</h2>

<p>Pre-market trading same ECN infrastructure use करती है after-hours जैसा। Regular hours market makers और exchange specialists full participation बिना electronically match। Same constraints:</p>

<ul>
<li><strong>Limit orders only:</strong> ज़्यादातर brokers pre-market sessions में market orders accept नहीं करते।</li>
<li><strong>Wider bid-ask spreads:</strong> Early pre-market (4:00-7:00 AM) spreads extreme — mid-cap stocks पर $0.50-$2.00+। 8:00-9:30 AM spreads narrow।</li>
<li><strong>Low volume:</strong> Pre-market volume typically regular-hours का 2-5%। Most liquid stocks भी 8:00 AM से पहले thin order books।</li>
</ul>

<h2>Pre-Market Activity कौन Drive करती है</h2>

<ul>
<li><strong>Earnings releases:</strong> ~30% S&P 500 companies market open से पहले earnings report। Morning earnings pre-market reaction most volatile period।</li>
<li><strong>Economic data:</strong> Major reports — Non-Farm Payrolls (8:30 AM), CPI (8:30 AM), GDP (8:30 AM) — entire market pre-market में move करते हैं।</li>
<li><strong>Overnight developments:</strong> European/Asian market closes, geopolitical events, commodity prices, currency fluctuations pre-market reflect।</li>
<li><strong>Analyst actions:</strong> Upgrades, downgrades, price target changes open से पहले publish → individual stocks pre-market move।</li>
<li><strong>SEC filings:</strong> 8-K filings, Form 4 insider trades overnight submit → EDGAR open से पहले appear → pre-market trading influence।</li>
</ul>

<h2>Pre-Market Price Discovery Tool</h2>

<p>Pre-market session price discovery mechanism serve करती है। 9:30 AM opening bell तक pre-market overnight information tentative prices में incorporate कर चुकी होती है। NYSE/Nasdaq opening auctions फिर pre-market interest regular-session orders से match करके official opening price establish।</p>

<p>Pre-market indicative price useful signal लेकिन guarantee नहीं। Studies दिखाती हैं extreme pre-market moves (5%+) first 30 minutes regular trading में partially reverse tend। Initial reaction overshoot — thin liquidity amplify; full market open → institutional liquidity → more representative level adjust।</p>

<h2>भारतीय निवेशकों के लिए Practical Guidance</h2>

<ul>
<li><strong>IST Timing:</strong> US pre-market 4:00 AM ET = IST roughly 1:30 PM (summer) / 2:30 PM (winter)। Indian afternoon/evening = US pre-market — monitor करने का convenient time।</li>
<li><strong>Limit orders conservative:</strong> Current bid-ask inside price set करें, last trade पर नहीं। Last trade 10 minutes पहले significantly different हो सकता है।</li>
<li><strong>Volume check करें:</strong> 500 shares पर price change noise। 50,000 shares पर signal। Volume pre-market price validate करता है opening level represent likely।</li>
<li><strong>Brefyr overnight filings monitor:</strong> SEC filings overnight submit → pre-market hours visible। Form 4 insider selling या 8-K material event 6:00 AM publish → pre-market move drive जो widely understood नहीं। Filing context informational edge provide करता है।</li>
</ul>
`,
};
