// import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { searchProCNLocals } from './i18n'

/**
 * 主题中插件的一些配置
 */
export const baseThemePluginOptions = {
  // comment:{
  //   provider: "Artalk",
  //   server:"https://test.142vip.cn/",
  //   site:'JavaScriptCollection',
  // },
  // 公告 参考：https://theme-hope.vuejs.press/zh/guide/feature/notice.html
  // notice: [
  //   {
  //     path: '/',
  //     title: '在线浏览',
  //     content: '网站无法访问时，建议通过科学上网访问备用网络',
  //     actions: [
  //       {
  //         text: '尝鲜版',
  //         link: 'https://142vip.github.io/JavaScriptCollection',
  //         type: 'default',
  //       },
  //       {
  //         text: '稳定版',
  //         link: 'https://code.142vip.cn',
  //         type: 'primary',
  //       },
  //     ],
  //     fullscreen: false,
  //   },
  // ],
  readingTime: {
    wordPerMinute: 100,
  },
  // 水印
  // watermark: {
  //   enabled: true,
  //   watermarkOptions: {
  //     content: '微信公众号：储凡',
  //   },
  // },
  copyright: false,
  // 开启博客功能
  blog: false,
  // 图片增强，参考：https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-image.html
  // markdownImage: markdownImagePlugin({
  //   // 启用 figure
  //   figure: true,
  //   // 启用图片懒加载
  //   lazyload: true,
  //   // 启用图片标记
  //   mark: true,
  //   // 启用图片大小
  //   size: true,
  // }),
  // 代码块
  mdEnhance: {
    // card:true,
    codetabs: true,
    // 支持任务列表
    tasklist: true,
    playground: {
      presets: ['ts', 'vue'],
    },
    // revealjs: ["highlight", "math", "search", "notes", "zoom"],
    // stylize: [
    //   {
    //     matcher: 'Recommended',
    //     replacer: ({ tag }) => {
    //       if (tag === 'em') {
    //         return {
    //           tag: 'Badge',
    //           attrs: { type: 'tip' },
    //           content: 'Recommended',
    //         }
    //       }
    //     },
    //   },
    // ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
    vuePlayground: true,
    // 文件导入配置别名
    include: true,
    // mermaid
    mermaid: true,
    // 自定义对齐
    align: true,
  },
  copyCode: {
    showInMobile: true,
  },
  // 不自动生成README目录
  catalog: false,
  // 参考：https://theme-hope.vuejs.press/zh/guide/markdown/components.html
  components: {
    components: [
      'Badge',
      'BiliBili',
      'CodePen',
      'PDF',
      'StackBlitz',
      'VidStack',
      'Share',
      'XiGua',
    ],
  },
  searchPro: {
    // 参考：https://plugin-search-pro.vuejs.press/zh/config.html#locales
    locales: {
      '/': searchProCNLocals,
    },
  },
  // 代码高亮：https://theme-hope.vuejs.press/zh/guide/feature/code-block.html
  shiki: {
    langs: [
      'ts',
      'js',
      'json',
      'vue',
      'json5',
      'bash',
      'diff',
      'c',
      'c++',
      'dockerfile',
      'nginx',
      'proto',
      'java',
      'javascript',
      'typescript',
      'yaml',
    ],
    // 你想要使用的主题
    themes: {
      light: 'one-light',
      dark: 'one-dark-pro',
    },
  },
}
