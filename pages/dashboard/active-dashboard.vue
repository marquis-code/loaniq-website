<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Filters -->
      <div class="col-span-1 lg:col-span-3 flex justify-between items-center">
        <DateRangePicker />
        <DropdownFilter :options="tenantOptions" @update:filter="filterTenants" />
        <DropdownFilter :options="propertyOptions" @update:filter="filterProperties" />
      </div>
  
      <!-- Users Section -->
      <Card title="Users">
        <UsersStats />
      </Card>
  
      <!-- Signups Chart -->
      <Card title="Sign ups">
        <SignupsChart />
      </Card>
  
      <!-- App Downloads Section -->
      <Card title="App Downloads">
        <AppDownloads />
      </Card>
  
      <!-- Revenue Chart -->
      <Card title="Revenue">
        <RevenueChart />
      </Card>
  
      <!-- Occupancy Rate Chart -->
      <Card title="Occupancy rate">
        <OccupancyRateChart />
      </Card>
  
      <!-- Property Data Table -->
      <Card title="Property Data">
        <PropertyDataTable :filter="currentPropertyFilter" />
      </Card>
    </div>
  </template>
  
  <script setup>
  import Card from '~/components/Card.vue';
  import UsersStats from '~/components/UsersStats.vue';
  import SignupsChart from '~/components/SignupsChart.vue';
  import AppDownloads from '~/components/AppDownloads.vue';
  import RevenueChart from '~/components/RevenueChart.vue';
  import OccupancyRateChart from '~/components/OccupancyRateChart.vue';
  import PropertyDataTable from '~/components/PropertyDataTable.vue';
  import DateRangePicker from '~/components/DateRangePicker.vue';
  import DropdownFilter from '~/components/DropdownFilter.vue';
  
  const tenantOptions = ['All tenants', 'Tenant A', 'Tenant B', 'Tenant C'];
  const propertyOptions = ['All properties', 'Property A', 'Property B', 'Property C'];
  
  const currentPropertyFilter = ref('All properties');
  
  function filterTenants(selectedTenant) {
    console.log('Selected Tenant:', selectedTenant);
  }
  
  function filterProperties(selectedProperty) {
    currentPropertyFilter.value = selectedProperty;
    console.log('Selected Property:', selectedProperty);
  }

  definePageMeta({
    layout: "dashboard",
    });
  </script>
  