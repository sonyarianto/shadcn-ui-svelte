<script lang="ts">
  import { page } from '$app/stores';

  const components = [
    { name: 'accordion', label: 'Accordion', category: 'Layout' },
    { name: 'alert', label: 'Alert', category: 'Feedback' },
    { name: 'alert-dialog', label: 'Alert Dialog', category: 'Overlay' },
    { name: 'aspect-ratio', label: 'Aspect Ratio', category: 'Layout' },
    { name: 'attachment', label: 'Attachment', category: 'Data Display' },
    { name: 'avatar', label: 'Avatar', category: 'Data Display' },
    { name: 'badge', label: 'Badge', category: 'Data Display' },
    { name: 'breadcrumb', label: 'Breadcrumb', category: 'Navigation' },
    { name: 'bubble', label: 'Bubble', category: 'Data Display' },
    { name: 'button', label: 'Button', category: 'Action' },
    { name: 'button-group', label: 'Button Group', category: 'Action' },
    { name: 'calendar', label: 'Calendar', category: 'Date' },
    { name: 'card', label: 'Card', category: 'Data Display' },
    { name: 'carousel', label: 'Carousel', category: 'Layout' },
    { name: 'chart', label: 'Chart', category: 'Data Display' },
    { name: 'checkbox', label: 'Checkbox', category: 'Input' },
    { name: 'collapsible', label: 'Collapsible', category: 'Layout' },
    { name: 'combobox', label: 'Combobox', category: 'Input' },
    { name: 'command', label: 'Command', category: 'Input' },
    { name: 'context-menu', label: 'Context Menu', category: 'Overlay' },
    { name: 'data-table', label: 'Data Table', category: 'Data Display' },
    { name: 'date-picker', label: 'Date Picker', category: 'Date' },
    { name: 'dialog', label: 'Dialog', category: 'Overlay' },
    { name: 'direction', label: 'Direction', category: 'Layout' },
    { name: 'drawer', label: 'Drawer', category: 'Overlay' },
    { name: 'dropdown-menu', label: 'Dropdown Menu', category: 'Overlay' },
    { name: 'empty', label: 'Empty', category: 'Data Display' },
    { name: 'field', label: 'Field', category: 'Form' },
    { name: 'form', label: 'Form', category: 'Form' },
    { name: 'hover-card', label: 'Hover Card', category: 'Overlay' },
    { name: 'input', label: 'Input', category: 'Input' },
    { name: 'input-group', label: 'Input Group', category: 'Input' },
    { name: 'input-otp', label: 'Input OTP', category: 'Input' },
    { name: 'item', label: 'Item', category: 'Data Display' },
    { name: 'kbd', label: 'Kbd', category: 'Data Display' },
    { name: 'label', label: 'Label', category: 'Form' },
    { name: 'marker', label: 'Marker', category: 'Data Display' },
    { name: 'menubar', label: 'Menubar', category: 'Navigation' },
    { name: 'message', label: 'Message', category: 'Data Display' },
    { name: 'message-scroller', label: 'Message Scroller', category: 'Data Display' },
    { name: 'native-select', label: 'Native Select', category: 'Input' },
    { name: 'navigation-menu', label: 'Navigation Menu', category: 'Navigation' },
    { name: 'pagination', label: 'Pagination', category: 'Navigation' },
    { name: 'popover', label: 'Popover', category: 'Overlay' },
    { name: 'progress', label: 'Progress', category: 'Feedback' },
    { name: 'questionnaire', label: 'Questionnaire', category: 'Form' },
    { name: 'radio-group', label: 'Radio Group', category: 'Input' },
    { name: 'resizable', label: 'Resizable', category: 'Layout' },
    { name: 'scroll-area', label: 'Scroll Area', category: 'Layout' },
    { name: 'select', label: 'Select', category: 'Input' },
    { name: 'separator', label: 'Separator', category: 'Layout' },
    { name: 'sheet', label: 'Sheet', category: 'Overlay' },
    { name: 'sidebar', label: 'Sidebar', category: 'Layout' },
    { name: 'skeleton', label: 'Skeleton', category: 'Feedback' },
    { name: 'slider', label: 'Slider', category: 'Input' },
    { name: 'sonner', label: 'Sonner', category: 'Feedback' },
    { name: 'spinner', label: 'Spinner', category: 'Feedback' },
    { name: 'switch', label: 'Switch', category: 'Input' },
    { name: 'table', label: 'Table', category: 'Data Display' },
    { name: 'tabs', label: 'Tabs', category: 'Navigation' },
    { name: 'textarea', label: 'Textarea', category: 'Input' },
    { name: 'toast', label: 'Toast', category: 'Feedback' },
    { name: 'toggle', label: 'Toggle', category: 'Action' },
    { name: 'toggle-group', label: 'Toggle Group', category: 'Action' },
    { name: 'tooltip', label: 'Tooltip', category: 'Overlay' },
    { name: 'typography', label: 'Typography', category: 'Data Display' }
  ];

  const categories = [...new Set(components.map(c => c.category))];
</script>

<div class="py-6 lg:py-10">
  <div class="mb-8">
    <h1 class="mb-2 text-3xl font-bold md:text-4xl">Components</h1>
    <p class="text-lg text-muted-foreground">
      A set of beautifully designed components that you can customize, extend, and build on.
    </p>
  </div>

  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {#each components as component}
      <a
        href="/docs/components/{component.name}"
        class="group rounded-lg border p-4 transition-colors hover:bg-accent"
      >
        <div class="font-semibold group-hover:text-accent-foreground">{component.label}</div>
        <div class="text-sm text-muted-foreground">{component.category}</div>
      </a>
    {/each}
  </div>
</div>
