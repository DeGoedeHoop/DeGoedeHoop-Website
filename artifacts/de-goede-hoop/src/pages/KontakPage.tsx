import { whatsappLink, mailtoLink, siteConfig } from "@/data/siteConfig";

export default function KontakPage() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a2744 0%, #7a1f35 80%)",
          padding: "4rem 1.5rem 3.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#3d52a0", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Ons is hier vir jou
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
            Kontak Ons
          </h1>
          <p style={{ color: "rgba(250,247,242,0.82)", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Het jy 'n vraag? Kontak ons via WhatsApp, e-pos of besoek ons in Hatfield.
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
            Ons verstaan dat die keuse van studenteverblyf ’n belangrike besluit vir beide studente en ouers is. Studente én ouers is daarom welkom om ons te kontak met enige navrae oor De Goede Hoop, ons verblyfopsies, geriewe, huurkoste, beskikbaarheid of die aansoekproses. Ons bestuurspan help graag met die nodige inligting om julle vrae te beantwoord en meer duidelikheid te gee oor wat studente by De Goede Hoop kan verwag.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", marginBottom: "4rem" }}>
            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "#1a2744", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3d52a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2744" }}>Stuur 'n e-pos</h2>
              <a
                href={mailtoLink()}
                style={{ color: "#1a2744", fontWeight: 600, fontSize: "1rem", textDecoration: "none", borderBottom: "2px solid #3d52a0", paddingBottom: "1px", display: "inline-block" }}
              >
                {siteConfig.email}
              </a>
              <p style={{ color: "#555", fontSize: "0.88rem" }}>Neem asseblief kennis dat ons sal poog om jou navrae binne die volgende 48 uur te hanteer.</p>
            </div>

            {/* WhatsApp */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2744" }}>WhatsApp</h2>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1a2744", fontWeight: 600, fontSize: "1rem", textDecoration: "none", borderBottom: "2px solid #25d366", paddingBottom: "1px", display: "inline-block" }}
              >
                {siteConfig.whatsappDisplay}
              </a>
              <p style={{ color: "#555", fontSize: "0.88rem" }}>Kantoorure: Maandae tot Donderdae 08:00–16:30, Vrydae 08:00–15:00.</p>
            </div>

            {/* Address */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "#7a1f35", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2744" }}>Adres</h2>
              <p style={{ color: "#1a2744", fontWeight: 600, fontSize: "1rem" }}>{siteConfig.address}</p>
              <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.6 }}>{siteConfig.locationDescription}.</p>
            </div>
          </div>

          {/* Google Maps embed */}
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid rgba(61,82,160,0.2)",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=De+Goede+Hoop+Koshuis,-25.7504754,28.2417351&z=17&output=embed"
              width="100%"
              height="360"
              style={{ display: "block", border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps kaart — Burnettstraat, Hatfield, Pretoria"
            />
          </div>
        </div>
      </section>
    </>
  );
}
