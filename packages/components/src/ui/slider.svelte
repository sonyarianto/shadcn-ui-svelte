<script lang="ts">
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    defaultValue = 50,
    min = 0,
    max = 100,
    value = $bindable(defaultValue),
    onValueChange
  }: {
    class?: string;
    defaultValue?: number;
    min?: number;
    max?: number;
    value?: number;
    onValueChange?: (value: number) => void;
  } = $props();

  let isDragging = $state(false);
  let trackEl: HTMLElement;

  function calculateValue(clientX: number) {
    if (!trackEl) return value;
    const rect = trackEl.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return Math.round(min + percentage * (max - min));
  }

  function handleMouseDown(event: MouseEvent) {
    isDragging = true;
    value = calculateValue(event.clientX);
    onValueChange?.(value);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    if (isDragging) {
      value = calculateValue(event.clientX);
      onValueChange?.(value);
    }
  }

  function handleMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      value = Math.min(max, value + 1);
      onValueChange?.(value);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      value = Math.max(min, value - 1);
      onValueChange?.(value);
    }
  }

  const percentage = $derived(((value - min) / (max - min)) * 100);
</script>

<div
  class={cn('relative flex w-full touch-none select-none items-center', className)}
  data-orientation="horizontal"
>
  <div
    bind:this={trackEl}
    class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20 cursor-pointer"
    onmousedown={handleMouseDown}
  >
    <div
      class="absolute h-full bg-primary"
      style="width: {percentage}%"
    ></div>
  </div>
  <input
    type="range"
    bind:value
    {min}
    {max}
    class="absolute w-full cursor-pointer opacity-0"
    onkeydown={handleKeyDown}
  />
</div>
