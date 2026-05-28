import { cn } from "@/lib/utils";

type SectionSkeletonProps = {
  className?: string;
  lines?: number;
};

export function SectionSkeleton({ className, lines = 3 }: SectionSkeletonProps) {
  return (
    <div
      className={cn("animate-pulse space-y-4 py-16", className)}
      aria-hidden
    >
      <div className="mx-auto h-4 w-24 rounded bg-muted" />
      <div className="mx-auto h-10 max-w-lg rounded bg-muted" />
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="mx-auto h-4 max-w-2xl rounded bg-muted/70"
          style={{ width: `${85 - i * 10}%` }}
        />
      ))}
    </div>
  );
}
