<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setPopoverContext } from '../lib/context.js';

  let {
    open = $bindable(false),
    children
  }: {
    open?: boolean;
    children?: Snippet;
  } = $props();

  setPopoverContext({
    get open() { return open; },
    onOpenChange: (value: boolean) => { open = value; }
  });
</script>

{@render children?.()}
