<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLHeadingAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: {
    class?: string;
    children?: Snippet;
  } & HTMLHeadingAttributes = $props();
</script>

<div
  class={cn('text-lg font-semibold text-foreground', className)}
  data-slot="sheet-title"
  {...restProps}
>
  {@render children?.()}
</div>
