<script lang="ts">
  import { cn } from '../lib/utils.js';

  let {
    value = $bindable(new Date()),
    min = new Date(1900, 0, 1),
    max = new Date(2100, 11, 31),
    class: className
  }: {
    value?: Date;
    min?: Date;
    max?: Date;
    class?: string;
  } = $props();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  let viewDate = $state(new Date(value));

  const daysInMonth = $derived(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate());
  const firstDayOfMonth = $derived(new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay());

  const calendarDays = $derived(() => {
    const result = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      result.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      result.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), i));
    }
    return result;
  });

  function isSameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function isToday(date: Date) {
    return isSameDay(date, new Date());
  }

  function isSelected(date: Date) {
    return isSameDay(date, value);
  }

  function isDisabled(date: Date) {
    return date < min || date > max;
  }

  function prevMonth() {
    viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1);
  }

  function nextMonth() {
    viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1);
  }

  function selectDate(date: Date) {
    if (!isDisabled(date)) {
      value = date;
    }
  }
</script>

<div class={cn('rounded-md border p-3', className)}>
  <!-- Header -->
  <div class="flex items-center justify-between">
    <button
      class="inline-flex items-center justify-center rounded-md text-sm font-medium h-7 w-7 hover:bg-accent hover:text-accent-foreground"
      onclick={prevMonth}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="m15 18-6-6 6-6"/>
      </svg>
    </button>
    <div class="text-sm font-medium">
      {months[viewDate.getMonth()]} {viewDate.getFullYear()}
    </div>
    <button
      class="inline-flex items-center justify-center rounded-md text-sm font-medium h-7 w-7 hover:bg-accent hover:text-accent-foreground"
      onclick={nextMonth}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </button>
  </div>

  <!-- Days header -->
  <div class="mt-2 grid grid-cols-7 gap-1">
    {#each days as day}
      <div class="flex h-8 items-center justify-center text-xs font-medium text-muted-foreground">
        {day}
      </div>
    {/each}
  </div>

  <!-- Calendar grid -->
  <div class="mt-1 grid grid-cols-7 gap-1">
    {#each calendarDays() as date}
      {#if date}
        <button
          class={cn(
            'flex h-8 w-8 items-center justify-center rounded-md text-sm hover:bg-accent hover:text-accent-foreground',
            isToday(date) && 'bg-accent text-accent-foreground',
            isSelected(date) && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
            isDisabled(date) && 'pointer-events-none opacity-50'
          )}
          disabled={isDisabled(date)}
          onclick={() => selectDate(date)}
        >
          {date.getDate()}
        </button>
      {:else}
        <div></div>
      {/if}
    {/each}
  </div>
</div>
