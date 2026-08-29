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

<div class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}>
  {@render children?.()}
</div>
