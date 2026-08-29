<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

  let {
    orientation = 'horizontal',
    class: className,
    children,
    ...restProps
  }: {
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  data-slot="scroll-area-viewport"
  class={cn('h-full w-full rounded-[inherit]', className)}
  {...restProps}
>
  {@render children?.()}
</div>
