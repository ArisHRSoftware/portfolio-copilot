import type { GlossaryTerm } from "../types";

export const termBeneficialOwnershipReport: GlossaryTerm = {
  slug: "beneficial-ownership-report",
  term: "Beneficial Ownership Report",
  title: "Beneficial Ownership Report — How to Track When Major Investors Take Big Positions in Public Companies",
  shortDefinition:
    "A beneficial ownership report (Schedule 13D or 13G) is an SEC filing required when any person or group acquires beneficial ownership of more than 5% of a class of a company's equity securities, disclosing the size of the stake and the holder's intentions.",
  metaDescription:
    "What is a beneficial ownership report? How Schedule 13D and 13G filings work, the 5% reporting threshold, what activist investors must disclose, and why these filings matter.",
  wordCount: 900,
  category: "Regulatory & Compliance",
  tags: ["beneficial-ownership", "schedule-13d", "schedule-13g", "activist-investor", "sec-regulation"],
  relatedSlugs: ["beneficial-owner", "13f-filing", "insider-trading", "tender-offer", "proxy-statement"],
  relatedTerms: ["beneficial-owner", "13f-filing", "insider-trading", "tender-offer", "proxy-statement"],
  faq: [
    {
      question: "What is the difference between Schedule 13D and Schedule 13G?",
      answer:
        "Schedule 13D is the full disclosure form required when a 5%+ holder has an activist purpose — they may seek to influence or change control of the company. It requires detailed disclosure of the holder's identity, source of funds, purpose of the acquisition, and plans for the company (including any plans for extraordinary transactions, board changes, or strategic proposals). Schedule 13G is a shorter form available to passive investors who acquired their shares in the ordinary course of business without the purpose or effect of changing or influencing control. 13G requires less disclosure and has less frequent amendment obligations. If a 13G filer's intent changes from passive to activist, they must convert to a 13D within 10 days.",
    },
    {
      question: "How quickly must beneficial ownership reports be filed?",
      answer:
        "Under 2024 amendments, Schedule 13D must be filed within five business days of crossing the 5% threshold (previously 10 calendar days). Material amendments must be filed within two business days of the triggering event. Schedule 13G deadlines vary by filer type: institutional investors file within 45 days after calendar year-end, with amendments within 45 days of the end of any calendar quarter where there is a material change. Investors who cross the 10% threshold must file within five business days. These tighter deadlines reflect SEC concerns that investors were accumulating large positions before the market was notified.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Beneficial ownership reports — Schedule 13D and Schedule 13G filings — are SEC disclosure requirements triggered when any person or group acquires beneficial ownership of more than 5% of any class of a public company's equity securities. These filings are among the most market-moving SEC disclosures: a 13D filing by a prominent activist investor can send a stock price soaring as the market anticipates changes to the company's strategy, management, or capital allocation. The reports reveal who is accumulating large positions, how much they own, and — critically in the case of 13D — what they plan to do with their influence.</p>

<h2 id="beneficial-ownership-defined">What Is Beneficial Ownership</h2>

<p>Beneficial ownership under Section 13(d) of the Securities Exchange Act extends beyond direct share ownership. A person beneficially owns securities if they have or share voting power (the power to vote or direct the vote) or investment power (the power to dispose or direct the disposition). This means shares held through trusts, family members, partnerships, and entities controlled by the person all count toward the 5% threshold. Members of a "group" — two or more persons who agree to act together for the purpose of acquiring, holding, or disposing of securities — are treated as a single beneficial owner, and their combined holdings are aggregated.</p>

<h2 id="schedule-13d">Schedule 13D — The Activist Disclosure</h2>

<p>Schedule 13D is required when the holder's purpose includes influencing or changing control of the company. The filing requires extensive disclosure:</p>
<ul>
<li><strong>Identity:</strong> Name, address, citizenship, and occupation of the beneficial owner.</li>
<li><strong>Source and amount of funds:</strong> Where the money came from to acquire the shares (personal funds, borrowed money, investor capital).</li>
<li><strong>Purpose of the transaction:</strong> The key section — the holder must disclose their plans for the company. Common disclosures include seeking board representation, proposing strategic alternatives (merger, sale, spin-off), advocating for capital return (buybacks, dividends), or requesting operational changes.</li>
<li><strong>Number of shares:</strong> Total beneficial ownership, broken down by direct and indirect holdings.</li>
<li><strong>Contracts and arrangements:</strong> Any agreements with other parties regarding the company's securities.</li>
</ul>

<p>The "purpose" disclosure makes 13D filings among the most informative and market-moving SEC documents. When an activist investor like Elliott Management, Icahn Enterprises, or Third Point files a 13D disclosing plans to push for board changes or a strategic review, the stock often moves 5-15% on the filing day alone.</p>

<h2 id="schedule-13g">Schedule 13G — The Passive Disclosure</h2>

<p>Schedule 13G is a shorter, less detailed alternative available to investors who acquired their shares in the ordinary course of business without an activist purpose. Three categories of filers can use 13G: qualified institutional investors (banks, broker-dealers, insurance companies), passive investors (anyone who certifies they did not acquire shares with the purpose of influencing control), and exempt investors (those qualifying under specific regulatory exemptions). The 13G requires less detailed disclosure — no purpose statement, no source of funds, no plans — and has less frequent amendment requirements.</p>

<h2 id="market-significance">Market Significance</h2>

<p>Beneficial ownership reports are critical signals for investors. A 13D filing by an activist investor typically triggers a re-evaluation of the company's strategy, valuation, and governance. Studies show that activist 13D filings are associated with positive abnormal returns of 5-7% around the filing date. Even 13G filings by prominent institutional investors (Warren Buffett's Berkshire Hathaway filing a 13G showing a new position) can move stock prices significantly as the market interprets the investment as a vote of confidence in the company.</p>

<h2 id="sec-filings">Beneficial Ownership in SEC Filings</h2>

<ul>
<li><strong>Schedule 13D:</strong> Full disclosure filing for activist 5%+ holders, with amendments (13D/A) for material changes.</li>
<li><strong>Schedule 13G:</strong> Short-form filing for passive 5%+ holders, with annual and quarterly amendments.</li>
<li><strong>DEF 14A:</strong> Proxy statements include a beneficial ownership table showing all 5%+ holders and insider ownership.</li>
<li><strong>Form 13F:</strong> Quarterly holdings reports from institutional managers provide additional context on large holders.</li>
</ul>

<p>Brefyr monitors 13D and 13G filings in real time for all SEC-reporting companies, alerting investors when activist or institutional investors cross the 5% threshold or amend their ownership or intentions for companies in their portfolio.</p>
`,
};
