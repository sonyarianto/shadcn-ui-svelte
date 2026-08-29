<script lang="ts">
  import { cn } from '$lib/utils.js';

  type ChartType = 'bar' | 'line' | 'pie';

  type ChartDataPoint = {
    label: string;
    value: number;
    color?: string;
  };

  let {
    type = 'bar',
    data = [],
    height = 200,
    showGrid = true,
    showLabels = true,
    class: className
  }: {
    type?: ChartType;
    data?: ChartDataPoint[];
    height?: number;
    showGrid?: boolean;
    showLabels?: boolean;
    class?: string;
  } = $props();

  const maxValue = $derived(Math.max(...data.map(d => d.value), 1));
  const colors = ['oklch(0.646 0.222 41.116)', 'oklch(0.6 0.118 184.714)', 'oklch(0.398 0.07 227.392)', 'oklch(0.828 0.189 84.429)', 'oklch(0.769 0.188 70.08)'];
</script>

<div class={cn('w-full', className)}>
  <div class="relative" style="height: {height}px">
    <!-- Grid -->
    {#if showGrid}
      <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {#each [0, 0.25, 0.5, 0.75, 1] as level}
          <div class="border-b border-border/50"></div>
        {/each}
      </div>
    {/if}

    <!-- Chart content -->
    {#if type === 'bar'}
      <div class="absolute inset-0 flex items-end gap-1 px-2">
        {#each data as item, i}
          <div class="flex-1 flex flex-col items-center gap-1">
            <div
              class="w-full rounded-t-sm transition-all duration-300"
              style="
                height: {(item.value / maxValue) * 100}%;
                background-color: {item.color || colors[i % colors.length]};
              "
            ></div>
            {#if showLabels}
              <span class="text-xs text-muted-foreground truncate w-full text-center">{item.label}</span>
            {/if}
          </div>
        {/each}
      </div>
    {:else if type === 'line'}
      <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {#if data.length > 1}
          <!-- Line path -->
          <polyline
            fill="none"
            stroke="oklch(0.205 0 0)"
            stroke-width="2"
            points={data.map((item, i) =>
              `${(i / (data.length - 1)) * 100}%,${100 - (item.value / maxValue) * 100}%`
            ).join(' ')}
          />
          <!-- Data points -->
          {#each data as item, i}
            <circle
              cx="{(i / (data.length - 1)) * 100}%"
              cy="{100 - (item.value / maxValue) * 100}%"
              r="4"
              fill="oklch(0.205 0 0)"
            />
          {/each}
        {/if}
      </svg>
    {:else if type === 'pie'}
      <div class="flex items-center justify-center">
        <svg viewBox="0 0 100 100" class="w-full h-full max-w-[200px]">
          {#each data as item, i}
            {@const total = data.reduce((sum, d) => sum + d.value, 0)}
            {@const startAngle = data.slice(0, i).reduce((sum, d) => sum + (d.value / total) * 360, 0)}
            {@const endAngle = startAngle + (item.value / total) * 360}
            <path
              d="M 50 50 L {50 + 50 * Math.cos((startAngle - 90) * Math.PI / 180)} {50 + 50 * Math.sin((startAngle - 90) * Math.PI / 180)} A 50 50 0 {endAngle - startAngle > 180 ? 1 : 0} 1 {50 + 50 * Math.cos((endAngle - 90) * Math.PI / 180)} {50 + 50 * Math.sin((endAngle - 90) * Math.PI / 180)} Z"
              fill={item.color || colors[i % colors.length]}
            />
          {/each}
        </svg>
      </div>
    {/if}
  </div>

  <!-- Legend -->
  {#if showLabels}
    <div class="mt-4 flex flex-wrap gap-4 justify-center">
      {#each data as item, i}
        <div class="flex items-center gap-2 text-sm">
          <div
            class="h-3 w-3 rounded-full"
            style="background-color: {item.color || colors[i % colors.length]}"
          ></div>
          <span class="text-muted-foreground">{item.label}</span>
          <span class="font-medium">{item.value}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
