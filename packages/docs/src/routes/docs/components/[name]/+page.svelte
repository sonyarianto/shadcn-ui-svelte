<script lang="ts">
  import { page } from '$app/stores';
  import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Textarea, Label, Switch, Checkbox, Slider, Alert, AlertTitle, AlertDescription, Progress, Skeleton, Tabs, TabsList, TabsTrigger, TabsContent, Separator, Select, Dialog, Popover, Tooltip, Accordion } from '@shadcn-ui-svelte/components';

  const $componentName = $derived($page.params.name);

  const componentExamples: Record<string, { title: string; description: string; examples: Array<{ name: string; code: string }> }> = {
    button: {
      title: 'Button',
      description: 'Displays a button or a component that looks like a button.',
      examples: [
        { name: 'Default', code: `<Button>Button</Button>` },
        { name: 'Secondary', code: `<Button variant="secondary">Secondary</Button>` },
        { name: 'Destructive', code: `<Button variant="destructive">Destructive</Button>` },
        { name: 'Outline', code: `<Button variant="outline">Outline</Button>` },
        { name: 'Ghost', code: `<Button variant="ghost">Ghost</Button>` },
        { name: 'Link', code: `<Button variant="link">Link</Button>` },
        { name: 'Sizes', code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>` }
      ]
    },
    badge: {
      title: 'Badge',
      description: 'Displays a badge or a component that looks like a badge.',
      examples: [
        { name: 'Default', code: `<Badge>Badge</Badge>` },
        { name: 'Secondary', code: `<Badge variant="secondary">Secondary</Badge>` },
        { name: 'Destructive', code: `<Badge variant="destructive">Destructive</Badge>` },
        { name: 'Outline', code: `<Badge variant="outline">Outline</Badge>` }
      ]
    },
    input: {
      title: 'Input',
      description: 'Displays a form input field or a component that looks like an input field.',
      examples: [
        { name: 'Default', code: `<Input type="text" placeholder="Enter text..." />` },
        { name: 'With Label', code: `<div class="space-y-2">
  <Label for="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter email..." />
</div>` },
        { name: 'With Button', code: `<div class="flex w-full max-w-sm items-center space-x-2">
  <Input type="email" placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>` }
      ]
    },
    card: {
      title: 'Card',
      description: 'Displays a card with header, content, and footer.',
      examples: [
        { name: 'Default', code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>` }
      ]
    },
    dialog: {
      title: 'Dialog',
      description: 'A window overlaid on the primary content.',
      examples: [
        { name: 'Default', code: `<Dialog>
  <Button>Open Dialog</Button>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Are you sure?</Dialog.Title>
      <Dialog.Description>This action cannot be undone.</Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>` }
      ]
    },
    tabs: {
      title: 'Tabs',
      description: 'A set of layered sections of content.',
      examples: [
        { name: 'Default', code: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>` }
      ]
    },
    accordion: {
      title: 'Accordion',
      description: 'A vertically stacked set of interactive headings.',
      examples: [
        { name: 'Default', code: `<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes.</AccordionContent>
  </AccordionItem>
</Accordion>` }
      ]
    },
    alert: {
      title: 'Alert',
      description: 'Displays a callout for important information.',
      examples: [
        { name: 'Default', code: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app.</AlertDescription>
</Alert>` },
        { name: 'Destructive', code: `<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>` }
      ]
    }
  };

  const data = $derived(componentExamples[$componentName] || {
    title: $componentName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: `A ${$componentName} component for Svelte.`,
    examples: []
  });

  let open = $state(false);
  let sliderValue = $state(50);
  let switchChecked = $state(false);
  let checkboxChecked = $state(false);
  let inputValue = $state('');
</script>

<div class="py-6 lg:py-10">
  <div class="mb-8">
    <div class="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
      <a href="/docs/components" class="hover:text-foreground">Components</a>
      <span>/</span>
      <span>{data.title}</span>
    </div>
    <h1 class="mb-2 text-3xl font-bold md:text-4xl">{data.title}</h1>
    <p class="text-lg text-muted-foreground">{data.description}</p>
  </div>

  <!-- Installation -->
  <div class="mb-8">
    <h2 class="mb-4 text-xl font-semibold">Installation</h2>
    <div class="rounded-lg border bg-muted/50 p-4">
      <code class="text-sm">npx shadcn-ui-svelte add {$componentName}</code>
    </div>
  </div>

  <!-- Examples -->
  {#if data.examples.length > 0}
    <div class="space-y-8">
      {#each data.examples as example}
        <div class="rounded-lg border">
          <div class="border-b px-4 py-3">
            <h3 class="font-semibold">{example.name}</h3>
          </div>
          <div class="p-4">
            <div class="mb-4 rounded-lg bg-muted/50 p-4">
              <pre class="text-sm overflow-x-auto"><code>{example.code}</code></pre>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
