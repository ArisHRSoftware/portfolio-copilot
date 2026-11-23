import type { GlossaryTerm } from "../../types";

export const termLeverageHi: GlossaryTerm = {
  slug: "leverage",
  term: "Leverage (लिवरेज)",
  title: "Leverage — Borrowed Capital से Returns (और Losses) कैसे Amplify होते हैं",
  shortDefinition:
    "Leverage borrowed capital या financial instruments use करके investment की potential return increase करना है। Gains और losses दोनों amplify होते हैं, powerful लेकिन dangerous tool।",
  metaDescription:
    "Investing में leverage क्या है? Margin, options, और ETFs through leverage कैसे काम करता है, amplified returns का mathematics, और catastrophic investment losses का सबसे common cause।",
  wordCount: 460,
  category: "Trading",
  tags: ["leverage", "margin", "amplification", "risk", "leveraged-etf", "borrowed-capital"],
  relatedSlugs: ["margin-trading", "options", "short-selling", "call-option"],
  relatedTerms: ["margin-trading", "options", "short-selling", "call-option"],
  faq: [
    {
      question: "Individual investors leverage use करने के सबसे common ways क्या हैं?",
      answer:
        "सबसे common forms: (1) Margin trading — broker से borrow करके ज़्यादा stock buy (typically 2:1)। (2) Options — $500 cost call option $10,000 worth shares control करता है (roughly 20:1 notional leverage)। (3) Leveraged ETFs — TQQQ जैसे funds Nasdaq 100 की 3x daily returns provide करते हैं। (4) Futures — $15,000 margin से $250,000 exposure control (roughly 17:1)। India में F&O segment पर leverage widely available है — Nifty futures roughly 8-10x leverage offer करते हैं।",
    },
    {
      question: "Leverage investing का सबसे dangerous tool क्यों माना जाता है?",
      answer:
        "Leverage survivable losses को catastrophic बना देता है। बिना leverage 30% market decline $100,000 → $70,000 — painful but recoverable। 3:1 leverage पर same 30% decline 90% equity erase ($100,000 → $10,000 after loan repay)। 4:1 leverage पर 25% decline पूरा account wipe out। Leverage path dependency भी create करता है — investment eventually recover भी करे, margin call during drawdown आपको position से permanently force out कर सकता है।",
    },
    {
      question: "Leveraged ETFs actually leveraged long-term returns deliver करते हैं?",
      answer:
        "नहीं — leveraged ETFs daily reset होते हैं और 'volatility decay' suffer करते हैं। Stated multiple (2x/3x) daily return का है, long-term return का नहीं। Volatile sideways market में 3x ETF loss कर सकता है underlying index flat finish होने पर भी। Index 10% drop one day, 11.1% rise next (back to even) → 3x ETF 30% drop then 33.3% rise = 93.3% — flat market से 6.7% loss। Long-term buy-and-hold के लिए unsuitable; short-term directional bets का trading tool।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Leverage physics में lever जैसा — force magnify करता है। Investing में leverage मतलब borrowed money या financial derivatives use करके capital alone से बड़ी position control करना। $10,000 पर 3:1 leverage = $30,000 assets control। 10% gain = $3,000 (30% return on capital)। लेकिन 10% loss = $3,000 (30% capital loss), और 33.3% decline पूरा investment wipe out।</p>

<p>यह asymmetry — upside attractive लेकिन downside existential — leverage को simultaneously most powerful और most dangerous tool बनाती है। Leverage से ज़्यादा wealth किसी और single factor ने destroy नहीं की है।</p>

<h2>Leverage के Forms</h2>

<ul>
<li><strong>Margin trading:</strong> सबसे direct form। Broker securities secured करके money lend करता है। Regulation T 2:1 leverage allow करता है। Cost: margin interest (6-12% annually)।</li>
<li><strong>Options:</strong> Implicit leverage provide करते हैं। $3 call option $100 worth shares control — 33:1 notional leverage। Margin से advantage: defined risk (premium से ज़्यादा loss नहीं)। Disadvantage: time decay और expiration।</li>
<li><strong>Leveraged ETFs:</strong> TQQQ (3x Nasdaq 100), UPRO (3x S&P 500) जैसे funds derivatives use करके daily return multiple deliver करते हैं। Margin account unnecessary — regular ETF जैसे buy। Daily reset volatility decay cause करता है।</li>
<li><strong>Futures:</strong> Small margin deposit (5-15% contract value) से full notional amount control। E-mini S&P 500 futures roughly $250,000 exposure with $15,000 margin — roughly 17:1 leverage।</li>
</ul>

<h2>Leverage का Mathematics</h2>

<table>
<thead><tr><th>Leverage Ratio</th><th>10% Market Gain</th><th>10% Market Loss</th><th>Wipe Out Level</th></tr></thead>
<tbody>
<tr><td>1:1 (no leverage)</td><td>+10%</td><td>-10%</td><td>-100%</td></tr>
<tr><td>2:1</td><td>+20%</td><td>-20%</td><td>-50%</td></tr>
<tr><td>3:1</td><td>+30%</td><td>-30%</td><td>-33%</td></tr>
<tr><td>5:1</td><td>+50%</td><td>-50%</td><td>-20%</td></tr>
<tr><td>10:1</td><td>+100%</td><td>-100%</td><td>-10%</td></tr>
</tbody>
</table>

<p>10:1 leverage पर routine 10% market correction पूरी position eliminate। S&P 500 ज़्यादातर calendar years में 10%+ corrections experience करता है।</p>

<h2>Corporate Leverage — Balance Sheet पर Debt</h2>

<p>Companies भी leverage (debt) use करती हैं returns on equity amplify करने के लिए। 10-K filing total debt, interest expense, और debt covenants report करती है। Debt-to-equity ratio, interest coverage ratio, और EBITDA-to-debt ratio measure करते हैं company कितनी leveraged है। High corporate leverage earnings volatility amplify करती है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में F&O segment leverage widely provide करता है — Nifty futures roughly 8-10x leverage, stock futures 3-5x typical। SEBI peak margin rules 2021 से over-leveraging control करती हैं। Indian investors US market options और margin के through leverage access कर सकते हैं Interactive Brokers जैसे platforms से। Brefyr पर SEC filing analysis से corporate leverage evaluate करें — portfolio leverage alongside देखें, दोनों company prospects सही या गलत होने के consequences amplify करते हैं।</p>
`,
};
