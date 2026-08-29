<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h5
  class={cn('mb-1 font-medium leading-none tracking-tight', className)}
  data-slot="alert-title"
  {...restProps}
>
  {@render children?.()}
</h5>
