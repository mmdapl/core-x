import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types/default-theme'
import { version as currentPackageVersion, name as packageName } from '../package.json'

// https://vitepress.dev/reference/site-config

const GithubLinks = {
  VipOrg: 'https://github.com/142vip',
  MainAccount: 'https://github.com/mmdapl',
  CoreXRepo: 'https://github.com/mmdapl/core-x',
  HOMEPAGE: 'https://github.com/142vip/core-x',
  CoreXLicense: 'https://github.com/142vip/core-x/blob/main/LICENSE',
}

/**
 * 页脚
 */
export const footer = {
  message: `The License <a href="${GithubLinks.CoreXLicense}">📖 MIT </a>`,
  copyright: `Release ${packageName}@${currentPackageVersion} 😏<br> Copyright © 2019-present. Repo <a href="${GithubLinks.VipOrg}" style="margin-right:5px;">@142vip</a> Author. <a href=${GithubLinks.MainAccount}>👉储凡</a>`,
}

/**
 * 导航栏
 */
export const navbarConfig: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/docs/index.md',
  },
  {
    text: '自媒体',
    link: '/docs/media.md',
  },
  {
    text: currentPackageVersion,
    items: [
      {
        text: '历史版本',
        link: 'https://github.com/142vip/core-x/releases',
      },
      {
        text: '更新日志',
        link: 'https://github.com/142vip/core-x/blob/main/CHANGELOG.md',
      },
    ],
  },
  {
    text: '开发计划',
    link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnpwFKWmMu5zXE9WaxjuCYAg',
  },
]

/**
 * 侧边栏
 */
const sidebarConfig: DefaultTheme.Sidebar = [
  {
    text: '工程化',
    items: [
      { text: '@142vip/fairy-cli', link: '/packages/fairy-cli/index.md' },
      { text: '@142vip/changelog', link: '/packages/changelog/index.md' },
      { text: '@142vip/release-version', link: '/packages/release-version/index.md' },
      { text: '@142vip/eslint-config', link: '/packages/eslint-config/index.md' },
    ],
  },
  {
    text: '通用',
    items: [
      { text: '@142vip/utils', link: '/packages/utils/index.md' },
      { text: '@142vip/axios', link: '/packages/axios/index.md' },
      { text: '@142vip/oauth', link: '/packages/oauth/index.md' },
      { text: '@142vip/redis', link: '/packages/redis/index.md' },
      { text: '@142vip/typeorm', link: '/packages/typeorm/index.md' },
    ],
  },
  {
    text: 'Egg.js框架',
    items: [
      { text: '@142vip/egg', link: '/packages/egg/index.md' },
      { text: '@142vip/egg-axios', link: '/packages/egg-axios/index.md' },
      { text: '@142vip/egg-grpc-client', link: '/packages/egg-grpc-client/index.md' },
      { text: '@142vip/egg-grpc-server', link: '/packages/egg-grpc-server/index.md' },
      { text: '@142vip/egg-mysql', link: '/packages/egg-mysql/index.md' },
      { text: '@142vip/egg-redis', link: '/packages/egg-redis/index.md' },
      { text: '@142vip/egg-sequelize', link: '/packages/egg-sequelize/index.md' },
      { text: '@142vip/egg-swagger', link: '/packages/egg-swagger/index.md' },
    ],
  },
  {
    text: 'Nest.js框架',
    items: [
      { text: '@142vip/nest', link: '/packages/nest/index.md' },
      { text: '@142vip/nest-redis', link: '/packages/nest-redis/index.md' },
      { text: '@142vip/nest-typeorm', link: '/packages/nest-typeorm/index.md' },
    ],
  },
  {
    text: '博客工具',
    items: [
      { text: '@142vip/vitepress', link: '/packages/vitepress/index.md' },
      { text: '@142vip/vuepress', link: '/packages/vuepress/index.md' },
    ],
  },
]

const zhSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  root: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索供应商',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
}

// 配置
export default defineConfig({
  base: '/core-x',
  lang: 'zh-CN',
  title: '@142vip/core-x',
  titleTemplate: ':title - @142vip/core-x',
  description: 'X代表一切都有可能',
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
    ['meta', { property: 'og:description', content: `${packageName} - 一切都有可能` }],
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
    sidebar: sidebarConfig,
    footer,
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
    ':packages/:pkg/CHANGELOG.md': ':packages/:pkg/changelog.md',
    'README.md': 'index.md',
  },
})
