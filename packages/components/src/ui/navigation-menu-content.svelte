<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

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
    'absolute left-0 top-full z-50',
    className
  )}
>
  {@render children?.()}
</div>
