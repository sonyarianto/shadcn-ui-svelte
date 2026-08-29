<script lang="ts">
  import { Button, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, Label, Checkbox, Progress, Separator, Textarea, Select } from '@shadcn-ui-svelte/components';

  let checkboxTx = $state(true);
  let checkboxSecurity = $state(true);
  let checkboxGoals = $state(false);
  let checkboxMarket = $state(false);
</script>

<div class="flex flex-1 flex-col">
  <!-- Hero -->
  <section class="border-grid border-b">
    <div class="container-wrapper">
      <div class="container flex flex-col items-center gap-2 px-6 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
        <a href="/docs/changelog" data-slot="badge" data-variant="secondary" class="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:pointer-events-none [&_svg]:size-3 text-secondary-foreground bg-muted hover:bg-secondary/90">
          New Questionnaire component
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <h1 class="leading-tighter max-w-4xl text-3xl font-semibold tracking-tight text-balance text-primary lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter">
          The Foundation for your Design System
        </h1>
        <p class="max-w-4xl text-base text-balance text-foreground sm:text-lg">
          A set of beautifully designed components that you can customize, extend, and build on.
          Start here then make it your own. Open Source. Open Code.
        </p>
        <div class="flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none">
          <a href="/create?preset=b27GcrRo">
            <Button class="h-[31px] rounded-lg">
              Build Your Own
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Cards Demo -->
  <div class="container-wrapper flex-1 p-0">
    <div class="container overflow-hidden md:px-0 lg:max-w-none">
      <div
        class="theme-neutral relative flex w-full max-w-none flex-col gap-8 overflow-hidden bg-muted p-12 pb-0 dark:bg-background lg:p-6 lg:gap-6 min-[1900px]:p-12 min-[1900px]:gap-10"
        style="--gap: var(--spacing, 0.25rem) * 8;"
      >
        <div class="relative z-10 mx-auto grid w-full max-w-none gap-8 **:data-[slot=card]:w-full min-[1400px]:grid-cols-4 min-[1900px]:grid-cols-5 md:max-w-3xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:max-w-[1600px] 2xl:max-w-[1900px] min-[1900px]:gap-10 lg:gap-6">

          <!-- Col 1 -->
          <div class="flex flex-col items-start gap-8 lg:gap-6 min-[1900px]:gap-10">
            <!-- UIElements -->
            <Card class="w-full">
              <CardContent class="flex flex-col gap-6">
                <div class="flex gap-2">
                  <Button>Button
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                </div>
                <div class="space-y-2">
                  <div class="relative">
                    <Input placeholder="Name" class="pr-9" />
                    <button class="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </button>
                  </div>
                  <Textarea placeholder="Message" class="resize-none" />
                </div>
                <div class="flex items-center gap-2">
                  <div class="flex gap-2">
                    <Badge>Badge</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                  </div>
                  <div class="ml-auto flex gap-3">
                    <Checkbox checked aria-label="Enable email alerts" />
                    <Checkbox aria-label="Enable push alerts" />
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <Button variant="outline">Alert Dialog</Button>
                  <div class="ml-auto">
                    <Button variant="outline">Button Group</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <!-- SidebarNav -->
            <div class="grid w-full grid-cols-2 gap-4 xl:gap-6">
              <!-- Overview -->
              <Card class="overflow-hidden rounded-3xl py-0">
                <div class="p-2">
                  <p class="px-2 pb-1 text-xs font-medium text-muted-foreground">Overview</p>
                  <nav class="space-y-1">
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
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                      Spending
                    </a>
                  </nav>
                </div>
              </Card>
              <!-- Account -->
              <Card class="overflow-hidden rounded-3xl py-0">
                <div class="p-2">
                  <p class="px-2 pb-1 text-xs font-medium text-muted-foreground">Account</p>
                  <nav class="space-y-1">
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
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Security
                    </a>
                    <a href="#" class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><path d="M17.5 10.5a2.5 2.5 0 1 0 0-5"/><path d="M8.5 15.5a2.5 2.5 0 1 0 0-5"/><path d="M12 22a10 10 0 0 0-7.35-9.77"/><path d="M12 22a10 10 0 0 1 7.35-9.77"/><path d="M12 22v-4"/></svg>
                      Appearance
                    </a>
                  </nav>
                </div>
              </Card>
            </div>

            <!-- SavingsTargets -->
            <Card class="w-full">
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
          </div>

          <!-- Col 2 -->
          <div class="hidden flex-col gap-8 lg:flex lg:gap-6 min-[1900px]:gap-10">
            <!-- ContributionHistory -->
            <Card>
              <CardHeader>
                <CardTitle>Contribution History</CardTitle>
                <CardDescription>Last 6 months of activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex h-[200px] w-full items-end gap-3">
                  {#each [{ month: 'Dec', amount: 800, color: 'bg-chart-1' }, { month: 'Jan', amount: 1100, color: 'bg-chart-2' }, { month: 'Feb', amount: 900, color: 'bg-chart-3' }, { month: 'Mar', amount: 1300, color: 'bg-chart-4' }, { month: 'Apr', amount: 750, color: 'bg-chart-5' }] as item}
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

            <!-- ClaimableBalance -->
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
                <p class="text-center text-sm text-muted-foreground">Once your bank is connected, balances over $10.00 are automatically eligible for monthly distribution on the 15th of each month.</p>
              </CardFooter>
            </Card>

            <!-- DividendIncome -->
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

          <!-- Col 3 -->
          <div class="hidden flex-col gap-8 min-[1400px]:flex min-[1400px]:gap-8 min-[1900px]:gap-10">
            <!-- NewMilestone -->
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

            <!-- PayoutThreshold -->
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

            <!-- AccountAccess -->
            <Card>
              <CardHeader>
                <CardTitle>Account Access</CardTitle>
                <CardDescription>Update your credentials or re-authenticate.</CardDescription>
              </CardHeader>
              <CardContent class="space-y-3">
                <div class="space-y-2">
                  <Label for="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <Label for="password">Current Password</Label>
                    <a href="#" class="text-xs text-muted-foreground hover:text-foreground hover:underline">Forgot?</a>
                  </div>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
                <Button class="w-full">Update Security</Button>
              </CardContent>
              <CardContent>
                <div class="rounded-lg border border-destructive/50 p-3 space-y-2">
                  <p class="text-sm font-medium text-destructive">Danger Zone</p>
                  <p class="text-xs text-muted-foreground">Archive account and remove catalog</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <!-- Col 4 -->
          <div class="hidden flex-col gap-8 md:flex md:gap-6 min-[1900px]:gap-10">
            <!-- QrConnect -->
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

            <!-- Payments -->
            <Card>
              <CardContent class="p-0">
                <nav class="flex items-center gap-2 border-b p-3 text-sm">
                  <a href="#" class="text-muted-foreground hover:text-foreground">Home</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-muted-foreground"><path d="m9 18 6-6-6-6"/></svg>
                  <span class="font-medium">Payments</span>
                </nav>
                <div class="p-4 space-y-1">
                  <a href="#" class="flex items-center gap-3 rounded-lg border p-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                    <div>
                      <p class="font-medium">Change transfer limit</p>
                      <p class="text-xs text-muted-foreground">Adjust how much you can send from your balance.</p>
                    </div>
                  </a>
                  <a href="#" class="flex items-center gap-3 rounded-lg border p-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="21" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="13" y2="13"/></svg>
                    <div>
                      <p class="font-medium">Scheduled transfers</p>
                      <p class="text-xs text-muted-foreground">Set up a transfer to send at a later date.</p>
                    </div>
                  </a>
                  <a href="#" class="flex items-center gap-3 rounded-lg border p-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    <div>
                      <p class="font-medium">Recurring card payments</p>
                      <p class="text-xs text-muted-foreground">Manage your repeated card transactions.</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <!-- Col 5 -->
          <div class="hidden flex-col gap-8 min-[1900px]:flex min-[1900px]:gap-10">
            <!-- EmptyDistributeTrack -->
            <Card class="flex flex-col items-center justify-center py-12 text-center">
              <CardContent class="flex flex-col items-center gap-4">
                <div class="rounded-full bg-muted p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                </div>
                <div class="space-y-1">
                  <p class="text-sm font-medium">Distribute Track</p>
                  <p class="text-xs text-muted-foreground">Upload your first master to start reaching listeners on Spotify, Apple Music, and more.</p>
                </div>
                <Button>Create Release</Button>
              </CardContent>
            </Card>

            <!-- AnalyticsCard -->
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

            <!-- NotificationSettings -->
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

            <!-- PowerUsage -->
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
        <div class="absolute inset-x-0 top-0 z-1 h-120 bg-gradient-to-b from-background via-muted to-transparent dark:hidden"></div>
        <div class="absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-background via-muted/80 to-transparent dark:via-background/80 lg:h-80 xl:h-64"></div>
      </div>
    </div>
  </div>

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
