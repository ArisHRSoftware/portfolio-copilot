import type { GlossaryTerm } from "../../types";

export const termInventoryTurnoverHi: GlossaryTerm = {
  slug: "inventory-turnover",
  term: "Inventory Turnover (इन्वेंटरी टर्नओवर)",
  title: "Inventory Turnover — Company अपना Stock कितनी Fast बेचती है",
  shortDefinition:
    "Inventory turnover measure करती है कि company एक period में कितनी बार अपनी पूरी inventory sell और replace करती है — inventory management efficiency और demand strength indicate करती है।",
  metaDescription:
    "Inventory turnover क्या है? Calculate कैसे करें, days inventory outstanding, और turnover speed cash flow और profits के लिए क्यों matter करती है।",
  wordCount: 410,
  category: "Financial Metrics",
  tags: ["inventory-turnover", "efficiency", "financial-metrics", "operations", "working-capital"],
  relatedSlugs: ["asset-turnover", "receivables-turnover", "cash-conversion-cycle", "working-capital"],
  relatedTerms: ["asset-turnover", "receivables-turnover", "cash-conversion-cycle", "working-capital"],
  faq: [
    {
      question: "अच्छा inventory turnover ratio कितना है?",
      answer:
        "Industry पर depend। Grocery stores 12-20x (food perishable)। Fashion retailers 4-8x। Auto dealers 6-10x। Heavy equipment 2-4x। High turnover generally efficient management और strong demand। Excessively high = understocked, sales loss possible। Direct industry peers से compare करें।",
    },
    {
      question: "Days inventory outstanding (DIO) क्या है?",
      answer:
        "Turnover ratio को days में convert: DIO = 365 / Inventory Turnover। Turnover 10 = DIO 36.5 days — company roughly 37 दिन में full inventory sell करती है। Intuitively easier interpret और cash conversion cycle calculation में directly feed।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Inventory turnover physical products hold करने वाली company के लिए critical efficiency metric। Measure करती है कितनी quickly company inventory investment sales में convert करती है। Fast turnover = products warehouse से customer तक quickly move, cash free। Slow turnover = capital trapped unsold goods में जो eventually mark down या write off — profitability hit।</p>

<p>Indian context: India में FMCG (HUL, ITC), auto (Maruti), retail (D-Mart) companies inventory turnover closely track करती हैं। Same principles US retailers (Walmart, Costco) और manufacturers पर apply।</p>

<h2>Calculation</h2>

<p><strong>Inventory Turnover = Cost of Goods Sold / Average Inventory</strong></p>

<p>COGS income statement से। Average inventory beginning + ending balance sheet inventory का mean। COGS (revenue नहीं) use ज़्यादा accurate — inventory cost पर carry होती है balance sheet पर, selling price पर नहीं।</p>

<p>Turnover 8 = company ने साल में 8 बार पूरी inventory sell और replace की। Days: 365/8 = ~46 days inventory on hand।</p>

<h2>Cash Flow Impact</h2>

<p>Inventory = shelves पर बैठी cash। Unsold goods में tied हर dollar suppliers pay, growth invest, shareholders return करने available नहीं। Faster turnover directly cash flow improve — inventory investment ज़्यादा frequently recycle, sales से cash generate purchase cycle से पहले।</p>

<p>Growing companies के लिए especially significant। Revenue double, same turnover = inventory investment भी double — cash consume even as profits grow। Turnover improve alongside growth = inventory slowly grow relative revenue — cash release।</p>

<p>Retailers acutely sensitive: $500M inventory, 6x turnover = ~$83M locked। Turnover 8x improve = same revenue $62.5M inventory — $20M+ cash free।</p>

<h2>Quality और Obsolescence</h2>

<p>Slow-moving inventory rising obsolescence risk। Technology products months में outdated। Fashion items seasonally out of style। Food expire। Longer inventory sit = greater risk discount sell या write off — profitability hits।</p>

<p>Product category/SKU level tracking reveal करती है कौन products selling, कौन accumulating। Aggregate turnover problems mask कर सकती है — fast-sellers slow movers compensate। Financial statements footnotes inventory reserves (obsolescence provisions) disclose।</p>

<h2>Just-in-Time और Supply Chain</h2>

<p>कुछ companies deliberately high turnover pursue JIT manufacturing — components precisely when needed arrive, on-hand inventory minimize। Toyota pioneered — extraordinary turnover, billions working capital free। Trade-off: JIT systems fragile — supply disruptions production halt entirely।</p>

<p>2020-22 supply chain crisis ने companies inventory buffers build कराए — lower turnover accepted supply security के लिए। Turnover declines evaluate करें: lost efficiency या deliberate strategic shift?</p>

<p>Brefyr पर SEC filings से financial statement data inventory efficiency track — insider activity और filing analysis alongside।</p>
`,
};
