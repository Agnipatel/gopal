# Trade with Gopal — Landing Page (Next.js)

Next.js 14 (App Router) + TypeScript conversion of the Trade with Gopal Shinde
landing page.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Structure

- `app/layout.tsx` — root layout, metadata, Google Fonts (Space Grotesk /
  IBM Plex Mono / Inter) loaded via `<link>` tags
- `app/page.tsx` — the full landing page, section by section
- `app/globals.css` — all styling (design tokens as CSS custom properties
  at the top of the file)
- `app/components/Ticker.tsx` — scrolling instrument ticker tape
- `app/components/Clock.tsx` — client component, live HH:MM:SS clock next
  to the Market Watch heading
- `app/components/Sparkline.tsx` — small inline SVG sparkline
- `lib/data.ts` — all page content (instruments, curriculum, stats, etc.)
  as typed arrays — edit this file to update copy or figures without
  touching markup

## Open items (carried over from the client draft)

- Hero uses a "GS" avatar mark — swap in the client's real headshot when
  provided
- Instrument prices in `lib/data.ts` are illustrative placeholders, not a
  live feed — wire up a real market-data API before launch if the client
  confirms that direction
- Legal disclaimer text is still draft, pending compliance sign-off
