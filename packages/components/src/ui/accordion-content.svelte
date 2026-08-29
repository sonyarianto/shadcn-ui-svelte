<script lang="ts">
  import { Accordion } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: Accordion.ContentProps = $props();
</script>

<Accordion.Content
  class={cn('overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', className)}
  {...restProps}
>
  <div class="pb-4 pt-0">
    <slot />
  </div>
</Accordion.Content>
