import type { GlossaryTerm } from "../../types";

export const termProxyStatementHi: GlossaryTerm = {
  slug: "proxy-statement",
  term: "Proxy Statement / DEF 14A (प्रॉक्सी स्टेटमेंट)",
  title: "Proxy Statement — CEO की Salary और Board Decisions कैसे देखें",
  shortDefinition:
    "Proxy statement (DEF 14A) annual shareholder meeting से पहले file होता है। इसमें executive compensation, board nominations, shareholder proposals, और voting items होते हैं।",
  metaDescription:
    "Proxy statement (DEF 14A) क्या है? Executive compensation, board elections, और shareholder voting समझें — CEO salary कैसे check करें और corporate governance evaluate करें।",
  wordCount: 450,
  category: "SEC Filings",
  tags: ["proxy-statement", "def-14a", "compensation", "governance", "voting"],
  relatedSlugs: ["10-k-filing", "sec-edgar", "form-4", "beneficial-owner"],
  relatedTerms: ["10-k-filing", "sec-edgar", "form-4", "beneficial-owner"],
  faq: [
    {
      question: "CEO की salary कैसे check करें?",
      answer: "Company की DEF 14A (proxy statement) EDGAR पर search करें। 'Compensation Discussion and Analysis' section में CEO, CFO, और top executives की total compensation detail मिलती है — salary, bonus, stock awards, option awards, all other compensation। 'Summary Compensation Table' पर direct numbers।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Proxy statement (officially DEF 14A) हर US public company annual shareholder meeting से पहले SEC के पास file करती है। यह filing corporate governance का <strong>most detailed window</strong> है — executive pay, board composition, shareholder proposals, सब यहाँ है।</p>

<h2>Proxy Statement में क्या होता है</h2>

<h3>Executive Compensation</h3>
<p>सबसे closely read section। Summary Compensation Table में top 5 executives (Named Executive Officers / NEOs) की complete pay breakdown:</p>
<ul>
<li><strong>Base salary</strong></li>
<li><strong>Bonus/incentive pay</strong></li>
<li><strong>Stock awards</strong> (RSU, restricted stock)</li>
<li><strong>Option awards</strong></li>
<li><strong>Other compensation</strong> (personal use of corporate jet, security, etc.)</li>
<li><strong>Total compensation</strong></li>
</ul>

<p>Apple CEO Tim Cook total compensation 2024: ~$74 million (mostly stock awards)। Average S&P 500 CEO: ~$16 million।</p>

<h3>Board of Directors</h3>
<p>Director nominations, backgrounds, independence status, committee assignments। Independent directors (non-employee) company से financially independent होने चाहिए — governance quality indicator।</p>

<h3>Shareholder Proposals</h3>
<p>Shareholders proposals submit कर सकते हैं — climate disclosures, political spending reports, executive pay ratios। Voting results corporate pressure gauge हैं।</p>

<h2>Say-on-Pay Vote</h2>
<p>Dodd-Frank Act require करता है कि shareholders executive pay पर advisory vote दें (usually every 1-3 years)। Vote non-binding है लेकिन 70% से कम approval embarrassing है और often pay changes trigger करता है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में promoter compensation AGM agenda में disclosed होता है। US proxy statement ज़्यादा detailed है। Indian investors proxy read करके evaluate कर सकते हैं कि management pay performance-aligned है या नहीं।</p>

<p>Key check: CEO pay vs company performance। अगर stock 3 years में flat/down है लेकिन CEO compensation बढ़ रहा है — governance red flag। Brefyr 10-K और proxy data integrate करता है।</p>
`,
};
