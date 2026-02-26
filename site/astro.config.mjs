// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    tailwind({
      applyBaseStyles: false, // We'll handle base styles in BaseLayout
    }),
  ],
  output: 'static',
  outDir: '../dist/site',
  server: {
    port: 4321,
    host: true, // Allow external connections
    open: false, // Don't auto-open browser
  },
  vite: {
    server: {
      watch: {
        // Improve file watching performance
        usePolling: false,
        interval: 100,
      },
    },
    optimizeDeps: {
      // Pre-bundle dependencies for faster dev server
      include: ['solid-js', 'lucide-solid'],
    },
  },
});