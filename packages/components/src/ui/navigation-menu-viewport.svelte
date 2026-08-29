<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '../lib/utils.js';

  let {
    class: className,
    children
  }: {
    class?: string;
    children?: Snippet;
  } = $props();
</script>

<div
  class={cn(
    'relative mt-1.5 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg',
    className
  )}
>
  {@render children?.()}
</div>
