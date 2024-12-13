<!-- components/LineChart.vue -->
<template>
    <div class="w-full h-full">
      <ClientOnly>
        <VueApexCharts
          type="line"
          :options="chartOptions"
          :series="series"
          height="100%"
        />
      </ClientOnly>
    </div>
  </template>
  
  <script setup lang="ts">
  import VueApexCharts from 'vue3-apexcharts';
  import { computed } from 'vue';
  
  const props = defineProps<{
    data: Array<{ year: string; value: number }>
  }>();
  
  const series = computed(() => [{
    name: 'Investment Returns',
    data: props.data.map(item => item.value)
  }]);
  
  const chartOptions = computed(() => ({
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: ['#0D9488'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      categories: props.data.map(item => item.year),
      labels: {
        style: {
          colors: '#9CA3AF'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        formatter: (value: number) => `$${value/1000000}M`,
        style: {
          colors: '#9CA3AF'
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 4
    },
    tooltip: {
      theme: 'light',
      x: {
        show: false
      },
      y: {
        formatter: (value: number) => `$${(value/1000000).toFixed(1)}M`
      }
    }
  }));
  </script>