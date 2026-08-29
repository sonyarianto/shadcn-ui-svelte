<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils.js';

  type Column<T> = {
    id: string;
    header: string | Snippet;
    cell: Snippet<[{ row: T }]>;
    sortable?: boolean;
    class?: string;
  };

  type SortDirection = 'asc' | 'desc' | null;

  let {
    data = [],
    columns = [],
    class: className,
    pageSize = 10,
    sortable = false
  }: {
    data?: any[];
    columns?: Column<any>[];
    class?: string;
    pageSize?: number;
    sortable?: boolean;
  } = $props();

  let sortColumn = $state<string | null>(null);
  let sortDirection = $state<SortDirection>(null);
  let currentPage = $state(1);

  const totalPages = $derived(Math.ceil(data.length / pageSize));

  const paginatedData = $derived(() => {
    let result = [...data];

    if (sortColumn && sortDirection) {
      result.sort((a, b) => {
        const aVal = a[sortColumn!];
        const bVal = b[sortColumn!];
        const compare = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        return sortDirection === 'asc' ? compare : -compare;
      });
    }

    const start = (currentPage - 1) * pageSize;
    return result.slice(start, start + pageSize);
  });

  function handleSort(columnId: string) {
    if (!sortable) return;

    if (sortColumn === columnId) {
      if (sortDirection === 'asc') {
        sortDirection = 'desc';
      } else if (sortDirection === 'desc') {
        sortColumn = null;
        sortDirection = null;
      }
    } else {
      sortColumn = columnId;
      sortDirection = 'asc';
    }
  }
</script>

<div class={cn('w-full', className)}>
  <div class="rounded-md border">
    <table class="w-full caption-bottom text-sm">
      <thead class="[&_tr]:border-b">
        <tr class="border-b transition-colors">
          {#each columns as column}
            <th
              class={cn(
                'h-10 px-2 text-left align-middle font-medium text-muted-foreground',
                sortable && 'cursor-pointer select-none hover:text-foreground',
                column.class
              )}
              onclick={() => handleSort(column.id)}
            >
              <div class="flex items-center gap-2">
                {#if typeof column.header === 'string'}
                  {column.header}
                {:else}
                  {@render column.header()}
                {/if}
                {#if sortable && sortColumn === column.id}
                  <span class="text-xs">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                {/if}
              </div>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody class="[&_tr:last-child]:border-0">
        {#each paginatedData() as row, i}
          <tr class="border-b transition-colors hover:bg-muted/50">
            {#each columns as column}
              <td class="p-2 align-middle">
                {@render column.cell({ row })}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  {#if totalPages > 1}
    <div class="flex items-center justify-between py-4">
      <div class="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>
      <div class="flex gap-2">
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
          disabled={currentPage === 1}
          onclick={() => currentPage = Math.max(1, currentPage - 1)}
        >
          Previous
        </button>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
          disabled={currentPage === totalPages}
          onclick={() => currentPage = Math.min(totalPages, currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  {/if}
</div>
