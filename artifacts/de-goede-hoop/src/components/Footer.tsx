import { Link } from "wouter";
import { siteConfig, whatsappLink, mailtoLink } from "@/data/siteConfig";

const quickLinks = [
  { href: "/", label: "Tuis" },
  { href: "/oor-ons", label: "Oor Ons" },
  { href: "/verblyf", label: "Verblyf & Geriewe" },
  { href: "/eerstejaars", label: "Eerstejaars" },
  { href: "/aansoek", label: "Doen Aansoek" },
  { href: "/kontak", label: "Kontak Ons" },
  { href: "/popi", label: "POPI / Privaatheid" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#111a30",
        color: "#d0d8ee",
        paddingTop: "3.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#c9a84c",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ color: "#1a2744", fontWeight: 700, fontSize: "0.95rem", fontFamily: "Playfair Display, serif" }}>G</span>
              </div>
              <div>
                <div style={{ color: "#faf7f2", fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "1rem", lineHeight: 1.1 }}>
                  De Goede Hoop
                </div>
                <div style={{ color: "#c9a84c", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Koshuis
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", color: "#a0aec0", lineHeight: 1.7, marginBottom: "1rem" }}>
              'n Christelike, Afrikaanse studentekoshuis in die hart van Hatfield, Pretoria.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "#25d366",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.85rem",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                textDecoration: "none",
              }}
              aria-label="WhatsApp De Goede Hoop"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ons
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 style={{ color: "#faf7f2", fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>
              Vinnige Skakels
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#a0aec0",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#c9a84c")}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#a0aec0")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "#faf7f2", fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 600, marginBottom: "1rem" }}>
              Kontak
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div>
                <div style={{ color: "#c9a84c", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>Adres</div>
                <p style={{ color: "#a0aec0", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  {siteConfig.address}
                </p>
              </div>
              <div>
                <div style={{ color: "#c9a84c", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>E-pos</div>
                <a
                  href={mailtoLink()}
                  style={{ color: "#a0aec0", fontSize: "0.9rem", textDecoration: "none" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#c9a84c")}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#a0aec0")}
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <div style={{ color: "#c9a84c", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>WhatsApp</div>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#a0aec0", fontSize: "0.9rem", textDecoration: "none" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#c9a84c")}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#a0aec0")}
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <p style={{ color: "#718096", fontSize: "0.82rem" }}>
            © {year} {siteConfig.organisationName}. Alle regte voorbehou.
          </p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <Link
              href="/popi"
              style={{ color: "#718096", fontSize: "0.82rem", textDecoration: "none" }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#718096")}
            >
              POPI / Privaatheid
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
