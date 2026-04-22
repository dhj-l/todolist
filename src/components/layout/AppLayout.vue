<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import TopBar from '@/components/TopBar.vue'
import TaskView from '@/components/TaskView.vue'
</script>

<template>
  <div class="flex h-screen bg-[#f8f9fc]">
    <Sidebar />
    <div class="flex-1 flex flex-col min-w-0">
      <TopBar />
      <TaskView />
    </div>
  </div>
</template>
