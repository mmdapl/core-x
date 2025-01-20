import { create } from 'ansi-colors'

/**
 * 参考：https://www.npmjs.com/package/ansi-colors
 */

/**
 * 终端修改颜色
 */
export const VipColor = create()

/**
 * 终端标记
 */
export const VipSymbols = {
  success: VipColor.symbols.check,
  error: VipColor.symbols.cross,
  warning: VipColor.symbols.warning,
  info: VipColor.symbols.info,
  question: VipColor.symbols.question,
  heart: VipColor.symbols.heart,
  mark: VipColor.symbols.mark,
}
