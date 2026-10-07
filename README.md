# Dmytro Lamashevskyi - personal portfolio

Multilingual portfolio built with Next.js App Router and exported as a static site for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static export is written to `next/`, matching the GitHub Pages workflow in `.github/workflows/nextjs.yml`.

## Content

- English and Japanese copy: `messages/en.json` and `messages/ja.json`
- Selected projects: `app/[locale]/work/page.jsx`
- Downloadable CV files: `public/assets/`

The English master CV published by the site is `public/assets/Lamashevskyi_Dmytro_CV_Master_4P_ENG.pdf`.

The maintained CV sources live in `C:\Repos\CV`. Update both published English PDFs after rebuilding them there. The historical Japanese PDF remains in assets but is not linked from the site until it is updated to the current career history.

English and Japanese use the same positioning: Senior Software Engineer, .NET, AWS and Applied AI. Commercial case studies and the KaigiAI case study live in `lib/engineering-case-studies.js`. Preserve measured/estimated qualifiers and distinguish commercial, prototype and personal work.
