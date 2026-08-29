<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    collapsed = false,
    class: className,
    children
  }: {
    collapsed?: boolean;
    class?: string;
    children?: Snippet;
  } = $props();
</script>

{#if !collapsed}
  <div class={cn('overflow-hidden', className)}>
    {@render children?.()}
  </div>
{/if}
