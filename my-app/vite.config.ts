import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    svelte({ hot: !process.env.VITEST }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
