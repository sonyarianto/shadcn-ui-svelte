<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';
  import Toggle from './toggle.svelte';

  let {
    variant = 'default',
    size = 'default',
    value = $bindable(''),
    class: className,
    children,
    ...restProps
  }: {
    variant?: 'default' | 'outline';
    size?: 'default' | 'sm' | 'lg';
    value?: string;
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={cn('flex items-center justify-center gap-1', className)}
  data-slot="toggle-group"
  role="group"
  {...restProps}
>
  {@render children?.()}
</div>
