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
            Introduction
          </h1>
          <p class="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
            A set of beautifully-designed, accessible components and a code distribution platform.
            Works with your favorite frameworks and AI models. Open Source. Open Code.
          </p>
        </div>
      </div>

      <!-- Content -->
      <div class="w-full flex-1 pb-16 sm:pb-0">
        <div class="mb-6 rounded-lg border border-yellow-500/50 bg-yellow-500/10 p-4">
          <p class="text-sm font-medium">This is not a component library. It is how you build your component library.</p>
        </div>

        <p class="mb-6 text-muted-foreground">
          You know how most traditional component libraries work: you install a package from NPM, import the components, and use them in your app.
        </p>

        <p class="mb-6 text-muted-foreground">
          This approach works well until you need to customize a component to fit your design system or require one that isn't included in the library.
          <strong>Often, you end up wrapping library components, writing workarounds to override styles, or mixing components from different libraries with incompatible APIs.</strong>
        </p>

        <p class="mb-6 text-muted-foreground">
          This is what shadcn/ui aims to solve. It is built around the following principles:
        </p>

        <h2 id="open-code" class="mb-4 mt-8 scroll-m-24 text-2xl font-semibold tracking-tight">Open Code</h2>
        <p class="mb-6 text-muted-foreground">
          The top layer of your component code is open for modification. shadcn/ui hands you the actual component code. You have full control to customize and extend the components to your needs.
        </p>

        <h2 id="composition" class="mb-4 mt-8 scroll-m-24 text-2xl font-semibold tracking-tight">Composition</h2>
        <p class="mb-6 text-muted-foreground">
          Every component in shadcn/ui shares a common, composable interface. If a component does not exist, we bring it in and make it composable. The composition model is consistent and predictable.
        </p>

        <h2 id="distribution" class="mb-4 mt-8 scroll-m-24 text-2xl font-semibold tracking-tight">Distribution</h2>
        <p class="mb-6 text-muted-foreground">
          shadcn/ui is also a code distribution system. It defines a flat-file schema for components and a CLI to distribute them. Use it to distribute components to your team, or publish them to the world.
        </p>

        <h2 id="beautiful-defaults" class="mb-4 mt-8 scroll-m-24 text-2xl font-semibold tracking-tight">Beautiful Defaults</h2>
        <p class="mb-6 text-muted-foreground">
          Carefully chosen default styles, so you get great design out-of-the-box. Just copy and paste into your apps and customize to your heart's content.
        </p>

        <h2 id="ai-ready" class="mb-4 mt-8 scroll-m-24 text-2xl font-semibold tracking-tight">AI-Ready</h2>
        <p class="mb-6 text-muted-foreground">
          The design of shadcn/ui makes it easy for AI tools to work with your code. Its open code and consistent API allow AI models to read, understand, and even generate new components.
        </p>

        <div class="mt-8 flex gap-4">
          <a href="/docs/installation">
            <Button>Get Started</Button>
          </a>
          <a href="/docs/components">
            <Button variant="outline">Browse Components</Button>
          </a>
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
          <a href="#open-code" class="text-sm text-muted-foreground hover:text-foreground">Open Code</a>
          <a href="#composition" class="text-sm text-muted-foreground hover:text-foreground">Composition</a>
          <a href="#distribution" class="text-sm text-muted-foreground hover:text-foreground">Distribution</a>
          <a href="#beautiful-defaults" class="text-sm text-muted-foreground hover:text-foreground">Beautiful Defaults</a>
          <a href="#ai-ready" class="text-sm text-muted-foreground hover:text-foreground">AI-Ready</a>
        </nav>
      </div>
    </div>
  </div>
</div>
