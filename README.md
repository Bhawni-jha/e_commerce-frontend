# E‑Commerce Frontend — Developer Assessment

This repository contains a single-file, production-ready responsive e‑commerce landing page built as a frontend assessment. It implements a hero slider, a responsive product grid, desktop tabs and a mobile accordion, and focuses on accessibility (WCAG 2.1 AA) and accurate visual dimensions from the provided design brief.

The project is implemented as a self-contained `index.html` (HTML + CSS + JavaScript) and uses a couple of CDN libraries for convenience (Swiper.js for the hero carousel and Tailwind's browser build for utility helpers). Product and hero images are loaded from Unsplash (CDN) and include descriptive alt text.

## Highlights

- Hero slider: 3 slides at 1920×1080 with autoplay, pagination, navigation arrows, keyboard and touch support.
- Product grid: 8 product cards sized to match the design (462×720). Responsive layout: 4 columns on desktop, 2 columns on tablet/mobile.
- Tabs (desktop) / Accordion (mobile): accessible components with a one-open policy and keyboard navigation.
- Accessibility: semantic HTML, ARIA attributes, visible focus states, skip-link, and descriptive alt text. A WCAG 2.1 AA oriented implementation.
- Smooth in-page navigation: all CTAs (Shop Now / Explore) scroll to the products section using a `goToProducts()` helper.

## Files

- `index.html` — The full app (HTML, CSS and JS). Open this file in a browser or serve it to view the site.
- `QUICK_REFERENCE.md`, `FEATURES.md`, `VISUAL_GUIDE.md`, `IMPLEMENTATION_REPORT.md`, `DELIVERY_SUMMARY.md`, `INDEX.md`, `IMAGES_NAVIGATION_UPDATE.md`, `UPDATE_COMPLETE.md`, `QUICK_START_UPDATE.md` — Documentation created alongside the deliverable. (If you removed or edited them, adapt as needed.)

## Design & Dimensions

- Hero images: 1920×1080 (landscape, full-bleed).
- Product cards (image area): 462×720 (maintained using aspect-ratio and fixed column widths in the grid).
- Color palette used (CSS variables in `index.html`): `#0b3c5d`, `#264653`, `#e76f51`, `#52994B` and supporting neutrals.

## How to run

Pick one of the two options below.

1) Open directly in the browser (works for static files):

```bash
# From the project folder (double-click or open in a browser):
# macOS
open index.html
# Linux
xdg-open index.html
# Windows
start index.html
```

2) Serve on a local static server (recommended for best results, CORS, and service-worker parity):

```bash
# Python 3 (simple HTTP server)
python3 -m http.server 8000
# Then open http://localhost:8000 in your browser
```

## Quick development notes

- The page is a single file; no build step or package install required.
- The project depends on CDN assets (Swiper.js and Tailwind browser build). If you need an offline copy, download those assets and update the `<link>`/`<script>` tags in `index.html`.

## Where the key code lives

- Hero slider: `index.html` — Swiper initialization and slide markup.
- Product grid & cards: `index.html` — CSS variables define spacing and the grid uses fixed 462px columns to preserve the exact product image size.
- Tabs & accordion: `index.html` — responsive logic and ARIA attributes handled with vanilla JS.
- Navigation helper: `goToProducts()` in `index.html` — smooth scroll to the products section.

## Accessibility

The project was implemented with accessibility in mind:

- Skip link to jump to the products section.
- Semantic headings and landmark elements.
- ARIA attributes on tabs/accordion and keyboard support for all interactive elements.
- Alt text on all images and visible focus outlines for keyboard users.

If you want an accessibility audit, I recommend running the page through Lighthouse in Chrome and an automated checker like axe-core.

## Customization guide

- Replace hero/product images: open `index.html` and swap the image `src` attributes. Maintain the aspect ratios for best visual results (hero: 1920×1080, products: 462×720).
- Change colors/spacing: edit the CSS variables under the `:root` block in `index.html`.
- Add more products: duplicate a `.product-card` block in the product grid markup. Keep the same HTML structure so card styles and accessibility attributes remain intact.

## Troubleshooting

- Images not loading: verify your internet connection or replace CDN image URLs with local files.
- Layout breaks on very small or very wide screens: the grid uses fixed 462px columns to match design specs; if you want fully fluid columns instead, change the grid to `minmax(200px, 1fr)`.
- Slider not working: ensure Swiper's CSS and JS CDN links are reachable. Open the browser console to check for load errors.

## Next steps / Suggested improvements

- Add a product details page for each card and wire up the cards to open that page.
- Implement a lightweight build pipeline (npm, bundler) if you plan to grow the project.
- Add unit/visual tests for components and a CI workflow for automated checks.

## License & credits

- Images: Unsplash (CDN) — check the original photographers for attribution if you re-use images commercially.
- This repository: choose a license you prefer (MIT is common for frontend assignments). Add a `LICENSE` file if you want the project open-sourced.

## Contact

If you want help customizing or extending this project, tell me what you'd like to add (product details page, cart, checkout mock, or deployment). I'm ready to assist.

---

_Generated and verified against the repo contents on May 28, 2026._
# e_commerce-frontend
