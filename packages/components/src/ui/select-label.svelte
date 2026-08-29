<script lang="ts">
  import { Select } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: Select.LabelProps = $props();
</script>

<Select.Label
  class={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
  {...restProps}
/>
