<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    open = $bindable(false),
    class: className,
    children,
    ...restProps
  }: {
    open?: boolean;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

{#if open}
  <div
    class={cn('fixed inset-0 z-50', className)}
    data-slot="dialog"
    {...restProps}
  >
    {@render children?.()}
  </div>
{/if}
