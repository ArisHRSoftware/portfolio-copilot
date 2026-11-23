import type { GlossaryTerm } from "../../types";

export const termDutchAuctionHi: GlossaryTerm = {
  slug: "dutch-auction",
  term: "Dutch Auction IPO (डच ऑक्शन IPO)",
  title: "Dutch Auction IPO — Investors नए Stock की Price कैसे Set करते हैं",
  shortDefinition:
    "Dutch auction IPO pricing mechanism है जहाँ investors various prices पर shares bid करते हैं, और IPO price उस highest price पर set होती है जो सभी offered shares sell allow करे — fair, demand-driven pricing ensure।",
  metaDescription:
    "Dutch auction IPO क्या है? Auction process कैसे काम करता है, Google ने 2004 में क्यों use किया, traditional book-building से advantages, और Dutch auction IPOs rare क्यों रहते हैं।",
  wordCount: 430,
  category: "Market Structure",
  tags: ["dutch-auction", "ipo", "pricing", "auction", "book-building", "public-offering"],
  relatedSlugs: ["ipo", "direct-listing", "spac", "secondary-offering"],
  relatedTerms: ["ipo", "direct-listing", "spac", "secondary-offering"],
  faq: [
    {
      question: "Dutch auction IPO regular IPO से कैसे different है?",
      answer:
        "Traditional IPO: underwriters roadshow conduct, institutional demand book build, price underwriter + company set — conservative pricing 'pop' create institutional clients benefit। Dutch auction: सभी investors (institutional + retail) bids submit — quantity और maximum price specify। IPO price clearing price पर set जो सभी shares sell। Clearing price या ऊपर bid सभी same clearing price pay। Access democratize, fair-value pricing aim।",
    },
    {
      question: "Google ने IPO के लिए Dutch auction क्यों choose किया?",
      answer:
        "Google founders first-day pop minimize चाहते थे (जो underwriters institutional clients left money on the table) और retail + institutional investors equal access। Traditional roadshow process और underwriter-managed book-building conflicts of interest avoid। 2004 Google IPO modified Dutch auction through Morgan Stanley और Credit Suisse underwrite। $85/share IPO, $100.34 day-one close — 18% pop, significant लेकिन potentially traditional IPO कम high-demand offering।",
    },
    {
      question: "Dutch auction IPOs ज़्यादा popular क्यों नहीं हुए?",
      answer:
        "कई factors: (1) Underwriters traditional book-building prefer — allocation control (best clients reward) और higher fees। Banks Dutch auctions promote incentive नहीं। (2) Companies execution risk — low bids auction → IPO price expectations नीचे, embarrassing। (3) Process investors unfamiliar → participation friction। (4) Institutional investors traditional system prefer (preferential allocations)। Concept elegant लेकिन IPO market established incentive structure fight।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Dutch auction IPO traditional behind-closed-doors pricing process transparent, market-driven auction से replace करता है। Underwriters stock worth decide और कौन buy — बजाय सभी investors bids submit quantity और maximum price indicating। Company फिर IPO price उस level set जो सभी offered shares sell, every winning bidder same clearing price pay।</p>

<h2>Dutch Auction Process कैसे काम करता है</h2>

<ol>
<li><strong>Price range set:</strong> Company advisors preliminary price range establish (e.g., $80-$120/share) bidders guide। S-1 registration statement publish।</li>
<li><strong>Bidding opens:</strong> 2-4 weeks bidding period investors bids submit — quantity + maximum price। Example: "500 shares at up to $100" या "1,000 shares at up to $90।"</li>
<li><strong>Bids rank:</strong> सभी bids highest → lowest price sort। Top से shares allocate bidders तक offered shares account।</li>
<li><strong>Clearing price determine:</strong> Clearing price = lowest bid जो allocation included — cumulative demand offered shares equal price। सभी winning bidders (clearing price या ऊपर bid) same clearing price pay, चाहे कितना भी ऊपर bid किया हो।</li>
<li><strong>Allocation और trading:</strong> Winning bidders shares distribute, regular exchange trading शुरू।</li>
</ol>

<p><strong>Example:</strong> Company 10 million shares offer। Bidders:</p>
<ul>
<li>2 million shares at $110</li>
<li>3 million shares at $100</li>
<li>4 million shares at $95</li>
<li>3 million shares at $90</li>
<li>2 million shares at $85</li>
</ul>

<p>Cumulative demand: $110 → 2M। $100 → 5M। $95 → 9M। $90 → 12M (10M exceed)। Clearing price $90 — 10 million fill last price। $90 bidders partial allocation (3M में 1M fill)। Everyone $90 pay, $110 bid भी।</p>

<h2>Dutch Auctions के Advantages</h2>

<ul>
<li><strong>Fair price discovery:</strong> Price aggregate investor demand set, underwriter judgment नहीं। Stock true market value closer, first-day pop reduce → company ज़्यादा value capture।</li>
<li><strong>Equal access:</strong> Retail investors institutions alongside bid। No preferential allocation brokerage relationships based।</li>
<li><strong>Transparency:</strong> Rules-based process — highest bids win, everyone same price pay। No opaque allocation decisions।</li>
<li><strong>Reduced underpricing:</strong> Academic research: Dutch auction IPOs average first-day pops smaller — company ज़्यादा value capture।</li>
</ul>

<h2>Notable Dutch Auction IPOs</h2>

<p>Google 2004 IPO सबसे famous Dutch auction। 19.6 million shares, preliminary range $108-$135। Clearing price $85 — range नीचे — rocky process (Playboy interview SEC quiet period near-violate)। Despite rocky process, fundamentals sound — four months में $200+। Interactive Brokers (2007) और Morningstar (2005) भी Dutch auction use। Adoption wide नहीं — investment banking industry traditional book-building financial incentives maintain।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में IPOs book-building process use करती हैं — retail investors bid price range में, institutional investors separate। SEBI framework Dutch auction exact format permit नहीं, लेकिन book-building concept similar (demand-driven pricing)। US market Dutch auction IPO S-1 filing same fundamental information contain traditional IPO जैसा — pricing mechanism different, disclosure quality same। Brefyr पर S-1 financials, risk factors, ownership structure analyze करें — company evaluate foundation same regardless shares कैसे price और allocate।</p>
`,
};
