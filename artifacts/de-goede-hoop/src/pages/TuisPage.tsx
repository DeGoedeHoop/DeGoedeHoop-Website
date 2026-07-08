import { Link } from "wouter";
import { HeartHandshake, MapPin, Church, Scale } from "lucide-react";
import { whatsappLink, mailtoLink, siteConfig } from "@/data/siteConfig";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import CTAButton from "@/components/CTAButton";
import studenteleweCollage from "@/assets/studentelewe-collage.png";

const trustHighlights = [
  "Christelike waardes",
  "Afrikaans en gemeenskapsgedrewe",
  "Mans- en damesvleuel op een perseel",
  "Naby Tuks se sportgronde en Hatfield-kampus",
  "Veilige, gestruktureerde studentewoning",
];

const waaromCards = [
  {
    icon: <HeartHandshake size={22} />,
    title: "Gemeenskap",
    description:
      "By De Goede Hoop word jy deel van 'n hegte studentegemeenskap waar vriende lewenslange metgeselle word. Koshuislewe gaan oor meer as net 'n kamer — dit gaan oor mense.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Waar is de goede hoop?",
    description:
      "De Goede Hoop is geleë in Burnettstraat, Hatfield in Pretoria, sowat 200 m van Tuks se sportgronde en sowat 1 km van die Hatfield-kampus.",
  },
  {
    icon: <Church size={22} />,
    title: "Waardes",
    description:
      "Ons koshuis is gegrond in Christelike beginsels en Afrikaanse kultuur. Hier word studente aangemoedig om met integriteit en deernis te leef.",
  },
  {
    icon: <Scale size={22} />,
    title: "Balans",
    description:
      "Akademie, sosiale lewe en persoonlike groei gaan hand aan hand. De Goede Hoop bied 'n gestruktureerde omgewing wat studente help om alle fasette van studentwees te balanseer.",
  },
];

export default function TuisPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a2744 0%, #111a30 60%, #7a1f35 100%)",
          color: "#faf7f2",
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          <p
            style={{
              color: "#3d52a0",
              fontWeight: 600,
              fontSize: "0.82rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Studenteverblyf · Hatfield, Pretoria
          </p>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2.2rem, 6vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              color: "#faf7f2",
            }}
          >
            Jou huis weg van die huis af<br />
            <span style={{ color: "#3d52a0" }}>De Goede Hoop</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              color: "rgba(250,247,242,0.85)",
              lineHeight: 1.75,
              maxWidth: "640px",
              margin: "0 auto 2rem",
            }}
          >
            De Goede Hoop-koshuis bied ’n tuiste vir dinamiese studente met Christelike waardes en ’n
            passie vir Afrikaans; ’n tuiste waar jy as jongmens in gesonde studentetradisies kan deel
            en jou studentwees met selfvertroue in Afrikaans kan uitleef. Die koshuis het sowel ’n
            mans- as damesvleuel – mans en dames kan dus saam op een perseel, maar afsonderlik in
            verskillende vleuels woon.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.85rem",
              justifyContent: "center",
            }}
          >
            <CTAButton href="/aansoek" variant="gold" large>
              Doen aansoek
            </CTAButton>
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Kontak Bestuur
            </a>
            <CTAButton href="/kontak" variant="outline" large>
              <span style={{ color: "#faf7f2" }}>Kontak ons</span>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Trust highlights */}
      <section style={{ backgroundColor: "#f0ebe0", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem 2rem",
              justifyContent: "center",
              listStyle: "none",
            }}
          >
            {trustHighlights.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#1a2744",
                }}
              >
                <span style={{ color: "#3d52a0", fontWeight: 700, fontSize: "1rem" }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Koshuisgemeenskap */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="Koshuisgemeenskap"
            title="Meer as 'n koshuis — 'n familie"
            subtitle="Sportbyeenkomste, sosiale aksies, koshuis konserte en lewenslange herinneringe — dit is maar 'n klein deel van wat jy sal beleef by De Goede Hoop!"
            center
          />
          <div
            style={{
              marginTop: "2.5rem",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 20px 45px -15px rgba(26,39,68,0.35)",
              border: "1px solid rgba(26,39,68,0.08)",
            }}
          >
            <img
              src={studenteleweCollage}
              alt="Studente van De Goede Hoop by sport, funksies en koshuisgeleenthede saam"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Waarom De Goede Hoop */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeading
            eyebrow="Hoekom ons?"
            title="Waarom De Goede Hoop?"
            subtitle="Meer as net 'n plek om te slaap — 'n omgewing waar jy floreer."
            center
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
              marginTop: "1rem",
            }}
          >
            {waaromCards.map((card, i) => (
              <InfoCard key={i} icon={card.icon} title={card.title} description={card.description} accent={i % 2 === 0} />
            ))}
          </div>
          <div
            style={{
              maxWidth: "820px",
              margin: "2.5rem auto 0",
              backgroundColor: "rgba(61,82,160,0.06)",
              border: "1.5px solid rgba(61,82,160,0.25)",
              borderLeft: "4px solid #3d52a0",
              borderRadius: "10px",
              padding: "1.75rem 2rem",
            }}
          >
            <p style={{ color: "#1a2744", fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.8, textAlign: "center" }}>
              Hoewel De Goede Hoop ideaal geleë is naby die Universiteit van Pretoria en Tuks se sportgronde, verwelkom ons studente van alle tersiêre instellings in Pretoria. Ons fokus is nie bloot op waar jy studeer nie, maar op wie jy is en die waardes waarmee jy jou studentetyd wil aanpak. Studente wat met De Goede Hoop se waardes identifiseer en op soek is na ’n vol, gebalanseerde studentelewe waar akademie, vriendskap, sport, kultuur en persoonlike groei hand aan hand gaan, is welkom om deel van ons koshuisgemeenskap te word.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p
            style={{
              color: "#3d52a0",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Reeds oortuig dat DGH die plek is vir jou?
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.4rem)",
              fontWeight: 700,
              color: "#1a2744",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Waar bly jy as jy nie by jou ma bly nie?
          </h2>
          <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Bly in De Goede Hoop-koshuis.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <CTAButton href="/aansoek" variant="primary" large>
              Doen aansoek
            </CTAButton>
            <a
              href={whatsappLink("Goeiedag, ek wil graag meer weet oor verblyf by De Goede Hoop.")}
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
          </div>
        </div>
      </section>
    </>
  );
}
