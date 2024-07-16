export interface CleanUpOptions {
  dist?: boolean
  nuxt?: boolean
  midway?: boolean
  deep?: boolean
}

/**
 * 清除
 */
export function execCleanUp(args: CleanUpOptions) {
  // 删除node_modules

  // 删除各层级dist目录
  if (args.dist) {
    cleanDist()
  }

  // 删除nuxt构建目录
  if (args.nuxt) {
    cleanNuxt()
  }

  if (args.midway) {
    cleanMidway()
  }
}

/**
 * 删除所有node_modules目录
 * - 默认删除
 */
export function cleanNodeModules() {
  // 删除所有node_modules目录
  //  find . -name "node_modules" -type d -exec rm -rf '{}' +
}

/**
 * 删除构建的dist目录
 */
export function cleanDist() {
  // 删除dist目录
}

/**
 * 删除nuxt构建目录
 * - .nuxt
 * - output
 */
export function cleanNuxt() {
  // .nuxt output
}

/**
 * 根据配置删除所有
 */
export function cleanByConfig() {

}

// 删除midway的构建、运行、日志目录
export function cleanMidway() {
  // run logs
}
