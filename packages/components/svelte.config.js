import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('svelte').PreprocessorGroup} */
export const preprocess = vitePreprocess();

/** @type {import('@sveltejs/vite-plugin-svelte').SvelteOptions} */
export default {
  preprocess
};
