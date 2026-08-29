<script lang="ts">
  import { Accordion } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: Accordion.RootProps & { children?: Snippet } = $props();
</script>

<Accordion.Root
  class={cn('space-y-2', className)}
  {...restProps}
>
  {@render children?.()}
</Accordion.Root>
