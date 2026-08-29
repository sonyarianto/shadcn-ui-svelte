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
  } & HTMLAttributes<HTMLUListElement> = $props();
</script>

<ul
  class={cn(
    'group flex flex-1 list-none items-center justify-center space-x-1',
    className
  )}
  data-slot="navigation-menu-list"
  {...restProps}
>
  {@render children?.()}
</ul>
