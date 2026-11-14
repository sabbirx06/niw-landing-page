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

| Mode and use | Text | Background | Ratio | AA normal text |
| --- | --- | --- | --- | --- |
| Light: body | `#26332F` | `#FAF8F3` | **12.39:1** | Pass |
| Light: button | `#FAF8F3` | `#8A5A24` | **5.54:1** | Pass |
| Dark: body | `#E8EDE8` | `#18231F` | **13.63:1** | Pass |
| Dark: button | `#18231F` | `#DBAF75` | **8.01:1** | Pass |

Primary headings, error text, and success text also exceed 4.5:1 on their respective page backgrounds. These checks establish contrast for the listed combinations, not whole-page WCAG compliance; check rendered hover/focus states and any added surfaces when implementing.

## Dark-Mode Palette

Retain the typography and hierarchy; swap the same semantic color roles when the toggle is implemented.

| Role | Hex | Rationale |
| --- | --- | --- |
| Primary | `#A3C9B8` | A soft sage keeps headings distinct against the dark surface. |
| Accent | `#DBAF75` | A softened ochre preserves warm action cues without neon brightness. |
| Neutral: foreground | `#E8EDE8` | Pale gray-green supports readable body copy without pure-white glare. |
| Neutral: background | `#18231F` | A deep green-charcoal maintains the light palette's quiet character. |
| Error | `#F3A6A0` | A lighter brick tone keeps corrective messages visible on dark backgrounds. |
| Success | `#96C9A7` | A lighter leaf green preserves confirmation cues on dark backgrounds. |

Use the dark background color (`#18231F`) as text on dark-mode accent buttons; invert the button text role along with the palette. Keep status icons and explicit messages in both themes.
