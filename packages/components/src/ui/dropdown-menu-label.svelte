<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '../lib/utils.js';

  let {
    class: className,
    inset = false,
    children
  }: {
    class?: string;
    inset?: boolean;
    children?: Snippet;
  } = $props();
</script>

<div
  class={cn(
    'px-2 py-1.5 text-sm font-semibold',
    inset && 'pl-8',
    className
  )}
>
  {@render children?.()}
</div>
