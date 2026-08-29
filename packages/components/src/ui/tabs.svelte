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
  class={cn('w-full', className)}
  data-slot="tabs"
  {...restProps}
>
  {@render children?.()}
</div>
