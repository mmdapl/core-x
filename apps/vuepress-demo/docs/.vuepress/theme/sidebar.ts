import { sidebar } from 'vuepress-theme-hope'

/**
 * 侧边栏配置
 */
export default sidebar({
  '/example': [
    {
      text: '示例文档',
      // prefix: 'example',
      collapsible: false,
      children: [
        {
          text: '示例文档-1',
          link: 'test-1.md',
        },
        {
          text: '示例文档-2',
          link: 'test-2.md',
        },
        {
          text: '示例文档-3',
          link: 'test-3.md',
        },
      ],
    },
  ],
})
