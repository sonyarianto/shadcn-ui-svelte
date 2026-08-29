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
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<aside
  class={cn(
    'relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
    className
  )}
  data-slot="sidebar-content"
  {...restProps}
>
  {@render children?.()}
</aside>
