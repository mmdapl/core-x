import { defineConfig } from 'vitepress'
import { navbar } from './config/navbar'
import { sidebar } from './config/sidebar'
import { footer } from './config/footer'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@142vip/core-x',
  description: 'x代表一切都有可能',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer,
    lastUpdated: true,
    editLink: {
      pattern: 'https://github.com/142vip/core-x/edit/main/docs/:path',
      text: '在Github上编辑',
    },
    search: {
      provider: 'local',
    },
  },
})
