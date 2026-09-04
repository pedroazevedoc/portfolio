import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  secondary?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  secondary = false,
  className = "",
}: ButtonProps) {
  const classes = `button ${secondary ? "button-secondary" : ""} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowUpRight aria-hidden="true" />
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
      <ArrowUpRight aria-hidden="true" />
    </button>
  );
}
