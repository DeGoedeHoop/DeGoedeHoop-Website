import { Scale, Landmark, ClipboardList, Target, Lock, Ban, Mail, CheckCircle2, Phone, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { mailtoLink, siteConfig } from "@/data/siteConfig";

export default function PopiPage() {
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
            Jou privaatheid is belangrik
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
            POPI &amp; Privaatheidsbeleid
          </h1>
          <p style={{ color: "rgba(250,247,242,0.82)", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Ons verbind ons tot die verantwoordelike hantering van jou persoonlike inligting.
          </p>
        </div>
      </section>

      {/* Policy content */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: "#fff8e8",
              border: "1px solid #6b7ec7",
              borderRadius: "8px",
              padding: "1.25rem",
              marginBottom: "3rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
          >
            <Scale size={19} style={{ color: "#2c3d7a", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Hierdie beleid is opgestel in ooreenstemming met die <strong>Protection of Personal Information Act (POPIA)</strong> van Suid-Afrika.
              Ons verbind ons tot die beskerming en verantwoordelike gebruik van jou persoonlike inligting.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {[
              {
                icon: <Landmark size={20} />,
                title: "1. Wie ons is",
                content: `${siteConfig.organisationName} ('ons', 'die koshuis') is die verantwoordelike party wat jou persoonlike inligting verwerk. Ons is geleë te ${siteConfig.address}. Kontak ons by ${siteConfig.email} vir enige privaatheidsversoeke.`,
              },
              {
                icon: <ClipboardList size={20} />,
                title: "2. Watter inligting ons insamel",
                content:
                  "Ons versamel persoonlike inligting wat jy vrywillig aan ons verskaf via ons aansoekblad, e-pos, WhatsApp of enige ander kommunikasiekanaal. Dit sluit in: naam en van, kontakbesonderhede (e-pos, selfoon), ouer/voog besonderhede, skool- en akademiese inligting, en enige bykomende inligting wat jy in jou boodskap verskaf.",
              },
              {
                icon: <Target size={20} />,
                title: "3. Hoekom ons jou inligting gebruik",
                content:
                  "Inligting wat deur ons webwerf-vorms ingedien word, sal slegs gebruik word om jou aansoek of navraag te hanteer, met jou te kommunikeer oor jou aansoek of koshuis-verwante sake, en om aan jou versoeke te voldoen. Jou inligting word nie vir enige ander doeleindes gebruik nie.",
              },
              {
                icon: <Lock size={20} />,
                title: "4. Hoe ons jou inligting beskerm",
                content:
                  "Ons neem redelike stappe om jou persoonlike inligting te beskerm teen ongemagtigde toegang, gebruik, wysiging of bekendmaking. Inligting word slegs deur gemagtigde personeel verwerk en word nie langer gehou as wat nodig is vir die doel waarvoor dit ingesamel is nie.",
              },
              {
                icon: <Ban size={20} />,
                title: "5. Derdeparty-deling",
                content:
                  "Ons verkoop, verhandel of deel nie jou persoonlike inligting met derde partye nie, behalwe wanneer dit wetlik vereis word of wanneer dit noodsaaklik is om jou aansoek te verwerk (bv. indien jy self vereis dat ons jou inligting na 'n ander party stuur).",
              },
              {
                icon: <Mail size={20} />,
                title: "6. Kommunikasie",
                content:
                  "Deur jou inligting aan ons te verskaf, stem jy in dat ons jou mag kontak met betrekking tot jou aansoek of navraag. Ons sal jou nie stoor op enige nuusbrief-lys of vir bemarkingsdoeleindes kontak sonder jou uitdruklike toestemming nie.",
              },
              {
                icon: <CheckCircle2 size={20} />,
                title: "7. Jou regte ingevolge POPIA",
                content:
                  "Jy het die reg om toegang tot jou persoonlike inligting te versoek wat ons hou, om korreksie van enige onakkurate inligting te versoek, om die verwydering van jou persoonlike inligting te versoek (onderhewig aan wetlike vereistes), om te kla by die Inligtingsregulateur indien jy van mening is dat jou regte geskend is.",
              },
              {
                icon: <Phone size={20} />,
                title: "8. Kontak ons oor privaatheid",
                content: `Vir enige versoeke, vrae of klagtes rakende die hantering van jou persoonlike inligting, kontak ons asseblief by: ${siteConfig.email}. Ons verbind ons om alle privaatheidsversoeke binne 'n redelike tydperk te hanteer.`,
              },
              {
                icon: <Calendar size={20} />,
                title: "9. Wysiging van hierdie beleid",
                content:
                  "Hierdie beleid kan van tyd tot tyd opdateer word. Enige wesentlike veranderinge sal op ons webwerf aangekondig word. Ons moedig jou aan om hierdie bladsy gereeld te besoek om op hoogte te bly van enige wysigings.",
              },
            ].map((section) => (
              <div key={section.title}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
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
                    {section.icon}
                  </div>
                  <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2744" }}>{section.title}</h2>
                </div>
                <p style={{ color: "#444", fontSize: "0.97rem", lineHeight: 1.8, paddingLeft: "2.85rem" }}>{section.content}</p>
              </div>
            ))}
          </div>

          {/* Contact for privacy */}
          <div
            style={{
              marginTop: "3rem",
              backgroundColor: "#f0ebe0",
              borderRadius: "10px",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 700, color: "#1a2744", marginBottom: "0.75rem" }}>
              Het jy 'n privaatheidsversoek?
            </h3>
            <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Stuur jou versoek vir korreksie of verwydering van persoonlike inligting na ons bestuur.
            </p>
            <a
              href={mailtoLink("POPI Privaatheidsversoek - De Goede Hoop", `Geagte Bestuur,\n\nEk versoek die volgende ingevolge die POPIA:\n\n[Beskryf jou versoek hier]\n\nMy kontakbesonderhede:\nNaam:\nE-pos:\nSelfoon:\n\nVriendelike groete`)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#1a2744",
                color: "#faf7f2",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "0.8rem 1.5rem",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              <Mail size={17} aria-hidden="true" /> Stuur privaatheidsversoek
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
