<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    direction = 'horizontal',
    class: className,
    children
  }: {
    direction?: 'horizontal' | 'vertical';
    class?: string;
    children?: Snippet;
  } = $props();
</script>

<div
  class={cn(
    'flex h-full w-full',
    direction === 'vertical' && 'flex-col',
    className
  )}
  data-orientation={direction}
>
  {@render children?.()}
</div>
