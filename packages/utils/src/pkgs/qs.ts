import type { BooleanOptional, IParseOptions, IStringifyOptions, ParsedQs } from 'qs'
import qs from 'qs'

export class VipQs {
  /**
   * 序列化 query string
   */
  public stringify(obj: any, options?: IStringifyOptions<BooleanOptional>): string {
    return qs.stringify(obj, options)
  }

  /**
   * 解析 query string
   */
  public parse(str: string, options?: IParseOptions<BooleanOptional> & { decoder?: never | undefined }): ParsedQs {
    return qs.parse(str, options)
  }
}

export const vipQs = new VipQs()
