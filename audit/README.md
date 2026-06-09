# Above Board Carpentry — Site Audit

Pre-rebrand audit of [aboveboardcarpentry.com](https://aboveboardcarpentry.com/), completed June 9, 2026.

This folder is the foundation for the redesign. **No new site has been scaffolded yet.**

## What's included

| Path | Description |
|------|-------------|
| `BRAND-AUDIT.md` | Current brand identity, design system, strengths & weaknesses |
| `SITE-MAP.md` | Full navigation structure and URL inventory |
| `CONTENT-INVENTORY.md` | Page-by-page content summary and migration notes |
| `REBRAND-BRIEF.md` | Strategic direction, proposed IA, design recommendations |
| `site-map.json` | Machine-readable page/post index |
| `image-inventory.csv` / `.json` | All 250 media items with categories and metadata |
| `content/` | Per-page HTML exports (`page-*.md`, `post-*.md`) |
| `content/plain-text/` | Stripped text versions for copy reuse |
| `assets/images/` | Downloaded full-size images (~201 MB) |
| `raw/` | Original WordPress REST API dumps |

## Asset breakdown

- **branding/** — 14 files (logo, favicons, certification badges)
- **portfolio/** — 118 files (project photos, builds, interiors)
- **team/** — 8 files (staff portraits)
- **general/** — 110 files (store products, misc site images)

## Key documents to read first

1. `REBRAND-BRIEF.md` — start here for design direction
2. `BRAND-AUDIT.md` — understand what exists today
3. `SITE-MAP.md` — plan URL structure and redirects

## Technical notes

- **Platform:** WordPress 5.8.13
- **Theme:** Twenty Seventeen (default, uncustomized)
- **Last content update:** ~June 2021 (most pages); Facebook feed is dynamic
- **Contact form:** Contact Form 7 (will need new implementation)
- **Facebook feed:** Custom Facebook Feed Pro plugin (replace with native embed or API in rebuild)
