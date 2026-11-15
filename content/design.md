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

| Mode and use | Foreground | Background | Ratio | Required minimum |
| --- | --- | --- | --- | --- |
| Light: body | `#26332F` | `#FAF8F3` | **12.39:1** | 4.5:1 — Pass |
| Light: button | `#FAF8F3` | `#8A5A24` | **5.54:1** | 4.5:1 — Pass |
| Dark: Body, headings and form labels | `#F8FAFC` | `#0B0F17` | **18.33:1** | 4.5:1 — Pass |
| Dark: Secondary copy | `#CBD5E1` | `#0B0F17` | **12.92:1** | 4.5:1 — Pass |
| Dark: Nav links | `#F59E0B` | `#0F172A` | **8.31:1** | 4.5:1 — Pass |
| Dark: CTA text | `#0B0F17` | `#F59E0B` | **8.93:1** | 4.5:1 — Pass |
| Dark: CTA hover text | `#0B0F17` | `#FBBF24` | **11.49:1** | 4.5:1 — Pass |
| Dark: Placeholder / muted text | `#738196` | `#0F172A` | **4.51:1** | 4.5:1 — Pass |
| Dark: Error text | `#EF4444` | `#0B0F17` | **5.10:1** | 4.5:1 — Pass |
| Dark: Success text | `#10B981` | `#0B0F17` | **7.56:1** | 4.5:1 — Pass |
| Dark: Table header and input text | `#F8FAFC` | `#0F172A` | **17.06:1** | 4.5:1 — Pass |
| Dark: Panel and table odd-row text | `#F8FAFC` | `#151D2F` | **16.07:1** | 4.5:1 — Pass |
| Dark: Table even-row text | `#F8FAFC` | `#1E293B` | **13.98:1** | 4.5:1 — Pass |
| Dark: Table source text, worst row | `#94A3B8` | `#1E293B` | **5.71:1** | 4.5:1 — Pass |
| Dark: Table odd-row borders | `#687281` | `#151D2F` | **3.45:1** | 3:1 — Pass |
| Dark: Table even-row borders | `#687281` | `#1E293B` | **3.00:1** | 3:1 — Pass |
| Dark: Table header and input borders | `#687281` | `#0F172A` | **3.67:1** | 3:1 — Pass |
| Dark: Focus ring on input / header | `#38BDF8` | `#0F172A` | **8.33:1** | 3:1 — Pass |
| Dark: Focus ring on hover surface | `#38BDF8` | `#26354D` | **5.77:1** | 3:1 — Pass |
| Dark: Hover icon / link | `#F59E0B` | `#26354D` | **5.76:1** | 3:1 — Pass |
| Dark: Invalid input border | `#EF4444` | `#0F172A` | **4.74:1** | 3:1 — Pass |
| Dark: Amber accent on canvas | `#F59E0B` | `#0B0F17` | **8.93:1** | 3:1 — Pass |
| Dark: Amber accent on panel | `#F59E0B` | `#151D2F` | **7.83:1** | 3:1 — Pass |
| Dark: Amber accent on elevated card | `#F59E0B` | `#1E293B` | **6.81:1** | 3:1 — Pass |

Primary headings, error text, and success text also exceed 4.5:1 on their respective page backgrounds. These checks establish contrast for the listed combinations, not whole-page WCAG compliance; check rendered hover/focus states and any added surfaces when implementing.

## Dark-Mode Palette

Slate surfaces, near-white text, amber calls to action, warm amber links, and cyan focus rings replace the light palette only under `:root[data-theme="dark"]`. Typography, spacing, content, and behavior stay the same. Every applied color is a CSS custom property.

| Role / variable | Hex | Use |
| --- | --- | --- |
| Canvas / `--background` | `#0B0F17` | Page background. |
| Sub-background / `--sub-background` | `#0F172A` | Header, table header, inputs and select. |
| Card/panel / `--panel` | `#151D2F` | Open accordion panel and odd table rows. |
| Elevated / `--elevated` | `#1E293B` | Even table rows. |
| Hover surface / `--surface-hover` | `#26354D` | Accordion and theme-toggle hover. |
| Primary text / `--foreground`, `--primary` | `#F8FAFC` | Body, headings and labels. |
| CTA text / `--button-text` | `#0B0F17` | Dark text on amber buttons and their hover state. |
| Secondary text / `--secondary` | `#CBD5E1` | Hero copy, section intros and explanatory notes. |
| Subtle text / `--subtle` | `#94A3B8` | Table source column. |
| Muted text / `--muted` | `#738196` | Placeholder styling; adjusted for contrast. The current inputs have no placeholder copy. |
| Disabled / `--disabled` | `#475569` | Reserved for disabled controls; currently unused. |
| Card outline / `--card-outline` | `#1E293B` | Reserved decorative token; functional borders use `--border`. |
| Functional border / `--border` | `#687281` | Inputs, tables, section separators and theme-toggle border. |
| Divider / `--divider` | `#1B2538` | Reserved decorative token; currently unused. |
| Primary CTA / `--accent` | `#F59E0B` | Amber buttons and the Common mistake left border. |
| Primary CTA hover / `--accent-hover` | `#FBBF24` | Amber button hover with dark text. |
| Warm accent / `--warm-accent` | `#F59E0B` | Links and nav links. |
| Focus ring / `--focus` | `#38BDF8` | Visible keyboard focus ring. |
| Success / `--success` | `#10B981` | Demo confirmation text. |
| Warning / `--warning` | `#F59E0B` | Reserved warning token. |
| Error / `--error` | `#EF4444` | Error messages and invalid-input borders. |
| Info / `--info` | `#3B82F6` | Reserved info token. |

The amber CTA and hover colors pass without adjustment. The existing muted-text and functional-border adjustments use the first passing 8-bit step along the sRGB line toward white. All other supplied palette values are preserved.

| Supplied value | Applied value | Reason |
| --- | --- | --- |
| Muted text `#64748B` | `#738196` | Text on input sub-background rises from 3.751:1 to 4.514:1. |
| Input / functional border `#334155` | `#687281` | The shared border must also work on elevated table rows; contrast there rises from 1.413:1 to 3.004:1, and input-border contrast is 3.666:1. |

Disabled and reserved decorative tokens are not used for active text or functional boundaries. WCAG contrast claims above apply to rendered pairings, not to arbitrary combinations of every palette token. Placeholder contrast was checked with a temporary browser-only probe; no placeholder copy was added to the page.
