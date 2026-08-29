<script lang="ts">
  import { Button } from '@shadcn-ui-svelte/components';
</script>

<div class="flex flex-1 flex-col">
  <!-- Hero -->
  <section class="container mx-auto flex flex-col items-center gap-4 pb-12 pt-16 text-center md:pt-24 lg:pt-32">
    <div class="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm">
      New: Svelte 5 with Runes
    </div>
    <h1 class="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
      The Foundation for your Design System
    </h1>
    <p class="max-w-2xl text-base text-muted-foreground sm:text-lg">
      A set of beautifully designed components that you can customize, extend, and build on.
      Start here then make it your own. Open Source. Open Code.
    </p>
    <div class="flex items-center gap-4">
      <a href="/docs/installation">
        <Button class="rounded-lg">Build Your Own</Button>
      </a>
      <a href="/docs/components">
        <Button variant="outline" class="rounded-lg">Components</Button>
      </a>
    </div>
  </section>

  <!-- Dashboard Preview -->
  <section class="container mx-auto flex-1 px-4 pb-16">
    <div class="overflow-hidden rounded-xl border bg-background shadow-2xl">
      <div class="flex h-10 items-center gap-1.5 border-b bg-muted/50 px-4">
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
        <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div class="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div class="grid min-h-[500px] lg:grid-cols-[240px_1fr]">
        <!-- Sidebar -->
        <div class="hidden border-r bg-muted/30 p-4 lg:block">
          <div class="mb-6 flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">A</div>
            <span class="text-sm font-medium">Acme Inc</span>
          </div>
          <nav class="space-y-1">
            <div class="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground">Overview</div>
            <div class="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent">Analytics</div>
            <div class="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent">Customers</div>
            <div class="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent">Products</div>
            <div class="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent">Settings</div>
          </nav>
        </div>
        <!-- Content -->
        <div class="p-6">
          <div class="mb-6">
            <h2 class="text-2xl font-bold">Dashboard</h2>
            <p class="text-sm text-muted-foreground">Welcome back, here's what's happening.</p>
          </div>
          <div class="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-lg border p-4">
              <p class="text-sm text-muted-foreground">Total Revenue</p>
              <p class="text-2xl font-bold">$45,231.89</p>
              <p class="text-xs text-muted-foreground">+20.1% from last month</p>
            </div>
            <div class="rounded-lg border p-4">
              <p class="text-sm text-muted-foreground">Subscriptions</p>
              <p class="text-2xl font-bold">+2350</p>
              <p class="text-xs text-muted-foreground">+180.1% from last month</p>
            </div>
            <div class="rounded-lg border p-4">
              <p class="text-sm text-muted-foreground">Active Now</p>
              <p class="text-2xl font-bold">+573</p>
              <p class="text-xs text-muted-foreground">+19% from last hour</p>
            </div>
            <div class="rounded-lg border p-4">
              <p class="text-sm text-muted-foreground">Conversion</p>
              <p class="text-2xl font-bold">3.2%</p>
              <p class="text-xs text-muted-foreground">+0.5% from last week</p>
            </div>
          </div>
          <div class="rounded-lg border">
            <div class="border-b p-4">
              <h3 class="font-semibold">Recent Sales</h3>
              <p class="text-sm text-muted-foreground">265 sales this month</p>
            </div>
            <div class="divide-y">
              <div class="flex items-center justify-between p-4">
                <div class="flex items-center gap-3">
                  <div class="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-medium">OM</div>
                  <div>
                    <p class="text-sm font-medium">Olivia Martin</p>
                    <p class="text-xs text-muted-foreground">olivia@email.com</p>
                  </div>
                </div>
                <p class="text-sm font-medium">+$1,999.00</p>
              </div>
              <div class="flex items-center justify-between p-4">
                <div class="flex items-center gap-3">
                  <div class="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-medium">JL</div>
                  <div>
                    <p class="text-sm font-medium">Jackson Lee</p>
                    <p class="text-xs text-muted-foreground">jackson@email.com</p>
                  </div>
                </div>
                <p class="text-sm font-medium">+$39.00</p>
              </div>
              <div class="flex items-center justify-between p-4">
                <div class="flex items-center gap-3">
                  <div class="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-medium">IN</div>
                  <div>
                    <p class="text-sm font-medium">Isabella Nguyen</p>
                    <p class="text-xs text-muted-foreground">isabella@email.com</p>
                  </div>
                </div>
                <p class="text-sm font-medium">+$299.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="border-t py-8">
    <div class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
      <p class="text-sm text-muted-foreground">
        Built by <a href="https://github.com/sonyarianto" target="_blank" rel="noopener noreferrer" class="font-medium underline underline-offset-4">Sony AK</a> at
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="font-medium underline underline-offset-4">Vercel</a>.
        The source code is available on <a href="https://github.com/sonyarianto/shadcn-ui-svelte" target="_blank" rel="noopener noreferrer" class="font-medium underline underline-offset-4">GitHub</a>.
      </p>
      <a href="/docs/installation">
        <Button variant="outline" size="sm" class="rounded-lg">Get Code</Button>
      </a>
    </div>
  </footer>
</div>
