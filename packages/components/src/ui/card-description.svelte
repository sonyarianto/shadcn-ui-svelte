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
  } & HTMLAttributes<HTMLParagraphElement> = $props();
</script>

<p
  class={cn('text-sm text-muted-foreground', className)}
  data-slot="card-description"
  {...restProps}
>
  {@render children?.()}
</p>
