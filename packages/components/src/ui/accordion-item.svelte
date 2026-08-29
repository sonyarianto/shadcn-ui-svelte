<script lang="ts">
  import { Accordion } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: Accordion.ItemProps = $props();
</script>

<Accordion.Item
  class={cn('border-b', className)}
  {...restProps}
/>
