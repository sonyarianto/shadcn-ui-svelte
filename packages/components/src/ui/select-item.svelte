<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    value = '',
    disabled = false,
    selected = false,
    class: className,
    children,
    ...restProps
  }: {
    value?: string;
    disabled?: boolean;
    selected?: boolean;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  role="option"
  aria-selected={selected}
  {disabled}
  data-value={value}
  class={cn(
    'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
    disabled ? 'pointer-events-none opacity-50' : '',
    selected ? 'bg-accent text-accent-foreground' : '',
    className
  )}
  data-slot="select-item"
  {...restProps}
>
  {@render children?.()}
</div>
