<script setup lang="ts">
import type { Task } from '@/utils/helpers'

defineProps<{
  tasks: Task[]
}>()
</script>

<template>
  <header class="mb-8">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1
          class="text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"
        >
          我的待办事项
        </h1>
        <p class="text-gray-600">今天是个好日子，完成一些任务吧！</p>
      </div>
      <div class="flex items-center gap-4">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4">
          <div class="text-3xl font-bold text-indigo-600">
            {{ tasks.filter((t) => !t.completed).length }}
          </div>
          <div class="text-sm text-gray-500">待完成任务</div>
        </div>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-4">
          <div class="text-3xl font-bold text-green-600">
            {{ tasks.filter((t) => t.completed).length }}
          </div>
          <div class="text-sm text-gray-500">已完成</div>
        </div>
      </div>
    </div>
  </header>
</template>
