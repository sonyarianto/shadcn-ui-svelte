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
  } & HTMLAttributes<HTMLElement> = $props();
</script>

<nav
  class={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
  data-slot="navigation-menu"
  {...restProps}
>
  {@render children?.()}
</nav>
