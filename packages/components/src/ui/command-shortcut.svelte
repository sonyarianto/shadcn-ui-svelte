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
  class={cn('px-2 py-1.5 text-xs font-medium text-muted-foreground', className)}
  data-slot="command-shortcut"
  {...restProps}
>
  {@render children?.()}
</div>
