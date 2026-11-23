import type { GlossaryTerm } from "../../types";

export const termRegulationDHi: GlossaryTerm = {
  slug: "regulation-d",
  term: "Regulation D (रेगुलेशन D / Private Placement)",
  title: "Regulation D — Private Securities Offerings Govern करने वाले Rules",
  shortDefinition:
    "Regulation D SEC registration से safe harbor exemptions provide करता है private placements के लिए, companies को accredited investors से public offering की cost और complexity के बिना capital raise करने देता है।",
  metaDescription:
    "Regulation D क्या है? Private placements Rules 504, 506(b), और 506(c) के under कैसे काम करती हैं, accredited investor requirements, और Reg D private capital markets की backbone क्यों है।",
  wordCount: 450,
  category: "Regulatory & Compliance",
  tags: ["regulation-d", "private-placement", "accredited-investor", "sec-regulation", "capital-raising"],
  relatedSlugs: ["accredited-investor", "rule-144", "rule-144a", "regulation-a-plus", "securities-act-1933"],
  relatedTerms: ["accredited-investor", "rule-144", "rule-144a", "regulation-a-plus", "securities-act-1933"],
  faq: [
    {
      question: "Rule 506(b) और Rule 506(c) में क्या difference है?",
      answer:
        "Rule 506(b) unlimited capital raising allow करता है accredited investors से plus 35 non-accredited but sophisticated investors तक। लेकिन general solicitation या advertising नहीं कर सकते। Rule 506(c) JOBS Act 2013 द्वारा बनाया गया — unlimited capital raising general solicitation और advertising (social media ads, public announcements) के साथ, लेकिन सभी purchasers accredited investors होने चाहिए और issuer को accredited status verify करनी होगी।",
    },
    {
      question: "क्या Regulation D securities SEC के साथ register करने होते हैं?",
      answer:
        "नहीं — Regulation D का यही purpose है। यह Securities Act of 1933 की Section 5 registration requirement से exemptions provide करता है। हालांकि, company को first sale के 15 days के अंदर SEC को Form D file करनी होती है। Form D एक brief notice filing है — detailed disclosure नहीं होती।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Regulation D private securities offerings के लिए SEC registration से सबसे widely used exemption है। तीन safe harbor rules — Rules 504, 506(b), और 506(c) — provide करता है जो companies को SEC के साथ registration statement file किए बिना capital raise करने देते हैं। <strong>US में private capital raising का vast majority — venture capital rounds, private equity investments, angel financings</strong> — Regulation D के under conduct होता है। 2023 में अकेले $2 trillion से ज़्यादा Regulation D offerings through raise हुए।</p>

<h2>तीन Rules</h2>

<p><strong>Rule 504:</strong> 12-month period में $10 million तक offerings। Non-reporting companies के लिए available। Investor type restrict नहीं करता, लेकिन securities restricted हैं (freely resold नहीं हो सकतीं)। छोटी companies primarily use करती हैं।</p>

<p><strong>Rule 506(b):</strong> No dollar limit। Unlimited accredited investors plus 35 financially sophisticated non-accredited investors तक। General solicitation या advertising permitted नहीं — सिर्फ pre-existing relationship वाले investors को approach कर सकते हैं। सबसे commonly used private placement exemption।</p>

<p><strong>Rule 506(c):</strong> No dollar limit। JOBS Act 2013 द्वारा बनाया गया। General solicitation और advertising permit करता है — public marketing through any channel। Tradeoff: सभी purchasers accredited investors होने चाहिए और issuer को accredited status verify करनी होगी।</p>

<h2>Form D Filing</h2>

<p>Regulation D offerings conduct करने वाली companies को first sale के 15 days के अंदर SEC को Form D file करनी होती है। Form D publicly available है EDGAR पर — private capital raising activity का valuable source।</p>

<h2>Restricted Securities और Resale</h2>

<p>Regulation D के under sold securities "restricted" हैं — freely resold नहीं हो सकतीं। Purchaser को securities hold करनी होंगी जब तक resale exemption available न हो — typically Rule 144 (six-month holding period reporting companies के लिए) या Rule 144A (qualified institutional buyers को immediate resale)।</p>

<h2>भारतीय निवेशकों के लिए Reg D</h2>

<p>India में SEBI private placement rules different structure follow करती हैं। US market में Regulation D offerings generally accredited investors तक limited हैं। भारतीय investors जो US startups या private companies में invest करना चाहते हैं, उन्हें Form D filings EDGAR पर monitor करने चाहिए। Brefyr Form D filings monitor करता है, private capital-raising activity insights provide करता है।</p>
`,
};
