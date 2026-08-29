<script lang="ts">
  import { cn } from '../lib/utils.js';

  let {
    checked = $bindable(false),
    disabled = false,
    class: className
  }: {
    checked?: boolean;
    disabled?: boolean;
    class?: string;
  } = $props();

  function toggle() {
    if (!disabled) {
      checked = !checked;
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      toggle();
    }
  }
</script>

<button
  type="button"
  role="checkbox"
  aria-checked={checked}
  {disabled}
  data-state={checked ? 'checked' : 'unchecked'}
  class={cn(
    'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    checked ? 'bg-primary text-primary-foreground' : 'bg-background',
    className
  )}
  onclick={toggle}
  onkeydown={handleKeydown}
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
  {/if}
</button>
