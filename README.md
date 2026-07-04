# Atharv Gaur — Portfolio

Personal portfolio built with [Starfolio](https://github.com/webrating/starfolio) (Astro + React + Tailwind).

## Local development

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Open http://localhost:4321/atharv-portfolio/

## Deploy

### GitHub Pages (recommended)

1. Create a repo named `atharv-portfolio` (or update `PUBLIC_BASE_PATH` in `.env` and `src/data/config.ts`)
2. Push this folder to `main`
3. Enable **Settings → Pages → Source: GitHub Actions**
4. Site live at `https://atharv-16.github.io/atharv-portfolio/`

### Vercel / Netlify / Cloudflare Pages

1. Import the repo
2. Build command: `pnpm build`
3. Output directory: `dist`
4. Set environment variable: `PUBLIC_BASE_PATH=/`

Update `src/data/config.ts` → `site.url` to your custom domain.

## Visitor tracking

Use **one** of these (privacy-friendly, no cookie banner needed for basic stats):

### Option A — Plausible (easiest)

1. Sign up at [plausible.io](https://plausible.io) (free trial, then ~$9/mo)
2. Add your domain (e.g. `atharv-16.github.io` or custom domain)
3. Set in GitHub repo **Settings → Secrets and variables → Actions → Variables**:
   - `PUBLIC_PLAUSIBLE_DOMAIN` = your domain
4. Or add to local `.env`: `PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com`

### Option B — Umami (free tier available)

1. Sign up at [cloud.umami.is](https://cloud.umami.is) or self-host
2. Create a website, copy the **Website ID**
3. Set `PUBLIC_UMAMI_WEBSITE_ID` in repo variables or `.env`

### Option C — Vercel Analytics

If deploying on Vercel, enable Analytics in the Vercel dashboard (no code changes needed).

## Customize

| File | What to edit |
| --- | --- |
| `src/data/resume.tsx` | Bio, work, projects, skills, contact |
| `src/data/config.ts` | Site URL, theme colors |
| `public/me.png` | Profile photo |

## Mobile navigation

Bottom dock bar with section shortcuts — swipe/scroll the page, tap icons to jump to About, Work, Projects, Awards, Contact.
