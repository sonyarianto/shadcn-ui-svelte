<script lang="ts">
  import { NavigationMenu } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: NavigationMenu.RootProps & { children?: Snippet } = $props();
</script>

<NavigationMenu.Root
  class={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
  {...restProps}
>
  {@render children?.()}
</NavigationMenu.Root>
