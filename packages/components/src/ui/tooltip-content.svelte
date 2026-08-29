<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    side = 'top',
    sideOffset = 4,
    children
  }: {
    class?: string;
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
    children?: Snippet;
  } = $props();
</script>

<div
  class={cn(
    'absolute z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground',
    side === 'top' && 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    side === 'bottom' && 'top-full left-1/2 -translate-x-1/2 mt-2',
    side === 'left' && 'right-full top-1/2 -translate-y-1/2 mr-2',
    side === 'right' && 'left-full top-1/2 -translate-y-1/2 ml-2',
    className
  )}
>
  {@render children?.()}
</div>
