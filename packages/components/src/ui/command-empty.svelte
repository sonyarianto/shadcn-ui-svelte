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
  class={cn('overflow-hidden', className)}
  data-slot="command-empty"
  {...restProps}
>
  <p class="py-6 text-center text-sm">{@render children?.()}</p>
</div>
