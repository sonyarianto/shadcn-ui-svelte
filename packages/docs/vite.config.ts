import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  resolve: {
    alias: {
      '$lib': resolve('./src/lib'),
      '@shadcn-ui-svelte/components': resolve('../components/src/index.ts')
    }
  }
});
