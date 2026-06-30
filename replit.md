# De Goede Hoop Koshuis — Webwerf

'n Professionele, front-end-only statiese webwerf vir De Goede Hoop Koshuis, 'n Christelike Afrikaanse studentekoshuis in Hatfield, Pretoria.

## Run & Operate

- `pnpm --filter @workspace/de-goede-hoop run dev` — run the frontend dev server
- `pnpm --filter @workspace/de-goede-hoop run typecheck` — TypeScript check
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000, unused by this site)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18 + Vite + Wouter (SPA routing)
- Styling: Inline React styles + Tailwind utilities
- Fonts: Playfair Display + Inter (Google Fonts)
- Language: Fully Afrikaans
- No backend, no database, no API keys

## Where things live

- `artifacts/de-goede-hoop/` — the full static website
- `artifacts/de-goede-hoop/src/data/siteConfig.ts` — centralised contact config (email, WhatsApp, address, etc.)
- `artifacts/de-goede-hoop/src/pages/` — all 7 pages (Tuis, OorOns, Verblyf, Eerstejaars, Aansoek, Kontak, Popi)
- `artifacts/de-goede-hoop/src/components/` — reusable components (Navbar, Footer, WhatsAppFloat, etc.)
- `artifacts/de-goede-hoop/public/_redirects` — Cloudflare Pages SPA redirect rule
- `artifacts/de-goede-hoop/README.md` — deployment guide

## Architecture decisions

- Frontend-only static site — no Express, no backend, no database, no exposed API keys
- All contact links use `mailto:` and `wa.me/` — no form submission backend required
- Aansoek form uses `mailto:` fallback generating a prefilled e-mail via the user's local mail client
- Centralised `siteConfig.ts` ensures all contact details are updated in one place
- `public/_redirects` with `/* /index.html 200` handles all SPA routing on Cloudflare Pages

## Product

7-page Afrikaans website for De Goede Hoop Koshuis:
- **Tuis** — Hero, trust highlights, Waarom cards, Vir Ouers section, final CTA
- **Oor Ons** — Identity, values, koshuis life, leadership & community
- **Verblyf & Geriewe** — Facilities, location, Google Maps placeholder
- **Eerstejaars** — Welcome, expectations, process steps, parent info, PDF download
- **Aansoek** — Static application form with mailto fallback + POPI consent
- **Kontak Ons** — Contact cards, info blocks, Maps placeholder
- **POPI / Privaatheid** — Full POPI-compliant privacy policy

## Deployment path

```
Replit → GitHub → Cloudflare Pages → Cloudflare DNS → Afrihost custom domain
```

Cloudflare Pages settings:
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Place `public/de-goede-hoop-inligtingsbrief-2027.pdf` in the `public/` folder before going live — the Eerstejaars page links to it.
- Replace the Google Maps placeholder blocks in VerblyPage.tsx and KontakPage.tsx with a real iframe embed from maps.google.com.
- The `vite.config.ts` requires `PORT` and `BASE_PATH` env vars at runtime — this is injected by Replit workflows and Cloudflare Pages. Do not run `vite build` directly from bash without them.

## Pointers

- See `artifacts/de-goede-hoop/README.md` for full deployment instructions
- See `artifacts/de-goede-hoop/src/data/siteConfig.ts` for all centralised contact config
- See the `pnpm-workspace` skill for workspace structure details
