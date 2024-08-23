<template>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="px-4 py-2">Property Name</th>
          <th class="px-4 py-2">Manager/Agent</th>
          <th class="px-4 py-2">Searches</th>
          <th class="px-4 py-2">Favourites</th>
          <th class="px-4 py-2">Applications</th>
          <th class="px-4 py-2">Approved</th>
          <th class="px-4 py-2">Rejected</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="property in filteredProperties"
          :key="property.name"
          class="text-center"
        >
          <td class="border px-4 py-2">{{ property.name }}</td>
          <td class="border px-4 py-2">{{ property.manager }}</td>
          <td class="border px-4 py-2">{{ property.searches }}</td>
          <td class="border px-4 py-2">{{ property.favourites }}</td>
          <td class="border px-4 py-2">{{ property.applications }}</td>
          <td class="border px-4 py-2">{{ property.approved }}</td>
          <td class="border px-4 py-2">{{ property.rejected }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { computed, defineProps } from 'vue';
  
  const prop = defineProps({
    filter: String,
  });
  
  const properties = ref([
    {
      name: 'Gerlach Inc',
      manager: 'Kellie Gleason',
      searches: 8,
      favourites: 8,
      applications: 8,
      approved: 8,
      rejected: 8,
    },
    {
      name: 'Block, Kovacek and O\'Conner',
      manager: 'Delbert Schaefer',
      searches: 8,
      favourites: 8,
      applications: 8,
      approved: 8,
      rejected: 8,
    },
    {
      name: 'Goodwin, Hamill and Keebler',
      manager: 'Tammy Schiller',
      searches: 8,
      favourites: 8,
      applications: 8,
      approved: 8,
      rejected: 8,
    },
    {
      name: 'Wolff, Price and Dickinson',
      manager: 'Raymond Jast',
      searches: 8,
      favourites: 8,
      applications: 8,
      approved: 8,
      rejected: 8,
    },
    {
      name: 'Krajcik - Strosin',
      manager: 'Winifred Ebert',
      searches: 8,
      favourites: 8,
      applications: 8,
      approved: 8,
      rejected: 8,
    },
  ])
  
//   const filteredProperties = computed(() =>
//     properties.value.filter((property) => filter === 'All properties' ? true : property.name === filter
//     )
//   );

const filteredProperties = computed(() => properties.value.filter((property) => prop.filter === 'All properties' ? true : property.name === prop.filter));
  </script>
  