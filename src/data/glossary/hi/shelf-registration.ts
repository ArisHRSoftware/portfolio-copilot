import type { GlossaryTerm } from "../../types";

export const termShelfRegistrationHi: GlossaryTerm = {
  slug: "shelf-registration",
  term: "Shelf Registration (शेल्फ़ रजिस्ट्रेशन)",
  title: "Shelf Registration — Pre-Approved Stock Sales जो Companies कभी भी Use कर सकती हैं",
  shortDefinition:
    "Shelf registration (Form S-3) SEC filing है जो public company को securities advance में register करने और three-year period में incrementally sell करने allow करती है हर offering के लिए new registration बिना।",
  metaDescription:
    "Shelf registration क्या है? Form S-3 shelf registrations कैसे काम करती हैं, companies क्यों file करती हैं, at-the-market offerings shelf registrations कैसे use करती हैं, investors के लिए signal।",
  wordCount: 440,
  category: "Market Structure",
  tags: ["shelf-registration", "s-3", "offering", "dilution", "sec-filings", "capital-raising"],
  relatedSlugs: ["at-the-market-offering", "secondary-offering", "dilution", "sec-edgar"],
  relatedTerms: ["at-the-market-offering", "secondary-offering", "dilution", "sec-edgar"],
  faq: [
    {
      question: "Shelf registration मतलब company definitely stock sell करेगी?",
      answer:
        "नहीं। Shelf registration option देती है sell करने का, obligation नहीं। बहुत सी companies active shelf registrations capital planning tool के रूप में maintain — pre-approved line of credit जैसा जो कभी use नहीं। Registration SEC review weeks/months eliminate करती है। कुछ shelves entire three-year life unused। Actual sell decision prospectus supplement filing (424B) में disclose — तब actual sale।",
    },
    {
      question: "Shelf पर कौन सी securities register हो सकती हैं?",
      answer:
        "Common stock, preferred stock, debt securities (bonds, notes), warrants, और units (combinations)। S-3 filing maximum aggregate dollar amount specify — example 'up to $500 million any combination of common stock, preferred stock, debt securities।' Flexibility — market conditions best होने पर appropriate financing instrument choose।",
    },
    {
      question: "Company की shelf registration EDGAR पर कैसे find करें?",
      answer:
        "Shelf registrations Form S-3 (या S-3ASR well-known seasoned issuers — automatically effective) file होती हैं। SEC EDGAR पर company search → S-3 filings देखें। Initial registration total amount और securities types। Company actually sell करे → prospectus supplement (424B filing) specific offering terms — shares, price, underwriters, use of proceeds। 424B supplement actual sale signal।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Shelf registration SEC से pre-approval है company को securities time के साथ sell करने की, maximum amount तक, हर sale full registration process बिना। एक permit जो company "shelf" पर रखती है और market conditions favorable हों, capital need हो, या strategic opportunities आएँ तब use।</p>

<p>Form S-3 SEC में file, three years valid। Period में company registered securities — common stock, preferred stock, debt, warrants — various methods से sell: at-the-market offerings, secondary offerings, block sales।</p>

<h2>Shelf Registrations कैसे काम करती हैं</h2>

<ol>
<li><strong>Filing:</strong> Company Form S-3 SEC में file — maximum aggregate dollar value और securities types specify। Well-known seasoned issuers (WKSIs — $700M+ public float) → Form S-3ASR automatically effective upon submission।</li>
<li><strong>SEC review:</strong> Non-WKSI companies → SEC review, comments, amendments। 2-8 weeks। Declared effective → shelf live।</li>
<li><strong>Takedown:</strong> Company sell decide → prospectus supplement (Form 424B) file — specific terms: shares, offering price, underwriter, use of proceeds। यह "takedown" shelf से।</li>
<li><strong>Execution:</strong> Securities sell, proceeds company को। Remaining shelf capacity sold amount से reduce।</li>
</ol>

<h2>Companies Shelf Registrations क्यों File करती हैं</h2>

<ul>
<li><strong>Speed:</strong> Capital need arise (acquisition, debt maturity, cash needs) → days में market access vs weeks/months new registration। Volatile markets में timing matters।</li>
<li><strong>Flexibility:</strong> Multiple security types cover। Share price high → stock issue; interest rates low → debt; income investors eager → preferred stock। Decision optimal moment defer।</li>
<li><strong>Reduced costs:</strong> One comprehensive S-3 cheaper than separate registrations। Legal/accounting fees once।</li>
<li><strong>Signal management:</strong> Shelf registration disclosed option, commitment नहीं। Imminent dilution signal बिना shelf access maintain। Market generally routine capital planning treat करता है।</li>
</ul>

<h2>Shelf Registrations और At-the-Market Offerings</h2>

<p>ATM offerings shelf registrations use करने का most common way। Company broker-dealer engage करती है shares gradually open market में sell — days, weeks, months over prevailing market prices पर। हर ATM program shelf under established, prospectus supplement से disclosed। Gradual nature large one-time offering की price impact minimize।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI framework different structure follow करता है — qualified institutional placements (QIPs) somewhat similar concept, लेकिन shelf registration exact equivalent नहीं। US market invest करने वाले Indian investors shelf registrations monitor करें — Brefyr पर S-3 filings track करें, 424B supplements watch। Company routine flexibility maintain कर रही है vs actively shareholders dilute कर रही operations fund — critical difference stock valuations evaluate करने और Form 4 insider selling patterns monitor करने में।</p>
`,
};
