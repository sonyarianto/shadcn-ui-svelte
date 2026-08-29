<script lang="ts">
  import { Dialog } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: Dialog.HeaderProps & { children?: Snippet } = $props();
</script>

<div
  class={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
  {...restProps}
>
  {@render children?.()}
</div>
