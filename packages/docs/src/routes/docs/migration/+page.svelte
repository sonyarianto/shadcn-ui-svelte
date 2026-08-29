<script lang="ts">
  import Search from '$lib/components/search.svelte';
</script>

<div class="container mx-auto px-4 py-12">
  <div class="mx-auto max-w-3xl">
    <h1 class="mb-4 text-4xl font-bold">Migrating from React</h1>
    <p class="mb-8 text-lg text-muted-foreground">
      Guide for migrating from shadcn/ui (React) to shadcn/ui Svelte.
    </p>

    <div class="space-y-8">
      <!-- Component Mapping -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Component Mapping</h2>
        <p class="mb-4 text-muted-foreground">
          Most components have the same API with minor differences for Svelte idioms.
        </p>
        <div class="rounded-lg border">
          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="px-4 py-2 text-left font-semibold">React</th>
                <th class="px-4 py-2 text-left font-semibold">Svelte</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-4 py-2"><code>className</code></td>
                <td class="px-4 py-2"><code>class</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>onClick</code></td>
                <td class="px-4 py-2"><code>onclick</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>onChange</code></td>
                <td class="px-4 py-2"><code>onchange</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>children</code> (ReactNode)</td>
                <td class="px-4 py-2"><code>{'{'}children{'}'}</code> (Snippet)</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>forwardRef</code></td>
                <td class="px-4 py-2">Not needed (Svelte handles refs)</td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>useState</code></td>
                <td class="px-4 py-2"><code>$state</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>useEffect</code></td>
                <td class="px-4 py-2"><code>$effect</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>useMemo</code></td>
                <td class="px-4 py-2"><code>$derived</code></td>
              </tr>
              <tr class="border-b">
                <td class="px-4 py-2"><code>props</code></td>
                <td class="px-4 py-2"><code>$props</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Props -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Props</h2>
        <p class="mb-4 text-muted-foreground">
          React uses <code>className</code> and <code>onClick</code>; Svelte uses <code>class</code> and <code>onclick</code>.
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg bg-muted p-4">
            <div class="mb-2 font-semibold">React</div>
            <code class="text-sm">
{`<Button
  className="my-class"
  onClick={handleClick}
>
  Click me
</Button>`}
            </code>
          </div>
          <div class="rounded-lg bg-muted p-4">
            <div class="mb-2 font-semibold">Svelte</div>
            <code class="text-sm">
{`<Button
  class="my-class"
  onclick={handleClick}
>
  Click me
</Button>`}
            </code>
          </div>
        </div>
      </section>

      <!-- Children -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Children</h2>
        <p class="mb-4 text-muted-foreground">
          React uses <code>children</code> prop; Svelte uses <code>{'{'}children{'}'}</code> snippets.
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg bg-muted p-4">
            <div class="mb-2 font-semibold">React</div>
            <code class="text-sm">
{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>`}
            </code>
          </div>
          <div class="rounded-lg bg-muted p-4">
            <div class="mb-2 font-semibold">Svelte</div>
            <code class="text-sm">
{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>`}
            </code>
          </div>
        </div>
      </section>

      <!-- Forms -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Forms</h2>
        <p class="mb-4 text-muted-foreground">
          Use <code>$bindable</code> for two-way binding.
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg bg-muted p-4">
            <div class="mb-2 font-semibold">React</div>
            <code class="text-sm">
{`const [value, setValue] = useState('');

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
            </code>
          </div>
          <div class="rounded-lg bg-muted p-4">
            <div class="mb-2 font-semibold">Svelte</div>
            <code class="text-sm">
{`let value = $state('');

<Input bind:value />`}
            </code>
          </div>
        </div>
      </section>

      <!-- Styling -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Styling</h2>
        <p class="mb-4 text-muted-foreground">
          Both use Tailwind CSS v4. Use <code>cn()</code> utility for conditional classes.
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg bg-muted p-4">
            <div class="mb-2 font-semibold">React</div>
            <code class="text-sm">
{`import { cn } from "@/lib/utils";

<Button
  className={cn(
    "base-class",
    isActive && "active-class"
  )}
/>`}
            </code>
          </div>
          <div class="rounded-lg bg-muted p-4">
            <div class="mb-2 font-semibold">Svelte</div>
            <code class="text-sm">
{`import { cn } from '$lib/utils';

<Button
  class={cn(
    "base-class",
    isActive && "active-class"
  )}
/>`}
            </code>
          </div>
        </div>
      </section>

      <!-- Component Imports -->
      <section>
        <h2 class="mb-4 text-2xl font-semibold">Component Imports</h2>
        <p class="mb-4 text-muted-foreground">
          Import components from the components package.
        </p>
        <div class="rounded-lg bg-muted p-4">
          <code class="text-sm">
{`// React
import { Button } from "@/components/ui/button";

// Svelte
import { Button } from '@shadcn-ui-svelte/components';
// or locally:
import { Button } from '$lib/components/ui/button';`}
          </code>
        </div>
      </section>
    </div>
  </div>
</div>
