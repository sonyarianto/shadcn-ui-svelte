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
    'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
    className
  )}
>
  {@render children?.()}
</div>
