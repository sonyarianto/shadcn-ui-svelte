<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getAccordionContext } from '../lib/context.js';
  import { cn } from '../lib/utils.js';

  let {
    value: itemValue,
    disabled = false,
    class: className,
    children
  }: {
    value: string;
    disabled?: boolean;
    class?: string;
    children?: Snippet;
  } = $props();

  const ctx = getAccordionContext();

  const isOpen = $derived(
    ctx.type === 'single'
      ? ctx.value === itemValue
      : Array.isArray(ctx.value) && ctx.value.includes(itemValue)
  );

  function toggle() {
    if (disabled) return;

    if (ctx.type === 'single') {
      ctx.onValueChange(isOpen ? '' : itemValue);
    } else {
      const current = Array.isArray(ctx.value) ? ctx.value : [];
      ctx.onValueChange(
        isOpen ? current.filter((v) => v !== itemValue) : [...current, itemValue]
      );
    }
  }
</script>

<div
  class={cn('border-b', className)}
  data-state={isOpen ? 'open' : 'closed'}
>
  {@render children?.({ isOpen, toggle, disabled })}
</div>
