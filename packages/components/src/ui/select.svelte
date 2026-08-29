<script lang="ts">
  import { Select } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    value = $bindable(''),
    children,
    ...restProps
  }: Select.RootProps & { children?: Snippet } = $props();
</script>

<Select.Root bind:value {...restProps}>
  {@render children?.()}
</Select.Root>
