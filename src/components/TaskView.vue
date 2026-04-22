<script setup lang="ts">
import TaskList from './TaskList.vue'
import { FilterOutlined, SortAscendingOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { Button, Input } from 'ant-design-vue'

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
</script>

<template>
  <main class="flex-1 overflow-y-auto bg-[#f8f9fc]">
    <div class="px-8 pt-8 pb-4">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold text-[#1a1a2e]">全部任务</h1>
        <div class="flex items-center gap-6">
          <Button type="text" class="text-[#4a4a68]! hover:text-[#4f6ef7]! px-2!">
            <template #icon>
              <FilterOutlined class="text-sm" />
            </template>
            筛选
          </Button>
          <Button type="text" class="text-[#4a4a68]! hover:text-[#4f6ef7]! px-2!">
            <template #icon>
              <SortAscendingOutlined class="text-sm" />
            </template>
            排序
          </Button>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-[#ebeef5] shadow-sm mb-3">
        <Input placeholder="添加新任务..." class="border-none! shadow-none!" size="large">
          <template #prefix>
            <PlusOutlined class="text-[#d0d3dd]" />
          </template>
        </Input>
      </div>

      <TaskList :tasks="tasks" />
    </div>
  </main>
</template>

<style scoped>
:deep(.ant-input) {
  border-radius: 0;
  font-size: 14px;
  color: #4a4a68;
}
:deep(.ant-input::placeholder) {
  color: #b0b3c7;
}
:deep(.ant-input-prefix) {
  margin-right: 12px;
}
:deep(.ant-btn-text:hover) {
  background-color: transparent !important;
}
</style>
