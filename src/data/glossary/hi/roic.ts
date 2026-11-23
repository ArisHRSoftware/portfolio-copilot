import type { GlossaryTerm } from "../../types";

export const termROICHi: GlossaryTerm = {
  slug: "roic",
  term: "Return on Invested Capital (रिटर्न ऑन इन्वेस्टेड कैपिटल)",
  title: "ROIC — Profitability Metrics का Gold Standard जो Value Creation दिखाता है",
  shortDefinition:
    "Return on invested capital (ROIC) after-tax operating profit को business में invested total capital से measure करता है — management debt और equity दोनों capital कितनी well allocate करता है यह capture करता है।",
  metaDescription:
    "ROIC क्या है? Return on invested capital calculate करना सीखें, ROIC vs WACC compare करें, और value-creating companies identify करना सीखें।",
  wordCount: 510,
  category: "Financial Metrics",
  tags: ["roic", "profitability", "capital-allocation", "financial-metrics", "value-creation"],
  relatedSlugs: ["roe", "roa", "wacc", "economic-moat"],
  relatedTerms: ["roe", "roa", "wacc", "economic-moat"],
  faq: [
    {
      question: "ROIC और ROE में क्या difference है?",
      answer:
        "ROIC denominator में equity और debt दोनों capital include करता है और numerator में operating profit (NOPAT) use करता है। ROE सिर्फ equity consider करता है और net income use करता है। ROIC capital structure से unaffected है — company debt add करके ROIC inflate नहीं कर सकती जैसे ROE कर सकती है। ROIC truer picture देता है कि management all capital कितनी well deploy करता है।",
    },
    {
      question: "Investors ROIC को WACC से compare क्यों करते हैं?",
      answer:
        "WACC company की debt और equity financing की blended cost है। जब ROIC > WACC, company investments पर funding cost से ज़्यादा earn करती है — economic value create करती है। जब ROIC < WACC, company value destroy करती है। यह ROIC vs WACC comparison सबसे rigorous test है कि company truly profitable है economic terms में।",
    },
    {
      question: "कितना ROIC strong competitive advantage indicate करता है?",
      answer:
        "जो companies 15-20% से ऊपर ROIC एक decade या ज़्यादा sustain करती हैं, उनके पास almost always durable competitive advantages होते हैं — strong brands, network effects, switching costs। Warren Buffett specifically high ROIC businesses देखते हैं। Visa, Mastercard जैसी companies consistently 25%+ ROIC earn करती हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Return on invested capital widely considered है company की economic profitability का single best measure। जहाँ ROE leverage से distort हो सकता है और ROA capital structure से skewed होता है, ROIC इन issues को cut through करता है — operating profit measure करता है total capital (debt और equity दोनों) के against जो business actually use करता है। अगर सिर्फ एक profitability metric देखना हो, तो बहुत से professional investors ROIC choose करेंगे।</p>

<h2>Calculation कैसे करें</h2>

<p><strong>ROIC = NOPAT / Invested Capital</strong></p>

<p><strong>NOPAT (Net Operating Profit After Tax)</strong> = Operating Income x (1 - Tax Rate)। यह interest expense का effect remove करता है, ensuring कि numerator operating performance reflect करता है financing decisions से independent।</p>

<p><strong>Invested Capital</strong> = Total Equity + Total Debt - Excess Cash। Invested capital total amount of money represent करता है जो business में all sources से deployed है। Excess cash subtract होता है क्योंकि money market account में cash operations में invested नहीं है — financial asset है, operating नहीं।</p>

<p>Result percentage में आता है। 15% ROIC मतलब company business में invested capital के हर dollar पर $0.15 after-tax operating profit generate करती है।</p>

<h2>ROIC vs WACC Framework</h2>

<p>ROIC का सबसे powerful use weighted average cost of capital (WACC) से compare करना है। यह comparison determine करता है कि company economic value create करती है या destroy:</p>

<p><strong>ROIC > WACC</strong>: Value creation। Business में reinvest किया हर dollar उसकी cost से ज़्यादा earn करता है। Growth shareholders के लिए accretive है। ये वो companies हैं जिनके लिए premium pay करना worth है।</p>

<p><strong>ROIC = WACC</strong>: Neutral। Company exactly अपनी cost of capital earn करती है। Growth न value create करता है न destroy। Stock book value के near trade होना चाहिए।</p>

<p><strong>ROIC < WACC</strong>: Value destruction। Reinvest किया हर dollar actually economic terms में money lose करता है। Growth shareholders को poorer बनाता है। ये companies dividends या buybacks के through capital return करें instead of reinvesting।</p>

<h2>ROIC as Moat Detector</h2>

<p>Sustainable high ROIC competitive moat का strongest quantitative signal है। Competitive markets में economic theory predict करता है कि excess returns competition attract करते हैं, जो ROIC को cost of capital की ओर drive down करता है। Companies जो elevated ROIC एक decade या ज़्यादा maintain करती हैं, उनके पास returns protect करने वाला कुछ है — brand loyalty, network effects, patents, switching costs।</p>

<p>Quality businesses screen करते समय, बहुत से fundamental investors simple filter से शुरू करते हैं: ROIC 15% से ऊपर कम-से-कम पाँच consecutive years। यह immediately competitive advantages नहीं रखने वाली companies eliminate कर देता है।</p>

<h2>भारतीय निवेशकों के लिए ROIC</h2>

<p>Indian investors के लिए ROIC especially valuable metric है US stocks evaluate करते समय। India में बहुत से investors सिर्फ P/E ratio देखते हैं, लेकिन ROIC deeper insight देता है — कि company actually value create कर रही है या destroy।</p>

<p>Vested, INDMoney, या Groww जैसे platforms पर US stocks buy करते समय, RBI LRS limit ($250,000/year) के तहत limited capital deploy कर रहे हैं। ROIC > WACC वाली companies में invest करने का मतलब है कि आपका capital ऐसी businesses में जा रहा है जो genuinely value create कर रही हैं — not just accounting profits दिखा रही हैं।</p>

<h2>Limitations और Adjustments</h2>

<p>ROIC calculation में कई judgment calls हैं जो result significantly affect कर सकते हैं। Invested capital कैसे define करें — goodwill include या exclude — ROIC materially change करता है। Operating leases, pension obligations, और capitalized R&D costs भी consideration चाहते हैं। Methodology में consistency individual adjustments से ज़्यादा important है।</p>

<p>Tax rates another complication present करते हैं। Net operating loss carryforwards, tax credits, या low-tax jurisdictions में operations वाली companies artificially high ROIC report कर सकती हैं।</p>

<p>Brefyr पर SEC filings से sourced company financial data profitability metrics assess करने और insider trading signals और filing history के साथ track करने देता है।</p>
`,
};
