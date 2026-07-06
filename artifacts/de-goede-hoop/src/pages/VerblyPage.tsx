import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { whatsappLink, mailtoLink, siteConfig } from "@/data/siteConfig";

const amenities = [
  { icon: "🏠", title: "Mans- en Damesvleuels", description: "Afsonderlike vleuels vir mans- en damesestudente op dieselfde perseel — privaatheid én gemeenskap." },
  { icon: "🛜", title: "Wi-Fi", description: "Wi-Fi indien van toepassing. Kontak bestuur vir die mees onlangse inligting oor internetskakel." },
  { icon: "🚗", title: "Parkering", description: "Parkering indien van toepassing. Beskikbaarheid wissel — navraag welkom by bestuur." },
  { icon: "👕", title: "Was- en Droogfasiliteite", description: "Wasgoed/wassers indien van toepassing. Kontak bestuur vir besonderhede oor wasgeriewe." },
  { icon: "🍳", title: "Kombuis / Gemeenskaplike Ruimtes", description: "Kombuis en gemeenskaplike areas indien van toepassing. Bespreek geriewe direk met bestuur." },
  { icon: "📚", title: "Studieruimte", description: "Studievriendlike omgewing met rustige areas waar studente gefokus kan werk." },
];

export default function VerblyPage() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a2744 0%, #7a1f35 100%)",
          padding: "4rem 1.5rem 3.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#3d52a0", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Jou kamer, jou ruimte
          </p>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#faf7f2",
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            Verblyf &amp; Geriewe
          </h1>
          <p style={{ color: "rgba(250,247,242,0.82)", fontSize: "1.05rem", lineHeight: 1.75 }}>
            'n Veilige, gestruktureerde tuiste naby die hartklop van Hatfield.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <SectionHeading eyebrow="Verblyf" title="'n Veilige studenteomgewing" />
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                De Goede Hoop bied 'n gestruktureerde koshuisomgewing waar veiligheid, privaatheid en gemeenskap saamkom. Ons perseel is ontwerp met die moderne student se behoeftes in gedagte.
              </p>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Met aparte mans- en damesvleuels op een terrein, geniet studente die voordele van nabywees terwyl gepaste grense gehandhaaf word.
              </p>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.8 }}>
                Ons ligging in Burnettstraat, Hatfield, maak ons ideaal vir studente aan nabygeleë instellings — {siteConfig.locationDescription}.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Ligging", value: siteConfig.address },
                { label: "Distansie", value: siteConfig.locationDescription },
                { label: "Vleuelindeling", value: "Afsonderlike mans- en damesvleuels" },
                { label: "Omgewing", value: "Christelik, Afrikaans, gestruktureerd" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1rem",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ color: "#3d52a0", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.06em", minWidth: "90px", paddingTop: "2px" }}>
                    {item.label}
                  </div>
                  <div style={{ color: "#1a2744", fontSize: "0.92rem", lineHeight: 1.5 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geriewe */}
      <section style={{ backgroundColor: "#f0ebe0", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="Geriewe"
            title="Wat De Goede Hoop bied"
            center
          />
          <div
            style={{
              backgroundColor: "#fff8e8",
              border: "1px solid #6b7ec7",
              borderRadius: "8px",
              padding: "1rem 1.25rem",
              marginBottom: "2.5rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
          >
            <span style={{ color: "#2c3d7a", fontSize: "1.1rem", flexShrink: 0, marginTop: "2px" }}>ℹ️</span>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
              <strong>Let wel:</strong> Geriewe kan volgens beskikbaarheid en jaarlikse reëlings verskil. Kontak bestuur vir die mees onlangse besonderhede oor kamerbeskikbaarheid en geriewe.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {amenities.map((a, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  borderLeft: "4px solid #3d52a0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }} aria-hidden="true">{a.icon}</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2744", marginBottom: "0.5rem" }}>{a.title}</h3>
                <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.65 }}>{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ backgroundColor: "#1a2744", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionHeading eyebrow="Ligging" title="Geleë in die hart van Hatfield" light center />
          <p style={{ color: "rgba(250,247,242,0.82)", fontSize: "1rem", lineHeight: 1.8, textAlign: "center", maxWidth: "600px", margin: "0 auto 2rem" }}>
            {siteConfig.locationDescription}. Hatfield is een van Pretoria se gewildste studente-areas met winkels, restaurante en uitstekende openbare vervoer reg voor jou deur.
          </p>
          {/* Maps placeholder */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "2px dashed rgba(201,168,76,0.4)",
              borderRadius: "10px",
              padding: "3rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
            role="img"
            aria-label="Google Maps kaart van De Goede Hoop Koshuis, Burnettstraat, Hatfield, Pretoria — plsaas 'n ingeboude kaart hier"
          >
            <p style={{ color: "#3d52a0", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
              📍 Kaart Plaasvervanger
            </p>
            <p style={{ color: "rgba(250,247,242,0.65)", fontSize: "0.9rem" }}>
              Burnettstraat, Hatfield, Pretoria
            </p>
            <p style={{ color: "rgba(250,247,242,0.45)", fontSize: "0.78rem", marginTop: "0.5rem" }}>
              [Plaas Google Maps iframe hier — gebruik die embed-kode van Google Maps]
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              fontWeight: 700,
              color: "#1a2744",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Wil jy meer weet oor kamers en beskikbaarheid?
          </h2>
          <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Kontak ons bestuur direk vir die mees onlangse inligting oor beskikbaarheid, huurkoste en aansoekproses.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a
              href={whatsappLink("Goeiedag, ek wil graag meer weet oor kamers en beskikbaarheid by De Goede Hoop.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "#25d366",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "0.85rem 1.75rem",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ons
            </a>
            <a
              href={mailtoLink("Verblyf Navraag - De Goede Hoop")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "#1a2744",
                color: "#faf7f2",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "0.85rem 1.75rem",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              ✉️ Stuur 'n e-pos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
