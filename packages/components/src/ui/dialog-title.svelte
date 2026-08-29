<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h2
  class={cn('text-lg font-semibold leading-none tracking-tight', className)}
  data-slot="dialog-title"
  {...restProps}
>
  {@render children?.()}
</h2>
