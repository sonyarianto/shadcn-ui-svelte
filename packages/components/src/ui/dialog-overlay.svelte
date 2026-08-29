<script lang="ts">
  import { getDialogContext } from '../lib/context.js';
  import { cn } from '../lib/utils.js';

  let {
    class: className
  }: {
    class?: string;
  } = $props();

  const ctx = getDialogContext();

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      ctx.onOpenChange(false);
    }
  }
</script>

{#if ctx.open}
  <div
    class={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    data-state={ctx.open ? 'open' : 'closed'}
    role="presentation"
    onclick={() => ctx.onOpenChange(false)}
    onkeydown={handleKeydown}
  ></div>
{/if}
