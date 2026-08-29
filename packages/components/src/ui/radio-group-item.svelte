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
  } & HTMLAttributes<HTMLLabelElement> = $props();
</script>

<label
  class={cn(
    'flex items-center gap-2 rounded-md border border-transparent p-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary',
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    className
  )}
  data-slot="radio-group-item"
  {...restProps}
>
  {@render children?.()}
</label>
