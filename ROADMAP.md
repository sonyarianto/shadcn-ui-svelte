# ROADMAP

## shadcn/ui → Svelte 5 Port

A 1:1 port of [shadcn/ui](https://ui.shadcn.com) (React) to Svelte 5, using the latest Svelte 5.57.0 and Tailwind CSS v4. Zero external JavaScript runtime dependencies.

---

## Phase 1: Foundation ✅

- [x] Initialize monorepo with pnpm workspaces
- [x] Create components package (Svelte 5 + Tailwind CSS v4)
- [x] Create `cn()` utility (clsx + tailwind-merge)
- [x] Define TypeScript types for all component props
- [x] Create oklch theming system with CSS variables
- [x] Create `components.json` and registry schemas
- [x] Scaffold SvelteKit docs site
- [x] Create 62 unique components (134 files)

## Phase 2: Native Accessible Primitives ✅

- [x] Remove bits-ui dependency (zero external JS runtime)
- [x] Create focus-trap.ts (focus trapping, focus management)
- [x] Create keyboard.ts (grid navigation, arrow key handling)
- [x] Create portal.ts (portal utility for overlays)
- [x] Create context.ts (Svelte context for compound components)
- [x] Rebuild Dialog with native focus trap and escape handling
- [x] Rebuild Select with native keyboard navigation
- [x] Rebuild Accordion with native open/close state
- [x] Rebuild Tabs with native tab switching
- [x] Rebuild Checkbox/Switch with native ARIA roles
- [x] Rebuild DropdownMenu with native click outside handling
- [x] Rebuild NavigationMenu with native styling
- [x] Rebuild Tooltip with native positioning

## Phase 3: Complex Components ✅

- [x] DataTable with sorting and pagination
- [x] Calendar with month navigation
- [x] Chart with bar/line/pie variants
- [x] Carousel container
- [x] ScrollArea with custom scrollbar
- [x] Slider with mouse/keyboard support
- [x] InputOTP with paste support
- [ ] Resizable panels

## Phase 4: CLI Package ✅

- [x] `shadcn-ui-svelte init` — Initialize project
- [x] `shadcn-ui-svelte add <component>` — Add component
- [x] `shadcn-ui-svelte build` — Generate registry JSON
- [x] `shadcn-ui-svelte list` — List available components
- [x] `components.json` config support
- [x] Registry dependency resolution
- [ ] File alias resolution (`$lib/`, `@/`)

## Phase 5: Documentation Site ✅

- [x] Home page with hero section
- [x] Installation guide
- [x] Component documentation pages
- [x] Interactive component playground
- [x] Copy-paste code blocks
- [x] Dark mode support
- [ ] Search functionality
- [x] Theming guide
- [ ] Migration guide from React

## Phase 6: Polish & Release

- [ ] Visual parity audit (screenshot comparison)
- [ ] Accessibility testing (axe-core)
- [ ] Bundle size analysis
- [ ] npm publish `shadcn-ui-svelte`
- [ ] Write comprehensive README
- [ ] Create contribution guidelines
- [ ] Set up CI/CD pipeline

---

## Tech Stack

| Tool | Version |
|------|---------|
| Svelte | 5.57.0 |
| SvelteKit | 2.70.3 |
| Tailwind CSS | v4 |
| TypeScript | 5.x |
| @tanstack/table-core | Latest (optional) |
| date-fns | Latest (optional) |
| Package Manager | pnpm |

## Dependencies

| Package | Purpose | Required |
|---------|---------|----------|
| clsx | Conditional classnames | Yes |
| tailwind-merge | Tailwind class deduplication | Yes |

**Zero JavaScript runtime dependencies.** All accessibility handling is built with native browser APIs.

## Component Count

| Category | Count |
|----------|-------|
| Action | 4 |
| Input | 12 |
| Data Display | 12 |
| Overlay | 12 |
| Navigation | 5 |
| Feedback | 5 |
| Layout | 6 |
| Date | 2 |
| Advanced | 4 |
| **Total** | **62** |
