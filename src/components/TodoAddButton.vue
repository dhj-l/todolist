<script setup lang="ts">
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
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4v16m8-8H4"
        ></path>
      </svg>
    </button>
  </div>
</template>
