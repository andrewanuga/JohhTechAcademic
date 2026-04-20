import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[rgba(245,197,24,0.1)] text-[var(--accent)] border border-[rgba(245,197,24,0.25)]",
        secondary: "bg-[var(--surface2)] text-[var(--muted)] border border-[var(--border)]",
        outline: "border border-[var(--border2)] text-[var(--muted)]",
        destructive: "bg-red-900/30 text-red-400 border border-red-800",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), "font-mono", className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
