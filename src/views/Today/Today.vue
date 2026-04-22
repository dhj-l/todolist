<template>
  <div class="mt-10 px-10">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6 px-10">
      <div>
        <h1 class="text-3xl font-bold text-[#1a1a2e] mb-1">今天</h1>
        <p class="text-sm text-[#8c8fa3]">6月2日 星期日</p>
      </div>
      <div class="flex items-center gap-3">
        <button
          class="flex items-center gap-1 text-sm text-[#8c8fa3] hover:text-[#4a4a68] transition-colors"
        >
          <FundOutlined
            :style="{
              color: '#8c8fa3',
            }"
          />
          <span>筛选</span>
        </button>
        <button
          class="flex items-center gap-1 text-sm text-[#8c8fa3] hover:text-[#4a4a68] transition-colors"
        >
          <OrderedListOutlined />
          <span>排序</span>
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-3 gap-4 mb-6">
      <StatCard :value="pendingCount" title="待完成" suffix="任务" color="#4f6ef7" />
      <StatCard :value="completedCount" title="已完成" suffix="任务" color="#22c55e" />
      <StatCard :value="progress" title="完成进度" suffix="%" :show-progress="true" />
    </div>

    <!-- Task List -->
    <TaskList :tasks="tasks" title="任务列表" />
  </div>
</template>

<script setup lang="ts">
import TaskList from '@/components/TaskList.vue'
import StatCard from '@/components/StatCard.vue'
import type { Task } from '@/components/TaskList.vue'
import { FundOutlined, OrderedListOutlined } from '@ant-design/icons-vue'
import { computed } from 'vue'

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

const pendingCount = computed(() => tasks.filter((t) => !t.completed).length)
const completedCount = computed(() => tasks.filter((t) => t.completed).length)
const progress = computed(() => Math.round((completedCount.value / tasks.length) * 100))
</script>

<style scoped></style>
