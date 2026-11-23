import type { GlossaryTerm } from "../../types";

export const termForm424BHi: GlossaryTerm = {
  slug: "form-424b",
  term: "Form 424B (फॉर्म 424B)",
  title: "Form 424B — Prospectus Supplement क्या है और investors इसे कैसे पढ़ें",
  shortDefinition:
    "Form 424B एक prospectus supplement है जो SEC के पास file होती है जब कोई company existing shelf registration से securities बेचती है — इसमें specific terms, pricing, और underwriters की details होती हैं।",
  metaDescription:
    "Form 424B क्या है? Prospectus supplements कैसे काम करते हैं, companies इन्हें क्यों file करती हैं, और 424B variants का investors के लिए क्या मतलब है।",
  wordCount: 1200,
  category: "SEC Filings",
  tags: ["sec-filing", "prospectus", "shelf-registration", "edgar", "offering"],
  relatedSlugs: ["s-3-filing", "s-1-filing", "dilution", "sec-edgar", "10-k-filing"],
  relatedTerms: ["s-3-filing", "s-1-filing", "dilution", "sec-edgar", "10-k-filing"],
  faq: [
    {
      question: "424B2, 424B4, और 424B5 में क्या अंतर है?",
      answer:
        "424B के बाद का number SEC Rule 424(b) के paragraph को indicate करता है। 424B2 shelf offering से related prospectus supplements के लिए use होता है जिसमें pricing information हो। 424B4 IPOs में use होता है जहाँ final price last moment पर set हुई। 424B5 shelf registrations के supplements के लिए use होता है जिसमें new information हो। Practice में 424B2 और 424B5 सबसे common हैं follow-on और at-the-market offerings के लिए।",
    },
    {
      question: "क्या 424B filing का मतलब हमेशा dilution है?",
      answer:
        "हमेशा नहीं, लेकिन usually हाँ। अगर 424B primary offering of common stock से related है, तो company नए shares issue कर रही है और existing shareholders dilute हो रहे हैं। अगर secondary offering है (selling shareholders अपने existing shares बेच रहे हैं), तो dilution नहीं — लेकिन shares की increased supply stock price पर pressure डाल सकती है। Debt offering में immediate dilution नहीं, लेकिन convertible debt future dilution create कर सकता है।",
    },
    {
      question: "Pricing के बाद 424B कितनी जल्दी file होनी चाहिए?",
      answer:
        "SEC rules के अनुसार offering price determine होने या पहली बार use होने के दो business days के अंदर prospectus supplement file होनी चाहिए। Practice में 424B filings typically offering price set होने के उसी दिन या अगले business day EDGAR पर दिखती हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Form 424B वो SEC filing है जो shelf registration को theoretical possibility से real securities में बदलती है। S-3 registration statement company को multi-year period में securities बेचने का option देती है, लेकिन 424B prospectus supplement तब file होती है जब company actually offering execute करती है। Investors के लिए यह filing बताती है कि exactly कितने shares बेचे जा रहे हैं, किस price पर, और किन underwriters के through।</p>

<h2>424B कैसे काम करती है</h2>

<p>जब company S-3 shelf registration file करती है, उसमें एक base prospectus होता है जो generally describe करता है कि किस तरह की securities offer हो सकती हैं। 424B prospectus supplement इसे specific transaction तक narrow करती है। Securities Act की Rule 424(b) के तहत file होकर, यह base prospectus को final terms के साथ supplement करती है। Base prospectus और 424B supplement मिलकर complete prospectus बनाते हैं जो investors को deliver किया जाता है।</p>

<h2>424B Variants समझें</h2>

<p>सबसे commonly encountered variants:</p>

<ul>
<li><strong>424B1</strong> — Prospectus जहाँ original registration statement से terms बदल गई हैं।</li>
<li><strong>424B2</strong> — Shelf offering से related supplement जिसमें pricing information हो। Secondary equity offerings और debt issuances के लिए सबसे common।</li>
<li><strong>424B3</strong> — Registration statement में fundamental change reflect करने के लिए।</li>
<li><strong>424B4</strong> — Rule 430A offerings के लिए जहाँ final price registration effective होने पर पता नहीं थी। IPOs में सबसे common।</li>
<li><strong>424B5</strong> — Base prospectus में नई additional information वाला supplement। Shelf takedowns और ATM offerings के लिए common।</li>
<li><strong>424B7</strong> — WKSIs (well-known seasoned issuers) के shelf offerings के लिए।</li>
</ul>

<p>Practical purposes के लिए investors को mainly 424B2, 424B4, और 424B5 पर focus करना चाहिए।</p>

<h2>424B Filing में क्या होता है</h2>

<p><strong>Offering summary.</strong> Shares की संख्या, public offering price per share, underwriting discount, और company को net proceeds। Investors को सबसे पहले यही पढ़ना चाहिए।</p>

<p><strong>Use of proceeds.</strong> Company पैसा कैसे use करेगी। Specific plans ज़्यादा informative हैं "general corporate purposes" से।</p>

<p><strong>Dilution.</strong> Offering से पहले और बाद net tangible book value per share और new investors को dilution दिखाने वाली table।</p>

<p><strong>Plan of distribution.</strong> Underwriters, offering type (firm commitment, best efforts, या at-the-market), lock-up agreements, और stabilization provisions की details।</p>

<h2>At-the-Market (ATM) Offerings</h2>

<p>ATM offerings पर special ध्यान दें। ATM program में company broker-dealer के through time के साथ gradually open market में shares बेचती है। Initial 424B maximum aggregate amount specify करती है — लेकिन individual sales कब और किस price पर होंगी, यह नहीं बताती। यह persistent overhang create करती है — traditional overnight offering से अलग जहाँ dilution एक बार में होती है।</p>

<h2>भारतीय निवेशकों के लिए 424B कैसे पढ़ें</h2>

<p>जब आपकी portfolio में कोई company 424B file करे, offering summary table से शुरू करें। Shares outstanding के percentage के रूप में dilution calculate करें। 5% dilution strong growth और clear use of proceeds वाली company में acceptable हो सकता है। 20% dilution cash-burning company में warning signal है।</p>

<p>Use of proceeds पढ़ें — debt repayment और growth investments generally positive हैं। Offering price check करें — market price से significant discount institutional investors की negative sentiment indicate करता है।</p>

<p>Vested, INDMoney, या Groww International पर US stocks hold करने वाले भारतीय investors के लिए, 424B filing पर तुरंत action लेना ज़रूरी हो सकता है — LRS के तहत invested ₹ की value dilution से directly affect होती है।</p>

<h2>424B कहाँ देखें</h2>

<p>सभी 424B filings <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=424B&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a> पर available हैं। Brefyr पर prospectus supplement filings अन्य material filings के साथ track और highlight की जाती हैं जब significant dilution indicate हो।</p>
`,
};
