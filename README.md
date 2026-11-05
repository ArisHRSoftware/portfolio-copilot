# Portfolio Copilot

AI-powered SEC filing intelligence for 7,600+ US-listed companies. Get instant AI summaries, significance scores, insider trade alerts, and plain-English analysis for every SEC filing.

## What It Does

- **EDGAR Pipeline** — Automatically polls SEC EDGAR for new filings (10-K, 10-Q, 8-K, Form 4, DEF 14A, SC 13D, SC 13G, 13F-HR), runs AI analysis via Claude, and stores structured results
- **7,600+ Stock Pages** — Every NYSE and Nasdaq company has a dedicated page with company overview, filing history, insider activity, FAQ, and peer companies
- **Alert System** — Users create custom alert rules (filing type, significance threshold, insider activity, keywords). Real-time email alerts for Plus/Pro subscribers
- **B2B API** — Filing Intelligence API with 4 endpoints, SHA-256 key auth, and daily rate limiting
- **Content Pipeline** — AI-generated newsletters and blog posts with mandatory founder approval before publishing

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, React 19, Tailwind CSS 4, shadcn/ui |
| Database | Supabase (PostgreSQL + Auth + RLS) |
| AI | Anthropic Claude (filing analysis) |
| Payments | Razorpay (INR + USD) |
| Email | Resend |
| Cron | Upstash QStash |
| Cache | Upstash Redis |
| Analytics | PostHog |
| Hosting | Vercel |

## Getting Started

### Prerequisites

- Node.js 20+
- A Supabase project
- API keys for services you want to activate (see `.env.example`)

### Setup

```bash
# Install dependencies
cd apps/web
npm install

# Copy env template and fill in your keys
cp .env.example .env

# Run the database migration (paste into Supabase SQL Editor)
# File: supabase-migration.sql

# Import 7,600+ companies from SEC EDGAR
npx tsx scripts/import-companies.ts

# Start dev server
npm run dev
```

Open http://localhost:3000

### Environment Variables

The minimum required for localhost:

```
NEXT_PUBLIC_SUPABASE_URL=     # From Supabase dashboard > Settings > API
NEXT_PUBLIC_SUPABASE_ANON_KEY= # Same page
SUPABASE_SERVICE_ROLE_KEY=     # Same page (keep secret)
```

See `.env.example` for all available configuration.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (dashboard)/        # Authenticated pages (dashboard, portfolio, settings, admin)
│   ├── api/                # API routes (cron jobs, v1 API, webhooks, newsletter)
│   ├── stocks/[ticker]/    # 7,600+ stock pages with SEO + JSON-LD
│   ├── filings/[slug]/     # Filing detail pages with AI analysis
│   ├── sectors/[sector]/   # Sector hub pages
│   └── auth/               # Login, signup, forgot password
├── lib/
│   ├── edgar/              # EDGAR pipeline (poller, parser, AI analysis, orchestrator)
│   ├── supabase/           # Database clients (server, static, webhook, client)
│   ├── constants/          # Tiers, sectors
│   └── seo/                # ISR revalidation cascade
├── components/             # UI components (shadcn/ui + custom)
└── tests/                  # 240 unit + integration tests, ~164 E2E tests
```

## Testing

```bash
npm test              # 240 unit + integration tests (Vitest)
npm run test:e2e      # E2E tests (Playwright, requires dev server)
npm run lighthouse    # Lighthouse CI audit
```

## License

Private — all rights reserved.
