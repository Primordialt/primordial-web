# Primordial Technologies Limited

Modern Next.js 15 corporate website with TypeScript, Tailwind CSS v4, Shadcn UI, Framer Motion, and next-themes.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Shadcn UI (New York style)
- Framer Motion
- Lucide React
- next-themes (light/dark/system)
- clsx + tailwind-merge

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set your production URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Project structure

```text
app/                 # App Router routes, metadata, SEO files
components/
  layout/            # Header, footer, shell, containers
  motion/            # Reusable animation primitives
  providers/         # Theme and motion providers
  sections/          # Homepage sections
  seo/               # Structured data
  theme/             # Theme toggle
  ui/                # Shadcn UI components
hooks/               # Client hooks
lib/                 # Config, fonts, metadata, utilities
public/              # Static assets
```

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — lint codebase

## Brand

- Pink: `#ed1d7e`
- Green: `#0c8140`
