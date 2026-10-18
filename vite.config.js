import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        capabilities: resolve(__dirname, 'capabilities.html'),
        sectors: resolve(__dirname, 'sectors.html'),
        impact: resolve(__dirname, 'impact.html'),
        news: resolve(__dirname, 'news.html'),
        careers: resolve(__dirname, 'careers.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
