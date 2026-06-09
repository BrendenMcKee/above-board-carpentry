# Rebrand Brief — Above Board Carpentry

Strategic foundation for the website redesign. Use this document to align with the client before scaffolding the new project.

---

## Project goal

Transform aboveboardcarpentry.com from a dated WordPress template site into a **modern, premium builder website** that:

1. Leads with high-performance home expertise (Passive House / Net Zero)
2. Converts visitors into contact form submissions and phone calls
3. Showcases portfolio work with full-size, impactful photography
4. Supports The ABC Store as a secondary but integrated brand lane
5. Reflects the quality of work they deliver on site

---

## Target audience

| Segment | What they need |
|---------|----------------|
| **Homeowners planning a custom build** | Proof of expertise, certifications, portfolio, local trust |
| **Cottage owners renovating** | Before/after galleries, craft quality, project management |
| **Energy-conscious buyers** | Passive House / Net Zero credentials explained plainly |
| **Local referrals** | Professional presence, team faces, contact ease |
| **ABC Store customers** | Product photos, wood story, care instructions, purchase inquiry |

---

## Recommended design direction

### Aesthetic: "Crafted Performance"

Blend **heritage craft** (timber, wood grain, hand-cut joinery) with **modern building science** (clean lines, performance data, certification trust).

Think: warm and grounded, not corporate. Premium regional builder, not a national franchise.

### Proposed color palette

Derived from their photography and existing accents:

| Role | Color | Hex | Notes |
|------|-------|-----|-------|
| Primary | Deep forest | `#2C4A3E` | Grounded, Haliburton woods |
| Secondary | Warm timber | `#8B6914` | Wood tones, craft warmth |
| Accent | Sage | `#7A8B6F` | From interior project photos |
| Neutral dark | Charcoal | `#2D2D2D` | Text, headers |
| Neutral light | Off-white | `#F7F5F0` | Backgrounds |
| Accent action | Copper/bronze | `#B87333` | CTAs — warmer than current blue `#0d43c3` |

### Typography (proposed)

| Role | Font | Rationale |
|------|------|-----------|
| Headings | **Fraunces** or **DM Serif Display** | Craft heritage, editorial quality |
| Body | **Inter** or **Source Sans 3** | Clean, modern readability |
| Accent/labels | **Libre Franklin** (current) | Optional — maintain some continuity |

### Photography usage

- **Hero:** Full-bleed project interiors or timber work (Tragert kitchen, Timber-2, Passive House exterior)
- **Portfolio:** Large masonry or carousel galleries — never thumbnail-sized
- **About/Team:** Rounded portraits with warm treatment (keep existing photos)
- **Store:** Product-on-wood lifestyle shots, live edge detail macros

---

## Proposed page structure

### 1. Homepage

**Sections (top to bottom):**
1. Hero — full-bleed image + headline + dual CTA ("Start Your Project" / "View Our Work")
2. Credentials bar — 4 certification badges in a horizontal strip
3. Value proposition — 3 columns: Performance / Craft / Local Expertise
4. Featured project — Kash Passive House spotlight
5. Portfolio preview — 3–4 project cards
6. About teaser — Graham + team photo + link
7. ABC Store teaser — single product feature
8. Contact CTA band — phone, email, form link
9. Footer — nav, legal, social, hours

### 2. About

- Company story and mission
- Credentials grid (expand on current badges)
- Timber framing highlight (Welcome Centre reference)
- Link to Team sub-page
- Embedded map or service area note

### 3. Team (`/about/team`)

- 4 team member cards with bios
- Graham featured/larger

### 4. Services (new page)

Aggregate page explaining what they build:
- High-performance new homes
- Renovations & cottages
- Garages & outbuildings
- Decks, kitchens, bathrooms, bunkies
- Timber framing

Each with icon, short description, link to relevant portfolio filter.

### 5. Portfolio

- Filterable grid: All / Residential / Garages / Renovations
- Case study template for each project:
  - Hero image
  - Project name, type, year
  - 2–3 sentence summary
  - Photo gallery (lightbox)
  - "Start a similar project" CTA

### 6. ABC Store (`/store`)

- Brand intro (wood from Haliburton Highlands)
- Product cards: Cutting Boards, Care Products
- "Coming Soon" section
- Inquiry CTA (not full e-commerce unless client requests)

### 7. Contact

- Form (name, email, phone, project type, message)
- Click-to-call phone
- Address, hours, map
- Response time promise ("within one business day")

### 8. Footer legal

- Privacy Policy, Terms, Disclaimer, Copyright

---

## Key messaging hierarchy

**Primary headline (homepage):**
> High-Performance Homes Built for the Haliburton Highlands

**Subheadline:**
> Red Seal certified. Passive House trained. Stunning homes with exceptionally low operating costs.

**CTA buttons:**
- "Start Your Project" (primary)
- "View Our Work" (secondary)
- "Call (705) 455-2196" (mobile sticky)

---

## Technical recommendations (for scaffolding phase)

| Decision | Recommendation | Rationale |
|----------|-----------------|-----------|
| Framework | **Next.js** or **Astro** | Fast, modern, great image optimization |
| Hosting | Vercel / Netlify / Cloudflare Pages | Simple deploy, CDN |
| CMS | **Sanity**, **Contentful**, or markdown-based | Client can update projects without WordPress |
| Images | Next/Image or Astro assets + WebP | 201 MB raw assets need optimization |
| Forms | Resend + React Hook Form, or Formspree | Replace Contact Form 7 |
| Analytics | Plausible or GA4 | Client preference |
| SEO | Per-page meta, LocalBusiness schema, sitemap | Improve on basic Yoast setup |
| Redirects | 301 map from all old URLs | Preserve SEO (see SITE-MAP.md) |

*Final stack choice should be confirmed with client before scaffolding.*

---

## Content that needs client input

Before or during build, confirm with Above Board Carpentry:

- [ ] Any new projects since 2021 to add to portfolio?
- [ ] Updated team — anyone joined or left since 2021?
- [ ] ABC Store — e-commerce or inquiry-only?
- [ ] "Coming Soon" store products — what are they?
- [ ] Preferred contact method (phone vs form)?
- [ ] Do they want a blog/news section or keep Facebook as "current"?
- [ ] New photography planned, or reuse existing assets?
- [ ] Logo refresh, or keep current mark?
- [ ] Domain/hosting — staying on current host or migrating?
- [ ] Email delivery for contact form — same info@ address?

---

## Success metrics

| Metric | Target |
|--------|--------|
| Mobile PageSpeed | 90+ |
| Contact form submissions | Increase (baseline TBD) |
| Avg. time on portfolio pages | Increase via better galleries |
| Bounce rate on homepage | Decrease via clearer value prop |
| ABC Store inquiries | Track separately from construction leads |

---

## Asset inventory summary

| Category | Count | Size |
|----------|-------|------|
| Total images downloaded | 250 | ~201 MB |
| Branding/certifications | 14 | — |
| Portfolio/project | 118 | — |
| Team portraits | 8 | — |
| General/store/misc | 110 | — |
| Pages exported | 15 | — |
| Posts exported | 5 | — |

All assets are in `audit/assets/images/` and catalogued in `image-inventory.csv`.

---

## Next step: Scaffold the new project

When ready to build:

1. Confirm tech stack with client
2. Initialize project in workspace root (outside `audit/`)
3. Optimize and import hero/portfolio images
4. Implement page structure from this brief
5. Set up contact form and redirects
6. Client review → launch

The audit folder remains as reference and should not be deployed.
