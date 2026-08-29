<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    orientation = 'horizontal',
    decorative = false,
    class: className,
    ...restProps
  }: {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
    class?: string;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  role={decorative ? 'none' : 'separator'}
  aria-orientation={decorative ? undefined : orientation}
  class={cn(
    'shrink-0 bg-border',
    orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
    className
  )}
  data-slot="separator"
  {...restProps}
></div>
