<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getTabsContext } from '$lib/context.js';
  import { cn } from '$lib/utils.js';

  let {
    value: contentValue,
    class: className,
    children
  }: {
    value: string;
    class?: string;
    children?: Snippet;
  } = $props();

  const ctx = getTabsContext();
  const isActive = $derived(ctx.value === contentValue);
</script>

{#if isActive}
  <div
    class={cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className)}
    role="tabpanel"
  >
    {@render children?.()}
  </div>
{/if}
