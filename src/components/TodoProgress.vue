<script setup lang="ts">
import type { Task } from '@/utils/helpers'
import { calculateProgress } from '@/utils/helpers'

defineProps<{
  tasks: Task[]
}>()
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
    <div class="flex items-center justify-between mb-2">
      <span class="text-sm font-medium text-gray-700">总进度</span>
      <span class="text-sm font-bold text-indigo-600">{{ calculateProgress(tasks) }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        class="bg-linear-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
        :style="{ width: `${calculateProgress(tasks)}%` }"
      ></div>
    </div>
  </div>
</template>
