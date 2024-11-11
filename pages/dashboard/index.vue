<template>
    <DashboardOverview :profileObj="profileInfoObj" :loading="loading" />
  </template>
  
  <script setup lang="ts">
  import { useFetchStats } from '@/composables/modules/dashboard/fetchStats'
  const { loading, profileInfoObj } = useFetchStats()
 definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
 })
  </script>