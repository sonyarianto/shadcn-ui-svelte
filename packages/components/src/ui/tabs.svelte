<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setTabsContext, type TabsContext } from '$lib/context.js';
  import { cn } from '$lib/utils.js';

  let {
    value = $bindable(''),
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

  setTabsContext({ value, onValueChange } as TabsContext);

  $effect(() => {
    const ctx = getTabsContext();
    ctx.value = value;
  });
</script>

<div class={cn('w-full', className)}>
  {@render children?.()}
</div>
