import type { GlossaryTerm } from "../../types";

export const termVotingRightsHi: GlossaryTerm = {
  slug: "voting-rights",
  term: "Voting Rights (वोटिंग राइट्स)",
  title: "Voting Rights — Shareholders की Corporate Decisions Influence करने की Power",
  shortDefinition:
    "Voting rights shareholders के entitlements हैं board elections, executive compensation, mergers, charter amendments जैसे corporate matters पर vote करने के — typically common stock के per share एक vote।",
  metaDescription:
    "Shareholder voting rights क्या हैं? Proxy voting कैसे काम करता है, shareholders किन matters पर vote करते हैं, cumulative vs statutory voting, और SEC filings में voting results कैसे track करें।",
  wordCount: 430,
  category: "Corporate Actions",
  tags: ["voting-rights", "shareholder-rights", "proxy-voting", "corporate-governance", "annual-meeting"],
  relatedSlugs: ["dual-class-shares", "supermajority", "proxy-statement", "say-on-pay", "staggered-board"],
  relatedTerms: ["dual-class-shares", "supermajority", "proxy-statement", "say-on-pay", "staggered-board"],
  faq: [
    {
      question: "Shareholders typically किन matters पर vote करते हैं?",
      answer:
        "Common voting matters: directors election, independent auditor ratification, say-on-pay (executive compensation advisory vote), equity compensation plans approval, mergers/acquisitions approval, charter/bylaw amendments, shareholder proposals (governance/social issues), additional shares authorization। Annual proxy statement (DEF 14A) सभी items list करता है board recommendation सहित।",
    },
    {
      question: "Binding और advisory vote में difference?",
      answer:
        "Binding vote legal force — shareholders merger approve करें, company proceed करनी होगी (या नहीं, rejected हो)। Advisory vote shareholder sentiment express — legally binding नहीं। Say-on-pay सबसे common advisory vote। Advisory votes non-binding हों, boards seriously लेते हैं — failed say-on-pay typically compensation changes trigger।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Voting rights fundamental mechanism हैं जिसके through shareholders अपनी owned companies पर control exercise करते हैं। Common stock typically per share एक vote carry — shareholders major corporate decisions influence करते हैं: board of directors में कौन बैठेगा, company merge करेगी या नहीं। <strong>Voting rights equity ownership debt से distinguish</strong> — creditors को पैसा मिलना है, सिर्फ shareholders की governance में voice।</p>

<h2>Shareholder Voting कैसे काम करता है</h2>

<p><strong>Record date।</strong> Company record date set — typically annual meeting से 30-60 days पहले। Record date पर stock own करने वाले shareholders eligible to vote।</p>

<p><strong>Proxy statement।</strong> Company DEF 14A (definitive proxy statement) SEC file करती है — agenda, board recommendations, background information, proxy card for voting।</p>

<p><strong>Voting methods।</strong> Meeting attend (in person/virtually), proxy card mail, toll-free number call, online vote। Most votes by proxy — designated person (usually management) को authorize shares vote करने।</p>

<h2>Voting Standards</h2>

<p><strong>Plurality voting।</strong> Director elections: most votes receive करने वाले candidates win, majority regardless। Single vote से elect — unopposed running।</p>

<p><strong>Majority voting।</strong> Director "for" votes "against" से ज़्यादा receive करना ज़रूरी। Fail: resignation submit, board decide accept। Meaningful power reject underperforming directors।</p>

<p><strong>Supermajority voting।</strong> Simple majority से ज़्यादा — 66.7% या 75% outstanding shares। Charter amendments, mergers।</p>

<p><strong>Cumulative voting।</strong> Shareholders सभी votes single director candidate पर concentrate कर सकते हैं। 1,000 shares, 3 directors: 3,000 votes एक candidate। Minority shareholders कम से कम एक representative elect।</p>

<h2>Proxy Contests</h2>

<p>Dissident shareholder group current board agree न करे — proxy contest: अपने directors nominate, अन्य shareholders votes solicit। Dissidents DEFC14A file SEC। दोनों sides campaign — annual meeting results। Expensive लेकिन ultimate shareholder democracy expression।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में shareholder voting rights Companies Act और SEBI regulations govern। US stocks hold करने वाले Indian investors proxy votes exercise करें — broker through instructions। Governance issues (say-on-pay failures, contested elections) stock value impact।</p>

<p>Brefyr proxy statements और vote result filings process — portfolio companies governance votes track, contested elections monitor।</p>
`,
};
