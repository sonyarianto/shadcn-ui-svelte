<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    heading,
    children,
    ...restProps
  }: {
    class?: string;
    heading?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn('px-2 py-1.5 text-xs font-medium text-muted-foreground', className)}
  data-slot="command-group"
  {...restProps}
>
  {#if heading}
    <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">{heading}</div>
  {/if}
  {@render children?.()}
</div>
