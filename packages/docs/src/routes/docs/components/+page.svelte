<script lang="ts">
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

<div class="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px]">
  <div class="flex min-w-0 flex-1 flex-col">
    <div class="h-4 shrink-0"></div>
    <div class="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2">
          <h1 class="scroll-m-24 text-3xl font-semibold tracking-tight sm:text-3xl">
            Components
          </h1>
          <p class="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
            A set of beautifully designed components that you can customize, extend, and build on.
          </p>
        </div>
      </div>

      <!-- Components Grid -->
      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {#each components as component}
          <a
            href="/docs/components/{component.name}"
            class="group flex items-center rounded-md border px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {component.label}
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
