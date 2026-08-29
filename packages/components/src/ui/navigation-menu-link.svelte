<script lang="ts">
  import { NavigationMenu } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: NavigationMenu.LinkProps = $props();
</script>

<NavigationMenu.Link
  class={cn(
    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
    className
  )}
  {...restProps}
/>
