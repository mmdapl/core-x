// https://vitepress.dev/guide/custom-theme

import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  // todo 查看这里的app、router、siteData的作用
  enhanceApp() {
    // ...
    // console.log('todo-->', app, router, siteData)
  },
} satisfies Theme
