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

Copy `.env.example` to `.env.local`. `.env.local` stays untracked.

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
AUTH_SECRET=generate-a-random-string
DATABASE_URL=postgresql://...
```

`MI_SITE_URL` is the public origin on Vercel. Set it to `https://primordialt.com` for Production and the preview origin for Preview. Locally, `NEXT_PUBLIC_SITE_URL` is accepted.

Generate `MI_AUTH_SECRET` with `openssl rand -base64 32`. Better Auth uses it to sign session cookies. Do not reuse a password or commit the value. Locally, `AUTH_SECRET` is accepted.

For `MI_DATABASE_URL`, open the Neon project, choose Connect, and copy the pooled connection string. Locally, `DATABASE_URL` is accepted. Generate SQL with `npm run db:generate` when the Drizzle schema changes, review the files in `drizzle/`, then apply them with `npm run db:migrate`. That applies every pending migration, including the Internet service-file tables. Do not point the database URL at production unless you mean to migrate production.

The first administrator is not seeded. After the migration:

```bash
# PowerShell
$env:PORTAL_USER_PASSWORD = "a long random password"
$env:ALLOW_ADMIN_BOOTSTRAP = "1"
npm run portal:create-user -- --name "Ada Admin" --email "ada@primordialt.com" --role admin
Remove-Item Env:PORTAL_USER_PASSWORD
Remove-Item Env:ALLOW_ADMIN_BOOTSTRAP
```

That command is the only supported way to create an administrator. Staff can create customers from `/internet/admin` after signing in. Password reset by email is not available.

Paystack credentials are not required for this phase.

For Vercel, set `MI_SITE_URL`, `MI_AUTH_URL`, `MI_AUTH_SECRET`, and `MI_DATABASE_URL` in Project Settings -> Environment Variables. Locally, `NEXT_PUBLIC_SITE_URL`, `BETTER_AUTH_URL`, `AUTH_SECRET`, and `DATABASE_URL` are also accepted.

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
