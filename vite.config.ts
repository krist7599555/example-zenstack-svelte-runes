import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  server: {
    fs: {
      allow: ['.zenstack']
    }
  },
  ssr: {
    noExternal: ['@zenstackhq/tanstack-query']
  }
});
