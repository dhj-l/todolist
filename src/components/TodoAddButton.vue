<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'
import { FloatButton } from 'ant-design-vue'
import { h } from 'vue'

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <FloatButton
    :icon="h(PlusOutlined)"
    shape="circle"
    :style="{ right: '32px', bottom: '32px', width: '64px', height: '64px' }"
    @click="emit('click')"
  />
</template>

<style scoped>
:deep(.ant-float-btn) {
  background: linear-gradient(to right, #6366f1, #a855f7) !important;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
}
:deep(.ant-float-btn:hover) {
  transform: scale(1.1) !important;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
  transition: all 0.3s !important;
}
:deep(.ant-float-btn .ant-float-btn-icon) {
  font-size: 30px !important;
}
</style>
