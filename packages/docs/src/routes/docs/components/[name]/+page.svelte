<script lang="ts">
  import { page } from '$app/stores';
  import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Textarea, Label, Switch, Checkbox, Slider, Alert, AlertTitle, AlertDescription, Progress, Skeleton, Tabs, TabsList, TabsTrigger, TabsContent, Separator, SeparatorVertical } from '@shadcn-ui-svelte/components';

  const componentName = $derived($page.params.name);

  const componentData: Record<string, { title: string; description: string }> = {
    accordion: { title: 'Accordion', description: 'A vertically stacked set of interactive headings that each reveal a section of content.' },
    alert: { title: 'Alert', description: 'Displays a callout for important information.' },
    'alert-dialog': { title: 'Alert Dialog', description: 'A modal dialog that interrupts the user with important content and expects a response.' },
    'aspect-ratio': { title: 'Aspect Ratio', description: 'Displays content within a desired ratio.' },
    avatar: { title: 'Avatar', description: 'An image element with a fallback for representing the user.' },
    badge: { title: 'Badge', description: 'Displays a badge or a component that looks like a badge.' },
    breadcrumb: { title: 'Breadcrumb', description: 'Displays the path to the current page, allowing navigation back.' },
    button: { title: 'Button', description: 'Displays a button or a component that looks like a button.' },
    'button-group': { title: 'Button Group', description: 'Groups multiple buttons together.' },
    calendar: { title: 'Calendar', description: 'A date field component that allows users to enter and edit date.' },
    card: { title: 'Card', description: 'Displays a card with header, content, and footer.' },
    carousel: { title: 'Carousel', description: 'A carousel with motion and touch support.' },
    chart: { title: 'Chart', description: 'Beautiful charts built with Recharts, Tailwind CSS, and Svelte.' },
    checkbox: { title: 'Checkbox', description: 'A control that allows the user to toggle between checked and unchecked states.' },
    collapsible: { title: 'Collapsible', description: 'An interactive component which expands/collapses a panel.' },
    combobox: { title: 'Combobox', description: 'Autocomplete input and command palette with a list of suggestions.' },
    command: { title: 'Command', description: 'Fast, composable, unstyled command menu for Svelte.' },
    'context-menu': { title: 'Context Menu', description: 'Displays a menu to the user triggered by a right-click.' },
    'data-table': { title: 'Data Table', description: 'Powerful data table with sorting, filtering, and pagination.' },
    'date-picker': { title: 'Date Picker', description: 'A date picker component with range selection.' },
    dialog: { title: 'Dialog', description: 'A window overlaid on the primary content.' },
    drawer: { title: 'Drawer', description: 'A drawer component for Svelte.' },
    'dropdown-menu': { title: 'Dropdown Menu', description: 'Displays a menu to the user triggered by a button.' },
    form: { title: 'Form', description: 'Form validation with Svelte.' },
    'hover-card': { title: 'Hover Card', description: 'For sighted users to preview content behind a link.' },
    input: { title: 'Input', description: 'Displays a form input field or a component that looks like an input field.' },
    'input-group': { title: 'Input Group', description: 'Groups multiple input elements together.' },
    'input-otp': { title: 'Input OTP', description: 'One-time password input with copy paste support.' },
    kbd: { title: 'Kbd', description: 'Displays keyboard input or shortcuts.' },
    label: { title: 'Label', description: 'Renders an accessible label associated with form controls.' },
    menubar: { title: 'Menubar', description: 'A visually persistent menu common in desktop applications.' },
    'native-select': { title: 'Native Select', description: 'Displays a native HTML select element.' },
    'navigation-menu': { title: 'Navigation Menu', description: 'A collection of links for site navigation.' },
    pagination: { title: 'Pagination', description: 'Pagination with page navigation.' },
    popover: { title: 'Popover', description: 'A floating panel triggered by a button.' },
    progress: { title: 'Progress', description: 'Shows an indicator describing the progress of a task.' },
    'radio-group': { title: 'Radio Group', description: 'A set of checkable buttons where only one can be checked at a time.' },
    resizable: { title: 'Resizable', description: 'Accessible resizable panel groups and layouts.' },
    'scroll-area': { title: 'Scroll Area', description: 'Visually or semantically separates content.' },
    select: { title: 'Select', description: 'Displays a list of options for the user to pick from.' },
    separator: { title: 'Separator', description: 'Visually or semantically separates content.' },
    sheet: { title: 'Sheet', description: 'A window overlaid on the primary content.' },
    skeleton: { title: 'Skeleton', description: 'Use to show a placeholder while content is loading.' },
    slider: { title: 'Slider', description: 'An input where the user selects a value from within a given range.' },
    sonner: { title: 'Sonner', description: 'An opinionated toast component.' },
    switch: { title: 'Switch', description: 'A control that allows the user to toggle between checked and unchecked states.' },
    table: { title: 'Table', description: 'A responsive table component.' },
    tabs: { title: 'Tabs', description: 'A set of layered sections of content.' },
    textarea: { title: 'Textarea', description: 'Displays a form textarea or a component that looks like a textarea.' },
    toast: { title: 'Toast', description: 'A succinct message that is displayed temporarily.' },
    toggle: { title: 'Toggle', description: 'A two-state button that can be either on or off.' },
    'toggle-group': { title: 'Toggle Group', description: 'A set of two-state buttons that can be toggled on or off.' },
    tooltip: { title: 'Tooltip', description: 'A popup that displays information related to an element when the element receives hover focus.' }
  };

  const data = $derived(componentData[componentName] || {
    title: componentName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: `A ${componentName} component for Svelte.`
  });
