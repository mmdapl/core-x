/**
 * 获取vite编译
 */
export function getViteBundler() {
  return {
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 4096,
      },
    },
    vuePluginOptions: {},
  }
}
