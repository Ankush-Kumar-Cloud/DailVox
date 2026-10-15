# Dailvox Dailer — MERN website

MongoDB + Express + React (Vite) + Node.

## Run
```
cd server && cp .env.example .env && npm install && npm run dev     # API :5000
cd client && npm install && npm run dev                            # site :5173 (proxies /api)
```
Production: `cd client && npm run build`, host `client/dist` statically; deploy `server` with env vars set.

## Edit content (no code changes needed)
Everything business-specific lives in `client/src/content.js`: contact details, solutions, features
(`status: 'available'` vs `'confirm'`), integrations, plans/pricing, FAQs, case study.
Features and integrations marked `confirm` show an "availability to be confirmed" badge.

## Leads
`POST /api/leads` validates server-side (honeypot + rate limit) and stores to MongoDB `leads`.
If the DB is down the API returns 503, the form shows an error (never a fake success) and offers a WhatsApp fallback.
Add email notification (e.g. nodemailer) in `server/index.js` after `Lead.create` once SMTP is configured.

## Before launch
- Replace `https://YOUR-DOMAIN.com` in `client/public/sitemap.xml`, `robots.txt`, and `SITE` in `content.js`.
- Privacy Policy / Terms pages are drafts: replace with lawyer-reviewed text. Add a Responsible Calling Policy before linking it.
- Add a real OG image, a Sign In link (only if a portal exists), analytics (after consent setup).
- Verify every product claim; set feature `status` accordingly.
