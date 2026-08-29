<script lang="ts">
  import { cn } from '../lib/utils.js';

  let {
    value = $bindable(''),
    maxLength = 6,
    class: className,
    onComplete
  }: {
    value?: string;
    maxLength?: number;
    class?: string;
    onComplete?: (value: string) => void;
  } = $props();

  let inputs: HTMLInputElement[] = [];

  function handleInput(index: number, event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;

    if (newValue.length > 1) {
      target.value = newValue.charAt(0);
    }

    const chars = value.split('');
    chars[index] = target.value;
    value = chars.join('');

    if (target.value && index < maxLength - 1) {
      inputs[index + 1]?.focus();
    }

    if (value.length === maxLength) {
      onComplete?.(value);
    }
  }

  function handleKeydown(index: number, event: KeyboardEvent) {
    if (event.key === 'Backspace' && !inputs[index]?.value && index > 0) {
      inputs[index - 1]?.focus();
    }
  }

  function handlePaste(event: ClipboardEvent) {
    event.preventDefault();
    const pasted = event.clipboardData?.getData('text') || '';
    const chars = pasted.slice(0, maxLength).split('');
    value = chars.join('');

    if (chars.length > 0) {
      inputs[Math.min(chars.length, maxLength - 1)]?.focus();
    }

    if (value.length === maxLength) {
      onComplete?.(value);
    }
  }
</script>

<div class={cn('flex items-center gap-2', className)}>
  {#each Array(maxLength) as _, i}
    <input
      bind:this={inputs[i]}
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-center text-lg font-medium shadow-sm focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      value={value[i] || ''}
      oninput={(e) => handleInput(i, e)}
      onkeydown={(e) => handleKeydown(i, e)}
      onpaste={handlePaste}
    />
  {/each}
</div>
