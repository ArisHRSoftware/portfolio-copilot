import type { GlossaryTerm } from "../types";

export const termDualClassShares: GlossaryTerm = {
  slug: "dual-class-shares",
  term: "Dual Class Share Structure",
  title: "Dual Class Shares — When Founders Keep Control With Supervoting Stock",
  shortDefinition:
    "A dual class share structure creates two or more classes of stock with different voting rights, typically giving founders and insiders supervoting shares (10 or more votes per share) while public investors hold shares with one vote each.",
  metaDescription:
    "What are dual class shares? How supervoting structures work, why tech founders use them, the governance debate, and where to find share class details in SEC filings.",
  wordCount: 950,
  category: "Corporate Actions",
  tags: ["dual-class-shares", "voting-rights", "corporate-governance", "ipo", "founder-control"],
  relatedSlugs: ["voting-rights", "staggered-board", "poison-pill", "proxy-statement"],
  relatedTerms: ["voting-rights", "staggered-board", "poison-pill", "proxy-statement"],
  faq: [
    {
      question: "Which major companies have dual class share structures?",
      answer:
        "Many prominent technology and media companies use dual class structures: Alphabet (Google), Meta (Facebook), Snap, Lyft, Pinterest, and Zoom all went public with supervoting shares controlled by their founders. Berkshire Hathaway has Class A shares (high price, full voting) and Class B shares (1/1,500th of a Class A vote). The New York Times and other media companies have long used dual class structures to protect editorial independence from financial pressure.",
    },
    {
      question: "Can dual class structures be changed after a company goes public?",
      answer:
        "They can, but it rarely happens without the consent of the supervoting shareholders (typically the founders). Some companies include sunset provisions — the dual class structure automatically converts to one-share-one-vote after a specified period (commonly 7-20 years) or when the founder's ownership drops below a threshold. Without a sunset, changing the structure requires a vote of the supervoting class, which the founders control. Some companies have voluntarily collapsed their dual class structure, but this is uncommon.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A dual class share structure creates two or more classes of common stock with different voting rights. The most common arrangement gives one class (typically Class B, held by founders and insiders) 10 votes per share, while the other class (typically Class A, sold to public investors) gets 1 vote per share. This allows founders to maintain voting control of the company even after selling a majority of the economic interest to public investors. A founder holding 10% of the total shares outstanding could control over 50% of the voting power.</p>

<h2 id="how-dual-class-works">How Dual Class Structures Work</h2>

<p>The dual class structure is established in the company's certificate of incorporation before the IPO. The company creates two classes of common stock that are economically identical — they receive the same dividends per share and have the same claim on assets in liquidation — but differ in voting power. Class B shares typically carry 10 votes per share; in extreme cases (like Snap at IPO), public shares carry zero votes.</p>

<p><strong>Economic rights:</strong> Both classes receive equal dividends per share and equal per-share distributions in a liquidation or merger. The economic interest of each share is identical regardless of class.</p>

<p><strong>Voting rights:</strong> The supervoting class controls corporate decisions: board elections, executive compensation approval, merger votes, charter amendments, and all other matters requiring shareholder approval. Even if public shareholders unanimously oppose a proposal, the founder can override them with supervoting shares.</p>

<p><strong>Conversion:</strong> Supervoting shares typically convert automatically to ordinary shares upon transfer to a non-insider (sale, gift, or estate distribution). This prevents supervoting power from being transferred to outside parties and ensures the structure collapses over time as insiders sell or pass away.</p>

<h2 id="why-founders-use-them">Why Founders Adopt Dual Class Structures</h2>

<p><strong>Long-term vision.</strong> Founders argue that dual class structures protect the company from short-term market pressures. Without voting control, a founder-CEO might be forced by activist investors or hostile bidders to cut R&D spending, sell the company, or change strategy for short-term stock price gains at the expense of long-term value creation. With voting control, the founder can invest in long-term projects without fear of losing their position.</p>

<p><strong>Mission protection.</strong> Media companies like The New York Times and News Corp have used dual class structures to protect editorial independence. Tech companies like Alphabet argue that their ambitious, long-horizon projects (self-driving cars, life sciences) require patient capital allocation that quarterly earnings pressure would undermine.</p>

<p><strong>Takeover protection.</strong> Dual class shares are the ultimate anti-takeover defense. No hostile acquirer can gain control of a company when the founder controls 51%+ of the votes. This eliminates the need for other defensive measures like poison pills (though many dual class companies adopt them anyway).</p>

<h2 id="governance-debate">The Governance Debate</h2>

<p><strong>Against dual class:</strong> Governance advocates, including many institutional investors and proxy advisory firms, argue that dual class structures create an unaccountable power structure. If the founder-CEO makes poor decisions, public shareholders have no recourse. There is no mechanism to remove a failing CEO who controls the board through supervoting shares. Some of the largest governance failures in corporate history have occurred at companies with entrenched founder control.</p>

<p><strong>Index exclusion:</strong> Since 2017, the S&P 500 and other S&P Dow Jones indices have excluded new companies with dual class share structures. The FTSE Russell requires a minimum free-float voting power of 5% for index inclusion. These exclusions reduce demand for dual class stocks from index funds, potentially lowering valuations.</p>

<p><strong>Sunset provisions:</strong> A compromise position advocates for time-based or event-based sunset clauses that automatically convert supervoting shares to single-vote shares after a specified period or when the founder departs. This gives founders protection during the company's formative public years while ensuring long-term shareholder democracy.</p>

<h2 id="sec-filings">Dual Class Structures in SEC Filings</h2>

<ul>
<li><strong>S-1 (IPO Prospectus):</strong> The most detailed disclosure, describing the class structure, voting ratio, conversion terms, and sunset provisions (if any) in the "Description of Capital Stock" section.</li>
<li><strong>DEF 14A:</strong> Proxy statements show the voting power held by each class and the resulting voting control percentages for insiders.</li>
<li><strong>10-K:</strong> The annual report's equity footnotes detail the classes of stock, shares outstanding per class, and any changes during the year.</li>
<li><strong>Certificate of Incorporation:</strong> Filed with the SEC as an exhibit, containing the definitive legal terms of each share class.</li>
</ul>

<p>Brefyr processes proxy statements and S-1 filings for all SEC-reporting companies, making it straightforward for investors to identify companies with dual class structures and monitor the voting power distribution between insiders and public shareholders.</p>
`,
};
