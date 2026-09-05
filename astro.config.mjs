import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkWikilinks } from './src/plugins/remark-wikilinks.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://funtohard.github.io',
  base: '/',
  server: {
    host: true,
    port: 8087,
    allowedHosts: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  trailingSlash: 'ignore',
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkWikilinks],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        obsidian: 'github-dark-dimmed',
        parchment: 'catppuccin-latte',
        oxford: 'tokyo-night',
      },
      defaultColor: false,
      wrap: true,
    },
  },
});
