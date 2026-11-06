import type { GlossaryTerm } from "../types";

export const termBeneficialOwner: GlossaryTerm = {
  slug: "beneficial-owner",
  term: "Beneficial Owner",
  title: "Beneficial Owner — Who Really Controls the Shares and Why the SEC Cares",
  shortDefinition:
    "A beneficial owner is any person who directly or indirectly has voting power or investment power over shares of a public company, regardless of whose name the shares are registered in.",
  metaDescription:
    "What is a beneficial owner under SEC rules? How ownership is calculated, when SC 13D/13G filings are triggered, and how investors track who really controls a company's stock.",
  wordCount: 2200,
  category: "SEC & Regulatory",
  tags: ["beneficial-owner", "ownership", "sc-13d", "sc-13g", "sec"],
  relatedSlugs: ["form-4", "insider-trading", "sec-edgar", "proxy-statement"],
  relatedTerms: ["form-4", "insider-trading", "sec-edgar", "proxy-statement"],
  faq: [
    {
      question: "What is the difference between a beneficial owner and a registered owner?",
      answer:
        "A registered owner is the name on the stock certificate or brokerage account. A beneficial owner is the person who actually controls the shares — who decides whether to buy, sell, or vote them. These are often the same person, but not always. A CEO who holds shares through a family trust is the beneficial owner even though the trust is the registered owner. The SEC cares about beneficial ownership because it reveals who truly controls voting power.",
    },
    {
      question: "When must beneficial ownership be reported to the SEC?",
      answer:
        "When a person or group acquires beneficial ownership of more than 5% of a public company's outstanding shares, they must file a Schedule 13D (if they intend to influence the company) or Schedule 13G (if they are passive investors) with the SEC. Insiders (officers, directors, 10%+ holders) must also report all changes in ownership on Form 4 within two business days.",
    },
    {
      question: "How is beneficial ownership calculated?",
      answer:
        "Beneficial ownership includes shares you directly own, shares held by your spouse or minor children, shares held in trusts you control, shares held by entities you control (LLCs, partnerships), and shares you have the right to acquire within 60 days (through stock options or warrants). The 60-day rule is important — unexercised options that vest within 60 days count toward your ownership percentage.",
    },
    {
      question: "What happens when someone crosses the 5% beneficial ownership threshold?",
      answer:
        "They must file either a Schedule 13D or 13G with the SEC. A 13D filing is required when the holder has plans to influence the company (seeking board seats, proposing mergers, etc.) and must be filed within 10 business days. A 13G is for passive holders and has more relaxed filing deadlines. The filing is public on EDGAR, so all investors can see who has built a significant position.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>The SEC's concept of beneficial ownership cuts through the layers of trusts, holding companies, and nominee accounts to answer a simple question: who actually controls these shares? The answer determines who must file insider trading reports, who triggers the 5% ownership disclosure threshold, and who has the power to influence a company's direction through voting.</p>

<p>Understanding beneficial ownership is especially important for small-cap investors because concentrated ownership — a founder holding 40% of shares, an activist fund building a 10% position — has outsized impact on small companies. The same 5% position that's a footnote at Apple could represent a controlling stake at a $300 million company.</p>

<h2 id="sec-definition">The SEC's Definition</h2>

<p>Under SEC Rule 13d-3, a person is the beneficial owner of a security if they have or share:</p>

<ul>
<li><strong>Voting power:</strong> The power to vote or direct the voting of the security</li>
<li><strong>Investment power:</strong> The power to dispose of or direct the disposition of the security</li>
</ul>

<p>Either power, alone, is sufficient. You don't need both. A fund manager who has sole investment power (they decide to buy or sell) but no voting power (the fund's board votes the shares) is still a beneficial owner because they control the investment decision.</p>

<h3>What Counts as Beneficial Ownership</h3>

<p>The SEC aggregates ownership across all the ways a person might control shares:</p>

<ul>
<li><strong>Direct ownership.</strong> Shares in your name in a brokerage account.</li>
<li><strong>Spousal ownership.</strong> Shares held by your spouse, unless legally separated. The SEC presumes shared control.</li>
<li><strong>Minor children.</strong> Shares held by or for your minor children.</li>
<li><strong>Trust holdings.</strong> Shares held in trusts where you are the trustee or have the power to revoke the trust.</li>
<li><strong>Entity holdings.</strong> Shares held by corporations, LLCs, or partnerships that you control.</li>
<li><strong>Right to acquire.</strong> Shares you have the right to acquire within 60 days — through stock option exercises, warrant conversions, or convertible securities. These are called "beneficially owned" even though you don't actually hold the shares yet.</li>
</ul>

<p>The 60-day rule is a frequent source of confusion. If a CEO has 100,000 shares directly and 50,000 stock options vesting within the next 60 days, their beneficial ownership is 150,000 shares for SEC reporting purposes — even though only 100,000 currently exist in their account.</p>

<h2 id="5-percent-threshold">The 5% Reporting Threshold</h2>

<p>When any person or group crosses 5% beneficial ownership of a public company's outstanding shares, they enter the SEC's ownership reporting regime. The filing they must make depends on their intentions:</p>

<h3>Schedule 13D (Activist / Influential)</h3>

<p>Required when the holder has acquired shares with a purpose beyond passive investment. Common purposes include:</p>
<ul>
<li>Seeking board representation</li>
<li>Proposing a merger, acquisition, or restructuring</li>
<li>Influencing management decisions or corporate strategy</li>
<li>Changing the company's capitalization or dividend policy</li>
</ul>

<p>The 13D must be filed within 10 business days of crossing 5% and discloses: the identity of the beneficial owner, the source of funds used for the purchase, the purpose of the acquisition (with specific plans), and the number of shares owned. Any material change to the information requires an amendment within "promptly" (generally interpreted as 1-2 business days).</p>

<p>A 13D filing from a known activist investor — Carl Icahn, Elliott Management, Starboard Value, Engine Capital — is one of the most market-moving events in small-cap investing. The stock typically jumps 5-15% on the filing date because the market anticipates that the activist will push for value-creating changes.</p>

<h3>Schedule 13G (Passive)</h3>

<p>Available to investors who hold more than 5% but acquired and hold the shares in the ordinary course of business, with no plans to influence the company. Typical 13G filers include index funds (Vanguard, BlackRock), mutual funds, and pension funds.</p>

<p>The 13G has looser deadlines — initially due within 45 days of calendar year end (for passive investors who crossed 5% during the year) with annual amendments thereafter. The information required is simpler: identity, shares held, and a certification that the holdings are passive.</p>

<p>If a 13G filer's intentions change — say an index fund decides to advocate for a board change — they must amend to a 13D within 10 business days. This "upgrade" from 13G to 13D is itself a significant signal.</p>

<h2 id="form-4-connection">Connection to Form 4 (Insider Trading Reports)</h2>

<p>Beneficial ownership also drives Form 4 reporting. Officers, directors, and 10%+ beneficial owners must file Form 4 within two business days of any change in their beneficial ownership — every purchase, sale, option exercise, gift, or other transaction.</p>

<p>The "10%+ beneficial owner" category is important. A hedge fund that crosses 10% of a company's shares becomes a Section 16 insider, subject to:</p>
<ul>
<li>Form 4 reporting for every transaction</li>
<li>Short-swing profit rules (Section 16(b)) — profits from any purchase and sale within a 6-month window must be returned to the company</li>
<li>Enhanced disclosure in the company's proxy statement</li>
</ul>

<p>These obligations create a natural deterrent to excessive short-term trading by large holders, which is exactly the SEC's intent.</p>

<h2 id="group-ownership">Group Beneficial Ownership</h2>

<p>Two or more persons who act as a group for the purpose of acquiring, holding, or disposing of securities are treated as a single beneficial owner. If three investors each hold 2% of a company and agree to vote their shares together, they are a 6% "group" — triggering the 13D filing requirement.</p>

<p>Group formation is a key concept in activist campaigns. When an activist investor quietly approaches other shareholders and secures their agreement to support a board campaign, the group's combined holdings may cross 5% and require disclosure. The timing of when a "group" legally forms is often disputed in SEC enforcement actions.</p>

<h2 id="reading-ownership-tables">Reading Ownership Tables in SEC Filings</h2>

<p>Every 10-K (Item 12) and every proxy statement (DEF 14A) includes a table showing the beneficial ownership of all directors, officers, and 5%+ holders. These tables have specific columns:</p>

<ul>
<li><strong>Shares beneficially owned.</strong> The total, including options exercisable within 60 days.</li>
<li><strong>Percent of class.</strong> The ownership percentage, calculated using the company's total outstanding shares plus the individual's exercisable options (but not other people's options).</li>
<li><strong>Sole voting power.</strong> Shares where the person has exclusive voting control.</li>
<li><strong>Shared voting power.</strong> Shares where voting is shared with another person (e.g., joint accounts, shared trusts).</li>
<li><strong>Sole investment power.</strong> Shares where the person has exclusive control over buy/sell decisions.</li>
<li><strong>Shared investment power.</strong> Shares where investment decisions are shared.</li>
</ul>

<p>For small-cap investors, the ownership table reveals critical dynamics: Is the founder still heavily invested? Are insiders' interests aligned with public shareholders? Has an institution built a concentrated position? Is any single holder large enough to block a takeover or force one?</p>

<p>Brefyr extracts ownership data from proxy statements and Form 4 filings for all 7,600+ tracked companies, displaying insider ownership percentages and recent transaction history on each stock page.</p>
`,
};
