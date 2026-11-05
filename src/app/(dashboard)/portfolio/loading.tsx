import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-6 px-4 py-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <Skeleton className="h-8 w-44" />
          <Skeleton className="h-4 w-80" />
        </div>
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>

      <Skeleton className="h-px w-full" />

      {/* Add stock section */}
      <section className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <div className="flex gap-2">
          <Skeleton className="h-10 flex-1 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </section>

      <Skeleton className="h-px w-full" />

      {/* Stock grid */}
      <section className="space-y-4">
        <Skeleton className="h-4 w-28" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card key={i} size="sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="mt-1 h-4 w-32" />
                  </div>
                  <Skeleton className="h-5 w-20 rounded-full" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="ml-auto h-8 w-28 rounded-md" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
