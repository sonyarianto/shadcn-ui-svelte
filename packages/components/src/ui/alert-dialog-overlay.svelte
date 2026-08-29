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

<div class={cn('fixed inset-0 z-50 bg-black/80', className)}>
  {@render children?.()}
</div>
