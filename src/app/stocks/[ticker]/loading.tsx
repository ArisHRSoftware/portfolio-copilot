import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-8 px-4 py-8">
      {/* Company header */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <Skeleton className="h-9 w-56" />
          <Skeleton className="h-7 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-2" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-2" />
          <Skeleton className="h-4 w-36" />
        </div>
      </div>

      {/* Track CTA card */}
      <Card>
        <CardContent className="flex flex-col items-start justify-between gap-4 py-4 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <Skeleton className="h-5 w-72" />
            <Skeleton className="h-4 w-96" />
          </div>
          <Skeleton className="h-10 w-28 rounded-md" />
        </CardContent>
      </Card>

      <Skeleton className="h-px w-full" />

      {/* Filing Timeline section */}
      <section className="space-y-4">
        <Skeleton className="h-7 w-36" />

        {/* Table header */}
        <div className="overflow-auto">
          <div className="flex items-center gap-4 border-b pb-3">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="hidden h-4 w-20 sm:block" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="ml-auto h-4 w-14" />
          </div>

          {/* Filing rows */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-b py-3 last:border-0"
            >
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-14 rounded-full" />
              <Skeleton className="hidden h-4 w-48 sm:block" />
              <Skeleton className="h-5 w-24 rounded-full" />
              <Skeleton className="ml-auto h-8 w-14 rounded-md" />
            </div>
          ))}
        </div>
      </section>

      {/* Insider Trades section */}
      <section className="space-y-4">
        <Skeleton className="h-7 w-32" />
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} size="sm">
              <CardHeader>
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-40" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-2/3" />
                <Skeleton className="mt-2 h-5 w-24 rounded-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom nav links */}
      <div className="flex items-center gap-4 pt-4">
        <Skeleton className="h-9 w-44 rounded-md" />
        <Skeleton className="h-9 w-32 rounded-md" />
      </div>
    </main>
  );
}
