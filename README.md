# fuadalizada.com

My personal portfolio. It's a single page that unfolds as you scroll: a video hero, a horizontally scrolling project gallery, and sections for who I am, what I've built, and how to reach me. The whole thing is bilingual, English and Azerbaijani, and you can switch between them from the top of the page.

Live at https://fuadalizada.com

## Built with

- React 19, Vite and TypeScript
- Tailwind CSS v4 (set up in `src/index.css` with `@theme`, no config file)
- Motion (the successor to Framer Motion) for the scroll and reveal animations
- react-i18next for the two languages
- lucide-react for icons

## Running it locally

```bash
npm install
npm run dev       # start the dev server
npm run build     # typecheck, then build for production
npm run preview   # preview the production build
```

## Where things live

- `src/components`: the sections (hero, about, work gallery, Raven, experience, skills, contact), plus a few small text-animation helpers.
- `src/i18n/locales/en.ts` and `az.ts`: every piece of copy on the site, so both languages stay in step. Adding a language is just another file here.
- `src/data.ts`: project links, images and tags.
- `public/me-working.mp4`: the hero background video.
