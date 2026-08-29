<script lang="ts">
  import { Button } from '@shadcn-ui-svelte/components';
</script>

<div class="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px]">
  <div class="flex min-w-0 flex-1 flex-col">
    <div class="h-4 shrink-0"></div>
    <div class="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2">
          <h1 class="scroll-m-24 text-3xl font-semibold tracking-tight sm:text-3xl">
            Theming
          </h1>
          <p class="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
            Customize the look and feel of your components with CSS variables.
          </p>
        </div>
      </div>

      <!-- CSS Variables -->
      <div>
        <h2 id="css-variables" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">CSS Variables</h2>
        <p class="mb-4 text-muted-foreground">
          shadcn/ui uses CSS variables for theming. Define your tokens in your global CSS file.
        </p>
        <div class="rounded-lg border bg-muted/50 p-4">
          <pre class="text-sm whitespace-pre overflow-x-auto"><code>{`:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --muted: oklch(0.97 0 0);
  --accent: oklch(0.97 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}`}</code></pre>
        </div>
      </div>

      <!-- Dark Mode -->
      <div>
        <h2 id="dark-mode" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Dark Mode</h2>
        <p class="mb-4 text-muted-foreground">
          Add a <code class="rounded bg-muted px-1.5 py-0.5 text-sm">.dark</code> class to your <code class="rounded bg-muted px-1.5 py-0.5 text-sm">&lt;html&gt;</code> element to enable dark mode.
        </p>
        <div class="rounded-lg border bg-muted/50 p-4">
          <pre class="text-sm whitespace-pre overflow-x-auto"><code>{`.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
}`}</code></pre>
        </div>
      </div>

      <!-- Custom Colors -->
      <div>
        <h2 id="custom-colors" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Custom Colors</h2>
        <p class="mb-4 text-muted-foreground">
          Add your own custom colors by extending the CSS variables.
        </p>
        <div class="rounded-lg border bg-muted/50 p-4">
          <pre class="text-sm whitespace-pre overflow-x-auto"><code>{`:root {
  --warning: oklch(0.84 0.16 84);
  --warning-foreground: oklch(0.26 0.1 56);
}

@theme inline {
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}`}</code></pre>
        </div>
      </div>

      <!-- Preview -->
      <div>
        <h2 id="preview" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Preview</h2>
        <div class="rounded-lg border p-6">
          <div class="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Right sidebar (TOC) -->
  <div class="sticky top-14 z-30 ml-auto hidden h-[90svh] w-56 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex lg:top-16">
    <div class="h-4 shrink-0"></div>
    <div class="flex flex-col gap-4 overflow-y-auto px-6">
      <div>
        <h4 class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On This Page</h4>
        <nav class="flex flex-col gap-1.5">
          <a href="#css-variables" class="text-sm text-muted-foreground hover:text-foreground">CSS Variables</a>
          <a href="#dark-mode" class="text-sm text-muted-foreground hover:text-foreground">Dark Mode</a>
          <a href="#custom-colors" class="text-sm text-muted-foreground hover:text-foreground">Custom Colors</a>
          <a href="#preview" class="text-sm text-muted-foreground hover:text-foreground">Preview</a>
        </nav>
      </div>
    </div>
  </div>
</div>
