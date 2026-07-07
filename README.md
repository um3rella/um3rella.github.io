# Personal Career Website

A single-page, fully responsive portfolio site for job applications, built with React, Vite, TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Customizing your content

All personal content lives in **one file**: [`src/data/content.ts`](src/data/content.ts). Update your name, bio, skills, experience, projects, and social links there — no component changes needed.

Two other things to update:

1. **Resume** — drop your `resume.pdf` into the [`public/`](public/) folder. The "Download Resume" button in the hero links to it.
2. **SEO tags** — update the `<title>` and meta descriptions in [`index.html`](index.html) to match your name.

## Features

- Single page with smooth-scroll anchor navigation and active-section highlighting
- Fully responsive, mobile-first layout (hamburger menu under the `md` breakpoint)
- Dark/light mode toggle, persisted to localStorage and respecting system preference
- Subtle scroll-reveal animations via Framer Motion (respects reduced-motion settings)
- Open Graph / SEO meta tags

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [lucide-react](https://lucide.dev/) icons

## Deploying

The build output in `dist/` is fully static. Deploy to Vercel, Netlify, GitHub Pages, or any static host:

- **Vercel/Netlify**: connect the repo; both auto-detect Vite (build command `npm run build`, output `dist`).
- **GitHub Pages**: set `base` in `vite.config.ts` to `'/<repo-name>/'` if not using a custom domain.
