import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <Skeleton className="h-8 w-40" />
        <Skeleton className="mt-1 h-4 w-72" />
      </div>

      {/* Today's Briefing card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Skeleton className="size-4 rounded" />
            <Skeleton className="h-5 w-36" />
          </div>
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Skeleton className="size-10 rounded-lg" />
              <div>
                <Skeleton className="h-7 w-10" />
                <Skeleton className="mt-1 h-3 w-16" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="size-10 rounded-lg" />
              <div>
                <Skeleton className="h-7 w-6" />
                <Skeleton className="mt-1 h-3 w-24" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tracked Stocks section */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <Skeleton className="h-6 w-36" />
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
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

      {/* Recent Alerts section */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-8 w-28 rounded-md" />
        </div>
        <Card>
          <CardContent className="divide-y">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                <Skeleton className="mt-0.5 size-8 shrink-0 rounded-full" />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-14 rounded-full" />
                  </div>
                  <Skeleton className="h-3 w-full max-w-xs" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <Skeleton className="size-8 rounded-md" />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Plan Usage card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Skeleton className="size-4 rounded" />
            <Skeleton className="h-5 w-24" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <div className="mb-1 flex items-center justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
                <Skeleton className="mt-1 h-1.5 w-full rounded-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
