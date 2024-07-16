export interface LintOptions {
  markdown: boolean
  fix: boolean
}

export function execLink(args: LintOptions) {
  // auto fix
  if (args.fix) {
    console.log('自动修复')
  }
  doCodeLint()
  if (args.markdown) {
    doMdLink()
  }
}

/**
 * 代码格式化
 */
export function doCodeLint() {

}

/**
 * markdown文档格式化
 */
export function doMdLink() {
  // markdownlint
}
