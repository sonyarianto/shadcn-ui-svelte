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
  class={cn(
    'flex items-center rounded-md border border-input bg-background shadow-sm focus-within:ring-1 focus-within:ring-ring',
    className
  )}
  data-slot="input-otp"
  {...restProps}
>
  {@render children?.()}
</div>
