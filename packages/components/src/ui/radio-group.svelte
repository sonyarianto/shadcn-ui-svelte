<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

  let {
    value = $bindable(''),
    disabled = false,
    class: className,
    children,
    ...restProps
  }: {
    value?: string;
    disabled?: boolean;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn('grid gap-2', className)}
  data-slot="radio-group"
  role="radiogroup"
  {...restProps}
>
  {@render children?.()}
</div>
