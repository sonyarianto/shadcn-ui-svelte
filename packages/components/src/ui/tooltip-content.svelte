<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    side = 'top',
    class: className,
    children,
    ...restProps
  }: {
    side?: 'top' | 'right' | 'bottom' | 'left';
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();

  const sideClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };
</script>

<div
  class={cn(
    'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95',
    sideClasses[side],
    className
  )}
  data-slot="tooltip-content"
  {...restProps}
>
  {@render children?.()}
</div>
