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
  } & HTMLAttributes<HTMLTableCaptionElement> = $props();
</script>

<caption
  class={cn('mt-4 text-sm text-muted-foreground', className)}
  data-slot="table-caption"
  {...restProps}
>
  {@render children?.()}
</caption>
