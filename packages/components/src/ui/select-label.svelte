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
  class={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
  data-slot="select-label"
  {...restProps}
>
  {@render children?.()}
</div>
