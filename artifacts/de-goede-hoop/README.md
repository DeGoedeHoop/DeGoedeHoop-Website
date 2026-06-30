# De Goede Hoop Koshuis — Webwerf

Professionele, front-end-only statiese webwerf vir De Goede Hoop Koshuis, 'n Christelike Afrikaanse studentekoshuis in Hatfield, Pretoria.

---

## Tegniese Stapel

- **Raamwerk:** React 18 + Vite
- **Routing:** Wouter (kliëntsy SPA-roetes)
- **Styl:** Inline React-style + Tailwind CSS (slegs vir nutsdienste)
- **Ikone:** SVG (ingebou — geen eksterne ikoon-biblioteek)
- **Lettertipes:** Playfair Display + Inter (Google Fonts)
- **Taal:** Volledig Afrikaans
- **Ontplooi na:** Cloudflare Pages via GitHub

---

## Plaaslike Ontwikkeling

```bash
# Installeer afhanklikes
npm install

# Begin ontwikkelsbediener
npm run dev

# Bou vir produksie
npm run build

# Voorskou produksiebou
npm run preview
```

---

## Cloudflare Pages-instellings

| Instelling               | Waarde        |
|--------------------------|---------------|
| Framework preset         | Vite          |
| Build command            | `npm run build` |
| Build output directory   | `dist`        |
| Production branch        | `main`        |

---

## Ontplooi-pad

```
Replit → GitHub → Cloudflare Pages → Cloudflare DNS → Afrihost custom domain
```

1. **Replit:** Ontwikkel en toets hier.
2. **GitHub:** Stoot kode na jou GitHub-repo (push na `main`-tak).
3. **Cloudflare Pages:** Koppel GitHub-repo, stel bou-instellings in (sien tabel hierbo).
4. **Cloudflare DNS:** Stel DNS-rekords in vir jou domein.
5. **Afrihost:** Koppel jou custom domein (`degoedehoop.co.za`) via Cloudflare DNS.

---

## SPA-redigering (Cloudflare Pages)

Die lêer `public/_redirects` bevat:

```
/* /index.html 200
```

Dit verseker dat alle SPA-roetes (soos `/oor-ons`, `/aansoek`) korrek werk op Cloudflare Pages.

---

## Kontakintegrasie

Alle kontakintegrasie is **frontend-only** — geen bediener of API-sleutels word gebruik nie:

- **WhatsApp:** Gebruik `wa.me/27662645433` skakels wat in 'n nuwe oortjie oopmaak.
- **E-pos:** Gebruik `mailto:bestuur@degoedehoop.co.za` skakels.
- **Aansoekblad:** Genereer 'n voorafgevulde `mailto`-skakel wat die gebruiker se standaard e-poskliënt oopmaak.

Alle kontakbesonderhede is gesentraliseer in `src/data/siteConfig.js`.

---

## PDF-lêers

Die Eerstejaars-bladsy het 'n knoppie om die inligtingsbrief af te laai:

```
public/de-goede-hoop-inligtingsbrief-2027.pdf
```

**Plaas hierdie PDF in die `public/`-vouer voor produksie-ontplooiing.**

---

## Bladsystruktuur

| Roete         | Bladsy                  |
|---------------|-------------------------|
| `/`           | Tuis                    |
| `/oor-ons`    | Oor Ons                 |
| `/verblyf`    | Verblyf & Geriewe       |
| `/eerstejaars`| Eerstejaars             |
| `/aansoek`    | Aansoek                 |
| `/kontak`     | Kontak Ons              |
| `/popi`       | POPI / Privaatheid      |

---

## Nota oor Google Maps

Die Verblyf- en Kontak-bladsye het Google Maps-plaasvervanger-blokke. Om 'n regte kaart in te sluit:

1. Gaan na [maps.google.com](https://maps.google.com)
2. Soek "Burnettstraat, Hatfield, Pretoria"
3. Klik **Deel** → **Integreer 'n kaart** → Kopieer die iframe-kode
4. Vervang die plaasvervanger-blok in die betrokke bladsy-lêer

---

## Lisensiëring

© De Goede Hoop Koshuis. Alle regte voorbehou.
