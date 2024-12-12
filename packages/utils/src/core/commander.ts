import { Command } from 'commander'

/**
 * 终端交互
 * 参考：https://www.npmjs.com/package/commander
 */
export class VipCommander extends Command {
  constructor(name: string, version: string) {
    super(name)
    // 查看版本
    this.version(version, '-v --version', 'VipCommander Version By @142vip')
  }
}
