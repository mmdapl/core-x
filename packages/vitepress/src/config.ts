export const i18n = {
  search: '搜索',
  menu: '菜单',
  toc: '本页目录',
  returnToTop: '返回顶部',
  appearance: '外观',
  previous: '上一篇',
  next: '下一篇',
  pageNotFound: '页面未找到',
  deadLink: {
    before: '你打开了一个不存在的链接：',
    after: '。',
  },
  deadLinkReport: {
    before: '不介意的话请提交到',
    link: '这里',
    after: '，我们会跟进修复。',
  },
  footerLicense: {
    before: '',
    after: '',
  },
  ariaAnnouncer: {
    before: '',
    after: '已经加载完毕',
  },
  ariaDarkMode: '切换深色模式',
  ariaSkipToContent: '直接跳到内容',
  ariaToC: '当前页面的目录',
  ariaMainNav: '主导航',
  ariaMobileNav: '移动版导航',
  ariaSidebarNav: '侧边栏导航',
}

// 默认主题配置
export const defaultThemeConfig = {
  lang: 'zh-CN',
  srcDir: 'manuscripts',
  // 编译输出目录
  outDir: './dist',
  // dev 模式下的缓存目录，默认cache
  cacheDir: './.vitepress/.vite',
  assetsDir: 'static',
  metaChunk: true,
  themeConfig: {
    // 导航栏
    // i18n,
    lastUpdated: {
      text: '最近更新时间',
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
}

/**
 * 团队成员
 */
export const vipTeamMembers = [
  {
    avatar: 'https://www.github.com/142vip.png',
    name: '142vip',
    title: '开源组织',
    links: [
      { icon: 'github', link: 'https://github.com/mmdapl' },
    ],
  },
  {
    avatar: 'https://www.github.com/mmdapl.png',
    name: '储凡',
    title: 'Creator',
    org: '142vip',
    orgLink: 'https://github.com/142vip',
    links: [
      { icon: 'github', link: 'https://github.com/mmdapl' },
    ],
  },
  {
    avatar: 'https://www.github.com/chufan443.png',
    name: '微信公众号：储凡',
    title: 'CodeReviewer',
    org: '142vip',
    orgLink: 'https://github.com/142vip',
    links: [
      { icon: 'github', link: 'https://github.com/chufan443' },
    ],
  },
  {
    avatar: 'https://www.github.com/lir0115.png',
    name: '公众号：Rong姐姐好可爱',
    title: 'Committer',
    org: '142vip',
    orgLink: 'https://github.com/142vip',
    links: [
      { icon: 'github', link: 'https://github.com/lir0115' },
    ],
  },
]
