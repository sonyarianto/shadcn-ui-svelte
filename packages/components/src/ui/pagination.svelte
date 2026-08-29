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

<nav
  role="navigation"
  aria-label="pagination"
  class={cn('mx-auto flex w-full justify-center', className)}
  data-slot="pagination"
  {...restProps}
>
  {@render children?.()}
</nav>
