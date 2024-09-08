import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import type { Theme } from 'vitepress'

/**
 * 自定义主题
 * 参考： https://vitepress.dev/guide/custom-theme
 */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  // todo 查看这里的app、router、siteData的作用
  enhanceApp() {
  },
} satisfies Theme
