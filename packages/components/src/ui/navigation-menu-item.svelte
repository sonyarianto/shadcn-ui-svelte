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
  } & HTMLAttributes<HTMLLIElement> = $props();
</script>

<li
  class={cn('', className)}
  data-slot="navigation-menu-item"
  {...restProps}
>
  {@render children?.()}
</li>
