import type { GlossaryTerm } from "../../types";

export const termAlphaHi: GlossaryTerm = {
  slug: "alpha",
  term: "Alpha (अल्फा)",
  title: "Alpha — Investment Skill (या Luck) Prove करने वाले Excess Returns",
  shortDefinition:
    "Alpha किसी investment का excess return measure करता है relative to expected return given its risk level, यह indicate करता है कि portfolio manager (या stock) ने risk-adjusted basis पर outperform किया है या underperform।",
  metaDescription:
    "Alpha investing में क्या है? Calculate कैसे करें, alpha और raw returns में difference, और consistent alpha generate करना इतना difficult क्यों है।",
  wordCount: 420,
  category: "Risk Metrics",
  tags: ["alpha", "excess-returns", "risk-metrics", "performance", "portfolio-management"],
  relatedSlugs: ["beta", "sharpe-ratio", "information-ratio", "tracking-error"],
  relatedTerms: ["beta", "sharpe-ratio", "information-ratio", "tracking-error"],
  faq: [
    {
      question: "Alpha और total return में क्या difference है?",
      answer:
        "Total return simply बताता है investment ने कितना gain या loss किया। Alpha risk adjust करता है। अगर fund ने 15% return किया जब market ने 12% किया, total outperformance 3 percentage points है। लेकिन अगर fund का beta 1.5 था (50% ज़्यादा market risk), तो expected return 18% था। Alpha actually -3% है — risk-adjusted basis पर underperform किया despite beating market in absolute terms।",
    },
    {
      question: "Consistent alpha generate करना इतना hard क्यों है?",
      answer:
        "Markets highly competitive हैं। Thousands of professional analysts और algorithms same information simultaneously process करते हैं। Mispricing typically quickly correct होती है। Transaction costs, management fees, और taxes account करने के बाद, most active managers positive alpha generate करने में fail करते हैं long periods में। Low-cost index funds majority of active funds outperform करते हैं long term में।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Alpha investing का holy grail है — market को simply ride करने के बजाय skill से generate किया गया return। जब investor या fund manager positive alpha generate करता है, मतलब उन्होंने market से ज़्यादा return extract किया जितना उनके risk level predict करता था। Negative alpha मतलब value destroy हुई — index fund ने better risk-adjusted returns produce किए होते।</p>

<h2>Calculation</h2>

<p><strong>Alpha = Actual Return - Expected Return</strong></p>

<p><strong>Expected Return = Risk-Free Rate + Beta x (Market Return - Risk-Free Rate)</strong></p>

<p>Jensen's Alpha formula: <strong>Alpha = Rp - [Rf + Beta x (Rm - Rf)]</strong></p>

<p>+2% alpha मतलब portfolio ने risk-adjusted benchmark 2 percentage points से outperform किया। -1.5% alpha मतलब risk taken account करने के बाद 1.5 points underperform।</p>

<h2>Alpha के Sources</h2>

<p><strong>Security selection</strong> — stocks pick करना जो expected returns outperform करें — classic source है। Analyst जो undervalued company identify करे market recognize करने से पहले, वो alpha generate करता है जब stock re-rates।</p>

<p><strong>Market timing</strong> — rallies से पहले exposure increase करना और declines से पहले reduce करना — alpha generate करता है। लेकिन consistently execute करना notoriously difficult है।</p>

<p><strong>Factor tilts</strong> — systematically value, momentum, quality, low volatility जैसी characteristics overweight करना — कभी-कभी alpha जैसा दिखता है लेकिन actually systematic risk premium है।</p>

<h2>Persistence Problem</h2>

<p>Investment research की सबसे important finding: alpha extremely difficult to sustain है। Studies consistently show करती हैं कि past alpha future alpha का weak predictor है। Successful strategies capital attract करती हैं, जो excess returns compete away करता है।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>Indian mutual fund industry में भी alpha debate relevant है। SEBI regulations के बाद TER (Total Expense Ratio) caps आए, लेकिन research show करती है कि Indian large-cap funds भी consistently Nifty 50 beat करने में struggle करते हैं net of fees। US markets में यह और भी true है — S&P 500 index funds majority of active US managers outperform करते हैं 10+ year periods में। Indian investors US stocks में invest करते समय alpha chase करने से पहले low-cost index funds consider करें — fees saved practically guaranteed alpha है।</p>

<p>Brefyr पर company financial data SEC filings से fundamental context provide करता है stocks की alpha potential समझने के लिए।</p>
`,
};
