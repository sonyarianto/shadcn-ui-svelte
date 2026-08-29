<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    orientation = 'horizontal',
    class: className,
    children
  }: {
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    children?: Snippet;
  } = $props();
</script>

<div
  class={cn(
    'relative overflow-hidden',
    orientation === 'horizontal' ? 'h-full' : 'w-full',
    className
  )}
>
  <div class={cn(
    'h-full w-full',
    orientation === 'horizontal' ? 'overflow-x-auto' : 'overflow-y-auto',
    '[&::-webkit-scrollbar]:hidden [&[data-orient=horizontal]]:h-2.5 [&[data-orient=vertical]]:w-2.5'
  )}>
    {@render children?.()}
  </div>
</div>
