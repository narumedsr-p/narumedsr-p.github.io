import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Change `base` if deploying to a project repo (e.g., base: '/my-portfolio')
// Leave empty if repo is named narumedsr-p.github.io
export default defineConfig({
  site: 'https://nayac08.win',
  integrations: [tailwind()],
});
