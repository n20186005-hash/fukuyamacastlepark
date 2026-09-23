import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL ?? 'https://fukuyamacastlepark.com';

export default defineConfig({
  site,
  output: 'static',
  build: {
    format: 'directory'
  },
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'zh', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
