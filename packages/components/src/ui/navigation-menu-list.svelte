<script lang="ts">
  import { NavigationMenu } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: NavigationMenu.ListProps = $props();
</script>

<NavigationMenu.List
  class={cn(
    'group flex flex-1 list-none items-center justify-center space-x-1',
    className
  )}
  {...restProps}
/>
