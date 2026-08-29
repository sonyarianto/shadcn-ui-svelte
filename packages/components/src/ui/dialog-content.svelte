<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getDialogContext } from '../lib/context.js';
  import { trapFocus, focusFirst } from '../lib/focus-trap.js';
  import { cn } from '../lib/utils.js';
  import { onMount, onDestroy } from 'svelte';

  let {
    class: className,
    children
  }: {
    class?: string;
    children?: Snippet;
  } = $props();

  const ctx = getDialogContext();
  let contentEl: HTMLElement | undefined = $state();

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      ctx.onOpenChange(false);
    }
    trapFocus(contentEl, event);
  }

  function handleClick(event: MouseEvent) {
    if (event.target === contentEl) {
      ctx.onOpenChange(false);
    }
  }

  onMount(() => {
    if (ctx.open) {
      document.body.style.overflow = 'hidden';
      focusFirst(contentEl);
    }
  });

  onDestroy(() => {
    document.body.style.overflow = '';
  });

  $effect(() => {
    if (ctx.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
</script>

{#if ctx.open}
  <div
    bind:this={contentEl}
    role="dialog"
    aria-modal="true"
    class={cn(
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
      className
    )}
    data-state={ctx.open ? 'open' : 'closed'}
    tabindex="-1"
    onkeydown={handleKeydown}
    onclick={handleClick}
  >
    {@render children?.()}
  </div>
{/if}
