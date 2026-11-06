import type { Metadata } from "next";
import Link from "next/link";
import { createStaticClient } from "@/lib/supabase/static";
import { getNewsletterIssues } from "@/lib/supabase/queries";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Newsletter Archive — Past Issues",
  description:
    "Browse past issues of the Brefyr newsletter. Weekly and daily digests covering small-cap SEC filings, insider trades, and market insights.",
  openGraph: {
    title: "Newsletter Archive | Brefyr",
    description:
      "Browse past issues of the Brefyr newsletter.",
  },
};

export default async function ArchivePage() {
  const supabase = createStaticClient();

  const issues = await getNewsletterIssues(supabase);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Newsletter Archive
        </h1>
        <p className="text-muted-foreground">
          Past issues of the Brefyr newsletter. Get the latest
          small-cap insights delivered to your inbox.
        </p>
      </div>

      {issues.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center space-y-3">
            <p className="text-muted-foreground">
              No newsletter issues published yet. Subscribe to be notified when
              the first issue goes out.
            </p>
            <Button variant="outline" render={<Link href="/pricing" />}>
              Subscribe Free
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {issues.map((issue) => (
            <Card key={issue.id}>
              <CardHeader>
                <CardTitle className="text-base">{issue.subject}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  {issue.sent_at && (
                    <time dateTime={issue.sent_at}>
                      {new Date(issue.sent_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                  {issue.recipient_count > 0 && (
                    <>
                      <span aria-hidden="true">&middot;</span>
                      <span>
                        Sent to {issue.recipient_count.toLocaleString()}{" "}
                        subscribers
                      </span>
                    </>
                  )}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4">
        <Button variant="outline" render={<Link href="/blog" />}>
          Read the Blog
        </Button>
        <Button variant="outline" render={<Link href="/pricing" />}>
          Subscribe for Free
        </Button>
      </div>
    </main>
    </>
  );
}
