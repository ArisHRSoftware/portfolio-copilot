import type { GlossaryTerm } from "../../types";

export const termIronCondorHi: GlossaryTerm = {
  slug: "iron-condor",
  term: "Iron Condor Strategy (आयरन कोंडोर)",
  title: "Iron Condor — Stock Range में रहे तो Profit कैसे कमाएँ",
  shortDefinition:
    "Iron condor एक four-leg options strategy है जो profit करती है जब underlying stock defined price range में रहता है expiration तक। OTM call spread और OTM put spread simultaneously sell करती है।",
  metaDescription:
    "Iron condor क्या है? यह four-leg options strategy कैसे काम करती है, कब use करें, risk/reward calculations, और trade के दौरान iron condors कैसे manage करें।",
  wordCount: 470,
  category: "Trading",
  tags: ["iron-condor", "options-strategy", "neutral", "range-bound", "income", "defined-risk"],
  relatedSlugs: ["options", "covered-call", "implied-volatility", "call-option", "put-option"],
  relatedTerms: ["options", "covered-call", "implied-volatility", "call-option", "put-option"],
  faq: [
    {
      question: "Iron condor पर maximum profit और loss क्या है?",
      answer:
        "Maximum profit = trade open करते समय total premium collected। तब होता है जब stock दोनों short strikes के बीच रहे expiration तक — चारों options expire worthless, पूरा credit keep। Maximum loss = एक spread की width minus premium received। Example: $5-wide iron condor $1.50 credit पर sell किया → max profit $150, max loss $350 ($500 width - $150 credit)। तब होता है जब stock किसी wing से beyond move करे।",
    },
    {
      question: "Iron condor open करने का best time कब है?",
      answer:
        "Iron condors best काम करती हैं जब implied volatility stock history के relative high हो (high IV Rank/Percentile)। High IV = richer premiums। IV contract होने पर (typically event pass होने के बाद) iron condor benefit करती है declining prices से। 30-45 days before expiration और major events pass होने के बाद open करें। Earnings या binary events से ठीक पहले open करने से avoid करें।",
    },
    {
      question: "Stock move करे तो iron condor कैसे adjust करें?",
      answer:
        "Common adjustments: (1) Tested side roll करें — stock short call approach करे तो call spread buy back करें और higher strikes पर new sell करें। (2) Untested side close करें small profit पर, credit use करें tested side roll करने में। (3) Decisive move पर पूरी position partial loss पर close। (4) Tested side पर long option add करें less risky position बनाने के लिए। Key: short strike breach होने से पहले adjust करें, बाद में नहीं। ज़्यादातर experienced traders 2x credit received पर loss exit set करते हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Iron condor market-neutral options strategy है जो low volatility से profit करती है। OTM call spread और OTM put spread same stock पर same expiration के साथ simultaneously sell करके construct होती है। Result एक credit (premium receive) और defined profit zone — price range जिसमें stock move करे बिना loss के।</p>

<h2>Iron Condor कैसे Build करें</h2>

<p>Stock XYZ $100 पर trade हो रहा है। 30 days expiration के साथ iron condor construct:</p>

<ol>
<li><strong>Sell 1 XYZ $105 call</strong> (premium collect)</li>
<li><strong>Buy 1 XYZ $110 call</strong> (premium pay — upside risk cap)</li>
<li><strong>Sell 1 XYZ $95 put</strong> (premium collect)</li>
<li><strong>Buy 1 XYZ $90 put</strong> (premium pay — downside risk cap)</li>
</ol>

<p>Net credit: $2.00/share ($200 per iron condor)।</p>

<p>Profit zone $95-$105 — दोनों short strikes के बीच। XYZ इस range में रहा expiration तक → चारों options expire worthless → $200 keep। Breakeven points: $93 और $107। Maximum loss $300 ($500 spread width - $200 credit) — XYZ $90 से नीचे या $110 से ऊपर जाने पर।</p>

<h2>Iron Condors क्यों काम करती हैं</h2>

<p>Iron condors दो forces exploit करती हैं जो seller के favor में काम करती हैं:</p>

<ul>
<li><strong>Time decay (theta):</strong> चारों options हर दिन time value lose करते हैं। आप net seller हैं, time decay आपके लिए काम करती है। Expiration approach होने पर OTM options faster decay, unrealized profit increase — assuming stock range में।</li>
<li><strong>Implied volatility contraction:</strong> Position open करने के बाद IV decrease हो तो चारों option prices decline → iron condor sell price से कम में buy back कर सकते हैं।</li>
</ul>

<p>Iron condor most common market outcome से profit करती है — stock large move नहीं करता। Research दिखाती है stocks approximately 68% time expected move (ATM option prices implied range) में रहते हैं। Short strikes expected move से बाहर set करने पर even higher win rates, though smaller premiums।</p>

<h2>Trade Management</h2>

<p>Iron condors active management require करती हैं। Ideal outcome: stock range center near रहे और trade 50-75% maximum profit पर close करें expiration से पहले। 100% profit wait करना assignment risk और gamma risk introduce करता है final days में।</p>

<p>Stock short strike approach करे तो threatened side value increase होता है। Management approaches:</p>

<ul>
<li><strong>Loss threshold पर close:</strong> Credit received का 1.5-2x loss पर entire iron condor close। $200 credit → $400-$600 cost पर exit।</li>
<li><strong>Tested side roll:</strong> Threatened spread buy back और new spread further OTM sell — ideally credit पर।</li>
<li><strong>Untested side close:</strong> Stock sharply move करे तो opposite side near-zero cost पर close — remaining credit loss reduce करता है।</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में Nifty options पर iron condors popular strategy है — weekly expiry options इसे और accessible बनाते हैं। Concept exactly same: defined range bet। US market में systematic options-selling funds iron condors SPX/RUT पर core strategy के रूप में use करते हैं — 13F filings में complex multi-leg positions दिखती हैं। Brefyr पर institutional options activity track करें अपनी strategies build करने के लिए।</p>
`,
};
