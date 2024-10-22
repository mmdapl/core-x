import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress/dist/client'
import ElementPlus from 'element-plus'
import { h } from 'vue'
import { VipBackTop } from '../components'

/**
 * 集成vitepress的默认主题，自定义拓展
 */
export default function defineVipExtendsTheme(theme?: any) {
  return {
    extends: DefaultTheme,
    Layout: () => {
      return h(DefaultTheme.Layout, null, {
        // https://vitepress.dev/guide/extending-default-theme#layout-slots
        'doc-bottom': () => h(VipBackTop),
      })
    },
    // todo 查看这里的app、router、siteData的作用
    enhanceApp: ({ app }: EnhanceAppContext) => {
      app.use(ElementPlus)
    },

    // 自定义拓展
    ...theme != null ? theme : {},
  }
}
