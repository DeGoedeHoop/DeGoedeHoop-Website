import { Home, Wifi, Shirt, UtensilsCrossed, TreePine, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { whatsappLink, mailtoLink, siteConfig } from "@/data/siteConfig";

const amenities = [
  {
    icon: <Home size={20} />,
    title: "Kamers en Badkamers",
    description:
      "Elke enkelkamer beskik oor 'n enkelbedbasis, lessenaar, boekrak en ingeboude kas. Jy bring self jou matras, beddegoed, gordyne (standaardlengte), stoel, asblik en persoonlike goed. Badkamers is toegerus met toilette, wasbakke en storte — met baddens in sommige eenhede. Onthou jou eie stortmatjie.",
  },
  {
    icon: <Wifi size={20} />,
    title: "Wi-Fi en Parkering",
    description:
      "Wi-Fi is deurgaans in die koshuis beskikbaar sodat studente maklik aanlyn kan gaan vir studies en kommunikasie. Veilige, omheinde parkering is op die perseel beskikbaar vir studente met voertuie. Elektrisiteit en parkering is by die huurbedrag ingesluit.",
  },
  {
    icon: <Shirt size={20} />,
    title: "Was- en Droogfasiliteite",
    description:
      "Industriële wasmasjiene en tuimeldroërs is in die gedeelde wasgeriewe beskikbaar, sodat studente hul wasgoed maklik en vinnig binne die koshuisterrein kan doen — geen reis na 'n wasserette nodig nie.",
  },
  {
    icon: <UtensilsCrossed size={20} />,
    title: "Kombuis en Gemeenskaplike Ruimtes",
    description:
      "Gedeelde kombuise is toegerus met 'n yskas/vrieskas en induksiestoof. Studente voorsien self hul eie kastrolle, panne, eetgerei en skoonmaakmiddels. Kroegyskassies word in kamers toegelaat. Gedeelde areas word weeksdae deur die koshuis skoongemaak.",
  },
  {
    icon: <TreePine size={20} />,
    title: "Klubhuis, Braai en Buitelucht",
    description:
      "'n Klubhuis, braaigeriewe en lieflike grasperke bied ruimte vir ontspanning, saamkuier en sosiale byeenkomste — die hartklop van die koshuisgemeenskap buite die klaskamer.",
  },
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
            Verblyf
          </h1>
          <p style={{ color: "rgba(250,247,242,0.82)", fontSize: "1.05rem", lineHeight: 1.75 }}>
            'n Veilige, gestruktureerde tuiste naby die hartklop van Hatfield.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>
            <div>
              <SectionHeading eyebrow="Verblyf" title="Wat bied De Goede Hoop jou?" />
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Studente bly in hul eie kamers. Daar is verskillende tipes kamers: koshuiskamers, gedeelde woonstelle, kommunes en tuinwoonstelle. Mans en dames woon op aparte vleuels.
              </p>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Geen etes word verskaf nie — gedeelde kombuise is egter voltoegerus vir selfversorging. Die koshuis is omring met 'n elektriese heining en hek, met 'n 24 uur-sekuriteitswag.
              </p>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.8 }}>
                Kamerplasings word deur De Goede Hoop gedoen nadat die keuringsproses voltooi is. Gedeelde areas word weeksdae deur die personeel skoongemaak.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 16px rgba(26,39,68,0.09)", border: "1px solid rgba(26,39,68,0.08)" }}>
              {[
                { label: "Ligging", value: siteConfig.address },
                { label: "Distansie", value: siteConfig.locationDescription },
                { label: "Vleuelindeling", value: "Afsonderlike mans- en damesvleuels" },
                { label: "Sekuriteit", value: "Elektriese omheining, hek en 24 uur-wag" },
                { label: "Omgewing", value: "Christelik, Afrikaans, gestruktureerd" },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "110px 1fr",
                    gap: "0.75rem",
                    padding: "1.1rem 1.25rem",
                    backgroundColor: i % 2 === 0 ? "#fff" : "#f7f5f0",
                    borderBottom: i < arr.length - 1 ? "1px solid rgba(26,39,68,0.07)" : "none",
                  }}
                >
                  <div style={{ color: "#3d52a0", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.07em", paddingTop: "2px" }}>
                    {item.label}
                  </div>
                  <div style={{ color: "#1a2744", fontSize: "0.92rem", lineHeight: 1.55 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geriewe */}
      <section style={{ backgroundColor: "#f0ebe0", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="Geriewe"
            title="Wat is ingesluit?"
            subtitle="Alles wat jy nodig het vir 'n gemaklike, gestruktureerde studentelewe — op een perseel."
            center
          />
          <div style={{ marginTop: "3rem" }}>
            {amenities.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "52px 1fr",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  padding: "1.75rem 0",
                  borderBottom: i < amenities.length - 1 ? "1px solid rgba(26,39,68,0.12)" : "none",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    backgroundColor: "#1a2744",
                    color: "#faf7f2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {a.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2744", marginBottom: "0.45rem" }}>
                    {a.title}
                  </h3>
                  <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>{a.description}</p>
                </div>
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
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.25)",
              marginBottom: "2rem",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=De+Goede+Hoop+Koshuis,-25.7504754,28.2417351&z=17&output=embed"
              width="100%"
              height="360"
              style={{ display: "block", border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps kaart van De Goede Hoop Koshuis, Burnettstraat, Hatfield, Pretoria"
            />
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
            Vir enige navrae of verdere inligting, stuur asseblief 'n epos na bestuur@degoedehoop.co.za of kontak ons direk via WhatsApp.
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
              Kontak Bestuur
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
              <Mail size={16} aria-hidden="true" /> Stuur 'n e-pos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
