<script lang="ts">
  import { Popover } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    open = $bindable(false),
    children,
    ...restProps
  }: Popover.RootProps & { children?: Snippet } = $props();
</script>

<Popover.Root bind:open {...restProps}>
  {@render children?.()}
</Popover.Root>
