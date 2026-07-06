import { Link } from "wouter";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "gold" | "whatsapp";
  external?: boolean;
  large?: boolean;
}

export default function CTAButton({ href, children, variant = "primary", external = false, large = false }: CTAButtonProps) {
  const styles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "#1a2744",
      color: "#faf7f2",
      border: "2px solid #1a2744",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#1a2744",
      border: "2px solid #1a2744",
    },
    gold: {
      backgroundColor: "#3d52a0",
      color: "#1a2744",
      border: "2px solid #3d52a0",
    },
    whatsapp: {
      backgroundColor: "#25d366",
      color: "#ffffff",
      border: "2px solid #25d366",
    },
  };

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    padding: large ? "0.85rem 1.75rem" : "0.65rem 1.4rem",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: large ? "1rem" : "0.92rem",
    textDecoration: "none",
    cursor: "pointer",
    transition: "opacity 0.2s, transform 0.15s",
    whiteSpace: "nowrap",
    ...styles[variant],
  };

  if (external || href.startsWith("mailto:") || href.startsWith("https:")) {
    return (
      <a
        href={href}
        style={base}
        target={external || href.startsWith("https:") ? "_blank" : undefined}
        rel={external || href.startsWith("https:") ? "noopener noreferrer" : undefined}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      style={base}
      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.opacity = "0.88"; }}
      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.opacity = "1"; }}
    >
      {children}
    </Link>
  );
}
