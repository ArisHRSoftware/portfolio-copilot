import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Key, Gauge, FileText, Building2, Users, Download } from "lucide-react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brefyr.com";

export const metadata: Metadata = {
  title: "API Documentation | Brefyr",
  description:
    "Filing Intelligence API documentation. Access SEC filings, insider trades, company data, and CSV exports programmatically. RESTful JSON API with simple API key authentication.",
  openGraph: {
    title: "API Documentation | Brefyr",
    description:
      "Filing Intelligence API — programmatic access to AI-analyzed SEC filings, insider trades, and company data for 2,000+ US small-cap stocks.",
  },
};

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
      <code className="font-mono text-sm leading-relaxed">{children}</code>
    </pre>
  );
}

function ParamRow({
  name,
  type,
  required,
  description,
}: {
  name: string;
  type: string;
  required?: boolean;
  description: string;
}) {
  return (
    <tr className="border-b border-border last:border-0">
      <td className="py-2 pr-3 align-top">
        <code className="font-mono text-sm font-medium">{name}</code>
      </td>
      <td className="py-2 pr-3 align-top">
        <span className="text-sm text-muted-foreground">{type}</span>
      </td>
      <td className="py-2 pr-3 align-top">
        {required ? (
          <Badge variant="default" className="text-xs">
            Required
          </Badge>
        ) : (
          <span className="text-xs text-muted-foreground">Optional</span>
        )}
      </td>
      <td className="py-2 align-top text-sm text-muted-foreground">
        {description}
      </td>
    </tr>
  );
}

