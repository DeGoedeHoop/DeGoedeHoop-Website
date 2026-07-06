import { Church, HeartHandshake, BookOpen, Sprout, Home, Leaf } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { whatsappLink } from "@/data/siteConfig";

const values = [
  { icon: <Church size={20} />, title: "Geloof", description: "Ons grondwet en daaglikse lewe is gegrond in Christelike beginsels. Geloof, hoop en liefde dra ons gemeenskap." },
  { icon: <HeartHandshake size={20} />, title: "Respek", description: "Elke student word met waardigheid behandel. Ons vier verskille en bou op gedeelde waardes." },
  { icon: <BookOpen size={20} />, title: "Verantwoordelikheid", description: "Studente leer om verantwoordelikheid te neem vir hul akademie, hul gedrag en hul bydrae tot die gemeenskap." },
  { icon: <Sprout size={20} />, title: "Groei", description: "Persoonlike en geestelike groei word aangemoedig. De Goede Hoop is 'n plek waar jy jou volle potensiaal bereik." },
  { icon: <Home size={20} />, title: "Gemeenskap", description: "Ons glo in die krag van gemeenskap. Vriendskap, saamwees en ondersteuning maak De Goede Hoop 'n tuiste." },
  { icon: <Leaf size={20} />, title: "Afrikaanse Kultuur", description: "Ons vier die rykdom van die Afrikaanse taal en kultuur as deel van ons identiteit en saamhorigheid." },
];

export default function OorOnsPage() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a2744 0%, #111a30 100%)",
          padding: "4rem 1.5rem 3.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#3d52a0", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Ons verhaal
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
            Oor De Goede Hoop
          </h1>
          <p style={{ color: "rgba(250,247,242,0.82)", fontSize: "1.05rem", lineHeight: 1.75 }}>
            'n Koshuis gegrond in geloof, saamgevoeg deur gemeenskap, gerig op groei.
          </p>
        </div>
      </section>

      {/* Ons identiteit */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div>
              <SectionHeading
                eyebrow="Ons identiteit"
                title="Waardes en kultuur"
              />
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                VISIE: Om ’n inklusiewe Christelike, Afrikaner koshuis uit te bou waar ons strewe na uitnemendheid, respek vir mekaar en ander, en integriteit hand aan hand loop met ryke koshuistradisies en ’n prestasiekultuur. De Goede Hoop koshuis wil ’n tuiste en atmosfeer vir studente skep waarin vandag se studente tot môre se leiers geslyp word.
              </p>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Missie: Ons missie is om elke inwoner van De Goede Hoop in staat te stel om hul volle potensiaal in verskeie fasette van hul lewe te bereik. Dit kan slegs bereik word deur blootstelling aan ’n verskeidenheid aktiwiteite, projekte en aksies wat elkeen bemagtig om as persoon te ontwikkel en optimaal te presteer.
              </p>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.8 }}>
                Huiskomitee (HK): Sowel die mans as die dames het vyf huiskomitee- (HK-)lede wat jaarliks deur De Goede Hoop-studente verkies word. Die vyf HK-lede bestuur in totaal nege portefeuljes wat saam die kultuur, aktiwiteite, prestasie en etos in die koshuis bepaal. Onder leiding van die koshuisouers neem die HK volle verantwoordelikheid vir die suksesvolle bestuur van die koshuis. Hulle is dus daarvoor verantwoordelik om die toekomstige sukses van De Goede Hoop te verseker.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#f0ebe0",
                borderRadius: "12px",
                padding: "2rem",
                borderLeft: "4px solid #3d52a0",
              }}
            >
              <p
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.2rem",
                  color: "#1a2744",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                "Dit is vir ons ’n groot voorreg om deel te wees van die De Goede Hoop-familie en om saam te bou aan die voortgesette sukses en groei van die koshuis."
              </p>
              <p style={{ color: "#888", fontSize: "0.85rem", marginTop: "1rem", fontWeight: 500 }}>
                — De Goede Hoop Bestuur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ons waardes */}
      <section style={{ backgroundColor: "#f0ebe0", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="Ons waardes"
            title="Wat ons glo en leef"
            subtitle="Ons waardes vorm die grondslag van alles wat ons doen — van die manier waarop ons saamleef tot die kultuur wat ons koester."
            center
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  borderTop: "3px solid #3d52a0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    backgroundColor: "#1a2744",
                    color: "#faf7f2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.75rem",
                  }}
                  aria-hidden="true"
                >
                  {v.icon}
                </div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1a2744", marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Koshuislewe */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionHeading eyebrow="Daaglikse lewe" title="Koshuislewe by De Goede Hoop" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", color: "#1a2744", marginBottom: "0.75rem", fontWeight: 700 }}>
                Afsonderlike vleuels, gedeelde gemeenskap
              </h3>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                By De Goede Hoop glo ons dat ’n koshuis veel meer as net ’n plek van verblyf moet wees. Dit moet ’n omgewing wees waar studente kan groei, hulself kan uitleef en die geleentheid kry om hul volle potensiaal te ontdek. Ons streef daarna om ’n gesonde koshuisomgewing te skep waarin elke inwoner veilig, welkom en deel van ’n groter gemeenskap kan voel.
              </p>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Jeugontwikkeling en persoonlike groei vorm ’n belangrike deel van De Goede Hoop se kultuur. Ons wil inwoners blootstel aan ervarings, verantwoordelikhede en geleenthede wat hul denkraamwerk verbreed en hulle bemagtig met vaardighede wat hulle nie net tydens hul studentetyd nie, maar ook in hul toekomstige loopbane en persoonlike lewens kan gebruik.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", color: "#1a2744", marginBottom: "0.75rem", fontWeight: 700 }}>
                Gestruktureerd en studievriendlik
              </h3>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                Terselfdertyd is dit vir ons belangrik om ’n ondersteunende en ontfermende omgewing te skep waarin elke student werklik kan voel dat De Goede Hoop hul huis weg van die huis is.
              </p>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Een van die grootste voorregte wat ons as De Goede Hoop-bestuur het, is om ’n rol te speel in die ontwikkeling van jongmense en om saam met hulle aan hul toekoms te bou. Ons glo dat De Goede Hoop ’n omgewing kan bied waarin elke inwoner nie net hoop vir die toekoms het nie, maar ook die geleentheid kry om te leer hoe om doelgerig aan hul eie toekoms te bou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leierskap en gemeenskap */}
      <section style={{ backgroundColor: "#1a2744", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <SectionHeading
            eyebrow="Leierskap & Gemeenskap"
            title="Hoekom studente hier tuis voel"
            light
            center
          />
          <p style={{ color: "rgba(250,247,242,0.82)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "680px", margin: "0 auto 2rem" }}>
            Studente kies De Goede Hoop nie net vir die geriewe of ligging nie — hulle kies dit vir die gevoel van tuishoort. Ons bestuur en leierstruktuur werk saam om 'n omgewing te skep waar elke student waardevol voel.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <CTAButton href="/aansoek" variant="gold" large>Doen aansoek</CTAButton>
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
                fontSize: "1rem",
                padding: "0.85rem 1.75rem",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Praat met ons
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
