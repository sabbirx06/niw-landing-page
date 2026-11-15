# Landing Page Visual Identity

## Direction: Calm, Clear, Educational

Use the five points in [points.md](points.md) as a numbered learning path: eligibility, proposed work, supporting evidence, the waiver argument, and the residency process. Forest green, warm paper, and restrained ochre give the page an academic character without the red, white, and blue government look. The intent is to make complex information approachable for international professionals, with no visual suggestion of official endorsement or guaranteed approval.

## Light Palette

| Role | Color | Hex | Use and rationale |
| --- | --- | --- | --- |
| Primary | Deep forest | `#234C43` | Headings, navigation, and section numbers; a subdued green gives the educational content a steady, calm tone. |
| Accent | Muted ochre | `#8A5A24` | Main action buttons and underlined links; a warm focal color directs attention without feeling urgent or promotional. |
| Neutral: foreground | Charcoal green | `#26332F` | Body copy, labels, and explanatory notes; strong contrast keeps the five points easy to read. |
| Neutral: background | Warm paper | `#FAF8F3` | Page and content backgrounds; a quiet, warm surface suits sustained reading. |
| Error | Brick | `#B33A3A` | Form errors with explanatory text and an icon; a distinct corrective signal stays separate from the brand colors. |
| Success | Leaf green | `#2D6A4F` | Submission confirmations with a check icon and text; a gentle positive signal indicates completed actions, never immigration eligibility or approval. |

Use warm paper (`#FAF8F3`) for text on ochre buttons. Keep the accent concentrated on the main next action, such as “Explore the five points.” Use explicit labels alongside error and success colors so meaning does not depend on color alone.

## Typography

