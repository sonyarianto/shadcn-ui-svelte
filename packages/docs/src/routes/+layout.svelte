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
    { href: '/', label: 'Home' },
    { href: '/docs/installation', label: 'Docs' },
    { href: '/docs/components', label: 'Components' },
    { href: '/blocks', label: 'Blocks' },
    { href: '/charts', label: 'Charts' },
    { href: '/docs/directory', label: 'Directory' },
    { href: '/typeset', label: 'Typeset' },
    { href: '/create', label: 'Create' }
  ];

  function isActive(href: string): boolean {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  }
</script>

<svelte:head>
  <title>shadcn/ui Svelte</title>
  <meta name="description" content="Beautifully designed components built with Svelte 5 and Tailwind CSS." />
  <meta name="theme-color" content="#ffffff" />
</svelte:head>

<div class="min-h-svh bg-background font-sans text-foreground antialiased" style="--header-height: calc(var(--spacing) * 14);">
  <header class="sticky top-0 z-50 w-full bg-background" style="height: var(--header-height);">
    <div class="mx-auto flex h-full w-full max-w-[1400px] items-center px-4 lg:px-8">
      <!-- Mobile nav -->
      <button
        onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
        class="inline-flex h-8 items-center justify-start gap-2.5 p-0 text-sm font-medium transition-colors hover:bg-transparent lg:hidden"
        aria-label="Toggle menu"
      >
        <div class="relative flex h-8 w-4 items-center justify-center">
          <div class="relative size-4">
            <span class="absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100 {isMobileMenuOpen ? 'top-[0.4rem] -rotate-45' : 'top-1'}"></span>
            <span class="absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100 {isMobileMenuOpen ? 'top-[0.4rem] rotate-45' : 'top-2.5'}"></span>
          </div>
          <span class="sr-only">Toggle Menu</span>
        </div>
        <span class="flex h-8 items-center text-lg leading-none font-medium">Menu</span>
      </button>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-0 lg:flex">
        {#each navItems as item}
          <a
            href={item.href}
            class="inline-flex h-8 items-center rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground {isActive(item.href) ? 'text-foreground' : 'text-foreground/60'}"
          >
            {item.label}
          </a>
        {/each}
      </nav>

      <div class="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
        <!-- Search placeholder -->
        <div class="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
          <button class="inline-flex h-8 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            Search documentation...
            <kbd class="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
              <span class="text-xs">Ctrl</span>
            </kbd>
          </button>
        </div>

        <div class="h-4 w-px bg-border hidden lg:block ml-2"></div>

        <!-- GitHub link -->
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
          <span class="w-fit text-xs text-muted-foreground tabular-nums">122k</span>
        </a>

        <div class="h-4 w-px bg-border hidden lg:block ml-2"></div>

        <!-- Theme toggle -->
        <button
          onclick={toggleTheme}
          class="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label="Toggle theme"
        >
          {#if isDark}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4.5">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4.5">
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
          {/if}
        </button>

        <div class="h-4 w-px bg-border hidden lg:block"></div>

        <!-- New button -->
        <a
          href="/create"
          class="inline-flex h-8 items-center justify-center gap-1 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          New
        </a>
      </div>
    </div>
  </header>

  <!-- Mobile menu overlay -->
  {#if isMobileMenuOpen}
    <div class="fixed inset-0 z-40 bg-background/90 backdrop-blur lg:hidden" role="button" tabindex="-1" onclick={() => isMobileMenuOpen = false} onkeydown={(e) => { if (e.key === 'Escape') isMobileMenuOpen = false; }}>
      <nav class="container mx-auto flex flex-col gap-12 overflow-auto px-6 py-6">
        <div class="flex flex-col gap-4">
          <p class="text-sm font-medium text-muted-foreground">Menu</p>
          <div class="flex flex-col gap-3">
            {#each navItems as item}
              <a
                href={item.href}
                class="flex items-center gap-2 text-2xl font-medium"
                onclick={() => isMobileMenuOpen = false}
              >
                {item.label}
              </a>
            {/each}
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <p class="text-sm font-medium text-muted-foreground">Sections</p>
          <div class="flex flex-col gap-3">
            {#each [{ name: 'Introduction', href: '/docs' }, { name: 'Components', href: '/docs/components' }, { name: 'Installation', href: '/docs/installation' }, { name: 'Theming', href: '/docs/theming' }, { name: 'CLI', href: '/docs/cli' }, { name: 'Changelog', href: '/docs/changelog' }] as section}
              <a
                href={section.href}
                class="flex items-center gap-2 text-2xl font-medium"
                onclick={() => isMobileMenuOpen = false}
              >
                {section.name}
              </a>
            {/each}
          </div>
        </div>
      </nav>
    </div>
  {/if}

  {@render children()}
</div>
