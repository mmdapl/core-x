import dayjs from 'dayjs'

/**
 * 时间格式：年-月-日 时:分:秒
 */
const FormatTemplateStr = 'YYYY-MM-DD HH:mm:ss'
/**
 * 获取当前时间戳
 */
function getCurrentTimestamp() {
  return dayjs().valueOf()
}

/**
 * 时间格式化，默认： 年-月-日 时:分:秒
 */
function formatDateToStr(date: Date, template?: string) {
  return dayjs(date).format(template ?? FormatTemplateStr)
}

export interface IVipDayjs {
  getCurrentTimestamp: typeof getCurrentTimestamp
  FormatTemplateStr: typeof FormatTemplateStr
  formatDateToStr: typeof formatDateToStr
}

export const VipDayjs: IVipDayjs = {
  getCurrentTimestamp,
  FormatTemplateStr,
  formatDateToStr,
}
