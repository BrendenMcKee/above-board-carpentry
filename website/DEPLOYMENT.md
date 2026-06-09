# Deployment Guide — Above Board Carpentry

## Local development

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Contact form (Gmail)

The contact form sends inquiries via a Gmail account to the client's main inbox.

### Setup steps

1. Create or use a dedicated Gmail account for sending (e.g. `abc.inquiries@gmail.com`)
2. Enable 2-Factor Authentication on that Gmail account
3. Create an **App Password** at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Copy `.env.example` to `.env.local` and fill in:

```
GMAIL_USER=your-inquiry-gmail@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
CONTACT_TO_EMAIL=info@aboveboardcarpentry.com
```

5. Restart the dev server after adding env vars

## Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the Git repository (or upload the `website` folder)
3. Set **Root Directory** to `website` if the repo includes the `audit` folder
4. Add Environment Variables in Project Settings → Environment Variables:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `CONTACT_TO_EMAIL` = `info@aboveboardcarpentry.com`
5. Deploy

### Option B — Vercel CLI

```bash
cd website
npx vercel login
npx vercel
npx vercel --prod
```

Add env vars via CLI:

```bash
npx vercel env add GMAIL_USER
npx vercel env add GMAIL_APP_PASSWORD
npx vercel env add CONTACT_TO_EMAIL
```

## Custom domain

After deployment, in Vercel Project Settings → Domains, add `aboveboardcarpentry.com` and update DNS records as instructed by Vercel.

## Post-launch checklist

- [ ] Test contact form end-to-end
- [ ] Verify phone click-to-call on mobile
- [ ] Set up 301 redirects from old WordPress URLs (see `../audit/SITE-MAP.md`)
- [ ] Submit sitemap to Google Search Console
- [ ] Replace placeholder legal page copy with client's original text if needed
