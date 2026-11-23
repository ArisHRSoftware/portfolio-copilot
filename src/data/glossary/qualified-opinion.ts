import type { GlossaryTerm } from "../types";

export const termQualifiedOpinion: GlossaryTerm = {
  slug: "qualified-opinion",
  term: "Qualified Audit Opinion",
  title: "Qualified Audit Opinion — When the Auditor Says 'Fair, Except For...'",
  shortDefinition: "A qualified audit opinion is an auditor's report that the financial statements are presented fairly in all material respects except for a specific identified issue — a departure from GAAP or a limitation on the audit scope — that is material but not pervasive enough to warrant an adverse opinion.",
  metaDescription: "What is a qualified audit opinion? What triggers the 'except for' language, how it differs from clean and adverse opinions, and what it signals to investors reading SEC filings.",
  wordCount: 800, category: "Accounting & Audit", tags: ["qualified-opinion", "audit", "except-for", "scope-limitation", "gaap-departure"],
  relatedSlugs: ["audit-opinion", "adverse-opinion", "going-concern", "material-weakness", "gaap"], relatedTerms: ["audit-opinion", "adverse-opinion", "going-concern", "material-weakness", "gaap"],
  faq: [{ question: "How serious is a qualified audit opinion?", answer: "A qualified opinion is a significant warning signal. It means the auditor found a specific issue that is material — large enough to affect investment decisions — but not so pervasive that it undermines the entire set of financial statements. Qualified opinions are uncommon among large public companies (most issues are resolved before the opinion is issued), so receiving one suggests a genuine disagreement between the company and its auditor. Investors should read the qualification paragraph carefully to understand the specific issue, assess its financial impact, and consider whether it indicates broader accounting problems." },
  { question: "What is the difference between a qualified and an adverse opinion?", answer: "The difference is severity and pervasiveness. A qualified opinion identifies a material issue but concludes that the rest of the financial statements are fairly presented — the problem is isolated. An adverse opinion concludes that the misstatements are both material and pervasive — the financial statements as a whole cannot be relied upon. Think of it this way: a qualified opinion says 'this specific item is wrong, but the rest is okay.' An adverse opinion says 'the problems are so widespread that the financial statements as a whole are not reliable.'" }],
  lastUpdated: "2026-11-18",
  body: `
<p>A qualified audit opinion — sometimes called an "except for" opinion — is the auditor's formal statement that the financial statements are presented fairly in all material respects except for a specific identified issue. The qualification identifies exactly what the problem is: either a departure from GAAP (the company used an accounting treatment the auditor disagrees with) or a scope limitation (the auditor was unable to obtain sufficient evidence about a specific account or transaction). The issue must be material (significant enough to influence investment decisions) but not pervasive (not so widespread that it undermines the reliability of the financial statements as a whole).</p>

<h2 id="gaap-departure">Qualification Due to GAAP Departure</h2>

<p>When a company uses an accounting method that departs from GAAP and refuses to change, the auditor issues a qualified opinion. The qualification paragraph describes the departure and quantifies its effect on the financial statements. Examples include using a non-GAAP accounting method for a significant transaction, failing to properly consolidate a subsidiary, misclassifying a material amount on the balance sheet or income statement, or applying a revenue recognition method that the auditor considers inconsistent with ASC 606.</p>

<p>The key point is that the company and auditor disagree, and the company has chosen to maintain its position. The auditor provides investors with both the company's reported numbers and the auditor's assessment of what the numbers should be, allowing investors to make their own judgment.</p>

<h2 id="scope-limitation">Qualification Due to Scope Limitation</h2>

<p>A scope limitation qualification occurs when the auditor cannot obtain sufficient appropriate evidence about a specific matter. This might happen because records were destroyed or unavailable, the company denied the auditor access to certain information, the engagement was accepted after year-end physical inventory (so the auditor could not observe the count), or legal restrictions prevented examination of foreign subsidiaries. The auditor qualifies the opinion for the specific area that could not be examined, while expressing confidence in the rest of the financial statements.</p>

<h2 id="rarity">Why Qualified Opinions Are Rare</h2>

<p>Qualified opinions are uncommon among large public companies because the audit process is iterative. When the auditor identifies a potential issue, it is raised with management and the audit committee during the audit process, usually months before the opinion is issued. In most cases, the company corrects the issue, adjusts the financial statements, or provides additional evidence to resolve the auditor's concern. A qualified opinion typically means the resolution process failed — the company and auditor reached an impasse on a material matter.</p>

<p>The rarity of qualified opinions among large companies makes them all the more significant when they do occur. A qualified opinion from a Big 4 firm on an S&P 500 company would be a major event, likely triggering immediate stock price reaction, SEC scrutiny, and analyst downgrades.</p>

<h2 id="investor-response">How Investors Should Respond</h2>

<p>When encountering a qualified opinion, investors should read the qualification paragraph in detail to understand the specific issue, quantify the financial impact (the auditor typically discloses the effect on assets, liabilities, income, or equity), assess whether the issue is isolated or might indicate broader problems, review the audit committee's discussion of the matter in the proxy statement, and consider whether the disagreement reflects aggressive accounting by the company. If the qualification is for a scope limitation, consider whether the limitation was within the company's control — if the company denied the auditor access to information, that is a much more serious red flag than a scope limitation due to external circumstances.</p>

<h2 id="sec-filings">Qualified Opinions in SEC Filings</h2>

<ul>
<li><strong>10-K:</strong> The qualified opinion appears in the auditor's report, with the basis for qualification described in a separate paragraph immediately following the opinion paragraph.</li>
<li><strong>8-K:</strong> If the qualification represents a change from prior year's clean opinion, it may be reported as a material event.</li>
<li><strong>DEF 14A:</strong> The audit committee's report discusses the auditor relationship and may address the qualification.</li>
</ul>

<p>Brefyr processes audit opinions from all 10-K filings and flags any opinion other than unqualified (clean) as a critical risk indicator, alerting investors when the independent auditor has identified specific issues with the reliability of a company's reported financial results.</p>
`,
};
