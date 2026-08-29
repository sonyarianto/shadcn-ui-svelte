<script lang="ts">
  import { Select } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    side = 'bottom',
    sideOffset = 4,
    ...restProps
  }: Select.ContentProps = $props();
</script>

<Select.Portal>
  <Select.Content
    class={cn(
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      className
    )}
    {side}
    {sideOffset}
    {...restProps}
  />
</Select.Portal>
