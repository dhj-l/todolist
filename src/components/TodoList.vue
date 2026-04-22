<script setup lang="ts">
import type { Task } from '@/utils/helpers'
import TodoItem from './TodoItem.vue'

defineProps<{
  tasks: Task[]
}>()

const emit = defineEmits<{
  toggle: [id: number]
  edit: [id: number]
  delete: [id: number]
}>()
</script>

<template>
  <div class="grid gap-4">
    <TodoItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="emit('toggle', $event)"
      @edit="emit('edit', $event)"
      @delete="emit('delete', $event)"
    />
  </div>
</template>
