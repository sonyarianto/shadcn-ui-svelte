<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

  let {
    open = $bindable(false),
    side = 'left',
    class: className,
    children,
    ...restProps
  }: {
    open?: boolean;
    side?: 'left' | 'right';
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn(
    'group peer hidden md:block data-[state=open]:block data-[state= closed]:block',
    className
  )}
  data-slot="sidebar"
  {...restProps}
>
  {@render children?.()}
</div>
