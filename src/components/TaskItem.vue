<script setup lang="ts">
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
  '工作': 'bg-blue-100 text-blue-600',
  '学习': 'bg-green-100 text-green-600',
  '生活': 'bg-purple-100 text-purple-600',
  '健康': 'bg-amber-100 text-amber-600'
}

defineProps<TaskItemProps>()
</script>

<template>
  <div
    class="flex items-center gap-4 px-5 py-3.5 hover:bg-[#fafbfd] transition-colors border-b border-[#f3f4f8] last:border-b-0 group"
    :class="{ 'opacity-50': completed }"
  >
    <label class="flex items-center gap-4 flex-1 min-w-0 cursor-pointer">
      <span
        class="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all"
        :class="completed
          ? 'bg-[#4f6ef7] border-[#4f6ef7]'
          : 'border-[#d0d3dd] hover:border-[#4f6ef7] group-hover:border-[#4f6ef7]'"
      >
        <svg v-if="completed" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </span>

      <span
        class="text-sm font-medium truncate transition-all"
        :class="completed ? 'line-through text-[#b0b3c7]' : 'text-[#1a1a2e]'"
      >
        {{ title }}
      </span>

      <span
        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0"
        :class="categoryColors[category] || 'bg-gray-100 text-gray-600'"
      >
        {{ category }}
      </span>
    </label>

    <div class="flex items-center gap-4 flex-shrink-0">
      <span class="text-xs font-medium whitespace-nowrap" :class="completed ? 'text-[#d0d3dd]' : 'text-[#8c8fa3]'">
        {{ date }}
        <template v-if="time">{{ time }}</template>
      </span>

      <button class="opacity-0 group-hover:opacity-100 transition-opacity" :class="completed ? 'text-[#d0d3dd]' : ''">
        <svg v-if="isRecurring" class="w-4 h-4 text-[#b0b3c7] hover:text-[#4f6ef7] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" :class="isStarred ? 'text-[#f56c6c]' : 'text-[#d0d3dd] hover:text-[#f56c6c]'">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isStarred
            ? 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
            : 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'" />
        </svg>
      </button>
    </div>
  </div>
</template>
