<template>
  <div class="bg-white rounded-xl border border-[#ebeef5] shadow-sm p-6">
    <div class="flex items-center justify-between">
      <Statistic
        :value="value"
        :value-style="valueStyle"
        :suffix="suffix"
        :title="title"
        class="stat-card"
      />
      <div v-if="showProgress" ref="chartRef" class="w-14 h-14"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Statistic } from 'ant-design-vue'
import { ref, onMounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'

interface Props {
  value: number | string
  title: string
  suffix?: string
  color?: string
  showProgress?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: '#1a1a2e',
  showProgress: false,
})

const chartRef = ref<HTMLElement | null>(null)
let chartInstance: echarts.ECharts | null = null

const valueStyle = {
  fontSize: props.showProgress ? '24px' : '30px',
  fontWeight: 'bold',
  color: props.color,
}

const initChart = () => {
  if (!chartRef.value) return
  chartInstance = echarts.init(chartRef.value)
  updateChart()
}

const updateChart = () => {
  if (!chartInstance) return
  const progressValue = Number(props.value)
  chartInstance.setOption({
    series: [
      {
        type: 'pie',
        radius: ['70%', '90%'],
        avoidLabelOverlap: false,
        silent: true,
        label: { show: false },
        data: [
          {
            value: progressValue,
            itemStyle: { color: '#22c55e' },
          },
          {
            value: 100 - progressValue,
            itemStyle: { color: '#f0f1f5' },
          },
        ],
      },
    ],
  })
}

onMounted(() => {
  initChart()
})

watch(
  () => props.value,
  () => {
    nextTick(() => {
      updateChart()
    })
  },
)
</script>

<style scoped>
:deep(.ant-statistic-title) {
  color: #8c8fa3;
  font-size: 14px;
  margin-top: 4px;
}

:deep(.ant-statistic-content) {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
</style>
