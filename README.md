# Akhil Meda E-Portfolio

Recruiter-facing personal portfolio website for Akhil Meda, built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Local Setup

1. Open a terminal in `ECE1100/E-Portfolio`.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Production Checks

Run these before deploying:

```bash
npm run lint
npm run build
```

## Key Files

- `src/app/` contains the page routes and global app metadata.
- `src/components/` contains reusable UI, layout, and contact form components.
- `src/content/site.ts` contains personal details, links, resume path, and page copy that can be edited quickly.
- `public/images/` contains placeholder visuals for the site.
- `public/resume/Akhil-Meda-Resume.pdf` is the downloadable resume file.

## What To Replace Later

- `src/content/site.ts`
  Replace `siteUrl` with the real deployed domain.
- `public/images/`
  Replace placeholder SVGs with a headshot, project screenshots, waveform captures, board photos, or lab visuals.
- `public/resume/Akhil-Meda-Resume.pdf`
  Replace the included starter PDF whenever your resume changes.
- `src/components/contact/contact-form.tsx`
  Connect the form UI to a real backend, Formspree endpoint, or custom API route if you want live submissions.

## Notes

- The portfolio already includes recruiter-facing copy for Home, About, Resume, Career Goals, Projects, and Contact.
- SEO metadata, sitemap, robots rules, manifest support, and a placeholder favicon are included.
- The project was organized to make content edits easy without restructuring components.
