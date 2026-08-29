<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    open = $bindable(false),
    direction = 'bottom',
    class: className,
    children,
    ...restProps
  }: {
    open?: boolean;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

{#if open}
  <div
    class={cn('fixed inset-0 z-50', className)}
    data-slot="drawer"
    {...restProps}
  >
    {@render children?.()}
  </div>
{/if}
