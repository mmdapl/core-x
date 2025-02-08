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

/**
 * 年月日格式化当前时间
 * - 格式： 2024-08-09
 */
function formatDateToYMD(): string {
  return formatDateToStr(new Date(), 'YYYY-MM-DD')
}

export const VipDayjs = {
  getCurrentTimestamp,
  FormatTemplateStr,
  formatDateToStr,
  formatDateToYMD,
}
