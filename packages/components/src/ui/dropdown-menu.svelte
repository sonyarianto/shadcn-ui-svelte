<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setDropdownContext, type DropdownMenuContext } from '$lib/context.js';
  import { cn } from '$lib/utils.js';

  let {
    open = $bindable(false),
    class: className,
    children
  }: {
    open?: boolean;
    class?: string;
    children?: Snippet;
  } = $props();

  function onOpenChange(value: boolean) {
    open = value;
  }

  setDropdownContext({ open, onOpenChange } as DropdownMenuContext);

  $effect(() => {
    const ctx = getDropdownContext();
    ctx.open = open;
  });
</script>

<div class={cn('relative', className)}>
  {@render children?.()}
</div>
