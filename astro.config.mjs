// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-site.com',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
});
