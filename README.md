# F#CK FLOCK

A live, public-interest dossier on the rebellion against America's largest license-plate dragnet.

Built with **Next.js 15**, **React 19**, **React Router 7**, **Tailwind v4**, and **TypeScript**.

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

## Drop in your own camera reference photos

The Dossier page (`/dossier`) shows two surveillance-style frames that load from `/public/images/`. To use the photos you uploaded:

```
public/
└── images/
    ├── flock_cam1.webp     ← your first reference photo
    └── flock_cam2.jpeg     ← your second reference photo
```

If the files aren't present, the frames gracefully fall back to a "drop your reference photo here" placeholder — nothing breaks.

---

## Structure

```
fuckflock/
├── app/
│   ├── layout.tsx          ← Root layout, fonts, metadata
│   ├── page.tsx            ← Mounts ClientApp (SSR-disabled for React Router)
│   ├── ClientApp.tsx       ← BrowserRouter + Routes
│   └── globals.css         ← Design tokens, glassmorphism, scanlines, grain
├── src/
│   ├── components/
│   │   ├── Layout.tsx      ← Nav, status bar, footer
│   │   ├── Marquee.tsx     ← Top scrolling ticker
│   │   ├── CameraSVG.tsx   ← Stylized illustration of a Flock-class camera
│   │   └── UI.tsx          ← SectionHeader, EvidenceCard, StatTile, SearchLog,
│   │                          PlateBadge, Tag, Redacted
│   ├── pages/
│   │   ├── Home.tsx        ← Hero, stat strip, infamous query, teasers
│   │   ├── Dossier.tsx     ← 8 evidence cards + reference photos
│   │   ├── Legal.tsx       ← Lawsuits + state statutes
│   │   ├── Resistance.tsx  ← Cancelled-cities kill list + coalition wall
│   │   └── Act.tsx         ← Six action steps + resources + final CTA
│   └── data/
│       └── content.ts      ← All factual content from the report (single source of truth)
├── public/images/          ← Drop your camera photos here
├── package.json
├── tailwind.config (none — v4 uses @theme in globals.css)
├── postcss.config.js
├── next.config.js
└── tsconfig.json
```

---

## Design system

| Token | Value | Use |
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

## Content & sources

Every fact in `src/data/content.ts` is drawn from public records, court filings, and reporting cited in the original Flock Safety Camera Opposition Report. Primary outlets: 404 Media, EFF, ACLU affiliates, the University of Washington Center for Human Rights, the Institute for Justice, VCIJ at WHRO, Forbes, NPR, NBC News, Stateline, and HaveIBeenFlocked.com.

To update or add a revelation, edit `src/data/content.ts` — the pages render from those exports, so no component code needs to change.

---

## License & disclaimer

Public-interest archive. Not affiliated with Flock Safety, Inc. The "#" is a hash.
