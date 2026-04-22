<script setup lang="ts">
import TaskItem from './TaskItem.vue'
import { Empty } from 'ant-design-vue'

export interface Task {
  title: string
  category: string
  date: string
  time?: string
  completed: boolean
  isStarred: boolean
  isRecurring?: boolean
}

defineProps<{
  tasks: Task[]
  title?: string
}>()
</script>

<template>
  <div>
    <div class="bg-white rounded-xl border border-[#ebeef5] shadow-sm overflow-hidden">
      <template v-if="tasks.length > 0">
        <div class="mt-5 ml-5" v-if="title && !$slots.title">
          <h2 class="text-2xl font-bold text-[#1a1a2e] mb-1">{{ title }}</h2>
        </div>
        <slot name="title" v-else> </slot>
        <TaskItem
          v-for="(task, index) in tasks"
          :key="index"
          :title="task.title"
          :category="task.category"
          :date="task.date"
          :time="task.time"
          :completed="task.completed"
          :is-starred="task.isStarred"
          :is-recurring="task.isRecurring"
        />
      </template>
      <div v-else class="py-16">
        <Empty description="暂无任务">
          <template #description>
            <p class="text-[#8c8fa3] text-sm mt-2">点击上方输入框添加你的第一个任务</p>
          </template>
        </Empty>
      </div>
    </div>

    <div class="text-center py-4">
      <p class="text-xs text-[#b0b3c7]">
        共 {{ tasks.length }} 个任务，已完成 {{ tasks.filter((t) => t.completed).length }} 个
      </p>
    </div>
  </div>
</template>

<style scoped>
:deep(.ant-empty-image) {
  color: #d0d3dd;
}
:deep(.ant-empty-description) {
  color: #8c8fa3;
}
</style>
