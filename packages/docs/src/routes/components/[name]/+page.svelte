<script lang="ts">
  import { page } from '$app/stores';
  import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, Textarea, Label, Separator, Switch, Checkbox, Alert, AlertTitle, AlertDescription, Progress, Skeleton, Tabs, TabsList, TabsTrigger, TabsContent, Select, Dialog, Popover, Tooltip, Accordion } from '@shadcn-ui-svelte/components';

  const $componentName = $derived($page.params.name);

  const componentData: Record<string, { title: string; description: string; usage: string; examples: Array<{ name: string; code: string }> }> = {
    button: {
      title: 'Button',
      description: 'Displays a button or a component that looks like a button.',
      usage: `import { Button } from '$lib/components/ui/button';`,
      examples: [
        {
          name: 'Default',
          code: `<Button>Button</Button>`
        },
        {
          name: 'Variants',
          code: `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`
        },
        {
          name: 'Sizes',
          code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <svg>...</svg>
</Button>`
        }
      ]
    },
    badge: {
      title: 'Badge',
      description: 'Displays a badge or a component that looks like a badge.',
      usage: `import { Badge } from '$lib/components/ui/badge';`,
      examples: [
        {
          name: 'Default',
          code: `<Badge>Badge</Badge>`
        },
        {
          name: 'Variants',
          code: `<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`
        }
      ]
    },
    input: {
      title: 'Input',
      description: 'Displays a form input field or a component that looks like an input field.',
      usage: `import { Input } from '$lib/components/ui/input';`,
      examples: [
        {
          name: 'Default',
          code: `<Input type="text" placeholder="Enter text..." />`
        },
        {
          name: 'With Label',
          code: `<div class="space-y-2">
  <Label for="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter email..." />
</div>`
        }
      ]
    },
    card: {
      title: 'Card',
      description: 'Displays a card with header, content, and footer.',
      usage: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '$lib/components/ui/card';`,
      examples: [
        {
          name: 'Default',
          code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`
        }
      ]
    },
    dialog: {
      title: 'Dialog',
      description: 'A window overlaid on the primary content.',
      usage: `import { Dialog } from '$lib/components/ui/dialog';`,
      examples: [
        {
          name: 'Default',
          code: `<Dialog bind:open={open}>
  <Button onclick={() => open = true}>Open</Button>
  {#if open}
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Are you sure?</Dialog.Title>
        <Dialog.Description>This action cannot be undone.</Dialog.Description>
      </Dialog.Header>
      <Dialog.Footer>
        <Button variant="outline" onclick={() => open = false}>Cancel</Button>
        <Button onclick={() => open = false}>Continue</Button>
      </Dialog.Footer>
    </Dialog.Content>
  {/if}
</Dialog>`
        }
      ]
    }
  };

  const data = $derived(componentData[$componentName] || {
    title: $componentName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: `A ${$componentName} component for Svelte.`,
    usage: `import { ${$componentName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')} } from '$lib/components/ui/${$componentName}';`,
    examples: []
  });
</script>

<div class="container mx-auto px-4 py-12">
  <div class="mx-auto max-w-4xl">
    <div class="mb-8">
      <div class="mb-2 text-sm text-muted-foreground">Components</div>
      <h1 class="mb-4 text-4xl font-bold">{data.title}</h1>
      <p class="text-lg text-muted-foreground">{data.description}</p>
    </div>

    <!-- Installation -->
    <section class="mb-12">
      <h2 class="mb-4 text-2xl font-semibold">Installation</h2>
      <div class="rounded-lg bg-muted p-4">
        <code class="text-sm">npx shadcn-ui-svelte add {$componentName}</code>
      </div>
    </section>

    <!-- Usage -->
    <section class="mb-12">
      <h2 class="mb-4 text-2xl font-semibold">Usage</h2>
      <div class="rounded-lg bg-muted p-4">
        <code class="text-sm">{data.usage}</code>
      </div>
    </section>

    <!-- Examples -->
    {#if data.examples.length > 0}
      <section class="mb-12">
        <h2 class="mb-4 text-2xl font-semibold">Examples</h2>
        <div class="space-y-8">
          {#each data.examples as example}
            <div class="rounded-lg border">
              <div class="border-b px-4 py-2">
                <h3 class="font-semibold">{example.name}</h3>
              </div>
              <div class="p-4">
                <div class="mb-4 rounded-lg bg-muted p-4">
                  <code class="text-sm whitespace-pre">{example.code}</code>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </section>
    {/if}

    <!-- API Reference -->
    <section class="mb-12">
      <h2 class="mb-4 text-2xl font-semibold">API Reference</h2>
      <div class="rounded-lg border">
        <table class="w-full">
          <thead>
            <tr class="border-b">
              <th class="px-4 py-2 text-left font-semibold">Prop</th>
              <th class="px-4 py-2 text-left font-semibold">Type</th>
              <th class="px-4 py-2 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-4 py-2"><code>class</code></td>
              <td class="px-4 py-2 text-muted-foreground">string</td>
              <td class="px-4 py-2 text-muted-foreground">Additional CSS classes</td>
            </tr>
            <tr class="border-b">
              <td class="px-4 py-2"><code>children</code></td>
              <td class="px-4 py-2 text-muted-foreground">Snippet</td>
              <td class="px-4 py-2 text-muted-foreground">Child content</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</div>
