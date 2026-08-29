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
  role="separator"
  class={cn('-mx-1 my-1 h-px bg-muted', className)}
  data-slot="select-separator"
  {...restProps}
></div>
