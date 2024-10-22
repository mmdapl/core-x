import type { DefaultTheme } from 'vitepress/types/default-theme'

/**
 * 导航栏
 */
export type NavbarConfig = DefaultTheme.NavItem[]

/**
 * 侧边栏
 */
export type SidebarConfig = DefaultTheme.SidebarItem[]

/**
 * 搜素-中文
 */
export type ZhSearchConfig = DefaultTheme.AlgoliaSearchOptions['locales']
