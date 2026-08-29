<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

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
    'flex w-max max-w-[80%] flex-col gap-1 rounded-lg bg-muted px-4 py-2 text-sm',
    className
  )}
  data-slot="bubble"
  {...restProps}
>
  {@render children?.()}
</div>
