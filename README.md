# DigiConsult

Marketing site for DigiConsult. Next.js App Router, TypeScript, static export.

Work happens on pull requests. Custom domain cutover (DNS + GitHub Pages UI) is a separate human step. `public/CNAME` is `digiconsult.co.nz`.

## Stack

- Next.js App Router, TypeScript
- `output: 'export'` (real HTML per route)
- `images.unoptimized: true`
- `trailingSlash: true`
- Custom domain cutover: `basePath` and `assetPrefix` removed so the static export serves at `/`.
- No Vercel, no backend, no trackers, no auth.

## Local

```sh
npm install && npm run dev
```

Dev server: http://localhost:3000/

```sh
npm run build
```

Build writes static HTML to `out/`.

## Pages

- `/` Home
- `/how-i-work`
- `/services`
- `/work`
- `/about`
- `/start`

Contact: info@digiconsult.co.nz

## Deploy

GitHub Actions builds the export and deploys to GitHub Pages on push to `main` only. A pull request is the human gate. Do not merge without review. Do not production-deploy from this branch.
