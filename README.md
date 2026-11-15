# EB-2 NIW Learning Guide

A responsive landing page explaining five points to understand before an EB-2 National Interest Waiver (NIW) petition: EB-2 eligibility, the broader importance of planned work, evidence connecting past contributions to future plans, the national benefit of the waiver, and the limits of petition approval.

## Technology

HTML5, CSS3, and vanilla JavaScript. No framework, dependencies to install, or build step is required.

## File structure

```text
├── index.html       # Page content and accessible markup
├── styles.css       # Typography, colors, and responsive layout
├── script.js        # Accordion behavior and demo form validation
├── .gitignore       # Excludes local Chrome profiles and log files
├── README.md        # Project overview and local setup
├── AGENTS.md        # Repository contributor instructions
├── content/
│   ├── copy.md      # Page copy
│   ├── design.md    # Visual identity and contrast checks
│   └── points.md    # Five-point content outline
├── source/          # Reference material
└── screenshots/     # Eight tracked render and form-state screenshots
```

## Run locally

Open `index.html` directly in a web browser. Keep `styles.css` and `script.js` alongside it. Google Fonts requires an internet connection; fallback system fonts are available when offline.

## Design choices

The light theme uses forest green and ochre on warm paper; the dark theme uses forest green surfaces, gold calls to action and links, and a translucent blurred header. Source Serif 4 at weight 600 is used for headings; Inter at weight 400 is used for body text, with weight 600 for labels and buttons. The hero fills the first screen below the header using viewport-based minimum height, while growing when needed to avoid clipping. Section headings and introductory text are centered at every size. At widths of 900px and above, the accordion and contact form share centered 760px columns; panel text and form labels stay left-aligned. Visible “EB-2” text uses normal hyphens inside nowrap spans to prevent splitting across lines.

WCAG AA contrast checks are documented in `content/design.md`. Body text has a contrast ratio of 12.39:1 and button text 5.54:1, both exceeding the 4.5:1 requirement for normal text. These checks do not establish whole-page WCAG compliance.

## Accessibility

- Keyboard-operable accordion with ARIA expansion states and associated panels; Enter and Space toggle panels, while arrow keys, Home, and End move between accordion buttons.
- Visible focus states, a skip-to-content link, and logical keyboard navigation.
- Labelled form fields with associated error messages, icons, and focus moved to the first invalid field.
- A success message exposed as a status update and support for reduced motion.

## Validation

Headless Chrome render checks passed at 375×667, 1280×720, and 1715×993, including first-screen layout, section-link scrolling, heading alignment, and unbroken “EB-2” text. Interaction checks at 375px and 1280px covered form validation, demo confirmation with no submission network requests, accordion state and ARIA updates, keyboard navigation, and visible focus outlines.

Eight screenshots are tracked in `screenshots/`: first-screen and after-hero-click images for 375×667, 1280×720, and 1715×993, plus the 375px form error and success states. Older screenshots and logs were removed. Chrome profiles and all `.log` files remain excluded by Git. No automated test or lint runner is configured. JavaScript syntax can be checked with:

```sh
node --check script.js
```

## Demo contact form

The contact form validates required fields and email format locally. It is a demo and sends nothing. Successful submission displays: “This is a demo form. Nothing has been sent.”

## Disclaimer

General information, not legal advice.
