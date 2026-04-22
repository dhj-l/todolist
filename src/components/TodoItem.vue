<script setup lang="ts">
import type { Task } from '@/utils/helpers'
import { getPriorityColor, getCategoryColor, getPriorityText } from '@/utils/helpers'

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
      <div class="flex-shrink-0 mt-1" @click="emit('toggle', task.id)">
        <div 
          class="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300"
          :class="task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-indigo-400'"
        >
          <svg 
            v-if="task.completed"
            class="w-4 h-4 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>

      <div 
        class="flex-shrink-0 w-1 self-stretch rounded-full"
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
          <div class="flex items-center gap-2 flex-shrink-0">
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
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>截止日期：{{ task.dueDate }}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
            </svg>
            <span>{{ task.category }}</span>
          </div>
        </div>
      </div>

      <div class="flex-shrink-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          class="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
          @click.stop="emit('edit', task.id)"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </button>
        <button 
          class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
          @click.stop="emit('delete', task.id)"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
