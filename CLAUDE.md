# 3D Structures — Project Guide

## Client

**3D Structures** is an Australian steel detailing services company. This site is a purpose-built landing page for their business, replacing a bistro/restaurant template that was used as the starting scaffold.

All content, copy, imagery, and branding must reflect the steel detailing / structural engineering industry and be appropriate for an Australian B2B audience.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5 (static site generation) |
| UI Library | React 19 (interactive islands only) |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui (new-york style) + Radix UI primitives |
| Icons | Lucide React |
| Language | TypeScript (strict mode) |
| Carousel | Embla Carousel |
| Package Manager | pnpm |

## Commands

```bash
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm lint       # Lint with ESLint
pnpm format     # Format with Prettier
pnpm check-types # TypeScript type checking
```

## Project Structure

```
src/
├── assets/
│   ├── data/          # All site content / copy lives here as TS/TSX files
│   └── svg/           # SVG icon components
├── components/
│   ├── blocks/        # Full-width page sections (hero, about, contact, etc.)
│   ├── layout/        # Header, footer, theme toggle
│   └── ui/            # Reusable shadcn/ui primitives
├── layouts/
│   ├── Layout.astro   # Main layout (wraps header + footer)
│   ├── BlankLayout.astro
│   └── HeadSeo.astro  # SEO <head> component
├── pages/
│   ├── index.astro    # Homepage — assembles all section blocks
│   └── 404.astro
├── styles/
│   └── global.css     # Tailwind directives + CSS custom properties (color tokens)
├── lib/utils.ts       # cn() class-merge utility
├── utils/seo.ts       # SEO helpers
└── consts.ts          # Site-wide constants (title, description, links)
```

## Architecture Patterns

- **Content is data-driven** — section copy, stats, and links live in `src/assets/data/` files, not hardcoded in components.
- **Astro islands** — sections are static `.astro` by default; use `client:load` only for genuinely interactive components (carousels, forms).
- **Path alias** — use `@/` instead of relative imports (maps to `src/`).
- **Color tokens** — all colors are defined as CSS custom properties in `global.css` using OKLch. Edit those tokens to retheme the site; do not hardcode color values in components.
- **shadcn/ui components** live in `src/components/ui/` and should not be edited directly — extend them via wrapper components.

## Design System

- **Fonts:** Outfit (sans), Merriweather (serif), Kaushan Script (display/accent)
- **Border radius:** 0rem default (square, industrial feel — appropriate for steel industry)
- **Dark mode:** System-aware with localStorage persistence; fully supported
- **Color palette:** Defined in `src/styles/global.css` — update primary/secondary/accent tokens to match the 3D Structures brand

## Content Guidelines

- All copy targets Australian English spelling (e.g. "colour", "labour", "organisation")
- The business serves B2B clients: structural engineers, builders, fabricators, and architects
- Key services to reflect: 3D modelling, steel detailing, shop drawings, BIM, connection design
- Tone: professional, technical confidence, reliability — not casual or playful
