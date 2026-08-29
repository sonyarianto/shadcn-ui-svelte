<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    open = $bindable(false),
    class: className,
    children,
    ...restProps
  }: {
    open?: boolean;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn('relative', className)}
  data-slot="date-picker"
  {...restProps}
>
  {@render children?.()}
</div>
