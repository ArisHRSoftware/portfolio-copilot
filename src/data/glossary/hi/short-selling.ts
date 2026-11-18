import type { GlossaryTerm } from "../../types";

export const termShortSellingHi: GlossaryTerm = {
  slug: "short-selling",
  term: "Short Selling (शॉर्ट सेलिंग)",
  title: "Short Selling — गिरते Stock से Profit कैसे कमाते हैं",
  shortDefinition:
    "Short selling में investor उधार लिए shares बेचता है, expecting कि price गिरेगा, और बाद में सस्ते में वापस खरीदकर return करता है। Difference profit है।",
  metaDescription:
    "Short selling क्या है? Stock price गिरने पर profit कमाने का mechanism समझें — risks, regulations, short interest, और भारतीय निवेशकों को क्या जानना चाहिए।",
  wordCount: 500,
  category: "Trading",
  tags: ["short-selling", "trading", "risk", "hedge"],
  relatedSlugs: ["insider-trading", "form-4", "sec-edgar", "market-capitalization"],
  relatedTerms: ["insider-trading", "form-4", "sec-edgar", "market-capitalization"],
  faq: [
    {
      question: "Short selling में unlimited loss कैसे possible है?",
      answer: "Normal investment में maximum loss 100% है (stock zero हो जाए)। Short selling में stock theoretically infinite तक बढ़ सकता है — GameStop 2021 में $4 से $483 गया, shorts ने billions lose किए। Loss limit नहीं है क्योंकि price ऊपर जाते रहने पर buyback increasingly expensive होता जाता है।",
    },
    {
      question: "भारत से US stocks short sell कर सकते हैं?",
      answer: "Indian retail brokerages (Vested, INDMoney, Groww) short selling support नहीं करते। US-based interactive brokers account से possible है लेकिन complex और risky। ज़्यादातर Indian investors short selling directly नहीं करते — short interest data research tool के रूप में use करें।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Short selling stock market का एक advanced strategy है जहाँ investor <strong>गिरती stock price से profit</strong> कमाता है। Normal investing में आप पहले खरीदते हैं, बाद में बेचते हैं (buy low, sell high)। Short selling में order reverse है — पहले बेचते हैं, बाद में खरीदते हैं (sell high, buy low)।</p>

<h2>Short Selling कैसे काम करती है</h2>

<ol>
<li><strong>Borrow:</strong> Investor broker से shares उधार लेता है</li>
<li><strong>Sell:</strong> Borrowed shares current market price पर बेच देता है ($100/share मान लें)</li>
<li><strong>Wait:</strong> Price गिरने का इंतज़ार</li>
<li><strong>Buy back:</strong> Shares सस्ते में वापस खरीदता है ($70/share मान लें)</li>
<li><strong>Return:</strong> Shares broker को return, $30/share profit pocket</li>
</ol>

<h2>Short Selling के Risks</h2>

<p><strong>Unlimited loss potential:</strong> Normal buy में maximum loss 100% (stock zero)। Short selling में stock ऊपर unlimited जा सकता है → loss unlimited। GameStop January 2021 — shorts ने billions lose किए जब stock $4 से $483 गया।</p>

<p><strong>Short squeeze:</strong> जब heavily shorted stock price बढ़ने लगता है, shorts panic buy करते हैं (cover), जो price और ऊपर push करता है → cascading effect।</p>

<p><strong>Margin calls:</strong> Short position maintain करने के लिए margin required है। Stock price बढ़ने पर broker additional margin demand करता है — pay करें या position forced close।</p>

<h2>Short Interest — Research Tool</h2>

<p>Short selling directly न करने पर भी, <strong>short interest data</strong> valuable research tool है:</p>

<ul>
<li><strong>High short interest (20%+ of float):</strong> Market bearish है — investigate why। 10-K में red flags हो सकते हैं।</li>
<li><strong>Declining short interest:</strong> Bears cover कर रहे हैं — sentiment improving।</li>
<li><strong>Days to cover:</strong> Short interest ÷ average daily volume। 5+ days = short squeeze potential।</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI short selling rules different हैं और NSE/BSE पर institutional short selling ज़्यादा common है। US market short selling data publicly available है (bi-monthly FINRA reports)।</p>

<p>Indian investors US stocks में directly short sell करने की ज़रूरत नहीं — short interest data use करें research tool के रूप में। High short interest + poor 10-K = avoid। Declining short interest + strong fundamentals = potential buy signal।</p>

<p>Brefyr पर SEC filings analyze होती हैं जो short sellers जैसी deep research provide करती हैं — risk factors, cash flow problems, insider selling patterns — without the risk of actually shorting।</p>
`,
};
