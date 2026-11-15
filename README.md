# EB-2 NIW Learning Guide

A responsive landing page explaining five points to understand before an EB-2 National Interest Waiver (NIW) petition: EB-2 eligibility, the broader importance of planned work, evidence connecting past contributions to future plans, the national benefit of the waiver, and the limits of petition approval.

## Technology

HTML5, CSS3, and vanilla JavaScript. No framework, dependencies to install, or build step is required.

## File structure

```text
├── index.html       # Page content and accessible markup
├── styles.css       # Typography, colors, and responsive layout
├── script.js        # Accordion, theme, header, and demo form behavior
├── .gitignore       # Excludes local Chrome profiles and log files
├── README.md        # Project overview and local setup
├── AGENTS.md        # Repository contributor instructions
├── content/
│   ├── copy.md      # Page copy
│   ├── design.md    # Visual identity and contrast checks
│   ├── points.md    # Five-point content outline
│   └── table.md     # Comparison copy and source attribution
├── og-image.png     # 1200×630 social-sharing image
├── source/          # Reference material
└── screenshots/     # Render and interaction regression screenshots
```

## Run locally

Open `index.html` directly in a web browser. Keep `styles.css` and `script.js` alongside it. Google Fonts requires an internet connection; fallback system fonts are available when offline.

## Design choices

The light theme uses forest green and ochre on warm paper; the dark theme uses forest green surfaces, gold calls to action and links, and a translucent blurred header. Source Serif 4 at weight 600 is used for headings; Inter at weight 400 is used for body text, with weight 600 for labels and buttons. The hero fills the first screen below the header using viewport-based minimum height, while growing when needed to avoid clipping. Section headings and introductory text are centered at every size. At widths of 900px and above, the accordion and contact form share centered 760px columns; panel text and form labels stay left-aligned. Visible “EB-2” text uses normal hyphens inside nowrap spans to prevent splitting across lines.

WCAG AA contrast checks are documented in `content/design.md`. Body text has a contrast ratio of 12.39:1 and button text 5.54:1, both exceeding the 4.5:1 requirement for normal text. These checks do not establish whole-page WCAG compliance.

## Comparison table

The seven-row EB-2 NIW / EB-1A comparison follows the accordion. Sources were **read on Nov 15, 2026**: USCIS EB-2 and EB-1 category pages; Case Processing Times for Form I-140; FY2026 Q3 I-140 counts and approved petitions awaiting visa numbers; the premium-processing page and Form G-1055; and getniw.com (Nov 1, 2025; updated Mar 28, 2026). Exact table copy, dates, methodology notes, and attribution are preserved in [content/table.md](content/table.md). The table scrolls in its own keyboard-focusable region on mobile.

## Dark/light toggle

The header's sun/moon button switches between the warm-paper light theme and forest-green/gold dark theme. The choice persists in localStorage under `theme`; with no saved choice the page follows the system preference. Storage reads and writes are guarded so blocked storage does not prevent loading or toggling. An inline head script chooses the theme before styles load, and the browser theme color follows the selection.

## Sticky collapsing header

The header stays visible and compacts after scrolling beyond 60px, expanding again below 20px. Reserved header space prevents content shifts, and section offsets use the measured compact height. Navigation links cover Five points, Compare, and Contact.

## Smooth scrolling

Navigation and the hero button use native anchor links with CSS smooth scrolling. Target headings remain below the sticky header. Reduced-motion preferences disable smooth scrolling and header transitions.

## Simulated form loading

Validation runs before loading begins. A valid submission disables the fields and submit button, shows “Sending...” with a spinner for about 1.5 seconds, then clears the form and focuses the existing demo confirmation. A polite status region announces progress and completion. Duplicate submissions are guarded, reduced motion hides the spinner, and submission makes no network requests or backend calls.

## Open Graph metadata

The head includes a unique title and description plus Open Graph and Twitter summary-large-image metadata. The canonical sharing URL is https://sabbirx06.github.io/niw-landing-page/ and the sharing image is `og-image.png` (1200×630). A single inline SVG favicon uses the existing forest-green and warm-paper palette.

## Accessibility

- Keyboard-operable accordion with ARIA expansion states and associated panels; Enter and Space toggle panels, while arrow keys, Home, and End move between accordion buttons.
- Visible focus states, a skip-to-content link, and logical keyboard navigation.
- Labelled form fields with associated error messages, icons, and focus moved to the first invalid field.
- A success message exposed as a status update and support for reduced motion.

## Validation

Day 2 regression checks passed in headless Chrome at 375×667, 1280×720, and 1715×993 in both light and dark themes. Checks cover hero sizing and unclipped text, page overflow, accordion exclusivity and ARIA state, mobile-only table scrolling, unbroken “EB-1”, “EB-1A”, and “EB-2” labels, section headings below the header, logical Tab order and visible focus, Enter/Space activation, validation, simulated loading, form reset and confirmation focus, zero submission network requests, and persisted themes. The focused skip link remains above the sticky header.

Metadata checks confirm unique title, description, Open Graph and Twitter tags; the live URL matches `og:url`, and both local and live sharing images are 1200×630. Both system themes also load and toggle with localStorage blocked, and no browser console errors occur on load. Table copy and notes match `content/table.md`. ARIA and keyboard behavior are checked in the browser; actual screen-reader speech is not tested.

Screenshots in `screenshots/` cover first screens, section navigation, both themes, comparison tables, and form error, loading, and confirmation states. The `day2-` screenshots capture the first screen, comparison section, and confirmation at all six viewport/theme combinations. Chrome profiles and all `.log` files remain excluded by Git. No automated test or lint runner is configured. JavaScript syntax can be checked with:

```sh
node --check script.js
```

## Demo contact form

The contact form validates required fields and email format locally. It is a demo and sends nothing. Successful submission displays: “This is a demo form. Nothing has been sent.”

## Disclaimer

General information, not legal advice.
