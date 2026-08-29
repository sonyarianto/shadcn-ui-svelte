<script lang="ts">
  import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Label, Switch, Checkbox, Slider, Progress, Skeleton, Separator, Tabs, TabsList, TabsTrigger, TabsContent } from '@shadcn-ui-svelte/components';

  let sliderValue = $state(50);
  let switchChecked = $state(false);
  let checkboxChecked = $state(false);
</script>

<div class="flex flex-1 flex-col">
  <!-- Hero -->
  <section class="container mx-auto flex flex-col items-center gap-4 px-6 pb-8 pt-8 text-center md:py-16 lg:py-20 xl:gap-4">
    <a href="/docs/changelog" class="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
      New: Svelte 5 with Runes
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
      </svg>
    </a>
    <h1 class="max-w-3xl text-3xl font-semibold tracking-tight text-balance text-primary lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter">
      The Foundation for your Design System
    </h1>
    <p class="max-w-4xl text-base text-balance text-foreground sm:text-lg">
      A set of beautifully designed components that you can customize, extend, and build on.
      Start here then make it your own. Open Source. Open Code.
    </p>
    <div class="flex w-full items-center justify-center gap-2 pt-2">
      <a href="/docs/installation">
        <Button class="h-[31px] rounded-lg shadow-none">Build Your Own <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></Button>
      </a>
    </div>
  </section>

  <!-- Cards Demo -->
  <section class="relative flex w-full flex-col gap-6 overflow-hidden bg-muted p-4 pb-0 dark:bg-background lg:p-6 lg:gap-6 xl:p-12 xl:gap-8">
    <div class="relative z-10 mx-auto grid w-full max-w-none gap-4 md:grid-cols-2 lg:grid-cols-3 xl:max-w-[1600px]">
      <!-- Column 1 -->
      <div class="flex flex-col gap-4">
        <!-- UI Elements Card -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">UI Elements</CardTitle>
            <CardDescription>Interactive component previews</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="flex flex-wrap gap-2">
              <Button size="sm">Button</Button>
              <Button size="sm" variant="secondary">Secondary</Button>
              <Button size="sm" variant="outline">Outline</Button>
              <Button size="sm" variant="ghost">Ghost</Button>
            </div>
            <div class="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>

        <!-- Form Elements Card -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Form Elements</CardTitle>
            <CardDescription>Input, checkbox, switch, and more</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="space-y-2">
              <Label for="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email..." />
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <Checkbox bind:checked={checkboxChecked} />
                <Label>Accept terms</Label>
              </div>
              <div class="flex items-center gap-2">
                <Switch bind:checked={switchChecked} />
                <Label>Notifications</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Progress Card -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Progress</CardTitle>
            <CardDescription>Task completion tracking</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span>Project Setup</span>
                <span class="text-muted-foreground">75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span>Design System</span>
                <span class="text-muted-foreground">45%</span>
              </div>
              <Progress value={45} />
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Column 2 -->
      <div class="flex flex-col gap-4">
        <!-- Slider Card -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Slider</CardTitle>
            <CardDescription>Drag to adjust values</CardDescription>
          </CardHeader>
          <CardContent>
            <Slider bind:value={sliderValue} min={0} max={100} />
            <p class="mt-2 text-sm text-muted-foreground">Value: {sliderValue}</p>
          </CardContent>
        </Card>

        <!-- Tabs Card -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Tabs</CardTitle>
            <CardDescription>Tabbed content navigation</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value="preview">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <p class="text-sm text-muted-foreground">This is the preview tab content.</p>
              </TabsContent>
              <TabsContent value="code">
                <p class="text-sm text-muted-foreground">This is the code tab content.</p>
              </TabsContent>
              <TabsContent value="usage">
                <p class="text-sm text-muted-foreground">This is the usage tab content.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <!-- Skeleton Card -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Skeleton</CardTitle>
            <CardDescription>Loading state placeholders</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="flex items-center gap-3">
              <Skeleton class="h-10 w-10 rounded-full" />
              <div class="space-y-2">
                <Skeleton class="h-4 w-[200px]" />
                <Skeleton class="h-3 w-[150px]" />
              </div>
            </div>
            <Skeleton class="h-3 w-full" />
            <Skeleton class="h-3 w-[80%]" />
          </CardContent>
        </Card>
      </div>

      <!-- Column 3 -->
      <div class="flex flex-col gap-4">
        <!-- Stats Card -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Dashboard Stats</CardTitle>
            <CardDescription>Key metrics overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="rounded-lg border p-3">
                <p class="text-xs text-muted-foreground">Revenue</p>
                <p class="text-xl font-bold">$45,231</p>
              </div>
              <div class="rounded-lg border p-3">
                <p class="text-xs text-muted-foreground">Users</p>
                <p class="text-xl font-bold">2,350</p>
              </div>
              <div class="rounded-lg border p-3">
                <p class="text-xs text-muted-foreground">Growth</p>
                <p class="text-xl font-bold">+20.1%</p>
              </div>
              <div class="rounded-lg border p-3">
                <p class="text-xs text-muted-foreground">Active</p>
                <p class="text-xl font-bold">573</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- List Card -->
        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Recent Activity</CardTitle>
            <CardDescription>Latest updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium">OM</div>
                <div class="flex-1">
                  <p class="text-sm font-medium">Olivia Martin</p>
                  <p class="text-xs text-muted-foreground">Created new component</p>
                </div>
                <Badge variant="secondary" class="text-xs">2m ago</Badge>
              </div>
              <Separator />
              <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium">JL</div>
                <div class="flex-1">
                  <p class="text-sm font-medium">Jackson Lee</p>
                  <p class="text-xs text-muted-foreground">Updated documentation</p>
                </div>
                <Badge variant="secondary" class="text-xs">5m ago</Badge>
              </div>
              <Separator />
              <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium">IN</div>
                <div class="flex-1">
                  <p class="text-sm font-medium">Isabella Nguyen</p>
                  <p class="text-xs text-muted-foreground">Fixed a bug</p>
                </div>
                <Badge variant="secondary" class="text-xs">10m ago</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- CTA Card -->
        <Card class="border-dashed">
          <CardContent class="flex flex-col items-center justify-center py-8 text-center">
            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>
              </svg>
            </div>
            <p class="text-sm font-medium">Copy & Paste</p>
            <p class="text-xs text-muted-foreground">Own your components</p>
          </CardContent>
        </Card>
      </div>
    </div>

    <!-- Gradient fades -->
    <div class="absolute inset-x-0 top-0 z-20 h-48 bg-gradient-to-b from-background via-muted/80 to-transparent dark:hidden lg:h-80 xl:h-64"></div>
    <div class="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-background via-muted/80 to-transparent dark:via-background/80"></div>
  </section>

  <!-- Footer -->
  <footer class="py-8">
    <div class="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center text-xs text-muted-foreground sm:text-sm">
      <p>
        Built by <a href="https://github.com/sonyarianto" target="_blank" rel="noopener noreferrer" class="font-medium underline underline-offset-4">Sony AK</a> at
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="font-medium underline underline-offset-4">Vercel</a>.
        The source code is available on <a href="https://github.com/sonyarianto/shadcn-ui-svelte" target="_blank" rel="noopener noreferrer" class="font-medium underline underline-offset-4">GitHub</a>.
      </p>
    </div>
  </footer>
</div>
