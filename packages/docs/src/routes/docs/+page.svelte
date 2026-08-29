<script lang="ts">
  import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@shadcn-ui-svelte/components';
</script>

<div class="container mx-auto px-4 py-12">
  <div class="mx-auto max-w-3xl">
    <h1 class="mb-4 text-4xl font-bold">Introduction</h1>
    <p class="mb-8 text-lg text-muted-foreground">
      shadcn/ui is a set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks and AI models. Open Source. Open Code.
    </p>

    <div class="mb-8 rounded-lg border border-yellow-500/50 bg-yellow-500/10 p-4">
      <p class="text-sm font-medium">This is not a component library. It is how you build your component library.</p>
    </div>

    <p class="mb-8 text-muted-foreground">
      You know how most traditional component libraries work: you install a package from NPM, import the components, and use them in your app.
    </p>

    <p class="mb-8 text-muted-foreground">
      This approach works well until you need to customize a component to fit your design system or require one that isn't included in the library. <strong>Often, you end up wrapping library components, writing workarounds to override styles, or mixing components from different libraries with incompatible APIs.</strong>
    </p>

    <p class="mb-8 text-muted-foreground">
      This is what shadcn/ui aims to solve. It is built around the following principles:
    </p>

    <ul class="mb-8 space-y-2 text-muted-foreground">
      <li><strong>Open Code:</strong> The top layer of your component code is open for modification.</li>
      <li><strong>Composition:</strong> Every component uses a common, composable interface, making them predictable.</li>
      <li><strong>Distribution:</strong> A flat-file schema and command-line tool make it easy to distribute components.</li>
      <li><strong>Beautiful Defaults:</strong> Carefully chosen default styles, so you get great design out-of-the-box.</li>
      <li><strong>AI-Ready:</strong> Open code for LLMs to read, understand, and improve.</li>
    </ul>

    <div class="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle class="text-lg">Open Code</CardTitle>
          <CardDescription>Full control to customize and extend components</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">shadcn/ui hands you the actual component code. You have full control to customize and extend the components to your needs.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle class="text-lg">Composition</CardTitle>
          <CardDescription>Common, composable interface</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Every component in shadcn/ui shares a common, composable interface. If a component does not exist, we bring it in and make it composable.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle class="text-lg">Distribution</CardTitle>
          <CardDescription>Flat-file schema and CLI</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">shadcn/ui is also a code distribution system. It defines a schema for components and a CLI to distribute them.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle class="text-lg">AI-Ready</CardTitle>
          <CardDescription>Open code for LLMs</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">The design of shadcn/ui makes it easy for AI tools to work with your code. Its open code and consistent API allow AI models to read, understand, and even generate new components.</p>
        </CardContent>
      </Card>
    </div>

    <div class="mt-8 flex gap-4">
      <a href="/docs/installation">
        <Button>Get Started</Button>
      </a>
      <a href="/components">
        <Button variant="outline">Browse Components</Button>
      </a>
    </div>
  </div>
</div>
