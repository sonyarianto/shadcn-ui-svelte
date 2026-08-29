<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '../lib/utils.js';

  let {
    open = $bindable(false),
    class: className,
    children
  }: {
    open?: boolean;
    class?: string;
    children?: Snippet;
  } = $props();
</script>

<div class={cn('relative', className)}>
  {@render children?.()}
</div>
