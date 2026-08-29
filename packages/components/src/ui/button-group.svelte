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

<div
  class={cn(
    'inline-flex rounded-md shadow-sm',
    className
  )}
  data-slot="button-group"
  role="group"
  {...restProps}
>
  {@render children?.()}
</div>
