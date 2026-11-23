import type { GlossaryTerm } from "../../types";

export const termDirectListingHi: GlossaryTerm = {
  slug: "direct-listing",
  term: "Direct Listing (डायरेक्ट लिस्टिंग)",
  title: "Direct Listing — IPO या Underwriters बिना Public कैसे बनें",
  shortDefinition:
    "Direct listing going public method है जहाँ company existing shares stock exchange पर list करती है बिना new shares issue, underwriters, या lock-up period — existing shareholders immediately market-determined prices पर sell कर सकते हैं।",
  metaDescription:
    "Direct listing क्या है? IPOs से कैसे different (no dilution, no lock-up, no underwriter fees), Spotify और Coinbase जैसे notable examples, SEC filing requirements।",
  wordCount: 440,
  category: "Market Structure",
  tags: ["direct-listing", "going-public", "ipo-alternative", "no-dilution", "exchange-listing"],
  relatedSlugs: ["ipo", "spac", "dutch-auction", "secondary-offering", "sec-edgar"],
  relatedTerms: ["ipo", "spac", "dutch-auction", "secondary-offering", "sec-edgar"],
  faq: [
    {
      question: "Company IPO बजाय direct listing क्यों choose करती है?",
      answer:
        "तीन primary reasons: (1) No underwriter fees — IPO underwriting commissions 5-7% ($ 1 billion offering पर $50-70 million saved)। (2) No dilution — traditional IPO new shares issue (dilute), direct listing new shares नहीं (SEC अब primary sales allow)। (3) No lock-up — insiders immediately sell, IPO lock-ups 180 days restrict। Direct listings well-known companies suit जो capital raise need नहीं और fair market-driven price discovery चाहती हैं।",
    },
    {
      question: "Direct listing के disadvantages क्या हैं?",
      answer:
        "IPO advantages miss: (1) No guaranteed capital raise (regulations अब primary sales permit लेकिन)। (2) No price stabilization — IPO underwriters 'greenshoe' options support; direct listings कोई support नहीं → first-day volatility ज़्यादा। (3) No institutional roadshow — underwriters marketing बिना company independent awareness generate। (4) Less analyst coverage — IPO underwriters post-offering research; direct listings minimal analyst।",
    },
    {
      question: "कौन सी notable companies ने direct listings की हैं?",
      answer:
        "Spotify (2018) पहली major NYSE direct listing। Slack (2019), Palantir (2020), Coinbase (2021) follow। Warby Parker और Squarespace (2021) भी। Trend limited: strong brand recognition और urgent capital need नहीं — marketing और distribution benefits IPO provide जो direct listing नहीं। Indian companies ने अभी तक US direct listing significant scale पर नहीं — ज़्यादातर traditional IPO या ADR route prefer।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Direct listing traditional IPO process का alternative है। Underwriters hire, roadshow conduct, new shares negotiate price पर issue — बजाय company simply existing shares SEC register करती है और exchange पर list। Trading first day existing shareholders — founders, employees, early investors — shares directly public को sell market exchange opening auction determine price पर।</p>

<h2>Direct Listing कैसे काम करती है</h2>

<ol>
<li><strong>SEC register:</strong> Company registration statement (Form S-1 या Form 8-A) SEC file — financials, business, risks, ownership structure disclose। Same transparency IPO filing जैसी।</li>
<li><strong>Exchange approval:</strong> Company NYSE या Nasdaq list apply — exchange listing requirements meet (minimum market cap, financial standards, governance)।</li>
<li><strong>Financial advisor (not underwriter):</strong> Valuation analysis, investor education, exchange coordination help। Underwriter unlike — shares buy/sell, price guarantee, या stabilization provide नहीं।</li>
<li><strong>Reference price:</strong> Exchange trading शुरू से पहली शाम "reference price" set — valuation estimate, guaranteed price नहीं — opening auction starting point।</li>
<li><strong>Opening auction:</strong> Trading first day exchange extended opening auction run। Buy/sell orders accumulate → opening price maximize shares matched। 30-60 minutes, opening price reference price से far।</li>
<li><strong>Regular trading:</strong> Opening auction बाद stock normally exchange पर trade।</li>
</ol>

<h2>IPO से Key Differences</h2>

<table>
<thead><tr><th>Feature</th><th>Traditional IPO</th><th>Direct Listing</th></tr></thead>
<tbody>
<tr><td>New shares issued</td><td>Yes (company capital raise)</td><td>No (unless combined primary)</td></tr>
<tr><td>Underwriter fees</td><td>5-7% proceeds</td><td>None (advisory fees lower)</td></tr>
<tr><td>Lock-up period</td><td>180 days typically</td><td>None — insiders immediately sell</td></tr>
<tr><td>Price discovery</td><td>Underwriter sets price</td><td>Market via auction determine</td></tr>
<tr><td>Price stabilization</td><td>Yes (greenshoe option)</td><td>None</td></tr>
</tbody>
</table>

<h2>Primary Share Sales Direct Listings में</h2>

<p>Originally direct listings new shares sell allow नहीं — सिर्फ existing shareholders sell। 2020 SEC approved NYSE proposal primary share sales direct listings में — company capital raise करे other advantages maintain (no underwriter, no lock-up, market pricing)। Broader companies range viable।</p>

<h2>Price Discovery और First-Day Volatility</h2>

<p>Underwriter book manage और price stabilize बिना, direct listings significant first-day volatility experience। Spotify $165.90 open ($132 reference price) → $149.01 close — 13% swing। Coinbase $381 open ($250 reference) → $328 close, $60+ range single session। Genuine price discovery cost — IPO artificially narrow range constrain; direct listing guardrails बिना market determine, more efficient और more volatile।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में direct listing concept SEBI framework under formally available नहीं — companies NSE/BSE traditional IPO (DRHP → book building) prefer। Indian investors US direct listings secondary market access कर सकते हैं first day opening। Lock-up नहीं → insider selling immediately शुरू — Form 4 filings particularly important। Brefyr पर direct listing बाद weeks में Form 4 filings monitor → insiders aggressively liquidate या hold → insider confidence real-time gauge।</p>
`,
};
