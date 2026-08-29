<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getTabsContext } from '$lib/context.js';
  import { cn } from '$lib/utils.js';

  let {
    value: triggerValue,
    class: className,
    children
  }: {
    value: string;
    class?: string;
    children?: Snippet;
  } = $props();

  const ctx = getTabsContext();
  const isActive = $derived(ctx.value === triggerValue);
</script>

<button
  class={cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    isActive && 'bg-background text-foreground shadow-sm',
    className
  )}
  data-state={isActive ? 'active' : 'inactive'}
  onclick={() => ctx.onValueChange(triggerValue)}
>
  {@render children?.()}
</button>
