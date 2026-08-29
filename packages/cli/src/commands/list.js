import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPONENTS_SOURCE = path.join(__dirname, '../../../components/src/ui');

export async function list() {
  console.log('📦 Available components:\n');

  try {
    const files = await fs.readdir(COMPONENTS_SOURCE);
    const components = files
      .filter(f => f.endsWith('.svelte'))
      .map(f => f.replace('.svelte', ''))
      .sort();

    // Group by category
    const categories = {
      'Action': ['button', 'button-group', 'toggle', 'toggle-group'],
      'Input': ['input', 'textarea', 'select', 'select-trigger', 'select-content', 'select-item', 'select-label', 'select-separator', 'native-select', 'checkbox', 'radio-group', 'radio-group-item', 'switch', 'slider', 'input-otp', 'input-group', 'input-group-text', 'combobox'],
      'Data Display': ['badge', 'avatar', 'card', 'card-header', 'card-title', 'card-description', 'card-content', 'card-footer', 'table', 'table-header', 'table-body', 'table-row', 'table-head', 'table-cell', 'table-caption', 'kbd', 'marker', 'item', 'empty', 'typography', 'message', 'bubble', 'attachment', 'message-scroller'],
      'Overlay': ['dialog', 'dialog-overlay', 'dialog-content', 'dialog-header', 'dialog-title', 'dialog-description', 'dialog-close', 'dialog-footer', 'sheet-content', 'sheet-header', 'sheet-title', 'sheet-description', 'drawer', 'drawer-content', 'drawer-header', 'popover', 'popover-content', 'tooltip', 'tooltip-content', 'hover-card-content', 'command', 'command-input', 'command-list', 'command-empty', 'command-group', 'command-separator', 'command-item', 'command-shortcut', 'context-menu', 'context-menu-content', 'dropdown-menu', 'dropdown-menu-content', 'dropdown-menu-label', 'dropdown-menu-separator', 'dropdown-menu-group', 'dropdown-menu-item', 'menubar', 'menubar-menu'],
      'Navigation': ['breadcrumb', 'breadcrumb-list', 'breadcrumb-item', 'breadcrumb-link', 'breadcrumb-page', 'breadcrumb-separator', 'breadcrumb-ellipsis', 'tabs', 'tabs-list', 'tabs-trigger', 'tabs-content', 'pagination', 'pagination-content', 'pagination-item', 'navigation-menu', 'navigation-menu-list', 'navigation-menu-item', 'navigation-menu-trigger', 'navigation-menu-viewport', 'navigation-menu-content', 'navigation-menu-link', 'sidebar', 'sidebar-content'],
      'Feedback': ['alert', 'alert-title', 'alert-description', 'progress', 'skeleton', 'spinner', 'toast', 'toast-title', 'toast-description'],
      'Layout': ['separator', 'aspect-ratio', 'scroll-area', 'scroll-area-viewport', 'resizable', 'field'],
      'Date': ['calendar', 'date-picker'],
      'Advanced': ['accordion', 'accordion-item', 'accordion-trigger', 'accordion-content', 'collapsible', 'data-table', 'chart', 'carousel', 'questionnaire', 'direction', 'radio-group-alt', 'combobox']
    };

    let total = 0;
    for (const [category, items] of Object.entries(categories)) {
      const available = items.filter(i => components.includes(i));
      if (available.length > 0) {
        console.log(`${category} (${available.length})`);
        for (const item of available) {
          console.log(`  - ${item}`);
          total++;
        }
        console.log('');
      }
    }

    console.log(`\n📊 Total: ${total} components`);
  } catch (error) {
    console.log('❌ Could not read components directory');
  }
}
