<script lang="ts">
  import { DropdownMenu } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    inset = false,
    ...restProps
  }: DropdownMenu.ItemProps & { inset?: boolean } = $props();
</script>

<DropdownMenu.Item
  class={cn(
    'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
    inset && 'pl-8',
    className
  )}
  {...restProps}
/>
