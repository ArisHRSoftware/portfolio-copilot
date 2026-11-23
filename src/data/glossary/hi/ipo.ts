import type { GlossaryTerm } from "../../types";

export const termIpoHi: GlossaryTerm = {
  slug: "ipo",
  term: "Initial Public Offering / IPO (आईपीओ)",
  title: "IPO — Private Companies Publicly Traded Stocks कैसे बनती हैं",
  shortDefinition:
    "IPO (Initial Public Offering) वो process है जिसमें private company पहली बार public को stock shares offer करती है, stock exchange पर list होकर SEC reporting requirements subject publicly traded company बनती है।",
  metaDescription:
    "IPO क्या है? Initial public offerings S-1 filing से first trade तक कैसे काम करती हैं, underwriters की role, IPO pricing, lock-up periods, और IPO filings evaluate कैसे करें।",
  wordCount: 500,
  category: "Market Structure",
  tags: ["ipo", "going-public", "s-1", "underwriting", "lock-up", "sec-filings"],
  relatedSlugs: ["direct-listing", "spac", "dutch-auction", "secondary-offering", "sec-edgar"],
  relatedTerms: ["direct-listing", "spac", "dutch-auction", "secondary-offering", "sec-edgar"],
  faq: [
    {
      question: "IPO stocks first day इतना ज़्यादा jump क्यों करते हैं?",
      answer:
        "IPOs typically expected market value से नीचे price होते हैं strong demand और successful first day ensure करने — 'underpricing' कहते हैं। Underwriters IPO price conservative set करते हैं institutional clients reward करने। IPO price और first-day close gap = 'IPO pop'। Average first-day pop ~15-20% historically। Company perspective: shares बहुत सस्ती बेचीं। Indian investors ने Zomato, Paytm IPOs में similar dynamics देखे — listing gains/losses significant।",
    },
    {
      question: "IPO lock-up period क्या है?",
      answer:
        "Lock-up period typically 90-180 days IPO बाद — insiders (founders, executives, early investors, employees) shares sell करने prohibited। Lock-up expire → insiders sell eligible → significant selling pressure। Lock-up expirations most predictable events — date S-1 filing में disclosed, stocks frequently 2-5% decline lock-up week around। India में भी IPO lock-ups exist — SEBI regulations insiders restrict।",
    },
    {
      question: "IPO filing कहाँ read करें?",
      answer:
        "Primary IPO filing S-1 registration statement SEC EDGAR पर। Initially confidentially file, बाद public। SEC comments पर amend (S-1/A)। S-1 contain: business description, financial statements, risk factors, management compensation, insider ownership, use of proceeds, competitive landscape। Company बारे में सबसे comprehensive document जो कभी exist करेगा। IPO बाद 10-K annual, 10-Q quarterly reports।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Initial public offering company का stock market debut है। IPO से पहले company privately held — shares founders, employees, private investors (VC/PE) own करते हैं। IPO बाद brokerage account वाला कोई भी public exchange पर shares buy/sell कर सकता है। Company public capital markets access gain, early investors liquidity।</p>

<p>IPO process Securities Act of 1933 govern करता है — public offer से पहले material information full disclosure require। यह disclosure S-1 registration statement form में — corporate finance के सबसे detailed और informative documents में से एक।</p>

<h2>IPO Process</h2>

<ol>
<li><strong>Underwriters select:</strong> Company investment banks hire offering manage। Lead underwriter ("bookrunner") deal structure, shares price, institutional investors allocate। Major underwriters: Goldman Sachs, Morgan Stanley, JP Morgan।</li>
<li><strong>S-1 file:</strong> SEC में draft registration statement file (ज़्यादातर JOBS Act under confidentially, public 15 days roadshow पहले)। S-1 disclose: financials, business model, risk factors, management, insider ownership, use of proceeds।</li>
<li><strong>SEC review:</strong> SEC S-1 review → comment letters → clarifications, additional disclosures request। Company respond, amended S-1/A file। Typically 2-6 months।</li>
<li><strong>Roadshow:</strong> Management 1-2 weeks institutional investors present — business और investment thesis explain। Investors non-binding interest indicate various price levels, demand "book" build।</li>
<li><strong>Pricing:</strong> Trading first day से पहली रात underwriter और company final IPO price set investor demand based। Shares primarily institutional investors allocate।</li>
<li><strong>First day trading:</strong> Stock exchange पर trade start। Opening price supply/demand determine — IPO price से significantly ऊपर हो सकता है strong demand पर ("IPO pop")।</li>
</ol>

<h2>S-1 Filing — क्या Read करें</h2>

<ul>
<li><strong>Prospectus summary:</strong> Business, offering, key financial metrics condensed overview। यहाँ start।</li>
<li><strong>Risk factors:</strong> Dozens pages risks — legal, operational, financial, competitive। Company-specific risks genuine threats reveal।</li>
<li><strong>Business:</strong> Products, customers, competition, growth strategy detail। Often 20-40 pages।</li>
<li><strong>Financial statements:</strong> Prior 2-3 years audited results + unaudited interim। Revenue growth, profitability, cash flow, balance sheet।</li>
<li><strong>Use of proceeds:</strong> IPO money spend कैसे। "General corporate purposes" = red flag (no specific plan)। Specific allocations (debt repayment, R&D, acquisitions) reassuring।</li>
<li><strong>Dilution:</strong> IPO price net tangible book value per share कितना exceed — public investors insiders relative कितना ज़्यादा pay।</li>
<li><strong>Principal stockholders:</strong> IPO before/after ownership। 20%+ insider ownership post-IPO generally management incentives align।</li>
</ul>

<h2>Lock-Up Period और Impact</h2>

<p>Lock-up (typically 180 days) insiders immediately IPO बाद sell prevent। Lock-up expire → sellable shares supply increase — dramatically sometimes। Insiders 70% outstanding shares hold और lock-up expire → tradable float effectively triple → supply shock → stock price depress।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>Indian investors IPO concept well familiar — Zomato, Nykaa, Paytm IPOs major events। US IPOs same fundamental structure follow लेकिन SEC regulation framework different (SEBI vs SEC)। LRS under US IPOs access limited — ज़्यादातर Indian brokerages IPO allocation provide नहीं, secondary market purchase first day open। Brefyr पर S-1 filings track → Form 4 insider filings lock-up expiry बाद monitor → CEO/CFO selling = valuation concern, holding = conviction signal।</p>
`,
};
