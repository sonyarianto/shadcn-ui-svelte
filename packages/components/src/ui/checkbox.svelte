<script lang="ts">
  import { Checkbox } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    checked = $bindable(false),
    disabled = false,
    class: className,
    ...restProps
  }: Checkbox.RootProps = $props();
</script>

<Checkbox.Root
  bind:checked
  {disabled}
  class={cn(
    'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    className
  )}
  {...restProps}
>
  <Checkbox.Indicator class="flex items-center justify-center text-current">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </Checkbox.Indicator>
</Checkbox.Root>
