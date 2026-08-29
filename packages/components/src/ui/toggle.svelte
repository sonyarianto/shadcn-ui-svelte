<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    variant = 'default',
    size = 'default',
    pressed = $bindable(false),
    class: className,
    children,
    onclick,
    ...restProps
  }: {
    variant?: 'default' | 'outline';
    size?: 'default' | 'sm' | 'lg';
    pressed?: boolean;
    class?: string;
    children?: Snippet;
    onclick?: () => void;
  } & HTMLButtonAttributes = $props();

  const variants = {
    default: 'bg-transparent',
    outline: 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground'
  };

  const sizes = {
    default: 'h-9 px-3',
    sm: 'h-8 px-2',
    lg: 'h-10 px-3'
  };

  function handleClick() {
    pressed = !pressed;
    onclick?.();
  }
</script>

<button
  type="button"
  aria-pressed={pressed}
  data-state={pressed ? 'on' : 'off'}
  class={cn(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    pressed && 'bg-accent text-accent-foreground',
    className
  )}
  data-slot="toggle"
  onclick={handleClick}
  {...restProps}
>
  {@render children?.()}
</button>
