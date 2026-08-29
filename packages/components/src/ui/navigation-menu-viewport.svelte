<script lang="ts">
  import { NavigationMenu } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: NavigationMenu.ViewportProps = $props();
</script>

<NavigationMenu.Viewport
  class={cn(
    'relative mt-1.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
    className
  )}
  {...restProps}
/>
