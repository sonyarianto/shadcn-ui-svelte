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

<ul
  class={cn(
    'group flex flex-1 list-none items-center justify-center space-x-1',
    className
  )}
>
  {@render children?.()}
</ul>
