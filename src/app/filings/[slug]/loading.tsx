import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 space-y-8 px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-2" />
        <Skeleton className="h-4 w-14" />
      </div>

      {/* Filing header */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <Skeleton className="h-9 w-80" />
          <Skeleton className="h-6 w-28 rounded-full" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-2" />
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-4 w-2" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>

      <Skeleton className="h-px w-full" />

      {/* AI Summary section */}
      <section className="space-y-3">
        <Skeleton className="h-7 w-28" />
        <Card>
          <CardContent className="py-4 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </section>

      {/* Key Facts section */}
      <section className="space-y-3">
        <Skeleton className="h-7 w-24" />
        <Card>
          <CardContent className="py-4 space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start gap-2">
                <Skeleton className="mt-1 size-1.5 shrink-0 rounded-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Insider Trades section */}
      <section className="space-y-3">
        <Skeleton className="h-7 w-32" />
        <Card>
          <CardContent className="py-4">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="contents">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-28" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Risk Flags section */}
      <section className="space-y-3">
        <Skeleton className="h-7 w-24" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-24 rounded-full" />
          ))}
        </div>
      </section>

      {/* FAQ section */}
      <section className="space-y-3">
        <Skeleton className="h-7 w-56" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} size="sm">
              <CardHeader>
                <Skeleton className="h-5 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Skeleton className="h-px w-full" />

      {/* Bottom nav links */}
      <div className="flex flex-wrap items-center gap-4">
        <Skeleton className="h-9 w-44 rounded-md" />
        <Skeleton className="h-9 w-32 rounded-md" />
        <Skeleton className="h-9 w-32 rounded-md" />
      </div>
    </main>
  );
}
