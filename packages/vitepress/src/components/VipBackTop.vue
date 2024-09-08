<script lang="ts" setup>
import { ElBacktop } from 'element-plus'
import { defineComponent } from 'vue'
import 'element-plus/dist/index.css'

defineComponent({
  components: {
    ElBacktop,
  },
})
</script>

<template>
  <!-- 回到底部 -->
  <ElBacktop :bottom="150" :right="80">
    <template #default>
      ↑
    </template>
  </ElBacktop>
</template>