</script>

<div class="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px]">
  <div class="flex min-w-0 flex-1 flex-col">
    <div class="h-4 shrink-0"></div>
    <div class="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8">
      <!-- Header -->
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2">
          <h1 class="scroll-m-24 text-3xl font-semibold tracking-tight sm:text-3xl">
            {data.title}
          </h1>
          <p class="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
            {data.description}
          </p>
        </div>
      </div>

      <!-- Installation -->
      <div>
        <h2 id="installation" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Installation</h2>
        <div class="rounded-lg border bg-muted/50 p-4">
          <code class="text-sm">npx shadcn-ui-svelte add {componentName}</code>
        </div>
      </div>

      <!-- Usage -->
      <div>
        <h2 id="usage" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Usage</h2>
        <div class="rounded-lg border bg-muted/50 p-4">
          <pre class="text-sm overflow-x-auto"><code>{`import { ${data.title.replace(/ /g, '')} } from '@shadcn-ui-svelte/components';`}</code></pre>
        </div>
      </div>

      <!-- Examples -->
      <div>
        <h2 id="examples" class="mb-4 scroll-m-24 text-xl font-semibold tracking-tight">Examples</h2>
        <p class="mb-4 text-muted-foreground">
          Below are examples of how to use the {data.title} component.
        </p>

        <div class="rounded-lg border">
          <div class="border-b px-4 py-3">
            <h3 class="font-semibold">Default</h3>
          </div>
          <div class="p-6">
            {#if componentName === 'button'}
              <div class="flex items-center gap-2">
                <Button>Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            {:else if componentName === 'badge'}
              <div class="flex items-center gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            {:else if componentName === 'input'}
              <Input type="text" placeholder="Enter text..." class="max-w-sm" />
            {:else if componentName === 'card'}
              <Card class="max-w-sm">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-muted-foreground">Card content goes here.</p>
                </CardContent>
              </Card>
            {:else}
              <p class="text-sm text-muted-foreground">Interactive preview coming soon.</p>
            {/if}
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
          <a href="#installation" class="text-sm text-muted-foreground hover:text-foreground">Installation</a>
          <a href="#usage" class="text-sm text-muted-foreground hover:text-foreground">Usage</a>
          <a href="#examples" class="text-sm text-muted-foreground hover:text-foreground">Examples</a>
        </nav>
      </div>
    </div>
  </div>
</div>
