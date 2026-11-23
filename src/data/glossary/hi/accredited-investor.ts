import type { GlossaryTerm } from "../../types";

export const termAccreditedInvestorHi: GlossaryTerm = {
  slug: "accredited-investor",
  term: "Accredited Investor (मान्यता प्राप्त निवेशक)",
  title: "Accredited Investor — Private Investments में कौन Invest कर सकता है और क्यों",
  shortDefinition:
    "Accredited investor वो individual या entity है जो SEC द्वारा निर्धारित specific financial thresholds — income, net worth, या professional credentials — पूरी करता है, जिससे उन्हें private securities offerings में invest करने की qualification मिलती है।",
  metaDescription:
    "Accredited investor क्या है? Income और net worth thresholds, SEC के recent changes, private investments में accreditation क्यों ज़रूरी है, और भारतीय निवेशकों के लिए इसका क्या मतलब है।",
  wordCount: 450,
  category: "Regulatory & Compliance",
  tags: ["accredited-investor", "private-placement", "regulation-d", "sec-regulation", "investor-qualification"],
  relatedSlugs: ["regulation-d", "qualified-institutional-buyer", "regulation-a-plus", "rule-144a"],
  relatedTerms: ["regulation-d", "qualified-institutional-buyer", "regulation-a-plus", "rule-144a"],
  faq: [
    {
      question: "Accredited investor बनने के लिए current thresholds क्या हैं?",
      answer:
        "Individuals के लिए: (1) Annual income $200,000 से ज़्यादा ($300,000 jointly with spouse) पिछले दो साल में, और current year में भी same expectation। (2) Net worth $1 million से ज़्यादा, primary residence की value exclude करके। (3) FINRA licenses — Series 7, Series 65, या Series 82 holders income या net worth से independent qualify करते हैं। Entities के लिए: $5 million assets। ये thresholds 1982 (income) और 2010 (net worth) से inflation-adjusted नहीं हुई हैं।",
    },
    {
      question: "भारतीय निवेशकों के लिए accredited investor status क्यों relevant है?",
      answer:
        "India में SEBI का Qualified Institutional Buyer (QIB) framework है, लेकिन US markets में invest करने वाले Indian investors को SEC rules follow करने पड़ते हैं। अगर आप US private placements, venture capital funds, या hedge funds में invest करना चाहते हैं, तो accredited investor status ज़रूरी है। LRS (Liberalized Remittance Scheme) के ज़रिए $250,000/year तक invest कर सकते हैं, लेकिन private offerings access करने के लिए accreditation proof चाहिए।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Accredited investor एक ऐसा person या entity है जो SEC (Securities and Exchange Commission) द्वारा Regulation D के under निर्धारित specific financial या professional criteria पूरी करता है। यह designation private securities markets के लिए एक gatekeeping mechanism है — ज़्यादातर private placements, venture capital rounds, और hedge fund investments सिर्फ accredited investors तक restricted हैं। Logic यह है कि private offerings में public securities जैसी disclosure और liquidity नहीं होती, इसलिए SEC participation उन investors तक limit करता है जिनके पास financial sophistication और resources हैं risks evaluate करने और potential losses absorb करने के लिए।</p>

<h2>Individual Accredited Investor Criteria</h2>

<p><strong>Income test:</strong> Individual income $200,000 से ज़्यादा पिछले दो calendar years में, और current year में same level reach करने की reasonable expectation। Married couples के लिए jointly $300,000 threshold है। यह threshold 1982 से adjust नहीं हुई — तब $200,000 की purchasing power आज के approximately $650,000 के बराबर थी।</p>

<p><strong>Net worth test:</strong> Individual या joint net worth $1 million से ज़्यादा, primary residence की value exclude करके। यह exclusion Dodd-Frank Act ने 2010 में add किया था ताकि सिर्फ home equity के basis पर modest savings वाले homeowners qualify न कर सकें।</p>

<p><strong>Professional certification test:</strong> SEC ने 2020 में यह category add किया — FINRA-issued Series 7, Series 65, और Series 82 license holders income या net worth से regardless qualify करते हैं।</p>

<h2>Entity Criteria</h2>

<p><strong>Asset-based:</strong> Banks, insurance companies, registered investment companies, और employee benefit plans $5 million से ज़्यादा assets वाले। Trusts $5 million+ assets वाले जो specifically securities acquire करने के लिए form नहीं हुए।</p>

<p><strong>Ownership-based:</strong> कोई भी entity जिसके सभी equity owners individually accredited investors हैं।</p>

<h2>Verification Process</h2>

<p>Rule 506(b) के under issuers self-certification पर rely कर सकते हैं — investor written representation देता है कि वह criteria meet करता है। Rule 506(c) में, जो general solicitation allow करता है, issuer को "reasonable steps" लेने होते हैं accredited status verify करने के लिए — tax returns review, bank statements, या registered broker-dealer से written confirmation।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में SEBI का अपना regulatory framework है — Qualified Institutional Buyer (QIB) status private placements में participate करने के लिए। लेकिन US markets access करने के लिए SEC rules apply होते हैं। Indian investors LRS (Liberalized Remittance Scheme) के ज़रिए $250,000 per financial year remit कर सकते हैं, लेकिन US private offerings access करने के लिए accredited investor proof ज़रूरी है।</p>

<p>GIFT City IFSC (International Financial Services Centre) में कुछ relaxations हैं, लेकिन directly US private placements के लिए SEC thresholds meet करने ज़रूरी हैं। Indian HNIs और family offices जो global diversification चाहते हैं, उनके लिए accredited investor status open करने वाला gateway है।</p>

<p>Brefyr पर Form D filings और registration statements monitor होती हैं जो prior private placements reference करती हैं, investors को companies की pre-IPO capital structure समझने में मदद करती हैं।</p>
`,
};
