<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setDialogContext, type DialogContext } from '../lib/context.js';

  let {
    open = $bindable(false),
    children
  }: {
    open?: boolean;
    children?: Snippet;
  } = $props();

  function onOpenChange(value: boolean) {
    open = value;
  }

  setDialogContext({ open, onOpenChange } as DialogContext);

  $effect(() => {
    const ctx = getDialogContext();
    ctx.open = open;
  });
</script>

{@render children?.()}
