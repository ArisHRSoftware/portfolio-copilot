import type { GlossaryTerm } from "../../types";

export const termRegulationCFHi: GlossaryTerm = {
  slug: "regulation-cf",
  term: "Regulation CF (रेगुलेशन CF / Crowdfunding)",
  title: "Regulation CF — छोटी Companies के लिए Equity Crowdfunding के SEC Rules",
  shortDefinition:
    "Regulation CF एक SEC exemption है जो छोटी companies को SEC-registered crowdfunding platforms से general public से $5 million per year तक raise करने देता है — retail investors को startups में equity खरीदने का मौका।",
  metaDescription:
    "Regulation CF क्या है? Equity crowdfunding SEC rules के under कैसे काम करता है, investor limits, platform requirements, और investors को crowdfunding portals में invest करने से पहले क्या जानना चाहिए।",
  wordCount: 450,
  category: "Regulatory & Compliance",
  tags: ["regulation-cf", "crowdfunding", "startup-investing", "sec-regulation", "retail-investor"],
  relatedSlugs: ["regulation-a-plus", "regulation-d", "accredited-investor", "securities-act-1933"],
  relatedTerms: ["regulation-a-plus", "regulation-d", "accredited-investor", "securities-act-1933"],
  faq: [
    {
      question: "Regulation CF crowdfunding offerings में कितना invest कर सकते हैं?",
      answer:
        "Investment limits income और net worth पर depend करती हैं। अगर दोनों annual income और net worth $124,000 से कम हैं, तो $2,500 या income/net worth के lesser का 5% (जो भी ज़्यादा हो) invest कर सकते हैं 12-month period में सभी Reg CF offerings में। अगर income या net worth $124,000 या ज़्यादा है, तो lesser का 10% तक, maximum $124,000। Accredited investors पर ये limits apply नहीं होतीं।",
    },
    {
      question: "क्या Regulation CF shares बेच सकते हैं?",
      answer:
        "Reg CF shares में limited liquidity है। Purchase के बाद एक साल तक resale नहीं हो सकती, कुछ exceptions के साथ (issuer को, accredited investor को, family member को)। एक साल बाद भी, शायद shares का कोई active market न हो — ज़्यादातर Reg CF companies किसी exchange पर listed नहीं हैं। Investors को years तक hold करने के लिए तैयार रहना चाहिए।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Regulation CF — JOBS Act Title III के under enact और May 2016 से effective — ने पहली बार ordinary retail investors के लिए startups और small businesses में equity investing open किया। Reg CF से पहले, early-stage companies में invest करना सिर्फ accredited investors और institutional investors तक limited था। अब companies general public से $5 million per year तक raise कर सकती हैं SEC-registered crowdfunding intermediaries (funding portals या broker-dealers) through।</p>

<h2>Regulation CF कैसे काम करता है</h2>

<p><strong>Platform requirement।</strong> सभी Reg CF offerings SEC-registered intermediary through conduct होनी चाहिए — funding portal (SEC और FINRA registered) या broker-dealer। Major platforms में Wefunder, Republic, StartEngine शामिल हैं।</p>

<p><strong>Disclosure requirements।</strong> Company SEC को Form C file करती है — business plan, financial condition, officers/directors, ownership structure, use of proceeds, और offering terms disclose करती है। $124,000 से ज़्यादा raise करने पर independent accountant reviewed financial statements required; $1,235,000 से ज़्यादा पर audited statements।</p>

<p><strong>Investment limits।</strong> Non-accredited investors पर aggregate investment limits हैं income और net worth based — high-risk startup investments में बहुत ज़्यादा savings concentrate करने से रोकने के लिए।</p>

<p><strong>Cancellation rights।</strong> Investors offering deadline से 48 hours पहले तक investment commitment cancel कर सकते हैं।</p>

<h2>Investors के लिए Risks</h2>

<p><strong>High failure rate।</strong> Early-stage companies की failure rate बहुत high है — ज़्यादातर startups पाँच साल में fail हो जाते हैं। Investors को expect करना चाहिए कि कई investments अपनी पूरी value lose कर सकती हैं।</p>

<p><strong>Illiquidity।</strong> Reg CF securities का typically कोई secondary market नहीं है। Years तक hold करने के लिए तैयार रहें।</p>

<p><strong>Limited information।</strong> Publicly traded companies की तुलना में startup investments की information बहुत कम comprehensive है।</p>

<h2>Reg CF vs Regulation A+ vs Regulation D</h2>

<p>Regulation CF ($5 million cap, general public) सबसे छोटा exemption है। Regulation A+ ($75 million cap, general public, more disclosure) mid-tier option है। Regulation D (no dollar cap, accredited investors only) standard private placement है। कुछ companies Reg CF से शुरू करके initial shareholder base build करती हैं और बाद में Reg A+ या full IPO करती हैं।</p>

<h2>भारतीय निवेशकों के लिए Reg CF</h2>

<p>India में equity crowdfunding regulatory framework अभी developing stage में है। US market में Reg CF investments high-risk हैं — Indian investors को thorough due diligence करनी चाहिए। Brefyr public companies की SEC filings पर focus करता है, लेकिन Reg CF investments consider करने वाले investors को EDGAR पर Form C filings review करनी चाहिए।</p>
`,
};
