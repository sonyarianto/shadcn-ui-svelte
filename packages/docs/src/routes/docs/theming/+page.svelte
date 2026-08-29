<script lang="ts">
  import { Button } from '@shadcn-ui-svelte/components';
</script>

<div class="container mx-auto px-4 py-12">
  <div class="mx-auto max-w-3xl">
    <h1 class="mb-4 text-4xl font-bold">Theming</h1>
    <p class="mb-8 text-lg text-muted-foreground">
      Customize the look and feel of your components with CSS variables.
    </p>

    <div class="space-y-8">
      <!-- CSS Variables -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">CSS Variables</h2>
        <p class="mb-4 text-muted-foreground">
          shadcn/ui uses CSS variables for theming. Define your tokens in your global CSS file.
        </p>
        <div class="rounded-lg bg-muted p-4">
          <code class="text-sm whitespace-pre">
{`:root {
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
}`}
          </code>
        </div>
      </section>

      <!-- Dark Mode -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Dark Mode</h2>
        <p class="mb-4 text-muted-foreground">
          Add a <code>.dark</code> class to your <code>&lt;html&gt;</code> element to enable dark mode.
        </p>
        <div class="rounded-lg bg-muted p-4">
          <code class="text-sm whitespace-pre">
{`.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
}`}
          </code>
        </div>
      </section>

      <!-- Base Colors -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Base Colors</h2>
        <p class="mb-4 text-muted-foreground">
          Choose from pre-defined color palettes or create your own.
        </p>
        <div class="grid gap-4 md:grid-cols-3">
          <div class="rounded-lg border p-4">
            <div class="mb-2 font-semibold">Neutral</div>
            <div class="flex gap-1">
              <div class="h-8 w-8 rounded bg-neutral-100"></div>
              <div class="h-8 w-8 rounded bg-neutral-500"></div>
              <div class="h-8 w-8 rounded bg-neutral-900"></div>
            </div>
          </div>
          <div class="rounded-lg border p-4">
            <div class="mb-2 font-semibold">Slate</div>
            <div class="flex gap-1">
              <div class="h-8 w-8 rounded bg-slate-100"></div>
              <div class="h-8 w-8 rounded bg-slate-500"></div>
              <div class="h-8 w-8 rounded bg-slate-900"></div>
            </div>
          </div>
          <div class="rounded-lg border p-4">
            <div class="mb-2 font-semibold">Stone</div>
            <div class="flex gap-1">
              <div class="h-8 w-8 rounded bg-stone-100"></div>
              <div class="h-8 w-8 rounded bg-stone-500"></div>
              <div class="h-8 w-8 rounded bg-stone-900"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom Colors -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Custom Colors</h2>
        <p class="mb-4 text-muted-foreground">
          Add your own custom colors by extending the CSS variables.
        </p>
        <div class="rounded-lg bg-muted p-4">
          <code class="text-sm whitespace-pre">
{`:root {
  --warning: oklch(0.84 0.16 84);
  --warning-foreground: oklch(0.26 0.1 56);
}

@theme inline {
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}`}
          </code>
        </div>
      </section>

      <!-- Preview -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Preview</h2>
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
      </section>
    </div>
  </div>
</div>
