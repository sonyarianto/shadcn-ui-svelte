<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLSpanAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: {
    class?: string;
    children?: Snippet;
  } & HTMLSpanAttributes = $props();
</script>

<span
  role="link"
  aria-disabled="true"
  aria-current="page"
  class={cn('font-medium text-foreground', className)}
  data-slot="breadcrumb-page"
  {...restProps}
>
  {@render children?.()}
</span>
