<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    checked = $bindable(false),
    disabled = false,
    class: className,
    onCheckedChange,
    ...restProps
  }: {
    checked?: boolean | 'indeterminate';
    disabled?: boolean;
    class?: string;
    onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  } & HTMLButtonAttributes = $props();

  function toggle() {
    if (disabled) return;
    if (checked === 'indeterminate') {
      checked = true;
    } else {
      checked = !checked;
    }
    onCheckedChange?.(checked);
  }
</script>

<button
  type="button"
  role="checkbox"
  aria-checked={checked === 'indeterminate' ? 'mixed' : checked}
  {disabled}
  data-state={checked === 'indeterminate' ? 'indeterminate' : checked ? 'checked' : 'unchecked'}
  class={cn(
    'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    checked ? 'bg-primary text-primary-foreground' : 'bg-background',
    className
  )}
  data-slot="checkbox"
  onclick={toggle}
  {...restProps}
>
  {#if checked}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  {:else if checked === 'indeterminate'}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  {/if}
</button>
