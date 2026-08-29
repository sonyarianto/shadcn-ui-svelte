<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getDropdownContext } from '../lib/context.js';
  import { cn } from '../lib/utils.js';

  let {
    class: className,
    inset = false,
    disabled = false,
    children,
    onclick
  }: {
    class?: string;
    inset?: boolean;
    disabled?: boolean;
    children?: Snippet;
    onclick?: () => void;
  } = $props();

  const ctx = getDropdownContext();

  function handleClick() {
    if (!disabled) {
      onclick?.();
      ctx.onOpenChange(false);
    }
  }
</script>

<button
  type="button"
  class={cn(
    'relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
    inset && 'pl-8',
    disabled ? 'pointer-events-none opacity-50' : '',
    className
  )}
  {disabled}
  onclick={handleClick}
>
  {@render children?.()}
</button>
