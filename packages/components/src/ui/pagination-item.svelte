<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLLiAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: {
    class?: string;
    children?: Snippet;
  } & HTMLLiAttributes = $props();
</script>

<li
  class={cn('', className)}
  data-slot="pagination-item"
  {...restProps}
>
  {@render children?.()}
</li>
