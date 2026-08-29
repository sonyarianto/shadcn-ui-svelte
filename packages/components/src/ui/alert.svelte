<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../lib/utils.js';

  let {
    variant = 'default',
    class: className,
    children,
    ...restProps
  }: {
    variant?: 'default' | 'destructive';
    class?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement> = $props();

  const variants = {
    default: 'bg-background text-foreground border',
    destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
  };
</script>

<div
  role="alert"
  class={cn(
    'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
    variants[variant],
    className
  )}
  data-slot="alert"
  {...restProps}
>
  {@render children?.()}
</div>
