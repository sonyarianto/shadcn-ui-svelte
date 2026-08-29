<script lang="ts">
  import { page } from '$app/stores';
  import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Textarea, Label, Switch, Checkbox, Slider, Alert, AlertTitle, AlertDescription, Progress, Skeleton, Tabs, TabsList, TabsTrigger, TabsContent, Separator, Select, Dialog, Popover, Tooltip, Accordion } from '@shadcn-ui-svelte/components';

  const $componentName = $derived($page.params.name);

  const examples: Record<string, { title: string; description: string; code: string; component: any }> = {
    button: {
      title: 'Button',
      description: 'Displays a button or a component that looks like a button.',
      code: `<Button>Click me</Button>`,
      component: 'button'
    },
    badge: {
      title: 'Badge',
      description: 'Displays a badge or a component that looks like a badge.',
      code: `<Badge>Badge</Badge>`,
      component: 'badge'
    },
    card: {
      title: 'Card',
      description: 'Displays a card with header, content, and footer.',
      code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>`,
      component: 'card'
    },
    input: {
      title: 'Input',
      description: 'Displays a form input field.',
      code: `<Input type="text" placeholder="Enter text..." />`,
      component: 'input'
    },
    textarea: {
      title: 'Textarea',
      description: 'Displays a form textarea field.',
      code: `<Textarea placeholder="Enter text..." />`,
      component: 'textarea'
    },
    checkbox: {
      title: 'Checkbox',
      description: 'A control that allows the user to toggle between checked and not checked.',
      code: `<Checkbox />`,
      component: 'checkbox'
    },
    switch: {
      title: 'Switch',
      description: 'A control that allows the user to toggle between checked and not checked.',
      code: `<Switch />`,
      component: 'switch'
    },
    slider: {
      title: 'Slider',
      description: 'An input where the user selects a value from a given range.',
      code: `<Slider value={50} />`,
      component: 'slider'
    },
    select: {
      title: 'Select',
      description: 'Displays a list of options for the user to pick from.',
      code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectContent>
</Select>`,
      component: 'select'
    },
    'radio-group': {
      title: 'Radio Group',
      description: 'A set of checkable buttons where only one can be checked at a time.',
      code: `<RadioGroup>
  <RadioGroupItem value="option1" />
  <RadioGroupItem value="option2" />
</RadioGroup>`,
      component: 'radio-group'
    },
    label: {
      title: 'Label',
      description: 'Renders an accessible label associated with form controls.',
      code: `<Label>Email</Label>`,
      component: 'label'
    },
    alert: {
      title: 'Alert',
      description: 'Displays a callout for important information.',
      code: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app.</AlertDescription>
</Alert>`,
      component: 'alert'
    },
    progress: {
      title: 'Progress',
      description: 'Shows a completion progress bar.',
      code: `<Progress value={60} />`,
      component: 'progress'
    },
    skeleton: {
      title: 'Skeleton',
      description: 'Use to show a placeholder while content is loading.',
      code: `<Skeleton class="h-4 w-[250px]" />`,
      component: 'skeleton'
    },
    dialog: {
      title: 'Dialog',
      description: 'A window overlaid on the primary content.',
      code: `<Dialog>
  <Button onclick={() => open = true}>Open</Button>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Are you sure?</Dialog.Title>
    </Dialog.Header>
  </Dialog.Content>
</Dialog>`,
      component: 'dialog'
    },
    popover: {
      title: 'Popover',
      description: 'Displays rich content in a portal, triggered by a button.',
      code: `<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>`,
      component: 'popover'
    },
    tooltip: {
      title: 'Tooltip',
      description: 'A popup that displays information related to an element.',
      code: `<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>Tooltip text</TooltipContent>
</Tooltip>`,
      component: 'tooltip'
    },
    tabs: {
      title: 'Tabs',
      description: 'A set of layered sections of content.',
      code: `<Tabs>
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`,
      component: 'tabs'
    },
    accordion: {
      title: 'Accordion',
      description: 'A vertically stacked set of interactive headings.',
      code: `<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes.</AccordionContent>
  </AccordionItem>
</Accordion>`,
      component: 'accordion'
    },
    separator: {
      title: 'Separator',
      description: 'Visually or semantically separates content.',
      code: `<Separator />`,
      component: 'separator'
    },
    'scroll-area': {
      title: 'Scroll Area',
      description: 'Augments native scroll functionality for custom, cross-browser styling.',
      code: `<ScrollArea class="h-[200px]">
  <div>Content</div>
</ScrollArea>`,
      component: 'scroll-area'
    },
    resizable: {
      title: 'Resizable',
      description: 'Accessible resizable panel groups.',
      code: `<Resizable>
  <ResizablePanel>Left</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Right</ResizablePanel>
</Resizable>`,
      component: 'resizable'
    },
    table: {
      title: 'Table',
      description: 'A responsive table component.',
      code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      component: 'table'
    },
    'data-table': {
      title: 'Data Table',
      description: 'Powerful table component with sorting and pagination.',
      code: `<DataTable columns={columns} data={data} />`,
      component: 'data-table'
    },
    calendar: {
      title: 'Calendar',
      description: 'A date picker calendar component.',
      code: `<Calendar bind:value={date} />`,
      component: 'calendar'
    },
    chart: {
      title: 'Chart',
      description: 'Beautiful charts built with Recharts.',
      code: `<Chart type="bar" data={data} />`,
      component: 'chart'
    },
    'input-otp': {
      title: 'Input OTP',
      description: 'One-time password input component.',
      code: `<InputOTP maxLength={6} />`,
      component: 'input-otp'
    }
  };

  const data = $derived(examples[$componentName] || {
    title: $componentName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: `A ${$componentName} component for Svelte.`,
    code: '',
    component: $componentName
  });

  let open = $state(false);
  let sliderValue = $state(50);
  let switchChecked = $state(false);
  let checkboxChecked = $state(false);
  let inputValue = $state('');
  let textareaValue = $state('');
</script>

<div class="container mx-auto px-4 py-12">
  <div class="mx-auto max-w-4xl">
    <div class="mb-8">
      <div class="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
        <a href="/components" class="hover:text-foreground">Components</a>
        <span>/</span>
        <span>{data.title}</span>
      </div>
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

    <!-- Live Example -->
    <section class="mb-12">
      <h2 class="mb-4 text-2xl font-semibold">Live Example</h2>
      <div class="rounded-lg border p-6">
        {#if $componentName === 'button'}
          <div class="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        {:else if $componentName === 'badge'}
          <div class="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        {:else if $componentName === 'card'}
          <Card class="max-w-sm">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content. You can put anything here.</p>
            </CardContent>
          </Card>
        {:else if $componentName === 'input'}
          <div class="max-w-sm space-y-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter email..." bind:value={inputValue} />
            {#if inputValue}
              <p class="text-sm text-muted-foreground">Value: {inputValue}</p>
            {/if}
          </div>
        {:else if $componentName === 'textarea'}
          <div class="max-w-sm space-y-2">
            <Label for="message">Message</Label>
            <Textarea id="message" placeholder="Enter message..." bind:value={textareaValue} />
            {#if textareaValue}
              <p class="text-sm text-muted-foreground">Value: {textareaValue}</p>
            {/if}
          </div>
        {:else if $componentName === 'checkbox'}
          <div class="flex items-center gap-2">
            <Checkbox bind:checked={checkboxChecked} />
            <Label>Accept terms</Label>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">Checked: {checkboxChecked}</p>
        {:else if $componentName === 'switch'}
          <div class="flex items-center gap-2">
            <Switch bind:checked={switchChecked} />
            <Label>Airplane Mode</Label>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">Checked: {switchChecked}</p>
        {:else if $componentName === 'slider'}
          <div class="max-w-sm">
            <Slider bind:value={sliderValue} />
            <p class="mt-2 text-sm text-muted-foreground">Value: {sliderValue}</p>
          </div>
        {:else if $componentName === 'alert'}
          <div class="space-y-2">
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>You can add components to your app.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Something went wrong.</AlertDescription>
            </Alert>
          </div>
        {:else if $componentName === 'progress'}
          <div class="max-w-sm space-y-2">
            <Progress value={60} />
            <p class="text-sm text-muted-foreground">60% complete</p>
          </div>
        {:else if $componentName === 'skeleton'}
          <div class="space-y-2">
            <Skeleton class="h-4 w-[250px]" />
            <Skeleton class="h-4 w-[200px]" />
            <Skeleton class="h-4 w-[150px]" />
          </div>
        {:else if $componentName === 'separator'}
          <div>
            <div class="py-2">Content above</div>
            <Separator />
            <div class="py-2">Content below</div>
          </div>
        {:else if $componentName === 'calendar'}
          <Calendar bind:value={new Date()} />
        {:else if $componentName === 'tabs'}
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" class="mt-4">
              <p>Content for Tab 1. This is the first tab panel.</p>
            </TabsContent>
            <TabsContent value="tab2" class="mt-4">
              <p>Content for Tab 2. This is the second tab panel.</p>
            </TabsContent>
            <TabsContent value="tab3" class="mt-4">
              <p>Content for Tab 3. This is the third tab panel.</p>
            </TabsContent>
          </Tabs>
        {:else if $componentName === 'accordion'}
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes. It comes with default styles that match the other components' aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
          </Accordion>
        {:else if $componentName === 'dialog'}
          <Dialog bind:open>
            <Button onclick={() => open = true}>Open Dialog</Button>
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
          </Dialog>
        {:else if $componentName === 'chart'}
          <Chart type="bar" data={[
            { label: 'Jan', value: 100 },
            { label: 'Feb', value: 200 },
            { label: 'Mar', value: 150 },
            { label: 'Apr', value: 300 },
            { label: 'May', value: 250 }
          ]} />
        {:else}
          <div class="py-8 text-center text-muted-foreground">
            <p class="text-lg">Component preview</p>
            <p class="text-sm">Interactive example for {data.title}</p>
          </div>
        {/if}
      </div>
    </section>

    <!-- Code -->
    <section class="mb-12">
      <h2 class="mb-4 text-2xl font-semibold">Code</h2>
      <div class="rounded-lg bg-muted p-4">
        <pre class="text-sm overflow-x-auto"><code>{data.code}</code></pre>
      </div>
    </section>

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
