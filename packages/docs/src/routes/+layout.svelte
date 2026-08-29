<script lang="ts">
  import type { Snippet } from 'svelte';
  import '../shadcn.css';
  import { page } from '$app/stores';
  import { Button } from '@shadcn-ui-svelte/components';

  let { children } = $props();

  let isDark = $state(false);
  let isMobileMenuOpen = $state(false);
  let starsCount = $state('122k');

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle('dark', isDark);
  }

  $effect(() => {
    fetch('https://api.github.com/repos/shadcn-ui/ui')
      .then(r => r.json())
      .then(data => {
        if (data.stargazers_count >= 1000) {
          starsCount = `${Math.round(data.stargazers_count / 1000)}k`;
        } else {
          starsCount = data.stargazers_count?.toLocaleString() || '122k';
        }
      })
      .catch(() => {});
  });

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
  <title>The Foundation for your Design System - shadcn/ui</title>
  <meta name="description" content="A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code." />
  <meta name="theme-color" content="#ffffff" />
  <script>
    (function() {
      try {
        if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
          document.querySelector('meta[name="theme-color"]').setAttribute('content', '#09090b');
        }
      } catch (_) {}
    })();
  </script>
</svelte:head>

<div class="min-h-svh bg-background font-sans text-foreground antialiased">
  <header class="sticky top-0 z-50 w-full bg-background" style="height: var(--header-height);">
    <div class="container-wrapper px-6">
      <div class="flex h-(--header-height) items-center">
        <!-- Mobile nav -->
        <button
          onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
          class="inline-flex h-8 items-center justify-start gap-2.5 p-0 text-sm font-medium transition-colors hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent lg:hidden"
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
              data-active={isActive(item.href)}
              class="relative inline-flex h-8 items-center justify-center rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground {isActive(item.href) ? 'text-foreground' : 'text-foreground/60'}"
            >
              {item.label}
            </a>
          {/each}
        </nav>

        <div class="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <!-- Search placeholder -->
          <div class="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
            <button class="relative inline-flex h-8 w-full items-center justify-start rounded-lg border-none bg-muted pl-3 text-sm text-foreground shadow-none transition-colors hover:bg-muted/50 dark:bg-card md:w-48 lg:w-40 xl:w-64">
              <span class="hidden xl:inline-flex">Search documentation...</span>
              <span class="inline-flex xl:hidden">Search...</span>
            </button>
          </div>

          <div class="h-4 w-px bg-border ml-2 hidden lg:block"></div>

          <!-- GitHub link -->
          <a
            href="https://github.com/sonyarianto/shadcn-ui-svelte"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-8 items-center justify-center gap-1 rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <svg viewBox="0 0 438.549 438.549" class="size-4">
              <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"/>
            </svg>
            <span class="w-fit text-xs text-muted-foreground tabular-nums">{starsCount}</span>
          </a>

          <div class="h-4 w-px bg-border ml-2 hidden lg:block"></div>

          <!-- Theme toggle -->
          <button
            onclick={toggleTheme}
            class="group/toggle inline-flex size-8 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Toggle theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4.5">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 3l0 18" />
              <path d="M12 9l4.65 -4.65" />
              <path d="M12 14.3l7.37 -7.37" />
              <path d="M12 19.6l8.85 -8.85" />
            </svg>
          </button>

          <div class="flex items-center gap-2">
            <div class="h-4 w-px bg-border hidden lg:block"></div>

            <!-- New button -->
            <a
              href="/create"
              class="inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-primary px-2.5 text-[0.8rem] font-medium text-primary-foreground transition-colors hover:bg-primary/80 h-[31px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              New
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile menu overlay -->
  {#if isMobileMenuOpen}
    <div class="fixed inset-0 z-40 bg-background/90 backdrop-blur-lg lg:hidden" role="button" tabindex="-1" onclick={() => isMobileMenuOpen = false} onkeydown={(e) => { if (e.key === 'Escape') isMobileMenuOpen = false; }}>
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
