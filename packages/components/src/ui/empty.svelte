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
  class={cn(
    'flex flex-col items-center justify-center gap-2 rounded-md border border-dashed p-8 text-center',
    className
  )}
  data-slot="empty"
  {...restProps}
>
  {@render children?.()}
</div>
