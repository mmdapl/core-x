import type { HeadConfig } from '../types'

/**
 * 408CSFamily
 */
export const exampleHeaders: HeadConfig[] = [
  [
    'link',
    { rel: 'icon', href: 'fight_favicon.ico' },
  ],
  // vercel统计 相关配置
  [
    'script',
    { type: 'text/javascript', src: '/_vercel/insights/script.js' },
  ],
  // 百度统计
  [
    'script',
    {},
    `var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?613c9d7af9e1c9a7f9eef6a55aa2399d";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();`,
  ],
]

/**
 * 408CSFamily
 */
export const FamilyHeaders: HeadConfig[] = [
  [
    'link',
    { rel: 'icon', href: 'fight_favicon.ico' },
  ],
  // vercel统计 相关配置
]

/**
 * JavaScriptCollection
 */
export const JSCHeaders: HeadConfig[] = [
  [
    'link',
    { rel: 'icon', href: 'fight_favicon.ico' },
  ],
  // vercel统计 相关配置
]
