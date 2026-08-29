export type Direction = 'ltr' | 'rtl';

export function getNextFocusable(
  elements: HTMLElement[],
  current: HTMLElement,
  direction: 'next' | 'previous',
  loop = true
): HTMLElement {
  const index = elements.indexOf(current);
  if (index === -1) return elements[0];

  let nextIndex: number;
  if (direction === 'next') {
    nextIndex = index + 1;
    if (nextIndex >= elements.length) {
      nextIndex = loop ? 0 : elements.length - 1;
    }
  } else {
    nextIndex = index - 1;
    if (nextIndex < 0) {
      nextIndex = loop ? elements.length - 1 : 0;
    }
  }

  return elements[nextIndex];
}

export function handleGridNavigation(
  event: KeyboardEvent,
  elements: HTMLElement[],
  current: HTMLElement,
  options: { rows?: number; columns?: number; loop?: boolean } = {}
) {
  const { rows = 1, columns = elements.length, loop = true } = options;
  const index = elements.indexOf(current);
  if (index === -1) return;

  const row = Math.floor(index / columns);
  const col = index % columns;
  let newIndex = index;

  switch (event.key) {
    case 'ArrowRight':
      newIndex = col < columns - 1 ? index + 1 : loop ? row * columns : index;
      break;
    case 'ArrowLeft':
      newIndex = col > 0 ? index - 1 : loop ? row * columns + columns - 1 : index;
      break;
    case 'ArrowDown':
      newIndex = row < rows - 1 ? index + columns : loop ? col : index;
      break;
    case 'ArrowUp':
      newIndex = row > 0 ? index - columns : loop ? (rows - 1) * columns + col : index;
      break;
    case 'Home':
      newIndex = row * columns;
      break;
    case 'End':
      newIndex = row * columns + columns - 1;
      break;
    default:
      return;
  }

  if (newIndex >= 0 && newIndex < elements.length) {
    event.preventDefault();
    elements[newIndex].focus();
  }
}
