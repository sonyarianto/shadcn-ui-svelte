<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    inset = false,
    children,
    ...restProps
  }: {
    class?: string;
    inset?: boolean;
    children?: Snippet;
  } & HTMLButtonAttributes = $props();
</script>

<button
  class={cn(
    'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
    inset && 'pl-8',
    className
  )}
  data-slot="dropdown-menu-item"
  {...restProps}
>
  {@render children?.()}
</button>
