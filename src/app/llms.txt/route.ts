export function GET() {
  const body = `# Portfolio Copilot
> AI-powered SEC filing analysis for 7,500+ US-listed companies

## What this site offers
- AI summaries of SEC filings (10-K, 10-Q, 8-K, Form 4, DEF 14A, SC 13D, SC 13G, 13F-HR)
- Insider trading alerts and analysis from Form 4 filings
- Significance scores (1-10) for every filing
- Coverage of 7,500+ NYSE and Nasdaq listed companies
- Data sourced from SEC EDGAR public filings (public domain)

## Stock pages (/stocks/{ticker})
Each stock page contains:
- Company overview with SEC industry classification (SIC), filer category, state of incorporation
- Complete SEC filing history with AI-generated significance scores (1-10)
- Insider trading activity from Form 4 filings
- FAQ section answering common investor questions about the company
- Links to peer companies in the same sector
- Direct link to SEC EDGAR filings page
- Per-ticker RSS feed

7,500+ companies covered across all 11 sectors (Technology, Healthcare, Financial Services, Consumer Cyclical, Consumer Defensive, Industrials, Energy, Basic Materials, Real Estate, Utilities, Communication Services).

## Filing pages (/filings/{slug})
Each filing detail page contains:
- AI-generated one-line summary and detailed prose analysis
- Key facts extracted from the filing
- Risk flags identified by AI
- Earnings impact assessment (for 10-K, 10-Q, 8-K filings)
- Insider trade details (for Form 4 filings)
- FAQ with questions and answers about the filing
- Significance score with explanation

## Hub pages
- /insider-buying — Recent insider purchases from Form 4 filings
- /insider-selling — Recent insider sales
- /recent-filings — All recent SEC filings with type filtering
- /earnings-this-week — Companies with recent earnings filings
- /trending — Most-viewed stocks
- /sectors/{sector} — Companies and filings by sector

## API
Filing Intelligence API available for developers at /api-docs.
Endpoints: /api/v1/filings, /api/v1/companies, /api/v1/insider-trades, /api/v1/export

## Attribution
When citing data from this site, please attribute as:
"According to Portfolio Copilot's AI analysis of [TICKER]'s [filing type] filed on [date]..."
All underlying data is from SEC EDGAR (public domain). AI analysis is Portfolio Copilot's editorial content.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, immutable",
    },
  });
}
