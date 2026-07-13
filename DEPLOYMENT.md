# Deployment

## Vercel (recommended)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects
   Vite (`npm run build`, output `dist/`). No config changes needed.
3. In Project Settings → Environment Variables, add the `VITE_EMAILJS_*`
   variables from `.env.example` if you want the contact form to send real
   emails (optional — it falls back to `mailto:` otherwise).
4. `vercel.json` already rewrites all routes to `index.html` for the
   client-side router.

## GitHub Pages

A workflow is included at `.github/workflows/deploy-gh-pages.yml`:

1. In your repo: **Settings → Pages → Build and deployment → Source** →
   "GitHub Actions".
2. If deploying as a **project page** (`https://<user>.github.io/<repo>/`),
   set a repository variable `VITE_BASE_PATH` to `/<repo>/`
   (**Settings → Secrets and variables → Actions → Variables**). Leave it
   unset for a **user/organization page** (`https://<user>.github.io/`).
3. Push to `main` — the workflow builds and deploys automatically.

To build for GitHub Pages locally:

```bash
VITE_BASE_PATH=/portfolio/ npm run build
```

## Before going live

- Live at `https://azhagumurugan-portfolio.vercel.app` — if you add a custom
  domain later, update it in `index.html`, `public/robots.txt`, and
  `public/sitemap.xml`.
- Swap in a real profile photo and per-project GitHub repo links (see the
  "Known placeholders" section in `README.md`).
- Set up EmailJS (or leave the `mailto:` fallback) for the contact form.
