# Benevolent — Landing Page

A single-page marketing site for Benevolent, built in plain HTML/CSS/JS — no
build step, no framework, no dependencies beyond two Google Fonts. Open
`index.html` in a browser and it works.

---

## What's inside

```
benevolent-landing/
├── index.html          ← all page content
├── css/
│   └── style.css       ← all styling
├── js/
│   └── main.js          ← nav scroll state, mobile menu, scroll-reveal animations
├── assets/
│   ├── favicon.ico
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   └── icon-512.png
└── README.md            ← this file
```

---

## Sections, top to bottom

1. **Nav** — fixed, transparent over the hero, turns solid+blurred on scroll. Hamburger menu on mobile.
2. **Hero** — full-height, dark. The B mark, the "BENEVOLENT" letterspaced label, and the tagline "Software, well-meant."
3. **Twin-arc divider** — a small recurring SVG motif (two mirrored arcs) used between every section. It echoes the logo's core idea: two equal halves in balance.
4. **About** — the etymology of the name (*bene* + *volens* = "well-wishing") paired with the company's actual position on data and privacy.
5. **Convictions** — three stated principles: Privacy by architecture, Local-first always, Focus over engagement. Dark section, three columns with thin dividing rules.
6. **Products** — two cards side by side: **Velith** (the app, dark card, V+flame mark, feature list, "Get notified" mailto link) and **BEP** (the protocol, lighter card, animated pulsing-ring mark representing broadcast/signal).
7. **Contact** — large italic heading, email + web links, a giant faint B watermark in the background.
8. **Footer** — small lockup, copyright, location.

---

## Brand tokens used (do not change without reason)

```css
--ink:        #1A1612   /* primary dark, text on light backgrounds */
--paper:      #F2EAD9   /* primary light background */
--paper-deep: #E8DFC9   /* secondary light background */
--ember:      #C56A2E   /* the one accent color — CTAs, the flame, hover states */
--ash:        #847468   /* secondary/muted text */
--gold:       #A88349   /* used sparingly — BEP "in development" badge only */
```

Fonts: **Cormorant Garamond** (display/headings), **EB Garamond** (body text),
**DM Mono** (labels, nav, all-caps technical text). Loaded from Google Fonts
via the `<link>` tags in `index.html` — if you ever need this to work fully
offline, download the four weight files and self-host them, then update the
`@import`/`<link>` accordingly.

---

## Editing the content

Everything is plain HTML — open `index.html` and search for the text you
want to change. Notable spots:

- **Tagline**: search `Software,<br>well-meant.`
- **About copy**: inside `<section class="about">`
- **The three convictions**: inside `<section class="convictions">`, each one is an `<article class="conviction">`
- **Velith card copy**: inside `<article class="product-card product-velith">`
- **BEP card copy**: inside `<article class="product-card product-bep">`
- **Email address**: search `hello@benevolent.co.in` (appears twice — once as a mailto link in Contact, once in the Velith "Get notified" button)

---

## Customizing the "Get notified" button

Right now it's a plain `mailto:` link — works instantly with zero setup, but
only opens the visitor's email client. For a real capture form later,
replace the `<a class="btn-notify">` in the Velith card with a form element
wired to whatever you choose:

- **Formspree** (formspree.io) — free tier, no backend needed, just point a `<form>` at their endpoint
- **Google Forms** embedded or linked
- **Appwrite** — since you're already using it for Velith's backend, you could write a simple Appwrite Function that takes an email and stores it in a `waitlist` collection

---

## Deployment — where to host this for free

This is a fully static site, so any of these work with zero cost:

| Host | Notes |
|---|---|
| **Cloudflare Pages** | Free, fast, generous limits, easy custom domain |
| **Vercel** | Free, trivial drag-and-drop or git deploy |
| **Netlify** | Free, drag-and-drop deploy works in seconds |
| **GitHub Pages** | Free if the repo is public (or private on a paid GitHub plan) |

**Fastest path:** drag the unzipped folder onto Netlify's or Vercel's
"deploy" drop-zone in their dashboard — both will give you a live URL in
under a minute. Then point your `benevolent.co.in` domain at it via their
custom-domain settings.

---

## Accessibility & technical notes

- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- All decorative SVGs marked `aria-hidden="true"`
- Scroll-reveal animations respect `prefers-reduced-motion` and fall back to instantly-visible content
- A safety-net timeout ensures `.reveal` content always becomes visible even in edge cases where the scroll observer doesn't fire (e.g. unusual viewports, some automated tools)
- Mobile nav traps body scroll while open and restores it on close
- Color contrast was checked against the WCAG AA threshold for all text/background pairs

---

## Browser support

Built with standard, well-supported CSS (Grid, custom properties, clamp()) —
works in all current versions of Chrome, Firefox, Safari, and Edge. No
polyfills included; if you need to support very old browsers, the Grid
layouts in `.about-grid`, `.convictions-grid`, and `.products-grid` would
need fallbacks.
