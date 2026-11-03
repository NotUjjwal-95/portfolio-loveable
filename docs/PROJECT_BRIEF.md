# Portfolio Project Brief

## Goal
Build a distinctive, technically credible developer portfolio. The website itself should demonstrate design range and engineering judgment.

## Identity
- Display name: Ujjwal
- Context: Programmer and CSE (AI) student
- Brand direction: personal identity first; Royal Blue and Crimson Red may appear as restrained recurring accents.
- Keep actual contact/social URLs in one editable configuration. Hide unavailable values rather than inventing realistic-looking placeholders.

## Route art direction
Each route has an independent visual system. Shared components should be limited to functional primitives and accessibility infrastructure.

| Route | Direction |
| --- | --- |
| `/` | Swiss / International Typographic grid, kinetic typography, restrained minimalism |
| `/about` | Editorial / magazine with subtle organic details |
| `/skills` | Bento grid with restrained neumorphism |
| `/projects` | Neo-brutalism with spatial UI |
| `/projects/:slug` | Independent project case-study art direction |
| `/playground` | Cyberpunk / sci-fi, OLED glow, restrained Y2K |
| `/achievements` | Retro collage / scrapbook |
| `/contact` | Minimalism with liquid-chrome details |
| `*` | Pixel art with classic brutalism |

## Navigation
Use experimental navigation per route: editorial top nav on Home; slim typographic rail on About/Skills; floating index on Projects; HUD-inspired nav on Playground; scrapbook tabs on Achievements; minimal nav on Contact; custom home escape on 404. Keep one discoverable route map across all layouts. Mobile navigation must work with keyboard and touch.

## Verified content constraints
- DEVSCOUT V2: AI-powered technical decision intelligence and developer learning/review platform. In progress.
- AERONEX: Experimental ESP32-S3 drone / IoT prototype. Early hardware stage, not flight-ready.
- VaultX: Password-manager project. No security-audit or production-readiness claim.
- Weather App: OpenWeatherMap and Leaflet. No live URL supplied.
- INNOTECH'26: participant only. Do not claim finalist, winner, or award.
- Do not invent contact details, social accounts, metrics, users, testimonials, or deployment URLs.

## Technical and quality constraints
- Proposed stack: React, TypeScript, Tailwind CSS, React Router, Framer Motion, Lucide, GitHub, Vercel. Choose dependencies after inspecting actual requirements.
- Responsive from small mobile to desktop.
- Semantic HTML, keyboard support, visible focus, sufficient contrast, reduced-motion support.
- No scroll hijacking, inaccessible hover-only interactions, or forced custom cursor.
- Keep route-specific themes isolated and motion performant.
- Keep secrets out of Git and client bundles.
- Do not add backend infrastructure without a real requirement.

## Definition of done
1. Every planned route renders with distinct art direction.
2. Navigation works with mouse, keyboard, touch, and mobile layouts.
3. Type check, lint, and production build pass.
4. No broken local navigation or missing assets.
5. Responsive and accessibility checks are performed.
6. Production deployment is live and its URL is verified.
