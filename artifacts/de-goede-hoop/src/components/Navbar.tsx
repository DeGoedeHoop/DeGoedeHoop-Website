import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { siteConfig, whatsappLink } from "@/data/siteConfig";

const navLinks = [
  { href: "/", label: "Tuis" },
  { href: "/oor-ons", label: "Oor Ons" },
  { href: "/verblyf", label: "Verblyf" },
  { href: "/eerstejaars", label: "Eerstejaars" },
  { href: "/aansoek", label: "Aansoek" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "#111a30" : "#1a2744",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.3)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <nav
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
        aria-label="Hoofnavigasie"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo / Brand */}
          <Link
            href="/"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}
            aria-label="De Goede Hoop Koshuis - Tuis"
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                backgroundColor: "#c9a84c",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "#1a2744", fontWeight: 700, fontSize: "1rem", fontFamily: "Playfair Display, serif" }}>G</span>
            </div>
            <div>
              <div style={{ color: "#faf7f2", fontFamily: "Playfair Display, serif", fontWeight: 600, fontSize: "1rem", lineHeight: 1.1 }}>
                De Goede Hoop
              </div>
              <div style={{ color: "#c9a84c", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Koshuis
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.15rem",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive(link.href) ? "#c9a84c" : "#d0d8ee",
                  fontWeight: isActive(link.href) ? 600 : 400,
                  fontSize: "0.9rem",
                  padding: "0.4rem 0.75rem",
                  borderRadius: "4px",
                  textDecoration: "none",
                  borderBottom: isActive(link.href) ? "2px solid #c9a84c" : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/aansoek"
              style={{
                marginLeft: "0.5rem",
                backgroundColor: "#c9a84c",
                color: "#1a2744",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "0.5rem 1.25rem",
                borderRadius: "6px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Doen aansoek
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Sluit menu" : "Maak menu oop"}
            aria-expanded={open}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "#faf7f2",
            }}
            className="show-mobile"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu drawer */}
        {open && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
            onClick={() => setOpen(false)}
          >
            <nav
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "min(320px, 85vw)",
                height: "100%",
                backgroundColor: "#111a30",
                padding: "5rem 1.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobiele navigasie"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive(link.href) ? "#c9a84c" : "#d0d8ee",
                    fontWeight: isActive(link.href) ? 600 : 400,
                    fontSize: "1.1rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                    backgroundColor: isActive(link.href) ? "rgba(201,168,76,0.1)" : "transparent",
                    display: "block",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link
                  href="/aansoek"
                  style={{
                    backgroundColor: "#c9a84c",
                    color: "#1a2744",
                    fontWeight: 700,
                    fontSize: "1rem",
                    padding: "0.85rem 1rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  Doen aansoek
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#25d366",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1rem",
                    padding: "0.85rem 1rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  WhatsApp ons
                </a>
              </div>
            </nav>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
