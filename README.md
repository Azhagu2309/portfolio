# Azhagumurugan R — Portfolio

A premium, animated portfolio for an ECE undergraduate specializing in Embedded Systems, FPGA/RTL design, and AI-driven engineering. Built with React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, and Lenis smooth scroll.

## Tech stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion + GSAP (ScrollTrigger) for animation
- Lenis for smooth scrolling
- React Router (single page + a 404 route)
- EmailJS for the contact form
- `react-intersection-observer` + a small custom hook for animated stats
- `lucide-react` + `react-icons` for iconography

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Content lives in `src/data/`

All real content (name, education, skills, projects, achievements, leadership,
contact links) is centralized in `src/data/*.ts`, sourced from the resume PDFs
in `OneDrive/Desktop/RESUME/`. Edit those files to update copy — no need to
touch components. The resume file served for download/preview is
`public/Azhagumurugan-R-Resume.pdf`; replace it to update both the download
button and the embedded preview.

## Known placeholders / scope notes

A few things from the original spec were intentionally simplified or left as
placeholders because they need real assets or a backend that wasn't part of
this build:

- **Profile photo** — no headshot was supplied, so the hero and footer use an
  animated "AR" monogram instead of a photo. Drop an image into `src/assets/`
  and swap it into `src/sections/Hero.tsx` to use a real photo.
- **Per-project GitHub links** — the resume only lists one GitHub profile
  (`github.com/Azhagu2309`), not individual repo URLs, so every project's
  "View on GitHub" button links to the profile. Add real repo URLs in
  `src/data/projects.ts` (`github` field) once they're public.
- **Contact form** — EmailJS is wired up but needs real credentials (see
  `.env.example`). Until `VITE_EMAILJS_*` env vars are set, the form falls
  back to opening the visitor's email client with the message pre-filled.
- **"Interactive map background"** — implemented as a stylized radar/signal
  SVG (matches the embedded-systems aesthetic) rather than an embedded Google
  Map, since a live map needs a billable API key.
- **Backend-dependent extras** from the original brief were intentionally
  skipped: live GitHub contribution graph, visitor counter, resume-download
  analytics, and an "AI assistant" placeholder — all of these need a server
  or third-party API this static site doesn't have.

## Live

Deployed on Vercel at **https://azhagumurugan-portfolio-azhagu2309s-projects.vercel.app**. SEO meta
tags, `sitemap.xml`, and `robots.txt` all point at this URL — if you add a
custom domain or the Vercel project URL changes, update those in one pass
(`index.html`, `public/robots.txt`, `public/sitemap.xml`).

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for Vercel and GitHub Pages instructions.
