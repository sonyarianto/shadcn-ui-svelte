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

<div
  class={cn('px-2 py-1.5 text-sm font-semibold', className)}
  data-slot="dropdown-menu-group"
  {...restProps}
>
  {@render children?.()}
</div>
