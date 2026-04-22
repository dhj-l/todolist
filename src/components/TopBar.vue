<script setup lang="ts">
import { SearchOutlined, BellOutlined } from '@ant-design/icons-vue'
import { Input, Dropdown, Badge, Avatar } from 'ant-design-vue'

const userMenuItems = [
  { key: 'profile', label: '个人中心' },
  { key: 'settings', label: '设置' },
  { key: 'divider', type: 'divider' as const },
  { key: 'logout', label: '退出登录' },
]
</script>

<template>
  <header
    class="h-16 bg-white border-b border-[#ebeef5] flex items-center justify-between px-8 shrink-0"
  >
    <div class="flex items-center flex-1 max-w-sm">
      <Input placeholder="搜索任务..." class="w-full" size="middle">
        <template #prefix>
          <SearchOutlined class="text-[#b0b3c7]" />
        </template>
      </Input>
    </div>

    <div class="flex items-center gap-5">
      <Badge :count="1" :offset="[0, 4]">
        <button class="text-[#8c8fa3] hover:text-[#4a4a68] transition-colors p-1">
          <BellOutlined class="text-lg" />
        </button>
      </Badge>

      <Dropdown :menu="{ items: userMenuItems }" placement="bottomRight">
        <div class="flex items-center gap-2.5 cursor-pointer">
          <Avatar size="small" style="background-color: #4f6ef7">A</Avatar>
          <span class="text-sm font-medium text-[#1a1a2e]">Alex</span>
        </div>
      </Dropdown>
    </div>
  </header>
</template>

<style scoped>
:deep(.ant-input) {
  border-radius: 12px;
  background-color: #f8f9fc;
  border-color: #ebeef5;
  font-size: 14px;
  color: #4a4a68;
}
:deep(.ant-input:focus),
:deep(.ant-input-focused) {
  background-color: #fff;
  border-color: #4f6ef7;
}
:deep(.ant-input-prefix) {
  margin-right: 8px;
}
:deep(.ant-input::placeholder) {
  color: #b0b3c7;
}
:deep(.ant-badge-count) {
  min-width: 8px;
  height: 8px;
  padding: 0;
  font-size: 0;
  background: #f56c6c;
}
</style>
