import type { GlossaryTerm } from "../types";

export const termIronCondor: GlossaryTerm = {
  slug: "iron-condor",
  term: "Iron Condor Strategy",
  title: "Iron Condor — Profiting When a Stock Stays Within a Range",
  shortDefinition:
    "An iron condor is a four-leg options strategy that profits when the underlying stock stays within a defined price range through expiration. It involves selling an out-of-the-money call spread and an out-of-the-money put spread simultaneously.",
  metaDescription:
    "What is an iron condor? Learn how this four-leg options strategy works, when to use it, risk/reward calculations, and how to manage iron condors during the trade.",
  wordCount: 560,
  category: "Trading",
  tags: ["iron-condor", "options-strategy", "neutral", "range-bound", "income", "defined-risk"],
  relatedSlugs: ["options", "covered-call", "implied-volatility", "call-option", "put-option"],
  relatedTerms: ["options", "covered-call", "implied-volatility", "call-option", "put-option"],
  faq: [
    {
      question: "What is the maximum profit and loss on an iron condor?",
      answer:
        "The maximum profit is the total premium collected when opening the trade. This occurs when the stock stays between the two short strikes through expiration — all four options expire worthless and you keep the entire credit. The maximum loss is the width of one spread minus the premium received. For example, if you sell a $5-wide iron condor for $1.50 credit, your max profit is $150 per condor and your max loss is $350 ($500 width - $150 credit). This occurs if the stock moves beyond either wing at expiration.",
    },
    {
      question: "When is the best time to open an iron condor?",
      answer:
        "Iron condors work best when implied volatility is high relative to the stock's history (high IV Rank or IV Percentile). High IV means richer premiums — you collect more credit for the same strike widths. As IV contracts (which it typically does after the event that elevated it), the iron condor benefits from the declining option prices. Many traders open iron condors 30-45 days before expiration and after major events have passed, when IV has spiked but is expected to normalize. Avoid opening iron condors right before earnings or other binary events that could cause a large move.",
    },
    {
      question: "How do I adjust an iron condor if the stock moves against me?",
      answer:
        "Common adjustments include: (1) Rolling the tested side — if the stock is approaching your short call, buy back the call spread and sell a new one at higher strikes for a credit. (2) Closing the untested side for a small profit and using that credit to roll the tested side. (3) Closing the entire position for a partial loss if the stock has moved decisively. (4) Adding a long option on the tested side to convert the iron condor into a less risky position. The key principle is to adjust before the short strike is breached, not after. Most experienced iron condor traders set a loss exit at 2x the credit received.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>An iron condor is a market-neutral options strategy that profits from low volatility. It is constructed by simultaneously selling an out-of-the-money (OTM) <a href="/glossary/call-option">call</a> spread and an OTM <a href="/glossary/put-option">put</a> spread on the same stock with the same expiration. The result is a credit (you receive premium) and a defined profit zone — a price range within which the stock can move without causing a loss.</p>

<h2 id="construction">How to Build an Iron Condor</h2>

<p>Stock XYZ is trading at $100. You construct an iron condor with 30 days to expiration:</p>

<ol>
<li><strong>Sell 1 XYZ $105 call</strong> (collect premium)</li>
<li><strong>Buy 1 XYZ $110 call</strong> (pay premium — this caps the upside risk)</li>
<li><strong>Sell 1 XYZ $95 put</strong> (collect premium)</li>
<li><strong>Buy 1 XYZ $90 put</strong> (pay premium — this caps the downside risk)</li>
</ol>

<p>Net credit received: $2.00 per share ($200 per iron condor).</p>

<p>The profit zone is between $95 and $105 — the two short strikes. If XYZ stays in this range through expiration, all four options expire worthless and you keep the $200. The breakeven points are $93 and $107 (short strikes minus/plus the credit received). The maximum loss is $300 ($500 spread width minus $200 credit), which occurs if XYZ moves below $90 or above $110 at expiration.</p>

<h2 id="why-it-works">Why Iron Condors Work</h2>

<p>Iron condors exploit two forces that work in the seller's favor:</p>

<ul>
<li><strong>Time decay (theta).</strong> All four options lose time value every day. Since you are a net seller of options, time decay works for you. As expiration approaches, the OTM options decay faster, increasing your unrealized profit — assuming the stock stays in the range.</li>
<li><strong><a href="/glossary/implied-volatility">Implied volatility</a> contraction.</strong> If IV decreases after you open the position, all four option prices decline and you can buy back the iron condor for less than you sold it. This is why high-IV environments are ideal entry points.</li>
</ul>

<p>The iron condor profits from the most common market outcome — the stock does not make a large move. Research shows that stocks stay within their expected move (the range implied by ATM option prices) approximately 68% of the time (one standard deviation). By setting the short strikes outside the expected move, iron condors can achieve even higher win rates, though with smaller premiums.</p>

<h2 id="risk-management">Managing the Trade</h2>

<p>Iron condors require active management. The ideal outcome is that the stock stays near the center of the range and you close the trade at 50-75% of maximum profit before expiration. Waiting for 100% profit means holding through expiration, which introduces assignment risk and gamma risk in the final days.</p>

<p>If the stock moves toward one of the short strikes, the threatened side of the iron condor increases in value (costing you money to close). Common management approaches:</p>

<ul>
<li><strong>Close at a loss threshold.</strong> Many traders close the entire iron condor if the loss reaches 1.5-2x the credit received. For a $200 credit, exit if the condor costs $400-$600 to close.</li>
<li><strong>Roll the tested side.</strong> Buy back the threatened spread and sell a new one further from the current price, ideally for a credit. This resets the profit zone but extends the trade's duration.</li>
<li><strong>Close the untested side.</strong> If the stock moves sharply upward, the put spread is now worth very little. Close it for near-zero cost and let the remaining credit reduce the loss on the call spread side.</li>
</ul>

<h2 id="ideal-conditions">Ideal Conditions for Iron Condors</h2>

<p>The best iron condor candidates are stocks with:</p>

<ul>
<li>Elevated <a href="/glossary/implied-volatility">implied volatility</a> relative to their history (high IV Rank)</li>
<li>No imminent binary events (earnings, FDA decisions, court rulings)</li>
<li>A trading history of range-bound behavior in similar market conditions</li>
<li>Sufficient liquidity in the <a href="/glossary/options-chain">options chain</a> to get tight fills on all four legs</li>
</ul>

<p>Many systematic options-selling funds use iron condors as a core strategy on broad market indices (SPX, RUT) where the statistical distribution of returns is well-studied. These funds' strategies are visible in their <a href="/glossary/13f-filing">13F filings</a>, where complex multi-leg options positions reveal their approach. Tracking this institutional options activity through Brefyr's filing analysis adds a layer of market intelligence for investors building their own options strategies.</p>
`,
};
