import { create } from 'ansi-colors'

// 参考：https://www.npmjs.com/package/ansi-colors

/**
 * 终端修改颜色
 */
export const vipColor = create()

/**
 * 终端标记
 */
export const vipSymbols = {
  success: vipColor.symbols.check,
  error: vipColor.symbols.cross,
  warning: vipColor.symbols.warning,
  info: vipColor.symbols.info,
  question: vipColor.symbols.question,
  heart: vipColor.symbols.heart,
  mark: vipColor.symbols.mark,
}
