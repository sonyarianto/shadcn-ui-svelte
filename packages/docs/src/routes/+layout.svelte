<script lang="ts">
  import type { Snippet } from 'svelte';
  import '../shadcn.css';
  import { page } from '$app/stores';

  let { children } = $props();

  let isDark = $state(false);
  let isMobileMenuOpen = $state(false);

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
  }

  const navItems = [
    { href: '/docs/installation', label: 'Docs' },
    { href: '/docs/components', label: 'Components' },
    { href: '/docs/components', label: 'Blocks' },
    { href: '/docs/components', label: 'Charts' },
    { href: '/docs/components', label: 'Directory' },
    { href: '/docs/components', label: 'Typeset' }
  ];
</script>

<svelte:head>
  <title>shadcn/ui Svelte</title>
  <meta name="description" content="Beautifully designed components built with Svelte 5 and Tailwind CSS." />
  <meta name="theme-color" content="#ffffff" />
</svelte:head>

<div class="min-h-svh bg-background font-sans text-foreground antialiased" style="--header-height: 3.5rem;">
  <header class="sticky top-0 z-50 w-full bg-background" style="height: var(--header-height);">
    <div class="mx-auto flex h-full w-full max-w-[1400px] items-center px-4 lg:px-8">
      <nav class="hidden items-center gap-1 text-sm lg:flex">
        <a href="/" class="mr-6 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <circle cx="12" cy="12" r="10"/>
            <path d="m15 9-6 6"/>
            <path d="m9 9 6 6"/>
          </svg>
          <span class="font-bold">shadcn/ui</span>
        </a>
        {#each navItems as item}
          <a
            href={item.href}
            class="inline-flex h-8 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground {$page.url.pathname.startsWith(item.href) ? 'text-foreground' : 'text-foreground/60'}"
          >
            {item.label}
          </a>
        {/each}
      </nav>

      <div class="ml-auto flex items-center gap-1">
        <a
          href="https://github.com/sonyarianto/shadcn-ui-svelte"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-foreground/60"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
          GitHub
        </a>

        <div class="ml-2 hidden h-4 w-px bg-border lg:block"></div>

        <button
          onclick={toggleTheme}
          class="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label="Toggle theme"
        >
          {#if isDark}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          {/if}
        </button>

        <button
          onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
          class="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  </header>

  {@render children()}
</div>
