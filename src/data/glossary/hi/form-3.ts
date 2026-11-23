import type { GlossaryTerm } from "../../types";

export const termForm3Hi: GlossaryTerm = {
  slug: "form-3",
  term: "Form 3 (फॉर्म 3)",
  title: "Form 3 — Insider बनने पर Initial Ownership का SEC Filing कैसे काम करता है",
  shortDefinition:
    "Form 3 एक SEC filing है जो company insiders — officers, directors, और 10%+ shareholders — को insider बनने के 10 दिन के भीतर file करनी होती है, जिसमें वो अपनी initial securities ownership disclose करते हैं।",
  metaDescription:
    "Form 3 क्या है? SEC insider ownership disclosure कैसे काम करता है, कौन file करता है, और भारतीय निवेशक US stocks में insider data को कैसे track करें — पूरी जानकारी हिंदी में।",
  wordCount: 450,
  category: "SEC Filings",
  tags: ["sec-filing", "insider-ownership", "beneficial-ownership", "edgar", "insider-trading"],
  relatedSlugs: ["form-4", "form-5", "insider-trading", "beneficial-owner", "sec-edgar"],
  relatedTerms: ["form-4", "form-5", "insider-trading", "beneficial-owner", "sec-edgar"],
  faq: [
    {
      question: "Form 3 कब file करना होता है?",
      answer:
        "Form 3 insider बनने के 10 दिन के भीतर file करनी होती है — यानी जब कोई officer, director, या 10% beneficial owner बनता है। IPO करने वाली companies में सभी insiders को registration statement effective होने की date पर या उससे पहले Form 3 file करनी होती है। Late filing proxy statement में disclose होती है।",
    },
    {
      question: "अगर insider के पास zero shares हों तो भी Form 3 file करना ज़रूरी है?",
      answer:
        "हाँ, बिल्कुल। Filing ज़रूरी है चाहे insider के पास कोई securities हों या नहीं। Zero shares वाली Form 3 common है नए directors के लिए जिन्होंने अभी equity grants नहीं मिली हैं। यह baseline establish करती है — ताकि बाद की Form 4 filings accurately reflect करें कि starting point से क्या changes हुए।",
    },
    {
      question: "Form 3 और Form 4 में क्या difference है?",
      answer:
        "Form 3 insider बनने के वक़्त की initial holdings report करती है — opening balance की तरह। Form 4 उसके बाद होने वाले changes report करती है — purchases, sales, option exercises, grants। Form 5 annual summary है जो missed या exempt transactions cover करती है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Form 3 हर insider की public ownership record की शुरुआत है। Securities Exchange Act of 1934 के Section 16(a) के तहत SEC के साथ file होती है। यह एक baseline establish करती है कि company officer, director, या major shareholder के पास insider status लेते वक़्त कितनी securities थीं। इस initial snapshot के बिना, बाद में Form 4 पर report होने वाली transactions को verify करना impossible होगा।</p>

<p>भारतीय निवेशकों के लिए context: India में SEBI insider trading regulations हैं, लेकिन US system ज़्यादा granular है — हर insider की हर transaction publicly track होती है। Form 3 उस chain का पहला piece है।</p>

<h2>कौन File करता है Form 3</h2>

<p>Section 16 of Exchange Act तीन categories define करता है:</p>

<p><strong>Officers:</strong> CEO, CFO, COO, CTO, और दूसरे policy-making functions वाले senior executives। Company proxy statement में disclose करती है कि कौन qualify करता है।</p>

<p><strong>Directors:</strong> Board of directors के हर member को file करना होता है — चाहे shares हों या नहीं, compensation मिले या नहीं। Independent और non-independent दोनों।</p>

<p><strong>10% Beneficial Owners:</strong> कोई भी person या entity जो company की registered equity securities के किसी class का 10% से ज़्यादा own करती है, automatically insider बन जाती है। कोई appointment ज़रूरी नहीं।</p>

<h2>Form 3 में क्या होता है</h2>

<p><strong>Table I: Non-derivative securities.</strong> Common stock, preferred stock, और दूसरी equity securities की direct और indirect ownership। Number of shares, ownership type (direct/indirect), और indirect holdings के लिए nature (trust, LLC, family member)।</p>

<p><strong>Table II: Derivative securities.</strong> Stock options, warrants, RSUs, और convertible securities। Exercise price, exercisable date, और underlying shares का number। यह table insider की potential ownership reveal करती है — सिर्फ़ current holdings नहीं।</p>

<p>दोनों tables को अलग-अलग देखना ज़रूरी है: 10,000 common shares + 500,000 options वाला insider बहुत different incentive structure रखता है 510,000 outright shares वाले insider से।</p>

<h2>Investors Form 3 कैसे Use करें</h2>

<p><strong>IPO analysis:</strong> Company public होती है तो Form 3 filings का cluster ownership structure reveal करता है — founding team, executives, और pre-IPO investors के बीच equity कैसे बँटी है। CEO कितना own करता है versus दूसरे officers, directors को meaningful skin in the game मिला या नहीं।</p>

<p><strong>New executive appointments:</strong> नया CEO/CFO announce होता है तो Form 3 बताती है कि equity grant कितना बड़ा था। 500,000 stock options वाला CEO shareholders के साथ aligned है; सिर्फ़ cash salary वाला शायद नहीं।</p>

<p><strong>10% owners tracking:</strong> नया 10% owner Form 3 पर surface होता है तो activist activity या acquisition attempt की possibility हो सकती है। Schedule 13D/13G के साथ cross-reference करें।</p>

<h2>Form 3 कहाँ मिलती है</h2>

<p>सभी Form 3 filings SEC EDGAR पर available हैं। Brefyr पर insider ownership data Form 3, 4, और 5 से integrated होता है, complete picture देता है insider के first day से लेकर हर subsequent transaction तक।</p>
`,
};
