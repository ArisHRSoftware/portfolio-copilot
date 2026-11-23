import type { GlossaryTerm } from "../../types";

export const termReverseStockSplitHi: GlossaryTerm = {
  slug: "reverse-stock-split",
  term: "Reverse Stock Split (रिवर्स स्टॉक स्प्लिट)",
  title: "Reverse Stock Split — जब कंपनी शेयर consolidate करती है और यह Trouble का Signal क्यों होता है",
  shortDefinition:
    "Reverse stock split में कंपनी multiple shares को एक share में consolidate करती है — per-share price बढ़ती है लेकिन total market cap unchanged रहता है। यह अक्सर delisting से बचने के लिए किया जाता है।",
  metaDescription:
    "Reverse stock split क्या है? कंपनियाँ reverse split क्यों करती हैं, delisting risk connection, SEC filings में कैसे ढूँढें, और company health के बारे में यह क्या signal देता है।",
  wordCount: 450,
  category: "Corporate Actions",
  tags: ["reverse-stock-split", "corporate-action", "delisting", "shares-outstanding", "penny-stock"],
  relatedSlugs: ["stock-split", "market-capitalization", "8-k-filing", "going-concern"],
  relatedTerms: ["stock-split", "market-capitalization", "8-k-filing", "going-concern"],
  faq: [
    {
      question: "Reverse stock split investors के लिए बुरा है?",
      answer:
        "अक्सर हाँ — split खुद value destroy नहीं करता, बल्कि जो signal देता है वो concerning है। ज़्यादातर reverse splits इसलिए होते हैं क्योंकि stock price exchange minimum (Nasdaq/NYSE पर usually $1) से नीचे गिर गई। Studies दिखाते हैं कि reverse split के बाद 12 months में stocks average market को underperform करते हैं। India में BSE/NSE पर minimum price requirement differently काम करती है, लेकिन penny stock stigma दोनों markets में similar है।",
    },
    {
      question: "Reverse stock split में fractional shares का क्या होता है?",
      answer:
        "अगर आपके shares split ratio से evenly divisible नहीं हैं, तो fractional share typically current market price पर cash out हो जाता है। उदाहरण: 1-for-10 reverse split में अगर आपके पास 15 shares हैं, आपको 1 whole share मिलेगा plus बाकी 5 shares (जो 0.5 shares बनते) की cash payment। कुछ companies round up करती हैं। 8-K filing में fractional shares का specific treatment explain होता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Reverse stock split traditional split का उल्टा है। Company multiple shares को fewer shares में consolidate करती है, proportionally higher price पर। 1-for-10 reverse split में आपके हर 10 shares एक share बन जाते हैं, 10 गुना price पर। अगर आपके पास 1,000 shares थे $0.50 पर ($500 total), अब 100 shares हैं $5 पर — अभी भी $500। <strong>Market capitalization unchanged रहता है।</strong></p>

<h2>कंपनियाँ Reverse Split क्यों करती हैं</h2>

<p><strong>Exchange compliance.</strong> सबसे common reason delisting से बचना। NYSE और Nasdaq दोनों minimum share prices require करते हैं — typically $1 per share। जब stock extended period (usually 30 consecutive trading days) तक इससे नीचे रहता है, exchange deficiency notice भेजता है। India में BSE/NSE का system अलग है — SEBI surveillance measures penny stocks पर apply होती हैं।</p>

<p><strong>Institutional requirements.</strong> कई institutional investors और mutual funds की internal policies sub-$5 या sub-$10 stocks hold करने के against हैं। कुछ brokerages sub-$5 stocks पर margin trading restrict करती हैं। Reverse split से stock broader investors को accessible बनता है।</p>

<p><strong>Perception management.</strong> Penny stocks carry a stigma। $0.30 पर trade करने वाला stock $3.00 से differently perceived होता है, भले ही market cap identical हो। यह cosmetic fix है — underlying business fundamentals नहीं बदले।</p>

<h2>Common Reverse Split Ratios</h2>

<ul>
<li><strong>1-for-2:</strong> दो shares एक बनते हैं। Relatively mild।</li>
<li><strong>1-for-5 या 1-for-10:</strong> $1 delisting threshold के near companies में common।</li>
<li><strong>1-for-20 या 1-for-50:</strong> Severely distressed companies में दिखता है।</li>
<li><strong>1-for-100 या higher:</strong> Extreme consolidation, bankruptcy या restructuring के verge पर।</li>
</ul>

<h2>Historical Track Record</h2>

<p>Academic research consistently दिखाती है कि reverse splits के बाद stocks underperform करते हैं। Average 15-20% benchmark underperformance अगले year में। यह split की वजह से नहीं बल्कि उन conditions की वजह से है जिन्होंने split ज़रूरी बनाया — deteriorating business, management struggles, investor confidence loss।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>RBI LRS से US stocks में invest करने वाले Indian investors के लिए, reverse stock split एक serious red flag है। Vested, INDMoney, या Groww पर held shares automatically adjust होंगे, लेकिन underlying company की financial health evaluate करना ज़रूरी है। India में SEBI-regulated companies में share consolidation rarely होता है — यह primarily US market phenomenon है। अगर आपकी portfolio company reverse split announce करे, तो cash flow statement check करें, debt maturity देखें, और insider selling patterns Form 4 में monitor करें।</p>

<h2>SEC Filings में Reverse Split</h2>

<ul>
<li><strong>DEF 14A:</strong> Shareholder vote proposal, management rationale, proposed ratio।</li>
<li><strong>8-K:</strong> Board decision, effective date, fractional shares treatment।</li>
<li><strong>10-K और 10-Q:</strong> Per-share figures retroactively restate होती हैं prior periods के लिए।</li>
</ul>

<p>Brefyr सभी 8-K और proxy filings track करता है, reverse stock split announcements flag करता है — AI significance scoring system high scores assign करता है given historically negative implications।</p>
`,
};
