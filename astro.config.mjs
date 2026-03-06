// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://amandatcr.github.io',
  base: '/Curriculum-astro/',
  vite: {
    plugins: [tailwindcss()]
  }
});