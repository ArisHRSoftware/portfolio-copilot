import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-6 px-4 py-8">
      {/* Header */}
      <div className="space-y-1">
        <Skeleton className="h-8 w-44" />
        <Skeleton className="h-4 w-80" />
      </div>

      {/* Summary metric cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} size="sm">
            <CardHeader>
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-8 w-16" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1">
                <Skeleton className="size-3 rounded" />
                <Skeleton className="h-3 w-20" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Runs table */}
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          {/* Table header */}
          <div className="flex items-center gap-4 border-b pb-3">
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="ml-auto h-4 w-16" />
            <Skeleton className="h-4 w-14" />
          </div>
          {/* Table rows */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-b py-3 last:border-0"
            >
              <Skeleton className="size-4 rounded" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="ml-auto h-4 w-10" />
              <Skeleton className="h-4 w-8" />
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
