# Multi-Agent Development Workflow

## Operating model
Use separate, reviewable workstreams. No single agent silently owns the entire product.

- **Coordinator:** Maintains the brief, scopes tasks, tracks shared contracts, resolves integration conflicts, and checks implementation against intent.
- **Design agent:** Owns route art direction, route-scoped design tokens, layouts, responsive behavior, and interaction specifications. Must not flatten page-specific systems into one theme.
- **Frontend agent:** Owns React/TypeScript implementation, route composition, functional primitives, and responsive behavior.
- **Integration agent:** Owns route wiring, shared navigation contracts, content/config integration, and build consistency.
- **QA/reviewer agent:** Independently checks route completeness, visual quality, keyboard/mobile behavior, reduced motion, accessibility, links, type checks, lint, and production build.

## Git rules
- `main`: stable, reviewed work.
- `develop`: integration branch.
- `feature/<scope>`: isolated workstreams.
- Do not have multiple agents edit the same files concurrently.
- Every task declares its owned files/directories.
- Avoid force pushes. Keep commits small and descriptive.
- Pull requests include scope, screenshots where relevant, test results, and known limitations.

## Suggested sequence
1. Inspect repo and establish the app scaffold.
2. Define route map, shared contracts, and route-scoped design tokens.
3. Implement Home as a visual foundation without imposing its theme elsewhere.
4. Implement About, Skills, Projects, and case-study templates in isolated scopes.
5. Implement Playground, Achievements, Contact, and 404.
6. Integrate route-specific navigation with a discoverable route map.
7. Run accessibility, responsive, performance, and build reviews.
8. Deploy to Vercel and verify the production URL.

## Review checklist
- Does the change match its route-specific art direction?
- Are links and controls functional?
- Does keyboard navigation work and is focus visible?
- Is reduced motion respected?
- Does it work on mobile and desktop?
- Are project claims accurate?
- Are secrets absent?
- Do type check, lint, and build pass?
