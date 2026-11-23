import type { GlossaryTerm } from "../../types";

export const termReverseMergerHi: GlossaryTerm = {
  slug: "reverse-merger",
  term: "Reverse Merger (रिवर्स मर्जर)",
  title: "Reverse Merger — Back Door से Public कैसे बनें",
  shortDefinition:
    "Reverse merger एक process है जहाँ private company publicly traded shell company acquire करती है, traditional IPO बिना stock exchange listing gain करती है। Private company effectively shell entity में merge करके public बनती है।",
  metaDescription:
    "Reverse merger क्या है? Reverse mergers कैसे काम करते हैं, companies IPOs से बजाय क्यों choose करती हैं, SEC filing requirements, shell company acquisitions के risks, regulatory scrutiny।",
  wordCount: 440,
  category: "Market Structure",
  tags: ["reverse-merger", "shell-company", "going-public", "ipo-alternative", "sec-filings"],
  relatedSlugs: ["ipo", "spac", "direct-listing", "sec-edgar", "8k-filing"],
  relatedTerms: ["ipo", "spac", "direct-listing", "sec-edgar", "8k-filing"],
  faq: [
    {
      question: "Reverse merger SPAC से कैसे different है?",
      answer:
        "दोनों private company + public shell merge। लेकिन SPAC fresh capital raise करता है IPO specifically acquisition के लिए — trust hundreds of millions cash। Traditional reverse merger dormant shell little/no cash। SPACs formal timelines, shareholder votes, redemption rights, extensive SEC disclosure। Reverse mergers fewer protections, less transparency। SPACs essentially reverse merger concept का modern, regulated evolution।",
    },
    {
      question: "Company IPO बजाय reverse merger क्यों choose करती है?",
      answer:
        "Speed और certainty primary reasons। Traditional IPO 6-12 months SEC review, roadshows, market timing। Reverse merger weeks-few months complete। Cost भी lower — no underwriter fees (typically 5-7% IPO proceeds)। Small companies, international companies US listing seeking, uncertain market conditions — faster, cheaper path। Trade-off: reverse merger itself कोई fresh capital नहीं raise (separately raise करना होगा)।",
    },
    {
      question: "Reverse merger companies में invest करने के risks क्या हैं?",
      answer:
        "Elevated risks: (1) Less due diligence — underwriter review और full S-1 process बिना कम independent vetting। (2) Shell risks — unknown liabilities, lawsuits, tax obligations। (3) Lower liquidity — बहुत से OTC markets पर thin volume trade। (4) Higher fraud incidence — 2010-2012 Chinese reverse merger scandals में dozens companies fraudulent financials। (5) Lock-up uncertainty — insider selling patterns post-merger prices depress।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Reverse merger traditional going-public process flip करता है। Private company IPO file करके public को shares sell करने बजाय, already-public company — typically shell company (stock exchange listing है लेकिन कोई active business नहीं) — acquire या merge करती है। Merger बाद private company business public entity ticker under operate, private company owners combined company shares majority receive।</p>

<h2>Reverse Merger कैसे काम करता है</h2>

<ol>
<li><strong>Shell company find:</strong> Private company publicly listed shell identify — SEC filings और exchange listing maintain लेकिन meaningful operations/assets नहीं। Specialized brokers shells private companies से match।</li>
<li><strong>Merger negotiate:</strong> Private company shareholders agree private shares exchange controlling stake (typically 80-95%) public company में। Existing shell shareholders small minority retain।</li>
<li><strong>SEC filings:</strong> Shell company 8-K (Super 8-K) file — transaction, private company financials, management, risk factors, business description disclose। "Super 8-K" essentially S-1 equivalent information।</li>
<li><strong>Ticker change:</strong> Shell company name और ticker new operating business reflect करने change। Private company अब public।</li>
</ol>

<h2>Traditional IPO से Advantages</h2>

<ul>
<li><strong>Speed:</strong> Reverse merger 4-8 weeks close vs IPO 6-12 months। Quickly public होना ज़रूरी हो (acquisitions, public market investors attract) — speed valuable।</li>
<li><strong>Certainty:</strong> IPO market conditions deteriorate तो pull हो सकता है। Reverse merger private negotiation — public market appetite independent।</li>
<li><strong>Cost:</strong> No underwriting fees (5-7%), no roadshow expenses, reduced legal costs। Total $500K-$2M vs IPO $5-15M।</li>
<li><strong>No pricing risk:</strong> IPO pricing uncertain final night तक। Reverse merger public sale pricing involve नहीं — market determine करता है।</li>
</ul>

<h2>Risks और Controversies</h2>

<p>Reverse mergers checkered history। 2010-2012 Chinese reverse merger frauds — dozens Chinese companies US shell companies use करके American capital markets access, revenues fabricate, assets inflate, investors mislead। Muddy Waters जैसी research firms और short sellers ने expose किया — billions investor losses, dozens SEC enforcement actions।</p>

<p>Response: SEC और exchanges ने rules tighten किए। NYSE/Nasdaq reverse merger companies को minimum audited track record और minimum price thresholds require। SEC "Super 8-K" disclosure 4 business days में closing बाद require।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में reverse merger concept different regulatory framework under — SEBI shell company listing restrict करती है। Indian investors US reverse merger companies access कर सकते हैं लेकिन extra caution ज़रूरी — lower liquidity, higher fraud risk, less transparency। Brefyr पर reverse merger 8-Ks track करें — newly public company की complete story single document में। Form 4 insider filings से former private owners building/reducing positions monitor → insider confidence signal।</p>
`,
};
