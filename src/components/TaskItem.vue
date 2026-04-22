<script setup lang="ts">
import { CheckOutlined, StarOutlined, StarFilled, ReloadOutlined } from '@ant-design/icons-vue'
import { Checkbox } from 'ant-design-vue'
import { computed } from 'vue'

interface TaskItemProps {
  title: string
  category: string
  date: string
  time?: string
  completed: boolean
  isStarred: boolean
  isRecurring?: boolean
}

const categoryColors: Record<string, string> = {
  工作: 'bg-blue-100 text-blue-600',
  学习: 'bg-green-100 text-green-600',
  生活: 'bg-purple-100 text-purple-600',
  健康: 'bg-amber-100 text-amber-600',
}

const props = defineProps<TaskItemProps>()

const dateColor = computed(() => {
  return props.completed ? 'text-[#d0d3dd]' : 'text-[#8c8fa3]'
})
</script>

<template>
  <div
    class="flex items-center gap-4 px-5 py-3.5 hover:bg-[#fafbfd] transition-colors border-b border-[#f3f4f8] last:border-b-0 group"
    :class="{ 'opacity-50': completed }"
  >
    <label class="flex items-center gap-4 flex-1 min-w-0 cursor-pointer">
      <Checkbox :checked="completed" class="shrink-0" />

      <span
        class="text-sm font-medium truncate transition-all"
        :class="completed ? 'line-through text-[#b0b3c7]' : 'text-[#1a1a2e]'"
      >
        {{ title }}
      </span>

      <span
        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0"
        :class="categoryColors[category] || 'bg-gray-100 text-gray-600'"
      >
        {{ category }}
      </span>
    </label>

    <div class="flex items-center gap-4 shrink-0">
      <span class="text-xs font-medium whitespace-nowrap" :class="dateColor">
        {{ date }}
        <template v-if="time">{{ time }}</template>
      </span>

      <button
        class="opacity-0 group-hover:opacity-100 transition-opacity"
        :class="completed ? 'text-[#d0d3dd]' : ''"
      >
        <ReloadOutlined
          v-if="isRecurring"
          class="text-sm text-[#b0b3c7] hover:text-[#4f6ef7] transition-colors"
        />
        <StarFilled v-else-if="isStarred" class="text-sm text-[#f56c6c]" />
        <StarOutlined
          v-else
          class="text-sm text-[#d0d3dd] hover:text-[#f56c6c] transition-colors"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
:deep(.ant-checkbox-wrapper) {
  margin: 0;
}
:deep(.ant-checkbox-inner) {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 2px solid #d0d3dd;
}
:deep(.ant-checkbox-checked .ant-checkbox-inner) {
  background-color: #4f6ef7;
  border-color: #4f6ef7;
}
:deep(.ant-checkbox-checked::after) {
  border: none;
}
:deep(.ant-checkbox:hover .ant-checkbox-inner) {
  border-color: #4f6ef7;
}
</style>
