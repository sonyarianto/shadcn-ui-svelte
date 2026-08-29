<script lang="ts">
  import { page } from '$app/stores';

  const components = [
    { name: 'accordion', label: 'Accordion', category: 'Layout' },
    { name: 'alert', label: 'Alert', category: 'Feedback' },
    { name: 'aspect-ratio', label: 'Aspect Ratio', category: 'Layout' },
    { name: 'avatar', label: 'Avatar', category: 'Data Display' },
    { name: 'badge', label: 'Badge', category: 'Data Display' },
    { name: 'breadcrumb', label: 'Breadcrumb', category: 'Navigation' },
    { name: 'button', label: 'Button', category: 'Action' },
    { name: 'calendar', label: 'Calendar', category: 'Date' },
    { name: 'card', label: 'Card', category: 'Data Display' },
    { name: 'checkbox', label: 'Checkbox', category: 'Input' },
    { name: 'collapsible', label: 'Collapsible', category: 'Layout' },
    { name: 'dialog', label: 'Dialog', category: 'Overlay' },
    { name: 'dropdown-menu', label: 'Dropdown Menu', category: 'Overlay' },
    { name: 'hover-card', label: 'Hover Card', category: 'Overlay' },
    { name: 'input', label: 'Input', category: 'Input' },
    { name: 'input-group', label: 'Input Group', category: 'Input' },
    { name: 'input-otp', label: 'Input OTP', category: 'Input' },
    { name: 'label', label: 'Label', category: 'Form' },
    { name: 'menubar', label: 'Menubar', category: 'Navigation' },
    { name: 'navigation-menu', label: 'Navigation Menu', category: 'Navigation' },
    { name: 'pagination', label: 'Pagination', category: 'Navigation' },
    { name: 'popover', label: 'Popover', category: 'Overlay' },
    { name: 'progress', label: 'Progress', category: 'Feedback' },
    { name: 'radio-group', label: 'Radio Group', category: 'Input' },
    { name: 'scroll-area', label: 'Scroll Area', category: 'Layout' },
    { name: 'select', label: 'Select', category: 'Input' },
    { name: 'separator', label: 'Separator', category: 'Layout' },
    { name: 'skeleton', label: 'Skeleton', category: 'Feedback' },
    { name: 'slider', label: 'Slider', category: 'Input' },
    { name: 'switch', label: 'Switch', category: 'Input' },
    { name: 'table', label: 'Table', category: 'Data Display' },
    { name: 'tabs', label: 'Tabs', category: 'Navigation' },
    { name: 'textarea', label: 'Textarea', category: 'Input' },
    { name: 'toggle', label: 'Toggle', category: 'Action' },
    { name: 'tooltip', label: 'Tooltip', category: 'Overlay' }
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
        A collection of 62 components built with Svelte 5 and Tailwind CSS.
      </p>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each components as component}
          <a
            href="/components/{component.name}"
            class="group rounded-lg border p-4 transition-colors hover:bg-accent"
          >
            <div class="mb-2 font-semibold group-hover:text-accent-foreground">{component.label}</div>
            <div class="text-sm text-muted-foreground">{component.category}</div>
          </a>
        {/each}
      </div>
    </main>
  </div>
</div>
