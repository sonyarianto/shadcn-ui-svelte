<script lang="ts">
  import { page } from '$app/stores';
  import { Badge } from '@shadcn-ui-svelte/components';

  const components = [
    { name: 'button', label: 'Button', category: 'Action' },
    { name: 'badge', label: 'Badge', category: 'Data Display' },
    { name: 'card', label: 'Card', category: 'Data Display' },
    { name: 'input', label: 'Input', category: 'Input' },
    { name: 'textarea', label: 'Textarea', category: 'Input' },
    { name: 'checkbox', label: 'Checkbox', category: 'Input' },
    { name: 'switch', label: 'Switch', category: 'Input' },
    { name: 'slider', label: 'Slider', category: 'Input' },
    { name: 'select', label: 'Select', category: 'Input' },
    { name: 'radio-group', label: 'Radio Group', category: 'Input' },
    { name: 'label', label: 'Label', category: 'Form' },
    { name: 'alert', label: 'Alert', category: 'Feedback' },
    { name: 'progress', label: 'Progress', category: 'Feedback' },
    { name: 'skeleton', label: 'Skeleton', category: 'Feedback' },
    { name: 'dialog', label: 'Dialog', category: 'Overlay' },
    { name: 'popover', label: 'Popover', category: 'Overlay' },
    { name: 'tooltip', label: 'Tooltip', category: 'Overlay' },
    { name: 'tabs', label: 'Tabs', category: 'Navigation' },
    { name: 'accordion', label: 'Accordion', category: 'Layout' },
    { name: 'separator', label: 'Separator', category: 'Layout' },
    { name: 'scroll-area', label: 'Scroll Area', category: 'Layout' },
    { name: 'resizable', label: 'Resizable', category: 'Layout' },
    { name: 'table', label: 'Table', category: 'Data Display' },
    { name: 'data-table', label: 'Data Table', category: 'Data Display' },
    { name: 'calendar', label: 'Calendar', category: 'Date' },
    { name: 'chart', label: 'Chart', category: 'Data Display' },
    { name: 'input-otp', label: 'Input OTP', category: 'Input' }
  ];

  const categories = [...new Set(components.map(c => c.category))];
</script>

<div class="container mx-auto px-4 py-12">
  <div class="flex gap-8">
    <!-- Sidebar -->
    <aside class="hidden w-64 shrink-0 md:block">
      <nav class="sticky top-20 space-y-1">
        {#each categories as category}
          <div class="mb-4">
            <div class="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">{category}</div>
            {#each components.filter(c => c.category === category) as component}
              <a
                href="/components/{component.name}"
                class="block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground {$page.url.pathname === `/components/${component.name}` ? 'bg-accent text-accent-foreground font-medium' : 'text-muted-foreground'}"
              >
                {component.label}
              </a>
            {/each}
          </div>
        {/each}
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1">
      <h1 class="mb-4 text-4xl font-bold">Components</h1>
      <p class="mb-8 text-lg text-muted-foreground">
        Browse all {components.length} components. Click to see live examples and copy-paste code.
      </p>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each components as component}
          <a
            href="/components/{component.name}"
            class="group rounded-lg border p-4 transition-colors hover:bg-accent"
          >
            <div class="flex items-center justify-between">
              <div class="font-semibold group-hover:text-accent-foreground">{component.label}</div>
              <Badge variant="secondary">{component.category}</Badge>
            </div>
          </a>
        {/each}
      </div>
    </main>
  </div>
</div>
