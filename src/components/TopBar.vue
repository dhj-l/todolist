<script setup lang="ts">
import { SearchOutlined, BellOutlined, DownOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <header
    class="h-16 bg-white border-b border-[#ebeef5] flex items-center justify-between px-8 flex-shrink-0"
  >
    <div class="flex items-center flex-1 max-w-sm">
      <div class="relative w-full">
        <SearchOutlined class="absolute left-3 top-1/2 -translate-y-1/2 text-[#b0b3c7] text-sm" />
        <input
          type="text"
          placeholder="搜索任务..."
          class="w-full pl-10 pr-4 py-2 bg-[#f8f9fc] border border-[#ebeef5] rounded-xl text-sm text-[#4a4a68] placeholder-[#b0b3c7] outline-none focus:border-[#4f6ef7] focus:bg-white transition-colors"
        />
      </div>
    </div>

    <div class="flex items-center gap-5">
      <button class="relative text-[#8c8fa3] hover:text-[#4a4a68] transition-colors">
        <BellOutlined class="text-lg" />
        <span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#f56c6c] rounded-full" />
      </button>

      <div class="flex items-center gap-2.5 cursor-pointer">
        <div
          class="w-8 h-8 bg-[#4f6ef7] rounded-full flex items-center justify-center text-white text-xs font-semibold"
        >
          A
        </div>
        <span class="text-sm font-medium text-[#1a1a2e]">Alex</span>
        <DownOutlined class="text-xs text-[#b0b3c7]" />
      </div>
    </div>
  </header>
</template>
