<script setup lang="ts">
import { ref } from 'vue'

type FilterType = 'all' | 'pending' | 'completed' | 'high'

const activeFilter = ref<FilterType>('all')

const emit = defineEmits<{
  filterChange: [filter: FilterType]
}>()

const filters: { type: FilterType; label: string }[] = [
  { type: 'all', label: '全部任务' },
  { type: 'pending', label: '待完成' },
  { type: 'completed', label: '已完成' },
  { type: 'high', label: '高优先级' }
]

function handleFilterChange(filter: FilterType) {
  activeFilter.value = filter
  emit('filterChange', filter)
}
</script>

<template>
  <div class="flex gap-3 mb-6 overflow-x-auto pb-2">
    <button
      v-for="filter in filters"
      :key="filter.type"
      class="px-5 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap"
      :class="activeFilter === filter.type 
        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-200 hover:shadow-lg' 
        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'"
      @click="handleFilterChange(filter.type)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>
