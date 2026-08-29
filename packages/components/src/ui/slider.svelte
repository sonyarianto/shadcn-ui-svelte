<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    value = $bindable(0),
    min = 0,
    max = 100,
    step = 1,
    class: className,
    ...restProps
  }: {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    class?: string;
  } & HTMLInputAttributes = $props();

  const percentage = $derived(((value - min) / (max - min)) * 100);
</script>

<div
  class={cn('relative flex w-full touch-none select-none items-center', className)}
  data-slot="slider"
>
  <div class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
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
    {step}
    class="absolute w-full cursor-pointer opacity-0"
    {...restProps}
  />
</div>
