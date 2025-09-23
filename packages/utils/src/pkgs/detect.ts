import type { DetectIndent } from '../extends/detect-indent'
import { detect } from 'detect-port'
import { vipLogger } from '../core'
import { detectIndent } from '../extends/detect-indent'
import { detectNewline } from '../extends/detect-newline'

export class VipDetect {
  /**
   * 检测端口
   */
  public async detectPort(port: number) {
    try {
      const realPort = await detect(port)
      return realPort !== port
    }
    catch {
      vipLogger.error(`detect port ${port} failed`)
      return false
    }
  }

  public detectIndent(str: string): DetectIndent {
    return detectIndent(str)
  }

  public detectNewLine(str: string) {
    return detectNewline(str)
  }
}

export const vipDetect = new VipDetect()
