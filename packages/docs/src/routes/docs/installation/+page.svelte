<script lang="ts">
  import { Button } from '@shadcn-ui-svelte/components';
</script>

<div class="container mx-auto px-4 py-12">
  <div class="mx-auto max-w-3xl">
    <h1 class="mb-4 text-4xl font-bold">Installation</h1>
    <p class="mb-8 text-lg text-muted-foreground">
      Get started with shadcn/ui for Svelte in minutes.
    </p>

    <div class="space-y-8">
      <!-- Prerequisites -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Prerequisites</h2>
        <ul class="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Svelte 5 or later</li>
          <li>SvelteKit or Vite</li>
          <li>Tailwind CSS v4</li>
          <li>Node.js 18 or later</li>
        </ul>
      </section>

      <!-- Step 1 -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Step 1: Create project</h2>
        <div class="rounded-lg bg-muted p-4">
          <code class="text-sm">npx sv create my-app</code>
        </div>
      </section>

      <!-- Step 2 -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Step 2: Run init</h2>
        <p class="mb-4 text-muted-foreground">
          This will create a <code>components.json</code> file and set up your project.
        </p>
        <div class="rounded-lg bg-muted p-4">
          <code class="text-sm">npx shadcn-ui-svelte init</code>
        </div>
      </section>

      <!-- Step 3 -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Step 3: Add components</h2>
        <p class="mb-4 text-muted-foreground">
          Add components to your project. They will be copied to your <code>$lib/components/ui</code> directory.
        </p>
        <div class="rounded-lg bg-muted p-4 space-y-2">
          <code class="text-sm block">npx shadcn-ui-svelte add button</code>
          <code class="text-sm block">npx shadcn-ui-svelte add button badge card</code>
          <code class="text-sm block">npx shadcn-ui-svelte add -a  # Add all components</code>
        </div>
      </section>

      <!-- Step 4 -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Step 4: Import and use</h2>
        <div class="rounded-lg bg-muted p-4">
          <code class="text-sm">
{`<script>
  import { Button } from '$lib/components/ui/button';
</script>

<Button>Click me</Button>`}
          </code>
        </div>
      </section>
    </div>
  </div>
</div>
