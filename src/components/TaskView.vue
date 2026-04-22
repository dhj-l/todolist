<script setup lang="ts">
import TaskItem from './TaskItem.vue'
import { FilterOutlined, SortAscendingOutlined, PlusOutlined } from '@ant-design/icons-vue'

interface Task {
  title: string
  category: string
  date: string
  time?: string
  completed: boolean
  isStarred: boolean
  isRecurring?: boolean
}

const tasks: Task[] = [
  { title: '完成产品需求文档', category: '工作', date: '今天', completed: false, isStarred: true },
  {
    title: '开会：项目进度同步',
    category: '工作',
    date: '今天',
    time: '10:00',
    completed: false,
    isStarred: false,
  },
  { title: '回复客户邮件', category: '工作', date: '今天', completed: true, isStarred: false },
  {
    title: '学习 React 新特性',
    category: '学习',
    date: '明天',
    completed: false,
    isStarred: false,
  },
  {
    title: '阅读《设计模式》第三章',
    category: '学习',
    date: '明天',
    completed: false,
    isStarred: false,
  },
  {
    title: '去健身房锻炼',
    category: '健康',
    date: '6月2日',
    completed: false,
    isStarred: false,
    isRecurring: true,
  },
  {
    title: '超市采购生活用品',
    category: '生活',
    date: '6月2日',
    completed: false,
    isStarred: false,
  },
  { title: '准备周报', category: '工作', date: '6月3日', completed: false, isStarred: false },
  { title: '整理书桌', category: '生活', date: '6月3日', completed: false, isStarred: false },
  {
    title: '每日阅读 30 分钟',
    category: '学习',
    date: '5月30日',
    completed: true,
    isStarred: false,
  },
  {
    title: '喝 8 杯水',
    category: '健康',
    date: '5月30日',
    completed: true,
    isStarred: false,
    isRecurring: true,
  },
  { title: '早睡 23:00 前', category: '健康', date: '5月30日', completed: true, isStarred: false },
]

const totalCount = tasks.length
const completedCount = tasks.filter((t) => t.completed).length
</script>

<template>
  <main class="flex-1 overflow-y-auto bg-[#f8f9fc]">
    <div class="px-8 pt-8 pb-4">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold text-[#1a1a2e]">全部任务</h1>
        <div class="flex items-center gap-6">
          <button
            class="flex items-center gap-2 text-sm text-[#4a4a68] hover:text-[#4f6ef7] transition-colors"
          >
            <FilterOutlined class="text-sm" />
            筛选
          </button>
          <button
            class="flex items-center gap-2 text-sm text-[#4a4a68] hover:text-[#4f6ef7] transition-colors"
          >
            <SortAscendingOutlined class="text-sm" />
            排序
          </button>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-[#ebeef5] shadow-sm mb-3">
        <div class="flex items-center gap-3 px-5 py-3.5">
          <PlusOutlined class="text-[#d0d3dd] text-base shrink-0" />
          <input
            type="text"
            placeholder="添加新任务..."
            class="flex-1 text-sm text-[#4a4a68] placeholder-[#b0b3c7] outline-none bg-transparent"
          />
        </div>
      </div>

      <div class="bg-white rounded-xl border border-[#ebeef5] shadow-sm overflow-hidden">
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
      </div>

      <div class="text-center py-4">
        <p class="text-xs text-[#b0b3c7]">
          共 {{ totalCount }} 个任务，已完成 {{ completedCount }} 个
        </p>
      </div>
    </div>
  </main>
</template>
