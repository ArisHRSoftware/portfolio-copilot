import type { GlossaryTerm } from "../types";

export const termShortSwingProfit: GlossaryTerm = {
  slug: "short-swing-profit",
  term: "Short-Swing Profit Rule",
  title: "Short-Swing Profit Rule — The Six-Month Trading Restriction on Corporate Insiders",
  shortDefinition:
    "The short-swing profit rule under Section 16(b) of the Securities Exchange Act requires corporate insiders to return to the company any profits made from buying and selling (or selling and buying) the company's stock within any six-month period.",
  metaDescription:
    "What is the short-swing profit rule? How Section 16(b) forces insiders to disgorge profits from paired trades within six months, how profits are calculated, and enforcement mechanisms.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["short-swing-profit", "section-16", "insider-trading", "disgorgement", "sec-regulation"],
  relatedSlugs: ["section-16", "insider-trading", "form-4", "rule-10b5"],
  relatedTerms: ["section-16", "insider-trading", "form-4", "rule-10b5"],
  faq: [
    {
      question: "Does the short-swing profit rule require proof of insider trading?",
      answer:
        "No. That is the rule's most important characteristic. Section 16(b) is a strict liability provision — the insider must disgorge profits from any purchase and sale within six months, regardless of whether they possessed material nonpublic information, regardless of their intent, and regardless of whether the trades were profitable overall. The rule is prophylactic: it prevents insiders from using short-term trading to profit from their position, without requiring the SEC or any plaintiff to prove actual misuse of inside information.",
    },
    {
      question: "How are short-swing profits calculated?",
      answer:
        "The calculation uses a 'lowest-in, highest-out' matching method that maximizes the disgorgeable profit. Each purchase is matched with the sale generating the highest profit within the six-month window, regardless of chronological order. This means an insider can owe disgorgement even if their overall trading in the stock resulted in a net loss. For example, if an insider bought 1,000 shares at $10 and later sold 1,000 shares at $8, but also had a sale at $12 and a purchase at $7 within the same six-month window, the matching would pair the $7 purchase with the $12 sale — a $5 profit per share — requiring disgorgement of $5,000.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The short-swing profit rule — codified in Section 16(b) of the Securities Exchange Act of 1934 — is a blunt but effective anti-abuse provision. It requires any Section 16 insider (officer, director, or 10%+ shareholder) who realizes a profit from a purchase and sale, or sale and purchase, of the company's equity securities within any six-month period to disgorge that profit to the company. The rule does not require proof that the insider traded on inside information — it is automatic. If the trades fall within the six-month window and produce a matchable profit, the money goes back to the company.</p>

<h2 id="how-it-works">How the Rule Works</h2>

<p><strong>The six-month window.</strong> Any pair of opposite transactions (buy + sell or sell + buy) where both occur within a rolling six-month period is subject to the rule. The six months are measured from the date of the first transaction to the date of the second, not on a calendar basis. A purchase on January 15 and a sale on July 14 would be within six months; January 15 and July 16 would not.</p>

<p><strong>Strict liability.</strong> The insider's intent is irrelevant. The insider may not have possessed any inside information. The insider may not have intended to trade within six months. The insider may have sold for entirely personal reasons (tax planning, divorce, medical expenses). None of this matters. If the trades match within the window and produce a calculable profit, disgorgement is required.</p>

<p><strong>Profit maximization matching.</strong> Courts use the method that maximizes the profit calculation. Each purchase price is matched against the highest sale price within six months; each sale price is matched against the lowest purchase price within six months. This can produce absurd results — an insider who lost money overall on their trading can still owe short-swing profits if the matching pairs specific transactions that show gains.</p>

<h2 id="enforcement">Enforcement Mechanism</h2>

<p>Section 16(b) provides a private right of action. The company itself can demand the profit. If the company fails to act within 60 days of a shareholder demand, any shareholder can bring a derivative lawsuit on the company's behalf. In practice, a small group of specialized plaintiffs' attorneys monitors Form 4 filings systematically, identifies potential short-swing profit violations, and brings lawsuits. The attorney's fee is paid out of the recovery, creating a self-funding enforcement mechanism.</p>

<p>This private enforcement is remarkably effective. The monitoring is comprehensive (every Form 4 filed with the SEC is scrutinized), the liability is straightforward (strict liability eliminates the need for complex fraud proof), and the economic incentive for plaintiffs' attorneys is clear. As a result, most Section 16(b) violations are caught and enforced through private litigation rather than SEC action.</p>

<h2 id="exemptions">Common Exemptions</h2>

<p>Not all transactions trigger Section 16(b) liability. The SEC has adopted several exemptions under Rule 16b-3 and other rules:</p>
<ul>
<li><strong>Grants and awards:</strong> The acquisition of securities through company compensation plans (stock option grants, RSU awards) is generally exempt from the purchase side of the matching.</li>
<li><strong>Tax-conditioned plans:</strong> Transactions under employee benefit plans meeting specified conditions.</li>
<li><strong>Certain conversions:</strong> Conversion of derivative securities (options to stock) where the terms are fixed at the time of grant.</li>
<li><strong>10b5-1 plans:</strong> While 10b5-1 plans protect against insider trading liability, they do NOT provide an exemption from Section 16(b). An insider with a 10b5-1 plan can still owe short-swing profits if the plan's trades match with other transactions within six months.</li>
</ul>

<h2 id="practical-impact">Practical Impact on Insiders</h2>

<p>The short-swing profit rule forces insiders to think carefully about the timing of all their transactions. Most insider trading policies advise officers and directors to avoid round-trip transactions (buying and selling, or selling and buying) within any six-month period. When insiders exercise stock options (a purchase) and sell the underlying shares, they must ensure at least six months have passed since any prior sale — or risk disgorgement of any matchable profit from the option exercise.</p>

<h2 id="sec-filings">Short-Swing Profits in SEC Filings</h2>

<ul>
<li><strong>Form 4:</strong> Every insider transaction is reported, creating the data trail that enables short-swing profit detection.</li>
<li><strong>DEF 14A:</strong> Proxy statements must disclose Section 16(a) reporting delinquencies — insiders who failed to file timely Forms 3, 4, or 5.</li>
<li><strong>10-K:</strong> The annual report notes any pending Section 16(b) litigation and any amounts recovered.</li>
</ul>

<p>Brefyr processes Form 4 filings for all SEC-reporting companies and flags insider trading patterns that may indicate short-swing profit exposure, helping investors understand the regulatory constraints on insider transactions.</p>
`,
};
