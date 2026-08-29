<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '../lib/utils.js';

  let {
    class: className,
    theme = 'system',
    position = 'bottom-right',
    children
  }: {
    class?: string;
    theme?: 'system' | 'light' | 'dark';
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    children?: Snippet;
  } = $props();
</script>

<div class={cn('fixed z-50', className)}
  class:top-4={position.includes('top')}
  class:bottom-4={position.includes('bottom')}
  class:left-4={position.includes('left')}
  class:right-4={position.includes('right')}
>
  {@render children?.()}
</div>
