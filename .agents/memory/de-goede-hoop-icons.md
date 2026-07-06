---
name: De Goede Hoop icon style
description: Convention used for card/section icons on the De Goede Hoop site — read before adding new cards or icons
---

Emoji were removed site-wide (looked "cheap") and replaced with `lucide-react` line icons.

**Convention:**
- Card/section icons: rendered inside a rounded-square badge (42-48px), background navy `#1a2744` or royal blue `#3d52a0` (matches the accent used elsewhere on that card), icon color `#faf7f2`, icon size 20-22px.
- Inline/button icons (info boxes, mailto/download links, small map labels): rendered directly at 15-19px with `aria-hidden="true"`, no badge, using flex + gap on the parent.
- `InfoCard`'s `icon` prop is `ReactNode`, not `string` — pass a lucide component, not an emoji string.

**Why:** user explicitly flagged emoji (crown/pin/cross/scales) as making the site look unprofessional; wanted "fun but professional" line icons instead.

**How to apply:** any new card, checklist item, or info box added to this site should follow the badge/inline pattern above rather than reintroducing emoji.
