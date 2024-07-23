import { defineConfig } from 'vitepress'
import { name, version } from '../package.json'

// https://vitepress.dev/reference/site-config

const GihubLinks = {
  VipOrg: 'https://github.com/142vip',
  MmdaplRepo: 'https://github.com/mmdapl',
  CoreXRepo: 'https://github.com/mmdapl/core-x',
  HOMEPAGE: 'https://github.com/142vip/core-x',
  CoreXLicense: 'https://github.com/142vip/core-x/blob/main/LICENSE',
}

export const footer = {
  message: `Released Under The <a href="${GihubLinks.CoreXLicense}">MIT License</a>.`,
  copyright: `Copyright © 2019-present <a href="${GihubLinks.VipOrg}">142VIP</a> &nabla; <a href="${GihubLinks.MmdaplRepo}">储凡</a>`,
}

/**
 * 导航栏
 */
export const navbar = [
  { text: '首页', link: '/docs/manuscripts/' },
  {
    text: '文档',
    items: [
      {
        text: '动态',
        link: 'https://github.com/142vip/core-x/blob/main/CHANGELOG.md',
      },
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
  { text: 'RoadMap', link: '/markdown-examples' },
  {
    text: version,
    items: [
      {
        text: '动态',
        link: 'https://github.com/142vip/core-x/blob/main/CHANGELOG.md',
      },
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
  { text: '自媒体', link: '/markdown-examples' },
]

/**
 * 侧边栏
 */
const sidebar = [
  {
    text: '工程化',
    items: [
      { text: '@142vip/fairy-cli', link: '/packages/fairy-cli' },
      { text: '@142vip/release-version', link: '/packages/release-version' },
      { text: '@142vip/changelog', link: '/packages/changelog' },
      { text: '@142vip/eslint-config', link: '/packages/eslint-config' },
    ],
  },
  {
    text: '通用',
    items: [
      { text: '@142vip/redis', link: '/packages/redis' },
      { text: '@142vip/typeorm', link: '/packages/redis' },
      { text: '@142vip/oauth', link: '/packages/oauth' },
    ],
  },
  {
    text: 'Egg.js框架',
    items: [
      { text: '@142vip/egg', link: '/packages/egg' },
      { text: '@142vip/egg-axios', link: '/packages/egg-axios' },
      { text: '@142vip/egg-grpc-client', link: '/packages/egg-grpc-client' },
      { text: '@142vip/egg-grpc-server', link: '/packages/egg-grpc-server' },
      { text: '@142vip/egg-mysql', link: '/packages/egg-mysql' },
      { text: '@142vip/egg-redis', link: '/packages/egg-redis' },
      { text: '@142vip/egg-sequelize', link: '/packages/egg-sequelize' },
      { text: '@142vip/egg-swagger', link: '/packages/egg-swagger' },
    ],
  },
  {
    text: 'Nest.js框架',
    items: [
      { text: '@142vip/nest', link: '/packages/nest' },
      { text: '@142vip/nest-redis', link: '/packages/nest-redis' },
      { text: '@142vip/nest-typeorm', link: '/packages/nest-typeorm' },
    ],
  },
  {
    text: '博客工具',
    items: [
      { text: '@142vip/vuepress', link: '/packages/vuepress' },
      { text: '@142vip/vitepress', link: '/packages/vitepress' },
    ],
  },
]

export default defineConfig({
  base: '/core-x',
  lang: 'zh-CN',
  title: '@142vip/core-x',
  titleTemplate: ':title - @142vip/core-x',
  description: 'x代表一切都有可能',
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
    [
      'meta',
      {
        property: 'og:description',
        content: `${name} - 系列封装`,
      },
    ],
  ],
  themeConfig: {
    // 导航栏
    nav: navbar,
    sidebar,
    footer,
    lastUpdated: {
      text: '最近更新',
    },
    editLink: {
      pattern: 'https://github.com/142vip/core-x/edit/main/docs/:path',
      text: '在Github上编辑',
    },
    // 一些链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/142vip/core-x' },
      { icon: 'npm', link: 'https://www.npmjs.com/search?q=%40142vip' },
    ],
    search: {
      provider: 'local',
    },
    externalLinkIcon: true,
  },
  // 路径重写
  rewrites: {
    ':packages/:pkg/README.md': ':packages/:pkg/index.md',
    ':packages/:pkg/CHANGELOG.md': ':packages/:pkg/changelog.md',
    'README.md': 'index.md',
  },
})
