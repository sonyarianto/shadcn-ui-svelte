<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    variant = 'default',
    class: className,
    children,
    ...restProps
  }: {
    variant?: 'default' | 'destructive' | 'success';
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();

  const variants = {
    default: 'border bg-background text-foreground',
    destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground',
    success: 'border-green-500 bg-green-50 text-green-900'
  };
</script>

<div
  class={cn(
    'pointer-events-auto relative flex w-full items-center justify-between overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',
    variants[variant],
    className
  )}
  data-slot="toast"
  {...restProps}
>
  {@render children?.()}
</div>
