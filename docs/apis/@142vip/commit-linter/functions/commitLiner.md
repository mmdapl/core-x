[API 参考](../../../index.md) / [@142vip/commit-linter](../index.md) / commitLiner

# 函数: commitLiner()

> **commitLiner**(`params?`, `commit?`): [`GitCommitLinter`](../interfaces/GitCommitLinter.md)

定义于: [commit-linter/src/core/git-commit-linter.ts:14](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/commit-linter/src/core/git-commit-linter.ts#L14)

Git Commit信息校验

## 参数

### params?

[`GitCommitLinterOptions`](../interfaces/GitCommitLinterOptions.md)

校验参数 可选，传则需要自定义校验

### commit?

`string`

commit message 可选，不传则从git获取

## 返回

[`GitCommitLinter`](../interfaces/GitCommitLinter.md)
