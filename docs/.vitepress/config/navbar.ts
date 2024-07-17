import { version } from '../../../package.json'

/**
 * 导航栏
 */
export const navbar = [
  { text: '首页', link: '/' },
  { text: '集合', link: '/markdown-examples' },
  {
    text: version,
    items: [
      {
        text: '更新日志',
        link: 'https://github.com/142vip/core-x/blob/main/CHANGELOG.md',
      },
      {
        text: '参与贡献',
        link: 'https://github.com/142vip/core-x/blob/main/.github/contributing.md',
      },
    ],
  },
]
