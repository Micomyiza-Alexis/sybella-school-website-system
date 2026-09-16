import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-white hover:opacity-90",
  outline: "border border-border bg-white text-foreground hover:bg-surface",
  ghost: "text-foreground hover:bg-surface",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center
    rounded-full
    px-5 py-3
    text-sm font-semibold
    transition-all duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-secondary
    focus:ring-offset-2
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}