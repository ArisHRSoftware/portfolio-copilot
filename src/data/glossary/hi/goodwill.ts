import type { GlossaryTerm } from "../../types";

export const termGoodwillHi: GlossaryTerm = {
  slug: "goodwill",
  term: "Goodwill (गुडविल)",
  title: "Goodwill — Acquisitions में Companies कितना Premium Pay करती हैं और Balance Sheet पर क्या मतलब है",
  shortDefinition:
    "Goodwill एक intangible asset है जो balance sheet पर तब record होती है जब company दूसरी business को identifiable net assets की fair value से ज़्यादा में acquire करती है — brand reputation, customer relationships, और expected synergies जैसे factors का premium।",
  metaDescription:
    "Accounting में goodwill क्या है? Acquisitions से कैसे बनती है, annual impairment testing, write-downs क्या signal करती हैं, और SEC filings में कहाँ मिलती है।",
  wordCount: 420,
  category: "Accounting & Audit",
  tags: ["goodwill", "intangible-asset", "acquisition", "impairment", "balance-sheet"],
  relatedSlugs: ["intangible-assets", "impairment", "acquisition", "gaap", "book-value"],
  relatedTerms: ["intangible-assets", "impairment", "acquisition", "gaap", "book-value"],
  faq: [
    {
      question: "क्या goodwill real asset है?",
      answer:
        "Goodwill acquisition price और identifiable assets की fair value का difference represent करती है। Real economic value reflect करती है — brand strength, workforce, customer loyalty, synergy potential — लेकिन independently sell नहीं हो सकती। Business underperform करे तो goodwill impaired होती है।",
    },
    {
      question: "कुछ companies के balance sheet पर massive goodwill क्यों होती है?",
      answer:
        "Acquisitions से grow करने वाली companies — particularly technology, healthcare, media — हर deal से goodwill accumulate करती हैं। Acquisition premiums typically 20-50% market value से ऊपर। Microsoft, J&J, P&G billions in goodwill carry करती हैं decades of acquisitions से।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Goodwill ज़्यादातर large companies के balance sheet पर सबसे prominent intangible asset है। Exclusively business acquisitions से arise होती है — Company A Company B को $10 billion में buy करती है, Company B की identifiable net assets $7 billion की fair value पर, बाकी $3 billion goodwill record होती है। यह premium reflect करती है — reputation, workforce, market position, customer relationships, और expected synergies।</p>

<p>Indian context: Indian companies भी acquisitions में goodwill record करती हैं Ind AS 103 के under। Tata's Jaguar Land Rover acquisition, Flipkart-Walmart deal — इन सब में significant goodwill create हुई। Concept same है US GAAP और Ind AS दोनों में।</p>

<h2>Goodwill कैसे Create होती है</h2>

<p>Goodwill सिर्फ़ business acquisition से arise होती है — internally generate नहीं होती। Acquisition पूरी होने पर purchase price allocation (PPA) ASC 805 के under — purchase price सभी identifiable assets और liabilities को fair value पर assign होती है। Customer relationships, technology, trade names, patents — separately value और record। जो purchase price बच जाता है identifiable assets और liabilities allocate करने के बाद — वो goodwill।</p>

<p>Goodwill का size दो factors पर depend: acquirer ने कितना pay किया (competitive bidding, strategic value) और target की value कितनी identifiable vs unidentifiable intangible assets में। Technology acquisitions में, जहाँ workforce और culture primary value हैं, goodwill अक्सर 50%+ purchase price।</p>

<h2>Annual Impairment Testing</h2>

<p>ASC 350 के under goodwill amortize नहीं होती — balance sheet पर indefinitely original amount पर रहती है जब तक impaired न हो। Companies annually test करती हैं (ज़्यादातर Q4 choose करती हैं) और triggering events पर। Test reporting unit की fair value को carrying amount से compare करता है। Carrying amount exceed करे fair value तो goodwill difference से impaired।</p>

<p>Fair value DCF analysis, comparable company multiples, या combination से estimate। Growth rates, discount rates, margin projections — assumptions critical और auditors heavily scrutinize करते हैं।</p>

<h2>Goodwill Impairment क्या Signal करती है</h2>

<p>Impairment charge public admission है कि company ने acquisition के लिए overpay किया या acquired business ने expected performance deliver नहीं की। $5 billion write-down = $5 billion value जो materialize नहीं होगी। Repeated impairments systematic overpaying pattern indicate कर सकती हैं।</p>

<p>History की सबसे बड़ी impairments: AOL Time Warner ($99B, 2002), Kraft Heinz ($15.4B, 2019), GE ($22B, 2018)।</p>

<h2>Balance Sheet Significance</h2>

<p>Investors evaluate करें: goodwill to total assets ratio (30%+ heavy reliance on acquisition-driven growth), goodwill to shareholders' equity (100%+ means equity entirely goodwill valuations पर depend), और market cap vs net assets excluding goodwill gap।</p>

<h2>SEC Filings में Goodwill</h2>

<p><strong>Balance sheet:</strong> Separate line item total assets में। <strong>Notes:</strong> Goodwill rollforward, reporting unit allocation, impairment testing methodology। <strong>8-K/A:</strong> Purchase price allocation significant acquisitions की। <strong>MD&A:</strong> Impairment risk discussion।</p>

<p>Brefyr goodwill balances और impairment charges extract करती है 10-K/10-Q filings से — critical balance sheet item monitor करने में मदद।</p>
`,
};
