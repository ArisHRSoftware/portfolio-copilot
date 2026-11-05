import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Skeleton className="h-8 w-28" />
        <Skeleton className="mt-1 h-4 w-80" />
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="flex items-center gap-3 pt-4">
              <Skeleton className="size-8 rounded" />
              <div>
                <Skeleton className="h-7 w-10" />
                <Skeleton className="mt-1 h-3 w-24" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Referral link card */}
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-4 w-80" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 flex-1 rounded-md" />
            <Skeleton className="h-9 w-10 rounded-md" />
          </div>
        </CardContent>
      </Card>

      {/* Referral history table */}
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-32" />
        </CardHeader>
        <CardContent>
          {/* Table header */}
          <div className="flex items-center gap-4 border-b pb-3">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="ml-auto h-4 w-16" />
          </div>
          {/* Table rows */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-b py-3 last:border-0"
            >
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="ml-auto h-4 w-16" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
