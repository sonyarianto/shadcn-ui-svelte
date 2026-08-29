<script lang="ts">
  import { Select } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    value,
    disabled = false,
    ...restProps
  }: Select.ItemProps = $props();
</script>

<Select.Item
  {value}
  {disabled}
  class={cn(
    'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    className
  )}
  {...restProps}
>
  <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
    <Select.ItemIndicator>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </Select.ItemIndicator>
  </span>
  <Select.ItemText />
</Select.Item>
