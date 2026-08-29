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
            Migrating from React
          </h1>
          <p class="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
            Guide for migrating from shadcn/ui (React) to shadcn/ui Svelte.
          </p>
        </div>
      </div>

      <!-- Component Mapping -->
      <div>
        <h2 id="component-mapping" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Component Mapping</h2>
        <p class="mb-4 text-muted-foreground">
          Most components have the same API with minor differences for Svelte idioms.
        </p>
        <div class="rounded-lg border">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="px-4 py-2 text-left font-semibold">React</th>
                <th class="px-4 py-2 text-left font-semibold">Svelte</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">className</code></td>
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">class</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">onClick</code></td>
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">onclick</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">onChange</code></td>
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">onchange</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">useState</code></td>
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">$state</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">useEffect</code></td>
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">$effect</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">useMemo</code></td>
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">$derived</code></td>
              </tr>
              <tr>
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">props</code></td>
                <td class="px-4 py-2"><code class="rounded bg-muted px-1.5 py-0.5">$props</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Props -->
      <div>
        <h2 id="props" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Props</h2>
        <p class="mb-4 text-muted-foreground">
          React uses <code class="rounded bg-muted px-1.5 py-0.5">className</code> and <code class="rounded bg-muted px-1.5 py-0.5">onClick</code>; Svelte uses <code class="rounded bg-muted px-1.5 py-0.5">class</code> and <code class="rounded bg-muted px-1.5 py-0.5">onclick</code>.
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border bg-muted/50 p-4">
            <div class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">React</div>
            <pre class="text-sm overflow-x-auto"><code>{`<Button
  className="my-class"
  onClick={handleClick}
>
  Click me
</Button>`}</code></pre>
          </div>
          <div class="rounded-lg border bg-muted/50 p-4">
            <div class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Svelte</div>
            <pre class="text-sm overflow-x-auto"><code>{`<Button
  class="my-class"
  onclick={handleClick}
>
  Click me
</Button>`}</code></pre>
          </div>
        </div>
      </div>

      <!-- Forms -->
      <div>
        <h2 id="forms" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Forms</h2>
        <p class="mb-4 text-muted-foreground">
          Use <code class="rounded bg-muted px-1.5 py-0.5">$bindable</code> for two-way binding.
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border bg-muted/50 p-4">
            <div class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">React</div>
            <pre class="text-sm overflow-x-auto"><code>{`const [value, setValue] = useState('');

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}</code></pre>
          </div>
          <div class="rounded-lg border bg-muted/50 p-4">
            <div class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Svelte</div>
            <pre class="text-sm overflow-x-auto"><code>{`let value = $state('');

<Input bind:value />`}</code></pre>
          </div>
        </div>
      </div>

      <!-- Styling -->
      <div>
        <h2 id="styling" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Styling</h2>
        <p class="mb-4 text-muted-foreground">
          Both use Tailwind CSS v4. Use <code class="rounded bg-muted px-1.5 py-0.5">cn()</code> utility for conditional classes.
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border bg-muted/50 p-4">
            <div class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">React</div>
            <pre class="text-sm overflow-x-auto"><code>{`import { cn } from "@/lib/utils";

<Button
  className={cn(
    "base-class",
    isActive && "active-class"
  )}
/>`}</code></pre>
          </div>
          <div class="rounded-lg border bg-muted/50 p-4">
            <div class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Svelte</div>
            <pre class="text-sm overflow-x-auto"><code>{`import { cn } from '$lib/utils';

<Button
  class={cn(
    "base-class",
    isActive && "active-class"
  )}
/>`}</code></pre>
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
          <a href="#component-mapping" class="text-sm text-muted-foreground hover:text-foreground">Component Mapping</a>
          <a href="#props" class="text-sm text-muted-foreground hover:text-foreground">Props</a>
          <a href="#forms" class="text-sm text-muted-foreground hover:text-foreground">Forms</a>
          <a href="#styling" class="text-sm text-muted-foreground hover:text-foreground">Styling</a>
        </nav>
      </div>
    </div>
  </div>
</div>
