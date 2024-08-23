<template>
    <div>
      <canvas ref="chart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Chart } from 'chart.js';
  
  const chart = ref(null);
  
  onMounted(() => {
    new Chart(chart.value, {
      type: 'bar',
      data: {
        labels: [...Array(30).keys()],
        datasets: [
          {
            label: 'Users',
            data: [200, 400, 600, 800, 1000, 1200],
            backgroundColor: 'rgba(59, 130, 246, 0.5)',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
  </script>
  
  <style scoped>
  /* Custom styles here */
  </style>
  