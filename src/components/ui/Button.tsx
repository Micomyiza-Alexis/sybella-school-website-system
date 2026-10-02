import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "gold"
  | "light"
  | "outlineLight";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md",
  secondary: "bg-secondary text-white hover:opacity-90",
  outline:
    "border border-primary/25 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-white",
  ghost: "text-foreground hover:bg-surface",
  // For use on dark/navy backgrounds
  gold: "bg-accent text-primary-dark shadow-sm hover:brightness-105 hover:shadow-md",
  light: "bg-white text-primary hover:bg-surface",
  outlineLight:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold tracking-wide transition-all duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}