import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://kbatelier.org',
  integrations: [
    tailwind(), 
    alpinejs({entrypoint: '/src/alpine-entrypoint'}), 
    icon(), 
    sitemap()
  ]
});