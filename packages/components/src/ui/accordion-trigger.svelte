<script lang="ts">
  import { Accordion } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: Accordion.TriggerProps = $props();
</script>

<Accordion.Header class="flex">
  <Accordion.Trigger
    class={cn(
      'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
      className
    )}
    {...restProps}
  >
    <slot />
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
      class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </Accordion.Trigger>
</Accordion.Header>
