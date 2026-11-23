import type { GlossaryTerm } from "../../types";

export const termAtTheMarketOfferingHi: GlossaryTerm = {
  slug: "at-the-market-offering",
  term: "At-the-Market Offering (ATM ऑफरिंग)",
  title: "At-the-Market Offering (ATM) — Open Market में Gradually Stock Sell करना",
  shortDefinition:
    "At-the-market offering (ATM) capital-raising method है जहाँ company newly issued shares directly open market में prevailing market prices पर designated broker-dealer through sell करती है, fixed-price offering बजाय।",
  metaDescription:
    "At-the-market offering क्या है? ATM programs कैसे काम करते हैं, companies traditional offerings बजाय क्यों prefer करती हैं, SEC filings में ATM dilution detect कैसे करें, stock prices पर impact।",
  wordCount: 440,
  category: "Market Structure",
  tags: ["atm-offering", "capital-raising", "dilution", "shelf-registration", "secondary-offering"],
  relatedSlugs: ["shelf-registration", "secondary-offering", "dilution", "ipo", "sec-edgar"],
  relatedTerms: ["shelf-registration", "secondary-offering", "dilution", "ipo", "sec-edgar"],
  faq: [
    {
      question: "ATM offering traditional stock offering से कैसे different है?",
      answer:
        "Traditional offering: company fixed number shares fixed price (usually market discount) announce, underwriters through एक बार sell। Immediate visible dilution, stock typically drop। ATM offering: shares gradually sell days/weeks/months over prevailing market prices। No fixed price, no bulk sale, dilution slowly। Stock gradually decline बजाय one-day shock। ATMs ज़्यादा flexible लेकिन कम transparent — investors exactly shares sold quarterly filings तक नहीं जानते।",
    },
    {
      question: "Company actively ATM through shares sell रही है कैसे पता करें?",
      answer:
        "Watch: (1) Prospectus supplement (Form 424B) ATM program establish — initial disclosure। (2) Quarterly 10-Q/annual 10-K filings ATM period shares sold और proceeds report। (3) Quarterly earnings releases rising share count। (4) Unusual selling volume patterns — consistent low-level selling slightly above normal daily volume। कुछ companies voluntarily monthly/quarterly 8-K filings disclose, varies।",
    },
    {
      question: "Biotech और cannabis companies ATMs इतनी frequently क्यों use करती हैं?",
      answer:
        "Typically pre-revenue/early-revenue businesses cash burn R&D/operations पर। Regular capital infusions need लेकिन stock prices volatile। Traditional offering specific moment fixed price lock = risky volatile stocks। ATM good days sell, bad days pause — better average price। Repeated traditional offerings negative signal (desperation); ATMs default capital-raising tool small-cap biotech, cannabis, tech companies।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>ATM offering capital-raising mechanism है जो public company को newly issued shares regular trading market में sell करने देता है — stock जिस price पर trade हो रही है उसी पर। Traditional secondary offering जहाँ shares एक event में price और sell होते हैं, ATM program continuously run — company broker-dealer agent instruct करती है shares opportunistically sell, usually small quantities normal trading volume में blend।</p>

<h2>ATM Programs कैसे काम करते हैं</h2>

<p>ATM program existing shelf registration (Form S-3) under operate। Company prospectus supplement (Form 424B) file — ATM establish, sales agent (typically major investment bank) name, maximum dollar shares specify।</p>

<p>Establish होने बाद company pace control। Agent instruct specific shares given day sell, minimum price thresholds set (below $X sell मत करो), या program entirely pause। Agent shares open market sell, orders normal trading activity blend। Sales ordinary sell orders look — individual sale announcement नहीं।</p>

<p>Company agent commission pay (typically 2-3% gross proceeds) — traditional offering 5-7% underwriting fee से significantly less।</p>

<h2>Companies ATMs क्यों Use करती हैं</h2>

<ul>
<li><strong>Price optimization:</strong> Strong days sell, weak days pause। Weeks/months over volume-weighted average sale price single-day fixed-price offering better achieve।</li>
<li><strong>Minimal market impact:</strong> 2 million daily volume stock में 50,000 shares/day sell invisible। Traditional offering 5 million shares at once at discount = immediate price shock।</li>
<li><strong>No pricing risk:</strong> Traditional offerings night before price — stock gap down। ATMs market पर sell, risk eliminate।</li>
<li><strong>Flexibility:</strong> Stock price double → sales accelerate। Drop → pause। Acquisition need capital → ramp up। Cash flow improve → halt entirely।</li>
</ul>

<h2>Dilution Impact</h2>

<p>ATMs dilution create — new shares total count increase, existing share earnings/assets claim reduce। लेकिन dilution gradual, retail investors real-time track difficult। Share count changes quarterly filings (10-Q/10-K) report, cumulative ATM sales table/footnote disclose।</p>

<p>Example: 100 million shares outstanding company 10 million shares ATM through six months sell = 10% dilution। Proceeds value-creating activities (R&D → revenue, accretive acquisitions) = dilution justified। Proceeds operating losses fund (payroll, rent money-losing business) = dilution destroys value।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में ATM exact equivalent नहीं — companies qualified institutional placements (QIPs) या preferential allotments through capital raise। US market invest करने वाले Indian investors ATM programs monitor करें — Brefyr पर 424B filings flag, quarterly dilution rate track। 15-20%/year dilution + insiders simultaneously selling (Form 4 visible) = serious red flags business sustainability बारे में। Active ATM + insider sales = caution signal। ATM + strong fundamentals = acceptable capital strategy हो सकती है।</p>
`,
};
