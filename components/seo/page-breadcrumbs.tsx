import Link from "next/link";

import { cn } from "@/lib/utils";

export type BreadcrumbLink = {
  name: string;
  href: string;
};

type PageBreadcrumbsProps = {
  items: BreadcrumbLink[];
  className?: string;
};

export function PageBreadcrumbs({ items, className }: PageBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="inline-flex items-center gap-1.5">
              {index > 0 ? (
                <span aria-hidden className="text-border">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-brand-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
