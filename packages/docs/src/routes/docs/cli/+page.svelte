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
            CLI
          </h1>
          <p class="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
            Use the CLI to add components to your project.
          </p>
        </div>
      </div>

      <!-- Init -->
      <div>
        <h2 id="init" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">init</h2>
        <p class="mb-4 text-muted-foreground">
          Initializes your project by creating a <code class="rounded bg-muted px-1.5 py-0.5">components.json</code> file.
        </p>
        <div class="rounded-lg border bg-muted/50 p-4">
          <code class="text-sm">npx shadcn-ui-svelte init</code>
        </div>
      </div>

      <!-- Add -->
      <div>
        <h2 id="add" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">add</h2>
        <p class="mb-4 text-muted-foreground">
          Adds a component to your project.
        </p>
        <div class="rounded-lg border bg-muted/50 p-4 space-y-2">
          <code class="text-sm block">npx shadcn-ui-svelte add button</code>
          <code class="text-sm block">npx shadcn-ui-svelte add button badge card</code>
          <code class="text-sm block">npx shadcn-ui-svelte add -a  # Add all components</code>
        </div>
      </div>

      <!-- List -->
      <div>
        <h2 id="list" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">list</h2>
        <p class="mb-4 text-muted-foreground">
          Lists all available components.
        </p>
        <div class="rounded-lg border bg-muted/50 p-4">
          <code class="text-sm">npx shadcn-ui-svelte list</code>
        </div>
      </div>

      <!-- Build -->
      <div>
        <h2 id="build" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">build</h2>
        <p class="mb-4 text-muted-foreground">
          Builds the component registry from your components.
        </p>
        <div class="rounded-lg border bg-muted/50 p-4">
          <code class="text-sm">npx shadcn-ui-svelte build</code>
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
          <a href="#init" class="text-sm text-muted-foreground hover:text-foreground">init</a>
          <a href="#add" class="text-sm text-muted-foreground hover:text-foreground">add</a>
          <a href="#list" class="text-sm text-muted-foreground hover:text-foreground">list</a>
          <a href="#build" class="text-sm text-muted-foreground hover:text-foreground">build</a>
        </nav>
      </div>
    </div>
  </div>
</div>
