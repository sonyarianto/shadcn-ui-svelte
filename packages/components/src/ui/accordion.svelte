<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setAccordionContext, type AccordionContext } from '../lib/context.js';
  import { cn } from '../lib/utils.js';

  let {
    type = 'single',
    value = $bindable(type === 'single' ? undefined : []),
    class: className,
    children
  }: {
    type?: 'single' | 'multiple';
    value?: string | string[];
    class?: string;
    children?: Snippet;
  } = $props();

  function onValueChange(newValue: string | string[]) {
    value = newValue;
  }

  setAccordionContext({ value, onValueChange, type } as AccordionContext);

  $effect(() => {
    const ctx = getAccordionContext();
    ctx.value = value;
  });
</script>

<div class={cn('space-y-2', className)}>
  {@render children?.()}
</div>
