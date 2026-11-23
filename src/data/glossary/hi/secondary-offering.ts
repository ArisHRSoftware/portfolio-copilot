import type { GlossaryTerm } from "../../types";

export const termSecondaryOfferingHi: GlossaryTerm = {
  slug: "secondary-offering",
  term: "Secondary Offering (सेकेंडरी ऑफरिंग)",
  title: "Secondary Offering — Companies या Insiders Additional Stock कब Sell करती हैं",
  shortDefinition:
    "Secondary offering IPO के बाद company (follow-on offering) या existing shareholders द्वारा stock sale है, typically registered public offering fixed price पर।",
  metaDescription:
    "Secondary offering क्या है? Primary और secondary offerings difference, follow-on offerings, dilutive impact, pricing mechanics, और secondary offering filings कैसे find करें।",
  wordCount: 440,
  category: "Market Structure",
  tags: ["secondary-offering", "follow-on", "dilution", "capital-raising", "stock-offering"],
  relatedSlugs: ["ipo", "shelf-registration", "at-the-market-offering", "dilution", "direct-listing"],
  relatedTerms: ["ipo", "shelf-registration", "at-the-market-offering", "dilution", "direct-listing"],
  faq: [
    {
      question: "Primary और secondary offering में क्या difference है?",
      answer:
        "Primary offering (follow-on): company new shares issue और sell — proceeds receive। Total share count increase, existing shareholders dilute, company cash gain। Secondary offering: existing shareholders (insiders, VCs) अपने shares public को sell। Company को कोई proceeds नहीं। Share count increase नहीं, लेकिन increased supply price depress सकता है। बहुत सी offerings mixed — company new + existing shareholders sell।",
    },
    {
      question: "Secondary offerings usually discount पर क्यों price होती हैं?",
      answer:
        "Large block shares एक बार sell → enough buyers attract करने offering price typically previous close से 2-7% नीचे। Institutional buyers discount expect compensation large supply absorb करने के लिए। Discount dilutive impact account भी करता है। Overnight offerings (close बाद price, next morning delivery) most common — typically 3-5% discount।",
    },
    {
      question: "Secondary offering ATM offering से कैसे different है?",
      answer:
        "Secondary offering: discrete, one-time event — fixed shares, fixed price, underwriter support, 1-2 days complete। ATM offering: continuous program — gradually sell prevailing market prices weeks/months। Secondary = immediate visible dilution (stock drop announcement पर)। ATM = gradual dilution quarterly filings reveal तक unnoticed। Secondary large amounts quickly; ATMs slowly less market impact।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Company IPO through public बने बाद additional capital raise या early investors stakes sell चाहें — secondary offerings दोनों purposes serve। Public markets के most common और closely watched events में से एक क्योंकि directly available shares supply affect और अक्सर stock price।</p>

<h2>Secondary Offerings के Types</h2>

<p><strong>Follow-on offering (primary):</strong> Company new shares create और sell — total outstanding share count increase। Dilutive — existing shareholders company smaller percentage own। Company proceeds receive।</p>

<p><strong>Secondary sale (pure secondary):</strong> Existing shareholders shares public को sell। No new shares create। Company no proceeds। Common sellers: VC firms, PE funds, insiders lock-up expired।</p>

<p><strong>Mixed offering:</strong> Most common structure। Company new shares issue (capital raise) + existing shareholders sell (liquidity gain)। Prospectus supplement detail shares each source।</p>

<h2>Offering Process</h2>

<ol>
<li><strong>Announcement:</strong> Company prospectus supplement (Form 424B) existing shelf registration under file, या new S-1 shelf active नहीं तो। Filing disclose: shares, selling shareholders, underwriters।</li>
<li><strong>Marketing (book-building):</strong> Underwriters 1-2 days institutional investors contact (overnight accelerated offerings)। Interest various prices indicate।</li>
<li><strong>Pricing:</strong> Trading close बाद offering price set — typically previous close से 2-7% discount। Buyers large block absorb risk compensation।</li>
<li><strong>Settlement:</strong> Shares deliver, proceeds distribute 1-2 business days।</li>
</ol>

<h2>Market Impact</h2>

<p>Secondary offerings typically stock decline cause — announcement और pricing दोनों पर:</p>

<ul>
<li><strong>Supply increase:</strong> More shares same investor capital pool compete → each share worth कम।</li>
<li><strong>Dilution (primary offerings):</strong> New shares EPS, book value/share, every per-share metric reduce। Company productively invest भी करे, dilution immediate returns take time।</li>
<li><strong>Signal value:</strong> Insiders secondary sell = stock fully valued signal। Company capital raise = internal cash generation insufficient signal — bearish cash-burning companies।</li>
<li><strong>Overhang:</strong> Offering complete बाद भी market जानता है selling shareholders additional shares future offerings sell सकते हैं → persistent downward pressure।</li>
</ul>

<h2>Secondary Offerings Evaluate करना</h2>

<ul>
<li><strong>कौन sell कर रहा?</strong> VC firms lock-up बाद sell = routine। CEO 50% stake sell = stronger bearish signal।</li>
<li><strong>Use of proceeds?</strong> "$2 billion XYZ acquisition fund" = constructive। "General corporate purposes" = concerning। "Debt repay" = neutral/positive।</li>
<li><strong>Dilution कितना?</strong> 5% share count increase modest। 30% money-losing company severe। New fully diluted share count calculate → enterprise value divide → still attractive?</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में follow-on public offerings (FPOs) और offer for sale (OFS) similar concepts — SEBI regulated। US market secondary offering filings (424B prospectus supplements) most actionable SEC filings। Brefyr पर track करें — quickly react: offering discount पर sell before, या fundamentals strong + manageable dilution पर dip buy।</p>
`,
};
