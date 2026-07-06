import { useState } from "react";
import { Info, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { whatsappLink, mailtoLink, siteConfig } from "@/data/siteConfig";

export default function AansoekPage() {
  const [form, setForm] = useState({
    studentNaam: "",
    selfoon: "",
    epos: "",
    ouerNaam: "",
    ouerSelfoon: "",
    skool: "",
    studiejaar: "",
    instelling: "",
    aansoekJaar: "",
    geslag: "",
    boodskap: "",
    popi: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.popi) {
      alert("Bevestig asseblief die POPI-toestemmingsverklaring voordat jy voortgaan.");
      return;
    }
    const subject = `Aansoek Navraag - De Goede Hoop`;
    const body = `Aansoek Navraag - De Goede Hoop Koshuis
======================================

Student Naam en Van: ${form.studentNaam}
Selfoon: ${form.selfoon}
E-posadres: ${form.epos}

Ouer / Voog Naam: ${form.ouerNaam}
Ouer / Voog Selfoon: ${form.ouerSelfoon}

Skool: ${form.skool}
Beoogde Studiejaar: ${form.studiejaar}
Beoogde Instelling: ${form.instelling}
Jaar waarvoor aansoek gedoen word: ${form.aansoekJaar}
Geslag: ${form.geslag}

Boodskap / Bykomende Inligting:
${form.boodskap}

POPI-toestemming: ${form.popi ? "Ja, ek stem in" : "Nee"}
======================================
Gestuur via degoedehoop.co.za`;

    window.location.href = mailtoLink(subject, body);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1.5px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "0.95rem",
    color: "#1a1a1a",
    backgroundColor: "#fff",
    outline: "none",
    fontFamily: "Inter, sans-serif",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#1a2744",
    marginBottom: "0.35rem",
  };

  const fieldStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "0.35rem" };

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
            Begin jou reis
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
            Doen Aansoek
          </h1>
          <p style={{ color: "rgba(250,247,242,0.82)", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Vul die aansoekblad hieronder in. Jou besonderhede word direk na ons bestuur gestuur.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section style={{ backgroundColor: "#faf7f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
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
            <Info size={19} style={{ color: "#2c3d7a", flexShrink: 0 }} aria-hidden="true" />
            <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.7 }}>
              Hierdie aansoekblad stuur jou besonderhede via jou e-poskliënt na{" "}
              <strong>{siteConfig.email}</strong>. Geen besonderhede word op 'n bediener gestoor nie.
              Vir onmiddellike aandag, stuur ook 'n WhatsApp na {siteConfig.whatsappDisplay}.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <fieldset style={{ border: "none", padding: 0, marginBottom: "2.5rem" }}>
              <legend style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2744", marginBottom: "1.5rem", width: "100%" }}>
                Studentebesonderhede
              </legend>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
                <div style={fieldStyle}>
                  <label htmlFor="studentNaam" style={labelStyle}>Naam en Van <span style={{ color: "#c0392b" }}>*</span></label>
                  <input id="studentNaam" name="studentNaam" type="text" required value={form.studentNaam} onChange={handleChange} style={inputStyle} placeholder="Jou naam en van" autoComplete="name" />
                </div>
                <div style={fieldStyle}>
                  <label htmlFor="selfoon" style={labelStyle}>Selfoonnommer <span style={{ color: "#c0392b" }}>*</span></label>
                  <input id="selfoon" name="selfoon" type="tel" required value={form.selfoon} onChange={handleChange} style={inputStyle} placeholder="083 000 0000" autoComplete="tel" />
                </div>
                <div style={fieldStyle}>
                  <label htmlFor="epos" style={labelStyle}>E-posadres <span style={{ color: "#c0392b" }}>*</span></label>
                  <input id="epos" name="epos" type="email" required value={form.epos} onChange={handleChange} style={inputStyle} placeholder="jou@epos.co.za" autoComplete="email" />
                </div>
                <div style={fieldStyle}>
                  <label htmlFor="geslag" style={labelStyle}>Geslag <span style={{ color: "#c0392b" }}>*</span></label>
                  <select id="geslag" name="geslag" required value={form.geslag} onChange={handleChange} style={inputStyle}>
                    <option value="">Kies...</option>
                    <option value="Manlik">Manlik</option>
                    <option value="Vroulik">Vroulik</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset style={{ border: "none", padding: 0, marginBottom: "2.5rem" }}>
              <legend style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2744", marginBottom: "1.5rem", width: "100%" }}>
                Ouer / Voog Besonderhede
              </legend>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
                <div style={fieldStyle}>
                  <label htmlFor="ouerNaam" style={labelStyle}>Ouer / Voog Naam <span style={{ color: "#c0392b" }}>*</span></label>
                  <input id="ouerNaam" name="ouerNaam" type="text" required value={form.ouerNaam} onChange={handleChange} style={inputStyle} placeholder="Naam van ouer of voog" />
                </div>
                <div style={fieldStyle}>
                  <label htmlFor="ouerSelfoon" style={labelStyle}>Ouer / Voog Selfoon <span style={{ color: "#c0392b" }}>*</span></label>
                  <input id="ouerSelfoon" name="ouerSelfoon" type="tel" required value={form.ouerSelfoon} onChange={handleChange} style={inputStyle} placeholder="083 000 0000" />
                </div>
              </div>
            </fieldset>

            <fieldset style={{ border: "none", padding: 0, marginBottom: "2.5rem" }}>
              <legend style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2744", marginBottom: "1.5rem", width: "100%" }}>
                Akademiese Besonderhede
              </legend>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
                <div style={fieldStyle}>
                  <label htmlFor="skool" style={labelStyle}>Skool</label>
                  <input id="skool" name="skool" type="text" value={form.skool} onChange={handleChange} style={inputStyle} placeholder="Naam van jou skool" />
                </div>
                <div style={fieldStyle}>
                  <label htmlFor="instelling" style={labelStyle}>Beoogde Instelling <span style={{ color: "#c0392b" }}>*</span></label>
                  <input id="instelling" name="instelling" type="text" required value={form.instelling} onChange={handleChange} style={inputStyle} placeholder="bv. Universiteit van Pretoria" />
                </div>
                <div style={fieldStyle}>
                  <label htmlFor="studiejaar" style={labelStyle}>Beoogde Studiejaar</label>
                  <input id="studiejaar" name="studiejaar" type="text" value={form.studiejaar} onChange={handleChange} style={inputStyle} placeholder="bv. Eerstejaar, BCom" />
                </div>
                <div style={fieldStyle}>
                  <label htmlFor="aansoekJaar" style={labelStyle}>Jaar waarvoor aansoek gedoen word <span style={{ color: "#c0392b" }}>*</span></label>
                  <select id="aansoekJaar" name="aansoekJaar" required value={form.aansoekJaar} onChange={handleChange} style={inputStyle}>
                    <option value="">Kies jaar...</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset style={{ border: "none", padding: 0, marginBottom: "2rem" }}>
              <legend style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 700, color: "#1a2744", marginBottom: "1.5rem", width: "100%" }}>
                Boodskap
              </legend>
              <div style={fieldStyle}>
                <label htmlFor="boodskap" style={labelStyle}>Bykomende inligting of vrae</label>
                <textarea
                  id="boodskap"
                  name="boodskap"
                  rows={5}
                  value={form.boodskap}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                  placeholder="Enige bykomende inligting, spesiale behoeftes of vrae..."
                />
              </div>
            </fieldset>

            {/* POPI consent */}
            <div
              style={{
                backgroundColor: "#f0ebe0",
                borderRadius: "8px",
                padding: "1.25rem",
                marginBottom: "1.75rem",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  name="popi"
                  checked={form.popi}
                  onChange={handleChange}
                  style={{ width: "18px", height: "18px", marginTop: "2px", flexShrink: 0, accentColor: "#1a2744" }}
                  required
                />
                <span style={{ fontSize: "0.88rem", color: "#333", lineHeight: 1.7 }}>
                  Ek stem in dat De Goede Hoop my persoonlike inligting mag gebruik om my aansoek of navraag te hanteer, in ooreenstemming met die{" "}
                  <a href="/popi" style={{ color: "#1a2744", fontWeight: 600, textDecoration: "underline" }}>POPI-privaatheidsbeleid</a>.{" "}
                  <strong>Deur die vorm in te dien, stem jy in dat De Goede Hoop jou inligting mag gebruik om jou aansoek of navraag te hanteer.</strong>
                </span>
              </label>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#1a2744",
                color: "#faf7f2",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "1rem",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.02em",
                marginBottom: "1rem",
              }}
            >
              Stuur aansoek
            </button>
            <p style={{ color: "#777", fontSize: "0.82rem", textAlign: "center" }}>
              Jou standaard e-poskliënt sal oopmaak met 'n voorafgevulde e-pos. Stuur dit na bestuur.
            </p>
          </form>

          {/* Backup buttons */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.5rem",
              backgroundColor: "#f0ebe0",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#555", fontSize: "0.9rem", marginBottom: "1.25rem", fontWeight: 500 }}>
              Alternatief — kontak ons direk:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", justifyContent: "center" }}>
              <a
                href={whatsappLink("Goeiedag, ek wil graag aansoek doen by De Goede Hoop Koshuis.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  backgroundColor: "#25d366",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp bestuur
              </a>
              <a
                href={mailtoLink("Aansoek Navraag - De Goede Hoop")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  backgroundColor: "#1a2744",
                  color: "#faf7f2",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                <Mail size={16} aria-hidden="true" /> Stuur e-pos na {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
