<script lang="ts">
  import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, Label, Switch, Checkbox, Slider, Progress, Separator, Select, Textarea, Tabs, TabsList, TabsTrigger, TabsContent, Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@shadcn-ui-svelte/components';

  let sliderValue = $state(50);
  let switchChecked = $state(true);
  let checkboxTx = $state(true);
  let checkboxSecurity = $state(true);
  let checkboxGoals = $state(false);
  let checkboxMarket = $state(false);
</script>

<div class="flex flex-1 flex-col">
  <!-- Hero -->
  <section class="container mx-auto flex flex-col items-center gap-2 px-6 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
    <a href="/docs/changelog" class="inline-flex items-center gap-1 rounded-full border bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
      New: Svelte 5 with Runes
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
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
  <section class="relative flex w-full flex-col gap-8 overflow-hidden bg-muted p-4 pb-0 dark:bg-background lg:p-6 lg:gap-6 xl:p-12 xl:gap-8">
    <div class="relative z-10 mx-auto grid w-full max-w-none gap-4 min-[1400px]:grid-cols-4 min-[1900px]:grid-cols-5 md:max-w-3xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:max-w-[1600px] 2xl:max-w-[1900px]">

      <!-- Col 1 -->
      <div class="flex flex-col gap-4">
        <!-- Savings Targets -->
        <Card>
          <CardHeader>
            <CardTitle>Savings Targets</CardTitle>
            <CardDescription>Active milestones for 2024 across your portfolio. Monitor how close you are to each savings goal.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="rounded-lg bg-muted p-3 space-y-3">
              <p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Retirement</p>
              <p class="text-3xl font-semibold tabular-nums">$420,000</p>
              <Progress value={65} aria-label="Retirement savings progress" />
              <div class="flex items-center justify-between">
                <span class="text-sm text-muted-foreground">65% achieved</span>
                <span class="text-sm font-medium tabular-nums">$273,000</span>
              </div>
            </div>
            <div class="rounded-lg bg-muted p-3 space-y-3">
              <p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Real Estate</p>
              <p class="text-3xl font-semibold tabular-nums">$85,000</p>
              <Progress value={32} aria-label="Real estate savings progress" />
              <div class="flex items-center justify-between">
                <span class="text-sm text-muted-foreground">32% achieved</span>
                <span class="text-sm font-medium tabular-nums">$27,200</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p class="text-center text-sm text-muted-foreground">You have not met your targets for this year.</p>
          </CardFooter>
        </Card>

        <!-- Sidebar Nav -->
        <div class="grid grid-cols-2 gap-4">
          <Card class="overflow-hidden rounded-2xl py-0">
            <div class="p-2">
              <p class="px-2 pb-1 text-xs font-medium text-muted-foreground">Overview</p>
              <nav class="space-y-0.5">
                <a href="#" class="flex items-center gap-2 rounded-md bg-accent px-2 py-1.5 text-sm font-medium text-accent-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                  Analytics
                </a>
                <a href="#" class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"/><path d="M15 12h.01"/><path d="M18 18h.01"/><path d="M18 15h.01"/></svg>
                  Transactions
                </a>
                <a href="#" class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6a1 1 0 0 0 1 1h6"/><path d="M21 11a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 13"/></svg>
                  Investments
                </a>
                <a href="#" class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                  Accounts
                </a>
              </nav>
            </div>
          </Card>
          <Card class="overflow-hidden rounded-2xl py-0">
            <div class="p-2">
              <p class="px-2 pb-1 text-xs font-medium text-muted-foreground">Account</p>
              <nav class="space-y-0.5">
                <a href="#" class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Profile
                </a>
                <a href="#" class="flex items-center gap-2 rounded-md bg-accent px-2 py-1.5 text-sm font-medium text-accent-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                  Billing
                </a>
                <a href="#" class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                  Notifications
                </a>
              </nav>
            </div>
          </Card>
        </div>
      </div>

      <!-- Col 2 -->
      <div class="flex flex-col gap-4">
        <!-- Contribution History -->
        <Card>
          <CardHeader>
            <CardTitle>Contribution History</CardTitle>
            <CardDescription>Last 6 months of activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="flex h-[200px] w-full items-end gap-3">
              {#each [{ month: 'Dec', amount: 800, color: 'bg-chart-1' }, { month: 'Jan', amount: 1100, color: 'bg-chart-2' }, { month: 'Feb', amount: 900, color: 'bg-chart-3' }, { month: 'Mar', amount: 1300, color: 'bg-chart-4' }, { month: 'Apr', amount: 750, color: 'bg-chart-5' }] as item, i}
                {@const maxAmount = 1300}
                <div class="flex h-full flex-1 flex-col justify-end gap-2">
                  <div class="min-h-2 rounded-lg {item.color}" style="height: {(item.amount / maxAmount) * 100}%"></div>
                  <span class="text-center text-xs text-muted-foreground">{item.month}</span>
                </div>
              {/each}
            </div>
          </CardContent>
          <CardContent>
            <div class="grid w-full grid-cols-2 gap-3">
              <div class="rounded-lg bg-muted p-3 space-y-1">
                <p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Upcoming</p>
                <p class="font-semibold">May 2024</p>
                <p class="text-sm text-muted-foreground">Scheduled</p>
              </div>
              <div class="rounded-lg bg-muted p-3 space-y-1">
                <p class="text-xs font-medium uppercase tracking-wider text-muted-foreground">Savings Plan</p>
                <p class="font-semibold">Accelerated</p>
                <p class="text-sm text-muted-foreground">Recurring</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full">View Full Report</Button>
          </CardFooter>
        </Card>

        <!-- Claimable Balance -->
        <Card>
          <CardHeader>
            <CardDescription>Claimable Balance</CardDescription>
            <CardTitle class="text-4xl tabular-nums">$1,211.29</CardTitle>
            <Badge variant="outline" class="w-fit">
              <span class="size-2 rounded-full bg-yellow-500"></span>
              Pending Setup
            </Badge>
          </CardHeader>
          <CardContent>
            <div class="rounded-lg bg-muted p-3 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-sm text-muted-foreground">Net Royalties</span>
                <span class="text-sm font-medium tabular-nums">$1,248.75</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-muted-foreground">Processing Fee</span>
                <span class="text-sm font-medium tabular-nums">-$37.46</span>
              </div>
              <Separator />
              <div class="flex items-center justify-between">
                <span class="text-sm text-muted-foreground">Total Ready to Claim</span>
                <span class="text-sm font-semibold tabular-nums">$1,211.29 USD</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p class="text-center text-sm text-muted-foreground">Once your bank is connected, balances over $10.00 are automatically eligible for monthly distribution.</p>
          </CardFooter>
        </Card>
      </div>

      <!-- Col 3 -->
      <div class="flex flex-col gap-4 hidden lg:flex">
        <!-- QR Connect -->
        <Card>
          <CardContent class="flex justify-center pt-6">
            <div class="rounded-xl border bg-white p-4">
              <svg viewBox="0 0 21 21" class="size-40 text-black" shape-rendering="crispEdges">
                <rect width="21" height="21" fill="white" />
                {#each '111111100101101111111,100000101001001000001,101110101111101011101,101110100100001011101,101110101010101011101,100000100111001000001,111111101010101111111,000000001101000000000,101011111001111010110,010100001110010101001,111010111011101111010,001101000101000010101,110111101111010111011,000000001001010001010,111111101101111101001,100000100010001001111,101110101011101110100,101110100110100010011,101110101000111101110,100000101101000011001,111111101011101101111'.split(',') as row, y}
                  {#each row.split('') as cell, x}
                    {#if cell === '1'}
                      <rect {x} {y} width="1" height="1" />
                    {/if}
                  {/each}
                {/each}
              </svg>
            </div>
          </CardContent>
          <CardHeader class="text-center">
            <CardTitle>Scan to connect your mobile device</CardTitle>
            <CardDescription class="text-balance">Open the Ledger mobile app and scan this code to link your device.</CardDescription>
          </CardHeader>
        </Card>

        <!-- Dividend Income -->
        <Card>
          <CardHeader>
            <CardTitle>Q2 Dividend Income</CardTitle>
            <CardDescription>Quarterly dividend payouts across your portfolio holdings.</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-2">
              {#each [{ name: 'Vanguard', shares: '450 Shares', amount: '$1,842.10', bars: [60, 70, 55, 100] }, { name: 'S&P 500 VOO', shares: '112 Shares', amount: '$928.40', bars: [40, 50, 75, 50] }, { name: 'Apple AAPL', shares: '85 Shares', amount: '$340.00', bars: [30, 40, 70, 50] }, { name: 'Realty Income', shares: '320 Shares', amount: '$1,139.50', bars: [55, 60, 65, 85] }] as holding}
                <div class="flex items-center gap-3 rounded-lg bg-muted p-2">
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium truncate">{holding.name}</p>
                    <p class="text-xs text-muted-foreground">{holding.shares}</p>
                  </div>
                  <div class="hidden h-8 w-20 items-end gap-1 md:flex">
                    {#each holding.bars as val}
                      <div class="min-h-1 flex-1 rounded-t-sm bg-chart-2" style="height: {val}%"></div>
                    {/each}
                  </div>
                  <span class="text-sm font-medium tabular-nums shrink-0">{holding.amount}</span>
                </div>
              {/each}
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Col 4 -->
      <div class="flex flex-col gap-4 hidden min-[1400px]:flex">
        <!-- New Milestone -->
        <Card>
          <CardHeader>
            <CardTitle>Set a new milestone</CardTitle>
            <CardDescription>Define your financial target and we'll help you pace your savings.</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div class="space-y-2">
                <Label for="goal-name">Goal Name</Label>
                <Input id="goal-name" placeholder="e.g. New Car, Home Downpayment" />
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div class="space-y-2">
                  <Label for="target-amount">Target Amount</Label>
                  <Input id="target-amount" value="$15,000" />
                </div>
                <div class="space-y-2">
                  <Label for="target-date">Target Date</Label>
                  <Input id="target-date" value="Dec 2025" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex-col gap-2">
            <Button class="w-full">Create Goal</Button>
            <Button variant="outline" class="w-full">Cancel</Button>
          </CardFooter>
        </Card>

        <!-- Payout Threshold -->
        <Card>
          <CardHeader>
            <CardTitle>Payout Threshold</CardTitle>
            <CardDescription>Set the minimum balance required before a payout is triggered.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="space-y-2">
              <Label>Preferred Currency</Label>
              <div class="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm">
                USD — United States Dollar
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-baseline justify-between">
                <Label>Minimum Payout Amount</Label>
                <span class="text-2xl font-semibold tabular-nums">$2,500.00</span>
              </div>
              <Progress value={25} />
              <div class="flex items-center justify-between">
                <span class="text-xs text-muted-foreground">$50 (MIN)</span>
                <span class="text-xs text-muted-foreground">$10,000 (MAX)</span>
              </div>
            </div>
            <div class="space-y-2">
              <Label for="payout-notes">Notes</Label>
              <Textarea id="payout-notes" placeholder="Add any notes for this payout configuration..." class="min-h-[80px] resize-none" />
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full">Save Threshold</Button>
          </CardFooter>
        </Card>
      </div>

      <!-- Col 5 (hidden < 1900px) -->
      <div class="flex flex-col gap-4 hidden min-[1900px]:flex">
        <!-- Analytics -->
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription class="flex items-center gap-2">418.2K Visitors <Badge>+10%</Badge></CardDescription>
          </CardHeader>
          <svg viewBox="0 0 100 86" preserveAspectRatio="none" class="aspect-[1/0.35] w-full text-chart-1">
            <path d="M0 52L18 40L36 46L54 70L72 50L100 49V86H0Z" fill="currentColor" opacity="0.28" />
            <path d="M0 52L18 40L36 46L54 70L72 50L100 49" fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke" />
          </svg>
        </Card>

        <!-- Notification Settings -->
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Choose which email and push alerts you want to receive.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="flex items-start gap-3">
              <Checkbox bind:checked={checkboxTx} id="notify-tx" />
              <div class="space-y-0.5">
                <Label for="notify-tx" class="text-sm font-medium">Transaction alerts</Label>
                <p class="text-xs text-muted-foreground">Deposits, withdrawals, and transfers.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Checkbox bind:checked={checkboxSecurity} id="notify-security" />
              <div class="space-y-0.5">
                <Label for="notify-security" class="text-sm font-medium">Security alerts</Label>
                <p class="text-xs text-muted-foreground">Login attempts and account changes.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Checkbox bind:checked={checkboxGoals} id="notify-goals" />
              <div class="space-y-0.5">
                <Label for="notify-goals" class="text-sm font-medium">Goal milestones</Label>
                <p class="text-xs text-muted-foreground">Updates at 25%, 50%, 75%, and 100%.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Checkbox bind:checked={checkboxMarket} id="notify-market" />
              <div class="space-y-0.5">
                <Label for="notify-market" class="text-sm font-medium">Market updates</Label>
                <p class="text-xs text-muted-foreground">Daily portfolio summary and price alerts.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full">Save Preferences</Button>
          </CardFooter>
        </Card>

        <!-- Power Usage -->
        <Card>
          <CardHeader>
            <CardTitle>Power Usage</CardTitle>
            <CardDescription>Whole Home</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="flex h-[140px] w-full items-end gap-2">
              {#each [{ hour: '6a', usage: 1.2 }, { hour: '8a', usage: 2.8 }, { hour: '10a', usage: 3.1 }, { hour: '12p', usage: 2.4 }, { hour: '2p', usage: 3.4 }, { hour: '4p', usage: 2.9 }, { hour: '6p', usage: 3.8 }, { hour: '8p', usage: 3.2 }] as item}
                {@const maxUsage = 3.8}
                <div class="flex h-full flex-1 flex-col justify-end gap-1.5">
                  <div class="min-h-2 rounded-t bg-chart-2" style="height: {(item.usage / maxUsage) * 100}%"></div>
                  <span class="text-center text-xs text-muted-foreground">{item.hour}</span>
                </div>
              {/each}
            </div>
            <Separator />
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-0.5">
                <span class="text-sm text-muted-foreground">Currently Using</span>
                <p class="text-lg font-semibold tabular-nums">3.4 kW</p>
              </div>
              <div class="space-y-0.5">
                <span class="text-sm text-muted-foreground">Solar Gen</span>
                <p class="text-lg font-semibold tabular-nums">+1.2 kW</p>
              </div>
            </div>
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
