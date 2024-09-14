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
  <ElBacktop :bottom="180" :right="30">
    <template #default>
      ↑
    </template>
  </ElBacktop>
</template>
