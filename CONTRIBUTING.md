# Contributing to MedQuel Web

Thank you for helping improve the MedQuel public web experience.

## Development

1. Use Node.js 20 or newer.
2. Install dependencies with `npm ci`.
3. Copy `.env.example` to `.env` when local environment values are needed.
4. Start the site with `npm run dev`.

Before opening a pull request, run:

```bash
npm run check
```

Keep changes focused, preserve the existing visual language, and include screenshots for meaningful UI changes. Do not commit `.env` files, credentials, build output, or generated dependencies.

## Pull requests

Use a clear title such as `feat: improve download CTA` or `fix: correct social preview image`. Pull requests should explain the user impact, verification performed, and any deployment or environment considerations.
