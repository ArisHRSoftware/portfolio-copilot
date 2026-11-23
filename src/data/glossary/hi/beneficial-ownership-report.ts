import type { GlossaryTerm } from "../../types";

export const termBeneficialOwnershipReportHi: GlossaryTerm = {
  slug: "beneficial-ownership-report",
  term: "Beneficial Ownership Report (लाभकारी स्वामित्व रिपोर्ट)",
  title: "Beneficial Ownership Report — Major Investors कब Big Positions लेते हैं Track करें",
  shortDefinition:
    "Beneficial ownership report (Schedule 13D या 13G) SEC filing है जो required होती है जब कोई person या group किसी company के equity securities के 5% से ज़्यादा beneficial ownership acquire करता है, stake size और holder की intentions disclose करती है।",
  metaDescription:
    "Beneficial ownership report क्या है? Schedule 13D और 13G filings कैसे work करती हैं, 5% reporting threshold, activist investors क्या disclose करते हैं, और ये filings क्यों matter करती हैं।",
  wordCount: 440,
  category: "Regulatory & Compliance",
  tags: ["beneficial-ownership", "schedule-13d", "schedule-13g", "activist-investor", "sec-regulation"],
  relatedSlugs: ["beneficial-owner", "13f-filing", "insider-trading", "tender-offer", "proxy-statement"],
  relatedTerms: ["beneficial-owner", "13f-filing", "insider-trading", "tender-offer", "proxy-statement"],
  faq: [
    {
      question: "Schedule 13D और Schedule 13G में क्या difference है?",
      answer:
        "Schedule 13D full disclosure form है activist 5%+ holders के लिए जो company influence या change करना चाहते हैं — detailed identity, source of funds, purpose, और plans disclose करने होते हैं। Schedule 13G shorter form है passive investors के लिए जिन्होंने ordinary course में shares acquire किए बिना influence purpose। अगर 13G filer का intent passive से activist change होता है, तो 10 days में 13D convert करना होता है।",
    },
    {
      question: "Beneficial ownership reports कितने जल्दी file करने होते हैं?",
      answer:
        "2024 amendments के under Schedule 13D five business days में file करना होता है 5% threshold cross करने के बाद (पहले 10 calendar days था)। Material amendments two business days में। Schedule 13G deadlines filer type से vary करती हैं। Tighter deadlines reflect करती हैं SEC concerns कि investors large positions accumulate कर रहे थे market को notify होने से पहले।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Beneficial ownership reports — Schedule 13D और Schedule 13G filings — SEC disclosure requirements हैं जो trigger होती हैं जब कोई person या group public company के equity securities के 5% से ज़्यादा beneficial ownership acquire करता है। ये filings सबसे market-moving SEC disclosures में से हैं: prominent activist investor की 13D filing stock price soar करा सकती है 5-15% filing day पर ही, जब market company strategy, management, या capital allocation में changes anticipate करता है।</p>

<h2>Beneficial Ownership Defined</h2>

<p>Section 13(d) के under beneficial ownership direct share ownership से beyond extend करता है। Person beneficially own करता है securities अगर voting power (vote करने या direct करने की power) या investment power (dispose या direct करने की power) share या have करता है। Trusts, family members, partnerships, controlled entities सब 5% threshold में count होती हैं। "Group" members — agree करने वाले दो या ज़्यादा persons — एक single beneficial owner मानी जाती है।</p>

<h2>Schedule 13D — Activist Disclosure</h2>

<p>Schedule 13D required है जब holder का purpose company influence या change करना include करता है। Extensive disclosure: identity, source of funds, purpose (key section — plans disclose करने होते हैं: board representation, strategic alternatives, capital return, operational changes), shares number, contracts और arrangements।</p>

<p>"Purpose" disclosure 13D filings को most informative SEC documents बनाती है। Elliott Management, Icahn Enterprises, या Third Point जैसे activist investors की 13D filing stock often 5-15% move करता है।</p>

<h2>Schedule 13G — Passive Disclosure</h2>

<p>13G shorter alternative है passive investors के लिए। तीन categories: qualified institutional investors, passive investors, और exempt investors। Less detailed disclosure — no purpose statement, no plans।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में SEBI की similar requirements हैं — SAST (Substantial Acquisition of Shares and Takeovers) Regulations under 5% threshold crossing पर disclosure ज़रूरी है। लेकिन US system में activist investing ज़्यादा prevalent है। Indian investors US stocks hold करते समय 13D filings closely monitor करें — activist investors often significant value unlock करते हैं। Warren Buffett की Berkshire Hathaway 13G filings भी market move करती हैं।</p>

<p>Brefyr 13D और 13G filings real time में monitor करता है, investors को alert करता है जब activist या institutional investors 5% threshold cross करते हैं।</p>
`,
};
