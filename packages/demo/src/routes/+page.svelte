<script lang="ts">
  import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@shadcn-ui-svelte/components';

  const features = [
    { title: '62 Components', description: 'Complete port of shadcn/ui React components', icon: '🧩' },
    { title: 'Svelte 5 Runes', description: 'Built with $state, $bindable, $derived, $props', icon: '⚡' },
    { title: 'Zero Runtime Deps', description: 'Only clsx + tailwind-merge', icon: '📦' },
    { title: 'Accessible', description: 'Native focus trap, keyboard nav, ARIA', icon: '♿' },
    { title: 'Theming', description: 'oklch color tokens with dark mode', icon: '🎨' },
    { title: 'CLI Tool', description: 'Install components with one command', icon: '🔧' }
  ];

  const componentCategories = [
    { name: 'Action', count: 2, components: ['Button', 'Toggle'] },
    { name: 'Input', count: 7, components: ['Input', 'Checkbox', 'Switch', 'Slider', 'Select', 'Radio Group', 'Input OTP'] },
    { name: 'Data Display', count: 4, components: ['Badge', 'Card', 'Table', 'Chart'] },
    { name: 'Navigation', count: 5, components: ['Tabs', 'Breadcrumb', 'Pagination', 'Menubar', 'Navigation Menu'] },
    { name: 'Overlay', count: 4, components: ['Dialog', 'Popover', 'Tooltip', 'Dropdown Menu'] },
    { name: 'Feedback', count: 3, components: ['Alert', 'Progress', 'Skeleton'] },
    { name: 'Layout', count: 5, components: ['Accordion', 'Separator', 'Scroll Area', 'Resizable', 'Collapsible'] },
    { name: 'Date', count: 1, components: ['Calendar'] }
  ];
</script>

<div class="container mx-auto px-4 py-12">
  <!-- Hero -->
  <div class="mx-auto max-w-3xl text-center">
    <Badge class="mb-4">Open Source</Badge>
    <h1 class="mb-4 text-5xl font-bold tracking-tight">
      shadcn/ui for Svelte
    </h1>
    <p class="mb-8 text-lg text-muted-foreground">
      A 1:1 port of shadcn/ui (React) to Svelte 5. Native accessible primitives, zero runtime dependencies, and a CLI to get started in seconds.
    </p>
    <div class="flex justify-center gap-4">
      <a href="/components">
        <Button size="lg">Browse Components</Button>
      </a>
      <a href="https://github.com/sonyarianto/shadcn-ui-svelte" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="lg">View on GitHub</Button>
      </a>
    </div>
  </div>

  <!-- Features -->
  <div class="mx-auto mt-24 grid max-w-5xl gap-6 md:grid-cols-3">
    {#each features as feature}
      <Card>
        <CardHeader>
          <div class="mb-2 text-3xl">{feature.icon}</div>
          <CardTitle class="text-lg">{feature.title}</CardTitle>
          <CardDescription>{feature.description}</CardDescription>
        </CardHeader>
      </Card>
    {/each}
  </div>

  <!-- Component Categories -->
  <div class="mx-auto mt-24 max-w-5xl">
    <h2 class="mb-8 text-3xl font-bold text-center">Components</h2>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {#each componentCategories as category}
        <a href="/components?category={category.name}" class="group rounded-lg border p-4 transition-colors hover:bg-accent">
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold group-hover:text-accent-foreground">{category.name}</h3>
            <Badge variant="secondary">{category.count}</Badge>
          </div>
          <div class="text-sm text-muted-foreground">
            {category.components.join(', ')}
          </div>
        </a>
      {/each}
    </div>
  </div>

  <!-- Install -->
  <div class="mx-auto mt-24 max-w-2xl">
    <Card>
      <CardHeader>
        <CardTitle>Get Started</CardTitle>
        <CardDescription>Install and start using components in seconds.</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="rounded-lg bg-muted p-4">
          <code class="text-sm">
{`npx sv create my-app
cd my-app
npx shadcn-ui-svelte init
npx shadcn-ui-svelte add button card dialog`}
          </code>
        </div>
      </CardContent>
    </Card>
  </div>
</div>
