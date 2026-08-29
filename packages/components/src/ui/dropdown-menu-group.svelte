<script lang="ts">
  import { DropdownMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: DropdownMenu.GroupProps & { children?: Snippet } = $props();
</script>

<DropdownMenu.Group
  class={cn('px-2 py-1.5 text-sm font-semibold', className)}
  {...restProps}
>
  {@render children?.()}
</DropdownMenu.Group>
