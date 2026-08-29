<script lang="ts">
  import { DropdownMenu } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    inset = false,
    ...restProps
  }: DropdownMenu.LabelProps & { inset?: boolean } = $props();
</script>

<DropdownMenu.Label
  class={cn(
    'px-2 py-1.5 text-sm font-semibold',
    inset && 'pl-8',
    className
  )}
  {...restProps}
/>
