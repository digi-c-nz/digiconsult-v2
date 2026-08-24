# DigiConsult

Marketing site for DigiConsult. Next.js App Router, TypeScript, static export.

Work happens on pull requests. Do not point this repo at the live domain until a human clears a cutover. There is no CNAME in this repository.

## Stack

- Next.js App Router, TypeScript
- `output: 'export'` (real HTML per route)
- `images.unoptimized: true`
- `trailingSlash: true`
- `basePath` and `assetPrefix` set to `/digiconsult.-v2` so a GitHub project Pages preview works. Take both off when a custom domain is attached later.
- No Vercel, no backend, no trackers, no auth.

## Local

```sh
npm install && npm run dev
```

Dev server: http://localhost:3000/digiconsult.-v2/

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
