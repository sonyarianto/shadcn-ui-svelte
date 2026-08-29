<script lang="ts">
  import { DropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    open = $bindable(false),
    children,
    ...restProps
  }: DropdownMenu.RootProps & { children?: Snippet } = $props();
</script>

<DropdownMenu.Root bind:open {...restProps}>
  {@render children?.()}
</DropdownMenu.Root>
