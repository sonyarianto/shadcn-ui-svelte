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
  class={cn('flex flex-col gap-0.5 p-4 text-center sm:text-left', className)}
  data-slot="drawer-header"
  {...restProps}
>
  {@render children?.()}
</div>
