<script lang="ts">
  import { Tabs } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: Tabs.ContentProps = $props();
</script>

<Tabs.Content
  class={cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className)}
  {...restProps}
/>
