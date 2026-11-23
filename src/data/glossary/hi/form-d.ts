import type { GlossaryTerm } from "../../types";

export const termFormDHi: GlossaryTerm = {
  slug: "form-d",
  term: "Form D (फॉर्म डी)",
  title: "Form D — Regulation D Private Placement Notice और Private Capital Markets",
  shortDefinition:
    "Form D एक SEC filing है जो companies Regulation D के under exempt offering की notice देने के लिए use करती हैं — amount raised, investor type, और private placement terms disclose करती है।",
  metaDescription:
    "Form D क्या है? Private placement notices कैसे काम करती हैं, Regulation D exemptions क्या हैं, और investors Form D data कैसे use करें।",
  wordCount: 450,
  category: "SEC Filings",
  tags: ["sec-filing", "private-placement", "regulation-d", "edgar", "exempt-offering"],
  relatedSlugs: ["s-1-filing", "form-8a", "dilution", "sec-edgar", "accession-number"],
  relatedTerms: ["s-1-filing", "form-8a", "dilution", "sec-edgar", "accession-number"],
  faq: [
    {
      question: "Regulation D क्या है?",
      answer:
        "Regulation D SEC rules (Rules 504, 506(b), 506(c)) का set है जो Securities Act की registration requirement से exemptions provide करती हैं। Companies full IPO process बिना capital raise कर सकती हैं। Rule 506(b) सबसे common — unlimited fundraising accredited investors से, general solicitation बिना। Rule 506(c) general solicitation allow करती है लेकिन सभी investors verified accredited होने चाहिए।",
    },
    {
      question: "क्या Form D file करना mandatory है?",
      answer:
        "Technically, Form D file न करने से Regulation D exemption invalid नहीं होती। लेकिन ज़्यादातर securities lawyers strongly advise करते हैं file करने के लिए — compliance evidence provide करती है और state securities laws (blue sky laws) के लिए ज़रूरी है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Form D SEC की private capital markets में window है। ज़्यादातर SEC filings public companies और publicly traded securities से related होती हैं, Form D private securities market की activity capture करती है — venture capital rounds, PE investments, real estate syndications, hedge fund launches, और corporate private placements। 2008 से EDGAR पर electronically file होती है।</p>

<p>Indian context: India में SEBI के under private placements भी regulated हैं, लेकिन US Form D data publicly searchable है EDGAR पर — VC और PE activity track करने का powerful tool।</p>

<h2>Form D क्या है</h2>

<p>Form D Regulation D के under exempt offering की notice है SEC के साथ — registration statement नहीं। Brief notification कि exempt offering हो रही है: कौन raise कर रहा है, कितना, किस type के investors से, किस Regulation D rule के under। First sale of securities के 15 calendar days के भीतर file होनी चाहिए।</p>

<h2>Form D में क्या होता है</h2>

<p><strong>Issuer information:</strong> Company name, state of incorporation, industry। Private companies के लिए अक्सर पहली बार EDGAR पर name appear होता है।</p>

<p><strong>Related persons:</strong> Executive officers, directors, promoters के names और addresses।</p>

<p><strong>Federal exemption claimed:</strong> Rule 504, 506(b), या 506(c) — offering nature और investor base reveal करती है।</p>

<p><strong>Type of securities:</strong> Common equity, preferred equity, debt, convertible notes, LP interests। VC rounds typically preferred equity दिखाती हैं।</p>

<p><strong>Offering amount:</strong> Total amount offered और already sold। Indefinite offerings (hedge funds) में "indefinite" listed हो सकता है।</p>

<p><strong>Number of investors:</strong> Accredited और non-accredited breakdown। Investor base breadth reveal करती है।</p>

<h2>Regulation D Rules</h2>

<p><strong>Rule 506(b):</strong> सबसे common। Unlimited capital accredited investors से + 35 sophisticated non-accredited investors तक। General solicitation prohibited — no advertising, no public announcements।</p>

<p><strong>Rule 506(c):</strong> JOBS Act 2013 से। Public advertising allowed — websites, social media, conferences। लेकिन सभी investors verified accredited होने चाहिए।</p>

<p><strong>Rule 504:</strong> $10 million तक offerings कम restrictions के साथ।</p>

<h2>Private Market Data के रूप में</h2>

<p>Researchers, journalists, market observers के लिए Form D filings private capital activity का सबसे comprehensive public dataset है। VC trends track करें sector-wise, कौन सी geographies private investment attract कर रही हैं, new fund launches identify करें, और companies approaching IPO spot करें।</p>

<h2>Limitations</h2>

<p>Form D notice है, comprehensive disclosure नहीं — no financial statements, no business description, no risk factors। कुछ offerings report भी नहीं होतीं। Starting point है research का, complete picture नहीं।</p>

<p>Brefyr पर Form D filings company profiles में reference होती हैं — especially pre-IPO companies जिनकी private fundraising history public offering context provide करती है।</p>
`,
};
