import type { GlossaryTerm } from "../../types";

export const termGoldenParachuteHi: GlossaryTerm = {
  slug: "golden-parachute",
  term: "Golden Parachute (गोल्डन पैराशूट)",
  title: "Golden Parachute — Takeover के दौरान Executives को मिलने वाले Lucrative Severance Packages",
  shortDefinition:
    "Golden parachute एक contractual provision है जो top executives को substantial severance benefits guarantee करती है अगर change of control — जैसे merger या acquisition — के बाद वो अपनी position खो दें।",
  metaDescription:
    "Golden parachute क्या है? Executive change-of-control provisions कैसे काम करती हैं, typical payout components, say-on-pay vote, और SEC filings में कहाँ मिलती हैं।",
  wordCount: 420,
  category: "Corporate Actions",
  tags: ["golden-parachute", "executive-compensation", "m-and-a", "corporate-governance", "severance"],
  relatedSlugs: ["executive-compensation", "say-on-pay", "merger", "acquisition", "proxy-statement"],
  relatedTerms: ["executive-compensation", "say-on-pay", "merger", "acquisition", "proxy-statement"],
  faq: [
    {
      question: "Golden parachute payouts कितने बड़े होते हैं?",
      answer:
        "Large public companies के CEOs के लिए typically $10 million से $100 million+ तक। Payout में usually 2-3x base salary और bonus, सभी unvested equity awards की acceleration, continued health benefits, और कभी-कभी tax gross-up payments शामिल होती हैं। Merger proxy statement में exact estimated payout 'golden parachute compensation' table में disclose होती है।",
    },
    {
      question: "क्या shareholders golden parachutes block कर सकते हैं?",
      answer:
        "Dodd-Frank merge proxy statements में advisory (non-binding) shareholder vote require करती है — 'say-on-golden-parachute' vote। लेकिन यह advisory है और legally payouts prevent नहीं करती। Annual say-on-pay votes में भी shareholders compensation plans against vote कर सकते हैं। Practice में courts ने golden parachutes uphold की हैं जब independent compensation committee ने approve किया हो।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Golden parachute executive के employment agreement में clause है जो substantial financial benefits provide करती है — अक्सर millions या tens of millions dollars — अगर executive terminate, demote, या resign हो specified reasons से company के change of control के बाद। Change of control typically merger, acquisition, या takeover है जो new majority owner बनाती है। Image: executive safely golden parachute से float करता है जबकि नीचे company turbulent ownership changes से गुज़रती है।</p>

<p>Indian context: India में भी promoter changes और M&A में senior management severance packages common हैं, लेकिन US system ज़्यादा formalized और publicly disclosed है SEC filings के through।</p>

<h2>Typical Components</h2>

<p><strong>Cash severance:</strong> Lump sum या payments — 2x-3x annual compensation (base salary + target bonus)। Large companies के CEOs के लिए standard।</p>

<p><strong>Equity acceleration:</strong> सभी unvested stock options, RSUs, performance shares immediately vest — single trigger (change of control पर) या double trigger (change of control + termination पर)। Large equity grants वाले executives के लिए cash severance से 5-10x ज़्यादा हो सकता है।</p>

<p><strong>Benefits continuation:</strong> Health insurance, life insurance 18-36 months तक।</p>

<p><strong>Tax gross-up:</strong> Section 280G IRC 20% excise tax लगाती है "excess parachute payments" पर। कुछ agreements में company extra money pay करती है excise tax cover करने के लिए। Shareholder pressure से कम common हो रही हैं।</p>

<h2>Single Trigger vs Double Trigger</h2>

<p><strong>Single trigger:</strong> Change of control होने पर ही benefits — executive terminate हो या नहीं। Increasingly criticized — executive को reward मिलता है transaction के लिए जो उसने orchestrate नहीं किया।</p>

<p><strong>Double trigger:</strong> Change of control + termination without cause या resignation for good reason। अब prevailing standard — executives को ownership change के लिए pay नहीं, actual job loss के लिए pay।</p>

<h2>Debate</h2>

<p><strong>Favor में:</strong> Executives objectively takeover bids evaluate करें अपनी jobs protect करने के बजाय। Value-maximizing acquisitions reject न हों। Talent attract और retain करने में मदद।</p>

<p><strong>Against:</strong> Excessively generous हो सकती हैं। Executives mergers pursue करें जो personally benefit करें (parachute payout) shareholders के बजाय। Acquisition shareholder value destroy करे और CEO $50 million लेकर चला जाए — problematic।</p>

<h2>Section 280G Tax Treatment</h2>

<p>IRS golden parachute payments की tax deductibility limit करती है। Total parachute payments 3x base amount exceed करें तो excess पर 20% excise tax (executive पर) और non-deductible (company के लिए)। कुछ agreements "best-net" provision रखती हैं।</p>

<h2>SEC Filings में Golden Parachutes</h2>

<p><strong>DEF 14A:</strong> Annual proxy statements में change-of-control provisions और "Potential Payments Upon Termination" table। <strong>Merger proxy:</strong> Specific "Golden Parachute Compensation" table। <strong>8-K:</strong> New या amended employment agreements exhibits के रूप में।</p>

<p>Brefyr proxy statements और merger filings process करती है — executive change-of-control provisions और estimated payouts review करना easy है।</p>
`,
};
