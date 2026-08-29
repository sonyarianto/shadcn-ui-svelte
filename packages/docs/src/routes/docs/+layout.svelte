<script lang="ts">
  import type { Snippet } from 'svelte';
  import { page } from '$app/stores';

  let { children } = $props();

  const sections = [
    { name: 'Introduction', href: '/docs' },
    { name: 'Installation', href: '/docs/installation' },
    { name: 'Components', href: '/docs/components' },
    { name: 'Theming', href: '/docs/theming' },
    { name: 'CLI', href: '/docs/cli' },
    { name: 'Migration', href: '/docs/migration' }
  ];

  const components = [
    { name: 'accordion', label: 'Accordion' },
    { name: 'alert', label: 'Alert' },
    { name: 'alert-dialog', label: 'Alert Dialog' },
    { name: 'aspect-ratio', label: 'Aspect Ratio' },
    { name: 'avatar', label: 'Avatar' },
    { name: 'badge', label: 'Badge' },
    { name: 'breadcrumb', label: 'Breadcrumb' },
    { name: 'button', label: 'Button' },
    { name: 'button-group', label: 'Button Group' },
    { name: 'calendar', label: 'Calendar' },
    { name: 'card', label: 'Card' },
    { name: 'carousel', label: 'Carousel' },
    { name: 'chart', label: 'Chart' },
    { name: 'checkbox', label: 'Checkbox' },
    { name: 'collapsible', label: 'Collapsible' },
    { name: 'combobox', label: 'Combobox' },
    { name: 'command', label: 'Command' },
    { name: 'context-menu', label: 'Context Menu' },
    { name: 'data-table', label: 'Data Table' },
    { name: 'date-picker', label: 'Date Picker' },
    { name: 'dialog', label: 'Dialog' },
    { name: 'drawer', label: 'Drawer' },
    { name: 'dropdown-menu', label: 'Dropdown Menu' },
    { name: 'form', label: 'Form' },
    { name: 'hover-card', label: 'Hover Card' },
    { name: 'input', label: 'Input' },
    { name: 'input-group', label: 'Input Group' },
    { name: 'input-otp', label: 'Input OTP' },
    { name: 'kbd', label: 'Kbd' },
    { name: 'label', label: 'Label' },
    { name: 'menubar', label: 'Menubar' },
    { name: 'native-select', label: 'Native Select' },
    { name: 'navigation-menu', label: 'Navigation Menu' },
    { name: 'pagination', label: 'Pagination' },
    { name: 'popover', label: 'Popover' },
    { name: 'progress', label: 'Progress' },
    { name: 'radio-group', label: 'Radio Group' },
    { name: 'resizable', label: 'Resizable' },
    { name: 'scroll-area', label: 'Scroll Area' },
    { name: 'select', label: 'Select' },
    { name: 'separator', label: 'Separator' },
    { name: 'sheet', label: 'Sheet' },
    { name: 'skeleton', label: 'Skeleton' },
    { name: 'slider', label: 'Slider' },
    { name: 'sonner', label: 'Sonner' },
    { name: 'switch', label: 'Switch' },
    { name: 'table', label: 'Table' },
    { name: 'tabs', label: 'Tabs' },
    { name: 'textarea', label: 'Textarea' },
    { name: 'toast', label: 'Toast' },
    { name: 'toggle', label: 'Toggle' },
    { name: 'toggle-group', label: 'Toggle Group' },
    { name: 'tooltip', label: 'Tooltip' }
  ];
</script>

<div class="mx-auto w-full px-2">
  <div class="min-h-min flex-1 items-start px-0 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)]" style="--sidebar-width: 16rem;">
    <!-- Sidebar -->
    <aside class="sticky z-30 hidden overflow-hidden overscroll-none lg:flex lg:h-[calc(100svh-10rem)]" style="top: calc(var(--header-height) + 0.6rem);">
      <div class="h-full overflow-y-auto pb-12 pl-2.5 pr-4">
        <!-- Sections -->
        <div class="mb-4 pt-12">
          <h4 class="mb-1 px-2 text-sm font-medium text-muted-foreground">Sections</h4>
          <nav class="space-y-0.5">
            {#each sections as section}
              <a
                href={section.href}
                class="relative flex h-[30px] w-fit items-center overflow-visible rounded-md border border-transparent px-2 text-[0.8rem] font-medium transition-colors hover:bg-accent hover:text-accent-foreground {$page.url.pathname === section.href || ($page.url.pathname === '/docs' && section.href === '/docs') ? 'border-accent bg-accent' : 'text-muted-foreground'}"
              >
                {section.name}
              </a>
            {/each}
          </nav>
        </div>

        <!-- Components -->
        <div>
          <h4 class="mb-1 px-2 text-sm font-medium text-muted-foreground">Components</h4>
          <nav class="space-y-0.5">
            {#each components as component}
              <a
                href="/docs/components/{component.name}"
                class="relative flex h-[30px] w-fit items-center overflow-visible rounded-md border border-transparent px-2 text-[0.8rem] font-medium transition-colors hover:bg-accent hover:text-accent-foreground {$page.url.pathname === `/docs/components/${component.name}` ? 'border-accent bg-accent' : 'text-muted-foreground'}"
              >
                {component.label}
              </a>
            {/each}
          </nav>
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <div class="h-full w-full">
      {@render children()}
    </div>
  </div>
</div>
