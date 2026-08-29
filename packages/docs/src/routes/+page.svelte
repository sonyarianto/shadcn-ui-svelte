<script lang="ts">
  import { Button } from '@shadcn-ui-svelte/components';
</script>

<div class="container mx-auto px-4">
  <!-- Hero Section -->
  <section class="py-20 text-center">
    <div class="mx-auto max-w-3xl">
      <div class="mb-4 inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm">
        ✨ New: Svelte 5 with Runes
      </div>
      <h1 class="mb-6 text-5xl font-bold tracking-tight">
        shadcn/ui for <span class="text-primary">Svelte</span>
      </h1>
      <p class="mb-8 text-lg text-muted-foreground">
        Beautifully designed components built with Svelte 5 and Tailwind CSS.
        A 1:1 port of <a href="https://ui.shadcn.com" class="text-primary underline">shadcn/ui</a> for the Svelte ecosystem.
      </p>
      <div class="flex items-center justify-center gap-4">
        <a href="/docs/installation">
          <Button size="lg">Get Started</Button>
        </a>
        <a href="/components">
          <Button variant="outline" size="lg">Components</Button>
        </a>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-16">
    <div class="grid gap-8 md:grid-cols-3">
      <div class="rounded-lg border p-6">
        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary">
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>
          </svg>
        </div>
        <h3 class="mb-2 text-lg font-semibold">Copy & Paste</h3>
        <p class="text-sm text-muted-foreground">
          Own your components. Copy source code directly into your project.
          No black-box dependencies.
        </p>
      </div>
      <div class="rounded-lg border p-6">
        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </div>
        <h3 class="mb-2 text-lg font-semibold">Zero Runtime</h3>
        <p class="text-sm text-muted-foreground">
          No external JavaScript dependencies. Built with native browser APIs
          for maximum performance.
        </p>
      </div>
      <div class="rounded-lg border p-6">
        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3 class="mb-2 text-lg font-semibold">Accessible</h3>
        <p class="text-sm text-muted-foreground">
          Built with ARIA attributes, keyboard navigation, and focus management
          out of the box.
        </p>
      </div>
    </div>
  </section>

  <!-- Component Preview -->
  <section class="py-16">
    <h2 class="mb-8 text-center text-3xl font-bold">Components</h2>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border p-4">
        <div class="mb-4 flex items-center gap-2">
          <Button>Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
        <p class="text-sm text-muted-foreground">6 variants, 6 sizes</p>
      </div>
      <div class="rounded-lg border p-4">
        <div class="mb-4 flex items-center gap-2">
          <div class="inline-flex items-center rounded-md bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">Default</div>
          <div class="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">Secondary</div>
          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold">Outline</div>
        </div>
        <p class="text-sm text-muted-foreground">4 variants</p>
      </div>
      <div class="rounded-lg border p-4">
        <div class="mb-4">
          <input type="text" placeholder="Input..." class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />
        </div>
        <p class="text-sm text-muted-foreground">Text, email, password, number</p>
      </div>
      <div class="rounded-lg border p-4">
        <div class="mb-4 flex items-center gap-2">
          <div class="relative inline-flex h-5 w-9 items-center rounded-full bg-primary">
            <span class="absolute left-1 block h-4 w-4 rounded-full bg-white transition-transform translate-x-4"></span>
          </div>
          <span class="text-sm">Switch</span>
        </div>
        <p class="text-sm text-muted-foreground">Toggle with keyboard support</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-16 text-center">
    <div class="rounded-lg border bg-muted/50 p-12">
      <h2 class="mb-4 text-3xl font-bold">Ready to build?</h2>
      <p class="mb-8 text-muted-foreground">
        Start adding components to your Svelte project today.
      </p>
      <div class="flex justify-center gap-4">
        <code class="rounded-lg bg-background px-4 py-2 text-sm">npx shadcn-ui-svelte init</code>
      </div>
    </div>
  </section>
</div>
