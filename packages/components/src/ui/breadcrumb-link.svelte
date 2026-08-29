<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span
  class={cn('font-medium text-foreground', className)}
  data-slot="breadcrumb-link"
  {...restProps}
>
  {@render children?.()}
</span>
