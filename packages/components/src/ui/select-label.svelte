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
  class={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
>
  {@render children?.()}
</div>
