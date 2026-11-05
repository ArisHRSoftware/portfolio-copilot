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
        <Skeleton className="mt-1 h-4 w-96" />
      </div>

      {/* Create new key card */}
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-80" />
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Skeleton className="h-10 flex-1 rounded-md" />
            <Skeleton className="h-10 w-24 rounded-md" />
          </div>
        </CardContent>
      </Card>

      {/* Existing keys card */}
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-28" />
        </CardHeader>
        <CardContent>
          {/* Table header */}
          <div className="flex items-center gap-4 border-b pb-3">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="ml-auto h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-8" />
          </div>
          {/* Key rows */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-b py-3 last:border-0"
            >
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="ml-auto h-4 w-8" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="size-8 rounded-md" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick start card */}
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-24" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <div className="space-y-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-5 w-10 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-40" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
