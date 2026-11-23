import type { GlossaryTerm } from "../../types";

export const termStockSplitHi: GlossaryTerm = {
  slug: "stock-split",
  term: "Stock Split (स्टॉक स्प्लिट)",
  title: "Stock Split — कंपनी अपने शेयर क्यों विभाजित करती है और निवेशकों पर इसका क्या प्रभाव पड़ता है",
  shortDefinition:
    "Stock split में कंपनी अपने existing shares को proportionally बाँटती है — share की संख्या बढ़ती है, per-share price घटता है, लेकिन total market capitalization unchanged रहता है।",
  metaDescription:
    "Stock split क्या है? Forward split कैसे काम करता है, कंपनियाँ शेयर क्यों split करती हैं, share price और ownership पर effect, और SEC filings में stock split कैसे ढूँढें।",
  wordCount: 480,
  category: "Corporate Actions",
  tags: ["stock-split", "corporate-action", "shares-outstanding", "market-cap", "shareholder"],
  relatedSlugs: ["reverse-stock-split", "dual-class-shares", "market-capitalization", "8-k-filing"],
  relatedTerms: ["reverse-stock-split", "dual-class-shares", "market-capitalization", "8-k-filing"],
  faq: [
    {
      question: "Stock split से मेरे shares की value बढ़ती है क्या?",
      answer:
        "नहीं। Stock split से आपकी total investment value नहीं बदलती। अगर आपके पास 100 shares हैं ₹200 प्रति share ($20,000 total) और company 2-for-1 split करती है, तो अब आपके पास 200 shares होंगे ₹100 प्रति share — कुल value वही $20,000। हालाँकि research दिखाती है कि split announcement के बाद stocks short-term में अच्छा perform करते हैं, शायद इसलिए कि lower price retail investors को attract करती है। India में Vested जैसे platforms पर US stocks खरीदते समय split automatically reflect होता है।",
    },
    {
      question: "भारतीय निवेशकों को stock split में क्या ध्यान देना चाहिए?",
      answer:
        "India में bonus issue stock split जैसा ही concept है — SEBI regulated companies regularly bonus shares issue करती हैं। US market में stock split announcements 8-K filings में आती हैं। RBI LRS से invest किया पैसा Vested, INDMoney, या Groww जैसे platforms पर split automatically adjust हो जाता है। Tax perspective से, India में split cost basis को proportionally adjust करता है — sale के वक्त Long Term Capital Gains (LTCG) calculate करते समय adjusted cost use होगा।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Stock split एक corporate action है जिसमें कंपनी अपने existing shares को multiple new shares में divide करती है। सबसे common ratio 2-for-1 है — हर existing share दो shares बन जाता है, price आधी हो जाती है। अन्य common ratios 3-for-1, 4-for-1, और कभी-कभी 10-for-1 या 20-for-1 भी होते हैं। Key principle यह है कि <strong>total market capitalization — share price × shares outstanding — split के तुरंत बाद unchanged रहता है</strong>।</p>

<h2>Stock Split कैसे काम करता है</h2>

<p>जब company का board of directors stock split approve करता है, company SEC के पास 8-K file करती है। Filing में split ratio, record date (जिस date तक आपको shareholder होना चाहिए), और effective date (जब नए shares आपके account में आएँगे) specify होती है।</p>

<p><strong>उदाहरण — 4-for-1 split:</strong> एक company $1,200 per share पर trade कर रही है, 100 million shares outstanding हैं, market cap $120 billion है। 4-for-1 split के बाद: 400 million shares outstanding, $300 per share, market cap अभी भी $120 billion। जिस investor के पास 50 shares थे ($60,000), अब 200 shares हैं — value अभी भी $60,000।</p>

<h2>कंपनियाँ Split क्यों करती हैं</h2>

<p><strong>Accessibility.</strong> Primary reason: retail investors के लिए shares affordable बनाना। जब price कई hundred या thousand dollars हो, तो individual investors एक share भी नहीं खरीद पाते। India में Vested और INDMoney जैसे platforms fractional shares offer करते हैं, लेकिन कई investors whole shares prefer करते हैं।</p>

<p><strong>Liquidity.</strong> ज़्यादा shares outstanding और lower price से trading volume बढ़ता है। Higher liquidity से bid-ask spread कम होता है, transaction costs सभी investors के लिए घटती हैं।</p>

<p><strong>Index eligibility.</strong> कुछ price-weighted indices जैसे Dow Jones Industrial Average में component weight share price से determine होता है। बहुत ऊँची share price outsized influence दे सकती है। Companies split करती हैं ताकि index weight manage हो सके।</p>

<p><strong>Psychological signaling.</strong> Stock split management confidence का signal माना जाता है। Companies आम तौर पर sustained price increase के बाद split करती हैं।</p>

<h2>Tax Implications</h2>

<p>Stock split taxable event नहीं है — कोई capital gains या losses trigger नहीं होती। हालाँकि cost basis per share adjust होती है। India में SEBI-regulated companies में bonus issue similar treatment पाती है। US stocks hold करने वाले Indian investors के लिए, split adjusted cost basis Form 1099-B में reflect होती है। India-US DTAA के under double taxation relief available है।</p>

<h2>SEC Filings में Stock Split</h2>

<ul>
<li><strong>8-K filing:</strong> Initial announcement — ratio, record date, effective date।</li>
<li><strong>10-K और 10-Q:</strong> Per-share figures (EPS, dividends per share) retroactively adjust होती हैं सभी prior periods के लिए।</li>
<li><strong>DEF 14A:</strong> अगर split के लिए charter amendment ज़रूरी है (authorized shares बढ़ाने के लिए), तो proxy statement में shareholder vote item हो सकता है।</li>
</ul>

<p>Brefyr सभी 7,600+ SEC-reporting companies के 8-K filings track करता है और stock split announcements flag करता है, ताकि investors को portfolio companies के share adjustments की timely notification मिले।</p>
`,
};
