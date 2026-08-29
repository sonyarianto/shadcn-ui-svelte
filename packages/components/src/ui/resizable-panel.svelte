<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';
  import { context } from '$lib/context.js';

  type ResizableGroupContext = {
    direction: 'horizontal' | 'vertical';
  };

  const groupContext = context<ResizableGroupContext>('resizable-group');

  let {
    defaultSize = 50,
    minSize = 10,
    maxSize = 90,
    class: className,
    children
  }: {
    defaultSize?: number;
    minSize?: number;
    maxSize?: number;
    class?: string;
    children?: Snippet;
  } = $props();

  let size = $state(defaultSize);
  let isDragging = $state(false);
  let panelEl: HTMLElement;

  const group = groupContext.get();

  function handleMouseDown(event: MouseEvent) {
    isDragging = true;
    event.preventDefault();

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !panelEl) return;

      const rect = panelEl.parentElement?.getBoundingClientRect();
      if (!rect) return;

      let percentage: number;
      if (group.direction === 'horizontal') {
        percentage = ((e.clientX - rect.left) / rect.width) * 100;
      } else {
        percentage = ((e.clientY - rect.top) / rect.height) * 100;
      }

      size = Math.max(minSize, Math.min(maxSize, percentage));
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.body.style.cursor = group.direction === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
  }
</script>

<div
  bind:this={panelEl}
  class={cn('relative overflow-hidden', className)}
  style={group.direction === 'horizontal'
    ? `width: ${size}%; min-width: ${minSize}%; max-width: ${maxSize}%`
    : `height: ${size}%; min-height: ${minSize}%; max-height: ${maxSize}%`}
>
  {@render children?.()}

  <!-- Drag handle -->
  <div
    class={cn(
      'absolute z-10 flex items-center justify-center',
      group.direction === 'horizontal'
        ? 'right-0 top-0 h-full w-1 cursor-col-resize hover:bg-border'
        : 'bottom-0 left-0 h-1 w-full cursor-row-resize hover:bg-border',
      isDragging && 'bg-border'
    )}
    onmousedown={handleMouseDown}
    role="separator"
    aria-orientation={group.direction}
    tabindex="0"
  >
    <div class={cn(
      'bg-muted-foreground/20',
      group.direction === 'horizontal' ? 'h-8 w-0.5' : 'h-0.5 w-8'
    )}></div>
  </div>
</div>
