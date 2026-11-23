import type { GlossaryTerm } from "../types";

export const termBlueSkyLaws: GlossaryTerm = {
  slug: "blue-sky-laws",
  term: "Blue Sky Laws",
  title: "Blue Sky Laws — State-Level Securities Regulations That Preceded Federal Law",
  shortDefinition:
    "Blue sky laws are state-level securities regulations that require securities offerings to be registered at the state level and impose anti-fraud provisions, operating alongside federal securities laws to protect investors from fraudulent schemes.",
  metaDescription:
    "What are blue sky laws? How state securities regulations work alongside federal law, the history behind the name, preemption by federal law, and what investors should know.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["blue-sky-laws", "state-regulation", "securities-registration", "investor-protection", "fraud"],
  relatedSlugs: ["securities-act-1933", "regulation-d", "regulation-a-plus", "accredited-investor"],
  relatedTerms: ["securities-act-1933", "regulation-d", "regulation-a-plus", "accredited-investor"],
  faq: [
    {
      question: "Why are they called blue sky laws?",
      answer:
        "The term originated in the early 1900s, with the most commonly cited explanation being that the laws were designed to protect investors from speculative schemes that had no more substance than 'so many feet of blue sky.' A Kansas bank commissioner used the phrase to describe fraudulent promoters who would 'sell building lots in the blue sky.' The first blue sky law was enacted in Kansas in 1911, and other states quickly followed. The phrase captures the core purpose: preventing promoters from selling worthless securities backed by nothing but imagination.",
    },
    {
      question: "Do blue sky laws still matter now that we have federal securities laws?",
      answer:
        "Yes, though their scope has narrowed. The National Securities Markets Improvement Act of 1996 (NSMIA) preempted state registration requirements for securities listed on national exchanges and for offerings to qualified purchasers. However, blue sky laws still apply to securities not listed on major exchanges, intrastate offerings, certain smaller offerings, and anti-fraud enforcement. State securities regulators remain active in bringing fraud cases, particularly involving local investment schemes, unregistered broker-dealers, and elder financial abuse.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Blue sky laws are state-level securities regulations that exist alongside — and in some cases complement — the federal securities laws administered by the SEC. Every U.S. state has its own securities regulator and its own set of laws governing the offer and sale of securities within its borders. These laws typically require registration of securities offerings, licensing of broker-dealers and investment advisers, and prohibit fraud in the sale of securities. The name evokes the idea of fraudulent schemes backed by nothing more than blue sky — empty promises sold to unsuspecting investors.</p>

<h2 id="history">Historical Context</h2>

<p>Blue sky laws predate federal securities regulation by more than two decades. Kansas enacted the first blue sky law in 1911, followed rapidly by other states concerned about fraudulent stock promotions targeting rural investors. By 1933, when the federal Securities Act was enacted, most states had their own securities statutes. The dual federal-state regulatory system persists today, though federal preemption has significantly narrowed the scope of state regulation for nationally traded securities.</p>

<p>The state-by-state approach created both protections and complications. Each state had different registration requirements, exemptions, and enforcement approaches. An offering sold in multiple states might need to comply with 50 different sets of rules — a costly and complex process known as "blue sky compliance." This complexity was a major motivation for the federal securities laws and subsequent preemption legislation.</p>

<h2 id="three-approaches">Three Regulatory Approaches</h2>

<p>State blue sky laws generally follow one of three regulatory philosophies:</p>

<p><strong>Merit review.</strong> Some states conduct a substantive review of securities offerings, evaluating whether the terms are fair and the investment has merit. A state regulator might reject a registration if the offering is unfair, the promoter's compensation is excessive, or the terms are unconscionable. This "merit review" approach goes beyond the federal disclosure-only philosophy — the state is making a judgment about the quality of the investment, not just the adequacy of disclosure.</p>

<p><strong>Disclosure-based.</strong> Other states follow the federal model — they require disclosure of material information but do not evaluate the merits of the investment. If the issuer provides complete and accurate disclosure, the registration is approved regardless of whether the investment is prudent.</p>

<p><strong>Notice filing.</strong> For federally registered securities (those listed on national exchanges or offered under certain federal exemptions), many states have adopted a simplified notice filing system. The issuer files a copy of the federal filing with the state, pays a fee, and the state registration is complete. This reduces the burden of multi-state compliance for securities that are already regulated at the federal level.</p>

<h2 id="preemption">Federal Preemption</h2>

<p>The National Securities Markets Improvement Act of 1996 (NSMIA) preempted state registration requirements for "covered securities" — securities listed on the NYSE, Nasdaq, or other national exchanges; securities offered to "qualified purchasers" (interpreted to include accredited investors for Regulation D offerings); and securities in certain SEC-registered offerings. This preemption significantly reduced the scope of blue sky laws for large, nationally traded issuers.</p>

<p>However, states retained the authority to require notice filings and collect fees for covered securities, and — critically — retained their anti-fraud enforcement powers. A state securities regulator can still bring fraud charges against anyone selling securities (covered or not) through deceptive or manipulative practices within the state.</p>

<h2 id="current-relevance">Current Relevance</h2>

<p>Blue sky laws remain important in several contexts. Small companies selling securities within a single state may rely on intrastate offering exemptions that are governed by state law. Regulation A+ offerings (Tier 1 — up to $20 million) must comply with state blue sky laws in each state where securities are offered. Regulation CF crowdfunding offerings are subject to state enforcement. And state regulators continue to be active enforcers against investment fraud, particularly schemes targeting seniors, unregistered securities offerings, and unlicensed broker-dealers and advisers.</p>

<p>The North American Securities Administrators Association (NASAA) coordinates enforcement efforts among state regulators and publishes annual lists of the most common investor threats, providing a ground-level view of fraud patterns that complements the SEC's federal enforcement perspective.</p>

<h2 id="sec-filings">Blue Sky Compliance in SEC Filings</h2>

<ul>
<li><strong>S-1 and S-3:</strong> Registration statements include a "Legal Matters" section and may reference state registration requirements.</li>
<li><strong>Form D:</strong> Filed with the SEC for Regulation D offerings, triggering notice filing requirements in states where the securities are sold.</li>
<li><strong>Regulation A+ filings:</strong> Tier 1 offerings require state-level qualification in addition to SEC qualification.</li>
</ul>

<p>Brefyr focuses on federal SEC filings, which cover the vast majority of publicly traded securities. Investors in smaller, locally offered securities should also check with their state securities regulator for additional filing information and investor alerts.</p>
`,
};
