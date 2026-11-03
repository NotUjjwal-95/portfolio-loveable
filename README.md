# Ujjwal's Developer Portfolio

An experimental multi-page, multi-aesthetic developer portfolio. The initial application scaffold and route implementation have been imported from the Lovable project into this GitHub repository.

## Current status

- Application scaffold imported on `develop`.
- Main route implementations are present.
- Quality checks and a local production build have not yet been independently verified.
- No production deployment has been configured or verified.

## Stack

React, TypeScript, TanStack Start / Router, Vite, Tailwind CSS, Framer Motion, and Lucide. See `package.json` for the exact dependency versions and scripts.

## Routes

- `/` Home
- `/about`
- `/skills`
- `/projects`
- `/projects/:slug`
- `/playground`
- `/achievements`
- `/contact`
- Not-found route

Each page has its own visual direction and navigation treatment. See `docs/PROJECT_BRIEF.md`.

## Edit portfolio content

Portfolio copy, project entries, skills, achievements, and contact link configuration are centralized in `src/content/site.ts`. Contact and social values that are not configured should remain hidden, not replaced with invented details.

## Development

Use Bun if following the committed `bun.lock`:

```bash
bun install
bun run dev
```

Available scripts are defined in `package.json`. Before merging, run the relevant lint, test, and production build scripts and record actual results.

## Agent workflow

Read `AGENTS.md` and `docs/AGENT_WORKFLOW.md` before making changes. Use `develop` for integration and focused feature branches for agent work. Keep route-specific design systems independent.

## Deployment

Vercel is the intended deployment target. Deployment is not yet configured or verified.
