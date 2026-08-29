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
    { name: 'attachment', label: 'Attachment' },
    { name: 'avatar', label: 'Avatar' },
    { name: 'badge', label: 'Badge' },
    { name: 'breadcrumb', label: 'Breadcrumb' },
    { name: 'bubble', label: 'Bubble' },
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
    { name: 'direction', label: 'Direction' },
    { name: 'drawer', label: 'Drawer' },
    { name: 'dropdown-menu', label: 'Dropdown Menu' },
    { name: 'empty', label: 'Empty' },
    { name: 'field', label: 'Field' },
    { name: 'form', label: 'Form' },
    { name: 'hover-card', label: 'Hover Card' },
    { name: 'input', label: 'Input' },
    { name: 'input-group', label: 'Input Group' },
    { name: 'input-otp', label: 'Input OTP' },
    { name: 'item', label: 'Item' },
    { name: 'kbd', label: 'Kbd' },
    { name: 'label', label: 'Label' },
    { name: 'marker', label: 'Marker' },
    { name: 'menubar', label: 'Menubar' },
    { name: 'message', label: 'Message' },
    { name: 'message-scroller', label: 'Message Scroller' },
    { name: 'native-select', label: 'Native Select' },
    { name: 'navigation-menu', label: 'Navigation Menu' },
    { name: 'pagination', label: 'Pagination' },
    { name: 'popover', label: 'Popover' },
    { name: 'progress', label: 'Progress' },
    { name: 'questionnaire', label: 'Questionnaire' },
    { name: 'radio-group', label: 'Radio Group' },
    { name: 'resizable', label: 'Resizable' },
    { name: 'scroll-area', label: 'Scroll Area' },
    { name: 'select', label: 'Select' },
    { name: 'separator', label: 'Separator' },
    { name: 'sheet', label: 'Sheet' },
    { name: 'sidebar', label: 'Sidebar' },
    { name: 'skeleton', label: 'Skeleton' },
    { name: 'slider', label: 'Slider' },
    { name: 'sonner', label: 'Sonner' },
    { name: 'spinner', label: 'Spinner' },
    { name: 'switch', label: 'Switch' },
    { name: 'table', label: 'Table' },
    { name: 'tabs', label: 'Tabs' },
    { name: 'textarea', label: 'Textarea' },
    { name: 'toast', label: 'Toast' },
    { name: 'toggle', label: 'Toggle' },
    { name: 'toggle-group', label: 'Toggle Group' },
    { name: 'tooltip', label: 'Tooltip' },
    { name: 'typography', label: 'Typography' }
  ];
</script>

<div class="container-wrapper flex flex-1 flex-col px-2">
  <div class="min-h-min flex-1 items-start px-0 lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)]" style="--sidebar-width: 18rem;">
    <!-- Sidebar -->
    <aside class="sticky top-14 z-30 hidden h-[calc(100svh-3.5rem)] overflow-hidden lg:block">
      <div class="h-full overflow-y-auto pr-4 pl-2.5">
        <div class="pb-12">
          <!-- Sections -->
          <div class="mb-4">
            <h4 class="mb-2 px-2 text-sm font-medium text-muted-foreground">Sections</h4>
            <nav class="space-y-1">
              {#each sections as section}
                <a
                  href={section.href}
                  class="block rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground {$page.url.pathname === section.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}"
                >
                  {section.label || section.name}
                </a>
              {/each}
            </nav>
          </div>

          <!-- Components -->
          <div>
            <h4 class="mb-2 px-2 text-sm font-medium text-muted-foreground">Components</h4>
            <nav class="space-y-0.5">
              {#each components as component}
                <a
                  href="/docs/components/{component.name}"
                  class="block rounded-md px-2 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground {$page.url.pathname === `/docs/components/${component.name}` ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}"
                >
                  {component.label}
                </a>
              {/each}
            </nav>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <div class="h-full w-full">
      {@render children()}
    </div>
  </div>
</div>
