<script lang="ts">
  import { goto } from '$app/navigation';

  let query = $state('');
  let isOpen = $state(false);

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
    { name: 'data-table', label: 'Data Table', category: 'Data Display' },
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
    { name: 'resizable', label: 'Resizable', category: 'Layout' },
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

  const pages = [
    { href: '/docs/installation', label: 'Installation', category: 'Getting Started' },
    { href: '/docs/theming', label: 'Theming', category: 'Getting Started' },
    { href: '/components', label: 'Components', category: 'Getting Started' }
  ];

  const filteredResults = $derived(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    const componentResults = components.filter(c =>
      c.label.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
    ).map(c => ({ ...c, href: `/components/${c.name}`, type: 'component' }));

    const pageResults = pages.filter(p =>
      p.label.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    ).map(p => ({ ...p, type: 'page' }));

    return [...pageResults, ...componentResults].slice(0, 8);
  });

  function handleSelect(href: string) {
    isOpen = false;
    query = '';
    goto(href);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      isOpen = false;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="relative">
  <button
    class="inline-flex h-9 w-64 items-center rounded-md border border-input bg-background px-3 text-sm text-muted-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
    onclick={() => isOpen = !isOpen}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4 shrink-0 opacity-50">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
    Search components...
    <kbd class="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
      <span class="text-xs">⌘</span>K
    </kbd>
  </button>

  {#if isOpen}
    <div class="fixed inset-0 z-50 bg-black/50" onclick={() => isOpen = false}></div>
    <div class="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-4 shadow-lg">
      <div class="flex items-center border-b pb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4 shrink-0 opacity-50">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
        <input
          bind:value={query}
          type="text"
          placeholder="Search components..."
          class="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          autofocus
        />
      </div>

      {#if filteredResults().length > 0}
        <div class="mt-2 max-h-64 overflow-y-auto">
          {#each filteredResults() as result}
            <button
              class="flex w-full items-center rounded-md px-3 py-2 text-sm hover:bg-accent"
              onclick={() => handleSelect(result.href)}
            >
              <span class="font-medium">{result.label}</span>
              <span class="ml-auto text-xs text-muted-foreground">{result.category}</span>
            </button>
          {/each}
        </div>
      {:else if query}
        <div class="mt-4 py-8 text-center text-sm text-muted-foreground">
          No results found.
        </div>
      {/if}
    </div>
  {/if}
</div>
