"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 py-16 min-h-[60vh]">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground text-center max-w-md">
        We hit a temporary issue loading this page. This usually resolves
        within a few minutes.
      </p>
      <div className="flex gap-3">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button variant="outline" render={<Link href="/" />}>
          Go Home
        </Button>
      </div>
      {process.env.NODE_ENV === "development" && error?.message && (
        <pre className="mt-4 max-w-lg overflow-auto rounded bg-muted p-4 text-xs">
          {error.message}
        </pre>
      )}
    </main>
  );
}
