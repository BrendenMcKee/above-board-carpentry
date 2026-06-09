# Above Board Carpentry

Website redesign for [Above Board Carpentry](https://aboveboardcarpentry.com) — a high-performance home builder in the Haliburton Highlands, Ontario.

## Repository structure

| Folder | Description |
|--------|-------------|
| `website/` | Next.js 15 site (TypeScript, Tailwind, Framer Motion) — **deployed on Vercel** |
| `audit/` | Pre-build site audit: content inventory, brand brief, site map |

## Development

```bash
cd website
npm install
npm run dev
```

See `website/DEPLOYMENT.md` for Vercel deployment and contact form setup.

## Tech stack

- Next.js 15 · TypeScript · Tailwind CSS 4
- Framer Motion · React Hook Form · Zod
- Nodemailer (Gmail) for contact form
- Vercel hosting
