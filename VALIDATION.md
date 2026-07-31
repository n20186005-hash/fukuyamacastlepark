# Validation report

Checked on 2026-07-30.

## Passed

- `src/scripts/memorial-card.ts` passed strict standalone TypeScript checking with TypeScript 5.8.3 (`ES2022`, `DOM`).
- `package.json` and `wrangler.jsonc` parse as valid JSON.
- All six local photographs exist, open successfully, and are valid JPEG files.
- Every local image path referenced by the page and Canvas module resolves to a bundled file.
- Every DOM element queried by the memorial-card module exists in `index.astro`.
- Required camera, selfie, album, 1:1, postcard portrait, 9:16, GA4, privacy notice, and unofficial-disclaimer markers are present.
- No `fetch`, `XMLHttpRequest`, `sendBeacon`, `WebSocket`, `localStorage`, or `sessionStorage` use exists in the memorial-card module.
- Memorial-card export uses only browser-side Canvas `toBlob()` and a temporary object URL.
- No `<img>` in the rendered page points to an external image URL.
- CSS braces/comments/strings passed a structural balance scan.

## Environment limitation

The execution sandbox could not resolve the public npm Registry, and its internal package mirror did not contain the requested 2026 package versions. Therefore dependency installation and the full Astro production build were not executed here.

Run the final integration check in an internet-enabled Node.js 22.12+ environment:

```bash
corepack enable
corepack prepare pnpm@11.18.0 --activate
pnpm install
pnpm build
pnpm preview
```

Then deploy with:

```bash
SITE_URL=https://fukuyamacastlepark.com pnpm deploy
```
