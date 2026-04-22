<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <div class="fixed bottom-8 right-8">
    <button
      class="group flex items-center justify-center w-16 h-16 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      @click="emit('click')"
    >
      <PlusOutlined class="text-3xl" />
    </button>
  </div>
</template>