| Role | Google Font and weight | CSS fallback stack | Rationale |
| --- | --- | --- | --- |
| Headings | [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4), 600 | `"Source Serif 4", Georgia, "Times New Roman", serif` | An understated editorial serif gives the guide an educational identity and makes its section hierarchy clear. |
| Body and interface | [Inter](https://fonts.google.com/specimen/Inter), 400; 600 for labels and buttons | `"Inter", "Segoe UI", Arial, sans-serif` | A straightforward sans serif keeps explanations, form labels, and unfamiliar immigration terms visually clear. |

Both are free Google Fonts under the SIL Open Font License: [Source Serif 4 license](https://raw.githubusercontent.com/google/fonts/main/ofl/sourceserif4/OFL.txt), [Inter license](https://raw.githubusercontent.com/google/fonts/main/ofl/inter/OFL.txt). When distributing font files, retain their license notices.

Start body copy at 18px with a 1.6 line height and a reading width around 65 characters. Use sentence-case headings, generous section spacing, and short paragraphs. Give the fifth point about status and work permission a clear heading and readable text rather than styling it as fine print.

## WCAG AA Contrast Checks

Normal-size text needs at least **4.5:1** under [WCAG 2.2, criterion 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). These ratios were calculated from the specified opaque sRGB hex values using linearized relative luminance and `(Llighter + 0.05) / (Ldarker + 0.05)`; values are displayed to two decimals, with pass decisions made before rounding.

| Mode and use | Foreground | Background (composited where translucent) | Ratio | Required minimum |
| --- | --- | --- | --- | --- |
| Light: body | `#26332F` | `#FAF8F3` | **12.39:1** | 4.5:1 — Pass |
| Light: button | `#FAF8F3` | `#8A5A24` | **5.54:1** | 4.5:1 — Pass |
| Dark: Body, headings and form labels | `#F2EDDF` | `#071510` | **15.98:1** | 4.5:1 — Pass |
| Dark: Secondary copy | `#AAA997` | `#071510` | **7.86:1** | 4.5:1 — Pass |
| Dark: Nav links, header over canvas | `#C6B58E` | `#071510` | **9.26:1** | 4.5:1 — Pass |
| Dark: Nav links, conservative header over primary text | `#C6B58E` | `#2A352F` | **6.31:1** | 4.5:1 — Pass |
| Dark: CTA text | `#071510` | `#C6B58E` | **9.26:1** | 4.5:1 — Pass |
| Dark: CTA hover text | `#071510` | `#E4D6B7` | **12.99:1** | 4.5:1 — Pass |
| Dark: Placeholder / muted text | `#AAA997` | `#050C09` | **8.31:1** | 4.5:1 — Pass |
| Dark: Error text | `#EAC29B` | `#071510` | **11.29:1** | 4.5:1 — Pass |
| Dark: Success text | `#A6DCB5` | `#101F17` | **10.99:1** | 4.5:1 — Pass |
| Dark: Table header and input text | `#F2EDDF` | `#050C09` | **16.89:1** | 4.5:1 — Pass |
| Dark: Panel and odd-row text | `#F2EDDF` | `#102019` | **14.45:1** | 4.5:1 — Pass |
| Dark: Even-row text | `#F2EDDF` | `#232B25` | **12.44:1** | 4.5:1 — Pass |
| Dark: Table source, worst row | `#C5C7B7` | `#232B25` | **8.47:1** | 4.5:1 — Pass |
| Dark: Table odd-row borders | `#C6B58E` | `#102019` | **8.37:1** | 3:1 — Pass |
| Dark: Table even-row borders | `#C6B58E` | `#232B25` | **7.20:1** | 3:1 — Pass |
| Dark: Table header and input borders | `#C6B58E` | `#050C09` | **9.78:1** | 3:1 — Pass |
| Dark: Invalid input border | `#EAC29B` | `#050C09` | **11.94:1** | 3:1 — Pass |
| Dark: Focus ring on canvas | `#E4D6B7` | `#071510` | **12.99:1** | 3:1 — Pass |
| Dark: Focus ring on card | `#E4D6B7` | `#102019` | **11.75:1** | 3:1 — Pass |
| Dark: Focus ring on input | `#E4D6B7` | `#050C09` | **13.74:1** | 3:1 — Pass |
| Dark: Focus ring on container | `#E4D6B7` | `#232B25` | **10.11:1** | 3:1 — Pass |
| Dark: Gold accent on canvas | `#C6B58E` | `#071510` | **9.26:1** | 3:1 — Pass |
| Dark: Gold accent on card | `#C6B58E` | `#102019` | **8.37:1** | 3:1 — Pass |
| Dark: Gold accent on container | `#C6B58E` | `#232B25` | **7.20:1** | 3:1 — Pass |

Primary headings, error text, and success text also exceed 4.5:1 on their respective page backgrounds. These checks establish contrast for the listed combinations, not whole-page WCAG compliance; check rendered hover/focus states and any added surfaces when implementing.

## Dark-Mode Palette

Forest green surfaces, cream text, gold calls to action and links, and a translucent forest header replace the light palette only under `:root[data-theme="dark"]`. All colors are CSS custom properties. The header uses a 12px backdrop blur; no typography, geometry, copy, or behavior changes.

| Role / variable | Value | Use |
| --- | --- | --- |
| Canvas / `--background`, CTA text / `--button-text` | `#071510` | Page canvas and dark text on gold buttons. |
| Deep background / `--sub-background` | `#050C09` | Inputs, select, table header, theme toggle. |
| Card/surface / `--panel` | `#102019` | Open accordion panel and odd table rows. |
| Container / `--elevated` | `#232B25` | Even table rows. |
| Map background / `--surface-hover` | `#0B1C14` | Accordion and theme-toggle hover surfaces; no map is present. |
| Header / `--header-background` | `#071510D9` | Translucent header with backdrop blur. |
| Primary text / `--primary`, `--foreground` | `#F2EDDF` | Body, headings, labels and table headers. |
| Secondary / `--secondary`, `--muted` | `#AAA997` | Intro copy, explanatory notes and placeholder styling. |
| Supporting / `--subtle` | `#C5C7B7` | Table source column. |
| Primary gold / `--accent`, `--warm-accent` | `#C6B58E` | CTA, links, Common mistake border, functional borders. |
| Hover / `--accent-hover`, focus / `--focus` | `#E4D6B7` | CTA hover and keyboard focus ring. |
| Decorative borders / `--border`, `--card-outline`, `--divider` | `#C6B58E26` | Approximately 15% gold section and accordion dividers. |
| Success text / `--success` | `#A6DCB5` | Confirmation with its existing check icon and text. |
| Success background / `--success-background` | `#8BA77912` | Translucent confirmation background. |
| Success border / `--success-border` | `#8BA77960` | Decorative inset confirmation outline with no geometry change. |
| Error / `--error` | `#EAC29B` | Form error text and invalid-input borders; existing warning icon and text retained. |
| Reserved / `--disabled`, `--warning`, `--info` | `#AAA997`, `#C6B58E`, `#C5C7B7` | Existing tokens mapped to palette colors; no active disabled, warning or info components. |

Functional-border substitutions, using supplied palette colors only:

| Use | Decorative value | Applied value | Reason |
| --- | --- | --- | --- |
| Input and select borders | `#C6B58E26` | `var(--accent)` / `#C6B58E` | Translucent gold is below 3:1 on deep backgrounds. Opaque palette gold reaches 9.78:1. Invalid borders use `--error` instead. |
| Table cell borders | `#C6B58E26` | `var(--accent)` / `#C6B58E` | Translucent gold is below 3:1 on both row surfaces. Opaque gold reaches 8.37:1 on cards and 7.20:1 on containers. |
| Theme-toggle border | `#C6B58E26` | `var(--accent)` / `#C6B58E` | Identifies an interactive control at over 3:1. |
| Keyboard focus | Decorative gold is not used | `var(--focus)` / `#E4D6B7` | The supplied hover gold exceeds 3:1 on canvas, cards and containers. |

No supplied text, CTA, hover, or status color needed adjustment. Decorative separators and the success outline are not functional boundaries and retain their supplied transparency. Success text is checked against its background composited over the canvas. Header text is checked both over canvas and conservatively over the palette's brightest text before blur. Existing fields contain no placeholder copy; placeholder styling was tested with a temporary browser-only probe. No favicon is configured.
