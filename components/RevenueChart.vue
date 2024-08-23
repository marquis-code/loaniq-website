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
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Income',
            data: [400, 300, 400, 300, 400, 350, 370, 400, 390, 410, 420, 430],
            borderColor: 'rgba(34, 197, 94, 0.8)',
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            fill: true,
          },
          {
            label: 'Expense',
            data: [200, 250, 200, 250, 200, 230, 210, 220, 230, 240, 250, 260],
            borderColor: 'rgba(239, 68, 68, 0.8)',
            backgroundColor: 'rgba(239, 68, 68, 0.2)',
            fill: true,
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
  