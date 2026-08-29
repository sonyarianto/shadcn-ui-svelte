<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

  let {
    class: className,
    ...restProps
  }: {
    class?: string;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn(
    'h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent text-muted-foreground',
    className
  )}
  data-slot="spinner"
  {...restProps}
>
  <span class="sr-only">Loading...</span>
</div>
