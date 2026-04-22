<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Task, FilterType } from '@/utils/helpers'
import TodoHeader from '@/components/TodoHeader.vue'
import TodoProgress from '@/components/TodoProgress.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'
import TodoAddButton from '@/components/TodoAddButton.vue'

const tasks = ref<Task[]>([
  {
    id: 1,
    title: '完成项目报告',
    description: '需要完成 Q4 季度的项目总结报告，包含数据分析和结论',
    dueDate: '2026-04-25',
    priority: 'high',
    completed: false,
    category: '工作'
  },
  {
    id: 2,
    title: '购买生活用品',
    description: '牛奶、面包、鸡蛋、水果等',
    dueDate: '2026-04-22',
    priority: 'medium',
    completed: false,
    category: '生活'
  },
  {
    id: 3,
    title: '健身锻炼',
    description: '去健身房进行 1 小时的有氧运动和力量训练',
    dueDate: '2026-04-21',
    priority: 'low',
    completed: true,
    category: '健康'
  },
  {
    id: 4,
    title: '学习 Vue 3',
    description: '完成 Vue 3 组合式 API 的进阶教程学习',
    dueDate: '2026-04-23',
    priority: 'high',
    completed: false,
    category: '学习'
  },
  {
    id: 5,
    title: '预约牙医',
    description: '预约下周的牙齿检查和清洁',
    dueDate: '2026-04-28',
    priority: 'medium',
    completed: false,
    category: '健康'
  },
  {
    id: 6,
    title: '准备会议演示',
    description: '准备周五团队会议的 PPT 演示文稿',
    dueDate: '2026-04-26',
    priority: 'high',
    completed: false,
    category: '工作'
  }
])

const currentFilter = ref<FilterType>('all')

const filteredTasks = computed<Task[]>(() => {
  switch (currentFilter.value) {
    case 'pending':
      return tasks.value.filter(task => !task.completed)
    case 'completed':
      return tasks.value.filter(task => task.completed)
    case 'high':
      return tasks.value.filter(task => task.priority === 'high')
    default:
      return tasks.value
  }
})

function handleToggleTask(id: number) {
  const task = tasks.value.find(t => t.id === id)
  if (task) {
    task.completed = !task.completed
  }
}

function handleEditTask(id: number) {
  console.log('编辑任务:', id)
}

function handleDeleteTask(id: number) {
  const index = tasks.value.findIndex(t => t.id === id)
  if (index !== -1) {
    tasks.value.splice(index, 1)
  }
}

function handleFilterChange(filter: FilterType) {
  currentFilter.value = filter
}

function handleAddTask() {
  console.log('添加新任务')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    <div class="container mx-auto px-4 py-8 max-w-6xl">
      <TodoHeader :tasks="tasks" />
      
      <TodoProgress :tasks="tasks" />
      
      <TodoFilter @filter-change="handleFilterChange" />
      
      <TodoList 
        :tasks="filteredTasks" 
        @toggle="handleToggleTask"
        @edit="handleEditTask"
        @delete="handleDeleteTask"
      />
      
      <TodoAddButton @click="handleAddTask" />
    </div>
  </div>
</template>
