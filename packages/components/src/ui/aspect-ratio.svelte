<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    ratio = 1 / 1,
    class: className,
    children,
    ...restProps
  }: {
    ratio?: number;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  style="aspect-ratio: {ratio}"
  class={cn('relative overflow-hidden', className)}
  data-slot="aspect-ratio"
  {...restProps}
>
  {@render children?.()}
</div>
