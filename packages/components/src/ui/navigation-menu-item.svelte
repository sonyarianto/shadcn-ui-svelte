<script lang="ts">
  import { NavigationMenu } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: NavigationMenu.ItemProps = $props();
</script>

<NavigationMenu.Item
  class={cn('', className)}
  {...restProps}
/>
