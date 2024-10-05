import type { BooleanOptional, IParseOptions, IStringifyOptions } from 'qs'
import qs from 'qs'

/**
 * 序列化 query string
 * @param obj
 * @param options
 */
function stringify(obj: any, options?: IStringifyOptions<BooleanOptional>) {
  return qs.stringify(obj, options)
}

/**
 * 解析 query string
 * @param str
 * @param options
 */
function parse(str: string, options?: IParseOptions<BooleanOptional> & { decoder?: never | undefined }) {
  return qs.parse(str, options)
}

export const vipQs = {
  stringify,
  parse,
}
