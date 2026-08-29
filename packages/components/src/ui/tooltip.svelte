<script lang="ts">
  import { Tooltip } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    open = $bindable(false),
    children,
    ...restProps
  }: Tooltip.RootProps & { children?: Snippet } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root bind:open {...restProps}>
    {@render children?.()}
  </Tooltip.Root>
</Tooltip.Provider>
