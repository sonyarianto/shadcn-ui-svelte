<script lang="ts">
  import { Tabs } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: Tabs.ListProps = $props();
</script>

<Tabs.List
  class={cn(
    'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
    className
  )}
  {...restProps}
/>
