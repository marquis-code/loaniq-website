<template>
    <div class="grid grid-cols-2 gap-4">
      <StatCard
        title="New users"
        :value="300"
        percentageChange="6%"
        changeType="increase"
      />
      <StatCard
        title="Active users"
        :value="100"
        percentageChange="6%"
        changeType="decrease"
      />
      <StatCard
        title="Non-active users"
        :value="200"
        percentageChange="6%"
        changeType="decrease"
      />
      <StatCard
        title="Deleted accounts"
        :value="16"
        percentageChange="6%"
        changeType="increase"
      />
    </div>
  </template>
  
  <script setup>
  import StatCard from '~/components/StatCard.vue';
  </script>
  