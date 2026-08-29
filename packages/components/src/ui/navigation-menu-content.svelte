<script lang="ts">
  import { NavigationMenu } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: NavigationMenu.ContentProps = $props();
</script>

<NavigationMenu.Content
  class={cn(
    'absolute left-0 top-full z-50',
    className
  )}
  {...restProps}
/>
