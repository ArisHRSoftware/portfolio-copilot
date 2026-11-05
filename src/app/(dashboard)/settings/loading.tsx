import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <Skeleton className="h-8 w-28" />
        <Skeleton className="mt-1 h-4 w-72" />
      </div>

      {/* Tabs skeleton */}
      <div className="space-y-2">
        <div className="inline-flex h-8 items-center gap-1 rounded-lg bg-muted p-[3px]">
          <Skeleton className="h-7 w-20 rounded-md" />
          <Skeleton className="h-7 w-28 rounded-md" />
          <Skeleton className="h-7 w-28 rounded-md" />
          <Skeleton className="h-7 w-28 rounded-md" />
        </div>

        {/* Profile tab content (default) */}
        <div className="space-y-4 pt-4">
          {/* Personal Information card */}
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-44" />
              <Skeleton className="h-4 w-64" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-48" />
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-9 w-28 rounded-md" />
            </CardFooter>
          </Card>

          {/* Password card */}
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-4 w-72" />
            </CardHeader>
            <CardContent />
            <CardFooter>
              <Skeleton className="h-9 w-36 rounded-md" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
