import type { BooleanOptional, IParseOptions, IStringifyOptions, ParsedQs } from 'qs'
import qs from 'qs'

/**
 * 序列化 query string
 */
function stringify(obj: any, options?: IStringifyOptions<BooleanOptional>): string {
  return qs.stringify(obj, options)
}

/**
 * 解析 query string
 */
function parse(str: string, options?: IParseOptions<BooleanOptional> & { decoder?: never | undefined }): ParsedQs {
  return qs.parse(str, options)
}

export const VipQs = {
  stringify,
  parse,
}
