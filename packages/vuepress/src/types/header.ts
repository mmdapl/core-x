/**
 * Config for `<head>` tags
 */
export type HeadConfig = [HeadTagEmpty, HeadAttrsConfig] | [HeadTagNonEmpty, HeadAttrsConfig, string]

/**
 * Non-empty tags in `<head>`
 */
type HeadTagNonEmpty = 'title' | 'style' | 'script' | 'noscript' | 'template'
/**
 * Empty tags in `<head>`
 */
type HeadTagEmpty = 'base' | 'link' | 'meta' | 'script'
/**
 * Attributes to be set for tags in `<head>`
 */
type HeadAttrsConfig = Record<string, string | boolean>