export default function ApiDocsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteUrl },
          { name: "API Docs", url: `${siteUrl}/api-docs` },
        ]}
      />
      <SiteHeader />
      <main id="main-content" className="flex-1 px-4 py-12 max-w-4xl mx-auto w-full space-y-12">
        {/* Hero */}
        <section className="space-y-4">
          <Badge variant="secondary">Developer API</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Filing Intelligence API
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Programmatic access to AI-analyzed SEC filings, insider trades, and
            company data for 2,000+ US small-cap stocks. RESTful JSON endpoints
            with simple API key authentication.
          </p>
          <div className="flex gap-3 pt-2">
            <Button render={<Link href="/pricing" />}>
              Get API Access
            </Button>
            <Button
              variant="outline"
              render={<Link href="/auth/signup?plan=pro" />}
            >
              Start Pro Trial
            </Button>
          </div>
        </section>

        <Separator />

        {/* Authentication */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Authentication</h2>
          </div>
          <p className="text-muted-foreground">
            All API requests require an API key sent as a Bearer token in the{" "}
            <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
              Authorization
            </code>{" "}
            header. API access is available on the{" "}
            <Link
              href="/pricing"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Pro plan
            </Link>
            . You can generate and manage API keys from your{" "}
            <Link
              href="/api-keys"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              dashboard
            </Link>
            .
          </p>
          <CodeBlock>{`curl -H "Authorization: Bearer your_api_key_here" \\
  ${siteUrl}/api/v1/filings`}</CodeBlock>
        </section>

        <Separator />

        {/* Rate Limits */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Rate Limits</h2>
          </div>
          <p className="text-muted-foreground">
            The Pro plan includes <strong>1,000 API calls per day</strong>.
            Rate limit headers are included in every response:
          </p>
          <CodeBlock>{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 997
X-RateLimit-Reset: 1700000000`}</CodeBlock>
          <p className="text-sm text-muted-foreground">
            If you exceed your limit, requests return{" "}
            <code className="font-mono bg-muted px-1.5 py-0.5 rounded">
              429 Too Many Requests
            </code>{" "}
            until the daily reset at midnight UTC.
          </p>
        </section>

        <Separator />

        {/* Endpoints */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Endpoints</h2>

          {/* GET /api/v1/filings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle className="font-mono text-base">
                  GET /api/v1/filings
                </CardTitle>
              </div>
              <CardDescription>
                Search and filter AI-analyzed SEC filings. Returns paginated
                results with summaries and significance scores.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="text-sm font-semibold">Parameters</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <tbody>
                    <ParamRow
                      name="ticker"
                      type="string"
                      description="Filter by stock ticker (e.g. AAPL)"
                    />
                    <ParamRow
                      name="type"
                      type="string"
                      description="Filing type filter (e.g. 10-K, 8-K, Form 4)"
                    />
                    <ParamRow
                      name="min_significance"
                      type="number"
                      description="Minimum significance score, 1-10"
                    />
                    <ParamRow
                      name="days"
                      type="number"
                      description="Lookback period in days (default: 30)"
                    />
                    <ParamRow
                      name="limit"
                      type="number"
                      description="Results per page (default: 50, max: 100)"
                    />
                    <ParamRow
                      name="offset"
                      type="number"
                      description="Pagination offset (default: 0)"
                    />
                  </tbody>
                </table>
              </div>
              <h4 className="text-sm font-semibold">Response</h4>
              <CodeBlock>{`{
  "data": [...],
  "meta": {
    "count": 42,
    "offset": 0,
    "limit": 50,
    "days": 30
  }
}`}</CodeBlock>
            </CardContent>
          </Card>

          {/* GET /api/v1/companies */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                <CardTitle className="font-mono text-base">
                  GET /api/v1/companies
                </CardTitle>
              </div>
              <CardDescription>
                Search companies by sector or name. Returns company profiles with
                ticker, sector, and filing counts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="text-sm font-semibold">Parameters</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <tbody>
                    <ParamRow
                      name="sector"
                      type="string"
                      description="Filter by sector (e.g. Technology, Healthcare)"
                    />
                    <ParamRow
                      name="search"
                      type="string"
                      description="Search by company name or ticker"
                    />
                    <ParamRow
                      name="limit"
                      type="number"
                      description="Results per page (default: 100, max: 500)"
                    />
                    <ParamRow
                      name="offset"
                      type="number"
                      description="Pagination offset (default: 0)"
                    />
                  </tbody>
                </table>
              </div>
              <h4 className="text-sm font-semibold">Response</h4>
              <CodeBlock>{`{
  "data": [...],
  "meta": {
    "count": 100,
    "offset": 0,
    "limit": 100
  }
}`}</CodeBlock>
            </CardContent>
          </Card>

          {/* GET /api/v1/insider-trades */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="font-mono text-base">
                  GET /api/v1/insider-trades
                </CardTitle>
              </div>
              <CardDescription>
                Retrieve insider buying and selling activity parsed from Form 4
                filings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="text-sm font-semibold">Parameters</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <tbody>
                    <ParamRow
                      name="ticker"
                      type="string"
                      description="Filter by stock ticker"
                    />
                    <ParamRow
                      name="days"
                      type="number"
                      description="Lookback period in days (default: 30)"
                    />
                    <ParamRow
                      name="limit"
                      type="number"
                      description="Results per page (default: 50, max: 100)"
                    />
                    <ParamRow
                      name="offset"
                      type="number"
                      description="Pagination offset (default: 0)"
                    />
                  </tbody>
                </table>
              </div>
              <h4 className="text-sm font-semibold">Response</h4>
              <CodeBlock>{`{
  "data": [...],
  "meta": {
    "count": 58,
    "offset": 0,
    "limit": 50,
    "days": 30
  }
}`}</CodeBlock>
            </CardContent>
          </Card>

          {/* GET /api/v1/export */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                <CardTitle className="font-mono text-base">
                  GET /api/v1/export
                </CardTitle>
              </div>
              <CardDescription>
                Export filing data as CSV. Filter by ticker or filing type. Pro
                plan only.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="text-sm font-semibold">Parameters</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <tbody>
                    <ParamRow
                      name="ticker"
                      type="string"
                      description="Filter by stock ticker"
                    />
                    <ParamRow
                      name="days"
                      type="number"
                      description="Lookback period in days (default: 90)"
                    />
                    <ParamRow
                      name="type"
                      type="string"
                      description="Filing type filter (e.g. 10-K, 8-K)"
                    />
                  </tbody>
                </table>
              </div>
              <h4 className="text-sm font-semibold">Response</h4>
              <p className="text-sm text-muted-foreground">
                Returns a downloadable CSV file. The{" "}
                <code className="font-mono bg-muted px-1.5 py-0.5 rounded">
                  Content-Disposition
                </code>{" "}
                header is set for file download.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Code Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Code Examples</h2>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">cURL</h3>
            <CodeBlock>{`# Fetch high-significance filings for a stock
curl -H "Authorization: Bearer your_api_key_here" \\
  "${siteUrl}/api/v1/filings?ticker=AAPL&min_significance=7&days=30"

# Search companies by sector
curl -H "Authorization: Bearer your_api_key_here" \\
  "${siteUrl}/api/v1/companies?sector=Technology&limit=10"

# Export filing data as CSV
curl -H "Authorization: Bearer your_api_key_here" \\
  "${siteUrl}/api/v1/export?ticker=AAPL&days=90" \\
  -o filings.csv`}</CodeBlock>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Python</h3>
            <CodeBlock>{`import requests

API_KEY = "your_api_key_here"
BASE_URL = "${siteUrl}/api/v1"

headers = {"Authorization": f"Bearer {API_KEY}"}

# Get recent high-significance filings
response = requests.get(
    f"{BASE_URL}/filings",
    headers=headers,
    params={
        "ticker": "AAPL",
        "min_significance": 7,
        "days": 30,
    },
)
data = response.json()

for filing in data["data"]:
    print(f"{filing['ticker']} — {filing['filing_type']} — Score: {filing['significance_score']}")
    print(f"  {filing['one_line_summary']}")
    print()`}</CodeBlock>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">JavaScript</h3>
            <CodeBlock>{`const API_KEY = "your_api_key_here";
const BASE_URL = "${siteUrl}/api/v1";

async function getFilings(ticker, days = 30) {
  const params = new URLSearchParams({
    ticker,
    days: String(days),
    min_significance: "5",
  });

  const response = await fetch(\`\${BASE_URL}/filings?\${params}\`, {
    headers: { "Authorization": \`Bearer \${API_KEY}\` },
  });

  if (!response.ok) {
    throw new Error(\`API error: \${response.status}\`);
  }

  return response.json();
}

const data = await getFilings("AAPL");
console.log(\`Found \${data.meta.count} filings\`);`}</CodeBlock>
          </div>
        </section>

        <Separator />

        {/* Response Format */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Response Format</h2>
          <p className="text-muted-foreground">
            All endpoints return JSON with consistent structure. Filing objects
            include AI-generated fields like{" "}
            <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
              significance_score
            </code>{" "}
            and{" "}
            <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">
              one_line_summary
            </code>
            .
          </p>
          <CodeBlock>{`{
  "data": [
    {
      "id": "fil_abc123",
      "ticker": "AAPL",
      "company_name": "Apple Inc.",
      "filing_type": "10-K",
      "filed_date": "2025-10-30",
      "significance_score": 8,
      "one_line_summary": "Annual report reveals 12% revenue growth driven by services segment, with new risk disclosures around AI regulatory compliance.",
      "ai_summary_prose": "Apple's fiscal year 2025 10-K filing shows total revenue of $412B...",
      "has_earnings_data": true,
      "insider_data": null,
      "raw_url": "https://www.sec.gov/Archives/edgar/data/..."
    }
  ],
  "meta": {
    "count": 50,
    "offset": 0,
    "limit": 50,
    "days": 30
  }
}`}</CodeBlock>
          <p className="text-sm text-muted-foreground">
            Error responses include an{" "}
            <code className="font-mono bg-muted px-1.5 py-0.5 rounded">
              error
            </code>{" "}
            field with a human-readable message:
          </p>
          <CodeBlock>{`{
  "error": "Invalid or missing API key"
}`}</CodeBlock>
        </section>

        <Separator />

        {/* CTA */}
        <section className="text-center space-y-4 py-8">
          <h2 className="text-2xl font-bold">Ready to integrate?</h2>
          <p className="text-muted-foreground">
            API access is included with the Pro plan. Start your free trial and
            generate your first API key in minutes.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" render={<Link href="/pricing" />}>
              View Pricing
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={<Link href="/auth/signup?plan=pro" />}
            >
              Start Pro Trial
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">
                Brefyr
              </span>
              <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <nav className="flex items-center gap-4">
              <Link
                href="/blog"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/disclaimer"
                className="hover:text-foreground transition-colors"
              >
                Disclaimer
              </Link>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
