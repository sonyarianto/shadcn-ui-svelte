<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    dir = 'ltr',
    class: className,
    children,
    ...restProps
  }: {
    dir?: 'ltr' | 'rtl';
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  dir={dir}
  class={cn('', className)}
  data-slot="direction"
  {...restProps}
>
  {@render children?.()}
</div>
