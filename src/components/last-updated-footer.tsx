interface LastUpdatedFooterProps {
  date: string | null; // ISO date string
}

export function LastUpdatedFooter({ date }: LastUpdatedFooterProps) {
  if (!date) return null;

  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <p className="text-xs text-muted-foreground">
      Last updated: {formatted}
    </p>
  );
}
