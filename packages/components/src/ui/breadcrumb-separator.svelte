<script lang="ts">
  import type { HTMLSpanAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    ...restProps
  }: {
    class?: string;
  } & HTMLSpanAttributes = $props();
</script>

<span
  role="separator"
  class={cn('', className)}
  data-slot="breadcrumb-separator"
  {...restProps}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="h-3.5 w-3.5"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
</span>
