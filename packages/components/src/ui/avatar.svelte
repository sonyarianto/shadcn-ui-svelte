<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '$lib/utils.js';

  let {
    src,
    alt = '',
    fallback,
    class: className,
    ...restProps
  }: {
    src?: string;
    alt?: string;
    fallback?: Snippet;
    class?: string;
  } & HTMLAttributes<HTMLDivElement> = $props();

  let imageFailed = $state(false);
</script>

<div
  class={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
  data-slot="avatar"
  {...restProps}
>
  {#if src && !imageFailed}
    <img {src} {alt} class="aspect-square h-full w-full" onerror={() => (imageFailed = true)} />
  {:else if fallback}
    {@render fallback()}
  {/if}
</div>
