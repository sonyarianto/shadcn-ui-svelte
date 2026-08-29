<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: {
    class?: string;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn(
    'flex items-center gap-2',
    className
  )}
  data-slot="native-select"
  {...restProps}
>
  <select
    class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    data-slot="native-select-input"
  >
    <slot />
  </select>
</div>
