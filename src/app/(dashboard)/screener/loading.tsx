import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <Skeleton className="h-8 w-40" />
        <Skeleton className="mt-1 h-4 w-72" />
      </div>

      {/* Filter bar */}
      <Card>
        <CardContent className="flex flex-col gap-3 pt-4 sm:flex-row">
          <Skeleton className="h-10 flex-1 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md sm:w-[200px]" />
        </CardContent>
      </Card>

      {/* Result count */}
      <Skeleton className="h-4 w-32" />

      {/* Table */}
      <Card>
        <div className="overflow-auto">
          {/* Table header */}
          <div className="flex items-center gap-4 border-b px-4 py-3">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="hidden h-4 w-20 sm:block" />
            <Skeleton className="ml-auto h-4 w-20" />
            <Skeleton className="hidden h-4 w-20 md:block" />
          </div>

          {/* Table rows */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-b px-4 py-3 last:border-0"
            >
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-4 w-36" />
              <Skeleton className="hidden h-5 w-24 rounded-full sm:block" />
              <Skeleton className="ml-auto h-4 w-16" />
              <Skeleton className="hidden h-4 w-20 md:block" />
            </div>
          ))}
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-28" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20 rounded-md" />
          <Skeleton className="h-8 w-16 rounded-md" />
        </div>
      </div>
    </div>
  );
}
