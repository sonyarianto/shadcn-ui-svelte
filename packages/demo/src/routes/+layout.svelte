<script lang="ts">
  import '../shadcn.css';
  import { page } from '$app/stores';

  let { children } = $props();

  let isDark = $state(false);

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
  }

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

<div class="min-h-screen bg-background text-foreground">
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto flex h-14 items-center px-4">
      <a href="/" class="mr-6 flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <circle cx="12" cy="12" r="10"/>
          <path d="m15 9-6 6"/>
          <path d="m9 9 6 6"/>
        </svg>
        <span class="font-bold">shadcn/ui Svelte</span>
      </a>
      <nav class="flex items-center gap-6 text-sm">
        <a href="/" class="transition-colors hover:text-foreground/80 {$page.url.pathname === '/' ? 'text-foreground' : 'text-foreground/60'}">Home</a>
        <a href="/components" class="transition-colors hover:text-foreground/80 {$page.url.pathname.startsWith('/components') ? 'text-foreground' : 'text-foreground/60'}">Components</a>
      </nav>
      <div class="ml-auto flex items-center gap-2">
        <a
          href="https://github.com/sonyarianto/shadcn-ui-svelte"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
        </a>
        <button
          onclick={toggleTheme}
          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
        >
          {#if isDark}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2"/>
              <path d="M12 20v2"/>
              <path d="m4.93 4.93 1.41 1.41"/>
              <path d="m17.66 17.66 1.41 1.41"/>
              <path d="M2 12h2"/>
              <path d="M20 12h2"/>
              <path d="m6.34 17.66-1.41 1.41"/>
              <path d="m19.07 4.93-1.41 1.41"/>
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </header>

  <main>
    {@render children()}
  </main>
</div>
