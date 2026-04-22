<script setup lang="ts">
interface NavItem {
  icon: string
  label: string
  count: number
  active?: boolean
}

interface ListCategory {
  color: string
  label: string
  count: number
}

const mainNavItems: NavItem[] = [
  { icon: 'list', label: '全部任务', count: 12, active: true },
  { icon: 'sun', label: '今天', count: 5 },
  { icon: 'star', label: '重要', count: 3 },
  { icon: 'play', label: '进行中', count: 4 },
  { icon: 'check', label: '已完成', count: 8 },
  { icon: 'archive', label: '已归档', count: 2 }
]

const categories: ListCategory[] = [
  { color: 'bg-blue-500', label: '工作', count: 6 },
  { color: 'bg-green-500', label: '学习', count: 3 },
  { color: 'bg-purple-500', label: '生活', count: 2 },
  { color: 'bg-amber-500', label: '健康', count: 1 }
]
</script>

<template>
  <aside class="w-[260px] bg-[#f8f9fc] border-r border-[#ebeef5] flex flex-col h-screen overflow-y-auto flex-shrink-0">
    <div class="px-5 pt-6 pb-5">
      <div class="flex items-center gap-2.5 mb-8">
        <div class="w-9 h-9 bg-[#4f6ef7] rounded-xl flex items-center justify-center">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
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
          :class="item.active ? 'bg-[#4f6ef7] text-white' : 'text-[#4a4a68] hover:bg-[#eef0f7]'"
        >
          <div class="flex items-center gap-3">
            <span :class="item.active ? 'text-white' : 'text-[#8c8fa3]'">
              <svg v-if="item.icon === 'list'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else-if="item.icon === 'sun'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" stroke-width="2" />
                <path stroke-linecap="round" stroke-width="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              <svg v-else-if="item.icon === 'star'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <svg v-else-if="item.icon === 'play'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <circle cx="12" cy="12" r="10" stroke-width="2" />
              </svg>
              <svg v-else-if="item.icon === 'check'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else-if="item.icon === 'archive'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </span>
            <span>{{ item.label }}</span>
          </div>
          <span class="text-xs" :class="item.active ? 'text-white/80' : 'text-[#b0b3c7]'">{{ item.count }}</span>
        </a>
      </nav>

      <div class="border-t border-[#ebeef5] my-5" />

      <div class="flex items-center justify-between px-3 mb-2">
        <span class="text-xs font-semibold text-[#8c8fa3] uppercase tracking-wide">清单</span>
        <button class="text-[#b0b3c7] hover:text-[#4f6ef7] transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
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
          <svg class="w-16 h-16 text-[#4f6ef7]/20" viewBox="0 0 64 64" fill="currentColor">
            <rect x="14" y="10" width="36" height="44" rx="4" fill="none" stroke="currentColor" stroke-width="2" />
            <line x1="22" y1="22" x2="42" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <line x1="22" y1="30" x2="42" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <line x1="22" y1="38" x2="34" y2="38" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M38 42l6-6m0 0l-6 6m6-6H34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="text-sm font-semibold text-[#1a1a2e] mb-1">高效从规划开始</div>
        <div class="text-xs text-[#8c8fa3] mb-3">坚持记录，养成好习惯</div>
        <a href="#" class="text-xs font-medium text-[#4f6ef7] hover:underline">了解更多 →</a>
      </div>

      <div class="border-t border-[#ebeef5] pt-4">
        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#4a4a68] hover:bg-[#eef0f7] transition-colors">
          <svg class="w-4 h-4 text-[#8c8fa3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>设置</span>
        </a>
      </div>
    </div>
  </aside>
</template>
