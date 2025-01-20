import type { BooleanOptional, IParseOptions, IStringifyOptions, ParsedQs } from 'qs'
import qs from 'qs'

/**
 * 序列化 query string
 * @param obj
 * @param options
 */
function stringify(obj: any, options?: IStringifyOptions<BooleanOptional>): string {
  return qs.stringify(obj, options)
}

/**
 * 解析 query string
 * @param str
 * @param options
 */
function parse(str: string, options?: IParseOptions<BooleanOptional> & { decoder?: never | undefined }): ParsedQs {
  return qs.parse(str, options)
}

export interface IVipQS {
  stringify: typeof stringify
  parse: typeof parse
}

export const VipQs: IVipQS = {
  stringify,
  parse,
}
