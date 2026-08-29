<script lang="ts">
  import { DropdownMenu } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: DropdownMenu.SeparatorProps = $props();
</script>

<DropdownMenu.Separator
  class={cn('-mx-1 my-1 h-px bg-muted', className)}
  {...restProps}
/>
