import type { GlossaryTerm } from "../types";

export const termRightsOffering: GlossaryTerm = {
  slug: "rights-offering",
  term: "Rights Offering",
  title: "Rights Offering — When Companies Let Existing Shareholders Buy New Shares First",
  shortDefinition:
    "A rights offering is a capital-raising method in which a company offers existing shareholders the right to purchase additional shares at a discounted price in proportion to their current holdings before offering shares to the public.",
  metaDescription:
    "What is a rights offering? How subscription rights work, why companies use them, the dilution risk if you don't participate, and how to find rights offering details in SEC filings.",
  wordCount: 900,
  category: "Corporate Actions",
  tags: ["rights-offering", "capital-raising", "dilution", "shareholder", "corporate-action"],
  relatedSlugs: ["dilution", "share-repurchase", "stock-split", "8-k-filing"],
  relatedTerms: ["dilution", "share-repurchase", "stock-split", "8-k-filing"],
  faq: [
    {
      question: "What happens if I don't exercise my rights in a rights offering?",
      answer:
        "If you don't exercise your rights, your ownership percentage in the company decreases (dilution) because other shareholders are buying new shares while you are not. For example, if the company issues 20% more shares and you don't participate, your ownership stake shrinks by approximately 17%. In some rights offerings, the rights themselves are transferable — you can sell them on the open market to another investor, capturing some value even if you choose not to buy the new shares. If the rights are non-transferable and you don't exercise them, they simply expire worthless.",
    },
    {
      question: "Why would a company do a rights offering instead of a regular stock offering?",
      answer:
        "Rights offerings are fairer to existing shareholders because they give each holder the opportunity to maintain their proportional ownership. A regular public offering sells shares to whoever the underwriter places them with — existing shareholders may get diluted without any chance to participate. Rights offerings also tend to have lower underwriting costs. However, they take longer to execute and the discount required to ensure full subscription can be significant (10-30% below market price).",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A rights offering — also called a rights issue or subscription rights offering — is a method of raising equity capital in which a company offers existing shareholders the opportunity to purchase additional shares at a price below the current market price, in proportion to their existing holdings. Each shareholder receives subscription rights that entitle them to buy a specified number of new shares. The rights typically have a short exercise period (15-30 days) and a subscription price set at a 10-30% discount to the market price to incentivize participation.</p>

<h2 id="how-rights-offerings-work">How Rights Offerings Work</h2>

<p><strong>Announcement.</strong> The company's board approves the rights offering and announces the terms: the subscription price, the ratio (how many new shares per existing share), the record date, the subscription period, and whether the rights are transferable.</p>

<p><strong>Distribution of rights.</strong> On the record date, every shareholder of record receives rights in proportion to their holdings. For example, in a 1-for-5 rights offering, you receive one right for every five shares you own, and each right entitles you to buy one new share at the subscription price.</p>

<p><strong>Subscription period.</strong> Shareholders have a fixed window (typically 15-30 calendar days) to decide whether to exercise their rights, sell them (if transferable), or let them expire. This window is non-negotiable — expired rights have zero value.</p>

<p><strong>Oversubscription privilege.</strong> Many rights offerings include an oversubscription privilege, allowing shareholders who exercise all their basic rights to purchase additional shares from the unexercised pool. This helps ensure the company raises the full target amount even if some shareholders don't participate.</p>

<p><strong>Settlement.</strong> After the subscription period closes, the company issues new shares to shareholders who exercised their rights, and the capital raise is complete.</p>

<h2 id="why-companies-use-rights">Why Companies Use Rights Offerings</h2>

<p><strong>Fairness to existing shareholders.</strong> Rights offerings give every shareholder an equal opportunity to maintain their ownership percentage. This is particularly important for companies with concentrated ownership (founding families, large institutional holders) who want to avoid diluting minority shareholders.</p>

<p><strong>Lower costs.</strong> Rights offerings generally have lower underwriting fees than traditional public offerings because the marketing effort is directed at an existing, known shareholder base rather than the broader market.</p>

<p><strong>Distressed capital raising.</strong> Companies in financial difficulty may find that a rights offering is their most viable capital-raising option. The discount to market price ensures subscription even when the company's prospects are uncertain. Banks that might not underwrite a traditional offering may backstop a rights offering at the discounted price.</p>

<p><strong>Regulatory or structural reasons.</strong> In some jurisdictions and for some company types (banks, REITs, closed-end funds), rights offerings are preferred or required when raising equity capital.</p>

<h2 id="dilution-impact">The Dilution Problem</h2>

<p>Non-participation in a rights offering results in meaningful dilution. Consider a company with 100 million shares outstanding at $10 each ($1 billion market cap). The company announces a 1-for-4 rights offering at $7 per share, creating 25 million new shares and raising $175 million. After the offering, there are 125 million shares, and the theoretical ex-rights price is approximately $9.40. If you held 1,000 shares ($10,000 value) and didn't participate, your 1,000 shares are now worth $9,400 — a 6% loss in value. If you participated, you bought 250 shares at $7 ($1,750), and your 1,250 shares are worth $11,750 — a net gain from purchasing below the theoretical value.</p>

<h2 id="transferable-vs-non-transferable">Transferable vs Non-Transferable Rights</h2>

<p>Transferable rights can be sold on the open market or through a broker during the subscription period. They trade under a temporary ticker symbol. This gives shareholders who don't want to invest additional capital the ability to sell their rights and capture some economic value. Non-transferable rights can only be exercised or allowed to expire — shareholders have no way to monetize them without participating.</p>

<h2 id="sec-filings">Rights Offerings in SEC Filings</h2>

<ul>
<li><strong>S-1 or S-3 Registration Statement:</strong> Registers the new shares being offered and contains the full prospectus with terms, risk factors, use of proceeds, and financial statements.</li>
<li><strong>8-K:</strong> Announces the rights offering, terms, and timeline.</li>
<li><strong>Prospectus supplement:</strong> Filed with the SEC and mailed to shareholders, detailing all terms and how to exercise rights.</li>
<li><strong>10-K and 10-Q:</strong> Post-offering, the financial statements reflect the new shares outstanding and the capital raised.</li>
</ul>

<p>Brefyr tracks registration statements and 8-K filings for all SEC filers, alerting investors to rights offering announcements so they can make timely decisions about exercising, selling, or monitoring their subscription rights.</p>
`,
};
