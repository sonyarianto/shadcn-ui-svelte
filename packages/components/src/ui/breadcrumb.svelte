<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

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
  aria-label="breadcrumb"
  class={cn('', className)}
  data-slot="breadcrumb"
  {...restProps}
>
  {@render children?.()}
</nav>
