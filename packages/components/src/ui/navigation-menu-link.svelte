<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '../lib/utils.js';

  let {
    href = '#',
    class: className,
    children
  }: {
    href?: string;
    class?: string;
    children?: Snippet;
  } = $props();
</script>

<a
  {href}
  class={cn(
    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
    className
  )}
>
  {@render children?.()}
</a>
