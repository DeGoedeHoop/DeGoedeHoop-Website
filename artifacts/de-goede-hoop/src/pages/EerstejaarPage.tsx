import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { whatsappLink, mailtoLink } from "@/data/siteConfig";

// TODO: Place the PDF file at public/de-goede-hoop-inligtingsbrief-2027.pdf before going live.
// The download button below links to this path. If the file is not present, the download will fail.
const PDF_PATH = "/de-goede-hoop-inligtingsbrief-2027.pdf";

const expectations = [
  { icon: "🤝", title: "Verwelkoming", description: "Eerstejaars word spesiaal verwelkom in ons gemeenskap. Jy sal nie alleen wees tydens die oorgang na universiteitslewe nie." },
  { icon: "📋", title: "Oriëntering", description: "Ons bied oriëntering aan om jou te help inskakel, reëls en verwagtinge te verstaan en vriende te maak." },
  { icon: "🧭", title: "Ondersteuning", description: "Ouer studente en bestuur is beskikbaar om eerstejaars te begelei en te ondersteun deur die eerste weke." },
  { icon: "📚", title: "Akademiese Ondersteuning", description: "Ons omgewing is gestruktureerd om jou akademies te help slaag. Stiltetye en studieruimtes help jou fokus." },
];

const parentInfo = [
  { title: "Veiligheid", description: "Ons perseel is veilig en gestruktureerd. Reëls word gehandhaaf om 'n rustige omgewing vir alle studente te verseker." },
  { title: "Kommunikasie", description: "Bestuur is bereikbaar via e-pos en WhatsApp vir enige vrae oor jou kind se welsyn en verblyf." },
  { title: "Waardes", description: "Ons Christelike en Afrikaanse grondslag beteken dat jou kind in 'n omgewing van respek, verantwoordelikheid en geloof leef." },
  { title: "Gereedheid", description: "Ons help eerstejaars om die sprong na selfstandigheid met selfvertroue te maak terwyl ons gemeenskap hulle omsluit." },
];

export default function EerstejaarPage() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: "linear-gradient(135deg, #2d5a3d 0%, #1a2744 100%)",
          padding: "4rem 1.5rem 3.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#c9a84c", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Nuwe begin
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
            Eerstejaars by De Goede Hoop
          </h1>
          <p style={{ color: "rgba(250,247,242,0.82)", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Welkom by die begin van 'n nuwe hoofstuk. De Goede Hoop is opgewonde om nuwe eerstejaars in ons koshuisgemeenskap te verwelkom en saam met julle die oorgang na studentwees aan te pak.
          </p>
        </div>
      </section>

      {/* Wat eerstejaars kan verwag */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="Wat om te verwag"
            title="Wat eerstejaars by De Goede Hoop kan verwag"
            subtitle="Ons verstaan dat die eerste jaar daunting kan wees. Ons is hier om jou tuis te laat voel van dag een."
            center
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {expectations.map((e, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  borderTop: "4px solid #c9a84c",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }} aria-hidden="true">{e.icon}</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2744", marginBottom: "0.5rem" }}>{e.title}</h3>
                <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.65 }}>{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aansoekproses */}
      <section style={{ backgroundColor: "#f0ebe0", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionHeading eyebrow="Aansoekproses" title="Hoe die aansoekproses werk" />
          <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { step: "1", title: "Doen aansoek", text: "Vul ons aansoekblad in op die Aansoek-bladsy of kontak bestuur direk via WhatsApp of e-pos." },
              { step: "2", title: "Bevestiging van navraag", text: "Bestuur sal jou navraag bevestig en jou verder inlig oor die proses en enige bykomende vereistes." },
              { step: "3", title: "Plasing bevestig", text: "Sodra 'n kamer beskikbaar is en jou aansoek goedgekeur is, sal bestuur jou plasingbesonderhede bevestig." },
              { step: "4", title: "Intrek en oriëntering", text: "Jy trek in en word verwelkom in die De Goede Hoop-gemeenskap. Oriëntering help jou om in te skakel en tuis te voel." },
            ].map((item) => (
              <li
                key={item.step}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#1a2744",
                    color: "#c9a84c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "1rem",
                    flexShrink: 0,
                    fontFamily: "Playfair Display, serif",
                  }}
                  aria-hidden="true"
                >
                  {item.step}
                </div>
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2744", marginBottom: "0.35rem" }}>{item.title}</h3>
                  <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.7 }}>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Wat ouers moet weet */}
      <section style={{ backgroundColor: "#1a2744", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionHeading eyebrow="Vir ouers" title="Wat ouers moet weet" light center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {parentInfo.map((p, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  borderTop: "3px solid #c9a84c",
                }}
              >
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1rem", fontWeight: 700, color: "#faf7f2", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: "rgba(250,247,242,0.75)", fontSize: "0.9rem", lineHeight: 1.65 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Belangrike dokumente & CTA */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="Belangrike dokumente"
            title="Alles wat jy nodig het om te begin"
            center
          />
          <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Laai ons inligtingsbrief af vir 'n volledige oorsig van die koshuis, reëls, kostes en aansoekbesonderhede. Vir die mees onlangse inligting, kontak bestuur direk.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <CTAButton href="/aansoek" variant="primary" large>Doen aansoek</CTAButton>
            <a
              href={whatsappLink("Goeiedag, ek is 'n eerstejaar en wil graag meer weet oor De Goede Hoop Koshuis.")}
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
              WhatsApp vir eerstejaarsnavrae
            </a>
            {/* TODO: Place /de-goede-hoop-inligtingsbrief-2027.pdf in the public/ folder before going live */}
            <a
              href={PDF_PATH}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "#c9a84c",
                color: "#1a2744",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "0.85rem 1.75rem",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              📄 Laai inligtingsbrief af
            </a>
          </div>
          <p style={{ color: "#888", fontSize: "0.78rem", marginTop: "1rem" }}>
            Nota: Die inligtingsbrief PDF moet in die <code>public/</code>-vouer geplaas word voor dit afgelaai kan word.
          </p>
        </div>
      </section>
    </>
  );
}
