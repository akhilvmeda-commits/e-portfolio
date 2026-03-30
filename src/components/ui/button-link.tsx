import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  external?: boolean;
  className?: string;
};

const variantStyles: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary: "button-primary",
  secondary: "button-secondary",
  ghost: "button-ghost",
};

export function ButtonLink({
  href,
  label,
  variant = "primary",
  download = false,
  external = false,
  className = "",
}: ButtonLinkProps) {
  const sharedClassName = `button-base ${variantStyles[variant]} ${className}`.trim();

  if (external || download) {
    return (
      <a
        className={sharedClassName}
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <Link className={sharedClassName} href={href}>
      {label}
    </Link>
  );
}
