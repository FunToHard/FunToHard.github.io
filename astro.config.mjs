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
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
