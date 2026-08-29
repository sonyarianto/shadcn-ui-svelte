<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: {
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLTableSectionElement> = $props();
</script>

<thead
  class={cn('[&_tr]:border-b', className)}
  data-slot="table-header"
  {...restProps}
>
  {@render children?.()}
</thead>
