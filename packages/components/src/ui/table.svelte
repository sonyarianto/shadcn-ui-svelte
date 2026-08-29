<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLTableAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

  let {
    class: className,
    children,
    ...restProps
  }: {
    class?: string;
    children?: Snippet;
  } & HTMLTableAttributes = $props();
</script>

<div class="relative w-full overflow-auto">
  <table
    class={cn('w-full caption-bottom text-sm', className)}
    data-slot="table"
    {...restProps}
  >
    {@render children?.()}
  </table>
</div>
