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
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<h3
  class={cn('font-semibold leading-none tracking-tight', className)}
  data-slot="card-title"
  {...restProps}
>
  {@render children?.()}
</h3>
