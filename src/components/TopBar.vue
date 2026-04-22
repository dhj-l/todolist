<script setup lang="ts">
</script>

<template>
  <header class="h-16 bg-white border-b border-[#ebeef5] flex items-center justify-between px-8 flex-shrink-0">
    <div class="flex items-center flex-1 max-w-sm">
      <div class="relative w-full">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b0b3c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="搜索任务..."
          class="w-full pl-10 pr-4 py-2 bg-[#f8f9fc] border border-[#ebeef5] rounded-xl text-sm text-[#4a4a68] placeholder-[#b0b3c7] outline-none focus:border-[#4f6ef7] focus:bg-white transition-colors"
        />
      </div>
    </div>

    <div class="flex items-center gap-5">
      <button class="relative text-[#8c8fa3] hover:text-[#4a4a68] transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#f56c6c] rounded-full" />
      </button>

      <div class="flex items-center gap-2.5 cursor-pointer">
        <div class="w-8 h-8 bg-[#4f6ef7] rounded-full flex items-center justify-center text-white text-xs font-semibold">
          A
        </div>
        <span class="text-sm font-medium text-[#1a1a2e]">Alex</span>
        <svg class="w-3.5 h-3.5 text-[#b0b3c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </header>
</template>
