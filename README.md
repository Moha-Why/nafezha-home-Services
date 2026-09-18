# نفذها — home services (SEO)

Next.js App Router marketing site for a Saudi home-services brand.
Static catalog (cities + services in `src/db/data.js`). No auth, no database client.

Live: https://nafezha-home-services.vercel.app

## SEO

- `metadata` API + JSON-LD LocalBusiness
- `sitemap.js` and `robots.js` with `https://nafezha-home-services.vercel.app`
- Dynamic `/services/[city]/[service]` with `generateMetadata` (unique title, description, canonical)
- Unknown slugs call `notFound()`

## Run

```bash
npm install
npm run dev
```
