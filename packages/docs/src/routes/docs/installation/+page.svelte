<script lang="ts">
</script>

<div class="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px]">
  <div class="flex min-w-0 flex-1 flex-col">
    <div class="h-4 shrink-0"></div>
    <div class="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2">
          <h1 class="scroll-m-24 text-3xl font-semibold tracking-tight sm:text-3xl">
            Installation
          </h1>
          <p class="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
            Get started with shadcn/ui for Svelte in minutes.
          </p>
        </div>
      </div>

      <!-- Prerequisites -->
      <div>
        <h2 id="prerequisites" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Prerequisites</h2>
        <ul class="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Svelte 5 or later</li>
          <li>SvelteKit or Vite</li>
          <li>Tailwind CSS v4</li>
          <li>Node.js 18 or later</li>
        </ul>
      </div>

      <!-- Step 1 -->
      <div>
        <h2 id="create-project" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Step 1: Create project</h2>
        <div class="rounded-lg border bg-muted/50 p-4">
          <code class="text-sm">npx sv create my-app</code>
        </div>
      </div>

      <!-- Step 2 -->
      <div>
        <h2 id="run-init" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Step 2: Run init</h2>
        <p class="mb-4 text-muted-foreground">
          This will create a <code class="rounded bg-muted px-1.5 py-0.5 text-sm">components.json</code> file and set up your project.
        </p>
        <div class="rounded-lg border bg-muted/50 p-4">
          <code class="text-sm">npx shadcn-ui-svelte init</code>
        </div>
      </div>

      <!-- Step 3 -->
      <div>
        <h2 id="add-components" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Step 3: Add components</h2>
        <p class="mb-4 text-muted-foreground">
          Add components to your project. They will be copied to your <code class="rounded bg-muted px-1.5 py-0.5 text-sm">$lib/components/ui</code> directory.
        </p>
        <div class="rounded-lg border bg-muted/50 p-4 space-y-2">
          <code class="text-sm block">npx shadcn-ui-svelte add button</code>
          <code class="text-sm block">npx shadcn-ui-svelte add button badge card</code>
          <code class="text-sm block">npx shadcn-ui-svelte add -a</code>
        </div>
      </div>

      <!-- Step 4 -->
      <div>
        <h2 id="import-and-use" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Step 4: Import and use</h2>
        <div class="rounded-lg border bg-muted/50 p-4">
          <pre class="text-sm overflow-x-auto"><code>{`<script>
  import { Button } from '$lib/components/ui/button';
</script>

<Button>Click me</Button>`}</code></pre>
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
          <a href="#prerequisites" class="text-sm text-muted-foreground hover:text-foreground">Prerequisites</a>
          <a href="#create-project" class="text-sm text-muted-foreground hover:text-foreground">Create Project</a>
          <a href="#run-init" class="text-sm text-muted-foreground hover:text-foreground">Run Init</a>
          <a href="#add-components" class="text-sm text-muted-foreground hover:text-foreground">Add Components</a>
          <a href="#import-and-use" class="text-sm text-muted-foreground hover:text-foreground">Import and Use</a>
        </nav>
      </div>
    </div>
  </div>
</div>
