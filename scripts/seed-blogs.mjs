/**
 * Seed the blog with evergreen content posts.
 * No AI needed — hardcoded educational content.
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = resolve(__dirname, "..", ".env");
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (!process.env[k]) process.env[k] = v;
  }
}
loadEnv();

const U = process.env.NEXT_PUBLIC_SUPABASE_URL;
const K = process.env.SUPABASE_SERVICE_ROLE_KEY;
const DB = `${U}/rest/v1`;
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };

const POSTS = [
  {
    title: "Understanding SEC Filings: A Complete Guide for Investors",
    slug: "understanding-sec-filings-guide",
    meta_description: "Learn what each SEC filing type means — 10-K, 10-Q, 8-K, Form 4, DEF 14A, and more. A practical guide for small-cap investors.",
    author: "Brefyr Team",
    content: `<h1>Understanding SEC Filings: A Complete Guide for Investors</h1>

<p>Every publicly traded company in the United States must file reports with the Securities and Exchange Commission (SEC). These filings contain a wealth of information that can give investors a significant edge — especially in the small-cap space where analyst coverage is sparse.</p>

<p>Here's what each filing type tells you and why it matters.</p>

<h2>10-K: The Annual Report</h2>
<p>The 10-K is the most comprehensive filing a company makes each year. It includes audited financial statements, a detailed business overview, risk factors, management's discussion of results, and legal proceedings. For small-cap investors, the 10-K is where you'll find the real story behind the numbers — including going concern warnings, material weaknesses in internal controls, and related-party transactions that don't always make headlines.</p>

<p><strong>What to look for:</strong> Revenue trends, gross margin changes, cash burn rate, debt covenants, and the auditor's opinion. A "going concern" warning means the auditor has doubts about the company's ability to survive another year.</p>

<h2>10-Q: The Quarterly Report</h2>
<p>Filed three times per year (the fourth quarter is covered by the 10-K), the 10-Q provides unaudited quarterly financial statements and a management update. It's your real-time pulse on a company's performance between annual reports.</p>

<p><strong>What to look for:</strong> Quarter-over-quarter revenue changes, cash position relative to burn rate, and any new risk factors since the last 10-K.</p>

<h2>8-K: Current Events</h2>
<p>The 8-K is filed when something significant happens — a CEO departure, a major acquisition, earnings results, a delisting notice, or a change in auditors. These are time-sensitive and often move stock prices.</p>

<p><strong>What to look for:</strong> Item numbers tell you the category. Item 2.02 (earnings results) and Item 5.02 (executive changes) are among the most impactful. Item 4.02 (non-reliance on prior financials) is a red flag — it means previous financial statements can't be trusted.</p>

<h2>Form 4: Insider Trades</h2>
<p>When company executives, directors, or major shareholders buy or sell stock, they must report it on Form 4 within two business days. This is one of the most powerful signals available to investors — insiders know their business better than anyone.</p>

<p><strong>What to look for:</strong> Open market purchases (transaction code "P") are the strongest signal — insiders are spending their own money. Sells are harder to interpret since they may be for tax or diversification purposes. Look at the dollar value: a $500K purchase by a CEO is more meaningful than a $5K buy.</p>

<h2>DEF 14A: Proxy Statements</h2>
<p>Filed before shareholder meetings, the proxy statement reveals executive compensation, board composition, related-party transactions, and items up for vote. It's your window into corporate governance.</p>

<p><strong>What to look for:</strong> Executive pay relative to company performance, board independence, and any shareholder proposals that might signal activist pressure.</p>

<h2>13F-HR: Institutional Holdings</h2>
<p>Large investment managers (managing $100M+) must report their equity holdings quarterly on Form 13F. This shows you what the big money is buying and selling.</p>

<p><strong>What to look for:</strong> New positions in small-cap stocks (institutional discovery), significant increases in existing positions, and complete exits. Remember: 13F data is delayed — filings cover positions as of the end of the previous quarter.</p>

<h2>SC 13D and SC 13G: Ownership Stakes</h2>
<p>When an investor acquires 5% or more of a company's stock, they must file a Schedule 13D (if they intend to influence management) or 13G (if they're a passive investor). A 13D filing often signals activist interest and can be a catalyst for change.</p>

<p><strong>What to look for:</strong> The stated purpose of the investment, any plans to push for changes, and the investor's track record with similar investments.</p>

<h2>Using Filing Intelligence for Small-Cap Investing</h2>
<p>The small-cap universe has over 7,600 stocks that most analysts don't cover. Filing intelligence — automated monitoring and analysis of SEC filings — gives you the same information advantage that was previously available only to institutional investors with expensive data terminals.</p>

<p>At Brefyr, we analyze every SEC filing as it's published, extract key facts, score significance, and surface the most important developments across the small-cap universe. No filing goes unnoticed.</p>`,
  },
  {
    title: "Why Insider Trading Data Matters for Small-Cap Investors",
    slug: "why-insider-trading-data-matters",
    meta_description: "How to use SEC Form 4 insider trading data to make better small-cap investment decisions. Buy signals, sell signals, and what to watch for.",
    author: "Brefyr Team",
    content: `<h1>Why Insider Trading Data Matters for Small-Cap Investors</h1>

<p>Company insiders — CEOs, CFOs, directors, and major shareholders — know their business better than any analyst. When they buy or sell stock in their own companies, they're required to report it to the SEC within two business days via Form 4. This public data is one of the most powerful tools available to individual investors.</p>

<h2>Insiders Have an Information Edge</h2>
<p>Corporate insiders have access to non-public information about their company's prospects, upcoming contracts, product pipeline, financial health, and strategic direction. While they can't trade on material non-public information, their buying and selling patterns often precede significant stock moves.</p>

<p>Academic research consistently shows that insider purchases — particularly in small-cap stocks — outperform the market. A study in the Journal of Finance found that stocks with heavy insider buying outperformed by 7-10% annually.</p>

<h2>Understanding Transaction Codes</h2>
<p>Not all Form 4 transactions are created equal. Here's how to read the transaction codes:</p>
<ul>
<li><strong>P (Purchase):</strong> Open-market buy — the strongest bullish signal. The insider is spending their own money.</li>
<li><strong>S (Sale):</strong> Open-market sell — may be bearish, but could also be for tax planning, diversification, or personal needs.</li>
<li><strong>A (Grant/Award):</strong> Stock grants or options awards — part of compensation, not a market signal.</li>
<li><strong>M (Exercise):</strong> Option exercise — often followed by an immediate sale (code S), which is routine for compensation-related transactions.</li>
<li><strong>G (Gift):</strong> Stock gift — typically for estate planning, not a market signal.</li>
</ul>

<h2>What Makes a Trade Significant?</h2>
<p>The size and context of an insider trade matters more than the mere fact of buying or selling.</p>

<p><strong>Dollar value:</strong> A $1 million purchase by a CEO is far more meaningful than a $10,000 buy. Look for trades that represent a meaningful portion of the insider's wealth.</p>

<p><strong>Cluster buying:</strong> When multiple insiders buy around the same time, it's a stronger signal than a single purchase. If the CEO, CFO, and two directors are all buying, they're collectively expressing confidence.</p>

<p><strong>Unusual patterns:</strong> A first-time purchase by a director who has never bought before is more notable than routine buying from someone who purchases quarterly.</p>

<h2>Why Small-Cap Insider Data Is More Valuable</h2>
<p>In large-cap stocks, insider trades are a small drop in the ocean of daily trading volume. In small-cap stocks, insider buying can represent a significant percentage of daily volume — and the information edge is greater because fewer analysts cover these companies.</p>

<p>When a small-cap CEO buys $500,000 of their own stock, it often means they see something the market hasn't priced in yet. That same purchase in a mega-cap stock wouldn't register.</p>

<h2>How to Track Insider Activity</h2>
<p>Brefyr automatically processes every Form 4 filing as it appears on SEC EDGAR. We extract the insider's name, title, transaction type, shares traded, and price — then score the significance based on trade value. You can browse all recent insider activity on our <a href="/insider-buying">insider buying</a> and <a href="/insider-selling">insider selling</a> pages, or track specific companies in your <a href="/dashboard">portfolio dashboard</a>.</p>`,
  },
  {
    title: "Getting Started with Small-Cap Investing: A Practical Guide",
    slug: "getting-started-small-cap-investing",
    meta_description: "A beginner-friendly guide to small-cap investing. Learn the advantages, risks, and how SEC filing intelligence gives you an edge in uncovered stocks.",
    author: "Brefyr Team",
    content: `<h1>Getting Started with Small-Cap Investing: A Practical Guide</h1>

<p>Small-cap stocks — companies with market capitalizations roughly between $300 million and $2 billion — represent one of the most compelling opportunities in public markets. They're also one of the most misunderstood.</p>

<h2>Why Small-Caps?</h2>
<p>History shows that small-cap stocks have outperformed large-caps over long periods. The Russell 2000 (small-cap index) has delivered higher annualized returns than the S&amp;P 500 over most 20-year periods since its inception. The reason is simple: smaller companies have more room to grow.</p>

<p>But the real opportunity isn't just in returns — it's in <strong>information asymmetry</strong>. The average S&amp;P 500 company has 20+ analysts covering it. The average small-cap stock has 1-2, or often zero. This means that meaningful developments — new contracts, management changes, financial improvements — take longer to be reflected in stock prices.</p>

<h2>The Analyst Coverage Gap</h2>
<p>Of the approximately 7,600+ publicly traded companies filing with the SEC, the vast majority receive minimal analyst coverage. These "uncovered" stocks are where individual investors with good research tools can find genuine edges:</p>

<ul>
<li>Earnings surprises have a bigger price impact when there are no analyst estimates to beat</li>
<li>Insider buying signals are more meaningful in thinly-covered names</li>
<li>Corporate events (acquisitions, restructurings, new products) can go unnoticed for days or weeks</li>
</ul>

<h2>Risks to Understand</h2>
<p>Small-cap investing isn't without risks. Be aware of:</p>

<p><strong>Liquidity risk:</strong> Small-cap stocks trade less volume. You may not be able to sell quickly at your desired price, especially during market stress.</p>

<p><strong>Volatility:</strong> Small-cap stocks are more volatile than large-caps. Daily swings of 5-10% aren't unusual. This can work for or against you.</p>

<p><strong>Fraud risk:</strong> Smaller companies have less institutional scrutiny. Read the SEC filings carefully — red flags like frequent auditor changes, going concern warnings, and excessive related-party transactions are important warning signs.</p>

<p><strong>Dilution:</strong> Many small-cap companies raise capital by issuing new shares. Watch for S-1 filings (new stock offerings) and understand how they affect your ownership percentage.</p>

<h2>How Filing Intelligence Gives You an Edge</h2>
<p>SEC filings are the great equalizer. Every public company must disclose the same information — whether they have 50 analysts or zero. The challenge has always been volume: thousands of filings every day, most of them routine.</p>

<p>Automated filing intelligence solves this by:</p>
<ul>
<li><strong>Monitoring every filing:</strong> No SEC filing goes unnoticed across the entire small-cap universe</li>
<li><strong>Scoring significance:</strong> Each filing gets a 1-10 significance score so you can focus on what matters</li>
<li><strong>Extracting key data:</strong> Insider names, trade values, earnings flags, and risk signals are pulled automatically</li>
<li><strong>Delivering alerts:</strong> Get notified when something significant happens at companies you're tracking</li>
</ul>

<h2>Getting Started</h2>
<p>Here's a practical approach to beginning your small-cap research:</p>

<ol>
<li><strong>Browse recent filings:</strong> Start on the <a href="/recent-filings">recent filings</a> page to see what's happening across the market right now</li>
<li><strong>Track insider activity:</strong> Check <a href="/insider-buying">insider buying</a> for stocks where executives are putting their own money to work</li>
<li><strong>Build a watchlist:</strong> <a href="/auth/signup">Create a free account</a> and add companies to your portfolio for personalized alerts</li>
<li><strong>Read the filings:</strong> When a stock catches your attention, read the actual SEC filing — our summaries help you find the important parts quickly</li>
</ol>

<p>The small-cap market rewards research. With the right tools, individual investors can compete with — and often outperform — institutional players in this space.</p>`,
  },
  {
    title: "How to Read an SEC 8-K Filing: What Every Investor Should Know",
    slug: "how-to-read-8k-filing",
    meta_description: "A practical guide to reading SEC 8-K filings. Learn what each item number means and which 8-K events move stock prices the most.",
    author: "Brefyr Team",
    content: `<h1>How to Read an SEC 8-K Filing: What Every Investor Should Know</h1>

<p>An 8-K is a "current report" that companies must file with the SEC when a significant event occurs. Unlike quarterly (10-Q) or annual (10-K) reports, 8-K filings happen in real-time — often within four business days of the triggering event. They're among the most actionable filings for investors.</p>

<h2>The Item Numbers That Matter Most</h2>
<p>Each 8-K is organized by item numbers that tell you exactly what happened. Here are the most important ones:</p>

<h3>Item 2.02 — Earnings Results</h3>
<p>This is where companies report their quarterly or annual financial results. For small-cap stocks without analyst coverage, the 8-K earnings release may be the first time anyone outside the company sees the numbers.</p>

<h3>Item 1.01 — Material Agreement</h3>
<p>Filed when a company enters a significant contract, partnership, or business arrangement. For small-caps, a material agreement can transform the business — a major customer win, a licensing deal, or a strategic partnership.</p>

<h3>Item 5.02 — Executive Changes</h3>
<p>Leadership changes are often inflection points. A new CEO can signal a strategic shift. A CFO departure may precede financial trouble. Director resignations sometimes indicate disagreement with management direction.</p>

<h3>Item 4.02 — Non-Reliance on Prior Financials</h3>
<p>This is a red flag. It means the company is saying their previously published financial statements contain errors and should not be relied upon. This almost always leads to a restatement and is often accompanied by a stock price decline.</p>

<h3>Item 3.01 — Delisting Notice</h3>
<p>When a company receives a notice that it may be delisted from its exchange (usually for failing to meet minimum bid price, market cap, or filing requirements), it must disclose this in an 8-K. Delisting risk is a serious concern that can accelerate selling.</p>

<h3>Item 5.01 — Change of Control</h3>
<p>Filed when ownership of the company changes hands — through an acquisition, merger, or other transaction. These events typically result in significant price movement.</p>

<h2>How Brefyr Processes 8-K Filings</h2>
<p>We automatically parse every 8-K filing to identify the item numbers, extract the key facts, and assign a significance score. Item 4.02 (financial restatement) and Item 1.03 (bankruptcy) receive the highest scores. Routine items like 9.01 (financial exhibits) receive lower scores so you can focus on what's truly important.</p>

<p>Browse the latest 8-K filings on our <a href="/recent-filings?type=8-K">recent filings page</a> to see what's happening across the small-cap universe right now.</p>`,
  },
  {
    title: "5 Red Flags to Watch for in SEC Filings",
    slug: "5-red-flags-sec-filings",
    meta_description: "Learn the 5 most important warning signs in SEC filings that could signal trouble for small-cap stocks. Protect your portfolio with these tips.",
    author: "Brefyr Team",
    content: `<h1>5 Red Flags to Watch for in SEC Filings</h1>

<p>SEC filings don't just reveal opportunities — they also expose risks. Knowing what warning signs to look for can save you from costly mistakes, especially in the small-cap space where due diligence matters most.</p>

<h2>1. Going Concern Warnings</h2>
<p>When an auditor adds a "going concern" qualification to a company's financial statements, they're saying there's substantial doubt about whether the company can continue operating for the next 12 months. This appears in the 10-K and is one of the most serious red flags in SEC filings.</p>

<p>Don't assume the market has already priced this in — for thinly-traded small-caps, going concern warnings can precede further declines as more investors discover the filing.</p>

<h2>2. Auditor Changes (Item 4.01)</h2>
<p>When a company switches auditors, it must file an 8-K with Item 4.01. While some auditor changes are routine, a change during the audit cycle — or a switch from a larger firm to a smaller one — can signal disagreements about accounting practices. Check whether the previous auditor's letter mentions any disagreements.</p>

<h2>3. Financial Restatements (Item 4.02)</h2>
<p>An 8-K with Item 4.02 means the company is telling investors that previously published financial statements contain material errors and should not be relied upon. This is a serious governance failure that often leads to SEC investigations, class-action lawsuits, and significant stock price declines.</p>

<h2>4. Heavy Insider Selling Clusters</h2>
<p>While individual insider sales can have benign explanations (taxes, diversification, personal needs), a <em>cluster</em> of insider sales — multiple executives selling within the same period — is a warning sign. If the CEO, CFO, and several directors are all selling at once, they may know something the market doesn't.</p>

<p>Track insider selling patterns on Brefyr's <a href="/insider-selling">insider selling page</a> to spot unusual activity.</p>

<h2>5. Repeated Dilution via S-1 and S-3 Filings</h2>
<p>Some small-cap companies fund operations primarily through stock issuance rather than revenue. If you see frequent shelf registration statements (S-3) and prospectuses (S-1), the company may be in a cycle of continuous dilution — issuing new shares to fund cash-burning operations.</p>

<p>Check the company's outstanding share count over time. If it's consistently growing while revenue isn't, the value of existing shares is being eroded.</p>

<h2>Protecting Your Portfolio</h2>
<p>Automated filing intelligence helps you catch these red flags early. Brefyr scores every filing for significance — filings with going concern warnings, restatements, and delisting notices receive the highest scores (8-10 out of 10), ensuring they surface immediately in your feed.</p>

<p>Set up <a href="/dashboard">personalized alerts</a> on companies you own to get notified the moment a high-significance filing drops.</p>`,
  },
];

async function main() {
  console.log("=== Seeding Blog Posts ===\n");

  // Check existing slugs
  const res = await fetch(`${DB}/blog_posts?select=slug`, { headers: { ...H, Prefer: "" } });
  const existing = await res.json();
  const existingSlugs = new Set((existing || []).map(p => p.slug));

  let created = 0;
  for (const post of POSTS) {
    if (existingSlugs.has(post.slug)) {
      console.log(`Skipped (exists): ${post.title}`);
      continue;
    }

    const now = new Date();
    // Stagger published dates — one per day over the past week
    const pubDate = new Date(now);
    pubDate.setDate(pubDate.getDate() - (POSTS.length - created - 1));

    const insertRes = await fetch(`${DB}/blog_posts`, {
      method: "POST",
      headers: { ...H, Prefer: "return=minimal" },
      body: JSON.stringify({
        title: post.title,
        slug: post.slug,
        body: post.content,
        meta_description: post.meta_description,
        published_at: pubDate.toISOString(),
        auto_generated: false,
      }),
    });

    if (insertRes.ok) {
      created++;
      console.log(`Published: ${post.title} (${pubDate.toLocaleDateString()})`);
    } else {
      console.error(`Failed: ${post.title} — ${insertRes.status} ${await insertRes.text()}`);
    }
  }

  console.log(`\n=== Done: ${created} blog posts published ===`);
}

main().catch(err => { console.error("Fatal:", err.message); process.exit(1); });
