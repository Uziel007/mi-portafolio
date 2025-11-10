// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://mi-portafolio-73v.pages.dev',
  build: {
    format: 'directory', // ✅ genera /pagina/index.html → accesible como /pagina/
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
