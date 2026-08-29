<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: {
    class?: string;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn('-mx-1 my-1 h-px bg-muted', className)}
  data-slot="dropdown-menu-separator"
  {...restProps}
></div>
