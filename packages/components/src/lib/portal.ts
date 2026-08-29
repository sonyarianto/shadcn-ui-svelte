let portalContainer: HTMLDivElement | null = null;

function getPortalContainer(): HTMLDivElement {
  if (!portalContainer) {
    portalContainer = document.createElement('div');
    portalContainer.setAttribute('data-portal', '');
    portalContainer.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 0; pointer-events: none;';
    document.body.appendChild(portalContainer);
  }
  return portalContainer;
}

export function portal(node: HTMLElement, target?: HTMLElement | string) {
  const container = target
    ? typeof target === 'string'
      ? document.querySelector(target) as HTMLElement
      : target
    : getPortalContainer();

  container.appendChild(node);

  return {
    destroy() {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  };
}

export function usePortal() {
  return {
    portal
  };
}
