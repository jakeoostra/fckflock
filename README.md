# F#CK FLOCK

A live, public-interest dossier on the rebellion against America's largest license-plate dragnet.

Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind v4**, and **TypeScript**. Server-components-first — client components are used only where actually needed (nav active-state, image fallback).

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start    # production
```

---

## Drop in your camera reference photos

The Dossier page (`/dossier`) shows two surveillance-style frames that load from `/public/images/`. To use your photos:

```
public/
└── images/
    ├── flock_cam1.webp     ← your first reference photo
    └── flock_cam2.jpeg     ← your second reference photo
```

If files aren't present, each frame gracefully falls back to a "drop your reference photo here" placeholder telling you the expected path.

---

## App Router architecture

```
fuckflock/
├── app/                          ← routes live here (App Router)
│   ├── layout.tsx                ← root layout: <Nav /> + <main> + <Footer />
│   ├── page.tsx                  ← "/" — home / hero / teasers (server)
│   ├── globals.css               ← design tokens, glass, scanlines, grain
│   ├── dossier/page.tsx          ← "/dossier" (server — uses a client ReferenceStrip)
│   ├── legal/page.tsx            ← "/legal" (server)
│   ├── resistance/page.tsx       ← "/resistance" (server)
│   └── act/page.tsx              ← "/act" (server)
│
├── src/
│   ├── components/
│   │   ├── Nav.tsx               ← CLIENT — uses usePathname for active state
│   │   ├── Marquee.tsx           ← server
│   │   ├── Footer.tsx            ← server
│   │   ├── CameraSVG.tsx         ← server — stylized Flock-class illustration
│   │   ├── TakeDownButton.tsx    ← server — two variants: floating / inline
│   │   ├── ReferenceStrip.tsx    ← CLIENT — img onError fallback with useState
│   │   └── UI.tsx                ← server — SectionHeader, EvidenceCard,
│   │                                StatTile, SearchLog, PlateBadge, Tag, Redacted
│   └── data/
│       └── content.ts            ← single source of truth for all report content
│
├── public/images/                ← drop your camera photos here
├── package.json                  ← no react-router-dom, pure next/link + next/navigation
├── postcss.config.js             ← Tailwind v4 via @tailwindcss/postcss
├── next.config.js
└── tsconfig.json                 ← @/* alias maps to ./src/*
```

### Routing primitives used

| Old (React Router)          | New (App Router)              |
|-----------------------------|-------------------------------|
| `react-router-dom` `<Link>` | `next/link` `<Link>`          |
| `useLocation()` / `NavLink` | `usePathname()` from `next/navigation` |
| `<BrowserRouter>` + `<Routes>` | File-system routing under `app/` |
| Single SPA entry with `ssr: false` | Per-route streamable pages |

### Client-vs-server split

Only **two files** carry `"use client"`:

- `src/components/Nav.tsx` — needs `usePathname()` to highlight the active route.
- `src/components/ReferenceStrip.tsx` — uses `useState` to track image-load failures on the Dossier reference photos.

Everything else — pages, UI primitives, icons, the marquee, the footer, the Camera SVG, the Take Down button — is a server component. That gives you faster first-paint, smaller client bundles, and room to add server data fetching per route later without refactoring.

---

## The Take Down Madison, SD button

The hero's bold CTA lives in `src/components/TakeDownButton.tsx` with two variants:

- **`floating`** (desktop, `lg+`): compact two-line stack — `TAKE DOWN` / `Madison, SD` — positioned absolutely in the negative space between the hero's text column and the camera SVG. Vertically centered in the hero, horizontally centered on the column boundary via `left-[59%] -translate-x-1/2`.
- **`inline`** (mobile/tablet, below `lg`): single-line full-width CTA that drops into the flow below the primary hero CTAs.

Shared aesthetic treatment on both variants:

- Pulsing "TARGET ACQUIRED" indicator with dots on either side
- Four corner brackets (bone → amber on hover)
- Layered blood-red glow: inset ring + drop shadow + blurred halo behind
- Hazard-stripe sliver down the left edge
- Scanline texture overlaying the button face
- Coordinate caption (`44.0061° N · 97.1139° W`) below
- Hover: bone fill, lift 2px, brackets glow amber, chevron slides right

---

## Design system

| Token | Value | Role |
|---|---|---|
| `--color-void` | `#07070a` | Page background |
| `--color-pitch` / `coal` / `ash` / `fog` | Surfaces | Glass interiors |
| `--color-bone` / `paper` / `mute` / `dim` | Type | Foreground hierarchy |
| `--color-blood` | `#ff2b1c` | Primary accent — alerts, CTAs, "hot" evidence |
| `--color-amber` | `#ffb800` | Secondary — surveillance, data, search-logs |
| `--color-plate` | `#f5d24a` | License-plate yellow |
| `--color-ice` | `#6f8f9a` | Cold institutional accents |

**Type stack:** Bebas Neue (display) · Instrument Serif (editorial pulls) · IBM Plex Sans (body) · IBM Plex Mono (data, codes, log lines).

**Visual motifs:** scanlines, SVG grain overlay, glassmorphic surfaces (`.glass`, `.glass-hot`, `.glass-amber`), hazard stripes, redacted bars, pulse-dot status indicators, license-plate stat badges, crosshair reticles.

---

## Adding content

Every fact rendered by the site lives in `src/data/content.ts` as typed exports: `HEADLINE_STATS`, `REVELATIONS`, `LAWSUITS`, `STATUTES`, `CITIES_TERMINATED`, `COALITION`, `ACTION_STEPS`. Update those arrays and the corresponding page rerenders — no component code to touch.

---

## License & disclaimer

Public-interest archive. Not affiliated with Flock Safety, Inc. The "#" is a hash.
