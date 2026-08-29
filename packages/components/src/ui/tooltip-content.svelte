<script lang="ts">
  import { Tooltip } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    side = 'top',
    sideOffset = 4,
    ...restProps
  }: Tooltip.ContentProps = $props();
</script>

<Tooltip.Portal>
  <Tooltip.Content
    class={cn(
      'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95',
      className
    )}
    {side}
    {sideOffset}
    {...restProps}
  />
</Tooltip.Portal>
