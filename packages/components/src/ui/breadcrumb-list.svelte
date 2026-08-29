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
  } & HTMLAttributes<HTMLOListElement> = $props();
</script>

<ol
  class={cn('flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5', className)}
  data-slot="breadcrumb-list"
  {...restProps}
>
  {@render children?.()}
</ol>
