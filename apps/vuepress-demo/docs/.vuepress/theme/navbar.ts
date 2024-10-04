import { navbar } from 'vuepress-theme-hope'

/**
 * 导航栏配置
 */
export default navbar([
  {
    text: '🌐 首页',
    link: '/',
  },
  {
    text: '💻 示例文档',
    children: [
      {
        text: '👩🏻‍💻 示例文档-1',
        link: '/example/test-1.md',
      },
      {
        text: '👨🏻‍💻 示例文档-2',
        link: '/example/test-2.md',
      },
      {
        text: '👨🏻 示例文档-3',
        link: '/example/test-3.md',
      },
    ],
  },
  {
    text: '👉 了解更多',
    children: [
      {
        text: '📄 更新日志',
        link: '/changelog',
      },
      {
        text: '开源博客',
        children: [
          {
            text: '🤡 408CSFamily',
            link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnuuRDWBoHLmYaknXWFuhR4d',
          },
          {
            text: '📘 JavaScriptCollection',
            link: 'https://142vip.github.io/JavaScriptCollection/',
          },
        ],
      },

    ],
  },
])
