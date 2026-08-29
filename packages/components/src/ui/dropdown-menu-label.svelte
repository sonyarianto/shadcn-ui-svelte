<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    inset = false,
    children,
    ...restProps
  }: {
    class?: string;
    inset?: boolean;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn(
    'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
    inset && 'pl-8',
    className
  )}
  data-slot="dropdown-menu-label"
  {...restProps}
>
  {@render children?.()}
</div>
