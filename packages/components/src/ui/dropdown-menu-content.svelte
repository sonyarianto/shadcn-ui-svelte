<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getDropdownContext } from '../lib/context.js';
  import { trapFocus, focusFirst } from '../lib/focus-trap.js';
  import { cn } from '../lib/utils.js';
  import { onMount, onDestroy } from 'svelte';

  let {
    class: className,
    sideOffset = 4,
    children
  }: {
    class?: string;
    sideOffset?: number;
    children?: Snippet;
  } = $props();

  const ctx = getDropdownContext();
  let contentEl: HTMLElement | undefined = $state();

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      ctx.onOpenChange(false);
    }
    if (contentEl) {
      trapFocus(contentEl, event);
    }
  }

  function handleClickOutside(event: MouseEvent) {
    if (contentEl && !contentEl.contains(event.target as Node)) {
      ctx.onOpenChange(false);
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    if (ctx.open && contentEl) {
      focusFirst(contentEl);
    }
  });

  onDestroy(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  $effect(() => {
    if (ctx.open && contentEl) {
      focusFirst(contentEl);
    }
  });
</script>

{#if ctx.open}
  <div
    bind:this={contentEl}
    class={cn(
      'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
      className
    )}
    role="menu"
    tabindex="-1"
    onkeydown={handleKeydown}
  >
    {@render children?.()}
  </div>
{/if}
