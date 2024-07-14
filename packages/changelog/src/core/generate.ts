import { getGitDiff } from 'changelogen'
import type { ChangelogOptions } from './types'
import { generateMarkdown } from './markdown'
import { resolveConfig } from './config'
import { parseCommits } from './parse'
import { resolveAuthors } from './github'

export async function generate(options: ChangelogOptions) {
  const config = await resolveConfig(options)

  const rawCommits = await getGitDiff(config.from, config.to)
  const commits = parseCommits(rawCommits, config)

  // 添加贡献者
  if (config.contributors) {
    await resolveAuthors(commits, config)
  }
  // 生成文档
  const markdown = await generateMarkdown(commits, config)

  return { config, markdown, commits }
}
