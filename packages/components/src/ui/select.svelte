<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    value = $bindable(''),
    class: className,
    children,
    ...restProps
  }: {
    value?: string;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn('relative', className)}
  data-slot="select"
  {...restProps}
>
  {@render children?.()}
</div>
