import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-[var(--accent)] text-black hover:opacity-85",
        outline: "border border-[var(--border2)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
        ghost: "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface2)]",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        secondary: "bg-[var(--surface2)] text-[var(--text)] hover:bg-[var(--border2)]",
      },
      size: {
        sm: "text-xs px-3 py-1.5",
        default: "text-sm px-5 py-2.5",
        lg: "text-base px-7 py-3.5",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
