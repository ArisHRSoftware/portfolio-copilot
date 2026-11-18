import type { GlossaryTerm } from "../../types";

export const termFreeCashFlowHi: GlossaryTerm = {
  slug: "free-cash-flow",
  term: "Free Cash Flow (फ्री कैश फ्लो)",
  title: "Free Cash Flow — Company के पास Actually कितना Cash बचता है",
  shortDefinition:
    "Free Cash Flow (FCF) वो cash है जो company operations और capital expenditures के बाद बचता है। यह company की real money-generating ability बताता है — earnings manipulate हो सकती हैं, cash flow नहीं।",
  metaDescription:
    "Free Cash Flow क्या है? Company की actual cash generation समझें — FCF calculation, FCF yield, और क्यों experienced investors earnings से ज़्यादा cash flow पर भरोसा करते हैं।",
  wordCount: 500,
  category: "Financial Metrics",
  tags: ["cash-flow", "fcf", "valuation", "financial-analysis"],
  relatedSlugs: ["ebitda", "pe-ratio", "enterprise-value", "10-k-filing"],
  relatedTerms: ["ebitda", "pe-ratio", "enterprise-value", "10-k-filing"],
  faq: [
    {
      question: "Free Cash Flow और Net Income में क्या difference है?",
      answer:
        "Net income accounting profit है — इसमें non-cash items (depreciation, stock-based compensation) शामिल हैं। FCF actual cash है जो company generate करती है। Company positive net income report कर सकती है लेकिन negative FCF — इसका मतलब profit paper पर है, pocket में नहीं। FCF ज़्यादा reliable metric है।",
    },
    {
      question: "Negative FCF हमेशा bad है?",
      answer:
        "नहीं। Growth-stage companies (Tesla 2018, Amazon 2014) ने years तक negative FCF report किया क्योंकि वो aggressively invest कर रही थीं। Key question: क्या negative FCF investment-driven है (factories, R&D) या operational problems से? 10-K की cash flow statement breakdown देती है।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Free Cash Flow (FCF) शायद सबसे important financial metric है जो ज़्यादातर retail investors ignore करते हैं। FCF बताता है कि company ने operations से कितना cash generate किया, उसमें से capital expenditures (new equipment, buildings, technology) में कितना खर्च किया, और बाकी कितना बचा।</p>

<p><strong>Formula:</strong> FCF = Operating Cash Flow - Capital Expenditures</p>

<p>यह simple formula hide करता है एक powerful insight: <strong>earnings manipulate हो सकती हैं, cash flow नहीं</strong>। Accounting rules allow करते हैं revenue recognize करना before cash collect हो, expenses defer करना, depreciation methods change करना। लेकिन cash is cash — either bank account में है या नहीं।</p>

<h2>FCF क्यों Important है</h2>

<h3>Dividends और Buybacks</h3>
<p>Company dividends pay करती है FCF से, net income से नहीं। अगर FCF $1 billion है और dividend $500 million, sustainable है। अगर FCF $200 million है और dividend $500 million — company debt लेकर dividend pay कर रही है, unsustainable।</p>

<h3>Debt Repayment</h3>
<p>FCF से company debt repay करती है। High FCF = ability to reduce leverage over time। Low/negative FCF = debt mounting हो सकती है।</p>

<h3>Growth Investment</h3>
<p>FCF surplus से company acquisitions कर सकती है, R&D बढ़ा सकती है, new markets enter कर सकती है — without raising debt or diluting shares।</p>

<h2>FCF Yield</h2>

<p><strong>Formula:</strong> FCF Yield = Free Cash Flow ÷ Market Cap × 100</p>

<p>FCF yield बताता है कि company market value के proportion में कितना cash generate कर रही है। 5%+ FCF yield generally attractive माना जाता है। 10%+ exceptional।</p>

<p>Compare: Federal Reserve interest rate ~5% है। अगर company 8% FCF yield दे रही है, stock essentially bonds से better return offer कर रहा है plus growth potential।</p>

<h2>FCF कहाँ देखें</h2>

<p>FCF company की 10-K/10-Q में cash flow statement से calculate होता है:</p>
<ol>
<li><strong>Cash from Operations</strong> (Operating Activities section) — यह top number है</li>
<li><strong>Capital Expenditures</strong> (Investing Activities section) — usually "Purchases of property and equipment"</li>
<li><strong>FCF = #1 - #2</strong></li>
</ol>

<p>कई companies "Free Cash Flow" explicitly report करती हैं Non-GAAP section में, लेकिन इसे verify करें — कभी-कभी companies favorable definition use करती हैं।</p>

<h2>भारतीय निवेशकों के लिए FCF</h2>

<p>Indian companies भी cash flow statements report करती हैं (Ind-AS compliant), तो FCF concept familiar होगा। US stocks में FCF analyze करते समय:</p>

<ul>
<li><strong>Tech companies:</strong> Apple, Microsoft, Google जैसी companies massive FCF generate करती हैं ($50-100 billion/year)। यही reason है ये consistently buybacks करती हैं।</li>
<li><strong>Growth vs Value:</strong> Growth stocks (Tesla, Rivian) often negative FCF show करते हैं — investment phase। Value stocks (Coca-Cola, Johnson & Johnson) consistently positive FCF।</li>
<li><strong>10-K essential:</strong> FCF number alone ज़रूरी नहीं — 10-K पढ़कर understand करें कि cash कहाँ generate हो रहा है और कहाँ spend।</li>
</ul>

<p>Brefyr पर 10-K/10-Q filings से financial data automatically extract होती है। FCF trends quarter-over-quarter और year-over-year track करना important है — declining FCF often stock price drop से पहले का signal है।</p>
`,
};
