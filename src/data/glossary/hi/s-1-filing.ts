import type { GlossaryTerm } from "../../types";

export const termS1FilingHi: GlossaryTerm = {
  slug: "s-1-filing",
  term: "S-1 फाइलिंग (S-1 Filing)",
  title: "S-1 फाइलिंग — IPO Registration Statement क्या है, इसमें क्या होता है, और निवेशक इसे कैसे पढ़ें",
  shortDefinition:
    "S-1 एक registration statement है जो कोई भी company अपना IPO करने से पहले SEC के पास file करती है। इसमें company की financials, business model, risks, और IPO से मिलने वाले पैसे कैसे खर्च होंगे — सब कुछ disclosed होता है।",
  metaDescription:
    "S-1 filing क्या है? SEC की IPO registration statement को समझें — इसमें क्या होता है, investors इसे कैसे इस्तेमाल करते हैं, और EDGAR पर कैसे ढूंढें। भारतीय निवेशकों के लिए गाइड।",
  wordCount: 1300,
  category: "SEC Filings",
  tags: ["sec-filing", "ipo", "registration-statement", "edgar", "equity-offering"],
  relatedSlugs: ["10-k-filing", "s-3-filing", "form-424b", "sec-edgar", "dilution"],
  relatedTerms: ["10-k-filing", "s-3-filing", "form-424b", "sec-edgar", "dilution", "form-8a"],
  faq: [
    {
      question: "SEC S-1 review करने में कितना समय लेता है?",
      answer:
        "SEC आमतौर पर S-1 file होने के 30 दिनों के अंदर अपने पहले comments भेजता है। उसके बाद company और उसके lawyers comments का जवाब देते हैं और amended versions (S-1/A) file करते हैं। पूरा process — initial filing से लेकर SEC द्वारा registration effective declare करने तक — आमतौर पर दो से चार महीने लगते हैं। जब तक SEC S-1 को effective declare नहीं करता, company shares नहीं बेच सकती।",
    },
    {
      question: "क्या individual investors IPO से पहले S-1 पढ़ सकते हैं?",
      answer:
        "बिल्कुल हाँ। हर S-1 SEC की EDGAR database पर file होते ही publicly available हो जाती है। इसका मतलब है कि individual investors भी वही document पढ़ सकते हैं जो institutional investors को roadshow में मिलता है। IPO price set होने से पहले S-1 पढ़ना यह decide करने का सबसे अच्छा तरीका है कि offering में participate करना worth है या नहीं।",
    },
    {
      question: "S-1 और prospectus में क्या अंतर है?",
      answer:
        "S-1 पूरा registration statement है, जिसमें prospectus के अलावा additional exhibits, undertakings, और financial schedules भी शामिल हैं। Prospectus S-1 का Part I है — वो investor-facing document जो offering describe करता है। जब लोग IPO prospectus पढ़ने की बात करते हैं, तो वो S-1 का front section पढ़ रहे होते हैं। Back section (Part II) में supplemental information होती है जैसे legal expenses और recent sales of unregistered securities।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>S-1 registration statement वो document है जो एक private company को public company में बदलता है। Securities Act of 1933 के तहत Securities and Exchange Commission (SEC) के पास file होने वाला यह document किसी भी company के लिए ज़रूरी है जो पहली बार अपने shares आम जनता को offer करना चाहती है। यह IPO process का सबसे important document है — एक comprehensive disclosure जिसमें potential investor को वो सब कुछ मिलता है जो offering price पर shares खरीदने का फैसला करने के लिए ज़रूरी है।</p>

<p>10-K या 10-Q जैसी periodic filings से अलग, जो past performance report करती हैं, S-1 forward-looking होती है। यह एक ऐसी company introduce करती है जिसे ज़्यादातर public market investors ने पहले कभी analyze नहीं किया। कोई पुरानी earnings calls नहीं, कोई analyst estimates नहीं, और कोई trading history नहीं। S-1 ही analysis की starting point है।</p>

<h2>S-1 में क्या-क्या होता है</h2>

<p>S-1 दो parts में divide होती है। Part I prospectus है — वो core document जो investors को deliver किया जाता है। Part II में supplemental disclosures और exhibits होते हैं।</p>

<h3>Prospectus Summary</h3>

<p>Opening pages company, उसके business model, और offering की terms का high-level overview देते हैं। इसमें offer किए जा रहे shares की संख्या, estimated price range, और shares कहाँ list होंगे — यह सब शामिल होता है। Dozens of upcoming IPOs screen करने वाले investors के लिए, summary पहला filter है।</p>

<h3>Risk Factors</h3>

<p>यह section बताता है कि क्या-क्या गलत हो सकता है। IPO करने वाली companies यहाँ बहुत detailed होती हैं क्योंकि lawyers जानते हैं कि जो भी छूट गया वो shareholder lawsuits में potential liability बन सकता है। Pre-revenue companies के लिए risk factors section 30+ pages का हो सकता है।</p>

<h3>Use of Proceeds</h3>

<p>Companies को बताना होता है कि IPO से मिला पैसा कैसे खर्च करेंगी। Common uses में debt pay करना, R&D fund करना, sales और marketing expand करना शामिल हैं। "General corporate purposes" जैसी vague language common है लेकिन informative नहीं। Investors specific plans prefer करते हैं।</p>

<h3>MD&A और Financial Statements</h3>

<p>Management's Discussion and Analysis (MD&A) section 10-K के MD&A जैसा होता है — management अपने शब्दों में financial results, trends, और known uncertainties explain करता है। Financial statements में GAAP के हिसाब से बने audited income statement, balance sheet, और cash flow statement शामिल होते हैं — typically 2-3 साल की history।</p>

<h3>Executive Compensation और Lock-up</h3>

<p>Detailed tables बताती हैं कि executives और directors को कितना pay किया गया, कितनी equity उनके पास है, और IPO के बाद ownership stakes पर क्या effect होगा। Shares eligible for future sale section बताता है कि कितने shares lock-up agreements (typically 90-180 days) में हैं और insiders कब sell कर सकते हैं।</p>

<h2>SEC Review Process</h2>

<p>S-1 file करने का मतलब यह नहीं कि company तुरंत shares बेच सकती है। SEC की Division of Corporation Finance हर S-1 review करती है और comment letters issue करती है। Company को हर comment का जवाब देना होता है और amended versions (S-1/A) file करने होते हैं। जब SEC registration statement को "effective" declare करता है, तभी offering proceed कर सकती है।</p>

<p>JOBS Act of 2012 के बाद से, emerging growth companies (annual revenue $1.235 billion से कम) अपनी S-1 confidentially submit कर सकती हैं। Filing publicly visible नहीं होती जब तक IPO roadshow शुरू होने में 15 दिन न रह जाएँ।</p>

<h2>भारतीय निवेशकों के लिए S-1 क्यों ज़रूरी है</h2>

<p>अगर आप Vested, INDMoney, या Groww International से US IPOs में participate करना चाहते हैं, तो S-1 पढ़ना critical है। RBI LRS scheme के तहत आप हर साल $250,000 (करीब ₹2 करोड़) तक US markets में invest कर सकते हैं। नए IPO में पैसा लगाने से पहले S-1 पढ़ कर यह समझना ज़रूरी है कि company profitable है या cash burn कर रही है, revenue कितनी तेज़ी से बढ़ रहा है, customer concentration कैसी है, और dilution कितना होगा।</p>

<p>Indian investors के लिए एक और important बात — US IPO allocation typically institutional investors को priority मिलती है। लेकिन S-1 पर based research करके आप listing day के बाद informed decisions ले सकते हैं। Brefyr पर हर S-1 की AI summary मिलती है जो key metrics extract करती है — hours of reading बचाते हुए critical details catch करने में मदद करती है।</p>

<h2>S-1 कहाँ देखें</h2>

<p>सभी S-1 filings <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=S-1&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a> पर free में available हैं। Company name या full-text search से S-1 ढूंढ सकते हैं। Brefyr पर upcoming और recent IPO filings AI-generated summaries के साथ highlight की जाती हैं।</p>
`,
};
