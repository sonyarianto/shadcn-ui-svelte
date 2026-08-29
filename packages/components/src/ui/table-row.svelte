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
  } & HTMLAttributes<HTMLTableRowElement> = $props();
</script>

<tr
  class={cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className)}
  data-slot="table-row"
  {...restProps}
>
  {@render children?.()}
</tr>
