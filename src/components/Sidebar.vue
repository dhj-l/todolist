<script setup lang="ts">
import {
  CheckCircleOutlined,
  UnorderedListOutlined,
  CalendarOutlined,
  StarOutlined,
  PlayCircleOutlined,
  CheckSquareOutlined,
  CiOutlined,
  PlusOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface NavItem {
  icon: any
  label: string
  count: number
  path?: string
}

interface ListCategory {
  color: string
  label: string
  count: number
}

const route = useRoute()
const router = useRouter()
const currentPath = ref(route.path)

watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath
  },
)

const mainNavItems: NavItem[] = [
  { icon: UnorderedListOutlined, label: '全部任务', count: 12, path: '/all' },
  { icon: CalendarOutlined, label: '今天', count: 5, path: '/today' },
  { icon: StarOutlined, label: '重要', count: 3, path: '/important' },
  { icon: PlayCircleOutlined, label: '进行中', count: 4, path: '/ongoing' },
  { icon: CheckSquareOutlined, label: '已完成', count: 8, path: '/completed' },
  { icon: CiOutlined, label: '已归档', count: 2, path: '/archived' },
]

const categories: ListCategory[] = [
  { color: 'bg-blue-500', label: '工作', count: 6 },
  { color: 'bg-green-500', label: '学习', count: 3 },
  { color: 'bg-purple-500', label: '生活', count: 2 },
  { color: 'bg-amber-500', label: '健康', count: 1 },
]

const handleChangePath = (path: string) => {
  router.push(path)
}
</script>

<template>
  <aside
    class="w-[260px] bg-[#f8f9fc] border-r border-[#ebeef5] flex flex-col h-screen overflow-y-auto shrink-0"
  >
    <div class="px-5 pt-6 pb-5">
      <div class="flex items-center gap-2.5 mb-8">
        <div class="w-9 h-9 bg-[#4f6ef7] rounded-xl flex items-center justify-center">
          <CheckCircleOutlined class="text-white text-base" />
        </div>
        <div>
          <div class="text-base font-bold text-[#1a1a2e] leading-tight">My Todo</div>
          <div class="text-[11px] text-[#8c8fa3] leading-tight">让每一天更有条理</div>
        </div>
      </div>

      <nav class="space-y-1">
        <a
          v-for="item in mainNavItems"
          :key="item.label"
          href="#"
          class="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          :class="
            item.path === currentPath
              ? 'bg-[#4f6ef7] text-white'
              : 'text-[#4a4a68] hover:bg-[#eef0f7]'
          "
          @click="handleChangePath(item.path!)"
        >
          <div class="flex items-center gap-3">
            <component
              :is="item.icon"
              :class="item.path === currentPath ? 'text-white' : 'text-[#8c8fa3]'"
              class="text-sm"
            />
            <span>{{ item.label }}</span>
          </div>
          <span
            class="text-xs"
            :class="item.path === currentPath ? 'text-white/80' : 'text-[#b0b3c7]'"
            >{{ item.count }}</span
          >
        </a>
      </nav>

      <div class="border-t border-[#ebeef5] my-5" />

      <div class="flex items-center justify-between px-3 mb-2">
        <span class="text-xs font-semibold text-[#8c8fa3] uppercase tracking-wide">清单</span>
        <button class="text-[#b0b3c7] hover:text-[#4f6ef7] transition-colors">
          <PlusOutlined class="text-sm" />
        </button>
      </div>

      <ul class="space-y-0.5">
        <li
          v-for="cat in categories"
          :key="cat.label"
          class="flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-[#4a4a68] hover:bg-[#eef0f7] cursor-pointer transition-colors"
        >
          <div class="flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full" :class="cat.color" />
            <span>{{ cat.label }}</span>
          </div>
          <span class="text-xs text-[#b0b3c7]">{{ cat.count }}</span>
        </li>
      </ul>
    </div>

    <div class="mt-auto px-5 pb-6">
      <div class="bg-[#eef0f7] rounded-2xl p-5 text-center mb-6">
        <div class="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
          <UnorderedListOutlined class="text-[#4f6ef7]/20 text-6xl" />
        </div>
        <div class="text-sm font-semibold text-[#1a1a2e] mb-1">高效从规划开始</div>
        <div class="text-xs text-[#8c8fa3] mb-3">坚持记录，养成好习惯</div>
        <a href="#" class="text-xs font-medium text-[#4f6ef7] hover:underline">了解更多 →</a>
      </div>

      <div class="border-t border-[#ebeef5] pt-4">
        <a
          href="#"
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#4a4a68] hover:bg-[#eef0f7] transition-colors"
        >
          <SettingOutlined class="text-sm text-[#8c8fa3]" />
          <span>设置</span>
        </a>
      </div>
    </div>
  </aside>
</template>
