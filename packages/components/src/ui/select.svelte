<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setSelectContext, type SelectContext } from '../lib/context.js';
  import { cn } from '../lib/utils.js';

  let {
    value = $bindable(undefined),
    class: className,
    children
  }: {
    value?: string;
    class?: string;
    children?: Snippet;
  } = $props();

  function onValueChange(newValue: string) {
    value = newValue;
  }

  function onOpenChange(open: boolean) {
    ctx.open = open;
  }

  const ctx = { value, onValueChange, open: false, onOpenChange } as SelectContext;
  setSelectContext(ctx);

  $effect(() => {
    ctx.value = value;
  });
</script>

<div class={cn('relative', className)}>
  {@render children?.()}
</div>
