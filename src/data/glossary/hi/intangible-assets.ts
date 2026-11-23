import type { GlossaryTerm } from "../../types";

export const termIntangibleAssetsHi: GlossaryTerm = {
  slug: "intangible-assets",
  term: "Intangible Assets (इंटैंजिबल एसेट्स)",
  title: "Intangible Assets — Non-Physical Assets जो अक्सर Company की ज़्यादातर Value Drive करती हैं",
  shortDefinition:
    "Intangible assets non-physical assets हैं जैसे patents, trademarks, customer relationships, technology — business combination से acquire होने पर balance sheet पर record और useful lives में amortize।",
  metaDescription:
    "Intangible assets क्या हैं? Types, balance sheet पर कैसे दिखती हैं, amortization vs impairment, और SEC filings में details कहाँ मिलती हैं।",
  wordCount: 410,
  category: "Accounting & Audit",
  tags: ["intangible-assets", "patents", "trademarks", "amortization", "balance-sheet"],
  relatedSlugs: ["goodwill", "impairment", "acquisition", "gaap", "stock-based-compensation"],
  relatedTerms: ["goodwill", "impairment", "acquisition", "gaap", "stock-based-compensation"],
  faq: [
    {
      question: "Goodwill और intangible assets में क्या difference है?",
      answer:
        "Identifiable intangible assets separate और sell/license/transfer हो सकती हैं — patents, customer lists, trade names, technology। Measurable fair values, finite/indefinite useful lives। Goodwill residual है — acquisition में identifiable assets allocate करने के बाद जो बचता है। Separately sell नहीं हो सकती। Finite-lived intangibles amortize; goodwill amortize नहीं, annually impairment test।",
    },
    {
      question: "Internally developed intangibles balance sheet पर क्यों नहीं दिखतीं?",
      answer:
        "US GAAP में ज़्यादातर internally developed intangible assets capitalize नहीं होतीं — costs expense as incurred। Company $1B drug internally develop करे — balance sheet पर zero। Same drug $1B में acquire — $1B intangible asset record। Known GAAP limitation — innovation-driven organically growing companies understated balance sheets।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Intangible assets non-physical assets हैं जो company को economic benefits provide करती हैं — patents, copyrights, trademarks, customer relationships, developed technology, software, franchise agreements। Modern economy में intangible assets अक्सर majority value represent करती हैं — technology, brands, customer relationships जो revenue और competitive advantages generate करती हैं। लेकिन GAAP में ज़्यादातर internally developed intangibles balance sheet पर कभी appear नहीं होतीं। सिर्फ़ acquired intangibles capitalize।</p>

<p>Indian context: India में भी Ind AS 38 intangible assets govern करती है। Infosys, TCS जैसी IT companies intangible-heavy हैं लेकिन internally developed software balance sheet पर limited दिखती है — same GAAP limitation apply।</p>

<h2>Acquired Intangible Assets</h2>

<p>ASC 805 (Business Combinations) require करती है acquirer सभी identifiable intangible assets separately value और record करे — contractual-legal criterion या separability criterion meet करें। Common categories:</p>
<ul>
<li><strong>Customer relationships:</strong> Existing customer contracts और relationships — अक्सर सबसे बड़ी identifiable intangible।</li>
<li><strong>Developed technology:</strong> Patented/proprietary technology, software।</li>
<li><strong>Trade names:</strong> Brand names, logos, brand equity।</li>
<li><strong>Patents:</strong> Inventions और innovations के legal rights।</li>
<li><strong>Non-compete agreements:</strong> Key employees competition restrictions।</li>
</ul>

<h2>Amortization</h2>

<p>Finite-lived intangibles estimated useful lives में amortize — typically 3-20 years। Customer relationships 10-15 years, technology 5-7 years, non-competes 2-5 years। Amortization expense income statement through flow, operating income reduce। Serial acquirers के लिए billions annually।</p>

<p>Indefinite-lived intangibles (certain trade names, perpetual licenses) amortize नहीं — annually impairment test goodwill जैसे।</p>

<h2>Internal Development Problem</h2>

<p>GAAP limitation: internally developed intangibles expense as incurred। $5B drug acquire = $5B intangible asset record। $5B R&D internally develop = nothing on balance sheet। Innovation-driven organic-growth companies systematically understated balance sheets। Acquisition-grown vs organic-grown companies balance sheet comparisons misleading हो सकते हैं।</p>

<h2>Analyzing Intangible Assets</h2>

<p>Investors evaluate करें: age और remaining useful life, annual amortization expense relative to earnings (high amortization GAAP earnings depress — companies adjusted earnings report exclude करके), impairment testing indications। Notes में intangible asset rollforward — beginning balance, acquisitions additions, amortization, impairments, ending balance।</p>

<h2>SEC Filings में</h2>

<p><strong>Balance sheet:</strong> Separate line item (या goodwill combined)। <strong>Notes:</strong> Type breakdown, gross carrying amount, accumulated amortization, net value, future amortization by year, useful life assumptions। <strong>8-K/A:</strong> Purchase price allocations। <strong>MD&A:</strong> Critical estimates discussion।</p>

<p>Brefyr intangible asset data extract करती है 10-K filings से — balance sheet composition और acquisition-related amortization impact समझने में help।</p>
`,
};
