<div align="center">

# MedQuel Web

### Public website for the MedQuel medical learning platform

<p>
	<a href="https://github.com/MedQuel/MedQuel-web/actions/workflows/ci.yml"><img src="https://github.com/MedQuel/MedQuel-web/actions/workflows/ci.yml/badge.svg" alt="CI status" /></a>
	<a href="https://github.com/MedQuel/MedQuel-web"><img src="https://img.shields.io/badge/repository-MedQuel--web-1D6FE0" alt="Repository" /></a>
	<a href="https://github.com/MedQuel/MedQuel-web/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-2EA44F" alt="Apache 2.0 license" /></a>
	<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/node-%3E%3D20-339933" alt="Node.js 20 or newer" /></a>
</p>

<p>
	<a href="https://www.medquel.com">Live website</a>
	· <a href="https://github.com/MedQuel/MedQuel-web/issues">Issues</a>
	· <a href="https://github.com/MedQuel/MedQuel-web/actions">CI runs</a>
</p>

</div>

MedQuel Web is the public-facing landing page for [MedQuel](https://www.medquel.com), a gamified medical learning platform built around quizzes, contests, progress tracking, peer discussion, and personalized study plans.

The web repository is intentionally separate from the MedQuel mobile client, GraphQL server, and Cloud Functions repositories. It focuses on the public product story, app download conversion, SEO, social previews, and static deployment.

> **Status:** Active development. The site is a Vite + React single-page application deployed to Vercel. The Android app is the primary supported product platform.

## Contents

- [Highlights](#highlights)
- [Technology](#technology)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Commands](#commands)
- [Project structure](#project-structure)
- [Quality gates](#quality-gates)
- [Security](#security)
- [License](#license)

## Highlights

- Public product website for the MedQuel medical learning platform
- Responsive landing page for medical quizzes, contests, and competitive study
- App download calls to action and product-focused content sections
- SEO metadata, Open Graph previews, sitemap, and crawler configuration
- Vercel deployment configuration with security headers and asset caching
- Automated linting, type checking, production builds, and dependency updates

## Technology

| Area               | Technology                     |
| ------------------ | ------------------------------ |
| Runtime            | Node.js 20 or newer            |
| UI                 | React 18 and TypeScript        |
| Build tool         | Vite 5                         |
| Styling            | Tailwind CSS and PostCSS       |
| Motion and icons   | Framer Motion and Lucide React |
| Hosting            | Vercel                         |
| Dependency updates | GitHub Dependabot              |
| CI                 | GitHub Actions                 |

## Requirements

- Node.js 20 or newer
- npm
- A current Chromium, Firefox, or Safari browser for local development

## Getting started

Clone the repository and install the locked dependency tree:

```bash
git clone https://github.com/MedQuel/MedQuel-web.git
cd MedQuel-web
npm ci
```

Create a local environment file when needed:

```powershell
Copy-Item .env.example .env
```

Start the development server at `http://localhost:3000`:

```bash
npm run dev
```

## Environment variables

Vite exposes only variables prefixed with `VITE_` to browser code. Use [.env.example](.env.example) as the source of truth for local configuration.

| Variable              | Purpose                                      |
| --------------------- | -------------------------------------------- |
| `VITE_APP_NAME`       | Public application name                      |
| `VITE_APP_URL`        | Canonical website URL                        |
| `VITE_PLAY_STORE_URL` | Android app download URL                     |
| `VITE_GA_ID`          | Optional analytics measurement ID            |
| `VITE_API_URL`        | Reserved for a future public API integration |

Never put API keys, service-account credentials, private tokens, or other secrets in `VITE_*` variables. Values are bundled into the client and are public.

## Commands

| Command             | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the Vite development server            |
| `npm run typecheck` | Run TypeScript project validation            |
| `npm run lint`      | Run ESLint with warnings treated as failures |
| `npm run build`     | Create the production bundle in `dist/`      |
| `npm run check`     | Run lint and production build checks         |
| `npm run preview`   | Preview the production bundle locally        |

## Project structure

```text
src/
	components/       Landing-page sections and reusable UI
	App.tsx           Page composition
	index.css         Tailwind layers and global styles
	main.tsx          React entry point
public/
	images/           Favicon and social preview assets
	robots.txt        Crawler rules
	sitemap.xml       Canonical page sitemap
index.html          SEO metadata and application shell
vercel.json         Hosting headers, rewrites, and cache policy
.github/
	workflows/        Continuous integration
	dependabot.yml    Automated dependency updates
```

## Quality gates

GitHub Actions runs the same checks for pushes to `main` and pull requests targeting `main`:

```bash
npm ci
npm run check
```

Before the first push, verify the production build locally, inspect the generated `dist/` output, test the page at mobile and desktop widths, and confirm that the favicon, Open Graph image, sitemap, download links, and contact links resolve correctly.

Branch protection should require the CI check and pull-request review, block force pushes, and require branches to be up to date before merging.

## Security

Report vulnerabilities privately using [SECURITY.md](SECURITY.md). Do not open public issues containing credentials, tokens, private user data, or production details.

## License

MedQuel Web is licensed under the Apache License 2.0. See [LICENSE](LICENSE).

<div align="center">Built with ❤️ by Team GrayCode.</div>
