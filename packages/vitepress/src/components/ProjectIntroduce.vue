<script lang="ts" setup>
import { defineComponent } from 'vue'
import { ElImage, ElTable, ElTableColumn, ElTag } from 'element-plus'
import { VipTableName } from '../core'

interface PackageJSON {
  name: string
  description: string
  private: boolean
  version: string
}

interface Project extends PackageJSON {
  id?: string
  npm?: string
  changelog: string
  readme: string
  sourceCode: string
}
const props = defineProps<{
  data: Project[]
  title?: string
  tableName?: VipTableName
}>()

defineComponent({
  components: {
    ElTable,
    ElTableColumn,
    ElTag,
    ElImage,
  },
})
</script>

<!-- todo 支持light和dark两种模式 -->
<template>
  <h2>{{ title ?? '核心业务' }}</h2>
  <ElTable
    v-show="props.tableName === VipTableName.CoreX"
    :data="data" border
    class="core-table" flexible stripe table-layout="auto"
  >
    <!-- @142vip/core-x 表格 -->
    <ElTableColumn header-align="center" label="项目名称" min-width="200" prop="name" width="auto" />
    <ElTableColumn align="center" header-align="center" label="项目代号" min-width="120" prop="id" width="auto" />
    <ElTableColumn header-align="center" label="功能描述" prop="description" width="auto" />
    <ElTableColumn align="center" header-align="center" label="当前版本" width="180">
      <template #default="{ row }">
        <ElTag class="version" type="primary" @click="() => console.log(333)">
          {{ row.version }}
        </ElTag>
      </template>
    </ElTableColumn>
    <ElTableColumn header-align="center" label="NPM版本" width="auto">
      <template #default="{ row }">
        <a :href="`https://www.npmjs.com/package/${row.name}`" :title="row.name" target="_blank">
          <ElImage :src="`https://img.shields.io/npm/v/${row.name}?labelColor=0b3d52&color=1da469`" :title="row.name" />
        </a>
      </template>
    </ElTableColumn>
    <ElTableColumn align="center" header-align="center" label="文档" width="150">
      <template #default="{ row }">
        <a :href="row.sourceCode" target="_blank" title="源码">
          源码
        </a> &nbsp;
        <a :href="row.changelog" target="_blank" title="日志">
          日志
        </a> &nbsp;
        <a :href="row.readme" target="_blank" title="文档">
          文档
        </a>
      </template>
    </ElTableColumn>
  </ElTable>

  <ElTable
    v-show="props.tableName === VipTableName.Oauth"
    :data="data" border
    class="core-table"
    flexible stripe table-layout="auto"
  >
    <!-- @142vip/142vip-oauth 表格 -->
    <ElTableColumn header-align="center" label="项目名称" min-width="180" prop="name" width="auto" />
    <ElTableColumn align="center" header-align="center" label="项目代号" prop="id" width="140" />
    <ElTableColumn header-align="center" label="功能描述" prop="description" width="auto" />
    <ElTableColumn align="center" header-align="center" label="当前版本" width="200">
      <template #default="{ row }">
        <ElTag class="version" type="primary" @click="() => console.log(333)">
          {{ row.version }}
        </ElTag>
      </template>
    </ElTableColumn>
    <ElTableColumn header-align="center" label="NPM版本" width="auto">
      <template #default="{ row }">
        <div v-if="row.private">
          私有包，暂未发布
        </div>
        <a
          v-else
          :href="`https://www.npmjs.com/package/${row.name}`" :title="row.name" target="_blank"
        >
          <ElImage :src="`https://img.shields.io/npm/v/${row.name}?labelColor=0b3d52&color=1da469`" :title="row.name" />
        </a>
      </template>
    </ElTableColumn>
    <ElTableColumn align="center" header-align="center" label="文档" width="150">
      <template #default="{ row }">
        <a :href="row.sourceCode" target="_blank" title="源码">
          源码
        </a> &nbsp;
        <a :href="row.changelog" target="_blank" title="日志">
          日志
        </a> &nbsp;
        <a :href="row.readme" target="_blank" title="文档">
          文档
        </a>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<style>
.core-table {
  width: 100%;
  border-radius: 5px;
}
.version {
  cursor: pointer;
}
/*避免重写table样式*/
.vp-doc table {
  display: block;
  border-collapse: collapse;
  margin: 0;
  overflow-x: auto;
}

.el-table thead {
  display: none;
}
</style>
