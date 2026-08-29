# shadcn/ui Svelte

A 1:1 port of [shadcn/ui](https://ui.shadcn.com) (React) to Svelte 5, using the latest Svelte 5.57.0 and Tailwind CSS v4.

## Features

- **62 components** — Complete port of shadcn/ui
- **Native Svelte 5** — Built with runes ($state, $bindable, $derived, $props, $effect)
- **Zero runtime deps** — Only clsx + tailwind-merge
- **Accessible** — Native focus trap, keyboard navigation, ARIA roles
- **Theming** — oklch color tokens with light/dark mode
- **CLI** — Install components with one command

## Installation

```bash
# Create a new SvelteKit project
npx sv create my-app
cd my-app

# Initialize shadcn/ui
npx shadcn-ui-svelte init

# Add components
npx shadcn-ui-svelte add button
npx shadcn-ui-svelte add button card dialog
npx shadcn-ui-svelte add -a  # Add all
```

## Usage

```svelte
<script>
  import { Button } from '$lib/components/ui/button';
  import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
</script>

<Card>
  <CardHeader>
    <CardTitle>Welcome</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Click me</Button>
  </CardContent>
</Card>
```

## Theming

Define CSS variables in your global CSS:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... */
}
```

## Components

| Category | Components |
|----------|------------|
| Layout | Accordion, Aspect Ratio, Collapsible, Resizable, Scroll Area, Separator |
| Data Display | Avatar, Badge, Card, Table |
| Navigation | Breadcrumb, Menubar, Navigation Menu, Pagination, Tabs |
| Input | Checkbox, Input, Input Group, Input OTP, Radio Group, Select, Slider, Switch, Textarea |
| Feedback | Alert, Progress, Skeleton |
| Overlay | Dialog, Dropdown Menu, Hover Card, Popover, Tooltip |
| Action | Button, Toggle |
| Date | Calendar |
| Form | Label |

## CLI Commands

```bash
npx shadcn-ui-svelte init      # Initialize project
npx shadcn-ui-svelte add <name> # Add component
npx shadcn-ui-svelte build      # Generate registry
npx shadcn-ui-svelte list       # List components
```

## Tech Stack

- Svelte 5.57.0
- SvelteKit 2.70.3
- Tailwind CSS v4
- TypeScript 5.x

## License

MIT
