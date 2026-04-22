<script setup lang="ts">
import type { Task } from '@/utils/helpers'
import { getPriorityColor, getCategoryColor, getPriorityText } from '@/utils/helpers'
import {
  CheckOutlined,
  CalendarOutlined,
  TagOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons-vue'

defineProps<{
  task: Task
}>()

const emit = defineEmits<{
  toggle: [id: number]
  edit: [id: number]
  delete: [id: number]
}>()
</script>

<template>
  <div
    class="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 cursor-pointer"
    :class="{ 'opacity-75': task.completed }"
  >
    <div class="flex items-start gap-4">
      <div class="shrink-0 mt-1" @click="emit('toggle', task.id)">
        <div
          class="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300"
          :class="
            task.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-indigo-400'
          "
        >
          <CheckOutlined v-if="task.completed" class="text-white text-sm" />
        </div>
      </div>

      <div
        class="shrink-0 w-1 self-stretch rounded-full"
        :class="getCategoryColor(task.category)"
      ></div>

      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3
              class="text-lg font-semibold text-gray-900 mb-1 transition-all duration-300"
              :class="{ 'line-through text-gray-400': task.completed }"
            >
              {{ task.title }}
            </h3>
            <p
              class="text-gray-600 text-sm"
              :class="{ 'line-through text-gray-400': task.completed }"
            >
              {{ task.description }}
            </p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span
              class="px-3 py-1 rounded-full text-xs font-medium border"
              :class="getPriorityColor(task.priority)"
            >
              {{ getPriorityText(task.priority) }}优先级
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              {{ task.category }}
            </span>
          </div>
        </div>

        <div class="flex items-center gap-4 text-sm text-gray-500">
          <div class="flex items-center gap-1.5">
            <CalendarOutlined class="text-base" />
            <span>截止日期：{{ task.dueDate }}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <TagOutlined class="text-base" />
            <span>{{ task.category }}</span>
          </div>
        </div>
      </div>

      <div
        class="shrink-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button
          class="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
          @click.stop="emit('edit', task.id)"
        >
          <EditOutlined class="text-base" />
        </button>
        <button
          class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
          @click.stop="emit('delete', task.id)"
        >
          <DeleteOutlined class="text-base" />
        </button>
      </div>
    </div>
  </div>
</template>
