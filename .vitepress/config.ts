import path from 'node:path'
import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types/default-theme'
import { VipLinks, getVipFooter, zhSearch } from '@142vip/vitepress'
import { name as pkgName, version as pkgVersion } from '../package.json'
import { getChangelogsSidebar, sidebarConfig } from './sidebar'

/**
 * 导航栏
 */
const navbarConfig: DefaultTheme.NavItem[] = [
  {
    text: '🔥 首页',
    link: '/docs/index.md',
  },
  {
    text: '🎬 自媒体',
    link: '/docs/media.md',
  },
  {
    text: '📌󠁦 󠁬󠁯󠁧󠁿变更日志',
    link: '/changelogs/core-x/changelog.md',
  },
  {
    text: `🌕 ${pkgVersion}`,
    items: [
      {
        text: '🎉 历史版本',
        link: `${VipLinks.CoreXRepo}/releases`,
      },
      {
        text: '📄 更新日志',
        link: `${VipLinks.CoreXRepo}/blob/main/CHANGELOG.md`,
      },
      {
        text: '🎯 开发计划',
        link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnpwFKWmMu5zXE9WaxjuCYAg',
      },
    ],
  },

]

/**
 * 所有配置
 */
export default defineConfig({
  base: '/core-x',
  lang: 'zh-CN',
  title: '@142vip/core-x',
  titleTemplate: ':title - @142vip/core-x',
  description: 'X一切都有可能',
  srcDir: './',
  // 排除部分
  srcExclude: ['tutorial/**/description.md'],
  // 编译输出目录
  outDir: './dist',
  // dev 模式下的缓存目录，默认cache
  cacheDir: './.vitepress/.vite',
  assetsDir: 'static',
  metaChunk: true,
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://github.com/142vip/core-x' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '@142vip/core-x' }],
    ['meta', { property: 'og:description', content: `${pkgName} - 一切都有可能` }],
  ],
  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },

  },
  // 多语言配置
  // locales: {
  //   zh: {
  //     lang: 'zh-CN',
  //     label: '简体中文',
  //     link: '/',
  //   },
  // },
  themeConfig: {
    // 导航栏
    nav: navbarConfig,
    sidebar: {
      '/': sidebarConfig,
      '/changelogs/': {
        base: '',
        items: [
          {
            text: '@142vip/core-x',
            link: '/changelogs/core-x/changelog.html',
          },
          // {
          //   text: '历史版本',
          //   link: '/changelogs/core-x/changelog.html',
          // },
          {
            text: '󠁡变更日志🏴󠁡 ',
            items: getChangelogsSidebar(),
          },
        ],
      },
    },
    // 单页右侧目录
    aside: true,

    // 页脚
    footer: getVipFooter({
      license: VipLinks.CoreXLicense,
      pkgName,
      pkgVersion,
      orgLink: VipLinks.VipOrg,
      ownerLink: VipLinks.MainAccount,
    }),
    lastUpdated: {
      text: '最近更新',
    },
    notFound: {
      title: '页面找不到啦',
      quote: `但是，如果你不改变你的方向，如果你继续寻找，你最终可能会到达你要去的地方。`,
      linkText: '返回首页',
    },
    editLink: {
      pattern: 'https://github.com/142vip/core-x/edit/next/docs/:path',
      text: '在 Github 上对本页提出修改建议',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    // 单页标题
    outline: {
      label: '本页内容',
    },
    // 一些链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/142vip/core-x' },
      { icon: 'npm', link: 'https://www.npmjs.com/search?q=%40142vip' },
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: '69JA242WYX',
        apiKey: 'dec73bdf3277684a92aaa734e3b776c0',
        indexName: 'core-x',
        locales: {
          // 支持中文搜索
          ...zhSearch,
        },
      },
    },
    // 关闭外链图标
    externalLinkIcon: false,
  },
  // 路径重写
  rewrites: {
    ':packages/:pkg/README.md': ':packages/:pkg/index.md',
    ':packages/:pkg/CHANGELOG.md': 'changelogs/:pkg/changelog.md',
    'CHANGELOG.md': 'changelogs/core-x/changelog.md',
    'README.md': 'index.md',
  },
  // 编译时路径别名
  vite: {
    resolve: {
      alias: {
        '@packages': path.resolve(__dirname, '../packages'),
      },
    },
    plugins: [
      // element-plus 自动导入，参考：https://element-plus.org/zh-CN/guide/quickstart.html
      // ElementPlus(),
    ],
  },
})
