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
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn('flex flex-col gap-1 [&>svg]:h-5 [&>svg]:w-5', className)}
  data-slot="toast-title"
  {...restProps}
>
  {@render children?.()}
</div>
